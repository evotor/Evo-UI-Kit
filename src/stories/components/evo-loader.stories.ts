import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoLoaderModule } from 'evo-ui-kit';

storiesOf('Components/Loader', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoLoaderModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
            <evo-loader></evo-loader>
       `,
        props: {},
    }))
    .add('green', () => ({
        template: `
            <evo-loader color="green"></evo-loader>
       `,
        props: {},
    }))
    .add('white', () => ({
        template: `
            <div style="background-color: #21C68B; width:100vw; height: 100vh;">
                <evo-loader color="white"></evo-loader>
            </div>
        `,
        props: {},
    }));
