import {Directive, Inject, Injector} from '@angular/core';
import {EvoSidebarHostProviderService} from '../evo-sidebar-host-provider.service';
import {EvoSidebarComponent} from '../evo-sidebar.component';

@Directive()
export class AbstractSidebarChildComponent {
    protected hostProviderService: EvoSidebarHostProviderService;

    get hostSidebar(): EvoSidebarComponent | undefined {
        if (!this.hostProviderService?.hostSidebar) {
            throw new Error(`EvoSidebar: AbstractSidebarChildComponent must be used inside EvoSidebarComponent only!`);
        }

        return this.hostProviderService.hostSidebar;
    }

    constructor(protected readonly injector: Injector) {
        this.hostProviderService = injector.get(EvoSidebarHostProviderService);
    }
}
