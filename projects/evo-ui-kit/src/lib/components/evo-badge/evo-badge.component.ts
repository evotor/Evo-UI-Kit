import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EvoColorKeys } from '../../common/types';
import { EvoSizeKeys } from '../../common/types/evo-size-keys';

@Component({
    selector: 'evo-badge',
    templateUrl: './evo-badge.component.html',
    styleUrls: ['./evo-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoBadgeComponent {
    @Input() color: EvoColorKeys;
    @Input() size: EvoSizeKeys;

    get classes(): string[] {
        const classes: string[] = [];

        if (this.size) {
            classes.push(this.size);
        }

        if (this.color) {
            classes.push(this.color);
        }

        return classes;
    }
}
