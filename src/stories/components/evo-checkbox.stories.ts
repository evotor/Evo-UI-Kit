import {FormsModule, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {EvoCheckboxModule} from '@evo/ui-kit';

const fb = new FormBuilder();
const form = fb.group({
    checkbox: ['', [Validators.required]],
    checkboxDisabled: ['', [Validators.required]],
    checkboxCheckedDisabled: [true, [Validators.required]],
    checkboxIndeterminateDisabled: ['', [Validators.required]],
});

form.get('checkboxDisabled').disable();
form.get('checkboxCheckedDisabled').disable();
form.get('checkboxIndeterminateDisabled').disable();

export default {
    title: 'Components/Checkbox',

    decorators: [
        moduleMetadata({
            imports: [FormsModule, ReactiveFormsModule, EvoCheckboxModule],
        }),
    ],
};

export const Default = () => ({
    template: `
        <form [formGroup]="form">
            <evo-checkbox formControlName="checkbox">Чекбокс</evo-checkbox>
            <br>
            <evo-checkbox formControlName="checkboxDisabled">Заблокированный</evo-checkbox>
            <br>
            <evo-checkbox formControlName="checkboxCheckedDisabled">Заблокированный выбранный</evo-checkbox>
            <br>
            <evo-checkbox formControlName="checkboxIndeterminateDisabled" [indeterminate]="true">Заблокированный неопределённый</evo-checkbox>
        </form>
        `,
    props: {
        form,
    },
});

Default.storyName = 'default';

export const Indeterminate = () => ({
    template: `
        <evo-checkbox [(indeterminate)]="isIndeterminate" [(ngModel)]="isChecked">
            Чекбокс с неопределённым состоянием
        </evo-checkbox>
        <br>
        <br>
        <code>
    ngModel: {{ isChecked }}<br>
    isIndeterminate: {{ isIndeterminate }}
        </code>
        <br>
        <br>
        <a href="javascript:;" (click)="setIndeterminate()">Сделать неопределённым</a>
        `,
    props: {
        isIndeterminate: true,
        isChecked: false,
        setIndeterminate() {
            this.isIndeterminate = true;
        },
    },
});

Indeterminate.storyName = 'indeterminate';

export const WithNgModel = () => ({
    template: `
        <form [formGroup]="form">
        <evo-checkbox [(ngModel)]="isChecked" (change)="onChange()" [ngModelOptions]="{standalone: true}">Нажми меня</evo-checkbox>
        </form>
        `,
    props: {
        form,
        isChecked: false,
        onChange: action('evo-checkbox changed'),
    },
});

WithNgModel.storyName = 'with ngModel';
