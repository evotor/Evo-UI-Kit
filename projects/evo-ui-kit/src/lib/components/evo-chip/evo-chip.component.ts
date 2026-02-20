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
    output, signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoUiClassDirective} from '../../directives';
import {EvoCounterComponent} from '../evo-counter';
import {EvoIconComponent} from '../evo-icon';

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
    imports: [EvoUiClassDirective, FormsModule, EvoIconComponent, EvoCounterComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoChipComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewInit {
    private readonly destroy$ = inject(DestroyRef);
    private readonly cdr = inject(ChangeDetectorRef);

    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly chipValue = input<unknown>(undefined, {
        alias: 'value'
    });
    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly type = input<EvoChipType | string>(EvoChipType.radio);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly theme = input<EvoChipTheme | string>(EvoChipTheme.grey);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly size = input<EvoChipSize>('normal');
    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly counter = input<number | undefined>(undefined);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly disabled = model(false);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly name = input<string | undefined>(undefined);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly closable = input(false);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly closeTitle = input('');

    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly close = output<Event>();

    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly hasCounter = computed((): boolean =>
        (this.type() !== EvoChipType.label || !this.closable()) && this.counter() !== undefined);

    // eslint-disable-next-line @typescript-eslint/member-ordering
    readonly currentValue = signal<unknown>(undefined);

    // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/naming-convention
    readonly EvoChipType = EvoChipType;

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
        if (this.control) {
            this.control.valueChanges.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => {
                this.writeValue(this.control.value);
            });
        }
    }

    // eslint-disable-next-line
    writeValue(value: unknown): void {
        this.currentValue.set(value);
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
        this.disabled.set(state);
        this.cdr.markForCheck();
    }

    // eslint-disable-next-line
    onInputChange(value: any): void {
        this.currentValue.set(value);
        this.onChange(value);
        this.onTouched();
        this.cdr.markForCheck();
    }

    onCloseClick(e: Event): void {
        this.close.emit(e);
    }

    // eslint-disable-next-line
    onChange(_value: any): void {
    }

    onTouched(): void {
    }
}
