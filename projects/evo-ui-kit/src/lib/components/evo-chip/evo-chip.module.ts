import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoChipComponent } from './evo-chip.component';
import { FormsModule } from '@angular/forms';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

@NgModule({
    declarations: [ EvoChipComponent ],
    imports: [
        CommonModule,
        FormsModule,
        EvoUiKitModule,
    ],
    exports: [ EvoChipComponent ],
})
export class EvoChipModule {}
