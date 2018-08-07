import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoSidebarWrapperComponent } from './evo-sidebar-wrapper/evo-sidebar-wrapper.component';
import { EvoUiKitModule, EvoSidebarService } from 'evo-ui-kit';

storiesOf('Components/EvoSidebar', module)
    .addDecorator(moduleMetadata({
        imports: [
            EvoUiKitModule,
        ],
        providers: [
            EvoSidebarService,
        ],
    }))
    .add('default', () => ({
        component: EvoSidebarWrapperComponent,
        props: {
            id: 'basket',
            title: 'Заголовок сайдбара',
            content: 'Контент сайдбара',
            footer: 'Футер сайдбара',
        },
    }));
