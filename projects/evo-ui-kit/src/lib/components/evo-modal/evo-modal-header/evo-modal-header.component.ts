import { Component, Input, OnInit } from '@angular/core';
import { EvoModalComponent } from '../evo-modal.component';

@Component({
    selector: 'evo-modal-header, [evo-modal-header]',
    templateUrl: './evo-modal-header.component.html',
    styleUrls: ['./evo-modal-header.component.scss'],
    host: {
        class: 'evo-modal__header',
    }
})
export class EvoModalHeaderComponent implements OnInit {

    @Input() titleText: string;

    constructor(
        private modal: EvoModalComponent,
    ) {}

    ngOnInit() {
        if (!this.modal) {
            throw new Error(`EvoModalHeaderComponent must be used inside EvoModalComponent only!`);
        }
    }
}
