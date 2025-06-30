import {moduleMetadata} from '@storybook/angular';
import {EvoLinkButtonModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-link-button';

export default {
    title: 'Components/LinkButton',

    decorators: [
        moduleMetadata({
            imports: [EvoLinkButtonModule],
        }),
    ],
};

export const Default = () => ({
    template: `
<style>
.section {
margin-bottom: 24px;
}
.section__title {
margin: 0 0 16px;
font-weight: bold;
}
</style>

<div class="section">
    <h4 class="section__title">Default button state</h4>
    <button evo-link-button>
       Show something
    </button>
</div>

<div class="section">
    <h4 class="section__title">Disabled button state</h4>
    <button evo-link-button [disabled]="true">
        Add something
    </button>
</div>

<div class="section">
    <h4 class="section__title">Loading button state</h4>
    <button evo-link-button [loading]="true">
        Add something
    </button>
</div>
`,
});

Default.storyName = 'default';
