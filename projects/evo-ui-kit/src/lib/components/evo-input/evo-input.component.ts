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
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { COMPOSITION_BUFFER_MODE, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';
import { EvoBaseControl } from '../../common/evo-base-control';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map, takeUntil, tap } from 'rxjs/operators';
import { enterZone } from '../../operators';
import * as IMask from 'imask';

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
    ],
})
export class EvoInputComponent
    extends EvoBaseControl
    implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges, OnDestroy {

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
    @Input() inputDebounce = 200;

    @Input('value') set setValue(value) {
        this._value = value;
    }

    @Output() blur: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('input', {static: true}) inputElement: ElementRef;
    @ViewChild('tooltipContainer', {static: true}) tooltipElement: ElementRef;

    _value: string;
    customTooltipChecked = false;
    uiStates = {
        hasCustomTooltip: false,
        isTooltipVisible: false,
        isFocused: false,
    };

    private iMask: IMask.InputMask<any>;

    private tooltipVisibilityTimeout = false;

    private destroy$ = new Subject();

    /** Whether the user is creating a composition string (IME events). */
    private _composing = false;

    constructor(
        private zone: NgZone,
        private changeDetector: ChangeDetectorRef,
        @Optional() @Inject(COMPOSITION_BUFFER_MODE) private _compositionMode: boolean,
        protected injector: Injector,
    ) {
        super(injector);
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
                        return this.iMask.value;
                    }
                    return (e.target as HTMLInputElement).value;
                }),
                enterZone(this.zone),
                tap((value) => {
                    this.value = value;
                }),
                takeUntil(this.destroy$),
            ).subscribe();
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.iMask?.destroy();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes) { return; }

        const { mask } = changes;

        if (mask && !mask.firstChange && mask.currentValue) {
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
    }

    onTouched() {
    }

    ngAfterViewInit() {
        if (this.autoFocus) {
            this.inputElement.nativeElement.focus();
        }
        this.checkCustomTooltip();
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
            this._value = value?.indexOf(this.prefix) === 0 ? value.replace(this.prefix, '') : value;
            this.onChange(this.prefix + (this._value || ''));
        }
    }

    get inputClass(): {[cssClass: string]: boolean} {
        return {
            'focused': this.uiStates.isFocused,
            'disabled': this.isDisabled,
            'valid': this.currentState[EvoControlStates.valid],
            'invalid': this.currentState[EvoControlStates.invalid],
        };
    }

    get hasAdditional(): boolean {
        return !!this.tooltip || this.uiStates.hasCustomTooltip || !!this.icon;
    }

    writeValue(value: any): void {
        if (value === this._value) {
            return;
        }

        this.value = value;

        if (this.mask) {
            this.iMask.unmaskedValue = value;
        } else {
            this.inputElement.nativeElement.value = value;
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
}
