import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'evo-toggle',
    templateUrl: './evo-toggle.component.html',
    styleUrls: ['./evo-toggle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoToggleComponent),
            multi: true,
        },
    ],
})
export class EvoToggleComponent implements ControlValueAccessor {
    isDisabled = false;
    value: boolean;

    constructor(private readonly changeDetector: ChangeDetectorRef) {}

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.isDisabled) {
            classes.push('disabled');
        }

        return classes;
    }

    onChange = (_value: boolean): void => {};
    onTouched = (): void => {};

    handleChange(value: boolean): void {
        this.onChange(value);
        this.onTouched();
        this.changeDetector.markForCheck();
    }

    writeValue(value: any): void {
        if (value !== this.value) {
            this.value = value;
            this.changeDetector.markForCheck();
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.isDisabled = state;
        this.changeDetector.markForCheck();
    }
}
