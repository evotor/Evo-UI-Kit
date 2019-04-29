import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/Toggle', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUiKitModule,
            ],
        }),
    )
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: 'https://www.figma.com/file/TJMwN4a8wGEvVYTKQpUAbgC0/Evotor-UI-Kit?node-id=2531%3A7067',
            }
        )
    )
    .add('default', () => ({
        template: `
            <div>
                <evo-toggle
                    [ngModel]="isEnabled">
                </evo-toggle>
            </div>
       `,
        props: {
            isEnabled: false,
        },
    }))
    .add('with colors', () => ({
        template: `
        <ng-container *ngFor="let color of colors">
            <div style="margin-right: 24px">
                <evo-toggle [color]="color" [ngModel]="true">
                </evo-toggle>
            </div>
        </ng-container>
       `,
        props: {
            colors: [ 'green', 'orange', 'purple', 'blue' ],
            isEnabled: false,
        },
    }));
