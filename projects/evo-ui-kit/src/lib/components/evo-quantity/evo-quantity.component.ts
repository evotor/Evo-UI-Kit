import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostListener,
    inject,
    Injector,
    Input,
    OnDestroy,
    Output,
    ViewChild,
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
    NgControl,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {CurrencyPipe, NgClass, registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {coerceNumberProperty, NumberInput} from '@angular/cdk/coercion';
import {Subject} from 'rxjs';

import {takeUntil, tap} from 'rxjs/operators';

import {InputMode} from './enums/input-mode';
import {EvoQuantitySize} from './types/evo-quantity-size';
import {EvoQuantityTheme} from './types/evo-quantity-theme';
import {EvoIconComponent} from '../evo-icon';
import {EvoClickOutsideDirective} from '../../directives';

registerLocaleData(localeRu, 'ru');

@Component({
    selector: 'evo-quantity',
    templateUrl: './evo-quantity.component.html',
    styleUrls: ['./evo-quantity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CurrencyPipe, EvoIconComponent, EvoClickOutsideDirective, NgClass, ReactiveFormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoQuantityComponent),
            multi: true,
        },
    ],
})
export class EvoQuantityComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    @Input()
    get min(): number {
        return this._min;
    }
    set min(value: NumberInput) {
        this._min = coerceNumberProperty(value, 0);
    }

    @Input()
    get max(): number {
        return this._max;
    }
    set max(value: NumberInput) {
        this._max = coerceNumberProperty(value, Infinity);
    }

    @Input()
    get step(): number {
        return this._step;
    }
    set step(value: NumberInput) {
        this._step = coerceNumberProperty(value, 1);
    }

    @Input()
    get pricePerOne(): number {
        return this._pricePerOne;
    }
    set pricePerOne(value: NumberInput) {
        this._pricePerOne = coerceNumberProperty(value);
    }

    @Input() isInputAllowed = false;
    @Input() isDeletable = false;
    @Input() size: EvoQuantitySize = 'normal';
    @Input() theme: EvoQuantityTheme = 'default';

    @Output() delete = new EventEmitter<void>();
    @Output() manualInputStart = new EventEmitter<void>();
    @Output() manualInputEnd = new EventEmitter<void>();

    @ViewChild('inputElement', {read: ElementRef}) inputElement: ElementRef;

    mode = InputMode.PER_BUTTONS;
    readonly InputMode = InputMode;

    readonly control = new FormControl<number | null>(null, {
        validators: [(control) => Validators.min(this.min)(control), (control) => Validators.max(this.max)(control)],
        updateOn: 'change',
    });

    private readonly injector = inject(Injector);
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroy$ = new Subject<void>();

    private lastConfirmedValue: number | undefined;
    private ngControl: NgControl | null = null;
    private onChange: ((_: number) => void) | undefined;
    private onTouched: (() => void) | undefined;

    private _max = Infinity;
    private _min = 0;
    private _step = 1;
    private _pricePerOne: number;

    get parentFormControl(): AbstractControl | undefined {
        if (!this.ngControl) {
            this.ngControl = this.injector.get(NgControl, null, {self: true, optional: true});
        }
        return this.ngControl?.control ?? undefined;
    }

    get wrapClasses(): {[cssClass: string]: boolean} {
        return {
            'evo-quantity__wrap_error': this.control.invalid,
            [`evo-quantity__wrap_size-${this.size}`]: true,
            [`evo-quantity__wrap_theme-${this.theme}`]: true,
        };
    }

    ngAfterViewInit(): void {
        this.parentFormControl?.statusChanges
            .pipe(
                tap(() => this.cdr.markForCheck()),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    @HostListener('document:keydown.escape', ['$event'])
    onEscKeyDown(event: KeyboardEvent): void {
        if (this.mode === InputMode.MANUAL) {
            event.preventDefault();
            this.cancelManualMode();
        }
    }

    @HostListener('document:keydown.enter', ['$event'])
    onEnterKeyDown(event: KeyboardEvent): void {
        if (this.mode === InputMode.MANUAL) {
            event.preventDefault();
            this.finishManualMode(this.control.value);
        }
    }

    onClickOutside(): void {
        if (this.mode === InputMode.MANUAL) {
            this.cancelManualMode();
        }
    }

    onInputFocus(): void {
        this.startManualMode();
    }

    onFinishManualModeBtnClick(): void {
        this.finishManualMode(this.control.value);
        this.onTouched?.();
    }

    onChangeValueByStepClick(step: number): void {
        const currentValue = this.control.value ?? 0;
        const newValue = currentValue + step;
        this.confirmValue(this.getNearestValidValue(newValue));
        this.onTouched?.();
    }

    onDeleteBtnClick(): void {
        this.delete.emit();
    }

    writeValue(value: number | null): void {
        this.lastConfirmedValue = value ?? undefined;
        this.control.setValue(value);
    }

    registerOnChange(fn: (_: number) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.control.disable();
        } else {
            this.control.enable();
        }
        this.cdr.detectChanges();
    }

    private confirmValue(value: number): void {
        this.control.setValue(value);

        if (value === this.lastConfirmedValue) {
            return;
        }

        this.lastConfirmedValue = value;
        this.onChange?.(value);
    }

    private startManualMode(): void {
        if (this.mode === InputMode.MANUAL) {
            return;
        }

        this.manualInputStart.emit();
        this.mode = InputMode.MANUAL;
        this.onTouched?.();
    }

    private finishManualMode(value: number | null): void {
        if (this.mode !== InputMode.MANUAL) {
            return;
        }

        this.inputElement?.nativeElement.blur();
        this.mode = InputMode.PER_BUTTONS;

        this.confirmValue(this.getNearestValidValue(value ?? 0));
        this.manualInputEnd.emit();
    }

    private cancelManualMode(): void {
        this.finishManualMode(this.lastConfirmedValue ?? null);
    }

    private getNearestValidValue(value: number): number {
        if (this.min <= value && value <= this.max) {
            return value;
        }

        if (value < this.min) {
            return this.min;
        }

        return this.max;
    }
}
