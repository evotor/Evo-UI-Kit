import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoChipComponent } from './evo-chip.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ EvoChipComponent ],
    imports: [
        CommonModule,
        EvoUiKitModule,
        FormsModule,
    ],
    exports: [ EvoChipComponent ],
})
export class EvoChipModule {}
