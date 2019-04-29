import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/ControlError', module)
  .addDecorator(
    moduleMetadata({
      imports: [
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
      <evo-control-error [errors]="control.errors"></evo-control-error>
    `,
    props: {
      control: new FormControl('', Validators.required),
    },
  }))
  .add('with custom messages', () => ({
    template: `
      <evo-control-error [errors]="control.errors" [errorsMessages]="errorsMessages"></evo-control-error>
    `,
    props: {
      control: new FormControl('', Validators.required),
      errorsMessages: {
        'required': 'Кастомное сообщение',
      },
    },
  }));
