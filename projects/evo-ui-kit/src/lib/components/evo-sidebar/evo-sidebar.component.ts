import {
    ChangeDetectorRef,
    Component,
    computed,
    createComponent,
    DestroyRef,
    EnvironmentInjector,
    inject,
    Injector,
    input,
    NgZone,
    OnDestroy,
    OnInit,
    output,
    signal,
    Type,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {fromEvent, SubscriptionLike} from 'rxjs';
import {EvoSidebarService} from './evo-sidebar.service';
import {AnimationEvent} from '@angular/animations';
import {delay, filter, takeWhile, tap} from 'rxjs/operators';
import {enterZone} from '../../operators';
import {Location} from '@angular/common';
import {EvoSidebarParams, EvoSidebarState} from './interfaces';
import {EVO_SIDEBAR_DATA, evoSidebarRootId} from './tokens';
import {sidebarAnimation} from '../../common/animations/sidebar.animation';
import {EvoSidebarCloseTargets} from './enums/evo-sidebar-close-targets';
import {EvoSidebarStates} from './enums/evo-sidebar-states';
import {EvoSidebarSizes} from './enums/evo-sidebar-sizes';
import {EvoSidebarToken} from "./evo-sidebar.token";
import {EvoSidebarFooterComponent} from './evo-sidebar-footer/evo-sidebar-footer.component';
import {EvoSidebarContentComponent} from './evo-sidebar-content/evo-sidebar-content.component';
import {EvoSidebarHeaderComponent} from './evo-sidebar-header/evo-sidebar-header.component';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'evo-sidebar',
    styleUrls: ['./evo-sidebar.component.scss'],
    templateUrl: './evo-sidebar.component.html',
    animations: [sidebarAnimation],
    viewProviders: [
        {
            provide: EvoSidebarToken,
            useExisting: EvoSidebarComponent,
        },
    ],
    standalone: true,
    imports: [
        EvoUiClassDirective,
        EvoSidebarHeaderComponent,
        EvoSidebarContentComponent,
        EvoSidebarFooterComponent,
    ],
})
export class EvoSidebarComponent implements OnDestroy, OnInit {

    contentContainer = viewChild.required('sidebarContentContainer', {read: ViewContainerRef});

    backButton = input(false);
    id = input(evoSidebarRootId);
    header = input<string>();
    size = input(EvoSidebarSizes.NORMAL);
    relativeFooter = input(false);

    readonly back = output<void>();

    readonly closeTargets = EvoSidebarCloseTargets;
    readonly computedSize = computed(() => this.localSize() || this.size());
    readonly isDynamicContent = signal(false);
    readonly isVisible = signal(false);
    readonly localSize = signal<EvoSidebarSizes | null>(null);
    readonly totalClasses = computed(() => {
        const classes: string[] = [];

        if (this.isVisible()) {
            classes.push(EvoSidebarStates.VISIBLE);
        }

        classes.push(this.computedSize() ?? EvoSidebarSizes.NORMAL);
        return classes;
    })
    private readonly closeTarget = signal(EvoSidebarCloseTargets.DEFAULT);

    private locationSubscription: SubscriptionLike;

    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    private readonly environmentInjector = inject(EnvironmentInjector);
    private readonly location = inject(Location);
    private readonly sidebarService = inject(EvoSidebarService);
    private readonly zone = inject(NgZone);

    ngOnDestroy() {
        this.clearView();
        this.sidebarService.deregister(this.id());
        this.locationSubscription?.unsubscribe();
    }

    ngOnInit() {
        this.sidebarService.register(this.id());
        this.sidebarService
            .getEventsSubscription(this.id(), true)
            .pipe(
                // async hack to avoid "Expression has changed after it was checked" error
                delay(0),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((sidebarState: EvoSidebarState) => {
                const {isOpen, params} = sidebarState;

                if (isOpen) {
                    this.subscribeToKeyEvent();
                } else {
                    this.closeTarget.set(EvoSidebarCloseTargets.DEFAULT);
                }

                // Dynamic content strategy
                if (isOpen && params?.component) {
                    const {component, closeOnNavigation, size} = params;

                    this.isDynamicContent.set(true);
                    this.clearView();
                    this.insertComponent(component, params);

                    if (size) {
                        this.localSize.set(size);
                    }

                    if (!this.locationSubscription && closeOnNavigation !== false) {
                        this.closeOnLocationUpdates();
                    }
                }

                this.isVisible.set(isOpen);
                this.cdr.markForCheck();
            });
    }

    get currentState(): string {
        return this.isVisible() ? EvoSidebarStates.VISIBLE : EvoSidebarStates.HIDDEN;
    }

    closeSidebar(source: EvoSidebarCloseTargets) {
        this.isVisible.set(false);
        this.closeTarget.set(source);
    }

    handleAnimationDone(event: AnimationEvent) {
        const isClosed = event.fromState === EvoSidebarStates.VISIBLE;

        if (isClosed && !this.isVisible()) {
            this.sidebarService.close(this.id(), {closeTarget: this.closeTarget()});
            this.clearView();
            if (this.id() === evoSidebarRootId) {
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
                    takeWhile(() => this.isVisible()),
                    filter((event: KeyboardEvent) => event.code === 'Escape'),
                    enterZone(this.zone),
                    tap(() => this.closeSidebar(EvoSidebarCloseTargets.ESC)),
                )
                .subscribe();
        });
    }

    // eslint-disable-next-line
    private insertComponent(component: Type<unknown>, {data, injector}: EvoSidebarParams) {
        const dynamicComponentRef = createComponent(component, {
            environmentInjector: this.environmentInjector,
            elementInjector: Injector.create({
                providers: [
                    {
                        provide: EVO_SIDEBAR_DATA,
                        useValue: data,
                    },
                    {
                        provide: EvoSidebarToken,
                        useValue: this,
                    },
                ],
                parent: injector,
            }),
        });

        this.contentContainer().insert(dynamicComponentRef.hostView);
    }

    private clearView() {
        this.contentContainer().clear();
    }

    private closeOnLocationUpdates() {
        this.locationSubscription = this.location.subscribe(() => this.closeSidebar(EvoSidebarCloseTargets.DEFAULT));
    }
}
