import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoUiKitModule } from 'evo-ui-kit';
import { EvoInputRadiusPositions } from '../../../projects/evo-ui-kit/src/lib/components/evo-input/evo-input.component';

const fb = new FormBuilder();

const form = fb.group({
    input: [ '', Validators.required ],
});

storiesOf('Components/Input', module)
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
            <evo-input></evo-input>
        `,
    }))
    .add('with autoFocus', () => ({
        template: `
            <evo-input [autoFocus]="autoFocus"></evo-input>
        `,
        props: {
            autoFocus: true,
        },
    }))
    .add('with mask', () => ({
        template: `
            <evo-input [mask]="mask"></evo-input>
        `,
        props: {
            mask: {
                mask: [ '+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/ ],
                guide: false,
            },
        },
    }))
    .add('with guided mask', () => ({
        template: `
            <evo-input [mask]="mask"></evo-input>
        `,
        props: {
            mask: {
                mask: [ '+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/ ],
                guide: true,
            },
        },
    }))
    .add('with placeholder', () => ({
        template: `
            <evo-input [placeholder]="placeholder"></evo-input>
        `,
        props: {
            placeholder: '+7 (111) 111-11-11',
        },
    }))
    .add('with tooltip', () => ({
        template: `
            <evo-input [tooltip]="tooltip"></evo-input>
        `,
        props: {
            tooltip: 'Подсказка!',
        },
    }))
    .add('with type', () => ({
        template: `
            <evo-input [type]="type"></evo-input>
        `,
        props: {
            type: 'password',
        },
    }))
    .add('disabled', () => ({
        template: `
            <evo-input disabled="true"></evo-input>
        `,
    }))
    .add('with onBlur', () => ({
        template: `
            <evo-input (blur)="onBlur()"></evo-input>
        `,
        props: {
            onBlur: action('blured'),
        },
    }))
    .add('with ngModelChange', () => ({
        template: `
            <evo-input (ngModelChange)="onChange()"></evo-input>
        `,
        props: {
            onChange: action('evo-input changed'),
        },
    }))
    .add('with formBuilder and required validation', () => ({
        template: `
            <form [formGroup]="form">
                <evo-input formControlName="input"></evo-input>
            </form>
        `,
        props: {
            form,
        },
    }))
    .add('with prefix', () => ({
        template: `
            <evo-input [prefix]="prefix"></evo-input>
        `,
        props: {
            prefix: 'PREFIX-',
        },
    }))
    .add('with icon', () => ({
        template: `
            <evo-input icon="https://market.evotor.ru/assets/images/app/app-payment/mastercard-logo.svg"></evo-input>
        `,
    }))
    .add('with no radius', () => ({
        template: `
            <evo-input [noRadius]="noRadius"></evo-input>
        `,
        props: {
            noRadius: EvoInputRadiusPositions.ALL,
        },
    }))
    .add('with no radius at right side', () => ({
        template: `
            <evo-input [noRadius]="noRadius"></evo-input>
        `,
        props: {
            noRadius: EvoInputRadiusPositions.RIGHT,
        },
    }))
    .add('with no radius at left side', () => ({
        template: `
            <evo-input [noRadius]="noRadius"></evo-input>
        `,
        props: {
            noRadius: EvoInputRadiusPositions.LEFT,
        },
    }));
