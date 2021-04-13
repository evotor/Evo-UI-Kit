// tslint:disable-next-line:max-line-length
import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Injector, Input, NgZone, OnDestroy, OnInit, Output, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject, SubscriptionLike } from 'rxjs';
import { EvoSidebarService } from './evo-sidebar.service';
import { AnimationEvent } from '@angular/animations';
import { delay, filter, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { enterZone } from '../../operators';
import { Location } from '@angular/common';
import { EvoSidebarState } from './interfaces';
import { evoSidebarRootId, EVO_SIDEBAR_DATA } from './tokens';
import { sidebarAnimation } from '../../common/animations/sidebar.animation';

export enum EvoSidebarCloseTargets {
    BACKGROUND = 'background',
    BUTTON = 'button',
    DEFAULT = 'default',
    ESC = 'escape',
}

export enum EvoSidebarStates {
    HIDDEN = 'hidden',
    VISIBLE = 'visible',
}

export enum EvoSidebarSizes {
    MIDDLE = 'middle',
    LARGE = 'large'
}

@Component({
    selector: 'evo-sidebar',
    styleUrls: ['./evo-sidebar.component.scss'],
    templateUrl: './evo-sidebar.component.html',
    animations: [ sidebarAnimation ],
})
export class EvoSidebarComponent implements OnDestroy, OnInit {

    @ViewChild('sidebarContentContainer', { read: ViewContainerRef })
    contentContainer: ViewContainerRef;

    @Input() backButton: boolean;
    @Input() id: string;
    @Input() header: string;
    @Input() size: EvoSidebarSizes;
    @Input() relativeFooter: boolean;

    @Output() back = new EventEmitter<void>();

    isVisible = false;

    isDynamicContent = false;

    readonly closeTargets = EvoSidebarCloseTargets;

    private closeTarget: EvoSidebarCloseTargets = EvoSidebarCloseTargets.DEFAULT;

    private dynamicComponentRef: ComponentRef<any>;

    private locationSubscription: SubscriptionLike;

    private destroy$ = new Subject();

    constructor(
        private zone: NgZone,
        private location: Location,
        private componentFactoryResolver: ComponentFactoryResolver,
        public sidebarService: EvoSidebarService,
    ) {

    }

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
        this.sidebarService.getEventsSubscription(this.id, true).pipe(
            // async hack to avoid "Expression has changed after it was checked" error
            delay(0),
            takeUntil(this.destroy$),
        ).subscribe((sidebarState: EvoSidebarState) => {
            const { isOpen, params } = sidebarState;
            if (isOpen) {
                this.subscribeToKeyEvent();
            } else {
                this.closeTarget = EvoSidebarCloseTargets.DEFAULT;
            }

            // Dynamic content strategy
            if (isOpen && params?.component) {
                const { component, closeOnNavigation, size, data } = params;
                this.isDynamicContent = true;
                this.insertComponent(component, data);
                if (size) {
                    this.size = size;
                }
                if (
                    !this.locationSubscription &&
                    closeOnNavigation !== false
                ) {
                    this.closeOnLocationUpdates();
                }
            }

            this.isVisible = isOpen;
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

        if (this.size) {
            classes.push(this.size);
        }

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
            fromEvent(document.body, 'keyup').pipe(
                takeWhile(() => this.isVisible),
                filter((event: KeyboardEvent) => event.code === 'Escape'),
                enterZone(this.zone),
                tap(() => this.closeSidebar(EvoSidebarCloseTargets.ESC)),
            ).subscribe();
        });
    }

    private insertComponent(component: Type<any>, data: any) {
        this.clearView();

        const componentFactory = this.componentFactoryResolver
            .resolveComponentFactory<Component>(component);

        const injector: Injector = Injector.create({
            providers: [{
                provide: EVO_SIDEBAR_DATA,
                useValue: data,
            }, {
                provide: EvoSidebarComponent,
                useValue: this
            }]
        });

        this.dynamicComponentRef = this.contentContainer
            .createComponent(componentFactory, 0, injector);
    }

    private clearView() {
        if (!this.dynamicComponentRef) {
            return;
        }
        this.contentContainer.clear();
        this.dynamicComponentRef = null;
    }

    private closeOnLocationUpdates() {
        this.locationSubscription = this.location
            .subscribe(() => {
                this.closeSidebar(EvoSidebarCloseTargets.DEFAULT);
            });
    }
}
