import {applicationConfig, moduleMetadata } from '@storybook/angular';
import {EvoModalWrapperComponent } from './evo-modal-wrapper/evo-modal-wrapper.component';
import {provideModal } from '@evotor-dev/ui-kit';
import {importProvidersFrom } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

export default {
    title: 'Components/Modal',
    component: EvoModalWrapperComponent,
    decorators: [
        applicationConfig({
            providers: [
                importProvidersFrom(HttpClientModule),
                provideModal(),
            ],
        }),
        moduleMetadata({
            imports: [EvoModalWrapperComponent],
        }),
    ],
};

export const Default = () => ({
    props: {
        id: 'accept',
    },
});

Default.storyName = 'default';
