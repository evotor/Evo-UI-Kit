import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector} from '@angular/core';
import {EvoAbstractPortal, EvoPortalService} from '../evo-portal';
import {EvoModalComponent} from './evo-modal.component';

@Injectable()
export class EvoModalPortal extends EvoPortalService implements EvoAbstractPortal {

    attachedPortal: ComponentRef<EvoModalComponent>;

    constructor(
        public appRef: ApplicationRef,
        public injector: Injector,
        public cfr: ComponentFactoryResolver,
    ) {
        super(appRef, injector, cfr);
    }

    attach(host: string) {
        this.attachedPortal = this.attachComponent(EvoModalComponent, host, this.injector);
        this.attachedPortal.changeDetectorRef.detectChanges();
    }

    detach() {
        super.detach(this.attachedPortal);
        this.attachedPortal = null;
    }

    hasAttachedPortal() {
        return !!this.attachedPortal;
    }
}
