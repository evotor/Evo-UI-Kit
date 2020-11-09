import { Component, Input, OnInit } from '@angular/core';
import { EvoSidebarCloseTargets, EvoSidebarComponent } from '../evo-sidebar.component';

@Component({
    selector: 'evo-sidebar-header, [evo-sidebar-header]',
    templateUrl: './evo-sidebar-header.component.html',
    styleUrls: ['./evo-sidebar-header.component.scss'],
    host: {
        'class': 'evo-sidebar__header',
    }
})
export class EvoSidebarHeaderComponent implements OnInit {


    @Input() backButton: boolean;

    constructor(
        private sidebar: EvoSidebarComponent,
    ) { }

    ngOnInit() {
        if (!this.sidebar) {
            throw new Error(`EvoSidebarHeaderComponent must be used inside EvoSidebarComponent only!`);
        }

        this.backButton = this.backButton ?? this.sidebar.backButton;
    }

    handleBackClick() {
        this.sidebar.handleBackClick();
    }

    closeSidebar() {
        this.sidebar.closeSidebar(EvoSidebarCloseTargets.BUTTON);
    }

}
