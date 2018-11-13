import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EvoDatePickerModule } from './modules/evo-date-picker/evo-date-picker.module';

import { EvoSidebarService, EvoSidebarTypes } from './components/evo-sidebar/evo-sidebar.service';
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
import { EvoTableComponent, EvoTableRowClickEvent } from './components/evo-table/evo-table.component';
import { EvoTableColumnComponent } from './components/evo-table-column/evo-table-column.component';
import { EvoSelectComponent } from './components/evo-select/evo-select.component';
import { EvoTabsComponent } from './components/evo-tabs/evo-tabs.component';
import { EvoSegmentedBarComponent } from './components/evo-segmented-bar/evo-segmented-bar.component';
import { EvoSegmentedBarButtonComponent } from './components/evo-segmented-bar-button/evo-segmented-bar-button.component';
import { EvoDatepickerComponent } from './components/evo-datepicker/evo-datepicker.component';
import { EvoPopoverComponent } from './components/evo-popover/evo-popover.component';
import { EvoClickOutsideDirective } from './directives/evo-click-outside.directive';

export { EvoSidebarService, EvoSidebarTypes };
export { EvoUiClassDirective };
export { EvoAlertComponent };
export { EvoButtonComponent };
export { EvoCheckboxComponent };
export { EvoControlErrorComponent };
export { EvoInputComponent };
export { EvoBannerComponent };
export { EvoSidebarComponent };
export { EvoRadioGroupComponent };
export { EvoAutoCompleteComponent };
export { EvoControlLabelComponent };
export { EvoTableComponent, EvoTableRowClickEvent };
export { EvoTableColumnComponent };
export { EvoSelectComponent };
export { EvoTabsComponent };
export { EvoSegmentedBarComponent };
export { EvoSegmentedBarButtonComponent };
export { EvoDatepickerComponent };
export { EvoPopoverComponent };

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
    EvoDatepickerComponent,
    EvoPopoverComponent,
];

export const directives: any = [
    EvoUiClassDirective,
    EvoClickOutsideDirective,
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
