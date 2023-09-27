import {moduleMetadata} from '@storybook/angular';
import {EvoSubmenuModule} from '@evotor-dev/ui-kit';

const items = [
    {
        title: 'Обзор',
        href: 'full-app-overview',
        index: 0,
        scrollOffset: 200,
    },
    {
        title: 'Поддержка',
        href: 'support-anchor',
        index: 500,
        scrollOffset: 190,
    },
    {
        title: 'Отзывы',
        href: 'discussion-anchor',
        index: 500,
        scrollOffset: 30,
    },
];

export default {
    title: 'Components/Submenu',

    decorators: [
        moduleMetadata({
            imports: [EvoSubmenuModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <evo-submenu [items]="items"></evo-submenu>
      `,
    props: {
        items,
    },
});

Default.storyName = 'default';
