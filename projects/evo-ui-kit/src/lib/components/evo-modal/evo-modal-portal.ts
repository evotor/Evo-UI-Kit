import { EvoPortalService } from '../evo-portal';
import { EvoComponentPortal } from '../evo-portal/evo-component-portal.class';
import { EvoModalComponent } from './evo-modal.component';

export class EvoModalPortal extends EvoComponentPortal<EvoModalComponent> {

    constructor(
        public portalService: EvoPortalService,
    ) {
        super(EvoModalComponent, portalService);
    }

}
