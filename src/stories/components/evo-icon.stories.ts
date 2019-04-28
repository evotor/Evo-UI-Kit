import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoIconModule, EvoUiKitModule } from 'evo-ui-kit';
import { EvoIconsWrapperComponent } from './evo-icons-wrapper/evo-icons-wrapper.component';

import { systemIcons } from 'dist/evo-ui-kit/icons/system/all';
import { headerIcons } from 'dist/evo-ui-kit/icons/header/all';
import { sideMenuIcons } from 'dist/evo-ui-kit/icons/side-menu/all';
import { icons } from 'dist/evo-ui-kit/icons/icons';

storiesOf('Icons', module)
    .addDecorator(
        moduleMetadata({
            declarations: [ EvoIconsWrapperComponent ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoUiKitModule,
                EvoIconModule.forRoot(icons),
            ],
        }),
    )
    .add('All', () => ({
        template: `<evo-icons-wrapper></evo-icons-wrapper>`,
    }))
    .add('Size and color', () => ({
        template: `
        <style>
            .icon-clock {
                display: block;
                width: 64px;
                fill: Crimson;
                margin-bottom: 24px;
            }
            .icon-calendar {
                display: block;
                width: 48px;
                fill: Tomato;
                margin-bottom: 18px;
            }
            .icon-lock {
                display: block;
                width: 32px;
                fill: DarkViolet;
                margin-bottom: 12px;
            }
        </style>
        <evo-icon class="icon-clock" shape="clock"></evo-icon>
        <evo-icon class="icon-calendar" shape="calendar"></evo-icon>
        <evo-icon class="icon-lock" shape="lock"></evo-icon>`,
    }));
