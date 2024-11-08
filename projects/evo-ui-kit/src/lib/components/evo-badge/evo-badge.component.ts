import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {EvoBadgeColor, EvoBadgeSize} from './types';

@Component({
    selector: 'evo-badge',
    templateUrl: './evo-badge.component.html',
    styleUrls: ['./evo-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class EvoBadgeComponent {
    @Input() color: EvoBadgeColor;
    @Input() size: EvoBadgeSize = 'normal';

    /**
     * @deprecated don't use it
     */
    @Input() multiline = false;

    /**
     * @deprecated use CSS
     * @param width
     */
    @Input('width.px') widthPixels: number;

    /**
     * @deprecated use CSS
     * @param width
     */
    @Input('width.%') widthPercents: number;

    @HostBinding('style.width') get styleWidth(): string {
        return this.widthPercents ? `${this.widthPercents}%` : this.widthPixels ? `${this.widthPixels}px` : undefined;
    }

    get classes(): string[] {
        const classes: string[] = [];

        if (this.size) {
            classes.push(this.size);
        }

        if (this.color) {
            classes.push(this.color);
        }

        if (this.multiline) {
            classes.push('multiline');
        }

        return classes;
    }
}
