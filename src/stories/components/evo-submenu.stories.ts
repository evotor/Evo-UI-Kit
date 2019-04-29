import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

const items = [
    {
        title: 'Обзор',
        href: 'full-app-overview',
        index: 0,
        scrollOffset: 200,
    }, {
        title: 'Поддержка',
        href: 'support-anchor',
        index: 500,
        scrollOffset: 190,
    }, {
        title: 'Отзывы',
        href: 'discussion-anchor',
        index: 500,
        scrollOffset: 30,
    },
];

storiesOf('Components/Submenu', module)
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
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=5124%3A11471',
            }
        )
    )
    .add('default', () => ({
        template: `
            <evo-submenu [items]="items"></evo-submenu>
      `,
        props: {
            items,
        },
    }));
