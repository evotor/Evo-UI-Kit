import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoIconComponent} from '../evo-icon';
import {EvoUiClassDirective} from '../../directives';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
export class EvoChipComponent extends EvoBaseControl implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
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
    // eslint-disable-next-line
    value: any;

    templateVariables = {
        chipTypes: EvoChipType,
        chipThemes: EvoChipTheme,
    };

    private readonly destroy$ = new Subject<void>();

    constructor(
        protected injector: Injector,
        private readonly cdr: ChangeDetectorRef,
    ) {
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

    // eslint-disable-next-line
    writeValue(value: any): void {
        this.value = value;
        this.cdr.markForCheck();
    }

    // eslint-disable-next-line
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // eslint-disable-next-line
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    // eslint-disable-next-line
    onChange = (_value: any): void => {};
    onTouched = (): void => {};

    setDisabledState(state: boolean): void {
        this.disabled = state;
        this.cdr.markForCheck();
    }

    // eslint-disable-next-line
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
}
