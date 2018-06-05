import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EvoUiKitModule } from 'evo-ui-kit';

const fb = new FormBuilder();
const form = fb.group({
  checkbox: ['', [Validators.required]],
});

storiesOf('Components/EvoCheckbox', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        EvoUiKitModule,
      ],
    })
  )
  .add('default', () => ({
    template: `
    <form [formGroup]="form">
      <evo-checkbox formControlName="checkbox">Нажми меня</evo-checkbox>
    </form>
    `,
    props: {
      form,
    }
  }))
  .add('with ngModelChange action', () => ({
    template: `
    <form [formGroup]="form">
      <evo-checkbox formControlName="checkbox" (ngModelChange)="onChange($event)">Нажми меня</evo-checkbox>
    </form>
    `,
    props: {
      form,
      onChange: (event) => {
        console.log('changed');
        action('changed');
      },
    }
  }));
