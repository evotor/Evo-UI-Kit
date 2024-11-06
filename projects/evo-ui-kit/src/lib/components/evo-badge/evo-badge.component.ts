import { ChangeDetectionStrategy, Component, ContentChild, Input } from '@angular/core';
import { EvoBadgeColor, EvoBadgeSize } from './types';
import {EvoIconComponent} from '../evo-icon';


@Component({
    selector: 'evo-badge',
    templateUrl: './evo-badge.component.html',
    styleUrls: ['./evo-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoBadgeComponent {

    @Input() color: EvoBadgeColor;
    @Input() size: EvoBadgeSize;
    @Input() multiline = false;

    // tslint:disable-next-line:no-input-rename
    @Input('width.px') widthPixels: number;
    // tslint:disable-next-line:no-input-rename
    @Input('width.%') widthPercents: number;

    @ContentChild(EvoIconComponent, {static: false}) evoIconComponent: EvoIconComponent;

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

        if (!!this.evoIconComponent) {
            classes.push('prefixed-with-icon');
        }

        return classes;
    }
}
