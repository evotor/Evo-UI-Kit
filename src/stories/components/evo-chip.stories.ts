import { moduleMetadata, storiesOf } from '@storybook/angular';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvoChipModule } from '@evo/ui-kit';

const fb = new FormBuilder();
const form = fb.group({
    radios: [''],
    checkboxes: fb.array([
        [false],
        [false],
        [false],
    ]),
});

storiesOf('Components/Chip', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoChipModule,
                FormsModule,
                ReactiveFormsModule,
            ],
        }),
    )
    .add('default (radio, grey color)', () => ({
        template: `
            <evo-chip name="myChip" value="1">Chip 1</evo-chip>
            <evo-chip name="myChip" value="2">Chip 2</evo-chip>
            <evo-chip name="myChip" value="3">Chip 3</evo-chip>
        `,
    }))
    .add('types', () => ({
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
    }))
    .add('with reactive forms', () => ({
        template: `
        <div [formGroup]="form">
            <h4 class="evo-title evo-title_h4" style="margin: 10px 0;">radio type</h4>
            <pre>control value: {{ form.value.radios | json }}</pre>
            <evo-chip type="radio" formControlName="radios" value="1">Chip 1</evo-chip>
            <evo-chip type="radio" formControlName="radios" [value]="{'object': true}">Chip 2</evo-chip>
            <evo-chip type="radio" formControlName="radios" value="3">Chip 3</evo-chip>

            <h4 class="evo-title evo-title_h4" style="margin: 20px 0 10px;">checkbox type (control value is boolean)</h4>
            <pre>control value: {{ form.value.checkboxes | json }}</pre>
            <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[0]">Chip 1</evo-chip>
            <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[1]">Chip 2</evo-chip>
            <evo-chip type="checkbox" [formControl]="form.get('checkboxes').controls[2]">Chip 3</evo-chip>
        </div>
        `,
        props: {
            form,
        },
    }))
    .add('colors', () => ({
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
    }))
    .add('with counter', () => ({
        template: `
            <evo-chip name="myChip" value="1" [counter]="5">Chip 1</evo-chip>
            <evo-chip name="myChip" value="2" [counter]="50">Chip 2</evo-chip>
            <evo-chip name="myChip" value="3" [counter]="50000">Chip 2</evo-chip>
        `,
    }))
    .add('disabled', () => ({
        template: `
            <evo-chip name="myChip" value="1">Chip 1</evo-chip>
            <evo-chip name="myChip" value="2" [disabled]="true">Chip 2</evo-chip>
            <evo-chip name="myChip" value="3" [counter]="5" [disabled]="true">Chip 2</evo-chip>
        `,
    }));
