import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoPlusMinusModule } from '@evo/ui-kit';


storiesOf('Components/PlusMinus', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoPlusMinusModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
            <evo-plus-minus></evo-plus-minus>
       `,
        props: {},
    }));
