import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

export enum EvoCounterSize {
    small = 'small',
    normal = 'normal',
}

@Component({
    selector: 'evo-counter',
    templateUrl: './evo-counter.component.html',
    styleUrls: ['./evo-counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCounterComponent {

    @Input() value: number;
    @Input() disabled: boolean;

    size: EvoCounterSize = EvoCounterSize.normal;

    @Input('size') set setSize(size: EvoCounterSize | string) {
        if (EvoCounterSize[size]) {
            this.size = EvoCounterSize[size];
        }
    }

    get blockClasses(): { [cssClass: string]: boolean } {
        return {
            'disabled': this.disabled,
            [`size-${this.size}`]: this.size !== EvoCounterSize.normal
        };
    }

}
