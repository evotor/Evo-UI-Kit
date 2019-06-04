import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule, EvoDatepickerModule } from 'evo-ui-kit';
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
                EvoDatepickerModule,
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
    }))
    .add('with input mask', () => ({
        template: `
            <div [formGroup]="form">
                <evo-datepicker formControlName="formControlName" [config]="exampleOptions" [maskedInput]="true"></evo-datepicker>

                <div style="margin-top: 20px; text-align: center;">
                    Full documentation <a href="https://flatpickr.js.org/" target="_blank">here</a>
                </div>
            </div>
        `,
        props: {
            form,
            exampleOptions: Object.assign({...exampleOptions}, {allowInput: true, maxDate: new Date}),
        },
    }))
    .add('with range theme', () => ({
        template: `
            <div [formGroup]="form">
                <evo-datepicker style="max-width: 250px; display: block;"
                    formControlName="formControlName" [config]="exampleOptions" theme="range"></evo-datepicker>
            </div>
        `,
        props: {
            form,
            exampleOptions: Object.assign({...exampleOptions}, { mode: 'range', defaultDate: ['03.08.2018', '15.08.2018'], allowInput: true}),
        },
    }))
    .add('with folded state', () => ({
        template: `
            <div [formGroup]="form">
                <evo-datepicker style="max-width: 250px; display: block;"
                    formControlName="formControlName" [config]="exampleOptions" theme="range" [folded]="true"></evo-datepicker>
            </div>
        `,
        props: {
            form,
            exampleOptions: Object.assign({...exampleOptions}, { mode: 'range', defaultDate: ['03.08.2018', '15.08.2018'], allowInput: true}),
        },
    }))
;
