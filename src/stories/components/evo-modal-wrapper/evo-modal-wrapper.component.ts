import { Component, Input } from '@angular/core';
import { EvoModalService } from '@evo/ui-kit';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, of, throwError, timer } from 'rxjs';

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

    openModal(id: string) {
        this.evoModalService.open(id);
    }

    asyncAction = () => {
        return timer(2000).pipe(
            catchError(() => {
                return of(null);
            }),
        );
    }

    getAsyncActionFail(id: string) {
        return () => {
            return throwError({}).pipe(
                catchError((err, caught) => {
                    this.evoModalService.close(id, false);
                    return throwError(err);
                }),
            );
        };
    }

}
