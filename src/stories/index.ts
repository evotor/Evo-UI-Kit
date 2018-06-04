import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoUiKitModule } from '../../node_modules/evo-ui-kit';

storiesOf('EvoButton', module)
  .addDecorator(
    moduleMetadata({
      imports: [EvoUiKitModule],
    })
  )
  .add('with text', () => ({
    template: '<evo-button>Click me</evo-button>'
  }))
  .add('with size', () => ({
    template: '<evo-button size="full-width">Click me</evo-button>',
  }));
