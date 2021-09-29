import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EvoColor } from '../../common/constants/evo-color-palette';

@Component({
    selector: 'evo-badge',
    templateUrl: './evo-badge.component.html',
    styleUrls: ['./evo-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoBadgeComponent {
    @Input() color: EvoColor;
}
