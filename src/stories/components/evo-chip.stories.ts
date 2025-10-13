import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EvoButtonModule, EvoChipModule} from '@evotor-dev/ui-kit';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

const fb = new FormBuilder();
const form = fb.group({
    radios: [''],
    checkboxes: fb.array([[false], [false], [false]]),
});

export default {
    title: 'Components/Chip',

    decorators: [
        applicationConfig({
            providers: [importProvidersFrom(HttpClientModule)],
        }),
        moduleMetadata({
            imports: [EvoChipModule, EvoButtonModule, FormsModule, ReactiveFormsModule],
        }),
    ],
};

export const DefaultRadioGreyColor = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="section">
                <h2 class="section__title">Default state (type = radio, theme = grey, size = normal)</h2>

                <div style="display: flex; gap: 8px;">
                    <evo-chip name="myChip" value="1">Chip 1</evo-chip>
                    <evo-chip name="myChip" value="2">Chip 2</evo-chip>
                    <evo-chip name="myChip" value="3">Chip 3</evo-chip>
                </div>
            </div>
        `,
});

DefaultRadioGreyColor.storyName = 'default (radio, grey color, normal size)';

export const Types = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="section" style="display: flex; flex-direction: column; gap: 24px;" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2">Type = radio</h2>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = normal</h4>

                    <div style="display: flex; gap: 8px;">
                        <evo-chip type="radio" name="myChipNormal" value="1">Chip 1</evo-chip>
                        <evo-chip type="radio" name="myChipNormal" value="2">Chip 2</evo-chip>
                        <evo-chip type="radio" name="myChipNormal" value="3">Chip 3</evo-chip>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = large</h4>

                    <div style="display: flex; gap: 8px;">
                        <evo-chip size="large" type="radio" name="myChipLarge" value="1">Chip 1</evo-chip>
                        <evo-chip size="large" type="radio" name="myChipLarge" value="2">Chip 2</evo-chip>
                        <evo-chip size="large" type="radio" name="myChipLarge" value="3">Chip 3</evo-chip>
                    </div>
                </div>
            </div>

            <div class="section" style="display: flex; flex-direction: column; gap: 24px;" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2" style="margin: 0;">Type = checkbox</h2>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = normal</h4>

                    <div style="display: flex; gap: 8px;">
                        <evo-chip type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip type="checkbox" value="2">Chip 2</evo-chip>
                        <evo-chip type="checkbox" value="3">Chip 3</evo-chip>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = large</h4>

                    <div style="display: flex; gap: 8px;">
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
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
        <div class="section" style="display: flex; flex-direction: column; gap: 24px;" [formGroup]="form">
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <h4 class="evo-title evo-title_h4" style="margin: 0">radio type (size default)</h4>

                <div style="display: flex; gap: 8px;">
                    <evo-chip type="radio" formControlName="radios" value="1">Chip 1</evo-chip>
                    <evo-chip type="radio" formControlName="radios" [value]="{'object': true}">Chip 2</evo-chip>
                    <evo-chip type="radio" formControlName="radios" value="3">Chip 3</evo-chip>
                </div>

                <pre>control value: {{ form.value.radios | json }}</pre>
            </div>

             <div style="display: flex; flex-direction: column; gap: 16px;">
                <h4 class="evo-title evo-title_h4" style="margin: 0;">checkbox type (control value is boolean)</h4>

                <div style="display: flex; gap: 8px;">
                    <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[0]">Chip 1</evo-chip>
                    <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[1]">Chip 2</evo-chip>
                    <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[2]">Chip 3</evo-chip>
                </div>

                <pre>control value: {{ form.value.checkboxes | json }}</pre>
             </div>
        </div>

        <div class="section" style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px;" [formGroup]="mixedForm">
            <h4 class="evo-title evo-title_h4" style="margin: 0;">Patching value in mixed form</h4>

            <div style="display: flex; gap: 8px;">
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

const colors = `
--evo-chip-color: white;
--evo-chip-background-color: black;
--evo-chip-color-hover: red;
--evo-chip-background-color-hover: blue;
--evo-chip-color-active: lightgreen;
--evo-chip-background-color-active: yellow
--evo-chip-checked-color: purple;
--evo-chip-checked-background-color: cyan;
--evo-chip-checked-color-hover: tomato;
--evo-chip-checked-background-color-hover: yellow;
--evo-chip-checked-color-active: grey;
--evo-chip-checked-background-color-active: white;
`;
export const Colors = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
             <div class="section" style="display: flex; flex-direction: column; gap: 24px;" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2" style="margin: 0;">Theme = grey (default)</h2>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = normal</h4>

                    <div style="display: flex; gap: 8px;">
                        <evo-chip type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip type="checkbox" value="2">Chip 2</evo-chip>
                        <evo-chip type="checkbox" value="3">Chip 3</evo-chip>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = large</h4>

                    <div style="display: flex; gap: 8px;">
                        <evo-chip size="large" type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip size="large" type="checkbox" value="2">Chip 2</evo-chip>
                        <evo-chip size="large" type="checkbox" value="3">Chip 3</evo-chip>
                    </div>
                </div>
             </div>

            <div class="section" style="display: flex; flex-direction: column; gap: 24px; background-color: #F4F6F8;" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2" style="margin: 0;">Theme = white</h2>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = normal</h4>

                    <div style="display: flex; gap: 8px;">
                        <evo-chip theme="white" type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip theme="white" type="checkbox" value="2">Chip 2</evo-chip>
                        <evo-chip theme="white" type="checkbox" value="3">Chip 3</evo-chip>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = large</h4>

                    <div style="display: flex; gap: 8px;">
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
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="section" style="display: flex; flex-direction: column; gap: 24px;" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2" style="margin: 0;">Counter</h2>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = normal</h4>

                    <div style="display: flex; gap: 8px;">
                        <evo-chip name="myChipNormal" value="1" [counter]="5">Chip 1</evo-chip>
                        <evo-chip name="myChipNormal" value="2" [counter]="50">Chip 2</evo-chip>
                        <evo-chip name="myChipNormal" value="3" [counter]="50000">Chip 3</evo-chip>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = large</h4>

                    <div style="display: flex; gap: 8px;">
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
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
             <div class="section" style="display: flex; flex-direction: column; gap: 24px;" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2" style="margin: 0;">Disabled state</h2>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = normal</h4>

                    <div style="display: flex; gap: 8px;">
                        <evo-chip type="checkbox" value="1">Chip 1</evo-chip>
                        <evo-chip type="checkbox" value="2" [disabled]="true">Chip 2</evo-chip>
                        <evo-chip type="checkbox" value="3" [disabled]="true" counter="5">Chip 3</evo-chip>
                        <evo-chip type="checkbox" value="4" [disabled]="true" [closable]="true">Chip 4</evo-chip>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = large</h4>

                    <div style="display: flex; gap: 8px;">
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
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="section" style="display: flex; flex-direction: column; gap: 24px;" [formGroup]="form">
                <h2 class="evo-text-header evo-text-header_h2" style="margin: 0;">Type = label</h2>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = normal</h4>

                    <div style="display: flex; gap: 8px;">
                        <evo-chip name="myChipNormal" type="label">Chip 1</evo-chip>
                        <evo-chip name="myChipNormal" type="label" [disabled]="true">Chip 2</evo-chip>
                        <evo-chip name="myChipNormal" type="label" [counter]="5">Chip 3</evo-chip>
                        <evo-chip name="myChipNormal" type="label" [closable]="true">Chip 4</evo-chip>
                        <evo-chip name="myChipNormal" type="label" [closable]="true" [disabled]="true">Chip 5</evo-chip>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <h4 class="evo-text-header evo-text-header_h4" style="margin: 0;">Size = large</h4>

                    <div style="display: flex; gap: 8px;">
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
