import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoButtonModule, EvoInputModule } from '@evo/ui-kit';

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
                EvoInputModule,
                EvoButtonModule,
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
                mask: '+{7} (000) 000-00-00',
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
    .add('with icon', () => ({
        template: `
            <evo-input [icon]="icon"></evo-input>
        `,
        props: {
            icon: 'https://evotor.ru/app/themes/evotor-main/dist/img/36.svg',
        },
    }))
    .add('with prefix', () => ({
        template: `
            <evo-input prefix="PART-"></evo-input>
        `,
        props: {

        },
    }))
    .add('with loading state', () => ({
        template: `
            <evo-input [loading]="loading" style="width: 300px; margin: 20px 10px 10px; display: block;"></evo-input>
            <evo-input [loading]="loading" style="width: 300px; margin: 10px 10px 20px; display: block;" tooltip="it's a king of tooltip"></evo-input>
            <evo-button style="margin-left: 20px;" (click)="loading = !loading">Switch loading state</evo-button>
        `,
        props: {
            loading: true,
        },
    }))
    .add('with validation states', () => ({
        template: `
            <form [formGroup]="form">
                <div style="margin: 20px;">
                    <label style="display: block;"> Валидное поле </label>
                    <evo-input [state]="{valid: true}"></evo-input>
                </div>

                <div style="margin: 20px;">
                    <label style="display: block;"> Невалидное поле </label>

                    <evo-input
                        formControlName="input"
                        [state]="{invalid: true}"
                        [errorsMessages]="{
                            required: 'Введите что-нибудь сюда, пожалуйста'}">
                        </evo-input>
                </div>
            </form>
        `,
        props: {
            form,
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
    }));
