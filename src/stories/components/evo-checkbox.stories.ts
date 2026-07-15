import {FormsModule, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {action} from 'storybook/actions';
import {EvoCheckboxModule} from '@evotor-dev/ui-kit';

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

export const Controlled = () => ({
    template: `
        <table class="checkbox-table">
            <thead>
                <tr>
                    <th>
                        <evo-checkbox
                            [checked]="allSelectableChecked()"
                            [indeterminate]="someSelectableChecked() && !allSelectableChecked()"
                            (checkedChange)="toggleAll($event)"
                        >
                            Все
                        </evo-checkbox>
                    </th>
                </tr>
            </thead>
            <tbody>
                @for (row of rows; track row.id) {
                    <tr>
                        <td>
                            <evo-checkbox [(checked)]="row.checked" [disabled]="row.disabled">
                                {{ row.title }}
                            </evo-checkbox>
                        </td>
                    </tr>
                }
            </tbody>
        </table>
        <br>
        <code>checked: {{ checkedIds() }}</code>
        `,
    // Без этого ячейки шапки получают браузерные `text-align: center` + `font-weight: bold`,
    // и мастер-чекбокс уезжает из колонки строк.
    styles: [
        '.checkbox-table th, .checkbox-table td { padding: 6px 12px; text-align: left; font-weight: normal; }',
        '.checkbox-table thead th { border-bottom: 1px solid #C6C6C6; }',
    ],
    props: {
        rows: [
            {id: 1, title: 'Строка 1', checked: false, disabled: false},
            {id: 2, title: 'Строка 2', checked: true, disabled: false},
            {id: 3, title: 'Строка 3 (заблокирована)', checked: false, disabled: true},
        ],
        // Мастер-чекбокс отражает только те строки, которые он способен переключить: заблокированные
        // в счёт не идут, иначе состояние "отмечено всё" недостижимо и шапка навсегда залипает в indeterminate.
        selectableRows() {
            return this.rows.filter((row) => !row.disabled);
        },
        allSelectableChecked() {
            const selectable = this.selectableRows();
            return selectable.length > 0 && selectable.every((row) => row.checked);
        },
        someSelectableChecked() {
            return this.selectableRows().some((row) => row.checked);
        },
        checkedIds() {
            return this.rows
                .filter((row) => row.checked)
                .map((row) => row.id)
                .join(', ');
        },
        toggleAll(checked: boolean) {
            this.selectableRows().forEach((row) => {
                row.checked = checked;
            });
        },
    },
});

Controlled.storyName = 'controlled';
