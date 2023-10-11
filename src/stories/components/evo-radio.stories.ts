import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {EvoRadioModule} from '@evo/ui-kit';
import {EvoButtonModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-button';

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

export default {
    title: 'Components/Radio',

    decorators: [
        moduleMetadata({
            imports: [FormsModule, EvoButtonModule, ReactiveFormsModule, EvoRadioModule],
        }),
    ],
};

export const Default = () => ({
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
});

Default.storyName = 'default';
