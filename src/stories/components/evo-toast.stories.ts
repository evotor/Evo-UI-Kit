import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoToastService, EvoToastModule, EvoButtonModule, EvoInputModule } from 'evo-ui-kit';
import { EvoToastWrapperComponent } from './evo-toast-wrapper/evo-toast-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Components/Toast', module)
    .addDecorator(moduleMetadata({
        imports: [
            ReactiveFormsModule,
            BrowserAnimationsModule,
            EvoButtonModule,
            EvoInputModule,
            EvoToastModule,
        ],
        providers: [
            EvoToastService,
        ],
    }))
    .add('default', () => ({
        component: EvoToastWrapperComponent,
    }));
