import { EvoPortalService } from '../evo-portal';
import { EvoComponentPortal } from '../evo-portal/evo-component-portal.class';
import { EvoSidebarComponent } from './evo-sidebar.component';

export class EvoSidebarPortal  extends EvoComponentPortal<EvoSidebarComponent> {

    constructor(
        public portalService: EvoPortalService,
    ) {
        super(EvoSidebarComponent, portalService);
    }

}
