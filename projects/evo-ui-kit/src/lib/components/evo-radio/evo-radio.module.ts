import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoRadioComponent} from './evo-radio.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [EvoRadioComponent],
    exports: [EvoRadioComponent],
})
export class EvoRadioModule {}
