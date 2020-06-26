import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';
import { EvoBaseControl } from '../../common/evo-base-control';

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
export class EvoInputComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewInit {

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

    @Input('value') set setValue(value) {
        this._value = value;
    }

    @Output() blur: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('input', {static: true}) inputElement;
    @ViewChild('tooltipContainer', {static: true}) tooltipElement;

    _value: string;
    customTooltipChecked = false;
    uiStates = {
        hasCustomTooltip: false,
        isTooltipVisible: false,
        isFocused: false,
    };

    private tooltipVisibilityTimeout = false;

    constructor(
        private changeDetector: ChangeDetectorRef,
        protected injector: Injector,
    ) {
        super(injector);
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
            this._value = value && value.indexOf(this.prefix) === 0 ? value.replace(this.prefix, '') : value;
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
        if (value !== this._value) {
            this.value = value;
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

    private checkCustomTooltip() {
        this.uiStates.hasCustomTooltip = this.tooltipElement &&
            this.tooltipElement.nativeElement &&
            this.tooltipElement.nativeElement.children.length > 0;
        this.customTooltipChecked = true;
        this.changeDetector.detectChanges();
    }
}
