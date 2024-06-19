import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {EvoNavigationButtonModule} from '@evotor-dev/ui-kit';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

export default {
    title: 'Components/Buttons/NavigationButton',

    decorators: [
        applicationConfig({
            providers: [importProvidersFrom(HttpClientModule)],
        }),
        moduleMetadata({
            imports: [EvoNavigationButtonModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <div class="story-container">
                <h4 class="evo-title evo-title_h4 story-section">Back button</h4>
                <evo-navigation-button>Назад к списку карт</evo-navigation-button>
            </div>
        `,
});

Default.storyName = 'default';
