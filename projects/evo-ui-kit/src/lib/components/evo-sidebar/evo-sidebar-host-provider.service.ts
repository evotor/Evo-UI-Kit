import {Injectable} from '@angular/core';
import {EvoSidebar} from './interfaces';

@Injectable()
export class EvoSidebarHostProviderService {
    private sidebarComponent: EvoSidebar;

    get hostSidebar(): EvoSidebar {
        return this.sidebarComponent;
    }

    registerHostSidebar(component: EvoSidebar): void {
        this.sidebarComponent = component;
    }

    deregisterHostSidebar(): void {
        this.sidebarComponent = null;
    }
}
