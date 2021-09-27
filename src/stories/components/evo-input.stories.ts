import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoButtonModule, EvoIconModule, EvoInputModule } from '@evo/ui-kit';
import { iconSearch } from '@evo/ui-kit/icons/header';

(window as any)['global'] = window;

const fb = new FormBuilder();

const form = fb.group({
    input: ['', Validators.required],
});

storiesOf('Components/Input', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoInputModule,
                EvoButtonModule,
                EvoIconModule.forRoot([{
                    name: 'icons',
                    shapes: {
                        search: iconSearch
                    },
                }]),
            ],
        }),
    )
    .add('default', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <div class="story-section">
        <p>Size <code>normal</code> (default)</p>
        <evo-input></evo-input>
    </div>
    <div class="story-section">
        <p>Size <code>small</code></p>
        <evo-input size="small"></evo-input>
    </div>
    <div class="story-section">
        <p>Size <code>normal</code><br> Theme <code>rounded</code></p>
        <evo-input theme="rounded"></evo-input>
    </div>
</div>
        `,
    }))
    .add('with autoFocus', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input [autoFocus]="autoFocus"></evo-input>
</div>
        `,
        props: {
            autoFocus: true,
        },
    }))
    .add('with mask', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input [mask]="mask"></evo-input>
</div>
        `,
        props: {
            mask: {
                mask: '+{7} (000) 000-00-00',
            },
        },
    }))
    .add('with placeholder', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input [placeholder]="placeholder"></evo-input>
    <br>
    <br>
    <evo-input size="small" [placeholder]="placeholder"></evo-input>
</div>
        `,
        props: {
            placeholder: '+7 (111) 111-11-11',
        },
    }))
    .add('with tooltip', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input [tooltip]="tooltip"></evo-input>
    <br>
    <br>
    <evo-input size="small" [tooltip]="tooltip"></evo-input>
</div>
        `,
        props: {
            tooltip: 'Подсказка!',
        },
    }))
    .add('clearable', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
        <div class="story-container">
            <evo-input [clearable]="true"></evo-input>
            <br>
            <br>
            <evo-input [clearable]="true" size="small"></evo-input>
            <br>
            <br>
            <evo-input [clearable]="true" [tooltip]="tooltip" theme="rounded"></evo-input>
            <br>
            <br>
            <evo-input [clearable]="true" [tooltip]="tooltip" ></evo-input>
        </div>`,
        props: {
            tooltip: 'Подсказка!',
        },
    }))
    .add('with type', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input [type]="type"></evo-input>
</div>
        `,
        props: {
            type: 'password',
        },
    }))
    .add('disabled', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input disabled="true"></evo-input>
    <br>
    <br>
    <evo-input size="small" disabled="true"></evo-input>
</div>
        `,
    }))
    .add('with onBlur', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input (blur)="onBlur()"></evo-input>
</div>
        `,
        props: {
            onBlur: action('blured'),
        },
    }))
    .add('with icon', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input [icon]="icon"></evo-input>
    <br>
    <br>
    <evo-input size="small" [icon]="icon"></evo-input>
</div>
        `,
        props: {
            icon: 'https://market.evotor.ru/assets/images/app/basket/empty.svg',
        },
    }))
    .add('with prefix icon', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
        <div class="story-container">
            <evo-input>
                <evo-icon evoInputIcon shape="search"></evo-icon>
            </evo-input>
            <br>
            <br>
            <evo-input size="small">
                    <evo-icon evoInputIcon shape="search"></evo-icon>
            </evo-input>
            <br>
            <br>
            <evo-input theme="rounded" >
                <evo-icon evoInputIcon shape="search"></evo-icon>
            </evo-input>
            <br>
            <br>
        </div>
        `
    }))
    .add('with prefix', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input prefix="PART-"></evo-input>
</div>
        `,
        props: {},
    }))
    .add('with loading state', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input [loading]="loading" style="width: 300px; margin: 20px 10px 10px; display: block;"></evo-input>
    <evo-input [loading]="loading" style="width: 300px; margin: 10px 10px 20px; display: block;" tooltip="it's a king of tooltip"></evo-input>
    <br>
    <br>
    <evo-input size="small" [loading]="loading" style="width: 300px; margin: 20px 10px 10px; display: block;"></evo-input>
    <evo-input size="small" [loading]="loading" style="width: 300px; margin: 10px 10px 20px; display: block;" tooltip="it's a king of tooltip"></evo-input>
    <evo-button style="margin-left: 20px;" (click)="loading = !loading">Switch loading state</evo-button>
</div>
        `,
        props: {
            loading: true,
        },
    }))
    .add('with validation states', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <form [formGroup]="form">
        <div style="margin: 20px;">
            <label style="display: block;"> Валидное поле </label>
            <evo-input [state]="{valid: true}"></evo-input>
            <br>
            <br>
            <evo-input size="small" [state]="{valid: true}"></evo-input>
        </div>

        <div style="margin: 20px;">
            <label style="display: block;"> Невалидное поле </label>

            <evo-input
                formControlName="input"
                [state]="{invalid: true}"
                [errorsMessages]="{
                    required: 'Введите что-нибудь сюда, пожалуйста'}">
                </evo-input>
            <br>
            <br>
            <evo-input
                size="small"
                formControlName="input"
                [state]="{invalid: true}"
                [errorsMessages]="{
                    required: 'Введите что-нибудь сюда, пожалуйста'}">
                </evo-input>
        </div>
    </form>
</div>
        `,
        props: {
            form,
        },
    }))
    .add('with ngModelChange', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <evo-input [(ngModel)]="someValue" (ngModelChange)="onChange()"></evo-input>
</div>
        `,
        props: {
            someValue: 'Hello!',
            onChange: action('evo-input changed'),
        },
    }))
    .add('with formBuilder and required validation', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <form [formGroup]="form">
        <evo-input formControlName="input"></evo-input>
    </form>
</div>
        `,
        props: {
            form,
        },
    }));
