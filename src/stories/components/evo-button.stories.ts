import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoAlertModule, EvoButtonModule, EvoInputModule, EvoRadioModule } from '@evo/ui-kit';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
    EvoButtonColor,
    EvoButtonSize,
    EvoButtonTheme
} from '../../../projects/evo-ui-kit/src/lib/components/evo-button';
import { CommonModule } from '@angular/common';

const buttonColors: EvoButtonColor[] = [
    'secondary',
    'success',
    'bonus',
    'link',
    'error',
    'white',
    'primary',
];

const buttonSizes: EvoButtonSize[] = [
    'small',
    'normal',
    'large',
];

const buttonThemes: EvoButtonTheme[] = [
    'rounded-solid',
    'rounded-outline',
    'semi-rectangle-solid',
    'rectangle-outline',
];

const configForm = new FormGroup({
    label: new FormControl('Нажми меня'),
    size: new FormControl(buttonSizes[0]),
    theme: new FormControl(buttonThemes[0]),
    loading: new FormControl(false),
    disabled: new FormControl(false),
    background: new FormControl(false),
})

storiesOf('Components/Button', module)
    .addDecorator(
        moduleMetadata({
            imports: [CommonModule, EvoInputModule, EvoButtonModule, EvoAlertModule, ReactiveFormsModule, EvoRadioModule],
        }),
    )
    .add('default', () => ({
        template: `
<div class="story-container" [formGroup]="configForm" [ngStyle]="{'background-color': configForm.value.background ? '#ccc' : 'transparent'}">
    <h4 class="evo-title evo-title_h4">Использование кнопки:</h4>
    <p>
        <code>&lt;a href="https://ya.ru" evoButton target=_blank&gt;Link as button&lt;a&gt;</code>
        <br><br>
        <a href="https://ya.ru" evoButton target="_blank">Link as button</a>
    </p>
    <p>
        <code>&lt;button evoButton&gt;Button&lt;button&gt;</code>
        <br><br>
        <button evoButton>Button</button>
    </p>
    <br>
    <h4 class="evo-title evo-title_h4">Внешний вид кнопки задаётся тремя параметрами:</h4>
    <ul class="evo-list">
        <li>Цвет <code>EvoButtonColor</code> — основной цвет кнопки (границы или фона, в зависимости от темы)</li>
        <li>Тема <code>EvoButtonTheme</code> — сочетание формы, способа заливки границ, фона и шрифта</li>
        <li>Размер <code>EvoButtonSize</code> — некоторые темы поддерживают не все размеры</li>
    </ul>
    <br>
    <button evo-button color="link" theme="rectangle-outline" (click)="configForm.patchValue({loading: !configForm.value.loading})">Toggle loading: {{ configForm.value.loading }}</button>
    <br>
    <br>
    <button evo-button color="link" theme="rectangle-outline" (click)="configForm.patchValue({disabled: !configForm.value.disabled})">Toggle disabled: {{ configForm.value.disabled }}</button>
    <br>
    <br>
    <button evo-button color="link" theme="rectangle-outline" (click)="configForm.patchValue({background: !configForm.value.background})">Toggle background: {{ configForm.value.background }}</button>
    <br>
    <br>
    <evo-input formControlName="label"></evo-input>
    <br>
    <br>
    <h4 class="evo-title evo-title_h4">size</h4>
    <ul>
        <li *ngFor="let value of buttonSizes" >
            <evo-radio name="size" [value]="value" formControlName="size">{{ value }}</evo-radio>
        </li>
    </ul>
    <br>
    <br>
    <h4 class="evo-title evo-title_h4">theme</h4>
    <ul>
        <li *ngFor="let value of buttonThemes" >
            <evo-radio name="theme" [value]="value" formControlName="theme">{{ value }}</evo-radio>
        </li>
    </ul>
    <br>
    <br>

    <div *ngFor="let color of buttonColors" style="display:flex;align-items: center;margin-bottom: 20px;">
        <span style="display:inline-block; width: 110px;"><code>{{ color }}</code></span>
        <button
            evo-button
            [color]="color"
            [size]="configForm.value?.size"
            [theme]="configForm.value?.theme"
            [loading]="configForm.value?.loading"
            [disabled]="configForm.value?.disabled"
        >{{ configForm.value.label }}</button>
    </div>
</div>
`
        , props: {
            buttonSizes,
            buttonThemes,
            buttonColors,
            configForm,
        }
    }))
    .add('deprecated button colors', () => ({
        template: `
<div class="story-container" style="background: #ccc;">
        <evo-alert type="danger" style="margin: 20px;">Button <code>color</code> as <code>enum EvoButtonStyles</code> is deprecated.</evo-alert>

        <div *ngFor="let color of colors;" style="padding: 10px 20px; display: flex; align-items: center;">
            <span style="display: inline-block; width: 110px;">{{ color }}:</span>
            <evo-button [color]="color" style="margin-right: 20px;">Нажми меня</evo-button>
            <evo-button [color]="color" [disabled]="true" style="margin-right: 20px;">Disabled</evo-button>
            <evo-button [color]="color" [loading]="true" style="margin-right: 20px;">Loading</evo-button>
        </div>
</div>
        `,
        props: {
            colors: [
                'green',
                'green-lined',
                'primary',
                'lined',
                'darkblue-lined',
                'purple',
                'red',
                'white',
                'darkblue',
            ],
        },
    }));
