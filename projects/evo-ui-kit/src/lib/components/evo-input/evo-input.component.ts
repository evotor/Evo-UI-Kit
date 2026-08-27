import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Inject,
    Injector,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
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
})
export class EvoInputComponent
    extends EvoBaseControl
    implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges, OnDestroy, Validator {

    @Input() autoFocus: boolean;
    // tslint:disable-next-line
    @Input('data-cp') dataCp: string;
    @Input() icon: string;
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

    @Output() blur: EventEmitter<any> = new EventEmitter<any>();

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

    private iMask: IMask.InputMask<any>;

    private hasVisibleValue = false;

    private tooltipVisibilityTimeout = false;

    private destroy$ = new Subject();

    /** Whether the user is creating a composition string (IME events). */
    private _composing = false;

    constructor(
        private zone: NgZone,
        private changeDetector: ChangeDetectorRef,
        private _renderer: Renderer2,
        @Optional() @Inject(COMPOSITION_BUFFER_MODE) private _compositionMode: boolean,
        protected injector: Injector,
    ) {
        super(injector);
    }

    @Input('value') set setValue(value) {
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

    get isDisabled() {
        if (this.loading) {
            return true;
        }
        return this.disabled;
    }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        if (value || this._value) {
            this._value = this.removePrefix(value);
            this.changeDetector.markForCheck();
        }
    }

    get inputClass(): { [cssClass: string]: boolean } {
        return {
            'focused': this.uiStates.isFocused,
            'disabled': this.isDisabled,
            'valid': this.currentState[EvoControlStates.valid],
            'invalid': this.currentState[EvoControlStates.invalid],
            [`size-${this.size}`]: this.size !== EvoInputSizes.normal,
            [`theme-${this.theme}`]: true,
            'clearable': !this.loading && this.isClearable,
            'additional': !this.loading && this.hasAdditional,
        };
    }

    get hasAdditional(): boolean {
        return !!this.tooltip || this.uiStates.hasCustomTooltip || !!this.icon;
    }

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

    ngOnInit() {

        const inputEl = this.inputElement.nativeElement;

        this.zone.runOutsideAngular(() => {

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
                ).subscribe();
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.iMask) {
            this.destroyMask();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
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

    onChange = (_value: any): void => {};
    onTouched = (): void => {};

    ngAfterViewInit() {
        if (this.autoFocus) {
            this.inputElement.nativeElement.focus();
        }
        this.checkCustomTooltip();
    }

    writeToElement(value: any) {
        this._renderer.setProperty(this.inputElement.nativeElement, 'value', value);
    }

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

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
        this.changeDetector.detectChanges();
    }

    onInputChange(value: string): void {
        if (value || this._value) {
            this._value = this.removePrefix(value);
            this.onChange(this.prefix + (this._value || ''));
            this.changeDetector.markForCheck();
        }
    }

    onFocus(): void {
        if (!this.uiStates.isFocused) {
            this.uiStates.isFocused = true;
        }
    }

    onBlur(): void {
        this.uiStates.isFocused = false;
        this.onTouched();
        this.blur.emit();
    }

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

    hideTooltip() {
        this.tooltipVisibilityTimeout = true;

        setTimeout(() => {
            if (this.tooltipVisibilityTimeout) {
                this.uiStates.isTooltipVisible = false;
            }
        }, 25);
    }

    showTooltip() {
        this.uiStates.isTooltipVisible = true;
        this.tooltipVisibilityTimeout = false;
    }

    // Composition handling is taken from:
    // https://github.com/angular/angular/blob/11.0.3/packages/forms/src/directives/default_value_accessor.ts#L152
    _compositionStart(): void {
        this._composing = true;
    }

    _compositionEnd(value: any): void {
        this._composing = false;
        if (this._compositionMode) {
            this.value = value;
        }
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
        const visibleValue = (this.iMask ? this.iMask.masked.rawInputValue : this.inputElement?.nativeElement.value) ?? '';
        const hasValue = visibleValue !== '';

        if (hasValue === this.hasVisibleValue) {
            return false;
        }

        this.hasVisibleValue = hasValue;

        return true;
    }

    private removePrefix(value: any): any {
        if (
            typeof value === 'string' &&
            value.indexOf(this.prefix) === 0
        ) {
            return value.replace(this.prefix, '');
        }
        return value;
    }

    private createMaskInstance(opts: any) {
        this.zone.runOutsideAngular(() => {
            this.iMask = new IMask.InputMask(
                this.inputElement.nativeElement,
                opts
            );
            this.iMask.on('accept', this.onMaskAccept);
            this.syncVisibleValue();
        });
    }

    private destroyMask() {
        if (!this.iMask) {
            return;
        }

        this.iMask.off('accept', this.onMaskAccept);
        this.iMask.destroy();
        this.iMask = null;
        this.syncVisibleValue();
    }

    private checkCustomTooltip() {
        this.uiStates.hasCustomTooltip = this.tooltipElement &&
            this.tooltipElement.nativeElement &&
            this.tooltipElement.nativeElement.children.length > 0;
        this.customTooltipChecked = true;
        this.changeDetector.detectChanges();
    }

    validate() {
        if (this.maskValidation && this.mask && !this.iMask.masked.isComplete) {
            return { mask: true };
        }
        return null;
    }
}
