import {moduleMetadata} from '@storybook/angular';
import {EvoLoaderModule} from '@evotor-dev/ui-kit';

export default {
    title: 'Components/Loader',

    decorators: [
        moduleMetadata({
            imports: [EvoLoaderModule],
        }),
    ],
};

export const EvoCircularLoader = () => ({
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
});

EvoCircularLoader.storyName = 'evo-circular-loader';
