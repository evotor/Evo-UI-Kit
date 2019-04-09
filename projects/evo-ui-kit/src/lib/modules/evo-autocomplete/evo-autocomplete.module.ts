import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoAutocompleteComponent } from './components/evo-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { IMaskModule } from 'angular-imask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        IMaskModule,
    ],
    declarations: [
        EvoAutocompleteComponent,
    ],
    exports: [
        EvoAutocompleteComponent,
    ],
})
export class EvoAutocompleteModule {
}
