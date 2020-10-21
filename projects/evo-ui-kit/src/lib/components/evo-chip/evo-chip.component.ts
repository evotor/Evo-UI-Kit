import { Component, ElementRef, forwardRef, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';

export enum EvoChipType {
    radio = 'radio', // default
    checkbox = 'checkbox',
}

export enum EvoChipTheme {
    grey = 'grey', // default
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

    @Input() type: EvoChipType | string;
    @Input() theme: EvoChipTheme | string;
    @Input() counter: number;
    @Input() disabled: boolean;
    @Input() name: string;

    @Input('value') set setInitialValue(value: any) {
        this.inheritedValue = value;
    }

    inheritedValue: any;

    templateVariables = {
        chipTypes: EvoChipType,
        chipThemes: EvoChipTheme,
    };

    private _value: any;

    get classes(): string[] {
        const states = {
            'touched': this.control?.touched,
            'valid': this.currentState[EvoControlStates.valid],
            'invalid': this.currentState[EvoControlStates.invalid],
            'disabled': this.control?.disabled,
        };

        const result = Object.keys(states)
            .filter((key: string) => states[key]);

        result.push(`theme-${ this.theme || EvoChipTheme.grey }`);

        return result;
    }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        this._value = value;
        this.onChange(value);
        this.onTouched();
    }

    ngOnInit(): void {
        this.initDefaultParams();
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    onInputChange(value): void {
        this.value = value;
    }

    private initDefaultParams(): void {
        if (!this.type) {
            this.type = EvoChipType.radio;
        }
        if (!this.theme) {
            this.theme = EvoChipTheme.grey;
        }
    }

    private onChange(value): void {
    }

    private onTouched(): void {
    }
}
