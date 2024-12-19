import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Input,
    Output,
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'evo-calendar-input-time-inner',
    templateUrl: './evo-calendar-input-time-inner.component.html',
    styleUrls: ['./evo-calendar-input-time-inner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoCalendarInputTimeInnerComponent),
            multi: true,
        },
    ],
})
export class EvoCalendarInputTimeInnerComponent implements ControlValueAccessor {
    @Input() set disabled(isDisabled: boolean) {
        this.setDisabledState(isDisabled);
    }
    @Input() min = 0;
    @Input() max = 60;

    @Output() valueEvent = new EventEmitter<string>();

    valueControl = new FormControl('00');

    private isDisabled: boolean;
    private isFocused: boolean;

    constructor(private readonly cdr: ChangeDetectorRef) {}

    onChange: any = (): void => {};
    onTouched: any = (): void => {};

    writeValue(value: string): void {
        this.valueControl.setValue(value.padStart(2, '0'));
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
        if (isDisabled) {
            this.valueControl.disable();
        } else {
            this.valueControl.enable();
        }
        this.cdr.detectChanges();
    }

    onInputInput(event: Event): void {
        let value: string = (event.target as HTMLInputElement).value;
        value = value.padStart(2, '0').slice(-2);
        if (+value > this.max) {
            value = `${this.max}`;
        }
        this.valueControl.setValue(value);
        this.valueEvent.emit(value);
        this.onChange(value);
        this.onTouched();
    }

    onInputFocus(_event: Event): void {
        this.isFocused = true;
        this.cdr.detectChanges();
    }

    onInputBlur(_event: Event): void {
        this.isFocused = false;
        this.cdr.detectChanges();
    }

    onArrowClick(i: number): void {
        if (this.isDisabled) {
            return;
        }

        let count: number = Number(this.valueControl.value) + i;

        if (count > this.max) {
            count = this.max;
        } else if (count < this.min) {
            count = this.min;
        }

        const value = `${count}`.padStart(2, '0');

        this.valueControl.setValue(value);
        this.valueEvent.emit(value);
        this.onChange(this.valueControl.value);
        this.onTouched();
    }

    getContainerClasses(containerClass: string): string[] {
        const modifiers = [];

        if (this.isDisabled) {
            modifiers.push('disabled');
        }
        if (this.isFocused) {
            modifiers.push('focused');
        }

        return modifiers.map((modifier) => `${containerClass}_${modifier}`);
    }
}
