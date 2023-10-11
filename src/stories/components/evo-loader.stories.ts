import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoLoaderModule } from '@evo/ui-kit';

storiesOf('Components/Loader', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoLoaderModule,
            ],
        }),
    )
    .add('evo-circular-loader', () => ({
        template: `
<div class="story-container" style="height: 100vh">
    <h4 class="evo-title evo-title_h4">Default</h4>
    <evo-circular-loader></evo-circular-loader>
    <br>
    <h4 class="evo-title evo-title_h4">With style <code>--evo-circular-loader-color: red; width: 48px; height: 48px;</code></h4>
    <evo-circular-loader style="--evo-circular-loader-color: red; width: 48px; height: 48px;"></evo-circular-loader>
    <br>
</div>
       `,
        props: {},
    }))
    .add('evo-loader', () => ({
        template: `
<div class="story-container">
    <div style="position:relative;background-color: #fff; width:100vw; height: 33vh;">
        <code>default</code>
        <evo-loader></evo-loader>
    </div>
    <div style="position:relative;background-color: #fff; width:100vw; height: 33vh;">
        <code>color=green</code>
        <evo-loader color="green"></evo-loader>
    </div>
    <div style="position:relative;background-color: #21C68B; width:100vw; height: 34vh;">
        <code>color=white</code>
        <evo-loader color="white"></evo-loader>
    </div>
</div>
       `,
        props: {},
    }));
