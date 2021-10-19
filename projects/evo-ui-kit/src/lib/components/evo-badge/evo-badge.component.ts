import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EvoColorKeys } from '../../common/types';

@Component({
    selector: 'evo-badge',
    templateUrl: './evo-badge.component.html',
    styleUrls: ['./evo-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoBadgeComponent {
    @Input() color: EvoColorKeys;
}
