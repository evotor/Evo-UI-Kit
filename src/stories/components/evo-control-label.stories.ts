import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {EvoControlLabelModule, EvoIconModule, EvoInputModule, EvoPopoverModule} from '@evotor-dev/ui-kit';
import {iconHelp} from '@evotor-dev/evo-icons/dist/monochrome/system';

export default {
    title: 'Components/ControlLabel',

    decorators: [
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoControlLabelModule,
                EvoInputModule,
                EvoPopoverModule,
                EvoIconModule.forRoot([
                    {
                        name: 'icons',
                        shapes: {
                            help: iconHelp,
                        },
                    },
                ]),
            ],
        }),
    ],
};

export const Default = () => ({
    template: `
        <form [formGroup]="form">
        <evo-control-label label="Описание инпута">
            <evo-input formControlName="text"></evo-input>
        </evo-control-label>
        </form>
        `,
    props: {
        form: new FormBuilder().group({
            text: ['', [Validators.required]],
        }),
    },
});

Default.storyName = 'default';

export const WithTemplate = () => ({
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
        form: new FormBuilder().group({
            text: ['', [Validators.required]],
        }),
    },
});

WithTemplate.storyName = 'with template';
