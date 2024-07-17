import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EvoInputDateModule} from '../../projects/evo-ui-kit/src/lib/components/evo-input-date/evo-input-date.module';

import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeRu, 'ru');

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ReactiveFormsModule, EvoInputDateModule],
    providers: [{provide: LOCALE_ID, useValue: 'ru'}],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {}
