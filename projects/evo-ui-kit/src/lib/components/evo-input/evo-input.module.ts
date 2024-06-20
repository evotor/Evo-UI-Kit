import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IMaskModule} from 'angular-imask';
import {EvoInputComponent} from './evo-input.component';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoControlErrorModule} from '../evo-control-error/evo-control-error.module';
import {FormsModule} from '@angular/forms';
import {EvoIconComponent} from '../evo-icon';
import {EvoInputIconDirective} from './evo-input-icon/evo-input-icon.directive';

@NgModule({
    imports: [CommonModule, FormsModule, EvoUiKitModule, EvoControlErrorModule, IMaskModule, EvoIconComponent],
    declarations: [EvoInputComponent, EvoInputIconDirective, EvoInputIconDirective],
    exports: [EvoInputComponent, EvoInputIconDirective],
})
export class EvoInputModule {}
