import {moduleMetadata} from '@storybook/angular';
import {EvoToastService, EvoToastModule, EvoButtonModule, EvoInputModule} from '@evo/ui-kit';
import {EvoToastWrapperComponent} from './evo-toast-wrapper/evo-toast-wrapper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export default {
    title: 'Components/Toast',

    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule, BrowserAnimationsModule, EvoButtonModule, EvoInputModule, EvoToastModule],
            providers: [EvoToastService],
        }),
    ],
};

export const Default = () => ({
    component: EvoToastWrapperComponent,
    moduleMetadata: {
        declarations: [EvoToastWrapperComponent],
    },
});

Default.storyName = 'default';
