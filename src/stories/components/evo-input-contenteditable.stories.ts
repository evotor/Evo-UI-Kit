import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {EvoInputContenteditableModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-input-contenteditable';
import {EvoButtonModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-button';

(window as any)['global'] = window;

const fb = new FormBuilder();

const form = fb.group({
    input: ['', Validators.required],
});

export default {
    title: 'Components/InputContenteditable',

    decorators: [
        moduleMetadata({
            imports: [FormsModule, ReactiveFormsModule, EvoInputContenteditableModule, EvoButtonModule],
        }),
    ],
};

export const Multiline = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <div class="story-section">
                    <p>maxLines:<code>3</code> minLines:<code>0</code> (default)</p>
                    <evo-input-contenteditable [(ngModel)]="model"></evo-input-contenteditable>
                </div>
                <div class="story-section">
                    <p>maxLines:<code>10</code> minLines:<code>5</code></p>
                    <evo-input-contenteditable [(ngModel)]="model" [maxLines]="10" [minLines]="5"></evo-input-contenteditable>
                </div>
            </div>
        `,
    props: {
        model: '',
    },
});

Multiline.storyName = 'multiline';

export const SingleLine = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <div class="story-section">
                    <p>multiline:<code>false</code></p>
                    <evo-input-contenteditable [(ngModel)]="model" [multiline]="false"></evo-input-contenteditable>
                </div>
                <div class="story-section">
                    <p>multiline:<code>false</code></p>
                    <p>Props maxLines and minLines are ignored in this mode: maxLines:<code>10</code> minLines:<code>5</code></p>
                    <evo-input-contenteditable
                        [(ngModel)]="model"
                        [multiline]="true"
                        [maxLines]="10"
                        [minLines]="5"
                    ></evo-input-contenteditable>
                </div>
            </div>
        `,
    props: {
        model: '',
    },
});

SingleLine.storyName = 'single line';

export const AllowStylingKeysCombination = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <div class="story-section">
                    <p>preventStylingHotkeys:<code>false</code>. Now ctrl(cmd)+i/u/b is allowed</p>
                    <evo-input-contenteditable [(ngModel)]="model" [preventStylingHotkeys]="false"></evo-input-contenteditable>
                </div>
            </div>
        `,
    props: {
        model: '',
    },
});

AllowStylingKeysCombination.storyName = 'allow styling keys combination';

export const WithAutoFocus = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <evo-input-contenteditable [(ngModel)]="model" [autoFocus]="autoFocus"></evo-input-contenteditable>
            </div>
        `,
    props: {
        model: '',
        autoFocus: true,
    },
});

WithAutoFocus.storyName = 'with autoFocus';

export const WithPlaceholder = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <evo-input-contenteditable [(ngModel)]="model" [placeholder]="placeholder"></evo-input-contenteditable>
            </div>
        `,
    props: {
        model: '',
        placeholder: 'Enter your message...',
    },
});

WithPlaceholder.storyName = 'with placeholder';

export const Disabled = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <evo-input-contenteditable [(ngModel)]="model" [disabled]="disabled"></evo-input-contenteditable>
                <br/>
                <button evoButton color="success" (click)="toggle()">Toggle</button>
            </div>
        `,
    props: {
        model: 'Enable me',
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
                <evo-input-contenteditable [(ngModel)]="model" (blur)="onBlur()"></evo-input-contenteditable>
            </div>
        `,
    props: {
        model: '',
        onBlur: action('blurred'),
    },
});

WithOnBlur.storyName = 'with onBlur';

export const WithValidationStates = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <form [formGroup]="form">
                    <div style="margin: 20px;">
                        <label style="display: block;"> Валидное поле </label>
                        <evo-input-contenteditable [(ngModel)]="model" [state]="{valid: true}"></evo-input-contenteditable>
                    </div>

                    <div style="margin: 20px;">
                        <label style="display: block;"> Невалидное поле </label>

                        <evo-input-contenteditable
                            formControlName="input"
                            [state]="{invalid: true}"
                            [errorsMessages]="{
                                required: 'Введите что-нибудь сюда, пожалуйста'}"
                        ></evo-input-contenteditable>
                    </div>
                </form>
            </div>
        `,
    props: {
        model: '',
        form,
    },
});

WithValidationStates.storyName = 'with validation states';

export const WithNgModelChange = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <evo-input-contenteditable [(ngModel)]="someValue" (ngModelChange)="onChange()"></evo-input-contenteditable>
            </div>
        `,
    props: {
        someValue: 'Hello!',
        onChange: action('evo-input-contenteditable changed'),
    },
});

WithNgModelChange.storyName = 'with ngModelChange';

export const WithFormBuilderAndRequiredValidation = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <form [formGroup]="form">
                    <evo-input-contenteditable formControlName="input"></evo-input-contenteditable>
                </form>
            </div>
        `,
    props: {
        form,
    },
});

WithFormBuilderAndRequiredValidation.storyName = 'with formBuilder and required validation';
