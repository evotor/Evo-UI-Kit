import {moduleMetadata} from '@storybook/angular';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {EvoTextareaModule, EvoButtonModule} from '../../../projects/evo-ui-kit/src/public_api';

const fb = new FormBuilder();
const form = fb.group({
    text: ['', Validators.required],
});

export default {
    title: 'Components/Textarea',

    decorators: [
        moduleMetadata({
            imports: [FormsModule, ReactiveFormsModule, EvoTextareaModule, EvoButtonModule],
        }),
    ],
};

export const Default = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <div class="story-section">
                    <h3>Default normal size</h3>
                    <evo-textarea></evo-textarea>
                </div>
                <div class="story-section">
                    <h3>Small size</h3>
                    <evo-textarea size="small"></evo-textarea>
                </div>
            </div>
        `,
});

Default.storyName = 'default';

export const WithPlaceholder = () => ({
    props: {
        placeholder: 'Ваш плейсхолдер',
    },
    template: `
            <evo-textarea [placeholder]="placeholder"></evo-textarea>
        `,
});

WithPlaceholder.storyName = 'with placeholder';

export const ReactiveDisability = () => ({
    props: {
        form,
        isDisabled: false,
        handleToggle: function () {
            const control = form.get('text');
            control.disabled ? control.enable() : control.disable();
        },
    },
    template: `
            <button evoButton (click)="handleToggle()">toggle disability</button>
            <div [formGroup]="form">
                <evo-textarea formControlName="text"></evo-textarea>
            </div>
        `,
});

ReactiveDisability.storyName = 'reactive disability';
