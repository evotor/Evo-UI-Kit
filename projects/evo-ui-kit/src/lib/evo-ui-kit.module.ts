import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPageScrollModule} from 'ngx-page-scroll';

import {WINDOW_PROVIDERS} from './services/window.service';
import {RouterModule} from '@angular/router';

import {EvoUiClassDirective} from './directives/evo-ui-class.directive';
import {EvoClickOutsideDirective} from './directives/evo-click-outside.directive';
import {EvoIsExpandedDirective, EvoLetDirective} from './directives';

export {WINDOW_PROVIDERS};

const directives = [EvoUiClassDirective, EvoClickOutsideDirective, EvoIsExpandedDirective, EvoLetDirective];

@NgModule({
    imports: [CommonModule, FormsModule, NgxPageScrollModule, ReactiveFormsModule, RouterModule, ...directives],
    exports: [...directives],
    providers: [WINDOW_PROVIDERS],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EvoUiKitModule {}
