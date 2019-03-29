import { storiesOf, moduleMetadata } from '@storybook/angular';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvoUiKitModule } from 'evo-ui-kit';

const fb = new FormBuilder();
const form = fb.group({
    text: [ '', Validators.required ],
});

storiesOf('Components/Textarea', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoUiKitModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
            <evo-textarea></evo-textarea>
        `,
    }))
    .add('with placeholder', () => ({
        props: {
            placeholder: 'Ваш плейсхолдер',
        },
        template: `
            <evo-textarea [placeholder]="placeholder"></evo-textarea>
        `,
    }))
    .add('reactive disability', () => ({
        props: {
            form,
            isDisabled: false,
            handleToggle: function() {
                const control = form.get('text');
                control.disabled ? control.enable() : control.disable();
            },
        },
        template: `
            <evo-button (click)="handleToggle()">toggle disability</evo-button>
            <div [formGroup]="form">
                <evo-textarea formControlName="text"></evo-textarea>
            </div>
        `,
    }));
