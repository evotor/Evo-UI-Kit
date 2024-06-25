import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {EvoButtonModule, EvoInputModule, EvoToastModule} from '@evotor-dev/ui-kit';
import {EvoToastWrapperComponent} from './evo-toast-wrapper/evo-toast-wrapper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

export default {
    title: 'Components/Toast',
    component: EvoToastWrapperComponent,
    decorators: [
        applicationConfig({
            providers: [importProvidersFrom(BrowserAnimationsModule), importProvidersFrom(HttpClientModule)],
        }),
        moduleMetadata({
            imports: [ReactiveFormsModule, EvoButtonModule, EvoInputModule, EvoToastModule],
            declarations: [EvoToastWrapperComponent],
        }),
    ],
};

export const Default = () => ({});

Default.storyName = 'default';
