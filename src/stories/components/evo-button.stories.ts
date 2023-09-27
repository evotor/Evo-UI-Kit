import {moduleMetadata} from '@storybook/angular';
import {EvoButtonModule} from '@evo/ui-kit';

export default {
    title: 'Components/Button',

    decorators: [
        moduleMetadata({
            imports: [EvoButtonModule],
        }),
    ],
};

export const Default = () => ({
    template: '<evo-button>Нажми меня</evo-button>',
});

Default.storyName = 'default';

export const WithSize = () => ({
    template: `
        <div *ngFor="let size of sizes;">
        <p><evo-button [size]="size">Нажми меня</evo-button></p>
        </div>
        `,
    props: {
        sizes: ['small', 'large'],
    },
});

WithSize.storyName = 'with size';

export const WithColor = () => ({
    template: `
        <div *ngFor="let color of colors;" [ngStyle]="{'background-color': color === 'white' ? '#403C3D' : none}">
        <p><evo-button [color]="color">Нажми меня</evo-button></p>
        </div>
        `,
    props: {
        colors: ['lined', 'darkblue-lined', 'green', 'green-lined', 'purple', 'white', 'red', 'darkblue'],
    },
});

WithColor.storyName = 'with color';

export const WithState = () => ({
    template: `
        <div *ngFor="let color of colors;" style="padding: 10px 20px; background: #ccc;display: flex; align-items: center;">
            <span style="display: inline-block; width: 110px;">{{ color }}:</span>
            <evo-button [color]="color" style="margin-right: 20px;">Нажми меня</evo-button>
            <evo-button [color]="color" [disabled]="true" style="margin-right: 20px;">Нажми меня</evo-button>
            <evo-button [color]="color" [loading]="true" style="margin-right: 20px;">Нажми меня</evo-button>
        </div>
        `,
    props: {
        colors: ['green', 'green-lined', 'primary', 'lined', 'darkblue-lined', 'purple', 'red', 'white', 'darkblue'],
    },
});

WithState.storyName = 'with state';
