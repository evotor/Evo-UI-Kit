import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {EvoDatepickerModule} from '@evotor-dev/ui-kit';
import Russian from 'flatpickr/dist/l10n/ru.js';
import {BaseOptions} from 'flatpickr/dist/types/options';

const fb = new FormBuilder();

const form = fb.group({
    formControlName: ['03.08.2018'],
});

const exampleOptions: Partial<BaseOptions> = {
    locale: Russian.ru,
    defaultDate: '04.09.2018',
    dateFormat: 'd.m.Y',
    maxDate: '05.09.2018',
    time_24hr: true,
    disableMobile: true,
};

export default {
    title: 'Components/Datepicker',

    decorators: [
        moduleMetadata({
            imports: [FormsModule, ReactiveFormsModule, EvoDatepickerModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <div [formGroup]="form">
                <evo-datepicker formControlName="formControlName" [config]="exampleOptions"></evo-datepicker>
                {{ form.value.formControlName }}
                <div style="margin-top: 20px; text-align: center;">
                    Full documentation <a href="https://flatpickr.js.org/" target="_blank">here</a>
                </div>
            </div>
        `,
    props: {
        form,
        exampleOptions,
    },
});

Default.storyName = 'default';

export const WithInputMask = () => ({
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
        exampleOptions: Object.assign({...exampleOptions}, {allowInput: true, maxDate: new Date()}),
    },
});

WithInputMask.storyName = 'with input mask';

export const WithRangeTheme = () => ({
    template: `
            <div [formGroup]="form">
                <evo-datepicker style="max-width: 250px; display: block;"
                    formControlName="formControlName" [config]="exampleOptions" theme="range" [maxRangeDays]="7"></evo-datepicker>
            </div>
        `,
    props: {
        form,
        exampleOptions: Object.assign(
            {...exampleOptions},
            {
                mode: 'range',
                defaultDate: [],
            },
        ),
    },
});

WithRangeTheme.storyName = 'with range theme';

export const RangeWithTime = () => ({
    template: `
            <div [formGroup]="form">
                <evo-datepicker style="max-width: 370px; display: block;" [appendToBody]="false"
                    formControlName="formControlName" [config]="exampleOptions" theme="range" [maxRangeDays]="7"></evo-datepicker>
            </div>
        `,
    props: {
        form,
        exampleOptions: Object.assign(
            {...exampleOptions},
            {
                mode: 'range',
                defaultDate: [new Date(2018, 8, 3, 4, 15), new Date(2018, 8, 3, 4, 59)],
                dateFormat: 'D d.m.Y, H:i',
                enableTime: true,
            },
        ),
    },
});

RangeWithTime.storyName = 'range with time';

export const WithAppendToBody = () => ({
    template: `
            <style>
                .form-container {
                    margin-bottom: 30px;
                }
            </style>
            <div class="story-container">
                <div class="form-container">
                    <h3>Append to body = true(default)</h3>
                    <div [formGroup]="form">
                        <evo-datepicker style="max-width: 370px; display: block;" [appendToBody]="true"
                            formControlName="formControlName" [config]="exampleOptions" theme="range" [maxRangeDays]="7"></evo-datepicker>
                    </div>
                </div>
                <div class="form-container">
                    <h3>Append to body = false</h3>
                    <div [formGroup]="form">
                        <evo-datepicker style="max-width: 370px; display: block;" [appendToBody]="false"
                            formControlName="formControlName" [config]="exampleOptions" theme="range" [maxRangeDays]="7"></evo-datepicker>
                    </div>
                </div>
           </div>
        `,
    props: {
        form,
        exampleOptions: Object.assign(
            {...exampleOptions},
            {
                mode: 'range',
                defaultDate: [new Date(2018, 8, 3, 4, 15), new Date(2018, 8, 3, 4, 59)],
                dateFormat: 'D d.m.Y, H:i',
                enableTime: true,
            },
        ),
    },
});

WithAppendToBody.storyName = 'with appendToBody';

export const WithFoldedState = () => ({
    template: `
            <div [formGroup]="form">
                <evo-datepicker style="max-width: 250px; display: block;"
                    formControlName="formControlName" [config]="exampleOptions" theme="range" [folded]="true"></evo-datepicker>
            </div>
        `,
    props: {
        form,
        exampleOptions: Object.assign(
            {...exampleOptions},
            {
                mode: 'range',
                defaultDate: ['03.08.2018', '15.08.2018'],
                allowInput: true,
            },
        ),
    },
});

WithFoldedState.storyName = 'with folded state';

export const CSSCustomization = () => ({
    template: `
            <h3>
                Custom calendar icon color
                <code>--evo-datepicker-icon-color: red;</code>
            </h3>

            <div style='width: 400px; margin: 20px' [formGroup]="form">
                <evo-datepicker style='--evo-datepicker-icon-color: red' formControlName="formControlName" [config]="exampleOptions" [maskedInput]="true"></evo-datepicker>
            </div>

            <h3>
                Custom calendar icon color for range theme
                <code>--evo-datepicker-range-icon-color: red;</code>
            </h3>

            <div style='width: 400px; margin: 20px' [formGroup]="form">
                <evo-datepicker style='--evo-datepicker-range-icon-color: green' formControlName="formControlName" [config]="exampleRangeOptions" theme="range" ></evo-datepicker>
            </div>

            <h3>
                Word wrap for range theme
                <code>--evo-datepicker-range-value-white-space: normal;</code>
            </h3>

            <p><strong>nowrap</strong> is set by default</p>

            <div style='width: 200px; margin: 20px' [formGroup]="form">
                <evo-datepicker style='--evo-datepicker-range-value-white-space: normal' formControlName="formControlName" [config]="exampleRangeOptions" theme="range" ></evo-datepicker>
            </div>
        `,
    props: {
        form,
        exampleOptions: Object.assign({...exampleOptions}, {allowInput: true, maxDate: new Date()}),
        exampleRangeOptions: Object.assign(
            {...exampleOptions},
            {
                mode: 'range',
                defaultDate: ['03.08.2018', '15.08.2018'],
                allowInput: true,
            },
        ),
    },
});

CSSCustomization.storyName = 'CSS customization';
