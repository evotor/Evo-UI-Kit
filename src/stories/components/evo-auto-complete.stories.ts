import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoUiKitModule } from 'evo-ui-kit';
import '!style-loader!css-loader!sass-loader!./evo-auto-complete.scss';

storiesOf('Components/AutoComplete', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                EvoUiKitModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
        <evo-auto-complete formControlName="text"></evo-auto-complete>
        </form>
        `,
        props: {
            form: (new FormBuilder()).group({
                text: [ '', [ Validators.required ] ],
            }),
        },
    }))
    .add('with ngModelChange', () => ({
        template: `
        <form [formGroup]="form">
        <evo-auto-complete formControlName="text" (ngModelChange)="onChange()"></evo-auto-complete>
        </form>
        `,
        props: {
            form: (new FormBuilder()).group({
                text: [ '', [ Validators.required ] ],
            }),
            onChange: action('evo-autocomplete changed'),
        },
    }));
