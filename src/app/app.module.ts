import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoUiKitModule } from '../../projects/evo-ui-kit/src/lib/evo-ui-kit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EvoUploadModule } from 'projects/evo-ui-kit/src/lib/components/evo-upload';
import { EvoButtonModule } from 'projects/evo-ui-kit/src/lib/components/evo-button';
import { EvoAlertModule } from 'projects/evo-ui-kit/src/lib/components/evo-alert';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        EvoUiKitModule,
        ReactiveFormsModule,
        EvoUploadModule,
        EvoButtonModule,
        EvoAlertModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {
}
