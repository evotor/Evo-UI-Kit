import { storiesOf, moduleMetadata } from '@storybook/angular';
import { systemIcons } from 'projects/evo-ui-kit/src/lib/modules/evo-icon/icons/system/all';
import { headerIcons } from 'projects/evo-ui-kit/src/lib/modules/evo-icon/icons/header/all';
import { EvoIconModule, EvoUiKitModule } from 'evo-ui-kit';
import { EvoIconsWrapperComponent } from './evo-icons-wrapper/evo-icons-wrapper.component';

storiesOf('Icons/All', module)
    .addDecorator(
        moduleMetadata({
            declarations: [ EvoIconsWrapperComponent ],
            imports: [
                EvoUiKitModule,
                EvoIconModule.forRoot([systemIcons, headerIcons]),
            ],
        }),
    )
    .add('default', () => ({
        template: `<evo-icons-wrapper></evo-icons-wrapper>`,
        props: {},
    }));
