import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {EvoUiClassDirective} from '../../../../directives';
import {EvoCounterSize} from '../../enums/evo-counter-size';

@Component({
    selector: 'evo-counter',
    templateUrl: './evo-counter.component.html',
    styleUrls: ['./evo-counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        EvoUiClassDirective
    ]
})
export class EvoCounterComponent {
    readonly value = input(0);
    readonly maxValue = input<number | undefined>(undefined);
    readonly disabled = input(false);
    readonly size = input(EvoCounterSize.NORMAL);

    readonly blockClasses = computed((): Record<string, boolean> => {
        const size: EvoCounterSize = this.size();

        return {
            disabled: this.disabled(),
            [`size_${size}`]: !!size,
        };
    });

    readonly counter = computed((): string => {
        const current = this.value();
        const max = this.maxValue();

        return current > max ? `${max}+` : String(current);
    });
}
