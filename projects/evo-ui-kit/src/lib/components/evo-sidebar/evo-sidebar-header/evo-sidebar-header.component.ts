import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EvoSidebarCloseTargets, EvoSidebarComponent } from '../evo-sidebar.component';

@Component({
    selector: 'evo-sidebar-header, [evo-sidebar-header]',
    templateUrl: './evo-sidebar-header.component.html',
    styleUrls: ['./evo-sidebar-header.component.scss'],
    // eslint-disable-next-line
    host: {
        'class': 'evo-sidebar__header',
    }
})
export class EvoSidebarHeaderComponent implements OnInit {


    @Input() backButton: boolean;

    @Output() back = new EventEmitter();

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
        this.back.emit();
    }

    closeSidebar() {
        this.sidebar.closeSidebar(EvoSidebarCloseTargets.BUTTON);
    }

}
