import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent as observableFromEvent, Subscription } from 'rxjs';
import { Key } from 'ts-keycode-enum';
import { EvoSidebarService, EvoSidebarState } from './evo-sidebar.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { delay, takeWhile } from 'rxjs/operators';

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
    ]
})
export class EvoSidebarComponent implements OnDestroy, OnInit {

    @Input() backButton: boolean;
    @Input() id: string;
    @Input() header: string;
    @Input() size: EvoSidebarSizes;
    @Input() relativeFooter: boolean;

    @Output() back: EventEmitter<void> = new EventEmitter<void>();

    isVisible = false;
    keyUpSubscription: Subscription;

    readonly closeTargets = EvoSidebarCloseTargets;

    private closeTarget: EvoSidebarCloseTargets = EvoSidebarCloseTargets.DEFAULT;

    constructor(
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
                this.keyUpSubscription = this.subscribeToKeyEvent();
            } else {
                this.closeTarget = EvoSidebarCloseTargets.DEFAULT;
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

    handleAnimationDone(event) {
        const isClosed = event.fromState === EvoSidebarStates.VISIBLE;

        if (isClosed && !this.isVisible) {
            this.sidebarService.close(this.id, {closeTarget: this.closeTarget});
        }
    }

    handleBackClick() {
        this.back.emit();
    }

    private subscribeToKeyEvent() {
        return observableFromEvent(document.body, 'keyup').pipe(
            takeWhile(() => this.isVisible),
        ).subscribe((event: KeyboardEvent) => {
            if (event.keyCode === Key.Escape) {
                this.closeSidebar(EvoSidebarCloseTargets.ESC);
            }
        });
    }
}
