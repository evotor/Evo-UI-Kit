import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoButtonModule, EvoRadioModule } from '@evo/ui-kit';

const GenderTypes = {
    male: 'Мужчина',
    female: 'Женщина',
};

const genderValues = Object.keys(GenderTypes);

const fb = new FormBuilder();
const form = fb.group({
    gender: GenderTypes.male,
});

function toggleDisabled() {
    const control = form.get('gender');

    control.disabled ? control.enable() : control.disable();
}

storiesOf('Components/Radio', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                EvoButtonModule,
                ReactiveFormsModule,
                EvoRadioModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
            <evo-radio *ngFor="let genderValue of genderValues"
                [value]="GenderTypes[genderValue]"
                name="gender"
                formControlName="gender">{{ GenderTypes[genderValue] }}
            </evo-radio>
        </form>
        <br>
        <evo-button (click)="toggleDisabled()">Toggle disabled</evo-button>
        `,
        props: {
            form,
            genderValues,
            GenderTypes,
            toggleDisabled,
        },
    }));
