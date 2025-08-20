import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    OnInit,
    OnDestroy,
    Output,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject} from 'rxjs';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {takeUntil} from 'rxjs/operators';

export enum EvoChipType {
    radio = 'radio', // default
    checkbox = 'checkbox',
    label = 'label',
}

export enum EvoChipTheme {
    grey = 'grey', // default
    white = 'white',
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
})
export class EvoChipComponent extends EvoBaseControl implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    @Input() type: EvoChipType | string;
    @Input() theme: EvoChipTheme | string;
    @Input() counter: number;
    @Input() disabled: boolean;
    @Input() name: string;
    @Input() closable: boolean;
    @Input() closeTitle = '';

    @Input('value') set setInitialValue(value: any) {
        this.inheritedValue = value;
    }

    @Output() close = new EventEmitter<Event>();

    inheritedValue: any;
    value: any;

    templateVariables = {
        chipTypes: EvoChipType,
        chipThemes: EvoChipTheme,
    };

    private readonly destroy$ = new Subject<void>();

    constructor(protected injector: Injector, private readonly cdr: ChangeDetectorRef) {
        super(injector);
    }

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

    ngOnInit(): void {
        this.initDefaultParams();
    }

    ngAfterViewInit(): void {
        if (this.control) {
            this.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.writeValue(this.control.value);
            });
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    writeValue(value: any): void {
        this.value = value;
        this.cdr.markForCheck();
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
        this.cdr.markForCheck();
    }

    onInputChange(value: any): void {
        this.value = value;
        this.onChange(value);
        this.onTouched();
        this.cdr.markForCheck();
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

    private onChange(_value: any): void {}
    private onTouched(): void {}
}
