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
        private parent: EvoSidebarComponent,
    ) { }

    ngOnInit() {
        if (!this.parent) {
            throw new Error(`EvoSidebarHeaderComponent must be used inside EvoSidebarComponent only!`);
        }

        this.backButton = this.backButton ?? this.parent.backButton;
    }

    handleBackClick() {
        this.parent.handleBackClick();
    }

    closeSidebar() {
        this.parent.closeSidebar(EvoSidebarCloseTargets.BUTTON);
    }

}
