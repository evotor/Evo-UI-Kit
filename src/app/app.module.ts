import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoUiKitModule } from '../../projects/evo-ui-kit/src/lib/evo-ui-kit.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        EvoUiKitModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {
}
