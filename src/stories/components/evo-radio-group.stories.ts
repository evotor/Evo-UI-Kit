import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoRadioGroupModule } from '@evo/ui-kit';

const options = {
    BLUE: {
        value: 'blue',
        presentationText: 'Синяя таблетка',
    },
    RED: {
        value: 'red',
        presentationText: 'Красная таблетка',
    },
};

const foodServiceOptions = {
    BAR: {
        value: 'bar',
        presentationText: 'Бар',
    },
    CAFETERIA: {
        value: 'cafeteria',
        presentationText: 'Кофейня',
    },
    DELIVERY: {
        value: 'Delivery',
        presentationText: 'Доставка',
    },
    CAFE: {
        value: 'CAFE',
        presentationText: 'Кафе',
    },
    COFEE: {
        value: 'coffee',
        presentationText: 'Кафе на вынос',
    },
    CANTEEN: {
        value: 'canteen',
        presentationText: 'Столовая',
    },
};

const fb = new FormBuilder();
const form = fb.group({
    radioGroupValue: [ options.BLUE.value ],
    foodServiceRadioGroupValue: [ foodServiceOptions.BAR.value ],
});

storiesOf('Components/RadioGroup', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoRadioGroupModule,
            ],
        }),
)
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
            <evo-radio-group formControlName="radioGroupValue" [options]="options"></evo-radio-group>
        </form>
        `,
        props: {
            form,
            options,
        },
    }))
    .add('with default value', () => ({
        template: `
        <form [formGroup]="form">
            <evo-radio-group formControlName="radioGroupValue" [options]="options" [value]="form.value.radioGroupValue"></evo-radio-group>
        </form>
        `,
        props: {
            form,
            options,
        },
    }))
    .add('with theme', () => ({
        template: `
        <form [formGroup]="form">
            <evo-radio-group
                formControlName="radioGroupValue"
                [options]="options"
                [value]="form.value.radioGroupValue"
                theme="light">
            </evo-radio-group>

            <evo-radio-group
                formControlName="foodServiceRadioGroupValue"
                [options]="foodServiceOptions"
                [value]="form.value.foodServiceRadioGroupValue"
                theme="segment"
                style="margin-top: 40px; display: block;">
            </evo-radio-group>
        </form>
        `,
        props: {
            form,
            options,
            foodServiceOptions,
        },
    }))
    .add('with direction', () => ({
        template: `
        <form [formGroup]="form" theme="light" direction="column">
            <evo-radio-group formControlName="radioGroupValue" [options]="options"
                [value]="form.value.radioGroupValue" direction="column">
            </evo-radio-group>
        </form>
        `,
        props: {
            form,
            options,
        },
    }));
