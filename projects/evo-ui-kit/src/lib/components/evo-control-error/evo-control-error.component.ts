import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface IEvoControlError {
    [error: string]: string;
}

@Component({
    selector: 'evo-control-error',
    templateUrl: './evo-control-error.component.html',
    styleUrls: [ './evo-control-error.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoControlErrorComponent {
    @Input() errors: any;
    @Input() errorsMessages: IEvoControlError;
    @Input() showCount = 1;

    private defaultErrorMessages: IEvoControlError = {
        required: 'Заполните поле',
        email: 'Неправильно указана почта',
        phone: 'Введите телефон',
    };

    get errorsMap(): string[] {
        const errorMessages = {
            ...this.defaultErrorMessages,
            ...(this.errorsMessages || {}),
        };
        const errorKeys = Object.keys(this.errors || {});
        return errorKeys.map((key) => errorMessages[key]);
    }

    showError(index: number): boolean {
        return ++index <= this.showCount;
    }
}
