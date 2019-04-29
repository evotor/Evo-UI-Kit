import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoModalWrapperComponent } from './evo-modal-wrapper/evo-modal-wrapper.component';
import { EvoUiKitModule, EvoModalService } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/Modal', module)
    .addDecorator(moduleMetadata({
        imports: [
            EvoUiKitModule,
        ],
        providers: [
            EvoModalService,
        ],
    }))
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=3552%3A261',
            }
        )
    )
    .add('default', () => ({
        component: EvoModalWrapperComponent,
        props: {
            id: 'accept',
        },
    }));
