import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoToastComponent} from './evo-toast.component';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoIconComponent} from '../evo-icon';

@NgModule({
    imports: [CommonModule, EvoUiKitModule, EvoIconComponent],
    declarations: [EvoToastComponent],
    exports: [EvoToastComponent],
})
export class EvoToastModule {}
