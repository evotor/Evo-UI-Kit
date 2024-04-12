import {moduleMetadata} from '@storybook/angular';
import {EvoLoaderModule, EvoNoteModule} from '@evotor-dev/ui-kit';

const deprecationWarning = `
<div style="margin-bottom: 32px; padding-bottom: 32px; border-bottom: solid 1px grey">
<evo-note iconSrc="/assets/color-icons/alert-circle.svg" type="danger"><strong>DEPRECATED</strong><br>Компонент <strong>evo-loader</strong> устарел. Он будет удалён в следующем мажорном релизе библиотеки. Используйте <code>evo-circular-loader</code>.</evo-note>
</div>
`;

export default {
    title: 'Components/Loader',

    decorators: [
        moduleMetadata({
            imports: [EvoLoaderModule, EvoNoteModule],
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

export const EvoLoader = () => ({
    template: `
${deprecationWarning}

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
});

EvoLoader.storyName = 'evo-loader';
