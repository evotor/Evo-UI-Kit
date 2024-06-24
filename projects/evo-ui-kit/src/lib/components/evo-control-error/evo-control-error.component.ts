import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {SafeHtmlPipe} from '../../pipes/safe-html.pipe';

export interface IEvoControlError {
    [error: string]: string;
}

@Component({
    selector: 'evo-control-error',
    templateUrl: './evo-control-error.component.html',
    styleUrls: ['./evo-control-error.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SafeHtmlPipe],
})
export class EvoControlErrorComponent {
    @Input() errors: ValidationErrors | null;
    @Input() errorsMessages: IEvoControlError;
    @Input() showCount = 1;

    private readonly defaultErrorMessages: IEvoControlError = {
        required: 'Заполните поле',
        email: 'Неправильно указана почта',
        phone: 'Введите телефон',
    };

    get errorsMap(): string[] {
        const messages = {
            ...this.defaultErrorMessages,
            ...(this.errorsMessages || {}),
        };
        const errorKeys = Object.keys(this.errors || {});
        const result: string[] = [];
        for (let index = 0; index < this.showCount && index < errorKeys.length; index++) {
            if (messages[errorKeys[index]]) {
                result.push(messages[errorKeys[index]]);
            }
        }
        return result;
    }
}
