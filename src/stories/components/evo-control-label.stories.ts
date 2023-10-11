import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoControlLabelModule, EvoIconModule, EvoInputModule, EvoPopoverModule } from '@evo/ui-kit';
import { iconHelp } from '@evo/ui-kit/icons/system';

storiesOf('Components/ControlLabel', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoControlLabelModule,
                EvoInputModule,
                EvoPopoverModule,
                EvoIconModule.forRoot([{
                    name: 'icons',
                    shapes: {
                        help: iconHelp,
                    },
                }])
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
                text: ['', [Validators.required]],
            }),
        },
    }))
    .add('with template', () => ({
        template: `
        <form [formGroup]="form">
        <evo-control-label [label]="labelTemplate" [context]="{label: 'Описание из шаблона', popover: 'Текст поповера'}">
            <evo-input formControlName="text"></evo-input>
        </evo-control-label>
        </form>
        <ng-template #labelTemplate let-label="label" let-popover="popover">
            {{ label }}
            <evo-popover style="display:flex; align-items: center; width: 24px; margin-left: 8px;">
                <evo-icon shape="help" style="display:block; width: 16px;height: 16px;fill: #91B1B8;"></evo-icon>
                <div popover-body>{{ popover }}</div>
            </evo-popover>
        </ng-template>
        `,
        props: {
            form: (new FormBuilder()).group({
                text: ['', [Validators.required]],
            }),
        },
    }));
