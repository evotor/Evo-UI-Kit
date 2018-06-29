import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, fromEvent as observableFromEvent } from 'rxjs';
import { Key } from 'ts-keycode-enum';

import { EvoSidebarService, EvoSidebarTypes } from './evo-sidebar.service';


@Component({
    selector: 'evo-sidebar',
    styleUrls: [ './evo-sidebar.component.scss' ],
    templateUrl: './evo-sidebar.component.html',
})
export class EvoSidebarComponent implements OnDestroy, OnInit {
    @Input() id: EvoSidebarTypes;
    @Input() title: string;

    @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

    keyUpSubscription: Subscription;
    states = {
        isVisible: false,
    };

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

    closeSidebar() {
        this.sidebarService.close(this.id);
        this.onClose.emit();
    }

    private subscribeToKeyEvent() {
        return observableFromEvent(document.body, 'keyup').subscribe((event: KeyboardEvent) => {
            if (event.keyCode === Key.Escape) {
                this.sidebarService.close(this.id);
            }
        });
    }
}
