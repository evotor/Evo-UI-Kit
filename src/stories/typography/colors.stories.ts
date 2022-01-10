import {storiesOf} from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!./colors.scss';

storiesOf('Typography/Colors', module)
    // .addDecorator(withKnobs)
    .add('default', () => ({
        template: `
        <div class="block {{color}}" *ngFor="let color or colorsList">
            \${{color}}
        </div>
        `,
        props: {
            colorsList: [
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
                'color-graph-1',
                'color-graph-2',
                'color-graph-3',
                'color-graph-4',
                'color-graph-5',
                'color-graph-6',
                'color-graph-7',
                'color-graph-8',
                'color-graph-9',
                'color-graph-10',
            ],
        },
    }));
