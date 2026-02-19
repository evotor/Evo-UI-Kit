import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {EvoCounterSize} from '../../enums/evo-counter-size';

@Component({
    selector: 'evo-counter',
    templateUrl: './evo-counter.component.html',
    styleUrls: ['./evo-counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCounterComponent {
    @Input() value = 0;
    @Input() maxValue: number;
    @Input() disabled: boolean;
    @Input() size = EvoCounterSize.NORMAL;

    get blockClasses(): {[cssClass: string]: boolean} {
        return {
            disabled: this.disabled,
            [`size_${this.size}`]: !!this.size,
        };
    }

    get counter(): string {
        const current = this.value;
        const max = this.maxValue;

        return current > max ? `${max}+` : String(current);
    }
}
