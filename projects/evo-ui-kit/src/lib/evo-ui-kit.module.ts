import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPageScrollModule } from 'ngx-page-scroll';



import { EvoUiClassDirective } from './directives/evo-ui-class.directive';


// import { EvoTableComponent, EvoTableRowClickEvent } from './components/evo-table/evo-table.component';
// import { EvoTableColumnComponent } from './components/evo-table-column/evo-table-column.component';
// import { EvoSelectComponent } from './components/evo-select/evo-select.component';
// import { EvoTabsComponent } from './components/evo-tabs/evo-tabs.component';
// import { EvoSegmentedBarComponent } from './components/evo-segmented-bar/evo-segmented-bar.component';
// import { EvoSegmentedBarButtonComponent } from './components/evo-segmented-bar-button/evo-segmented-bar-button.component';
// import { EvoDatepickerComponent } from './components/evo-datepicker/evo-datepicker.component';

import { EvoClickOutsideDirective } from './directives/evo-click-outside.directive';
// import { EvoTabItemComponent } from './components/evo-tabs/evo-tab-item/evo-tab-item.component';
// import { EvoRadioComponent } from './components/evo-radio/evo-radio.component';
// import { EvoModalComponent, EvoModalTypes } from './components/evo-modal/evo-modal.component';
// import { EvoSubmenuComponent, EvoSubmenuItem, EvoSubmenuType } from './components/evo-submenu/evo-submenu.component';
// import { EvoPlusMinusComponent } from './components/evo-plus-minus/evo-plus-minus.component';
// import { EvoLoaderComponent, EvoLoaderStyles } from './components/evo-loader/evo-loader.component';
// import { EvoToggleComponent } from './components/evo-toggle/evo-toggle.component';
// import { EvoSwitcherComponent } from './components/evo-switcher/evo-switcher.component';
// import {
//     EvoSwitcherItemComponent,
//     EvoSwitcherItem } from './components/evo-switcher/components/evo-switcher-item/evo-switcher-item.component';

// import { EvoStepperComponent } from './components/evo-stepper/evo-stepper.component';
// import { EvoStepperItemComponent } from './components/evo-stepper/evo-stepper-item/evo-stepper-item.component';
import { WINDOW_PROVIDERS } from './services/window.service';
// import { EvoToastService } from './components/evo-toast/evo-toast.service';
// import { EvoToastComponent } from './components/evo-toast/evo-toast.component';
// import { EvoTextareaComponent } from './components/evo-textarea/evo-textarea.component';
// import { EvoToastTypes } from './components/evo-toast/evo-toast.component';
import { RouterModule } from '@angular/router';



// export { EvoModalService, EvoModalState };
// export { EvoUiClassDirective };



// export { EvoTableComponent, EvoTableRowClickEvent };
// export { EvoTableColumnComponent };
// export { EvoSelectComponent };
// export { EvoTabsComponent };
// export { EvoSegmentedBarComponent };
// export { EvoSegmentedBarButtonComponent };
// export { EvoDatepickerComponent };
// export { EvoRadioComponent };
// export { EvoModalComponent, EvoModalTypes };
// export { EvoSubmenuComponent, EvoSubmenuItem, EvoSubmenuType };
// export { EvoPlusMinusComponent };
// export { EvoLoaderComponent, EvoLoaderStyles };
// export { EvoToggleComponent };
// export { EvoSwitcherComponent };
// export { EvoSwitcherItemComponent, EvoSwitcherItem };
// export { EvoStepperComponent, EvoStepperItemComponent };
export { WINDOW_PROVIDERS };
// export { EvoToastService };
// export { EvoToastTypes };

// export const components: any = [
//     EvoTableComponent,
//     EvoTableColumnComponent,
//     EvoSelectComponent,
//     EvoTabsComponent,
//     EvoSegmentedBarComponent,
//     EvoSegmentedBarButtonComponent,
//     EvoDatepickerComponent,
//     EvoTabsComponent,
//     EvoTabItemComponent,
//     EvoRadioComponent,
//     EvoModalComponent,
//     EvoSubmenuComponent,
//     EvoPlusMinusComponent,
//     EvoLoaderComponent,
//     EvoToggleComponent,
//     EvoSwitcherComponent,
//     EvoSwitcherItemComponent,
//     EvoStepperComponent,
//     EvoStepperItemComponent,
//     EvoToastComponent,
//     EvoTextareaComponent,
// ];

export const directives: any = [
    EvoUiClassDirective,
    EvoClickOutsideDirective,
];

const bundle: any = [
    // ...components,
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
export class EvoUiKitModule {
    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: EvoUiKitModule,
    //         providers: [
    //             EvoToastService,
    //         ],
    //     };
    // }
}
