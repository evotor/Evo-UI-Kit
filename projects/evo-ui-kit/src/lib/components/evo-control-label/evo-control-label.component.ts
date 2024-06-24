import {Component, Input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
    selector: 'evo-control-label',
    templateUrl: './evo-control-label.component.html',
    styleUrls: ['./evo-control-label.component.scss'],
    standalone: true,
    imports: [NgTemplateOutlet],
})
export class EvoControlLabelComponent {
    // eslint-disable-next-line
    @Input() label: string | TemplateRef<any>;
    @Input() context: object | null;

    get isStringLabel(): boolean {
        return typeof this.label === 'string';
    }
}
