import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoPortalService } from './evo-portal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [

  ]
})
export class EvoPortalModule {
    static forRoot(): ModuleWithProviders<EvoPortalModule> {
        return {
            ngModule: EvoPortalModule,
            providers: [
                EvoPortalService,
            ],
        };
    }
}
