import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, fromEvent as observableFromEvent } from 'rxjs';

import { Key } from 'ts-keycode-enum';

import { EvoSidebarService } from './evo-sidebar.service';
import { DeprecateVariable } from '../../decorators/deprecate-variable.decorator';

export enum EvoSidebarCloseTargets {
    background = 'background',
    button = 'button',
}

@Component({
    selector: 'evo-sidebar',
    styleUrls: [ './evo-sidebar.component.scss' ],
    templateUrl: './evo-sidebar.component.html',
})
export class EvoSidebarComponent implements OnDestroy, OnInit {
    @Input() id: string;

    @DeprecateVariable
    @Input() title: string;
    @Input() header: string;
    @Input() relativeFooter: boolean;


    @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

    keyUpSubscription: Subscription;
    states = {
        isVisible: false,
    };

    readonly closeTargets = EvoSidebarCloseTargets;

    constructor(public sidebarService: EvoSidebarService) {}

    ngOnDestroy() {
        this.sidebarService.deregister(this.id);
    }

    ngOnInit() {
        this.sidebarService.register(this.id);

        this.sidebarService.isSidebarVisible$.subscribe((payload) => {
            if (this.id in payload) {
                this.states.isVisible = payload[this.id];
            }

            if (this.states.isVisible) {
                this.keyUpSubscription = this.subscribeToKeyEvent();
            } else if (this.keyUpSubscription) {
                this.keyUpSubscription.unsubscribe();
                this.keyUpSubscription = null;
            }
        });
    }

    closeSidebar(source: string) {
        this.sidebarService.close(this.id);
        this.onClose.emit(source);
    }

    private subscribeToKeyEvent() {
        return observableFromEvent(document.body, 'keyup').subscribe((event: KeyboardEvent) => {
            if (event.keyCode === Key.Escape) {
                this.sidebarService.close(this.id);
            }
        });
    }
}
