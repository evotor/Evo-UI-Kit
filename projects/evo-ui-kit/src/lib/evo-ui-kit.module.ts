import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { EvoDatePickerModule } from './modules/evo-date-picker/evo-date-picker.module';

import { EvoSidebarService, EvoSidebarTypes, EvoSidebarState } from './components/evo-sidebar/evo-sidebar.service';
import { EvoModalService, EvoModalState } from './components/evo-modal/evo-modal.service';
import { EvoUiClassDirective } from './directives/evo-ui-class.directive';
import { EvoAlertComponent } from './components/evo-alert/evo-alert.component';
import { EvoButtonComponent, EvoButtonStyles } from './components/evo-button/evo-button.component';
import { EvoCheckboxComponent } from './components/evo-checkbox/evo-checkbox.component';
import { EvoControlErrorComponent, IEvoControlError } from './components/evo-control-error/evo-control-error.component';
import { EvoInputComponent } from './components/evo-input/evo-input.component';
import { EvoBannerComponent, EvoBanner, EvoBannerLocations, EvoBannerTypes } from './components/evo-banner/evo-banner.component';
import { EvoSidebarComponent, EvoSidebarCloseTargets } from './components/evo-sidebar/evo-sidebar.component';
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
import { EvoTabItemComponent } from './components/evo-tabs/evo-tab-item/evo-tab-item.component';
import { EvoRadioComponent } from './components/evo-radio/evo-radio.component';
import { EvoModalComponent, EvoModalTypes } from './components/evo-modal/evo-modal.component';
import { EvoSubmenuComponent, EvoSubmenuItem } from './components/evo-submenu/evo-submenu.component';
import { EvoPlusMinusComponent } from './components/evo-plus-minus/evo-plus-minus.component';
import { EvoLoaderComponent, EvoLoaderStyles } from './components/evo-loader/evo-loader.component';
import { EvoToggleComponent } from './components/evo-toggle/evo-toggle.component';
import { EvoSwitcherComponent } from './components/evo-switcher/evo-switcher.component';
import { DaDataEntityTypes, DaDataParty } from './components/evo-auto-complete/models/DaDataParty';
import {
    EvoSwitcherItemComponent,
    EvoSwitcherItem } from './components/evo-switcher/components/evo-switcher-item/evo-switcher-item.component';
import { EvoStepperComponent } from './components/evo-stepper/evo-stepper.component';
import { EvoStepperItemComponent } from './components/evo-stepper/evo-stepper-item/evo-stepper-item.component';
import { WINDOW_PROVIDERS } from './services/window.service';
import { EvoToastService } from './components/evo-toast/evo-toast.service';
import { EvoToastComponent } from './components/evo-toast/evo-toast.component';

export { EvoSidebarService, EvoSidebarTypes, EvoSidebarState };
export { EvoModalService, EvoModalState };
export { EvoUiClassDirective };
export { EvoAlertComponent };
export { EvoButtonComponent, EvoButtonStyles };
export { EvoCheckboxComponent };
export { EvoControlErrorComponent, IEvoControlError };
export { EvoInputComponent };
export { EvoBannerComponent, EvoBanner, EvoBannerLocations, EvoBannerTypes };
export { EvoSidebarComponent, EvoSidebarCloseTargets };
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
export { EvoRadioComponent };
export { EvoModalComponent, EvoModalTypes };
export { EvoSubmenuComponent, EvoSubmenuItem };
export { EvoPlusMinusComponent };
export { EvoLoaderComponent, EvoLoaderStyles };
export { EvoToggleComponent };
export { EvoSwitcherComponent };
export { EvoSwitcherItemComponent, EvoSwitcherItem };
export { DaDataEntityTypes, DaDataParty };
export { EvoStepperComponent, EvoStepperItemComponent };
export { WINDOW_PROVIDERS };

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
    EvoTabsComponent,
    EvoTabItemComponent,
    EvoRadioComponent,
    EvoModalComponent,
    EvoSubmenuComponent,
    EvoPlusMinusComponent,
    EvoLoaderComponent,
    EvoToggleComponent,
    EvoSwitcherComponent,
    EvoSwitcherItemComponent,
    EvoStepperComponent,
    EvoStepperItemComponent,
    EvoToastComponent,
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
        IMaskModule,
        NgxPageScrollModule,
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
    providers: [ WINDOW_PROVIDERS ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EvoUiKitModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: EvoUiKitModule,
            providers: [
                EvoSidebarService,
                EvoToastService,
            ],
        };
    }
}
