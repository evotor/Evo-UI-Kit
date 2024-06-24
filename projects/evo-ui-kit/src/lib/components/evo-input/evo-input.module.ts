import {NgModule} from '@angular/core';
import {EvoInputComponent} from './evo-input.component';
import {EvoInputIconDirective} from './evo-input-icon/evo-input-icon.directive';

@NgModule({
    imports: [EvoInputComponent, EvoInputIconDirective],
    exports: [EvoInputComponent, EvoInputIconDirective],
})
export class EvoInputModule {}
