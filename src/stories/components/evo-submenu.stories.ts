import {moduleMetadata} from '@storybook/angular';
import {EvoNoteModule, EvoSubmenuModule} from '@evotor-dev/ui-kit';

const deprecationWarning = `
<div style="margin-bottom: 32px; padding-bottom: 32px; border-bottom: solid 1px grey">
<evo-note iconSrc="assets/color-icons/alert-circle.svg" type="danger"><strong>DEPRECATED</strong><br>Компонент <strong>evo-submenu</strong> устарел. Он будет удалён в следующем мажорном релизе библиотеки. Используйте <code>evo-tabs</code>.</evo-note>
</div>
`;

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
            imports: [EvoSubmenuModule, EvoNoteModule],
        }),
    ],
};

export const Default = () => ({
    template: `
        ${deprecationWarning}

        <evo-submenu [items]="items"></evo-submenu>
      `,
    props: {
        items,
    },
});

Default.storyName = 'default';
