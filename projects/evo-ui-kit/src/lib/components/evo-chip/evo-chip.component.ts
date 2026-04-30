import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    DestroyRef,
    forwardRef,
    inject,
    input,
    model,
    output,
    signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoUiClassDirective} from '../../directives';
import {EvoCounterComponent} from '../evo-counter';
import {EvoIconComponent} from "../evo-icon";

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
            useExisting: forwardRef((): typeof EvoChipComponent => EvoChipComponent),
            multi: true,
        },
    ],
    standalone: true,
    imports: [EvoUiClassDirective, FormsModule, EvoCounterComponent, EvoIconComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoChipComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewInit {
    readonly chipValue = input<unknown>(undefined, {
        alias: 'value'
    });

    readonly type = input<EvoChipType | string>(EvoChipType.radio);

    readonly theme = input<EvoChipTheme | string>(EvoChipTheme.grey);

    readonly size = input<EvoChipSize>('normal');

    readonly counter = input<number | undefined>(undefined);

    readonly disabled = model(false);

    readonly name = input<string | undefined>(undefined);

    readonly closable = input(false);

    readonly closeTitle = input('');

    readonly close = output<Event>();

    readonly hasCounter = computed((): boolean =>
        (this.type() !== EvoChipType.label || !this.closable()) && this.counter() !== undefined);

    readonly currentValue = signal<unknown>(undefined);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    readonly EvoChipType = EvoChipType;

    private readonly destroyRef = inject(DestroyRef);
    private readonly cdr = inject(ChangeDetectorRef);

    get classes(): Record<string, boolean> {
        const theme = this.theme();
        const type = this.type();
        const size = this.size();

        return {
            valid: this.currentState[EvoControlStates.valid],
            invalid: this.currentState[EvoControlStates.invalid],
            disabled: this.disabled(),
            [`theme_${theme}`]: !!theme,
            [`type_${type}`]: !!type,
            [`size_${size}`]: !!size,
            'has-counter': this.hasCounter(),
            'is-closable': this.closable(),
        };
    }

    ngAfterViewInit(): void {
        if (!this.control) {
            return;
        }

        this.control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((): void => this.writeValue(this.control.value));
    }

    writeValue(value: unknown): void {
        this.currentValue.set(value);
        this.cdr.markForCheck();
    }

    registerOnChange(fn: (_: unknown) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled.set(state);
        this.cdr.markForCheck();
    }

    onInputChange(value: unknown): void {
        this.currentValue.set(value);
        this.onChange(value);
        this.onTouched();
        this.cdr.markForCheck();
    }

    onCloseClick(e: Event): void {
        this.close.emit(e);
    }

    onChange(_value: unknown): void {
    }

    onTouched(): void {
    }
}
