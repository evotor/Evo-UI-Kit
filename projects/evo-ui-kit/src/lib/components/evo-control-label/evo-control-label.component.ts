import { Component, Input } from '@angular/core';

@Component({
    selector: 'evo-control-label',
    templateUrl: './evo-control-label.component.html',
    styleUrls: [ './evo-control-label.component.scss' ],
})
export class EvoControlLabelComponent {
    @Input() label: string;
}
