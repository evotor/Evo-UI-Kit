import {moduleMetadata} from '@storybook/angular';
import {EvoSidebarWrapperComponent, SidebarDynamicComponent} from './evo-sidebar-wrapper/evo-sidebar-wrapper.component';
import {EvoSidebarService, EvoSidebarModule, EvoButtonModule} from '@evotor-dev/ui-kit';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EVO_SIDEBAR_DATA} from 'projects/evo-ui-kit/src/public_api';

export default {
    title: 'Components/Sidebar',

    decorators: [
        moduleMetadata({
            imports: [BrowserAnimationsModule, EvoSidebarModule, EvoButtonModule],
            providers: [EvoSidebarService],
        }),
    ],
};

export const Default = () => ({
    component: EvoSidebarWrapperComponent,
    moduleMetadata: {
        declarations: [EvoSidebarWrapperComponent],
    },
    props: {
        id: 'basket',
        header: 'Заголовок сайдбара',
        content: 'Контент сайдбара',
        footer: 'Футер сайдбара',
    },
});

Default.storyName = 'default';

export const WithRelativeFooter = () => ({
    component: EvoSidebarWrapperComponent,
    moduleMetadata: {
        declarations: [EvoSidebarWrapperComponent],
    },
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
    component: EvoSidebarWrapperComponent,
    moduleMetadata: {
        declarations: [EvoSidebarWrapperComponent],
    },
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
    component: EvoSidebarWrapperComponent,
    moduleMetadata: {
        declarations: [EvoSidebarWrapperComponent],
    },
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
    component: EvoSidebarWrapperComponent,
    moduleMetadata: {
        declarations: [EvoSidebarWrapperComponent],
    },
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
    component: EvoSidebarWrapperComponent,
    moduleMetadata: {
        declarations: [SidebarDynamicComponent],
        entryComponents: [SidebarDynamicComponent],
        providers: [
            // Crutch for StoryBook.
            // Otherwise we'll get 'NullInjectorError Error'
            {
                provide: EVO_SIDEBAR_DATA,
                useValue: {
                    message: 'Some message passed to dynamic component',
                },
            },
        ],
    },
    props: {
        isDynamic: true,
    },
});

WithDynamicComponent.storyName = 'with dynamic component';
