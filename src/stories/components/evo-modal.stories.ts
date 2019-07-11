import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoModalWrapperComponent } from './evo-modal-wrapper/evo-modal-wrapper.component';
import { EvoUiKitModule, EvoModalService } from 'evo-ui-kit';

storiesOf('Components/Modal', module)
    .addDecorator(moduleMetadata({
        imports: [
            EvoUiKitModule,
        ],
        providers: [
            EvoModalService,
        ],
    }))
    .add('default', () => ({
        component: EvoModalWrapperComponent,
        moduleMetadata: {
            declarations: [
                EvoModalWrapperComponent,
            ],
        },
        props: {
            id: 'accept',
        },
    }));
