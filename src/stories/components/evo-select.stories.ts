import {moduleMetadata} from '@storybook/angular';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {EvoButtonModule, EvoControlLabelModule, EvoSelectModule} from '@evotor-dev/ui-kit';

const options = [
    {label: 'Офд.РУ', value: 'all'},
    {label: 'Илья Лыткин', value: 'i.lytkin'},
    {label: 'Кристина Михайлова', value: 'k.mykhaylova'},
    {label: 'Аааааааааааааааааааааааа', value: 'panic'},
    {label: 'Empty value', value: ''},
];

export default {
    title: 'Components/Select',

    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule, EvoSelectModule, EvoControlLabelModule, EvoButtonModule],
        }),
    ],
};

export const Default = () => ({
    template: `
        <evo-select>
            <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
        </evo-select>
        `,
    props: {
        options,
    },
});

Default.storyName = 'default';

export const Inline = () => ({
    template: `
        <evo-select [style]="'inline'">
            <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
        </evo-select>
        `,
    props: {
        options,
    },
});

Inline.storyName = 'inline';

export const WithLabel = () => ({
    template: `
        <style>
            .content {
                display: block;
            }
        </style>
        <evo-control-label label="Выпадающий список" style="max-width: 400px">
            <evo-select class="content">
                <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
            </evo-select>
        </evo-control-label>
        `,
    props: {
        options,
    },
});

WithLabel.storyName = 'with label';

export const WithStyle = () => ({
    template: `
        <h3>Style inline</h3>
        <evo-select [style]="'inline'">
            <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
        </evo-select>
        <br><br>
        <h3>Style input</h3>
        <evo-select [style]="'input'">
            <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
        </evo-select>
        `,
    props: {
        options,
    },
});

WithStyle.storyName = 'with style';

export const WithTheme = () => ({
    template: `
            <div style="padding: 30px;">
                <h3 style="margin-bottom: 20px"> Simple theme </h3>
                <evo-select theme="simple">
                    <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
                </evo-select>
            </div>
        `,
    props: {
        options,
    },
});

WithTheme.storyName = 'with theme';

export const Disabled = () => ({
    template: `
        <form [formGroup]="sampleForm">
            <evo-select formControlName="selectValue">
                <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
            </evo-select>
        </form>
        `,
    props: {
        options,
        sampleForm: new FormBuilder().group({
            selectValue: [{value: options[1].value, disabled: true}],
        }),
    },
});

Disabled.storyName = 'disabled';

export const WithFormControl = () => ({
    template: `
        <form [formGroup]="sampleForm">
            <evo-select formControlName="selectValue">
                <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
            </evo-select>
        </form>
        <br/>
        <p>{{ sampleForm.value | json }}</p>
        <br/>
        <button evo-button (click)="setValue(sampleForm)">Set value to «Аааааааааааааааааааааааа»</button>
        `,
    props: {
        options,
        sampleForm: new FormBuilder().group({
            selectValue: [options[1].value, [Validators.required]],
        }),
        setValue: (form) => {
            form.get('selectValue').setValue('panic');
        },
    },
});

WithFormControl.storyName = 'with formControl';

export const WithControlLabelRequiredValidation = () => ({
    template: `
        <form [formGroup]="sampleForm">
            <evo-control-label label="Выберите значение">
                <evo-select formControlName="selectValue">
                    <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
                </evo-select>
            </evo-control-label>
        </form>
        <br/>
        <p>{{ sampleForm.value | json }}</p>
        `,
    props: {
        options,
        sampleForm: new FormBuilder().group({
            selectValue: [options[1].value, [Validators.required]],
        }),
        setValue: (form) => {
            form.get('selectValue').setValue('panic');
        },
    },
});

WithControlLabelRequiredValidation.storyName = 'with control label & required validation';
