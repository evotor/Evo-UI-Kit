import {moduleMetadata} from '@storybook/angular';
import {EvoPlusMinusModule} from '@evotor-dev/ui-kit';

export default {
    title: 'Components/PlusMinus',

    decorators: [
        moduleMetadata({
            imports: [EvoPlusMinusModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <evo-plus-minus></evo-plus-minus>
       `,
    props: {},
});

Default.storyName = 'default';
