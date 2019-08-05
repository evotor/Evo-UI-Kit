import { Component, Input } from '@angular/core';
import { EvoModalService } from '@evo/ui-kit';
import { catchError } from 'rxjs/operators';
import { of, timer } from 'rxjs';

@Component({
    selector: 'app-evo-modal-wrapper',
    templateUrl: './evo-modal-wrapper.component.html',
    styleUrls: ['./evo-modal-wrapper.component.scss'],
})
export class EvoModalWrapperComponent {

    constructor(
        private evoModalService: EvoModalService,
    ) {
    }

    openModal(id) {
        this.evoModalService.open(id);
    }

    asyncAction = () => {
        return timer(2000).pipe(
            catchError(() => {
                return of(null);
            }),
        );
    }

}
