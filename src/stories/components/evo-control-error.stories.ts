import { FormControl, Validators } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoControlErrorModule } from '@evo/ui-kit';

storiesOf('Components/ControlError', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        EvoControlErrorModule,
      ],
    }),
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
