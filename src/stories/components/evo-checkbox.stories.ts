import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoCheckboxModule } from 'evo-ui-kit';

const fb = new FormBuilder();
const form = fb.group({
    checkbox: [ '',  [ Validators.required ] ],
});

storiesOf('Components/Checkbox', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoCheckboxModule,
            ],
        }),
)
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
        <evo-checkbox formControlName="checkbox">Нажми меня</evo-checkbox>
        </form>
        `,
        props: {
            form,
        },
    }))
    .add('with ngModelChange', () => ({
        template: `
        <form [formGroup]="form">
        <evo-checkbox formControlName="checkbox" (ngModelChange)="onChange()">Нажми меня</evo-checkbox>
        </form>
        `,
        props: {
            form,
            onChange: action('evo-checkbox changed'),
        },
    }));
