import { storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!evo-ui-kit/styles/evo-ui-kit.scss';

storiesOf('Typography/EvoLink', module)
  .add('defautl', () => ({
    template: `
    <a class="evo-link" href='#'>Нажми меня</a>
    `
  }))
  .add('local', () => ({
    template: `
    <a class="evo-link evo-link_local" href='#'>Нажми меня</a>
    `
  }));

