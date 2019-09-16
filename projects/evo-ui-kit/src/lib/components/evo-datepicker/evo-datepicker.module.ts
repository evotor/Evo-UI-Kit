import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoDatepickerComponent } from './evo-datepicker.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { IMaskModule } from 'angular-imask';
import { EvoControlErrorModule } from '../evo-control-error';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
        IMaskModule,
        EvoControlErrorModule,
    ],
    declarations: [ EvoDatepickerComponent ],
    exports: [ EvoDatepickerComponent ],
})
export class EvoDatepickerModule {}
