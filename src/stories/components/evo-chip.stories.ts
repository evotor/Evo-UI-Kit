import {moduleMetadata} from '@storybook/angular';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EvoChipModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-chip';
import {EvoButtonModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-button';

const fb = new FormBuilder();
const form = fb.group({
    radios: [''],
    checkboxes: fb.array([[false], [false], [false]]),
});

const defaultStyles = `
    :host {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .container {
        display: flex;
        gap: 24px;
        flex-direction: column;
    }

    .title {
        margin: 0;
    }

    .inner-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .chips-list {
        display: flex;
        gap: 8px;
    }
`

export default {
    title: 'Components/Chip',

    decorators: [
        moduleMetadata({
            imports: [EvoChipModule, EvoButtonModule, FormsModule, ReactiveFormsModule],
        }),
    ],
};

export const DefaultRadioGreyColor = () => ({
    template: `
            <style>
                ${defaultStyles}
            </style>

            <h2 class="evo-text-header evo-text-header_h2 title">Default state (type = radio, theme = grey, size = normal)</h2>

            <div class="chips-list">
                <evo-chip name="myChip" value="1">Chip 1</evo-chip>
                <evo-chip name="myChip" value="2">Chip 2</evo-chip>
                <evo-chip name="myChip" value="3">Chip 3</evo-chip>
            </div>
        `,
});

DefaultRadioGreyColor.storyName = 'default (radio, grey color, normal size)';

export const Types = () => ({
    template: `
            <style>
                ${defaultStyles}
            </style>
            <div class="container" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2 title">Type = radio</h2>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = normal</h4>

                    <div class="chips-list">
                        <evo-chip type="radio" name="myChipNormal" value="1">Chip 1</evo-chip>
                        <evo-chip type="radio" name="myChipNormal" value="2">Chip 2</evo-chip>
                        <evo-chip type="radio" name="myChipNormal" value="3">Chip 3</evo-chip>
                    </div>
                </div>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = large</h4>

                    <div class="chips-list">
                        <evo-chip size="large" type="radio" name="myChipLarge" value="1">Chip 1</evo-chip>
                        <evo-chip size="large" type="radio" name="myChipLarge" value="2">Chip 2</evo-chip>
                        <evo-chip size="large" type="radio" name="myChipLarge" value="3">Chip 3</evo-chip>
                    </div>
                </div>
            </div>

            <div class="container" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2 title">Type = checkbox</h2>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4">Size = normal</h4>

                    <div class="chips-list">
                        <evo-chip type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip type="checkbox" value="2">Chip 2</evo-chip>
                        <evo-chip type="checkbox" value="3">Chip 3</evo-chip>
                    </div>
                </div>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = large</h4>

                    <div class="chips-list">
                        <evo-chip size="large" type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip size="large" type="checkbox" value="2">Chip 2</evo-chip>
                        <evo-chip size="large" type="checkbox" value="3">Chip 3</evo-chip>
                    </div>
                </div>
            </div>
        `,
});

Types.storyName = 'types (radio, checkbox)';

export const WithReactiveForms = () => ({
    template: `
        <style>
            ${defaultStyles}

            .container {
                align-items: flex-start;
            }
        </style>

        <div class="container" [formGroup]="form">
            <div class="inner-container">
                <h4 class="evo-title evo-title_h4 title">radio type (size default)</h4>

                <div class="chips-list">
                    <evo-chip type="radio" formControlName="radios" value="1">Chip 1</evo-chip>
                    <evo-chip type="radio" formControlName="radios" [value]="{'object': true}">Chip 2</evo-chip>
                    <evo-chip type="radio" formControlName="radios" value="3">Chip 3</evo-chip>
                </div>

                <pre>control value: {{ form.value.radios | json }}</pre>
            </div>

             <div class="inner-container">
                <h4 class="evo-title evo-title_h4 title">checkbox type (control value is boolean)</h4>

                <div class="chips-list">
                    <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[0]">Chip 1</evo-chip>
                    <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[1]">Chip 2</evo-chip>
                    <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[2]">Chip 3</evo-chip>
                </div>

                <pre>control value: {{ form.value.checkboxes | json }}</pre>
             </div>

             <div class="inner-container" [formGroup]="mixedForm">
                <h4 class="evo-title evo-title_h4 title">Patching value in mixed form</h4>

                <div class="chips-list">
                    <evo-chip
                        *ngFor="let item of list"
                        [formControlName]="item.controlName"
                        [type]="item.type"
                        [value]="item.value"
                    >{{ item.presentationText }}</evo-chip>
                </div>

                <button evoButton (click)="patchValue()">patch values</button>

                <pre>{{mixedForm.value | json}}</pre>
             </div>
        </div>
        `,
    props: {
        form,
        mixedForm: new FormGroup({
            prop: new FormControl(2),
            flag: new FormControl(false),
        }),
        list: [
            {
                presentationText: 'first button',
                value: 1,
                type: 'radio',
                controlName: 'prop',
            },
            {
                presentationText: 'second button',
                value: 2,
                type: 'radio',
                controlName: 'prop',
            },
            {
                presentationText: 'checkbox',
                value: true,
                type: 'checkbox',
                controlName: 'flag',
            },
        ],
        patchValue: function () {
            this.mixedForm.patchValue({
                prop: this.mixedForm.value.prop === 1 ? 2 : 1,
                flag: this.mixedForm.value.prop === 2,
            });
        },
    },
});

WithReactiveForms.storyName = 'with reactive forms';

export const Colors = () => ({
    template: `
            <style>
                ${defaultStyles}

                .chips-list_dark {
                    background-color: #f4f6f8;
                    padding: 8px;
                }
            </style>

            <div class="container" [formGroup]="form">
               <h2 class="evo-text-header evo-text-header_h2 title">Theme = grey (default)</h2>

               <div class="inner-container">
                   <h4 class="evo-text-header evo-text-header_h4 title">Size = normal</h4>

                   <div class="chips-list">
                       <evo-chip type="checkbox" value="1">Chip 1</evo-chip>
                       <evo-chip type="checkbox" value="2">Chip 2</evo-chip>
                       <evo-chip type="checkbox" value="3">Chip 3</evo-chip>
                   </div>
               </div>

               <div class="inner-container">
                   <h4 class="evo-text-header evo-text-header_h4 title">Size = large</h4>

                   <div class="chips-list">
                       <evo-chip size="large" type="checkbox" value="1">Chip 1</evo-chip>
                       <evo-chip size="large" type="checkbox" value="2">Chip 2</evo-chip>
                       <evo-chip size="large" type="checkbox" value="3">Chip 3</evo-chip>
                   </div>
               </div>
            </div>

            <div class="container container_dark" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2 title">Theme = white</h2>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = normal</h4>

                    <div class="chips-list chips-list_dark">
                        <evo-chip theme="white" type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip theme="white" type="checkbox" value="2">Chip 2</evo-chip>
                        <evo-chip theme="white" type="checkbox" value="3">Chip 3</evo-chip>
                    </div>
                </div>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = large</h4>

                    <div class="chips-list chips-list_dark">
                        <evo-chip theme="white" size="large" type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip theme="white" size="large" type="checkbox" value="2">Chip 2</evo-chip>
                        <evo-chip theme="white" size="large" type="checkbox" value="3">Chip 3</evo-chip>
                    </div>
                </div>
             </div>
        `,
});

Colors.storyName = 'colors';

export const WithCounter = () => ({
    template: `
            <style>
                ${defaultStyles}
            </style>

            <div class="container" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2 title">Counter</h2>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = normal</h4>

                    <div class="chips-list">
                        <evo-chip name="myChipNormal" value="1" [counter]="5">Chip 1</evo-chip>
                        <evo-chip name="myChipNormal" value="2" [counter]="50">Chip 2</evo-chip>
                        <evo-chip name="myChipNormal" value="3" [counter]="50000">Chip 3</evo-chip>
                    </div>
                </div>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = large</h4>

                    <div class="chips-list">
                        <evo-chip size="large" name="myChipLarge" value="1" [counter]="5">Chip 1</evo-chip>
                        <evo-chip size="large" name="myChipLarge" value="2" [counter]="50">Chip 2</evo-chip>
                        <evo-chip size="large" name="myChipLarge" value="3" [counter]="50000">Chip 3</evo-chip>
                    </div>
                </div>
            </div>
        `,
});

WithCounter.storyName = 'with counter';

export const Disabled = () => ({
    template: `
             <style>
                ${defaultStyles}
             </style>
             <div class="container" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2 title">Disabled state</h2>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = normal</h4>

                    <div class="chips-list">
                        <evo-chip type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip type="checkbox" value="2" [disabled]="true">Chip 2</evo-chip>
                        <evo-chip type="checkbox" value="3" [disabled]="true" counter="5">Chip 3</evo-chip>
                        <evo-chip type="checkbox" value="4" [disabled]="true" [closable]="true">Chip 4</evo-chip>
                    </div>
                </div>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = large</h4>

                    <div class="chips-list">
                        <evo-chip size="large" type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip size="large" type="checkbox" value="2" [disabled]="true">Chip 2</evo-chip>
                        <evo-chip size="large" type="checkbox" value="3" [disabled]="true" counter="5">Chip 3</evo-chip>
                        <evo-chip size="large" type="checkbox" value="4" [disabled]="true" [closable]="true">Chip 4</evo-chip>
                    </div>
                </div>
             </div>
        `,
});

Disabled.storyName = 'disabled';

export const Labels = () => ({
    template: `
            <style>
                ${defaultStyles}
            </style>
            <div class="container" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2 title">Type = label</h2>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = normal</h4>

                    <div class="chips-list">
                        <evo-chip name="myChipNormal" type="label">Chip 1</evo-chip>
                        <evo-chip name="myChipNormal" type="label" [disabled]="true">Chip 2</evo-chip>
                        <evo-chip name="myChipNormal" type="label" [counter]="5">Chip 3</evo-chip>
                        <evo-chip name="myChipNormal" type="label" [closable]="true">Chip 4</evo-chip>
                        <evo-chip name="myChipNormal" type="label" [closable]="true" [disabled]="true">Chip 5</evo-chip>
                    </div>
                </div>

                <div class="inner-container">
                    <h4 class="evo-text-header evo-text-header_h4 title">Size = large</h4>

                    <div class="chips-list">
                        <evo-chip size="large" name="myChipLarge" type="label">Chip 1</evo-chip>
                        <evo-chip size="large" name="myChipLarge" type="label" [disabled]="true">Chip 2</evo-chip>
                        <evo-chip size="large" name="myChipLarge" type="label" [counter]="5">Chip 3</evo-chip>
                        <evo-chip size="large" name="myChipLarge" type="label" [closable]="true">Chip 4</evo-chip>
                        <evo-chip size="large" name="myChipLarge" type="label" [closable]="true" [disabled]="true">Chip 5</evo-chip>
                    </div>
                </div>
            </div>
        `,
});

Labels.storyName = 'labels';
