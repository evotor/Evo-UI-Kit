import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EvoColor } from '../../common/types/evo-color.type';

@Component({
    selector: 'evo-badge',
    templateUrl: './evo-badge.component.html',
    styleUrls: ['./evo-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoBadgeComponent {
    @Input() color: EvoColor;
}
