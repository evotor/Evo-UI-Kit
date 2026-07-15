import {
    AfterViewInit,
    booleanAttribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlErrorComponent} from '../evo-control-error';
import {EvoUiClassDirective} from '../../directives';

/** Класс, который `evoUiClass` вешает на нативный input: единственный флаг - невалидность контрола. */
type EvoCheckboxClass = {invalid: boolean | undefined};

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
 *
 * `disabled` запрещает пользовательский ввод, но НЕ программную установку состояния: `[checked]` пишется
 * и на заблокированном чекбоксе - ровно как заблокированный `FormControl` принимает `setValue`
 * (см. спеку `disabled does not block programmatic value`). Комбинация «заблокирован и отмечен» штатная.
 *
 * Односторонний `[checked]`: после `(checkedChange)` родитель обязан привести своё значение к
 * пришедшему, иначе выражение биндинга не изменится, Angular не перепишет вход - и чекбокс останется
 * в состоянии, которое родитель не подтверждал. Если значение вычисляемое (мастер-чекбокс над списком),
 * выводите его так, чтобы любое состояние было достижимо: считайте только те строки, которые мастер
 * реально переключает, иначе шапка залипнет в indeterminate. Проще - two-way `[(checked)]`.
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
export class EvoCheckboxComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewInit {
    @Input('indeterminate') set setIndeterminate(value) {
        this.indeterminate = value;
    }

    @Output() indeterminateChange = new EventEmitter<boolean>();

    /**
     * Controlled-режим: значение чекбокса в обход CVA. Без поля-инициализатора, чтобы непривязанный вход
     * не затирал `value`, записанное `writeValue`. Проверки на `disabled` здесь нет намеренно - см. JSDoc класса.
     */
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

    /**
     * Единый источник истины состояния «отмечен».
     * Внутреннее имя CVA-модели (в него пишет `writeValue`); публично наружу отдаётся аксессором `checked`.
     */
    value = false;

    private cachedCheckboxClass: EvoCheckboxClass = {invalid: undefined};

    constructor(
        protected injector: Injector,
        private readonly cdr: ChangeDetectorRef,
        private readonly destroyRef: DestroyRef,
    ) {
        super(injector);
    }

    onChange = (_value: boolean): void => {};
    onTouched = (): void => {};

    ngAfterViewInit(): void {
        // NgControl (formControlName/[formControl]/[ngModel]) привязывается только после первого CD -
        // резолвим его здесь через ленивый геттер EvoBaseControl (null-результат не кэшируется).
        const control = this.control;

        // Под OnPush внешние изменения статуса/touched/значения контрола не метят view сами -
        // подписываемся на его события и метим вручную, иначе invalid-класс и блок ошибки застынут.
        control?.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());
    }

    get checkboxClass(): EvoCheckboxClass {
        const invalid = this.currentState[EvoControlStates.invalid];

        // Стабильная ссылка: новый объект аллоцируем только при флипе invalid, иначе evoUiClass пересоздаёт differ на каждом CD.
        if (invalid !== this.cachedCheckboxClass.invalid) {
            this.cachedCheckboxClass = {invalid};
        }

        return this.cachedCheckboxClass;
    }

    onInputChange(value: boolean): void {
        this.value = value;
        this.onChange(value);
        this.onTouched();
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
