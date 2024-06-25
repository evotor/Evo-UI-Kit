import {NgModule} from '@angular/core';
import {EvoAutocompleteComponent} from './components/evo-autocomplete.component';
import {EvoAutocompleteDefaultOptionComponent} from './components/templates/evo-autocomplete-default-option.component';

@NgModule({
    imports: [EvoAutocompleteComponent, EvoAutocompleteDefaultOptionComponent],
    exports: [EvoAutocompleteComponent, EvoAutocompleteDefaultOptionComponent],
})
export class EvoAutocompleteModule {}
