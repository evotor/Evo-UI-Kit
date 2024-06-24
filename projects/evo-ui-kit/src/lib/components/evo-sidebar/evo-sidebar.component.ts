// eslint-disable-next-line:max-line-length
import {
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    Output,
    Type,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {fromEvent, Subject, SubscriptionLike} from 'rxjs';
import {EvoSidebarService} from './evo-sidebar.service';
import {AnimationEvent} from '@angular/animations';
import {delay, filter, takeUntil, takeWhile, tap} from 'rxjs/operators';
import {enterZone} from '../../operators';
import {Location} from '@angular/common';
import {EvoSidebarState} from './interfaces';
import {EVO_SIDEBAR_DATA, evoSidebarRootId} from './tokens';
import {sidebarAnimation} from '../../common/animations/sidebar.animation';
import {EvoSidebarCloseTargets} from './enums/evo-sidebar-close-targets';
import {EvoSidebarStates} from './enums/evo-sidebar-states';
import {EvoSidebarSizes} from './enums/evo-sidebar-sizes';
import {SidebarInjectionToken} from './sidebar-injection-token';
import {EvoSidebarFooterComponent} from './evo-sidebar-footer/evo-sidebar-footer.component';
import {EvoSidebarContentComponent} from './evo-sidebar-content/evo-sidebar-content.component';
import {EvoSidebarHeaderComponent} from './evo-sidebar-header/evo-sidebar-header.component';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';

@Component({
    selector: 'evo-sidebar',
    styleUrls: ['./evo-sidebar.component.scss'],
    templateUrl: './evo-sidebar.component.html',
    animations: [sidebarAnimation],
    viewProviders: [
        {
            provide: SidebarInjectionToken,
            useExisting: forwardRef(() => EvoSidebarComponent),
        },
    ],
    standalone: true,
    imports: [EvoUiClassDirective, EvoSidebarHeaderComponent, EvoSidebarContentComponent, EvoSidebarFooterComponent],
})
export class EvoSidebarComponent implements OnDestroy, OnInit {
    @ViewChild('sidebarContentContainer', {read: ViewContainerRef})
    contentContainer: ViewContainerRef;

    @Input() backButton: boolean;
    @Input() id: string;
    @Input() header: string;
    @Input() size: EvoSidebarSizes = EvoSidebarSizes.NORMAL;
    @Input() relativeFooter: boolean;

    @Output() back = new EventEmitter<void>();

    isVisible = false;

    isDynamicContent = false;

    readonly closeTargets = EvoSidebarCloseTargets;

    private closeTarget: EvoSidebarCloseTargets = EvoSidebarCloseTargets.DEFAULT;

    // eslint-disable-next-line
    private dynamicComponentRef: ComponentRef<any>;

    private locationSubscription: SubscriptionLike;

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly zone: NgZone,
        private readonly location: Location,
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        public sidebarService: EvoSidebarService,
        private readonly cdr: ChangeDetectorRef,
    ) {}

    ngOnDestroy() {
        this.clearView();
        this.sidebarService.deregister(this.id);
        this.locationSubscription?.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }

    ngOnInit() {
        if (!this.id) {
            this.id = evoSidebarRootId;
        }
        this.sidebarService.register(this.id);
        this.sidebarService
            .getEventsSubscription(this.id, true)
            .pipe(
                // async hack to avoid "Expression has changed after it was checked" error
                delay(0),
                takeUntil(this.destroy$),
            )
            .subscribe((sidebarState: EvoSidebarState) => {
                const {isOpen, params} = sidebarState;
                if (isOpen) {
                    this.subscribeToKeyEvent();
                } else {
                    this.closeTarget = EvoSidebarCloseTargets.DEFAULT;
                }

                // Dynamic content strategy
                if (isOpen && params?.component) {
                    const {component, closeOnNavigation, size, data} = params;
                    this.isDynamicContent = true;
                    this.insertComponent(component, data);
                    if (size) {
                        this.size = size;
                    }
                    if (!this.locationSubscription && closeOnNavigation !== false) {
                        this.closeOnLocationUpdates();
                    }
                }

                this.isVisible = isOpen;
                this.cdr.markForCheck();
            });
    }

    get currentState(): string {
        return this.isVisible ? EvoSidebarStates.VISIBLE : EvoSidebarStates.HIDDEN;
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.isVisible) {
            classes.push(EvoSidebarStates.VISIBLE);
        }

        classes.push(this.size ?? EvoSidebarSizes.NORMAL);

        return classes;
    }

    closeSidebar(source: EvoSidebarCloseTargets) {
        this.isVisible = false;
        this.closeTarget = source;
    }

    handleAnimationDone(event: AnimationEvent) {
        const isClosed = event.fromState === EvoSidebarStates.VISIBLE;

        if (isClosed && !this.isVisible) {
            this.sidebarService.close(this.id, {closeTarget: this.closeTarget});
            this.clearView();
            if (this.id === evoSidebarRootId) {
                this.sidebarService.deregister(evoSidebarRootId);
                this.sidebarService.cleanupDefaultHost();
            }
        }
    }

    handleBackClick() {
        this.back.emit();
    }

    private subscribeToKeyEvent() {
        this.zone.runOutsideAngular(() => {
            fromEvent(document.body, 'keyup')
                .pipe(
                    takeWhile(() => this.isVisible),
                    filter((event: KeyboardEvent) => event.code === 'Escape'),
                    enterZone(this.zone),
                    tap(() => this.closeSidebar(EvoSidebarCloseTargets.ESC)),
                )
                .subscribe();
        });
    }

    // eslint-disable-next-line
    private insertComponent(component: Type<any>, data: any) {
        this.clearView();

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory<Component>(component);

        const injector: Injector = Injector.create({
            providers: [
                {
                    provide: EVO_SIDEBAR_DATA,
                    useValue: data,
                },
                {
                    provide: SidebarInjectionToken,
                    useValue: this,
                },
            ],
        });

        this.dynamicComponentRef = this.contentContainer.createComponent(componentFactory, 0, injector);
    }

    private clearView() {
        if (!this.dynamicComponentRef) {
            return;
        }
        this.contentContainer.clear();
        this.dynamicComponentRef = null;
    }

    private closeOnLocationUpdates() {
        this.locationSubscription = this.location.subscribe(() => {
            this.closeSidebar(EvoSidebarCloseTargets.DEFAULT);
        });
    }
}
