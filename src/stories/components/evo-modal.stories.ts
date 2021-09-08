import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoModalWrapperComponent, ModalDynamicComponent } from './evo-modal-wrapper/evo-modal-wrapper.component';
import { EvoButtonModule, EvoModalModule, EvoModalService } from '@evo/ui-kit';
import { EvoIconModule } from '../../../projects/evo-ui-kit/src/lib/components/evo-icon';
import { icons } from '../../../projects/evo-ui-kit/icons';

storiesOf('Components/Modal', module)
    .addDecorator(moduleMetadata({
        imports: [
            EvoModalModule,
            EvoButtonModule,
            EvoIconModule.forRoot([...icons]),
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
                ModalDynamicComponent,
            ],
            entryComponents: [
                ModalDynamicComponent,
            ],
        },
        props: {
            id: 'accept',
        },
    }));
