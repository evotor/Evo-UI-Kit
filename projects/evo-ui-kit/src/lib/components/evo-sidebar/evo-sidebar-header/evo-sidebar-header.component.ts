import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EvoSidebarCloseTargets} from '../enums';
import {AbstractSidebarSectionComponent} from '../classes/abstract-sidebar-section-component';

@Component({
    selector: 'evo-sidebar-header, [evo-sidebar-header]',
    templateUrl: './evo-sidebar-header.component.html',
    styleUrls: ['./evo-sidebar-header.component.scss'],
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'evo-sidebar__header',
    },
})
export class EvoSidebarHeaderComponent extends AbstractSidebarSectionComponent implements OnInit {
    @Input() backButton: boolean;

    @Output() back = new EventEmitter();

    ngOnInit(): void {
        this.backButton = this.backButton ?? this.hostSidebar?.backButton ?? false;
    }

    handleBackClick(): void {
        this.back.emit();
    }

    closeSidebar(): void {
        this.hostSidebar?.closeSidebar(EvoSidebarCloseTargets.BUTTON);
    }
}
