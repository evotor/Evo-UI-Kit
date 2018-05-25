import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { EvoUiKitComponent } from './evo-ui-kit.component';
import { EvoButtonComponent } from './components/evo-button/evo-button.component';
import { EvoCheckboxComponent  } from './components/evo-checkbox/evo-checkbox.component';
import { EvoControlErrorComponent } from './components/evo-control-error/evo-control-error.component';
import { EvoInputComponent } from './components/evo-input/evo-input.component';

import { EvoUiClassDirective } from './directives/evo-ui-class.directive';

const components: any = [
  EvoButtonComponent,
  EvoCheckboxComponent,
  EvoControlErrorComponent,
  EvoInputComponent,
];

const directives: any = [
  EvoUiClassDirective,
];

const bundle: any = [
  ...components,
  ...directives
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
  ],
  declarations: [
    EvoUiKitComponent,
    ...bundle,
  ],
  exports: [
    EvoUiKitComponent,
    ...bundle,
  ]
})
export class EvoUiKitModule { }
