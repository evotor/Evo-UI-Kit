import { storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!evo-ui-kit/styles/main.scss';

storiesOf('Typography/EvoList', module)
  .add('default', () => ({
    template: `
    <ul class="evo-list">
      <li>Элемент 1</li>
      <li>Элемент 2</li>
      <li>Элемент 3</li>
    </ul>
    `,
  }))
  .add('with сheck', () => ({
    template: `
    <ul class="evo-list evo-list_checked">
      <li>Элемент 1</li>
      <li>Элемент 2</li>
      <li>Элемент 3</li>
    </ul>
    `,
  }));

