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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoChipComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewInit, OnDestroy {
    @Input('value') chipValue: any;
    @Input() type: EvoChipType | string = EvoChipType.radio;
    @Input() theme: EvoChipTheme | string = EvoChipTheme.grey;
    @Input() size: EvoChipSize = 'normal';
    @Input() counter: number;
    @Input() disabled: boolean;
    @Input() name: string;
    @Input() closable: boolean;
    @Input() closeTitle = '';

    // eslint-disable-next-line @angular-eslint/no-output-native
    @Output() close = new EventEmitter<Event>();

    // eslint-disable-next-line @typescript-eslint/naming-convention
    readonly EvoChipType = EvoChipType;

    currentValue: any;

    private readonly destroy$ = new Subject<void>();

    constructor(protected injector: Injector, private readonly cdr: ChangeDetectorRef) {
        super(injector);
    }

    get classes(): Record<string, boolean> {
        return {
            valid: this.currentState[EvoControlStates.valid],
            invalid: this.currentState[EvoControlStates.invalid],
            disabled: this.disabled,
            [`theme_${this.theme}`]: !!this.theme,
            [`type_${this.type}`]: !!this.type,
            [`size_${this.size}`]: !!this.size,
            'has-counter': this.hasCounter,
            'is-closable': this.closable,
        };
    }

    get hasCounter(): boolean {
        return (this.type !== EvoChipType.label || !this.closable) && this.counter !== undefined;
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
        this.currentValue = value;
        this.cdr.markForCheck();
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
        this.cdr.markForCheck();
    }

    onInputChange(value: any): void {
        this.currentValue = value;
        this.onChange(value);
        this.onTouched();
        this.cdr.markForCheck();
    }

    onCloseClick(e: Event): void {
        this.close.emit(e);
    }

    private onChange(_value: any): void {}

    private onTouched(): void {}
}
