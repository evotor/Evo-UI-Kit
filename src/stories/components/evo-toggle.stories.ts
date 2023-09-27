import {moduleMetadata} from '@storybook/angular';
import {EvoButtonModule, EvoToggleModule} from '@evotor-dev/ui-kit';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

const fb = new FormBuilder();

const form = fb.group({
    toggle: ['', [Validators.required]],
});

export default {
    title: 'Components/Toggle',

    decorators: [
        moduleMetadata({
            imports: [FormsModule, ReactiveFormsModule, EvoButtonModule, EvoToggleModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <div>
                <evo-toggle
                    [ngModel]="isEnabled">
                </evo-toggle>
            </div>
       `,
    props: {
        isEnabled: false,
    },
});

Default.storyName = 'default';

export const ReactiveDisability = () => ({
    template: `
            <evo-button (click)="handleToggle()">toggle disability</evo-button>
            <form [formGroup]="form">
                <evo-toggle formControlName="toggle"></evo-toggle>
            </form>
        `,
    props: {
        form,
        handleToggle: function () {
            const control = form.get('toggle');
            control.disabled ? control.enable() : control.disable();
        },
    },
});

ReactiveDisability.storyName = 'reactive disability';
