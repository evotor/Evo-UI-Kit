import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoModalWrapperComponent } from './evo-modal-wrapper/evo-modal-wrapper.component';
import { EvoModalService, EvoModalModule, EvoButtonModule } from '@evo/ui-kit';

storiesOf('Components/Modal', module)
    .addDecorator(moduleMetadata({
        imports: [
            EvoModalModule,
            EvoButtonModule,
        ],
        providers: [
            EvoModalService,
        ],
    }))
    .add('default', () => ({
        component: EvoModalWrapperComponent,
        props: {
            id: 'accept',
        },
    }));
