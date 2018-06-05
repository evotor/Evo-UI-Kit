import { storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!evo-ui-kit/styles/evo-ui-kit.scss';

storiesOf('Typography/EvoHeader', module)
  .add('h1', () => ({
    template: '<h1 class="evo-h1">Click me</h1>'
  }))
  .add('h2', () => ({
    template: '<h2 class="evo-h2">Click me</h2>'
  }))
  .add('h3', () => ({
    template: '<h3 class="evo-h3">Click me</h3>'
  }))
  .add('h4', () => ({
    template: '<h4 class="evo-h4">Click me</h4>'
  }));
