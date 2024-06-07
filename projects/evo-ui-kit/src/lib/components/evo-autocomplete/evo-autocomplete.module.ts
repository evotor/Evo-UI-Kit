import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoAutocompleteComponent} from './components/evo-autocomplete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {IMaskModule} from 'angular-imask';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoControlErrorModule} from '../evo-control-error/evo-control-error.module';
import {EvoCheckboxModule} from '../evo-checkbox';
import {EvoAutocompleteDefaultOptionComponent} from './components/templates/evo-autocomplete-default-option.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EvoUiKitModule,
        EvoControlErrorModule,
        EvoCheckboxModule,
        NgSelectModule,
        IMaskModule,
    ],
    declarations: [EvoAutocompleteComponent, EvoAutocompleteDefaultOptionComponent],
    exports: [EvoAutocompleteComponent, EvoAutocompleteDefaultOptionComponent],
})
export class EvoAutocompleteModule {}
