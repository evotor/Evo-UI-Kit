import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoUiKitModule } from 'evo-ui-kit';



storiesOf('Components/EvoInput', module)
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
      <evo-input formControlName="text"></evo-input>
    </form>
    `,
    props: {
      form: (new FormBuilder()).group({
        text: ['', [Validators.required]],
      }),
    },
  }))
  .add('with autoFocus', () => ({
    template: `
    <form [formGroup]="form">
      <evo-input [autoFocus]="autoFocus" formControlName="text"></evo-input>
    </form>
    `,
    props: {
      form: (new FormBuilder()).group({
        text: ['', [Validators.required]],
      }),
      autoFocus: true,
    },
  }))
  .add('with mask', () => ({
    template: `
    <form [formGroup]="form">
      <evo-input [mask]="mask" formControlName="text"></evo-input>
    </form>
    `,
    props: {
      form: (new FormBuilder()).group({
        text: ['', [Validators.required]],
      }),
      mask: {
        mask: ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
        guide: false,
      },
    },
  }))
  .add('with guided mask', () => ({
    template: `
    <form [formGroup]="form">
      <evo-input [mask]="mask" formControlName="text"></evo-input>
    </form>
    `,
    props: {
      form: (new FormBuilder()).group({
        text: ['', [Validators.required]],
      }),
      mask: {
        mask: ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
        guide: true,
      },
    },
  }))
  .add('with tooltip', () => ({
    template: `
    <form [formGroup]="form">
      <evo-input [tooltip]="tooltip" formControlName="text"></evo-input>
    </form>
    `,
    props: {
      form: (new FormBuilder()).group({
        text: ['', [Validators.required]],
      }),
      tooltip: 'Подсказка!',
    },
  }))
  .add('with type', () => ({
    template: `
    <form [formGroup]="form">
      <evo-input [type]="type" formControlName="text"></evo-input>
    </form>
    `,
    props: {
      form: (new FormBuilder()).group({
        text: ['', [Validators.required]],
      }),
      type: 'password',
    },
  }))
  .add('with onBlur', () => ({
    template: `
    <form [formGroup]="form">
      <evo-input (blur)="onBlur()" formControlName="text"></evo-input>
    </form>
    `,
    props: {
      form: (new FormBuilder()).group({
        text: ['', [Validators.required]],
      }),
      onBlur: action('blured'),
    },
  }));
