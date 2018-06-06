import { storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!evo-ui-kit/styles/evo-ui-kit.scss';

storiesOf('Typography/EvoHeader', module)
  .add('h1', () => ({
    template: '<h1 class="evo-h1">Заголовок h1</h1>'
  }))
  .add('h2', () => ({
    template: '<h2 class="evo-h2">Заголовок h2</h2>'
  }))
  .add('h3', () => ({
    template: '<h3 class="evo-h3">Заголовок h3</h3>'
  }))
  .add('h4', () => ({
    template: '<h4 class="evo-h4">Заголовок h4</h4>'
  }));
