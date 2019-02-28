import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';


storiesOf('Components/Toggle', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUiKitModule,
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
    }));
