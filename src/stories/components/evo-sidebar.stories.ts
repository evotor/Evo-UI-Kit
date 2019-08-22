import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoSidebarWrapperComponent } from './evo-sidebar-wrapper/evo-sidebar-wrapper.component';
import { EvoSidebarService, EvoSidebarModule, EvoButtonModule } from '@evo/ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    }));
