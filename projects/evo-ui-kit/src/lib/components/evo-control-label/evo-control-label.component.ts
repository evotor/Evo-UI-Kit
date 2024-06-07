import {Component, Input, TemplateRef} from '@angular/core';

@Component({
    selector: 'evo-control-label',
    templateUrl: './evo-control-label.component.html',
    styleUrls: ['./evo-control-label.component.scss'],
})
export class EvoControlLabelComponent {
    // eslint-disable-next-line
    @Input() label: string | TemplateRef<any>;
    @Input() context: object | null;

    get isStringLabel(): boolean {
        return typeof this.label === 'string';
    }
}
