import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

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
                EvoUiKitModule,
            ],
        }),
    )
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=2531%3A7067',
            }
        )
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
