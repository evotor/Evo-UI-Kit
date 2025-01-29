import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoPaginatorComponent } from './evo-paginator.component';
import { EvoUiKitModule } from "../../evo-ui-kit.module";

@NgModule({
  declarations: [EvoPaginatorComponent],
    imports: [
        CommonModule,
        EvoUiKitModule,
    ],
  exports: [EvoPaginatorComponent]
})
export class EvoPaginatorModule { }
