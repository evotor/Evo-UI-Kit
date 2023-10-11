import { FormControl, Validators } from '@angular/forms';
import { moduleMetadata, storiesOf } from '@storybook/angular';
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
    }))
    .add('with custom show count', () => ({
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
                'err1': 'Кастомное сообщение 1',
                'err2': 'Кастомное сообщение 2',
                'err3': 'Кастомное сообщение 3',
            },
        },
    }))
;
