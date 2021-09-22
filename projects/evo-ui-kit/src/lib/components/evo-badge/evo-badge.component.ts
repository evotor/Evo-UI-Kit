import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export enum BadgeColor {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    STATUS = 'status',
    INFO = 'info',
    ICON_DARK = 'icon-dark',
    GRAPH1 = 'graph-1',
    GRAPH2 = 'graph-2',
    GRAPH3 = 'graph-3',
    GRAPH4 = 'graph-4',
    GRAPH5 = 'graph-5',
    GRAPH6 = 'graph-6',
    GRAPH7 = 'graph-7',
    GRAPH8 = 'graph-8',
    GRAPH9 = 'graph-9',
    GRAPH10 = 'graph-10'
}

@Component({
    selector: 'evo-badge',
    templateUrl: './evo-badge.component.html',
    styleUrls: ['./evo-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvoBadgeComponent {
    color: BadgeColor;

    @Input('color') set setColor(color) {
        if (BadgeColor[color]) {
            this.color = BadgeColor[color];
        }
    }
}
