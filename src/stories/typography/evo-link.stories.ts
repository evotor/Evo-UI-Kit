import { storiesOf } from '@storybook/angular';

storiesOf('Typography/Link', module)
    .add('default', () => ({
        template: `
        <a class="evo-link" href='#'>Нажми меня</a>
        `,
    }))
    .add('dashed', () => ({
        template: `
        <a class="evo-link evo-link_dashed" href='#'>Нажми меня</a>
        `,
    }))
    .add('danger', () => ({
        template: `
        <a class="evo-link evo-link_danger" href='#'>Нажми меня</a>
        `,
    }))
;

