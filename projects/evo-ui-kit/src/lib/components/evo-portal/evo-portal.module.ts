import {NgModule} from '@angular/core';
import {EvoPortalService} from './evo-portal.service';
import {EvoPortalOutletDirective} from './evo-portal-outlet.directive';

@NgModule({
    imports: [EvoPortalOutletDirective],
    providers: [EvoPortalService],
    exports: [EvoPortalOutletDirective],
})
export class EvoPortalModule {}
