import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

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
    .add('default', () => ({
        template: `
            <evo-submenu [items]="items"></evo-submenu>
      `,
        props: {
            items,
        },
    }));
