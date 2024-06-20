import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {EvoButtonModule, EvoChipModule, EvoIconComponent, EvoInputModule} from '@evotor-dev/ui-kit';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

(window as any)['global'] = window;

const fb = new FormBuilder();

const form = fb.group({
    input: ['', Validators.required],
});

export default {
    title: 'Components/Inputs/Input',

    decorators: [
        applicationConfig({
            providers: [importProvidersFrom(HttpClientModule)],
        }),
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoInputModule,
                EvoButtonModule,
                EvoChipModule,
                EvoIconComponent,
            ],
        }),
    ],
};

export const Default = () => ({
    template: `
<div>
    <div class="story-section">
        <p>Size <code>normal</code> (default)</p>
        <evo-input [(ngModel)]="value"></evo-input>
    </div>
    <div class="story-section">
        <p>Size <code>small</code></p>
        <evo-input [(ngModel)]="value" size="small"></evo-input>
    </div>
    <div class="story-section">
        <p>Size <code>normal</code><br> Theme <code>rounded</code></p>
        <evo-input [(ngModel)]="value" theme="rounded"></evo-input>
    </div>
</div>
        `,
    props: {value: ''},
});

Default.storyName = 'default';

export const WithAutoFocus = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" [autoFocus]="autoFocus"></evo-input>
</div>
        `,
    props: {
        value: '',
        autoFocus: true,
    },
});

WithAutoFocus.storyName = 'with autoFocus';

export const WithMask = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" [mask]="mask"></evo-input>
</div>
        `,
    props: {
        value: '',
        mask: {
            mask: '+{7} (000) 000-00-00',
        },
    },
});

WithMask.storyName = 'with mask';

export const WithMaskValidation = () => ({
    template: `
            <div>
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
        value: '',
        mask: {
            mask: '+{7} (000) 000-00-00',
        },
        control: new FormControl(''),
    },
});

WithMaskValidation.storyName = 'with mask validation';

export const WithPlaceholder = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" [placeholder]="placeholder"></evo-input>
    <br>
    <br>
    <evo-input [(ngModel)]="value" size="small" [placeholder]="placeholder"></evo-input>
</div>
        `,
    props: {
        value: '',
        placeholder: '+7 (111) 111-11-11',
    },
});

WithPlaceholder.storyName = 'with placeholder';

export const WithTooltip = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" [tooltip]="tooltip"></evo-input>
    <br>
    <br>
    <evo-input [(ngModel)]="value" size="small" [tooltip]="tooltip"></evo-input>
</div>
        `,
    props: {
        value: '',
        tooltip: 'Подсказка!',
    },
});

WithTooltip.storyName = 'with tooltip';

export const Clearable = () => ({
    template: `
        <style>
            .input-container {
                margin-bottom: 20px;
            }
        </style>
        <div>
            <div class="input-container">
                <evo-input [(ngModel)]="value" [clearable]="true"></evo-input>
            </div>
            <div class="input-container">
                <evo-input [(ngModel)]="value" [clearable]="true" size="small"></evo-input>
            </div>
            <div class="input-container">
                <evo-input [(ngModel)]="value" [clearable]="true" [tooltip]="tooltip" theme="rounded"></evo-input>
            </div>
            <div class="input-container">
                <evo-input [(ngModel)]="value" [clearable]="true" [tooltip]="tooltip" ></evo-input>
            </div>
        </div>`,
    props: {
        value: '',
        tooltip: 'Подсказка!',
    },
});

Clearable.storyName = 'clearable';

export const WithType = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" [type]="type"></evo-input>
</div>
        `,
    props: {
        value: '',
        type: 'password',
    },
});

WithType.storyName = 'with type';

export const Disabled = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" [disabled]="disabled"></evo-input>
    <br>
    <br>
    <evo-input [(ngModel)]="value" size="small" [disabled]="disabled"></evo-input>
    <br>
    <br>
    <button evoButton (click)="toggle()">Toggle</button>
</div>
        `,
    props: {
        value: '',
        disabled: true,
        toggle() {
            this.disabled = !this.disabled;
        },
    },
});

Disabled.storyName = 'disabled';

export const WithOnBlur = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" (blur)="onBlur()"></evo-input>
</div>
        `,
    props: {
        value: '',
        onBlur: action('blured'),
    },
});

WithOnBlur.storyName = 'with onBlur';

export const WithIcon = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" [icon]="icon"></evo-input>
    <br>
    <br>
    <evo-input [(ngModel)]="value" size="small" [icon]="icon"></evo-input>
</div>
        `,
    props: {
        value: '',
        icon: 'https://market.evotor.ru/assets/images/app/basket/empty.svg',
    },
});

WithIcon.storyName = 'with icon';

export const WithPrefixIcon = () => ({
    template: `
        <style>
            .input-container {
                margin-bottom: 20px;
            }
        </style>
        <div>
            <div class="input-container">
                <evo-input [(ngModel)]="value">
                    <evo-icon evoInputIcon shape="search"></evo-icon>
                </evo-input>
            </div>
            <div class="input-container">
                <evo-input [(ngModel)]="value" size="small">
                        <evo-icon evoInputIcon shape="search"></evo-icon>
                </evo-input>
            </div>
            <div class="input-container">
                <evo-input [(ngModel)]="value" theme="rounded" >
                    <evo-icon evoInputIcon shape="search"></evo-icon>
                </evo-input>
            </div>
        </div>
        `,
    props: {value: ''},
});

WithPrefixIcon.storyName = 'with prefix icon';

export const WithPrefix = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" prefix="PART-"></evo-input>
</div>
        `,
    props: {value: ''},
});

WithPrefix.storyName = 'with prefix';

export const WithPrefixContent = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" theme="rounded">
        <ng-container evoInputPrefixContent>
            <evo-chip type="label">Выбрано: 0</evo-chip>
        </ng-container>
    </evo-input>
</div>
        `,
    props: {value: ''},
});

WithPrefixContent.storyName = 'with prefix content';

export const WithLoadingState = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="value" [loading]="loading" style="width: 300px; margin: 20px 10px 10px; display: block;"></evo-input>
    <evo-input [(ngModel)]="value" [loading]="loading" style="width: 300px; margin: 10px 10px 20px; display: block;" tooltip="it's a king of tooltip"></evo-input>
    <br>
    <br>
    <evo-input [(ngModel)]="value" size="small" [loading]="loading" style="width: 300px; margin: 20px 10px 10px; display: block;"></evo-input>
    <evo-input [(ngModel)]="value" size="small" [loading]="loading" style="width: 300px; margin: 10px 10px 20px; display: block;" tooltip="it's a king of tooltip"></evo-input>
    <button evoButton style="margin-left: 20px;" (click)="loading = !loading">Switch loading state</button>
</div>
        `,
    props: {
        value: '',
        loading: true,
    },
});

WithLoadingState.storyName = 'with loading state';

export const WithValidationStates = () => ({
    template: `
<div>
    <form>
        <div style="margin: 20px;">
            <label style="display: block;"> Валидное поле </label>
            <evo-input [(ngModel)]="value" name='input' [state]="{valid: true}"></evo-input>
            <br>
            <br>
            <evo-input [(ngModel)]="value" name='input' size="small" [state]="{valid: true}"></evo-input>
        </div>

        <div style="margin: 20px;">
            <label style="display: block;"> Невалидное поле </label>

            <evo-input
                [formControl]="form.controls.input"
                [state]="{invalid: true}"
                [errorsMessages]="{
                    required: 'Введите что-нибудь сюда, пожалуйста'}">
                </evo-input>
            <br>
            <br>
            <evo-input
                size="small"
                [formControl]="form.controls.input"
                [state]="{invalid: true}"
                [errorsMessages]="{
                    required: 'Введите что-нибудь сюда, пожалуйста'}">
                </evo-input>
        </div>
    </form>
</div>
        `,
    props: {
        value: '',
        form,
    },
});

WithValidationStates.storyName = 'with validation states';

export const WithNgModelChange = () => ({
    template: `
<div>
    <evo-input [(ngModel)]="someValue" (ngModelChange)="onChange()"></evo-input>
</div>
        `,
    props: {
        value: '',
        someValue: 'Hello!',
        onChange: action('evo-input changed'),
    },
});

WithNgModelChange.storyName = 'with ngModelChange';

export const WithFormBuilderAndRequiredValidation = () => ({
    template: `
<div>
    <form [formGroup]="form">
        <evo-input formControlName="input"></evo-input>
    </form>
</div>
        `,
    props: {
        value: '',
        form,
    },
});

WithFormBuilderAndRequiredValidation.storyName = 'with formBuilder and required validation';
