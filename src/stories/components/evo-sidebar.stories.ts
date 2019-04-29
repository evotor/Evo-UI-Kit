import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoSidebarWrapperComponent } from './evo-sidebar-wrapper/evo-sidebar-wrapper.component';
import { EvoUiKitModule, EvoSidebarService } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/Sidebar', module)
    .addDecorator(moduleMetadata({
        imports: [
            EvoUiKitModule,
        ],
        providers: [
            EvoSidebarService,
        ],
    }))
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=3351%3A14120',
            }
        )
    )
    .add('default', () => ({
        component: EvoSidebarWrapperComponent,
        props: {
            id: 'basket',
            header: 'Заголовок сайдбара',
            content: 'Контент сайдбара',
            footer: 'Футер сайдбара',
        },
    }))
    .add('with relativeFooter', () => ({
        component: EvoSidebarWrapperComponent,
        props: {
            id: 'basket',
            header: 'Заголовок сайдбара',
            content: 'Контент сайдбара',
            footer: 'Футер сайдбара',
            relativeFooter: true,
        },
    }));
