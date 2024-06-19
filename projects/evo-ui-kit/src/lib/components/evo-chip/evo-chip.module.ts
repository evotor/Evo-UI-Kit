import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoChipComponent} from './evo-chip.component';
import {FormsModule} from '@angular/forms';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoIconComponent} from '../evo-icon';

@NgModule({
    declarations: [EvoChipComponent],
    imports: [CommonModule, FormsModule, EvoUiKitModule, EvoIconComponent],
    exports: [EvoChipComponent],
})
export class EvoChipModule {}
