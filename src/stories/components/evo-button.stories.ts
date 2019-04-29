import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/Button', module)
    .addDecorator(
        moduleMetadata({
            imports: [ EvoUiKitModule ],
        }),
    )
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=2113%3A240',
            }
        )
    )
    .add('default', () => ({
        template: '<evo-button>Нажми меня</evo-button>',
    }))
    .add('with size', () => ({
        template: `
        <div *ngFor="let size of sizes;">
        <p><evo-button [size]="size">Нажми меня</evo-button></p>
        </div>
        `,
        props: {
            sizes: [
                'small',
                'large',
            ],
        },
    }),
    StoryHelper.setDecoratorConfig(
        {
            designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=2113%3A0',
        }
    ))
    .add('with color', () => ({
        template: `
        <div *ngFor="let color of colors;" [ngStyle]="{'background-color': color === 'white' ? '#403C3D' : none}">
        <p><evo-button [color]="color">Нажми меня</evo-button></p>
        </div>
        `,
        props: {
            colors: [
                'lined',
                'darkblue',
                'darkblue-lined',
                'green',
                'green-lined',
                'purple',
                'white',
            ],
        },
    }))
    .add('with state', () => ({
        template: `
        <p><evo-button [disabled]="true">Нажми меня</evo-button></p>
        <p><evo-button [loading]="true">Нажми меня</evo-button></p>
        `,
    }));
