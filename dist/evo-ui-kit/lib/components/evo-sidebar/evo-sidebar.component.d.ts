import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EvoSidebarService, EvoSidebarTypes } from './evo-sidebar.service';
export declare class EvoSidebarComponent implements OnDestroy, OnInit {
    sidebarService: EvoSidebarService;
    id: EvoSidebarTypes;
    title: string;
    onClose: EventEmitter<any>;
    keyUpSubscription: Subscription;
    states: {
        isVisible: boolean;
    };
    constructor(sidebarService: EvoSidebarService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    closeSidebar(): void;
    private subscribeToKeyEvent();
}
