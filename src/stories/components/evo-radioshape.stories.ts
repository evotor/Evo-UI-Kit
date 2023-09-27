import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {EvoRadioshapeModule} from '@evotor-dev/ui-kit';

const values = [{a: 1}, {b: 2}, {c: 3}];

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

export default {
    title: 'Components/Radioshape',

    decorators: [
        moduleMetadata({
            imports: [FormsModule, ReactiveFormsModule, EvoRadioshapeModule],
        }),
    ],
};

export const Default = () => ({
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
});

Default.storyName = 'default';

export const Disabled = () => ({
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
});

Disabled.storyName = 'disabled';

export const WithoutRadioControl = () => ({
    template: `
            ${styles}
            <div class="container">
                <evo-radioshape *ngFor="let value of values">content here</evo-radioshape>
            </div>
        `,
    props: {
        values,
    },
});

WithoutRadioControl.storyName = 'without radio control';

export const CheckedWithoutRadioControl = () => ({
    template: `
            ${styles}
            <div class="container">
                <evo-radioshape [forceChecked]="true">content here</evo-radioshape>
            </div>
        `,
    props: {
        values,
    },
});

CheckedWithoutRadioControl.storyName = 'checked without radio control';
