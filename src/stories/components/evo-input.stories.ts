import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {EvoButtonModule, EvoChipModule, EvoIconModule, EvoInputModule} from '@evotor-dev/ui-kit';
import {iconSearch} from '@evotor-dev/ui-kit/icons/header';

(window as any)['global'] = window;

const fb = new FormBuilder();

const form = fb.group({
    input: ['', Validators.required],
});

export default {
    title: 'Components/Input',

    decorators: [
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoInputModule,
                EvoButtonModule,
                EvoChipModule,
                EvoIconModule.forRoot([
                    {
                        name: 'icons',
                        shapes: {
                            search: iconSearch,
                        },
                    },
                ]),
            ],
        }),
    ],
};

export const Default = () => ({
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
});

Default.storyName = 'default';

export const WithAutoFocus = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
<div class="story-container">
    <evo-input [autoFocus]="autoFocus"></evo-input>
</div>
        `,
    props: {
        autoFocus: true,
    },
});

WithAutoFocus.storyName = 'with autoFocus';

export const WithMask = () => ({
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
});

WithMask.storyName = 'with mask';

export const WithMaskValidation = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <evo-input
                    [formControl]="control"
                    placeholder="+{7} (000) 000-00-00"
                    [mask]="mask"
                    [maskValidation]="true">
                </evo-input>
                <div>Статус: {{ control.status }}</div>
            </div>
        `,
    props: {
        mask: {
            mask: '+{7} (000) 000-00-00',
        },
        control: new FormControl(''),
    },
});

WithMaskValidation.storyName = 'with mask validation';

export const WithPlaceholder = () => ({
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
});

WithPlaceholder.storyName = 'with placeholder';

export const WithTooltip = () => ({
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
});

WithTooltip.storyName = 'with tooltip';

export const Clearable = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
        <style>
            .input-container {
                margin-bottom: 20px;
            }
        </style>
        <div class="story-container">
            <div class="input-container">
                <evo-input [clearable]="true"></evo-input>
            </div>
            <div class="input-container">
                <evo-input [clearable]="true" size="small"></evo-input>
            </div>
            <div class="input-container">
                <evo-input [clearable]="true" [tooltip]="tooltip" theme="rounded"></evo-input>
            </div>
            <div class="input-container">
                <evo-input [clearable]="true" [tooltip]="tooltip" ></evo-input>
            </div>
        </div>`,
    props: {
        tooltip: 'Подсказка!',
    },
});

Clearable.storyName = 'clearable';

export const WithType = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
<div class="story-container">
    <evo-input [type]="type"></evo-input>
</div>
        `,
    props: {
        type: 'password',
    },
});

WithType.storyName = 'with type';

export const Disabled = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
<div class="story-container">
    <evo-input [disabled]="disabled"></evo-input>
    <br>
    <br>
    <evo-input size="small" [disabled]="disabled"></evo-input>
    <br>
    <br>
    <evo-button (click)="toggle()">Toggle</evo-button>
</div>
        `,
    props: {
        disabled: true,
        toggle() {
            this.disabled = !this.disabled;
        },
    },
});

Disabled.storyName = 'disabled';

export const WithOnBlur = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
<div class="story-container">
    <evo-input (blur)="onBlur()"></evo-input>
</div>
        `,
    props: {
        onBlur: action('blured'),
    },
});

WithOnBlur.storyName = 'with onBlur';

export const WithIcon = () => ({
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
});

WithIcon.storyName = 'with icon';

export const WithPrefixIcon = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
        <style>
            .input-container {
                margin-bottom: 20px;
            }
        </style>
        <div class="story-container">
            <div class="input-container">
                <evo-input>
                    <evo-icon evoInputIcon shape="search"></evo-icon>
                </evo-input>
            </div>
            <div class="input-container">
                <evo-input size="small">
                        <evo-icon evoInputIcon shape="search"></evo-icon>
                </evo-input>
            </div>
            <div class="input-container">
                <evo-input theme="rounded" >
                    <evo-icon evoInputIcon shape="search"></evo-icon>
                </evo-input>
            </div>
        </div>
        `,
});

WithPrefixIcon.storyName = 'with prefix icon';

export const WithPrefix = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
<div class="story-container">
    <evo-input prefix="PART-"></evo-input>
</div>
        `,
    props: {},
});

WithPrefix.storyName = 'with prefix';

export const WithPrefixContent = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
<div class="story-container">
    <evo-input theme="rounded">
        <ng-container evoInputPrefixContent>
            <evo-chip type="label">Выбрано: 0</evo-chip>
        </ng-container>
    </evo-input>
</div>
        `,
    props: {},
});

WithPrefixContent.storyName = 'with prefix content';

export const WithLoadingState = () => ({
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
});

WithLoadingState.storyName = 'with loading state';

export const WithValidationStates = () => ({
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
});

WithValidationStates.storyName = 'with validation states';

export const WithNgModelChange = () => ({
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
});

WithNgModelChange.storyName = 'with ngModelChange';

export const WithFormBuilderAndRequiredValidation = () => ({
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
});

WithFormBuilderAndRequiredValidation.storyName = 'with formBuilder and required validation';
