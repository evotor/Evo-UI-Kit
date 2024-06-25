import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {EvoSidebarCloseTargets} from '../enums/evo-sidebar-close-targets';
import {SidebarInjectionToken} from '../sidebar-injection-token';
import {EvoIconComponent} from '../../evo-icon/evo-icon.component';

@Component({
    selector: 'evo-sidebar-header, [evo-sidebar-header]',
    templateUrl: './evo-sidebar-header.component.html',
    styleUrls: ['./evo-sidebar-header.component.scss'],
    // eslint-disable-next-line
    host: {
        class: 'evo-sidebar__header',
    },
    standalone: true,
    imports: [EvoIconComponent],
})
export class EvoSidebarHeaderComponent implements OnInit {
    @Input() backButton: boolean;

    @Output() back = new EventEmitter();

    // eslint-disable-next-line
    constructor(@Inject(SidebarInjectionToken) private sidebar: any) {}

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
