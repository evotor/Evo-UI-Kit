import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, DestroyRef,
    EventEmitter,
    forwardRef, inject,
    Injector,
    Input,
    Output,
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoUiClassDirective} from '../../directives';
import {EvoIconComponent} from '../evo-icon';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

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
    standalone: true,
    imports: [EvoUiClassDirective, FormsModule, EvoIconComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoChipComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewInit {
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

    // eslint-disable-next-line
    inheritedValue: any;
    // eslint-disable-next-line
    value: any;

    private readonly destroyRef = inject(DestroyRef);
    private readonly cdr = inject(ChangeDetectorRef);

    // eslint-disable-next-line
    @Input('value') set setInitialValue(value: any) {
        this.inheritedValue = value;
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

    get hasCounter(): boolean {
        return (this.type !== EvoChipType.label || !this.closable) && this.counter !== undefined;
    }

    ngAfterViewInit(): void {
        if (this.control) {
            this.control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
                this.writeValue(this.control.value);
            });
        }
    }

    // eslint-disable-next-line
    writeValue(value: any): void {
        this.value = value;
        this.cdr.markForCheck();
    }

    // eslint-disable-next-line
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

    // eslint-disable-next-line
    onChange(_value: any): void {}

    onTouched(): void {}
}
