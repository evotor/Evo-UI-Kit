import {AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoIconComponent} from '../evo-icon/evo-icon.component';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';

export enum EvoChipType {
    radio = 'radio', // default
    checkbox = 'checkbox',
    label = 'label',
}

export enum EvoChipTheme {
    grey = 'grey', // default
    white = 'white',
    custom = 'custom',
}

@Component({
    selector: 'evo-chip',
    templateUrl: 'evo-chip.component.html',
    styleUrls: ['evo-chip.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoChipComponent),
            multi: true,
        },
    ],
    standalone: true,
    imports: [EvoUiClassDirective, FormsModule, EvoIconComponent],
})
export class EvoChipComponent extends EvoBaseControl implements ControlValueAccessor, OnInit, AfterViewInit {
    @Input() type: EvoChipType | string;
    @Input() theme: EvoChipTheme | string;
    @Input() counter: number;
    @Input() disabled: boolean;
    @Input() name: string;
    @Input() closable: boolean;
    @Input() closeTitle = '';

    // eslint-disable-next-line
    @Input('value') set setInitialValue(value: any) {
        this.inheritedValue = value;
    }

    @Output() close = new EventEmitter<Event>();

    // eslint-disable-next-line
    inheritedValue: any;

    templateVariables = {
        chipTypes: EvoChipType,
        chipThemes: EvoChipTheme,
    };

    // eslint-disable-next-line
    private _value: any;

    get classes(): string[] {
        const states = {
            touched: this.control?.touched,
            valid: this.currentState[EvoControlStates.valid],
            invalid: this.currentState[EvoControlStates.invalid],
            disabled: this.control?.disabled,
        };

        const result = Object.keys(states).filter((key: string) => states[key]);

        result.push(`theme-${this.theme || EvoChipTheme.grey}`);

        result.push(`type-${this.type}`);

        return result;
    }

    // eslint-disable-next-line
    get value(): any {
        return this._value;
    }

    // eslint-disable-next-line
    set value(value: any) {
        this._value = value;
        this.onChange(value);
        this.onTouched();
    }

    ngOnInit(): void {
        this.initDefaultParams();
    }

    ngAfterViewInit() {
        if (this.control) {
            this.control.valueChanges.subscribe(() => {
                this.writeValue(this.control.value);
            });
        }
    }

    // eslint-disable-next-line
    writeValue(value: any): void {
        this._value = value;
    }

    // eslint-disable-next-line
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // eslint-disable-next-line
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    onInputChange(value): void {
        this.value = value;
    }

    onCloseClick(e: Event): void {
        this.close.emit(e);
    }

    private initDefaultParams(): void {
        if (!this.type) {
            this.type = EvoChipType.radio;
        }
        if (!this.theme) {
            this.theme = EvoChipTheme.grey;
        }
    }

    private onChange(value): void {}

    private onTouched(): void {}
}
