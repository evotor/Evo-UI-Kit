import { Component, forwardRef, Input, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EvoBaseControl } from '../../../../common/evo-base-control';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser/src/dom/events/event_manager';
import { EvoDatePickerComponent } from '../evo-date-picker/evo-date-picker.component';

const RANGE_CONTROLS = {
    SINCE: 'since',
    UNTIL: 'until',
};

@Component({
    selector: 'evo-date-picker-range',
    templateUrl: './evo-date-picker-range.component.html',
    styleUrls: [ './evo-date-picker-range.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoDatePickerRangeComponent),
            multi: true,
        },
    ],
})
export class EvoDatePickerRangeComponent extends EvoBaseControl implements ControlValueAccessor, OnInit, AfterContentInit {
    @Input('value') _value?: string[];

    public formGroup: FormGroup;

    public calendarSettings = {
        bigBanner: false,
        timePicker: false,
        format: 'dd-MM-yyyy',
    };

    public constraints = {
        since: {},
        until: {},
    };

    public rangeContols = RANGE_CONTROLS;

    private disabled = false;

    onChange = (_) => {};
    onTouched = () => {};

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    get value(): string[] {
        return this._value;
    }

    set value(value: string[]) {
        this._value = value;
        this.onChange(value);
    }

    ngOnInit() {}

    ngAfterContentInit() {
        this.createFormGroup();
    }

    writeValue(value: string[]): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
    }

    public onSelectRange(date: Date, selectedPicker: string) {
        if (selectedPicker === this.rangeContols.SINCE) {
            this.setConstaintsUntil(date);
        } else {
            this.setConstaintsSince(date);
        }
    }

    private createFormGroup() {
        this.setConstaints(this.value[0], this.value[1]);

        this.formGroup = this.formBuilder.group({
            [this.rangeContols.SINCE]: [ this.value[0] ],
            [this.rangeContols.UNTIL]: [ this.value[1] ],
        });
    }

    private setConstaints(sinceConstraint, untilConstraint) {
        this.setConstaintsSince(untilConstraint);
        this.setConstaintsUntil(sinceConstraint);
    }

    private setConstaintsSince(constraint) {
        this.constraints.since = {
            right: constraint,
        };
    }

    private setConstaintsUntil(constraint) {
        this.constraints.until = {
            left: constraint,
        };
    }
}
