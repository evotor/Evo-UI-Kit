import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/Loader', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUiKitModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
            <evo-loader></evo-loader>
       `,
        props: {},
    }))
    .add('with color', () => ({
        template: `
            <evo-loader color="green"></evo-loader>
       `,
        props: {},
    }));
