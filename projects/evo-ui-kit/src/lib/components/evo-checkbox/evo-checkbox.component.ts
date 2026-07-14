import {
    booleanAttribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlErrorComponent} from '../evo-control-error';
import {EvoUiClassDirective} from '../../directives';

/**
 * Чекбокс с двумя взаимоисключающими режимами работы над единым источником истины - полем `value`:
 *
 * - **form-driven** (`formControlName` / `[formControl]` / `[(ngModel)]`) - через `ControlValueAccessor`
 *   и `EvoBaseControl`; поддерживает валидацию и вывод ошибок;
 * - **controlled** (`[checked]` / `[disabled]` / `(checkedChange)`) - лёгкий режим в обход CVA для плотных
 *   списков (строки/шапка таблицы), где не нужны ни `FormControl`, ни валидация.
 *
 * Режимы взаимоисключимы: смешивание на одном инстансе даёт last-writer-wins по общему полю `value`.
 * `[disabled]` не следует биндить вместе с `formControlName` (штатное предупреждение реактивных форм).
 */
@Component({
    selector: 'evo-checkbox',
    templateUrl: './evo-checkbox.component.html',
    styleUrls: ['./evo-checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoCheckboxComponent),
            multi: true,
        },
    ],
    imports: [EvoUiClassDirective, EvoControlErrorComponent],
})
export class EvoCheckboxComponent extends EvoBaseControl implements ControlValueAccessor {
    @Input('indeterminate') set setIndeterminate(value) {
        this.indeterminate = value;
    }

    @Output() indeterminateChange = new EventEmitter<boolean>();

    /** Controlled-режим: значение чекбокса в обход CVA. Без поля-инициализатора, чтобы непривязанный вход не затирал `value`, записанное `writeValue`. */
    @Input({transform: booleanAttribute}) set checked(value: boolean) {
        this.value = value;
    }

    get checked(): boolean {
        return this.value;
    }

    @Output() checkedChange = new EventEmitter<boolean>();

    @Input({transform: booleanAttribute}) disabled = false;

    @ViewChild('inputElement') inputElement: ElementRef;

    indeterminate = undefined;

    value = false;

    constructor(
        protected injector: Injector,
        private readonly cdr: ChangeDetectorRef,
    ) {
        super(injector);
    }

    onChange = (_value: boolean): void => {};
    onTouched = (): void => {};

    get checkboxClass() {
        return {
            invalid: this.currentState[EvoControlStates.invalid],
        };
    }

    onInputChange(value: boolean): void {
        this.value = value;
        this.onChange(value);
        this.checkedChange.emit(value);

        if (this.indeterminate === true) {
            this.indeterminate = false;
            this.indeterminateChange.emit(false);
        }

        this.cdr.markForCheck();
    }

    writeValue(value: boolean): void {
        this.value = value;
        this.cdr.markForCheck();
    }

    // eslint-disable-next-line
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // eslint-disable-next-line
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
        this.cdr.markForCheck();
    }
}
