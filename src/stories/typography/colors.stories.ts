import {moduleMetadata} from '@storybook/angular';

export default {
    title: 'Typography/Colors',

    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
};

export const Default = () => ({
    styleUrls: ['../../assets/scss/story-global.scss', '../../assets/scss/colors.scss'],
    template: `
<div class="story-container">
<div class="color-blocks">
    <div class="block {{color}}" *ngFor="let color of colorsList">
        \${{color}}
    </div>
</div>
</div>
        `,
    props: {
        colorsList: [
            'color-primary',
            'color-secondary',
            'color-success',
            'color-secondary-light',
            'color-bonus',
            'color-background-grey',
            'color-background-grey-dark',
            'color-highlight',
            'color-rating',
            'color-primary-light',
            'color-icon-light',
            'color-icon-dark',
            'color-disabled',
            'color-disabled-text',
            'color-disabled-light',
            'color-text',
            'color-text-grey',
            'color-caption-text',
            'color-link',
            'color-error',
            'color-danger',
            'color-white',
            'color-white-hover',
            'color-black',
            'color-info',
            'color-primary-hover',
            'color-primary-active',
            'color-success-hover',
            'color-success-active',
            'color-bonus-hover',
            'color-bonus-active',
            'color-link-hover',
            'color-link-active',
            'color-error-hover',
            'color-error-active',
            'color-grey-hover',
            'color-grey-active',
            'color-icon-dark-hover',
            'color-icon-dark-active',
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
});

Default.storyName = 'default';
