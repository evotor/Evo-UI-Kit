import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoCheckboxModule } from '@evo/ui-kit';

const fb = new FormBuilder();
const form = fb.group({
    checkbox: [ '',  [ Validators.required ] ],
});

storiesOf('Components/Checkbox', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoCheckboxModule,
            ],
        }),
)
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
        <evo-checkbox formControlName="checkbox">Нажми меня</evo-checkbox>
        </form>
        `,
        props: {
            form,
        },
    }))
    .add('indeterminate', () => ({
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
            }
        },
    }))
    .add('with ngModelChange', () => ({
        template: `
        <form [formGroup]="form">
        <evo-checkbox formControlName="checkbox" (ngModelChange)="onChange()">Нажми меня</evo-checkbox>
        </form>
        `,
        props: {
            form,
            onChange: action('evo-checkbox changed'),
        },
    }));
