import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/PlusMinus', module)
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
            <evo-plus-minus></evo-plus-minus>
       `,
        props: {},
    }));
