import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoPortalService } from './evo-portal.service';
import { EvoPortalOutletDirective } from './evo-portal-outlet.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        EvoPortalService,
    ],
    declarations: [
        EvoPortalOutletDirective,
    ],
    exports: [
        EvoPortalOutletDirective,
    ]
})
export class EvoPortalModule { }
