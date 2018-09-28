import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import Russian from 'flatpickr/dist/l10n/ru.js';

const fb = new FormBuilder();

const form = fb.group({
    formControlName: [ '03.08.2018' ],
});

const exampleOptions = {
    locale: Russian.ru,
    defaultDate: '03.08.2018',
    dateFormat: 'd.m.Y',
    maxDate: '05.09.2018',
};

storiesOf('Components/Datepicker', module)
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
            <div [formGroup]="form">
                <evo-datepicker formControlName="formControlName" [config]="exampleOptions"></evo-datepicker>

                <div style="margin-top: 20px; text-align: center;">
                    Full documentation <a href="https://flatpickr.js.org/" target="_blank">here</a>
                </div>
            </div>
        `,
        props: {
            form,
            exampleOptions,
        },
    }));
