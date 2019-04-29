import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

const numbers = [ 'One', 'Two', 'Three' ];

storiesOf('Components/Switcher', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUiKitModule,
            ],
        }),
    )
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=2531%3A7067',
            }
        )
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
