import {
    Component,
    ElementRef,
    forwardRef,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';

export enum EvoChipType {
    radio = 'radio',
    checkbox = 'checkbox',
}

export enum EvoChipTheme {
    grey = 'grey',
    white = 'white',
}

@Component({
    selector: 'evo-chip',
    templateUrl: 'evo-chip.component.html',
    styleUrls: [
        'evo-chip.component.scss',
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoChipComponent),
            multi: true,
        },
    ],
})
export class EvoChipComponent extends EvoBaseControl implements ControlValueAccessor, OnInit {

    @Input() type: EvoChipType;
    @Input() theme: EvoChipTheme;
    @Input() counter: number;
    @Input() disabled: boolean;
    @Input() checked: boolean;
    @Input() name: string;
    // tslint:disable-next-line:no-input-rename
    @Input('value') inheritedValue: any;

    templateVariables = {
        chipTypes: EvoChipType,
        chipThemes: EvoChipTheme,
    };

    @ViewChild('inputCheckboxElement') inputCheckboxElement: ElementRef;
    @ViewChild('inputRadioElement') inputRadioElement: ElementRef;

    private _value: any;

    get inputElement(): ElementRef {
        switch (this.type) {
            case 'checkbox':
                return this.inputCheckboxElement;
            case 'radio':
                return this.inputRadioElement;
        }
    }

    get classes() {
        return {
            'touched': this.control?.touched,
            'valid': this.currentState[EvoControlStates.valid],
            'invalid': this.currentState[EvoControlStates.invalid],
            'disabled': this.control?.disabled,
        };
    }

    ngOnInit() {
        this.initDefaultParams();
    }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        this._value = value;
        this.onChange(value);
        this.onTouched();
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    onInputChange(value) {
        this.value = value;
    }

    private initDefaultParams() {
        if (!this.type) {
            this.type = EvoChipType.checkbox;
        }
        if (!this.theme) {
            this.theme = EvoChipTheme.grey;
        }
    }

    private onChange(value) {
    }

    private onTouched() {

    }
}
