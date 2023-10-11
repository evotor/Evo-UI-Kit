import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoButtonModule, EvoToggleModule } from '@evo/ui-kit';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

const fb = new FormBuilder();

const form = fb.group({
    toggle: ['', [Validators.required]],
});

storiesOf('Components/Toggle', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoButtonModule,
                EvoToggleModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
            <div>
                <evo-toggle
                    [ngModel]="isEnabled">
                </evo-toggle>
            </div>
       `,
        props: {
            isEnabled: false,
        },
    }))
    .add('reactive disability', () => ({
        template: `
            <evo-button (click)="handleToggle()">toggle disability</evo-button>
            <form [formGroup]="form">
                <evo-toggle formControlName="toggle"></evo-toggle>
            </form>
        `,
        props: {
            form,
            handleToggle: function() {
                const control = form.get('toggle');
                control.disabled ? control.enable() : control.disable();
            },
        },
    }));
