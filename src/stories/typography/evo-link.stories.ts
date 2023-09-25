export default {
    title: 'Typography/Link',
};

export const Default = () => ({
    template: `
        <a class="evo-link" href='#'>Нажми меня</a>
        `,
});

Default.storyName = 'default';

export const Dashed = () => ({
    template: `
        <a class="evo-link evo-link_dashed" href='#'>Нажми меня</a>
        `,
});

Dashed.storyName = 'dashed';

export const Danger = () => ({
    template: `
        <a class="evo-link evo-link_danger" href='#'>Нажми меня</a>
        `,
});

Danger.storyName = 'danger';
