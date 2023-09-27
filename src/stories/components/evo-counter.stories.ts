import {moduleMetadata} from '@storybook/angular';
import {EvoCounterModule} from 'projects/evo-ui-kit/src/lib/components/evo-counter';

export default {
    title: 'Components/Counter',

    decorators: [
        moduleMetadata({
            imports: [EvoCounterModule],
        }),
    ],
};

export const Default = () => ({
    template: `
        <style>
            .counter-block {
                margin-left: 5px;
                margin-right: 5px;
            }
        </style>

        <div class='section'>
            <h4>Default counter</h4>
            <span class="counter-block">
                <evo-counter [value]='1'></evo-counter>
            </span>
            <span class="counter-block">
                <evo-counter [value]='32131'></evo-counter>
            </span>
        </div>

        <div class='section'>
            <h4>Small counter</h4>
            <span class="counter-block">
                <evo-counter [value]='1' size='small'></evo-counter>
            </span>
            <span class="counter-block">
                <evo-counter [value]='32131' size='small'></evo-counter>
            </span>
        </div>

        <div class='section'>
            <h4>Disabled counter</h4>
            <span class="counter-block">
                <evo-counter [value]='1' [disabled]='true'></evo-counter>
            </span>
            <span class="counter-block">
                <evo-counter [value]='1' [disabled]='true' size='small'></evo-counter>
            </span>
        </div>
        `,
});

Default.storyName = 'default';
