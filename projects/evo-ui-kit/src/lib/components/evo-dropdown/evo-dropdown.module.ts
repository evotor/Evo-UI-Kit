import {NgModule} from '@angular/core';
import {EvoDropdownComponent} from './evo-dropdown.component';
import {EvoDropdownOriginDirective} from './evo-dropdown-origin.directive';

@NgModule({
    imports: [EvoDropdownComponent, EvoDropdownOriginDirective],
    exports: [EvoDropdownComponent, EvoDropdownOriginDirective],
})
export class EvoDropdownModule {}
