import {Directive} from '@angular/core';
import type {EvoSidebarComponent} from '../evo-sidebar.component';
import {EvoSidebarHostProviderService} from '../evo-sidebar-host-provider.service';

@Directive()
export class AbstractSidebarSectionComponent {
    get hostSidebar(): EvoSidebarComponent | undefined {
        if (!this.hostProvider.hostSidebar) {
            throw new Error(`EvoSidebar: sidebar section must be used inside EvoSidebarComponent only!`);
        }

        return this.hostProvider.hostSidebar;
    }

    constructor(private readonly hostProvider: EvoSidebarHostProviderService) {
    }
}
