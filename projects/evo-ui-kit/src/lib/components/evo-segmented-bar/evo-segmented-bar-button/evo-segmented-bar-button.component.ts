import {AfterViewChecked, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoBaseControl} from '../../../common/evo-base-control';

@Component({
    selector: 'evo-segmented-bar-button',
    templateUrl: './evo-segmented-bar-button.component.html',
    styleUrls: ['./evo-segmented-bar-button.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoSegmentedBarButtonComponent),
            multi: true,
        },
    ],
})
/**
 * @deprecated use `EvoChipComponent`
 */
export class EvoSegmentedBarButtonComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewChecked {
    @Input() name: string;
    @Input() value: string;
    @Input() color = 'white';
    @Input() disabled = false;

    private _selectedValue: any;

    onChange = (_) => {};
    onTouched = () => {};

    get selectedValue() {
        return this._selectedValue;
    }

    ngAfterViewChecked() {
        if (this.control) {
            this.control.valueChanges.subscribe(() => {
                this.writeValue(this.control.value);
            });
        }
    }

    writeValue(value) {
        this._selectedValue = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    onInputChange(value) {
        this._selectedValue = value;
        this.onChange(value);
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.color) {
            classes.push(this.color);
        }

        if (this.disabled) {
            classes.push('disabled');
        }

        return classes;
    }
}
