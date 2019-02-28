import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

const numbers = [ 'One', 'Two', 'Three' ];

storiesOf('Components/Switcher', module)
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
                <evo-switcher
                    [items]="numbers"
                    [selectedIndex]="0">
                </evo-switcher>
            </div>
       `,
        props: {
            numbers,
        },
    }));
