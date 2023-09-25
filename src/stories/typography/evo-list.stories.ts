export default {
    title: 'Typography/List',
};

export const Default = () => ({
    template: `
        <ul class="evo-list">
        <li>Элемент 1</li>
        <li>Элемент 2</li>
        <li>Элемент 3</li>
        </ul>
        `,
});

Default.storyName = 'default';

export const WithСheck = () => ({
    template: `
        <ul class="evo-list evo-list_checked">
        <li>Элемент 1</li>
        <li>Элемент 2</li>
        <li>Элемент 3</li>
        </ul>
        `,
});

WithСheck.storyName = 'with сheck';
