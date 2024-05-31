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

    private tooltipVisibilityTimeout = false;

    private destroy$ = new Subject<void>();

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
            this.onChange(this.prefix + (this._value || ''));
            this.changeDetector.detectChanges();
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
        return this.clearable && !this.disabled;
    }

    ngOnInit() {

        const inputEl = this.inputElement.nativeElement;

        this.zone.runOutsideAngular(() => {

            if (this.mask) {
                this.createMaskInstance(this.mask);
            }

            fromEvent(inputEl, 'input')
                .pipe(
                    debounceTime(this.inputDebounce),
                    map((e: InputEvent) => {
                        if (this.iMask) {
                            return this.maskValue;
                        }
                        return (e.target as HTMLInputElement).value;
                    }),
                    enterZone(this.zone),
                    tap((value: string) => {
                        this.value = value;
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

    onChange(value) {
        // this is intentional
    }

    onTouched() {
        // this is intentional
    }

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
        this.writeValue('');
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
        this.iMask = new IMask.InputMask(
            this.inputElement.nativeElement,
            opts
        );
    }

    private destroyMask() {
        this.iMask?.destroy();
        this.iMask = null;
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
