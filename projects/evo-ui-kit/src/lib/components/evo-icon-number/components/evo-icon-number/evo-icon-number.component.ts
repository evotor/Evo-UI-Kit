import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'evo-icon-number',
    templateUrl: './evo-icon-number.component.html',
    styleUrls: ['./evo-icon-number.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoIconNumberComponent {
    @Input() number: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
}
