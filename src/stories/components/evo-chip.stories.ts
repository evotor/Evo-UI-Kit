import {moduleMetadata} from '@storybook/angular';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EvoChipModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-chip';
import {EvoButtonModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-button';

const fb = new FormBuilder();
const form = fb.group({
    radios: [''],
    checkboxes: fb.array([[false], [false], [false]]),
});

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
            <evo-chip name="myChip" value="1">Chip 1</evo-chip>
            <evo-chip name="myChip" value="2">Chip 2</evo-chip>
            <evo-chip name="myChip" value="3">Chip 3</evo-chip>
        `,
});

DefaultRadioGreyColor.storyName = 'default (radio, grey color)';

export const Types = () => ({
    template: `
            <h4 style="margin: 10px 0;">radio type</h4>
            <evo-chip type="radio" name="myChip" value="1">Chip 1</evo-chip>
            <evo-chip type="radio" name="myChip" value="2">Chip 2</evo-chip>
            <evo-chip type="radio" name="myChip" value="3">Chip 3</evo-chip>

            <h4 style="margin: 20px 0 10px;">checkbox</h4>
            <evo-chip type="checkbox" name="myChip" value="1">Chip 1</evo-chip>
            <evo-chip type="checkbox" name="myChip" value="2">Chip 2</evo-chip>
            <evo-chip type="checkbox" name="myChip" value="3">Chip 3</evo-chip>
        `,
});

Types.storyName = 'types';

export const WithReactiveForms = () => ({
    template: `
        <div [formGroup]="form">
            <h4 class="evo-title evo-title_h4" style="margin: 10px 0;">radio type</h4>
            <evo-chip type="radio" formControlName="radios" value="1">Chip 1</evo-chip>
            <evo-chip type="radio" formControlName="radios" [value]="{'object': true}">Chip 2</evo-chip>
            <evo-chip type="radio" formControlName="radios" value="3">Chip 3</evo-chip>
            <pre>control value: {{ form.value.radios | json }}</pre>

            <h4 class="evo-title evo-title_h4" style="margin: 20px 0 10px;">checkbox type (control value is boolean)</h4>
            <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[0]">Chip 1</evo-chip>
            <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[1]">Chip 2</evo-chip>
            <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[2]">Chip 3</evo-chip>
            <pre>control value: {{ form.value.checkboxes | json }}</pre>
        </div>
        <h4 class="evo-title evo-title_h4" style="margin: 20px 0 10px;">Patching value in mixed form</h4>
        <div [formGroup]="mixedForm">
            <evo-chip
                *ngFor="let item of list"
                [formControlName]="item.controlName"
                [type]="item.type"
                [value]="item.value"
            >{{ item.presentationText }}</evo-chip>
            <br>
            <br>
            <p><button evoButton (click)="patchValue()">patch values</button></p>
            <br>
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

export const Colors = () => ({
    template: `
            <div style="margin: 20px 0">
                <h4 style="margin-bottom: 10px;">theme grey (default)</h4>
                <evo-chip type="checkbox" name="myChip" value="1">Chip 1</evo-chip>
                <evo-chip type="checkbox" name="myChip" value="2">Chip 2</evo-chip>
                <evo-chip type="checkbox" name="myChip" value="3">Chip 3</evo-chip>
            </div>

            <div style="background-color: #F4F6F8; padding: 20px; margin: 20px 0">
                <h4 style="margin-bottom: 10px">theme white</h4>
                <evo-chip type="checkbox" name="myChip" theme="white" value="1">Chip 1</evo-chip>
                <evo-chip type="checkbox" name="myChip" theme="white" value="2">Chip 2</evo-chip>
                <evo-chip type="checkbox" name="myChip" theme="white" value="3">Chip 3</evo-chip>
            </div>
        `,
});

Colors.storyName = 'colors';

export const WithCounter = () => ({
    template: `
            <evo-chip name="myChip" value="1" [counter]="5">Chip 1</evo-chip>
            <evo-chip name="myChip" value="2" [counter]="50">Chip 2</evo-chip>
            <evo-chip name="myChip" value="3" [counter]="50000">Chip 3</evo-chip>
        `,
});

WithCounter.storyName = 'with counter';

export const Disabled = () => ({
    template: `
            <evo-chip name="myChip" value="1">Chip 1</evo-chip>
            <evo-chip name="myChip" value="2" [disabled]="true">Chip 2</evo-chip>
            <evo-chip name="myChip" value="3" [counter]="5" [disabled]="true">Chip 3</evo-chip>
        `,
});

Disabled.storyName = 'disabled';

export const Labels = () => ({
    template: `
            <evo-chip name="myChip" type="label">Chip 1</evo-chip>
            <evo-chip name="myChip" type="label" [disabled]="true">Chip 2</evo-chip>
            <evo-chip name="myChip" type="label" [counter]="5">Chip 3</evo-chip>
            <evo-chip name="myChip" type="label" [closable]="true">Chip 4</evo-chip>
            <evo-chip name="myChip" type="label" [closable]="true" [disabled]="true">Chip 5</evo-chip>
        `,
});

Labels.storyName = 'labels';
