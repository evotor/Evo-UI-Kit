import {moduleMetadata} from '@storybook/angular';
import {EvoSwitcherModule} from '@evotor-dev/ui-kit';

const numbers = ['One', 'Two', 'Three'];

export default {
    title: 'Components/Switcher',

    decorators: [
        moduleMetadata({
            imports: [EvoSwitcherModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <div>
                <evo-switcher
                    [items]="numbers"
                    [selectedIndex]="0">
                </evo-switcher>
            </div>
       `,
    props: {
        numbers,
    },
});

Default.storyName = 'default';
