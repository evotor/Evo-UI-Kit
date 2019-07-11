import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoToastService, EvoUiKitModule } from 'evo-ui-kit';
import { EvoToastWrapperComponent } from './evo-toast-wrapper/evo-toast-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    .add('default', () => ({
        component: EvoToastWrapperComponent,
        moduleMetadata: {
            declarations: [
                EvoToastWrapperComponent,
            ],
        }
    }));
