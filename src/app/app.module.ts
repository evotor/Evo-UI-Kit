import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EvoUiKitModule } from 'evo-ui-kit';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EvoUiKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
