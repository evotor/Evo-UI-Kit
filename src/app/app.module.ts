import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EvoInputDateModule} from '../../projects/evo-ui-kit/src/lib/components/evo-input-date/evo-input-date.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ReactiveFormsModule, EvoInputDateModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {}
