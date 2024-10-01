import {booleanAttribute, Component, computed, inject, input, OnInit} from '@angular/core';
import {EvoSidebarToken} from "../evo-sidebar.token";

@Component({
    selector: 'evo-sidebar-content, [evo-sidebar-content]',
    templateUrl: './evo-sidebar-content.component.html',
    styleUrls: ['./evo-sidebar-content.component.scss'],
    standalone: true,
    // eslint-disable-next-line
    host: {
        class: 'evo-sidebar__content',
        '[class.evo-sidebar__content_relative-footer]': 'this.computedRelativeFooter()',
    },
})
export class EvoSidebarContentComponent implements OnInit {

    relativeFooter = input(false, {transform: booleanAttribute});

    readonly computedRelativeFooter = computed(() => this.relativeFooter() || this.sidebar.relativeFooter());

    private readonly sidebar = inject(EvoSidebarToken);

    ngOnInit() {
        if (!this.sidebar) {
            throw new Error(`EvoSidebarContentComponent must be used inside EvoSidebarComponent only!`);
        }
    }
}
