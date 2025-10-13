import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    OnDestroy,
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

export type EvoChipSize = 'normal' | 'large';

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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoChipComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewInit, OnDestroy {
    @Input() type: EvoChipType | string = EvoChipType.radio;
    @Input() theme: EvoChipTheme | string = EvoChipTheme.grey;
    @Input() size: EvoChipSize = 'normal'
    @Input() counter: number;
    @Input() disabled: boolean;
    @Input() name: string;
    @Input() closable: boolean;
    @Input() closeTitle = '';

    @Input('value') set setInitialValue(value: any) {
        this.inheritedValue = value;
    }

    // eslint-disable-next-line @angular-eslint/no-output-native
    @Output() close = new EventEmitter<Event>();

    // eslint-disable-next-line @typescript-eslint/naming-convention
    readonly EvoChipType = EvoChipType;

    inheritedValue: any;
    // eslint-disable-next-line
    value: any;

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
            disabled: this.disabled,
        };

        const result = Object.keys(states).filter((key: string) => states[key]);

        result.push(`theme-${this.theme || EvoChipTheme.grey}`);
        result.push(`type-${this.type || EvoChipType.radio}`);
        result.push(`size-${this.size || 'normal'}`);

        return result;
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
        this.cdr.detectChanges();
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
        this.cdr.detectChanges();
    }

    // eslint-disable-next-line
    onInputChange(value: any): void {
        this.value = value;
        this.onChange(value);
        this.onTouched();
        this.cdr.detectChanges();
    }

    onCloseClick(e: Event): void {
        this.close.emit(e);
    }
}
