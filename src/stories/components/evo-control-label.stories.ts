import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/ControlLabel', module)
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
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=4%3A18',
            }
        )
    )
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
        <evo-control-label label="Описание инпута">
            <evo-input formControlName="text"></evo-input>
        </evo-control-label>
        </form>
        `,
        props: {
            form: (new FormBuilder()).group({
                text: [ '', [ Validators.required ] ],
            }),
        },
    }));
