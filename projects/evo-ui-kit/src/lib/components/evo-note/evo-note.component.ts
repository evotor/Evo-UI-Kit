import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EvoNoteType } from './types/evo-note-type';

const iconsMap = new Map<EvoNoteType, string>([
    ['danger', 'Alert Circle.svg'],
    ['info', 'Info Circle.svg'],
    ['success', 'OK.svg'],
    ['warning', 'Alert Triangle.svg'],
]);

@Component({
    selector: 'evo-note',
    templateUrl: './evo-note.component.html',
    styleUrls: [ './evo-note.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoNoteComponent {
    @Input() closable = false;
    @Input() hideIcon = false;
    @Input() iconSrc: string;
    @Input() type: EvoNoteType = 'success';

    @Output() close: EventEmitter<any> = new EventEmitter<any>();

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

    onCloseClick(): void {
        this.close.emit();
    }

    getIconSrc(): string {
        if (this.iconSrc) {
            return this.iconSrc;
        }

        if (!this.hideIcon) {
            return `../../../svg/color-icons/${iconsMap.get(this.type)}`;
        }

        return undefined;
    }
}
