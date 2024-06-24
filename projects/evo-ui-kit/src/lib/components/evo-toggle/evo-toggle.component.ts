import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';

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
    standalone: true,
    imports: [EvoUiClassDirective, FormsModule],
})
export class EvoToggleComponent implements ControlValueAccessor {
    isDisabled = false;

    private _value: boolean;

    constructor(private readonly changeDetector: ChangeDetectorRef) {}

    get value(): boolean {
        return this._value;
    }

    set value(value: boolean) {
        if (value !== this._value) {
            this._value = value;
            this.onChange(value);
        }
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.isDisabled) {
            classes.push('disabled');
        }

        return classes;
    }

    onChange = (_value) => {};
    onTouched = () => {};

    // eslint-disable-next-line
    writeValue(value: any): void {
        if (value !== this._value) {
            this._value = value;
            this.changeDetector.detectChanges();
        }
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
        this.isDisabled = state;
        this.changeDetector.detectChanges();
    }
}
