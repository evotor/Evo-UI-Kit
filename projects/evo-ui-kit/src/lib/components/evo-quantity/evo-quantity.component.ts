import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostListener,
    Inject,
    InjectFlags,
    Injector,
    Input,
    OnDestroy,
    Output,
    ViewChild,
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
    NgControl,
    Validators,
} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {InputMode} from './enums/input-mode';
import {EvoQuantitySize} from './enums/evo-quantity-size';

@Component({
    selector: 'evo-quantity',
    templateUrl: './evo-quantity.component.html',
    styleUrls: ['./evo-quantity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoQuantityComponent),
            multi: true,
        },
    ],
})
export class EvoQuantityComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    @Input() min = 0;
    @Input() max = Infinity;
    @Input() step = 1;
    @Input() pricePerOne: number;
    @Input() isInputAllowed = false;
    @Input() isDeletable = false;
    @Input() size: EvoQuantitySize = EvoQuantitySize.regular;

    @Output() delete = new EventEmitter<void>();
    @Output() manualInputStart = new EventEmitter<void>(); // u may need to disable submit btn while manual mode is active
    @Output() manualInputEnd = new EventEmitter<void>();

    @ViewChild('inputElement', {read: ElementRef}) inputElement: ElementRef;

    mode = InputMode.PER_BUTTONS;
    readonly InputMode = InputMode;

    readonly control = new FormControl('', {
        validators: [
            // arrow functions cuz this.min and this.max may change in runtime
            (control) => Validators.min(this.min)(control),
            (control) => Validators.max(this.max)(control),
        ],
        updateOn: 'change',
    });
    private lastConfirmedValue: number;
    private readonly destroy$ = new Subject<void>();

    private ngControl: NgControl;
    private readonly cdr: ChangeDetectorRef;

    private onChange: (_: number) => void;
    private onTouched: () => void;

    constructor(@Inject(Injector) private readonly injector: Injector) {
        this.cdr = injector.get(ChangeDetectorRef);
    }

    get parentFormControl(): AbstractControl | undefined {
        if (!this.ngControl) {
            this.ngControl = this.injector.get(NgControl, null, InjectFlags.Self | InjectFlags.Optional);
        }
        return this.ngControl?.control;
    }

    get wrapClasses(): {[cssClass: string]: boolean} {
        return {
            'evo-quantity__wrap_error': this.control.invalid,
            [`evo-quantity__wrap_size-${this.size}`]: true,
        };
    }

    ngAfterViewInit(): void {
        this.parentFormControl?.statusChanges
            .pipe(
                tap(() => this.cdr.markForCheck()),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    @HostListener('document:keydown.escape', ['$event'])
    onEscKeyDown(event: KeyboardEvent): void {
        if (this.mode === InputMode.MANUAL) {
            event.preventDefault();
            this.cancelManualMode();
        }
    }

    @HostListener('document:keydown.enter', ['$event'])
    onEnterKeyDown(event: KeyboardEvent): void {
        if (this.mode === InputMode.MANUAL) {
            event.preventDefault();
            this.finishManualMode(this.control.value);
        }
    }

    onClickOutside(): void {
        if (this.mode === InputMode.MANUAL) {
            this.cancelManualMode();
        }
    }

    onInputFocus(): void {
        this.startManualMode();
    }

    onFinishManualModeBtnClick(): void {
        this.finishManualMode(this.control.value);
        this.onTouched();
    }

    onChangeValueByStepClick(step: number): void {
        const newValue = this.control.value + step;
        this.confirmValue(this.getNearestValidValue(newValue));

        this.onTouched();
    }

    onDeleteBtnClick(): void {
        this.delete.emit();
    }

    writeValue(value: any): void {
        this.lastConfirmedValue = value;
        this.control.setValue(value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.control.disable();
        } else {
            this.control.enable();
        }
        this.cdr.detectChanges();
    }

    private confirmValue(value: number): void {
        this.control.setValue(value);

        if (value === this.lastConfirmedValue) {
            return;
        }

        this.lastConfirmedValue = value;
        this.onChange(value);
    }

    private startManualMode(): void {
        if (this.mode === InputMode.MANUAL) {
            return;
        }

        this.manualInputStart.emit();

        this.mode = InputMode.MANUAL;
        this.onTouched();
    }

    private finishManualMode(value: number): void {
        if (this.mode !== InputMode.MANUAL) {
            return;
        }

        this.inputElement?.nativeElement.blur();
        this.mode = InputMode.PER_BUTTONS;

        this.confirmValue(this.getNearestValidValue(value));

        this.manualInputEnd.emit();
    }

    private cancelManualMode(): void {
        this.finishManualMode(this.lastConfirmedValue);
    }

    private getNearestValidValue(value: number): number {
        if (this.min <= value && value <= this.max) {
            return value;
        }

        if (value < this.min) {
            return this.min;
        }

        return this.max;
    }
}
