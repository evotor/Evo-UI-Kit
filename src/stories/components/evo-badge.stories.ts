import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoBadgeModule } from '../../../projects/evo-ui-kit/src/lib/components/evo-badge';
import { EVO_COLOR_PALETTE } from '../../../projects/evo-ui-kit/src/lib/common/constants/evo-color-palette';

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
                EVO_COLOR_PALETTE.SUCCESS,
                EVO_COLOR_PALETTE.ERROR,
                EVO_COLOR_PALETTE.ICON_DARK,
                EVO_COLOR_PALETTE.GRAPH1,
                EVO_COLOR_PALETTE.GRAPH2,
                EVO_COLOR_PALETTE.GRAPH3,
                EVO_COLOR_PALETTE.GRAPH4,
                EVO_COLOR_PALETTE.GRAPH5,
                EVO_COLOR_PALETTE.GRAPH6,
                EVO_COLOR_PALETTE.GRAPH7,
                EVO_COLOR_PALETTE.GRAPH8,
                EVO_COLOR_PALETTE.GRAPH9,
                EVO_COLOR_PALETTE.GRAPH10,
            ]
        }
    }));
