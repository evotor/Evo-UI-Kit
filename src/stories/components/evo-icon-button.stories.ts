import {moduleMetadata} from '@storybook/angular';
import {EvoIconButtonModule, EvoIconModule, EvoNoteModule} from '@evotor-dev/ui-kit';
import {icons} from '@evotor-dev/ui-kit/icons';

export default {
    title: 'Components/IconButton',

    decorators: [
        moduleMetadata({
            imports: [EvoIconButtonModule, EvoNoteModule, EvoIconModule.forRoot([...icons])],
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
code {
display:block;
margin-bottom: 8px;
}
</style>

<div class="section">
    <h4 class="section__title">Default button</h4>
    <button evo-icon-button>
        <evo-icon shape="plus"></evo-icon>
        Add something
    </button>
</div>

<div class="section">
    <h4 class="section__title">Small size button</h4>
    <button evo-icon-button size="small">
        <evo-icon shape="plus"></evo-icon>
        Add something
    </button>
</div>

<div class="section">
    <h4 class="section__title">Colors</h4>
    <ng-container *ngFor="let color of colorsList; let index = index">
        <code>{{ color }}</code>
        <button evo-icon-button [color]="color">
            <evo-icon [shape]="['plus', 'delete', 'download'][index % 3]"></evo-icon>
            Label
        </button>
        <br>
        <br>
    </ng-container>
</div>

<div class="section">
    <h4 class="section__title">Just an icon</h4>
    <button evo-icon-button>
        <evo-icon shape="plus"></evo-icon>
    </button>
    <br>
    <button evo-icon-button color="error">
        <evo-icon shape="delete"></evo-icon>
    </button>
</div>

<div class="section">
    <h4 class="section__title">States</h4>
    <button evo-icon-button disabled="disabled">
        <evo-icon shape="plus"></evo-icon>
        Disabled state
    </button>
    <br>
    <button evo-icon-button color="error" [loading]="true">
        <evo-icon shape="delete"></evo-icon>
        Loading state
    </button>
</div>
`,
    props: {
        colorsList: ['success', 'link', 'error', 'custom'],
    },
});

Default.storyName = 'default';
