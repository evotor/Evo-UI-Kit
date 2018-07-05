import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoUiKitModule } from 'evo-ui-kit';



storiesOf('Components/EvoControlLabel', module)
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
