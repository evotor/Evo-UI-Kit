import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/Tabs', module)
  .addDecorator(
    moduleMetadata({
      imports: [ EvoUiKitModule ],
    }),
  )
  .add('default', () => ({
    template: '<evo-tabs></evo-tabs>',
  }));
