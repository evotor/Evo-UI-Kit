import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoControlLabelModule } from 'evo-ui-kit';
import { EvoInputModule } from 'projects/evo-ui-kit/src/public_api';

storiesOf('Components/ControlLabel', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoControlLabelModule,
                EvoInputModule,
            ],
        }),
)
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
        <evo-control-label label="Описание инпута">
            <evo-input formControlName="text"></evo-input>
        </evo-control-label>
        </form>
        `,
        props: {
            form: (new FormBuilder()).group({
                text: [ '', [ Validators.required ] ],
            }),
        },
    }));
