import {moduleMetadata, storiesOf} from '@storybook/angular';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {EvoButtonModule, EvoControlLabelModule, EvoSelectModule} from '@evo/ui-kit';

const options = [
    {label: 'Офд.РУ', value: 'all'},
    {label: 'Илья Лыткин', value: 'i.lytkin'},
    {label: 'Кристина Михайлова', value: 'k.mykhaylova'},
    {label: 'Аааааааааааааааааааааааа', value: 'panic'},
    {label: 'Empty value', value: ''},
];

storiesOf('Components/Select', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                ReactiveFormsModule,
                EvoSelectModule,
                EvoControlLabelModule,
                EvoButtonModule,
            ],
        }),
    )
    // .addDecorator(withKnobs)
    .add('default', () => ({
        template: `
        <evo-select>
            <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
        </evo-select>
        `,
        props: {
            options,
        },
    }))
    .add('inline', () => ({
        template: `
        <evo-select [style]="'inline'">
            <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
        </evo-select>
        `,
        props: {
            options,
        },
    }))
    .add('with label', () => ({
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
    }))
    .add('with style', () => ({
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
    }))
    .add('with theme', () => ({
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
    }))
    .add('disabled', () => ({
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
    }))
    .add('with formControl', () => ({
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
    }))
    .add('with control label & required validation', () => ({
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
    }));
