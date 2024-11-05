import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, booleanAttribute, input} from '@angular/core';
import {EvoNoteType} from './types/evo-note-type';
import {EvoIconComponent} from '../evo-icon/evo-icon.component';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';

@Component({
    selector: 'evo-note',
    templateUrl: './evo-note.component.html',
    styleUrls: ['./evo-note.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [EvoUiClassDirective, EvoIconComponent],
})
export class EvoNoteComponent {
    closable = input(false, {transform: booleanAttribute});
    @Input() iconSrc: string;
    @Input() type: EvoNoteType = 'success';

    @Output() close = new EventEmitter<MouseEvent>();

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.type) {
            classes.push('type-' + this.type);
        }

        if (this.closable()) {
            classes.push('is-closable');
        }

        return classes;
    }

    onCloseClick(event: MouseEvent): void {
        this.close.emit(event);
    }
}
