import {NgModule} from '@angular/core';
import {EvoAutocompleteComponent} from './components/evo-autocomplete/evo-autocomplete.component';

import {EvoAutocompleteDefaultOptionComponent} from './components/evo-autocomplete-default-option/evo-autocomplete-default-option.component';
import {EvoAutocompleteHeaderComponent} from './components/evo-autocomplete-header/evo-autocomplete-header.component';
import {EvoAutocompleteFooterComponent} from './components/evo-autocomplete-footer/evo-autocomplete-footer.component';

@NgModule({
    imports: [EvoAutocompleteComponent, EvoAutocompleteDefaultOptionComponent,EvoAutocompleteHeaderComponent,
        EvoAutocompleteFooterComponent,],
    exports: [EvoAutocompleteComponent, EvoAutocompleteDefaultOptionComponent,EvoAutocompleteHeaderComponent,
        EvoAutocompleteFooterComponent,],
})
export class EvoAutocompleteModule {}
