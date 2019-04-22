import {
    Component,
    ViewChild,
    ViewEncapsulation,
    AfterViewInit,
    forwardRef,
    Input,
    OnChanges,
    SimpleChanges,
    OnInit,
    OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FlatpickrOptions } from './flatpickr-options.interface';
import { isEqual } from 'lodash';

declare var require: any;

if (typeof window !== 'undefined') {
    require('flatpickr');
}

enum DatepickerModes {
    RANGE = 'range',
}

type SelectedDates = string[] | Date[];


@Component({
    selector: 'evo-datepicker',
    templateUrl: './evo-datepicker.component.html',
    styleUrls: ['./evo-datepicker.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoDatepickerComponent),
            multi: true,
        },
    ],
})
export class EvoDatepickerComponent implements AfterViewInit, ControlValueAccessor, OnChanges, OnInit, OnDestroy {

    @ViewChild('flatpickr')
    flatpickrElement: any;

    @Input()
    config: FlatpickrOptions;

    @Input()
    maskedInput: boolean;

    @Input() theme?: string;

    @Input() folded = false;

    @Input()
    placeholder = '';

    @Input()
    setDate: SelectedDates;

    state = {
        isOpen: false,
        isEmptyField: false,
    };

    maskConfig: {mask: any, pattern?: string, max?: Date};

    private flatpickr: any;
    private defaultFlatpickrOptions: FlatpickrOptions = {
        wrap: true,
        clickOpens: true,
        onChange: (selectedDates: Date[]) => {
            this.setEmptyFieldState(false);
            this.writeValue(selectedDates);
        },
        onClose: () => {
            this.setEmptyFieldStateIfNeed();
            this.setOpenedState(false);
        },
        onOpen: () => {
            this.setOpenedState(true);
        },
    };

    writeValue(value: SelectedDates) {
        this.updatePickerIfNeed(value);
        this.propagateChange(value);
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    propagateChange = (_: any) => {
    }

    handleMaskComplete(value) {
        if (this.maskedInput) {
            const date = this.flatpickrElement.nativeElement._flatpickr.parseDate(value, this.config.dateFormat);
            this.setDateFromInput(date);
        }
    }

    setDateFromInput(date: SelectedDates) {
        this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
    }

    ngAfterViewInit() {
        if (this.config) {
            Object.assign(this.defaultFlatpickrOptions, this.config);
        }

        this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(this.defaultFlatpickrOptions);
        if (this.setDate) {
            this.setDateFromInput(this.setDate);
        }
        this.customizePicker();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('setDate') && changes['setDate'].currentValue) {
            this.setDateFromInput(changes['setDate'].currentValue);
        }
    }

    ngOnInit() {
        this.initMask();
    }

    ngOnDestroy() {
        this.flatpickrElement.nativeElement._flatpickr.destroy();
    }

    initMask() {
        if (this.config.allowInput && this.maskedInput) {
            this.maskConfig = {
                pattern: this.config.dateFormat,
                max: this.config.maxDate as Date,
                mask: Date
            };
        }
    }

    toggleDatepicker(): void {
        this.flatpickr.toggle();
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.theme) {
            classes.push(this.theme);
        }

        if (this.state.isOpen) {
            classes.push('opened');
        }

        if (this.folded) {
            classes.push('folded');
        }

        return classes;
    }

    /**
     * Customization of the flatpickr's view to ui-kit state
     */
    private customizePicker(): void {
        this.changeNextIcon();
    }

    /**
     * Sets new state of the picker openness
     * @param state new state
     */
    private setOpenedState(state: boolean): void {
        this.state.isOpen = state;
    }

    private setEmptyFieldState(state: boolean): void {
        this.state.isEmptyField = state;
    }

    private setEmptyFieldStateIfNeed(): void {
        if (this.config.mode === DatepickerModes.RANGE && this.flatpickr.selectedDates.length !== 2) {
            this.setEmptyFieldState(true);
        }
    }

    private updatePickerIfNeed(value: SelectedDates): void {
        if (this.flatpickr) {
            const selectedDates = this.getSelectedDatesWithDatePickerFormat(this.flatpickr.selectedDates);
            const values = this.getSelectedDatesWithDatePickerFormat(value);

            if (!isEqual(values, selectedDates)) {
                this.setDateFromInput(value);
            }
        }
    }

    private getSelectedDatesWithDatePickerFormat(dateRange: SelectedDates): string[] {
        if (dateRange.length && typeof(dateRange[0]) !== 'string') {
            return (dateRange as Date[]).map((date) => this.toDatePickerFormat(date));
        }

        return dateRange as string[];
    }

    private toDatePickerFormat(date: Date): string {
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }

    /**
     * Substitution of icons
     */
    private changeNextIcon(): void {
        const Icons = {
            PREV: `
                <svg height="16" viewBox="0 0 6 16" width="6" xmlns="http://www.w3.org/2000/svg">
                    <path _ngcontent-c0="" d="M6 0L0 8L6 16V0Z" fill="white" transform="translate(6 16) rotate(180)"></path>
                </svg>`,
            NEXT: `
                <svg height="16" viewBox="0 0 6 16" width="6" xmlns="http://www.w3.org/2000/svg">
                    <path _ngcontent-c0="" d="M6 0L0 8L6 16V0Z" fill="white"></path>
                </svg>`,
        };

        this.flatpickr.nextMonthNav.innerHTML = Icons.PREV;
        this.flatpickr.prevMonthNav.innerHTML = Icons.NEXT;
    }
}
