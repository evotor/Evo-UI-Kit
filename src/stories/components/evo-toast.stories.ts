import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoToastService, EvoUiKitModule } from 'evo-ui-kit';
import { EvoToastWrapperComponent } from './evo-toast-wrapper/evo-toast-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/Toast', module)
    .addDecorator(moduleMetadata({
        imports: [
            EvoUiKitModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
        ],
        providers: [
            EvoToastService,
        ],
    }))
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=4420%3A99',
            }
        )
    )
    .add('default', () => ({
        component: EvoToastWrapperComponent,
    }));
