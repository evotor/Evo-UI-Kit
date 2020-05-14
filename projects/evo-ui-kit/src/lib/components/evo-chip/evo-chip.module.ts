import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoChipComponent } from './evo-chip.component';


@NgModule({
    declarations: [ EvoChipComponent ],
    imports: [
        CommonModule,
        EvoUiKitModule,
    ],
    exports: [ EvoChipComponent ],
})
export class EvoChipModule {}
