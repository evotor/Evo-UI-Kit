import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { WINDOW_PROVIDERS } from './services/window.service';
import { RouterModule } from '@angular/router';

import { EvoUiClassDirective } from './directives/evo-ui-class.directive';
import { EvoClickOutsideDirective } from './directives/evo-click-outside.directive';

export { WINDOW_PROVIDERS };

export const directives: any = [
    EvoUiClassDirective,
    EvoClickOutsideDirective,
];

const bundle: any = [
    ...directives,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPageScrollModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    declarations: [
        ...bundle,
    ],
    exports: [
        ...bundle,
    ],
    providers: [ WINDOW_PROVIDERS ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EvoUiKitModule {}
