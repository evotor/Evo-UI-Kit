import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, select } from '@storybook/addon-knobs/angular';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { EvoUiKitModule } from 'evo-ui-kit';

const options = [
    { label: 'Все сотрудники', value: 'all' },
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
    .add('with label', () => ({
        template: `
        <style>
            .content {
                display: block;
            }
        </style>
        <evo-control-label [label]="label">
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
    .add('with formControl', () => ({
        template: `
        <form [formGroup]="sampleForm">
            <evo-select formControlName="salectValue">
                <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
            </evo-select>
            </form>
        <p>{{ sampleForm.value | json }}</p>
        `,
        props: {
            options,
            sampleForm: new FormBuilder().group({
                salectValue: [ options[0].value ],
            }),
        },
    }));
