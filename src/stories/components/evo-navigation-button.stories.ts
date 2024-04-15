import {moduleMetadata} from "@storybook/angular";
import {EvoNavigationButtonModule} from '@evotor-dev/ui-kit';

export default {
    title: 'Components/EvoNavigationButton',

    decorators: [
        moduleMetadata({
            imports: [EvoNavigationButtonModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <div class="story-section">
                <h4 class="evo-title evo-title_h4">Back button</h4>
                <evo-navigation-button>Назад к списку карт</evo-navigation-button>
            </div>
        `,
});

Default.storyName = 'default';
