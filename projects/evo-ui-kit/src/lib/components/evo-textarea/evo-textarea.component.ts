import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    EventEmitter,
    inject,
    Injector,
    Input,
    Output,
} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {EvoBaseControl} from '../../common/evo-base-control';
import {EvoControlStates} from '../../common/evo-control-state-manager/evo-control-states.enum';
import {EvoControlErrorComponent} from '../evo-control-error';
import {EvoUiClassDirective} from '../../directives';
import {EvoTextareaSize} from './types/evo-textarea-size';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
    selector: 'evo-textarea',
    templateUrl: './evo-textarea.component.html',
    styleUrls: ['./evo-textarea.component.scss'],
    standalone: true,
    imports: [EvoUiClassDirective, EvoControlErrorComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoTextareaComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewInit {
    private readonly ngControl = inject(NgControl, {
        self: true,
        optional: true,
    });
    private readonly destroyRef = inject(DestroyRef);

    private _focused = false;
    private _disabled = false;

    @Input() size: EvoTextareaSize = 'normal';
    @Input() placeholder = '';
    @Input() rows = 3;

    @Output() blur = new EventEmitter<void>();

    value = '';

    constructor(
        protected injector: Injector,
        private readonly cdr: ChangeDetectorRef,
    ) {
        super(injector);

        const ngControl = this.ngControl;

        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }

    ngAfterViewInit(): void {
        const control = this.ngControl?.control;

        if (!control) {
            return;
        }

        control.statusChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.cdr.markForCheck());
    }

    get textareaClasses(): {[cssClass: string]: boolean} {
        return {
            focused: this._focused,
            disabled: this._disabled,
            valid: this.currentState[EvoControlStates.valid],
            invalid: this.currentState[EvoControlStates.invalid],
            [`size_${this.size}`]: this.size !== 'normal',
        };
    }

    handleOnChange(event: Event): void {
        const target = event.target as HTMLTextAreaElement;
        this.value = target.value;
        this.onChange(this.value);
    }

    onFocus(): void {
        if (!this._focused && !this._disabled) {
            this._focused = true;
            this.cdr.markForCheck();
        }
    }

    onBlur(): void {
        this._focused = false;
        if (this.value) {
            this.value = this.value.trim();
        }
        this.onTouched();
        this.blur.emit();
        this.cdr.markForCheck();
    }

    onChange = (_) => {};
    onTouched = () => {};

    registerOnChange(fn: () => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this._disabled = isDisabled;
        this.cdr.markForCheck();
    }

    writeValue(value: string): void {
        this.value = value ?? '';
        this.cdr.markForCheck();
    }
}
