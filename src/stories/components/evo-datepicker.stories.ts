import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoDatepickerModule } from '@evo/ui-kit';
import Russian from 'flatpickr/dist/l10n/ru.js';

const fb = new FormBuilder();

const form = fb.group({
    formControlName: [ '03.08.2018' ],
});

const exampleOptions = {
    locale: Russian.ru,
    defaultDate: '03.08.2019',
    dateFormat: 'd.m.Y',
    maxDate: '05.09.2018',
    time_24hr: true,
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
            exampleOptions: Object.assign({...exampleOptions}, {allowInput: true, maxDate: new Date }),
        },
    }))
    .add('with range theme', () => ({
        template: `
            <div [formGroup]="form">
                <evo-datepicker style="max-width: 250px; display: block;"
                    formControlName="formControlName" [config]="exampleOptions" theme="range" [maxRangeDays]="7"></evo-datepicker>
            </div>
        `,
        props: {
            form,
            exampleOptions: Object.assign({...exampleOptions}, { mode: 'range', defaultDate: [new Date('08.03.2018'), new Date('08.15.2018')] }),
        },
    }))
    .add('range with time', () => ({
        template: `
            <div [formGroup]="form">
                <evo-datepicker style="max-width: 370px; display: block;"
                    formControlName="formControlName" [config]="exampleOptions" theme="range" [maxRangeDays]="7"></evo-datepicker>
            </div>
        `,
        props: {
            form,
            exampleOptions: Object.assign({...exampleOptions},
                {
                    mode: 'range',
                    defaultDate: [new Date('08.03.2018'), new Date('08.15.2018')],
                    dateFormat: 'D d.m.Y, H:i',
                    enableTime: true,
                }),
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
            exampleOptions: Object.assign({...exampleOptions}, { mode: 'range', defaultDate: ['03.08.2018', '15.08.2018'],
                allowInput: true }),
        },
    }))
;
