import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

const Options = {
    BLUE: {
        value: 'blue',
        presentationText: 'Синяя таблетка',
    },
    RED: {
        value: 'red',
        presentationText: 'Красная таблетка',
    },
};

const fb = new FormBuilder();
const form = fb.group({
    radioGroupValue: [ Options.BLUE.value ],
});

storiesOf('Components/EvoRadioGroup', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoUiKitModule,
            ],
        }),
)
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
        <evo-radio-group formControlName="radioGroupValue" [options]="Options"></evo-radio-group>
        </form>
        `,
        props: {
            form,
            Options,
        },
    }))
    .add('with default value', () => ({
        template: `
        <form [formGroup]="form">
        <evo-radio-group formControlName="radioGroupValue" [options]="Options" [value]="form.value.radioGroupValue"></evo-radio-group>
        </form>
        `,
        props: {
            form,
            Options,
        },
    }));
