import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoModalWrapperComponent } from './evo-modal-wrapper/evo-modal-wrapper.component';
import { EvoModalService, EvoModalModule, EvoButtonModule } from '@evo/ui-kit';
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
            ],
        },
        props: {
            id: 'accept',
        },
    }));
