import {moduleMetadata} from '@storybook/angular';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {EvoTextareaModule, EvoButtonModule} from '@evo/ui-kit';

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
    template: `
            <evo-textarea></evo-textarea>
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
            <evo-button (click)="handleToggle()">toggle disability</evo-button>
            <div [formGroup]="form">
                <evo-textarea formControlName="text"></evo-textarea>
            </div>
        `,
});

ReactiveDisability.storyName = 'reactive disability';
