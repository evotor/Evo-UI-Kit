import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/Popover', module)
    .addDecorator(
        moduleMetadata({
            imports: [ EvoUiKitModule ],
        }),
    ).add('default', () => ({
        template:
        `<evo-popover [position]="'right'" [media-tablet-position]="'left'">
            <p style="max-width: 360px">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p popover-body>Some popover text here...<br>
                <a href="https://evotor.ru" target="_blank">Some link</a>
            </p>
        </evo-popover>`,
    }));
