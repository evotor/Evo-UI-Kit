import { ApplicationRef, Injector, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { EvoAbstractPortal, EvoPortalService } from '../evo-portal';
import { EvoSidebarComponent } from './evo-sidebar.component';

export class EvoSidebarPortal extends EvoPortalService implements EvoAbstractPortal {

    attachedPortal: ComponentRef<EvoSidebarComponent>;

    constructor(
        public appRef: ApplicationRef,
        public injector: Injector,
        public cfr: ComponentFactoryResolver,
    ) {
        super(appRef, injector, cfr);
    }

    attach(host: string) {
        this.attachedPortal = this.attachComponent(
            EvoSidebarComponent,
            host,
            this.injector,
        );
    }

    detach() {
        super.detach(this.attachedPortal);
    }

    hasAttachedPortal() {
        return !!this.attachedPortal;
    }
}
