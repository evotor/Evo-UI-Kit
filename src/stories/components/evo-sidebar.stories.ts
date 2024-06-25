import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {EvoSidebarWrapperComponent, SidebarDynamicComponent} from './evo-sidebar-wrapper/evo-sidebar-wrapper.component';
import {EvoButtonModule, EvoSidebarModule, EvoSidebarService} from '@evotor-dev/ui-kit';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EVO_SIDEBAR_DATA} from 'projects/evo-ui-kit/src/public_api';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

export default {
    title: 'Components/Sidebar',

    component: EvoSidebarWrapperComponent,
    decorators: [
        applicationConfig({
            providers: [importProvidersFrom(BrowserAnimationsModule), importProvidersFrom(HttpClientModule)],
        }),
        moduleMetadata({
            imports: [EvoSidebarModule, EvoButtonModule],
            providers: [
                // Crutch for StoryBook.
                // Otherwise we'll get 'NullInjectorError Error'
                {
                    provide: EVO_SIDEBAR_DATA,
                    useValue: {
                        message: 'Some message passed to dynamic component',
                    },
                },
                EvoSidebarService,
            ],
            declarations: [EvoSidebarWrapperComponent, SidebarDynamicComponent],
        }),
    ],
};

export const Default = () => ({
    props: {
        id: 'basket',
        header: 'Заголовок сайдбара',
        content: 'Контент сайдбара',
        footer: 'Футер сайдбара',
    },
});

Default.storyName = 'default';

export const WithRelativeFooter = () => ({
    props: {
        id: 'basket',
        header: 'Заголовок сайдбара',
        content: 'Контент сайдбара',
        footer: 'Футер сайдбара',
        relativeFooter: true,
    },
});

WithRelativeFooter.storyName = 'with relativeFooter';

export const WithMiddleSize = () => ({
    props: {
        id: 'basket',
        size: 'middle',
        header: 'Заголовок сайдбара',
        content: 'Контент сайдбара',
        footer: 'Футер сайдбара',
        relativeFooter: true,
    },
});

WithMiddleSize.storyName = 'with middle size';

export const WithLargeSize = () => ({
    props: {
        id: 'basket',
        size: 'large',
        header: 'Заголовок сайдбара',
        content: 'Контент сайдбара',
        footer: 'Футер сайдбара',
        relativeFooter: true,
    },
});

WithLargeSize.storyName = 'with large size';

export const WithBackButton = () => ({
    props: {
        id: 'basket',
        backButton: true,
        header: 'Заголовок сайдбара',
        content: 'Контент сайдбара',
        footer: 'Футер сайдбара',
        relativeFooter: true,
    },
});

WithBackButton.storyName = 'with back button';

export const WithDynamicComponent = () => ({
    props: {
        isDynamic: true,
    },
});

WithDynamicComponent.storyName = 'with dynamic component';
