import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {EvoControlLabelModule, EvoIconComponent, EvoInputModule, EvoPopoverModule} from '@evotor-dev/ui-kit';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

export default {
    title: 'Components/ControlLabel',

    decorators: [
        applicationConfig({
            providers: [importProvidersFrom(HttpClientModule)],
        }),
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoControlLabelModule,
                EvoInputModule,
                EvoPopoverModule,
                EvoIconComponent,
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
