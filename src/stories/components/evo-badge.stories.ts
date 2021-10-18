import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoBadgeModule } from '../../../projects/evo-ui-kit/src/lib/components/evo-badge';
import { EVO_COLOR } from '../../../projects/evo-ui-kit/src/lib/common/enums/index';

storiesOf('Components/Badge', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoBadgeModule,
            ]
        })
    )
    .add('default', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
        <style>
            .badge-container {
                margin-bottom: 10px;
            }
        </style>
        <div class="story-container">
            <h2>Badges and available colors</h2>
            <div class="story-section">
                <ng-container *ngFor="let color of colorsList">
                    <div class="badge-container">
                        <evo-badge [color]="color">{{color}}</evo-badge>
                    </div>
                </ng-container>
            </div>
        </div>
        `,
        props: {
            colorsList: [
                'DEFAULT_NO_COLOR',
                EVO_COLOR.success,
                EVO_COLOR.error,
                EVO_COLOR.iconDark,
                EVO_COLOR.graph1,
                EVO_COLOR.graph2,
                EVO_COLOR.graph3,
                EVO_COLOR.graph4,
                EVO_COLOR.graph5,
                EVO_COLOR.graph6,
                EVO_COLOR.graph7,
                EVO_COLOR.graph8,
                EVO_COLOR.graph9,
                EVO_COLOR.graph10,
            ]
        }
    }));
