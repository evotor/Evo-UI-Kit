import {moduleMetadata} from '@storybook/angular';
import {EvoNavigationButtonModule} from '@evotor-dev/ui-kit';

export default {
    title: 'Components/NavigationButton',

    decorators: [
        moduleMetadata({
            imports: [EvoNavigationButtonModule],
        }),
    ],
};

export const Default = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
            <div class="story-container">
                <h4 class="evo-title evo-title_h4 story-section">Back button</h4>
                <evo-navigation-button>Назад к списку карт</evo-navigation-button>
            </div>
        `,
});

Default.storyName = 'default';
