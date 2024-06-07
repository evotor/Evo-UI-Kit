import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoDropdownComponent} from './evo-dropdown.component';
import {EvoDropdownOriginDirective} from './evo-dropdown-origin.directive';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
    declarations: [EvoDropdownComponent, EvoDropdownOriginDirective],
    imports: [CommonModule, OverlayModule],
    exports: [EvoDropdownComponent, EvoDropdownOriginDirective],
})
export class EvoDropdownModule {}
