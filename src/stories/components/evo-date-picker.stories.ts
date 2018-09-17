import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';


const fb = new FormBuilder();

const form = fb.group({
    date: [ new Date() ],
});

const calendarSettings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    datePickerPosition: {
        left: '0',
        right: '0',
    },
};

const style = 'inline';

storiesOf('Components/DatePicker', module)
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
                <evo-date-picker formControlName="date" [settings]="calendarSettings"></evo-date-picker>
            </form>
        `,
        props: {
            form,
            calendarSettings,
        },
    }))
    .add('with style', () => ({
        template: `
            <form [formGroup]="form">
                <evo-date-picker formControlName="date" [settings]="calendarSettings" [style]="style"></evo-date-picker>
            </form>
        `,
        props: {
            form,
            calendarSettings,
            style,
        },
    }));
