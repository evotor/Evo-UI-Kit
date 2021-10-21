import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EvoColorKeys } from '../../common/types';
import { EvoSizeKeys } from '../../common/types/evo-size-keys';
import { EvoSize } from '../../common/enums';

@Component({
    selector: 'evo-badge',
    templateUrl: './evo-badge.component.html',
    styleUrls: ['./evo-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoBadgeComponent {
    @Input() color: EvoColorKeys;
    @Input() size: EvoSizeKeys = EvoSize.normal;

    get classes(): string[] {
        const classes: string[] = [];

        if (this.size) {
            this.size === 'large' ? classes.push('normal') : classes.push(this.size);
        }

        if (this.color) {
            classes.push(this.color);
        }

        return classes;
    }
}
