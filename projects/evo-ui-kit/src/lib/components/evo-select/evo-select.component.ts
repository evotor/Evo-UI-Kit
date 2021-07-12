import {
    AfterContentChecked,
    AfterContentInit, ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef, Injector,
    Input,
    OnDestroy,
    ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
import { IEvoControlState } from '../../common/evo-control-state-manager/evo-control-state.interface';
import { Subject, Subscription } from 'rxjs';

function isNumberValue(value: any): boolean {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

@Component({
    selector: 'evo-select',
    templateUrl: './evo-select.component.html',
    styleUrls: ['./evo-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoSelectComponent),
            multi: true,
        },
    ],
})
export class EvoSelectComponent extends EvoBaseControl implements ControlValueAccessor, AfterContentInit, OnDestroy, AfterContentChecked {

    @Input() style: 'input' | 'inline' = 'input';
    @Input() label: string;
    @Input() theme: string;

    disabled = false;
    @ViewChild('select', {static: true}) select: ElementRef;

    set selectedValue(value: any) {
        this._selectedValue = value;
        [].slice.call(this.select.nativeElement.options).some(option => {
            // tslint:disable-next-line:triple-equals
            if (option && option.value == value) {
                this.selectedLabel = option.innerText;
                return true;
            }
            return false;
        });
    }

    get selectedValue(): any {
        return this._selectedValue;
    }

    selectedLabel: any;

    private _selectedValue: any;

    private contentChanges$ = new Subject();

    private contentChangesSubscription: Subscription;

    constructor(
        private readonly cdr: ChangeDetectorRef,
        injector: Injector,
    ) {
        super(injector);
    }

    propagateChange = (_: any) => {};

    ngAfterContentInit() {
        if (!this.selectedValue) {
            const selectOptions = this.select.nativeElement.options;
            this.selectedValue = selectOptions?.[0]?.value;
        } else {
            this.setLabel();
        }
        this.contentChangesSubscription = this.contentChanges$
            .subscribe(() => this.setLabel());
    }

    ngAfterContentChecked() {
        this.contentChanges$.next();
    }

    ngOnDestroy(): void {
        this.contentChangesSubscription.unsubscribe();
    }

    writeValue(value: any) {
        if (value !== undefined) {
            this.selectedValue = value;
            this.cdr.markForCheck();
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    getSelectClasses() {
        return {
            [this.style]: true,
            [this.theme]: this.theme,
            disabled: this.disabled,
            invalid: this.currentState.invalid,
            valid: this.currentState.valid,
        };
    }

    onChange(newValue) {
        if (isNumberValue(newValue)) {
            newValue = Number(newValue);
        }
        this.propagateChange(newValue);
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }

    get currentState(): IEvoControlState {
        return Object.assign({
                valid: this.control ? this.control.dirty && this.control.valid : undefined,
                invalid: this.control ? this.control.dirty && this.control.invalid : undefined,
            },
            this.state,
        );
    }

    setLabel(): void {
        const optionsArray = [].slice.call(this.select.nativeElement.options);
        // tslint:disable-next-line:triple-equals
        const selectedIndex = optionsArray.findIndex(option => option.value == this.selectedValue);
        if (selectedIndex >= 0) {
            const selectedOption = optionsArray[selectedIndex];
            this.selectedLabel = selectedOption.innerText;
            this.select.nativeElement.selectedIndex = selectedIndex;
            this.cdr.markForCheck();
        }
    }

}
