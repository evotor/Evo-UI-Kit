import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

const fb = new FormBuilder();
const value = [ new Date('2018-08-03'), new Date() ];

const form = fb.group({
    timeRange: [ value ],
});

storiesOf('Components/DatePickerRange', module)
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
                <evo-date-picker-range formControlName="timeRange"></evo-date-picker-range>
            </form>
        `,
        props: {
            form,
        },
    }));
