import { ComponentRef, Type } from '@angular/core';
import { EvoAbstractPortal, EvoPortalService } from './evo-portal.service';

export class EvoComponentPortal<T> implements EvoAbstractPortal {

    attachedPortal: ComponentRef<T>;

    constructor(
        protected componentClass: Type<T>,
        protected portalService: EvoPortalService,
    ) {}

    attach(host: string) {
        this.attachedPortal = this.portalService.attachComponent(
            this.componentClass,
            host,
        );
    }

    detach() {
        this.portalService.detach(this.attachedPortal);
        this.attachedPortal = null;
    }

    hasAttachedPortal() {
        return !!this.attachedPortal;
    }
}
