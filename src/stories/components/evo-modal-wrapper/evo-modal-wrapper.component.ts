import { Component } from '@angular/core';
import { EvoModalService } from '@evo/ui-kit';
import { catchError } from 'rxjs/operators';
import { of, throwError, timer } from 'rxjs';

@Component({
    selector: 'modal-dynamic',
    template: `
    <div evo-modal-header titleText="Hello world!"></div>
    <div evo-modal-content>
        <p>🚨 You should add mixin '@include evo-modal-inner;' to host element</p>
    </div>
    <div evo-modal-buttons
        acceptText="Да"
        declineText="Нет"
        titleText="Вы точно хотите удалить приложение?"
    ></div>
    `,
    styles: [`
    :host {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    `]
})
export class ModalDynamicComponent {}

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

    openModalDynamic() {
        this.evoModalService.open({
            component: ModalDynamicComponent,
        });
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
