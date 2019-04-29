import { storiesOf, moduleMetadata } from '@storybook/angular';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

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
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=4682%3A55',
            }
        )
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
