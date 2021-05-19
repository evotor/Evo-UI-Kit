import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoSidebarWrapperComponent, SidebarDynamicComponent } from './evo-sidebar-wrapper/evo-sidebar-wrapper.component';
import { EvoSidebarService, EvoSidebarModule, EvoButtonModule } from '@evo/ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EVO_SIDEBAR_DATA } from 'projects/evo-ui-kit/src/public_api';

storiesOf('Components/Sidebar', module)
    .addDecorator(moduleMetadata({
        imports: [
            BrowserAnimationsModule,
            EvoSidebarModule,
            EvoButtonModule,
        ],
        providers: [
            EvoSidebarService,
        ]
    }))
    .add('default', () => ({
        component: EvoSidebarWrapperComponent,
        moduleMetadata: {
            declarations: [
                EvoSidebarWrapperComponent,
            ],
        },
        props: {
            id: 'basket',
            header: 'Заголовок сайдбара',
            content: 'Контент сайдбара',
            footer: 'Футер сайдбара',
        },
    }))
    .add('with relativeFooter', () => ({
        component: EvoSidebarWrapperComponent,
        moduleMetadata: {
            declarations: [
                EvoSidebarWrapperComponent,
            ],
        },
        props: {
            id: 'basket',
            header: 'Заголовок сайдбара',
            content: 'Контент сайдбара',
            footer: 'Футер сайдбара',
            relativeFooter: true,
        },
    }))
    .add('with middle size', () => ({
        component: EvoSidebarWrapperComponent,
        moduleMetadata: {
            declarations: [
                EvoSidebarWrapperComponent,
            ],
        },
        props: {
            id: 'basket',
            size: 'middle',
            header: 'Заголовок сайдбара',
            content: 'Контент сайдбара',
            footer: 'Футер сайдбара',
            relativeFooter: true,
        },
    }))
    .add('with large size', () => ({
        component: EvoSidebarWrapperComponent,
        moduleMetadata: {
            declarations: [
                EvoSidebarWrapperComponent,
            ],
        },
        props: {
            id: 'basket',
            size: 'large',
            header: 'Заголовок сайдбара',
            content: 'Контент сайдбара',
            footer: 'Футер сайдбара',
            relativeFooter: true,
        },
    }))
    .add('with back button', () => ({
        component: EvoSidebarWrapperComponent,
        moduleMetadata: {
            declarations: [
                EvoSidebarWrapperComponent,
            ],
        },
        props: {
            id: 'basket',
            backButton: true,
            header: 'Заголовок сайдбара',
            content: 'Контент сайдбара',
            footer: 'Футер сайдбара',
            relativeFooter: true,
        },
    })).add('with dynamic component', () => ({
        component: EvoSidebarWrapperComponent,
        moduleMetadata: {
            declarations: [
                SidebarDynamicComponent,
            ],
            entryComponents: [
                SidebarDynamicComponent,
            ],
            providers: [
                // Crutch for StoryBook.
                // Otherwise we'll get 'NullInjectorError Error'
                {
                    provide: EVO_SIDEBAR_DATA,
                    useValue: {
                        message: 'Some message passed to dynamic component'
                    }
                }
            ]
        },
        props: {
            isDynamic: true,
        },
    }));
