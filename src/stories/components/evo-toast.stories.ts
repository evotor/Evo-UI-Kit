import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoToastService, EvoUiKitModule } from 'evo-ui-kit';
import { EvoToastWrapperComponent } from './evo-toast-wrapper/evo-toast-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';

storiesOf('Components/Toast', module)
    .addDecorator(moduleMetadata({
        imports: [
            EvoUiKitModule,
            ReactiveFormsModule,
        ],
        providers: [
            EvoToastService,
        ],
    }))
    .add('default', () => ({
        component: EvoToastWrapperComponent,
    }));
