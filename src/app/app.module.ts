import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {EvoAutocompleteModule} from 'projects/evo-ui-kit/src/public_api';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ReactiveFormsModule, EvoAutocompleteModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {}
