import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoNavigationButtonComponent} from './evo-navigation-button.component';
import {EvoIconComponent} from '../evo-icon';

@NgModule({
    imports: [CommonModule, EvoIconComponent],
    declarations: [EvoNavigationButtonComponent],
    exports: [EvoNavigationButtonComponent],
})
export class EvoNavigationButtonModule {}
