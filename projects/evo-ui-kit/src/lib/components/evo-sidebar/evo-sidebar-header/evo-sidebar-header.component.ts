import {booleanAttribute, Component, computed, inject, input, OnInit, output} from '@angular/core';
import {EvoSidebarCloseTargets} from '../enums/evo-sidebar-close-targets';
import {EvoSidebarToken} from "../evo-sidebar.token";
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

    backButton = input(false, {transform: booleanAttribute});

    readonly back = output<void>();
    readonly computedBackButton = computed(() => this.backButton() || this.sidebar.backButton());

    private readonly sidebar = inject(EvoSidebarToken);

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
