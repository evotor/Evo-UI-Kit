import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EvoDatePickerModule } from './modules/evo-date-picker/evo-date-picker.module';

import { EvoSidebarService } from './components/evo-sidebar/evo-sidebar.service';

export { EvoSidebarService };

import { EvoUiClassDirective } from './directives/evo-ui-class.directive';

import { EvoAlertComponent } from './components/evo-alert/evo-alert.component';
import { EvoButtonComponent } from './components/evo-button/evo-button.component';
import { EvoCheckboxComponent } from './components/evo-checkbox/evo-checkbox.component';
import { EvoControlErrorComponent } from './components/evo-control-error/evo-control-error.component';
import { EvoInputComponent } from './components/evo-input/evo-input.component';
import { EvoBannerComponent } from './components/evo-banner/evo-banner.component';
import { EvoSidebarComponent } from './components/evo-sidebar/evo-sidebar.component';
import { EvoRadioGroupComponent } from './components/evo-radio-group/evo-radio-group.component';
import { EvoAutoCompleteComponent } from './components/evo-auto-complete/evo-auto-complete.component';
import { EvoControlLabelComponent } from './components/evo-control-label/evo-control-label.component';
import { EvoTableComponent } from './components/evo-table/evo-table.component';
import { EvoTableColumnComponent } from './components/evo-table-column/evo-table-column.component';
import { EvoSelectComponent } from './components/evo-select/evo-select.component';
import { EvoTabsComponent } from './components/evo-tabs/evo-tabs.component';
import { EvoSegmentedBarComponent } from './components/evo-segmented-bar/evo-segmented-bar.component';
import { EvoSegmentedBarButtonComponent } from './components/evo-segmented-bar-button/evo-segmented-bar-button.component';
import { EvoPopoverComponent } from './components/evo-popover/evo-popover.component';

export const components: any = [
    EvoAlertComponent,
    EvoButtonComponent,
    EvoCheckboxComponent,
    EvoControlErrorComponent,
    EvoInputComponent,
    EvoBannerComponent,
    EvoSidebarComponent,
    EvoAutoCompleteComponent,
    EvoControlLabelComponent,
    EvoRadioGroupComponent,
    EvoTableComponent,
    EvoTableColumnComponent,
    EvoSelectComponent,
    EvoTabsComponent,
    EvoSegmentedBarComponent,
    EvoSegmentedBarButtonComponent,
    EvoPopoverComponent,
];

export const directives: any = [
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
        EvoDatePickerModule,
    ],
    declarations: [
        ...bundle,
    ],
    exports: [
        ...bundle,
        EvoDatePickerModule,
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
