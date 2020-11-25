import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoUiKitModule } from '../../projects/evo-ui-kit/src/lib/evo-ui-kit.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvoInputModule } from '../../projects/evo-ui-kit/src/lib/components/evo-input';
import { EvoTableModule } from 'projects/evo-ui-kit/src/lib/components/evo-table';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        EvoUiKitModule,
        EvoInputModule,
        ReactiveFormsModule,
        EvoTableModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {
}
