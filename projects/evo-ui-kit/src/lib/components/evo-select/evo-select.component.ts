import { Component, Input, forwardRef, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'evo-select',
    templateUrl: './evo-select.component.html',
    styleUrls: [ './evo-select.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoSelectComponent),
            multi: true,
        },
    ],
})
export class EvoSelectComponent implements ControlValueAccessor, AfterContentInit {

    @Input() style: 'input' | 'inline' = 'input';
    @Input() label: string;
    disabled = false;
    @ViewChild('select') select: ElementRef;

    private _selectedValue: any;

    set selectedValue(value: any) {
        this._selectedValue = value;
        [ ...this.select.nativeElement.options ].some((option, index) => {
            if (option && option.value === value) {
                this.selectedLabel = option.innerText;
                return true;
            }
            return false;
        });
    }

    get selectedValue(): any {
        return this._selectedValue;
    }

    selectedLabel: any;

    propagateChange = (_: any) => {
    };

    constructor() {
    }

    ngAfterContentInit() {
        if (!this.selectedValue) {
            const selectOptions = this.select.nativeElement.options;
            this.selectedValue = selectOptions && selectOptions.length > 0 ? selectOptions[ 0 ].value : undefined;
        } else {
            const selectedOption = [ ...this.select.nativeElement.options ].find(option => option.value === this.selectedValue);
            this.selectedLabel = selectedOption.innerText;
        }

    }

    writeValue(value: any) {
        if (value !== undefined) {
            this.selectedValue = value;
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    getSelectClasses() {
        return {
            [ this.style ]: true,
            disabled: this.disabled,
        };
    }

    onChange(newValue) {
        this.propagateChange(newValue);
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

}
