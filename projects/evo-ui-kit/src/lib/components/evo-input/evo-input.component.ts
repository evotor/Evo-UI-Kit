import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    Injector,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    output,
    Renderer2,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import {
    COMPOSITION_BUFFER_MODE,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    Validator,
} from '@angular/forms';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoBaseControl} from '../../common/evo-base-control';
import {fromEvent, Subject} from 'rxjs';
import {debounceTime, map, takeUntil, tap} from 'rxjs/operators';
import {enterZone} from '../../operators';
import * as IMask from 'imask';
import {EvoControlErrorComponent} from '../evo-control-error/evo-control-error.component';
import {NgClass} from '@angular/common';
import {EvoIconComponent} from '../evo-icon/evo-icon.component';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';
import {EvoCircularLoaderComponent} from '../evo-loader';

export enum EvoInputSizes {
    small = 'small',
    normal = 'normal',
}

export enum EvoInputTheme {
    default = 'default',
    rounded = 'rounded',
}

@Component({
    selector: 'evo-input',
    templateUrl: './evo-input.component.html',
    styleUrls: ['./evo-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoInputComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => EvoInputComponent),
            multi: true,
        },
    ],
    imports: [EvoUiClassDirective, EvoIconComponent, NgClass, EvoControlErrorComponent, EvoCircularLoaderComponent],
})
export class EvoInputComponent
    extends EvoBaseControl
    implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges, OnDestroy, Validator
{
    @Input() autoFocus: boolean;
    // eslint-disable-next-line
    @Input('data-cp') dataCp: string;
    @Input() icon: string;
    // eslint-disable-next-line
    @Input() mask: any;
    @Input() placeholder: string;
    @Input() tooltip: string;
    @Input() type = 'text';
    @Input() disabled = false;
    @Input() loading = false;
    @Input() prefix = '';
    @Input() autocomplete: string;
    @Input() maxLength: number;
    @Input() inputDebounce = 50;
    @Input() unmask: boolean | 'typed' = false;
    @Input() clearable = false;
    @Input() maskValidation = false;

    readonly blur = output<Event>();
    readonly onFocus = output<Event>();

    @ViewChild('input', {static: true}) inputElement: ElementRef;
    @ViewChild('tooltipContainer', {static: true}) tooltipElement: ElementRef;

    size: EvoInputSizes = EvoInputSizes.normal;
    theme: EvoInputTheme = EvoInputTheme.default;
    _value: string;
    customTooltipChecked = false;
    uiStates = {
        hasCustomTooltip: false,
        isTooltipVisible: false,
        isFocused: false,
    };

    // eslint-disable-next-line
    private iMask: IMask.InputMask<any>;

    private hasVisibleValue = false;

    private tooltipVisibilityTimeout = false;

    private readonly destroy$ = new Subject<void>();

    /** Whether the user is creating a composition string (IME events). */
    private _composing = false;

    constructor(
        private readonly zone: NgZone,
        private readonly changeDetector: ChangeDetectorRef,
        private readonly _renderer: Renderer2,
        @Optional() @Inject(COMPOSITION_BUFFER_MODE) private readonly _compositionMode: boolean,
        protected injector: Injector,
    ) {
        super(injector);
    }

    @Input('value') set setValue(value: string) {
        this._value = value;
    }

    @Input('size') set setSize(size: EvoInputSizes | string) {
        if (EvoInputSizes[size]) {
            this.size = EvoInputSizes[size];
        }
    }

    @Input('theme') set setTheme(theme: string | EvoInputTheme) {
        if (EvoInputTheme[theme]) {
            this.theme = EvoInputTheme[theme];
        }
    }

    get isDisabled(): boolean {
        if (this.loading) {
            return true;
        }
        return this.disabled;
    }

    // eslint-disable-next-line
    get value(): any {
        return this._value;
    }

    // eslint-disable-next-line
    set value(value: any) {
        if (value || this._value) {
            this._value = this.removePrefix(value);
            this.changeDetector.markForCheck();
        }
    }

    get inputClass(): {[cssClass: string]: boolean} {
        return {
            focused: this.uiStates.isFocused,
            disabled: this.isDisabled,
            valid: this.currentState[EvoControlStates.valid],
            invalid: this.currentState[EvoControlStates.invalid],
            [`size-${this.size}`]: this.size !== EvoInputSizes.normal,
            [`theme-${this.theme}`]: true,
            clearable: !this.loading && this.isClearable,
            additional: !this.loading && this.hasAdditional,
        };
    }

    get hasAdditional(): boolean {
        return !!this.tooltip || this.uiStates.hasCustomTooltip || !!this.icon;
    }

    // eslint-disable-next-line
    set maskValue(value: any) {
        const normalizedValue = value ?? '';
        if (this.iMask) {
            if (this.unmask === 'typed') {
                this.iMask.typedValue = normalizedValue;
            } else if (this.unmask) {
                this.iMask.unmaskedValue = normalizedValue;
            } else {
                this.iMask.value = normalizedValue;
            }
        } else {
            this.writeToElement(normalizedValue);
        }
    }

    // eslint-disable-next-line
    get maskValue(): any {
        if (!this.iMask) {
            return this.inputElement.nativeElement.value;
        }
        if (this.unmask === 'typed') {
            return this.iMask.typedValue;
        }
        if (this.unmask) {
            return this.iMask.unmaskedValue;
        }
        return this.iMask.value;
    }

    get isClearable(): boolean {
        return this.clearable && !this.disabled && this.hasVisibleValue;
    }

    /** С маской maxlength считает и разделители, поэтому нативный лимит не выставляем. */
    get nativeMaxLength(): number | null {
        return this.mask ? null : this.maxLength ?? null;
    }

    ngOnInit(): void {
        const inputEl = this.inputElement.nativeElement;

        this.zone.runOutsideAngular((): void => {
            if (this.mask) {
                this.createMaskInstance(this.mask);
            }

            fromEvent(inputEl, 'input')
                .pipe(
                    tap(() => {
                        if (this.syncVisibleValue()) {
                            this.changeDetector.detectChanges();
                        }
                    }),
                    debounceTime(this.inputDebounce),
                    map((e: InputEvent) => {
                        if (this.iMask) {
                            return this.maskValue;
                        }
                        return (e.target as HTMLInputElement).value;
                    }),
                    enterZone(this.zone),
                    tap((value: string) => {
                        this.onInputChange(value);
                    }),
                    takeUntil(this.destroy$),
                )
                .subscribe();
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.iMask) {
            this.destroyMask();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes) {
            return;
        }

        const {mask} = changes;

        if (mask && !mask.firstChange) {
            const newMaskOptions = mask.currentValue;
            if (newMaskOptions) {
                if (this.iMask) {
                    this.iMask.updateOptions(newMaskOptions);
                } else {
                    this.createMaskInstance(newMaskOptions);
                }
            } else {
                this.destroyMask();
            }
        }
    }

    // eslint-disable-next-line
    onChange = (_value: any): void => {};
    onTouched = (): void => {};

    ngAfterViewInit(): void {
        if (this.autoFocus) {
            this.focus();
        }
        this.checkCustomTooltip();
    }

    // eslint-disable-next-line
    writeToElement(value: any): void {
        this._renderer.setProperty(this.inputElement.nativeElement, 'value', value);
    }

    // eslint-disable-next-line
    writeValue(value: any): void {
        if (value === this._value) {
            return;
        }

        this.value = value;

        if (this.mask) {
            this.maskValue = value;
        } else {
            this.writeToElement(value);
        }

        this.syncVisibleValue();
        this.changeDetector.markForCheck();
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
        this.changeDetector.detectChanges();
    }

    focus(): void {
        this.inputElement.nativeElement.focus();
    }

    onInputChange(value: string): void {
        if (value || this._value) {
            this._value = this.removePrefix(value);
            this.onChange(this.prefix + (this._value || ''));
            this.changeDetector.markForCheck();
        }
    }

    onInputFocus(event: Event): void {
        if (this.uiStates.isFocused) {
            return;
        }

        this.uiStates.isFocused = true;
        this.onFocus.emit(event);
    }

    onInputBlur(event: Event): void {
        this.uiStates.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
    }

    // eslint-disable-next-line
    onTooltipClick(event: any): void {
        event.preventDefault();
        event.stopPropagation();
    }

    onClear(): void {
        if (this.mask) {
            this.maskValue = '';
        } else {
            this.writeToElement('');
        }
        this.syncVisibleValue();
        this._value = '';
        this.onChange('');
        this.changeDetector.markForCheck();
    }

    hideTooltip(): void {
        this.tooltipVisibilityTimeout = true;

        setTimeout(() => {
            if (this.tooltipVisibilityTimeout) {
                this.uiStates.isTooltipVisible = false;
            }
        }, 25);
    }

    showTooltip(): void {
        this.uiStates.isTooltipVisible = true;
        this.tooltipVisibilityTimeout = false;
    }

    // Composition handling is taken from:
    // https://github.com/angular/angular/blob/11.0.3/packages/forms/src/directives/default_value_accessor.ts#L152
    _compositionStart(): void {
        this._composing = true;
    }

    // eslint-disable-next-line
    _compositionEnd(value: any): void {
        this._composing = false;
        if (this._compositionMode) {
            this.value = value;
        }
    }

    validate(): {mask: true} | null {
        if (this.maskValidation && this.mask && !this.iMask.masked.isComplete) {
            return {mask: true};
        }
        return null;
    }

    private readonly onMaskAccept = (): void => {
        if (!this.syncVisibleValue()) {
            return;
        }

        if (NgZone.isInAngularZone()) {
            this.changeDetector.markForCheck();
            return;
        }

        this.changeDetector.detectChanges();
    };

    /**
     * Пересчитывает {@link hasVisibleValue} по видимому значению в поле.
     *
     * Значение берётся из DOM, а не из {@link _value}, по двум причинам. Без маски `_value`
     * обновляется только после `inputDebounce`, поэтому крестик появлялся бы с задержкой.
     * С маской `_value` хранит распарсенное значение, а нужно именно набранное.
     *
     * @returns `true`, если состояние изменилось и представление нужно обновить.
     */
    private syncVisibleValue(): boolean {
        const visibleValue = (this.iMask ? this.iMask.rawInputValue : this.inputElement?.nativeElement.value) ?? '';
        const hasValue = visibleValue !== '';

        if (hasValue === this.hasVisibleValue) {
            return false;
        }

        this.hasVisibleValue = hasValue;

        return true;
    }

    // eslint-disable-next-line
    private removePrefix(value: any): any {
        if (typeof value === 'string' && value.indexOf(this.prefix) === 0) {
            return value.replace(this.prefix, '');
        }
        return value;
    }

    // eslint-disable-next-line
    private createMaskInstance(opts: any): void {
        this.zone.runOutsideAngular((): void => {
            this.iMask = new IMask.InputMask(this.inputElement.nativeElement, opts);
            this.iMask.on('accept', this.onMaskAccept);
            this.syncVisibleValue();
        });
    }

    private destroyMask(): void {
        if (!this.iMask) {
            return;
        }

        this.iMask.off('accept', this.onMaskAccept);
        this.iMask.destroy();
        this.iMask = null;
        this.syncVisibleValue();
    }

    private checkCustomTooltip(): void {
        this.uiStates.hasCustomTooltip =
            this.tooltipElement &&
            this.tooltipElement.nativeElement &&
            this.tooltipElement.nativeElement.children.length > 0;
        this.customTooltipChecked = true;
        this.changeDetector.detectChanges();
    }
}
