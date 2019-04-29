import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/Popover', module)
    .addDecorator(
        moduleMetadata({
            imports: [ EvoUiKitModule ],
        }),
    )
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=2480%3A4816',
            }
        )
    )
    .add('default', () => ({
        template:
        `<div style="height: 100vh">
            <evo-popover [position]="'right'" [media-tablet-position]="'left'">
                <p style="max-width: 360px">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p popover-body>Some popover text here...<br>
                    <a href="https://evotor.ru" target="_blank">Some link</a>
                </p>
            </evo-popover>
        </div>`,
    }));
