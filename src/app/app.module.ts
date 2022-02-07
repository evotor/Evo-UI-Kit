import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoButtonModule } from '../../projects/evo-ui-kit/src/lib/components/evo-button';
import { ReactiveFormsModule } from '@angular/forms';
import { EvoIconModule } from '../../projects/evo-ui-kit/src/lib/components/evo-icon';
import { icons } from '../../projects/evo-ui-kit/icons';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        EvoButtonModule,
        BrowserModule,
        ReactiveFormsModule,
        EvoIconModule.forRoot([...icons]),
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {
}
