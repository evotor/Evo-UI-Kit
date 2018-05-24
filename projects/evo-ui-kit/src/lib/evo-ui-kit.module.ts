import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvoUiKitComponent } from './evo-ui-kit.component';
import { EvoButtonComponent } from './components/evo-button/evo-button.component';

import { EvoUiClassDirective } from './directives/evo-ui-class.directive';

const components: any = [
  EvoButtonComponent,
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
