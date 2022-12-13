import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum EvoNoteTypes {
    danger = 'danger',
    info = 'info',
    success = 'success',
    warning = 'warning',
}

@Component({
    selector: 'evo-note',
    templateUrl: './evo-note.component.html',
    styleUrls: [ './evo-note.component.scss' ],
})
export class EvoNoteComponent {
    @Input() closable = false;
    @Input() hasIcon = false;
    @Input() iconSrc: string;
    @Input() type: EvoNoteTypes = EvoNoteTypes.success;

    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    handleCloseClick(): void {
        this.close.emit();
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.type) {
            classes.push(this.type);
        }

        if (this.closable) {
            classes.push('closable');
        }

        if (this.hasIcon || this.iconSrc) {
            classes.push('with-icon');
        }

        return classes;
    }
}
