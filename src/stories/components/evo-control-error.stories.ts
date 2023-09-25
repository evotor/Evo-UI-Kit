import {FormControl, Validators} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {EvoControlErrorModule} from '@evo/ui-kit';

export default {
    title: 'Components/ControlError',

    decorators: [
        moduleMetadata({
            imports: [EvoControlErrorModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <evo-control-error [errors]="control.errors"></evo-control-error>
        `,
    props: {
        control: new FormControl('', Validators.required),
    },
});

Default.storyName = 'default';

export const WithCustomMessages = () => ({
    template: `
            <evo-control-error [errors]="control.errors" [errorsMessages]="errorsMessages"></evo-control-error>
        `,
    props: {
        control: new FormControl('', Validators.required),
        errorsMessages: {
            required: 'Кастомное сообщение',
        },
    },
});

WithCustomMessages.storyName = 'with custom messages';

export const WithCustomShowCount = () => ({
    template: `
            <pre>There are 3 errors, but only 2 of them are visible (see showCount prop)</pre>

            <evo-control-error
                [errors]="{err1: true, err2: true, err3: true}"
                [errorsMessages]="errorsMessages"
                showCount="2"
            ></evo-control-error>
        `,
    props: {
        errorsMessages: {
            err1: 'Кастомное сообщение 1',
            err2: 'Кастомное сообщение 2',
            err3: 'Кастомное сообщение 3',
        },
    },
});

WithCustomShowCount.storyName = 'with custom show count';
