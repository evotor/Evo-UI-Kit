import { storiesOf } from '@storybook/angular';
import { withKnobs, select } from '@storybook/addon-knobs/angular';
import '!style-loader!css-loader!sass-loader!./colors.scss';

storiesOf('Typography/Colors', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        template: `
        <div class="block {{colorType}}">
            \${{colorType}}
        </div>
        `,
        props: {
            colorType: select(
                'colorType',
                [
                    'color-primary',
                    'color-primary-hover',
                    'color-primary-active',
                    'color-secondary-2',
                    'color-dark',
                    'color-background-dark',
                    'color-elements',
                    'color-success',
                    'color-success-hover',
                    'color-success-active',
                    'color-error',
                    'color-text',
                    'color-text-secondary',
                    'color-text-subscription',
                    'color-link',
                    'color-link-active',
                    'color-border',
                    'color-bonus',
                    'color-disabled',
                    'color-background',
                    'color-highlight',
                ],
                'color-primary',
            ),
        },
    }));
