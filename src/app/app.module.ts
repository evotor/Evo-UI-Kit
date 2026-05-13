import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EvoTooltipModule} from '../../projects/evo-ui-kit/src/lib/components/evo-tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestSidebarComponent} from './test-sidebar/test-sidebar.component';
import {EvoChipModule} from '../../projects/evo-ui-kit/src/lib/components/evo-chip';
import {EvoDropdownModule} from '../../projects/evo-ui-kit/src/lib/components/evo-dropdown';
import {EvoButtonModule} from '../../projects/evo-ui-kit/src/lib/components/evo-button';
import {
    EvoSidebarContentComponent,
    EvoSidebarHeaderComponent,
    provideSidebar
} from 'projects/evo-ui-kit/src/public_api';
import {provideHttpClient} from "@angular/common/http";

@NgModule({
    declarations: [AppComponent, TestSidebarComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        EvoTooltipModule,
        BrowserAnimationsModule,
        EvoChipModule,
        EvoDropdownModule,
        EvoButtonModule,
        EvoSidebarHeaderComponent,
        EvoSidebarContentComponent,
    ],
    providers: [provideSidebar(), provideHttpClient()],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {
}
