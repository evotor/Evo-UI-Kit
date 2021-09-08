import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { EvoModalCloseTargets, EvoModalComponent } from '../evo-modal.component';

@Component({
    selector: 'evo-modal-buttons, [evo-modal-buttons]',
    templateUrl: './evo-modal-buttons.component.html',
    styleUrls: ['./evo-modal-buttons.component.scss'],
})
export class EvoModalButtonsComponent implements OnInit {

    @Input() acceptText: string;
    @Input() acceptButtonColor = 'green';
    @Input() declineText: string;

    readonly closeTargets = EvoModalCloseTargets;

    constructor(
        public modal: EvoModalComponent,
    ) {}

    ngOnInit() {
        if (!this.modal) {
            throw new Error(`EvoModalButtonsComponent must be used inside EvoModalComponent only!`);
        }
        // Propagate `declineText` to parent
        if (
            this.declineText &&
            this.modal.declineText === undefined
        ) {
            this.modal.declineText = this.declineText;
        }
    }

    @HostBinding('class')
    get hostClass(): string[] {
        const classes = ['evo-modal__buttons'];
        const { declineText, acceptText } = this;
        if (!declineText || !acceptText) {
            classes.push('evo-modal__buttons_single-btn');
        }
        return classes;
    }
}
