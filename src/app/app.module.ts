import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvoUiKitModule } from '../../projects/evo-ui-kit/src/lib/evo-ui-kit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EvoInputModule } from '../../projects/evo-ui-kit/src/lib/components/evo-input';
import { EvoChipModule } from '../../projects/evo-ui-kit/src/lib/components/evo-chip';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        EvoUiKitModule,
        EvoInputModule,
        ReactiveFormsModule,
        EvoChipModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {
}
