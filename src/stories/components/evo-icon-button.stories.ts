import {moduleMetadata} from '@storybook/angular';
import {EvoIconButtonColor, EvoIconButtonModule, EvoIconModule, EvoNoteModule} from '@evotor-dev/ui-kit';
import {icons} from '@evotor-dev/ui-kit/icons';

export default {
    title: 'Components/IconButton',

    decorators: [
        moduleMetadata({
            imports: [EvoIconButtonModule, EvoNoteModule, EvoIconModule.forRoot([...icons])],
        }),
    ],
};

const deprecationWarning = `
<div style="margin-bottom: 32px; padding-bottom: 32px; border-bottom: solid 1px grey">
    <evo-note iconSrc="/assets/color-icons/alert-circle.svg" type="danger"><strong>DEPRECATED</strong><br>Переключение <strong>theme</strong> устарело. Будет удалено в следующем мажорном релизе библиотеки. Используйте <strong>evo-navigation-button</strong> вместо <strong>rectangle theme.</strong></evo-note>
</div>
`;

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
    <button evo-icon-button color="danger">
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
    <button evo-icon-button color="danger" [loading]="true">
        <evo-icon shape="delete"></evo-icon>
        Loading state
    </button>
</div>

<div class="section">
    <h4 class="section__title">Notification Dot</h4>
    <button evo-icon-button [notificationDot]="true" size="normal">
        <evo-icon shape="filter"></evo-icon>
        Открыть фильтры
    </button>
</div>

<div class="section">
    <h4 class="section__title">Notification Dot (button small size)</h4>
    <button evo-icon-button [notificationDot]="true" size="small">
        <evo-icon shape="filter"></evo-icon>
        Открыть фильтры
    </button>
</div>
`,
    props: {
        colorsList: Object.keys(EvoIconButtonColor),
    },
});

Default.storyName = 'default';

export const Themes = () => ({
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

${deprecationWarning}
<div class="section">
    <h4 class="section__title"><code>default</code> theme</h4>
    <button evo-icon-button>
        <evo-icon shape="chevron-left"></evo-icon>
        Back button
    </button>
</div>
<div class="section">
    <h4 class="section__title"><code>rectangle</code> theme</h4>
    <button evo-icon-button theme="rectangle">
        <evo-icon shape="chevron-left"></evo-icon>
        Back button
    </button>
</div>
    `,
});

Themes.storyName = 'themes';
