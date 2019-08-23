import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoUiKitModule } from '../../projects/evo-ui-kit/src/lib/evo-ui-kit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EvoTabsModule } from '../../projects/evo-ui-kit/src/lib/components/evo-tabs';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        EvoUiKitModule,
        ReactiveFormsModule,
        EvoTabsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {
}
