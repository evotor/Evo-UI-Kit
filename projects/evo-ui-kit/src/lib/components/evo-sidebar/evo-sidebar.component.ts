import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent as observableFromEvent, Subscription } from 'rxjs';
import { Key } from 'ts-keycode-enum';
import { EvoSidebarService, EvoSidebarState } from './evo-sidebar.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { takeWhile } from 'rxjs/operators';

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

    @Input() id: string;
    @Input() header: string;
    @Input() relativeFooter: boolean;

    isVisible = false;
    keyUpSubscription: Subscription;

    readonly closeTargets = EvoSidebarCloseTargets;

    private closeTarget: EvoSidebarCloseTargets;

    constructor(
        public sidebarService: EvoSidebarService,
    ) {

    }

    ngOnDestroy() {
        this.sidebarService.deregister(this.id);
    }

    ngOnInit() {
        this.sidebarService.register(this.id);
        this.sidebarService.getEventsSubscription(this.id, true).subscribe((sidebarState: EvoSidebarState) => {
            if (sidebarState.isOpen) {
                this.keyUpSubscription = this.subscribeToKeyEvent();
            } else if (this.isVisible) {
                this.closeSidebar(EvoSidebarCloseTargets.DEFAULT);
                return;
            }

            this.isVisible = sidebarState.isOpen;
        });
    }

    get currentState(): string {
        return this.isVisible ? EvoSidebarStates.VISIBLE : EvoSidebarStates.HIDDEN;
    }

    closeSidebar(source: EvoSidebarCloseTargets) {
        this.isVisible = false;
        this.closeTarget = source;
    }

    handleAnimationDone(event) {
        if (event.fromState === EvoSidebarStates.VISIBLE) {
            this.sidebarService.close(this.id, {closeTarget: this.closeTarget});
        }
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
