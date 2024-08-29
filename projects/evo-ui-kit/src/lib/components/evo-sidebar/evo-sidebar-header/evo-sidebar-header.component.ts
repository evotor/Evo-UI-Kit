import {Component, computed, inject, input, OnInit, output} from '@angular/core';
import {EvoSidebarCloseTargets} from '../enums/evo-sidebar-close-targets';
import {SidebarInjectionToken} from '../sidebar-injection-token';
import {EvoIconComponent} from '../../evo-icon/evo-icon.component';
import {EvoSidebarComponent} from "../evo-sidebar.component";

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

    backButton = input(false);

    readonly back = output<void>();
    readonly computedBackButton = computed(() => this.backButton() || this.sidebar.backButton());

    private readonly sidebar = inject<EvoSidebarComponent>(SidebarInjectionToken);

    ngOnInit() {
        if (!this.sidebar) {
            throw new Error(`EvoSidebarHeaderComponent must be used inside EvoSidebarComponent only!`);
        }
    }

    handleBackClick() {
        this.back.emit();
    }

    closeSidebar() {
        this.sidebar.closeSidebar(EvoSidebarCloseTargets.BUTTON);
    }
}
