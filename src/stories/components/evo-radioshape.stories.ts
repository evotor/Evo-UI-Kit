import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoRadioshapeModule } from '@evo/ui-kit';

const values = [
    {a: 1},
    {b: 2},
    {c: 3},
];

const styles = `
            <style>
                evo-radioshape {
                    display: block;
                    margin-top: 16px;
                }
                .container {
                    width: 640px;
                    margin: 24px;
                    max-width: 100%;
                }
            </style>`;

storiesOf('Components/Radioshape', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoRadioshapeModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
            ${styles}
            <div class="container">
                <pre>{{ control.value | json }}</pre>
                <evo-radioshape *ngFor="let value of values"
                                name="myRadioshapeName"
                                [formControl]="control"
                                [value]="value">content here</evo-radioshape>
            </div>
        `,
        props: {
            control: new FormControl(values[0]),
            values,
        },
    }))
    .add('disabled', () => ({
        template: `
            ${styles}
            <div class="container" [formGroup]="form">
                <pre>{{ form.get('myControl').value | json }}</pre>
                <evo-radioshape *ngFor="let value of values"
                                name="myRadioshapeName"
                                formControlName="myControl"
                                [value]="value">content here</evo-radioshape>
            </div>
        `,
        props: {
            form: new FormBuilder().group({
                myControl: [{value: values[1], disabled: true}],
            }),
            values,
        },
    }))
    .add('without radio control', () => ({
        template: `
            ${styles}
            <div class="container">
                <evo-radioshape *ngFor="let value of values">content here</evo-radioshape>
            </div>
        `,
        props: {
            values,
        },
    }))
    .add('checked without radio control', () => ({
        template: `
            ${styles}
            <div class="container">
                <evo-radioshape [forceChecked]="true">content here</evo-radioshape>
            </div>
        `,
        props: {
            values,
        },
    }));
