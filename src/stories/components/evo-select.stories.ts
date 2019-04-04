import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, select } from '@storybook/addon-knobs/angular';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { EvoUiKitModule } from 'evo-ui-kit';

const options = [
    { label: 'Офд.РУ (Общество с ограниченной ответственносттью "Питер-сервис Спецтехологии")', value: 'all' },
    { label: 'Илья Лыткин', value: 'i.lytkin' },
    { label: 'Кристина Михайлова', value: 'k.mykhaylova' },
    { label: 'Аааааааааааааааааааааааа', value: 'panic' },
];

storiesOf('Components/Select', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                ReactiveFormsModule,
                EvoUiKitModule,
            ],
        }),
    )
    .addDecorator(withKnobs)
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
        <evo-control-label [label]="label" style="max-width: 400px">
            <evo-select class="content">
                <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
            </evo-select>
        </evo-control-label>
        `,
        props: {
            options,
            label: text('label', 'Сортировка'),
        },
    }))
    .add('with style', () => ({
        template: `
        <evo-select [style]="style">
            <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
        </evo-select>
        `,
        props: {
            options,
            style: select('style', [ 'inline', 'input' ], 'input'),
        },
    }))
    .add('disabled', () => ({
        template: `
        <form [formGroup]="sampleForm">
            <evo-select formControlName="salectValue">
                <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
            </evo-select>
        </form>
        `,
        props: {
            options,
            sampleForm: new FormBuilder().group({
                salectValue: [ {value: options[1].value, disabled: true} ],
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
                selectValue: [ options[1].value ],
            }),
            setValue: (form) => {
                form.get('selectValue').setValue('panic');
            },
        },
    }));
