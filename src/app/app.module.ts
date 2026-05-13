import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EvoTooltipModule} from '../../projects/evo-ui-kit/src/lib/components/evo-tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestSidebarComponent} from './test-sidebar/test-sidebar.component';
import {EvoSidebarModule} from '../../projects/evo-ui-kit/src/lib/components/evo-sidebar';
import {EvoChipModule} from '../../projects/evo-ui-kit/src/lib/components/evo-chip';
import {EvoDropdownModule} from '../../projects/evo-ui-kit/src/lib/components/evo-dropdown';
import {EvoButtonModule} from '../../projects/evo-ui-kit/src/lib/components/evo-button';

@NgModule({
    declarations: [AppComponent, TestSidebarComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        EvoTooltipModule,
        BrowserAnimationsModule,
        EvoSidebarModule,
        EvoChipModule,
        EvoDropdownModule,
        EvoButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {}
