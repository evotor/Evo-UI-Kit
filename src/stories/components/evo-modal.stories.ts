import {moduleMetadata} from '@storybook/angular';
import {EvoModalWrapperComponent} from './evo-modal-wrapper/evo-modal-wrapper.component';
import {EvoButtonModule, EvoModalModule, EvoModalService} from '@evotor-dev/ui-kit';
import {EvoIconModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-icon';
import {icons} from '../../../projects/evo-ui-kit/icons';

export default {
    title: 'Components/Modal',

    decorators: [
        moduleMetadata({
            imports: [EvoModalModule, EvoButtonModule, EvoIconModule.forRoot([...icons])],
            providers: [EvoModalService],
        }),
    ],
};

export const Default = () => ({
    component: EvoModalWrapperComponent,
    moduleMetadata: {
        declarations: [EvoModalWrapperComponent],
    },
    props: {
        id: 'accept',
    },
});

Default.storyName = 'default';
