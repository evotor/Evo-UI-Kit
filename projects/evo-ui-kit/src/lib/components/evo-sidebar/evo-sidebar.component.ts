// tslint:disable-next-line:max-line-length
import { Component, ComponentFactoryResolver, EventEmitter, forwardRef, InjectionToken, Injector, Input, NgZone, OnDestroy, OnInit, Output, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent as observableFromEvent } from 'rxjs';
import { Key } from 'ts-keycode-enum';
import { EvoSidebarService, EvoSidebarState } from './evo-sidebar.service';
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { delay, filter, takeWhile, tap } from 'rxjs/operators';
import { enterZone } from '../../operators';

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

const relativeFooterClass = 'relative-footer';

const EVO_SIDEBAR_DATA = new InjectionToken('EVO_SIDEBAR_DATA');

@Component({
    selector: 'evo-sidebar',
    styleUrls: ['./evo-sidebar.component.scss'],
    templateUrl: './evo-sidebar.component.html',
    animations: [
        trigger('open', [
            state('visible', style({
                transform: 'translateX(0px)',
            })),
            transition('hidden => visible', animate('500ms ease-out')),
            transition('visible => hidden', animate('500ms ease-in')),
        ]),
    ],
})
export class EvoSidebarComponent implements OnDestroy, OnInit {

    @ViewChild('sidebarContentContainer', { read: ViewContainerRef }) contentContainer: ViewContainerRef;

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

    constructor(
        private zone: NgZone,
        private componentFactoryResolver: ComponentFactoryResolver,
        public sidebarService: EvoSidebarService,
    ) {

    }

    ngOnDestroy() {
        this.sidebarService.deregister(this.id);
    }

    ngOnInit() {
        this.sidebarService.register(this.id);
        this.sidebarService.getEventsSubscription(this.id, true).pipe(
            // async hack to avoid "Expression has changed after it was checked" error
            delay(0),
        ).subscribe((sidebarState: EvoSidebarState) => {
            if (sidebarState.isOpen) {
                this.subscribeToKeyEvent();
            } else {
                this.closeTarget = EvoSidebarCloseTargets.DEFAULT;
            }

            // Dynamic content strategy
            if (sidebarState.params?.component) {
                const { component, data } = sidebarState.params;
                this.isDynamicContent = true;
                this.insertComponent(component, data);
            }

            this.isVisible = sidebarState.isOpen;
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

        if (this.relativeFooter) {
            classes.push(relativeFooterClass);
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
        }
    }

    handleBackClick() {
        this.back.emit();
    }

    private subscribeToKeyEvent() {
        this.zone.runOutsideAngular(() => {
            observableFromEvent(document.body, 'keyup').pipe(
                takeWhile(() => this.isVisible),
                filter((event: KeyboardEvent) => event.keyCode === Key.Escape),
                enterZone(this.zone),
                tap(() => this.closeSidebar(EvoSidebarCloseTargets.ESC)),
            ).subscribe();
        });
    }

    private insertComponent(component: Type<Component>, data: any) {
        this.contentContainer.clear();

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

        this.contentContainer.createComponent(componentFactory, 0, injector);
    }
}
