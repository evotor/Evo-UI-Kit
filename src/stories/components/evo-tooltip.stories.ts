import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EvoButtonModule, EvoTooltipModule, EvoTooltipPosition} from '@evotor-dev/ui-kit';
import {moduleMetadata} from '@storybook/angular';

export default {
    title: 'Components/Tooltip',

    decorators: [
        moduleMetadata({
            imports: [EvoTooltipModule, EvoButtonModule, BrowserAnimationsModule],
        }),
    ],
};

const POSITIONS_LIST: EvoTooltipPosition[] = [
    EvoTooltipPosition.TOP_START,
    EvoTooltipPosition.TOP,
    EvoTooltipPosition.TOP_END,

    EvoTooltipPosition.BOTTOM_START,
    EvoTooltipPosition.BOTTOM,
    EvoTooltipPosition.BOTTOM_END,

    EvoTooltipPosition.RIGHT_START,
    EvoTooltipPosition.RIGHT,
    EvoTooltipPosition.RIGHT_END,

    EvoTooltipPosition.LEFT_START,
    EvoTooltipPosition.LEFT,
    EvoTooltipPosition.LEFT_END,
];

export const Default = () => ({
    template: `
        <style>
            .tooltip-story {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 40px;            
            }
            
            .tooltip-story__list {
                display: grid;
                grid-template-columns: max-content;
                
                gap: 16px;
                align-self: center;
                
                @media (min-width: 768px){
                    grid-template-columns: repeat(2, 280px);
                }
                
                @media (min-width: 920px){
                    grid-template-columns: repeat(3, 280px);
                }
            }
            
            .tooltip-story__list-item {
                display: flex;
                flex-direction: column;
                gap: 16px;  
                padding: 16px;
                border-radius: 8px;
                border: 1px solid #C6C6C6;
                cursor: pointer;
            }
        </style>
        <div class="tooltip-story">
            <button evoButton (click)="isDisabled = !isDisabled">{{isDisabled ? ' Enable' : 'Disable'}} tooltips</button>
            
            <ul class="tooltip-story__list">
                <li
                    *ngFor="let item of POSITIONS_LIST"
                    class="tooltip-story__list-item"
                    [evoTooltip]="tooltipBodyTemplate"
                    [evoTooltipPosition]="item"
                    [evoTooltipDisabled]="isDisabled"
                >
                    <h4 class="evo-text-header evo-text-header_h4">{{item | titlecase }}</h4>
                    <p>Tooltip parent with some content. Lorem ipsum dolor sit</p>
                </li>
            </ul>
            
            <ng-template #tooltipBodyTemplate>
                Some tooltip content
            </ng-template>
        </div>
    `,
    props: {
        POSITIONS_LIST: POSITIONS_LIST,
        isDisabled: false
    }
});

Default.storyName = 'default';
