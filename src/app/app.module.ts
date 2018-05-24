import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoUiKitModule } from 'evo-ui-kit';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EvoUiKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
