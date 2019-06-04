import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoToggleModule } from 'evo-ui-kit';


storiesOf('Components/Toggle', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoToggleModule,
            ],
        }),
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
