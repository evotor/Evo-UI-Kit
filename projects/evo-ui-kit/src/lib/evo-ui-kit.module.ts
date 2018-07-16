import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { EvoButtonComponent } from './components/evo-button/evo-button.component';
import { EvoCheckboxComponent  } from './components/evo-checkbox/evo-checkbox.component';
import { EvoControlErrorComponent } from './components/evo-control-error/evo-control-error.component';
import { EvoInputComponent } from './components/evo-input/evo-input.component';
import { EvoBannerComponent } from './components/evo-banner/evo-banner.component';
import { EvoSidebarComponent } from './components/evo-sidebar/evo-sidebar.component';
import { EvoRadioGroup } from './components/evo-radio-group/evo-radio-group.component';
import { EvoSidebarService } from './components/evo-sidebar/evo-sidebar.service';
export { EvoSidebarService };
import { EvoAutoCompleteComponent } from './components/evo-auto-complete/evo-auto-complete.component';
import { EvoControlLabelComponent } from './components/evo-control-label/evo-control-label.component';

import { EvoUiClassDirective } from './directives/evo-ui-class.directive';

const components: any = [
  EvoButtonComponent,
  EvoCheckboxComponent,
  EvoControlErrorComponent,
  EvoInputComponent,
  EvoBannerComponent,
  EvoSidebarComponent,
  EvoAutoCompleteComponent,
  EvoControlLabelComponent,
  EvoRadioGroup,
];

const directives: any = [
  EvoUiClassDirective,
];

const bundle: any = [
  ...components,
  ...directives,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...bundle,
  ],
  exports: [
    ...bundle,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EvoUiKitModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EvoUiKitModule,
      providers: [
        EvoSidebarService,
      ],
    };
  }
}


