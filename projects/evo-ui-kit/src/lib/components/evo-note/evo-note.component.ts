import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EvoNoteType } from './types/evo-note-type';

@Component({
    selector: 'evo-note',
    templateUrl: './evo-note.component.html',
    styleUrls: [ './evo-note.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoNoteComponent {
    @Input() closable = false;
    @Input() iconSrc: string;
    @Input() type: EvoNoteType = 'success';

    @Output() close = new EventEmitter<MouseEvent>();

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.type) {
            classes.push('type-' + this.type);
        }

        if (this.closable) {
            classes.push('is-closable');
        }

        return classes;
    }

    onCloseClick(event: MouseEvent): void {
        this.close.emit(event);
    }
}
