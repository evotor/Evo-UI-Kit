import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoAutocompleteComponent } from './components/evo-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule ],
  declarations: [ EvoAutocompleteComponent ],
  exports: [ EvoAutocompleteComponent ],
})
export class EvoAutocompleteModule { }
