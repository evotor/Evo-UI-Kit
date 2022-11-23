import {Injectable} from '@angular/core';
import type {EvoSidebarComponent} from './evo-sidebar.component';

@Injectable()
export class EvoSidebarHostProviderService {
    private sidebarComponent: EvoSidebarComponent;

    get hostSidebar(): EvoSidebarComponent {
        return this.sidebarComponent;
    }

    registerHostSidebar(component: EvoSidebarComponent): void {
        this.sidebarComponent = component;
    }

    deregisterHostSidebar(): void {
        this.sidebarComponent = null;
    }
}
