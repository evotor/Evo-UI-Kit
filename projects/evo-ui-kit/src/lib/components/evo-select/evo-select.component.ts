import { Component, Input, forwardRef, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
import { IEvoControlState } from '../../common/evo-control-state-manager/evo-control-state.interface';

@Component({
    selector: 'evo-select',
    templateUrl: './evo-select.component.html',
    styleUrls: ['./evo-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoSelectComponent),
            multi: true,
        },
    ],
})
export class EvoSelectComponent extends EvoBaseControl implements ControlValueAccessor, AfterContentInit {

    @Input() style: 'input' | 'inline' = 'input';
    @Input() label: string;
    @Input() theme: string;

    disabled = false;
    @ViewChild('select', {static: true}) select: ElementRef;

    set selectedValue(value: any) {
        this._selectedValue = value;
        [...this.select.nativeElement.options].some((option, index) => {
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

    private _selectedValue: any;

    constructor() {
        super();
    }

    propagateChange = (_: any) => {};

    ngAfterContentInit() {
        if (!this.selectedValue) {
            const selectOptions = this.select.nativeElement.options;
            this.selectedValue = selectOptions && selectOptions.length > 0 ? selectOptions[0].value : undefined;
        } else {
            const selectedOption = [...this.select.nativeElement.options].find(option => option.value === this.selectedValue);
            this.selectedLabel = selectedOption.innerText;
        }
        super.ngAfterContentInit();
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
            [this.style]: true,
            [this.theme]: this.theme,
            disabled: this.disabled,
            invalid: this.currentState.invalid,
        };
    }

    onChange(newValue) {
        this.propagateChange(newValue);
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    get currentState(): IEvoControlState {
        return Object.assign({
                valid: this.control ? this.control.dirty && this.control.valid : undefined,
                invalid: this.control ? this.control.dirty && this.control.invalid : undefined,
            },
            this.state,
        );
    }

}
