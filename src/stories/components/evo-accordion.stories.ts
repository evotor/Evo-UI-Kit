import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoAccordionComponent } from '@evo/ui-kit';

storiesOf('Components/Accordion', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        EvoAccordionComponent
      ],
    }),
  )
  .add('default', () => ({
    template: `
        `,
  }));
