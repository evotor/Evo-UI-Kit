import { Component, inject, TemplateRef, viewChild } from '@angular/core';
import {
    EvoModalComponent,
    EvoModalService
} from 'projects/evo-ui-kit/src/lib/components/evo-modal';
import {EvoButtonComponent} from 'projects/evo-ui-kit/src/lib/components/evo-button';
import {EvoIconComponent} from 'projects/evo-ui-kit/src/lib/components/evo-icon';
import {catchError} from 'rxjs/operators';
import {of, throwError, timer} from 'rxjs';

@Component({
    selector: 'modal-dynamic',
    template: `Произвольный динамичный компонент`,
    standalone: true,
})
export class ModalDynamicComponent {}

@Component({
    selector: 'app-evo-modal-wrapper',
    templateUrl: './evo-modal-wrapper.component.html',
    styleUrls: ['./evo-modal-wrapper.component.scss'],
    standalone: true,
    imports: [EvoModalComponent, EvoButtonComponent, EvoIconComponent],
})
export class EvoModalWrapperComponent {

    private readonly evoModalService = inject(EvoModalService);

    readonly template = viewChild.required('template', {read: TemplateRef});

    openModal(id: string) {
        this.evoModalService.open(id);
    }

    openDynamicModal() {
        this.evoModalService.open({
            component: ModalDynamicComponent,
        });
    }

    openConfiguredTemplateModal() {
        this.evoModalService.open({
            acceptText: 'Принять',
            declineText: 'Отменить',
            titleText: 'Окно открытое программно с конфигурацией и шаблоном в контенте',
            template: this.template(),
        });
    }

    openConfiguredComponentModal() {
        this.evoModalService.open({
            acceptText: 'Принять',
            declineText: 'Отменить',
            titleText: 'Окно открытое программно с конфигурацией и компонентом в контенте',
            component: ModalDynamicComponent,
        });
    }

    asyncAction = () => {
        return timer(2000).pipe(
            catchError(() => {
                return of(null);
            }),
        );
    };

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
