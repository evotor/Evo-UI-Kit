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
    OnDestroy,
    ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FlatpickrOptions } from './flatpickr-options.interface';
import { isEqual, cloneDeep } from 'lodash-es';

import { cssClasses, renderRangeTime } from './templates';

export * from './flatpickr-options.interface';

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
    flatpickrElement: ElementRef;

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

    @Input()
    description: string;

    @Input()
    maxRangeDays: number;

    state = {
        isOpen: false,
        isEmptyField: false,
    };

    elements: any = {};

    maskConfig: {mask: any, pattern?: string, max?: Date};

    private flatpickr: any;
    private defaultFlatpickrOptions: FlatpickrOptions = {
        wrap: true,
        clickOpens: true,
        onChange: (selectedDates: Date[]) => {
            this.setEmptyFieldState(false);
            this.setRangeConstraints(selectedDates);
            this.setTimeConstraints(selectedDates);
            this.updateLabelValues(selectedDates);

            this.writeValue(selectedDates);
        },
        onClose: () => {
            this.setEmptyFieldStateIfNeed();
            this.resetConstraints();
            this.setOpenedState(false);
        },
        onOpen: () => {
            this.setOpenedState(true);
            this.updateLabelValues(this.flatpickr.selectedDates);
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

    onDatepickerClick(event: MouseEvent) {
        if (this.config.allowInput &&
            (event.target as HTMLElement).classList.contains(cssClasses.INPUT)) {
                return;
        }

        this.toggleDatepicker();
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
        this.addDescriptionIfNeed();
        this.addTimeSelectors();
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

    private addTimeSelectors() {
        if (this.isRangeWithTime()) {
            const timeWrapper = document.createElement('div');
            timeWrapper.innerHTML = renderRangeTime(cssClasses);
            this.saveTimeRangeElements(timeWrapper);
            this.addListenersOnTimeSelectors();
            this.elements.apply.onclick = this.onApply.bind(this);

            this.flatpickr.rContainer.appendChild(timeWrapper);
        }
    }

    private saveTimeRangeElements(timeWrapper: HTMLElement) {
        this.elements = {
            apply: timeWrapper.getElementsByClassName(cssClasses.APPLY)[0],
            from: {
                hour: timeWrapper.getElementsByClassName(cssClasses.SELECTOR_HOUR)[0],
                minute: timeWrapper.getElementsByClassName(cssClasses.SELECTOR_MINUTE)[0],
                label: timeWrapper.getElementsByClassName(cssClasses.TIME_LABEL_FROM)[0],
            },
            until: {
                hour: timeWrapper.getElementsByClassName(cssClasses.SELECTOR_HOUR)[1],
                minute: timeWrapper.getElementsByClassName(cssClasses.SELECTOR_MINUTE)[1],
                label: timeWrapper.getElementsByClassName(cssClasses.TIME_LABEL_UNTIL)[0],
            }
        };

        this.elements.from.hourField = this.elements.from.hour.previousElementSibling;
        this.elements.from.minuteField = this.elements.from.minute.previousElementSibling;

        this.elements.until.hourField = this.elements.until.hour.previousElementSibling;
        this.elements.until.minuteField = this.elements.until.minute.previousElementSibling;
    }

    private onApply() {
        this.setTime();
        this.flatpickr.close();
    }

    private setTime() {
        const { fromHour, fromMinute } = this.getSelectedFrom();
        const { untilHour, untilMinute } = this.getSelectedUntil();

        const selectedDates = cloneDeep(this.flatpickr.selectedDates);

        selectedDates[0].setHours(fromHour, fromMinute);

        if (selectedDates[1]) {
            selectedDates[1].setHours(untilHour, untilMinute);
        }

        this.setDateFromInput(selectedDates);
    }

    private updateLabelValues(selectedDates: Date[]) {
        if (this.isRangeWithTime()) {
            this.elements.from.label.innerText = `Период с ${this.flatpickr.formatDate(selectedDates[0], 'D d.m.Y')}`;

            if (selectedDates[1]) {
                this.elements.until.label.innerText = `по ${this.flatpickr.formatDate(selectedDates[1], 'D d.m.Y')}`;
            }
        }
    }

    private setTimeConstraints(selectedDates: Date[]) {
        if (this.isRangeWithTime()) {
            if (this.isSameDate(selectedDates[0], selectedDates[1])) {
                this.resetTimeIfNeed();
                this.setUntilTimeConstraint(selectedDates);
            } else {
                this.resetAllConstraints();
            }
        }
    }

    private resetAllConstraints() {
        this.elements.from.hour.options.forEach((option) => {
            option.disabled = false;
        });

        this.elements.from.minute.options.forEach((option) => {
            option.disabled = false;
        });

        this.elements.until.hour.options.forEach((option) => {
            option.disabled = false;
        });

        this.elements.until.minute.options.forEach((option) => {
            option.disabled = false;
        });
    }

    private addListenersOnTimeSelectors() {
        this.elements.from.hour.onchange = this.onChangeTimeFrom.bind(this);
        this.elements.from.minute.onchange = this.onChangeTimeFrom.bind(this);

        this.elements.until.hour.onchange = this.onChangeTimeUntil.bind(this);
        this.elements.until.minute.onchange = this.onChangeTimeUntil.bind(this);
    }

    private onChangeTimeFrom(event: Event) {
        if (this.isSameDate(this.flatpickr.selectedDates[0], this.flatpickr.selectedDates[1])) {
                this.disableTimeUntilSelectors();
        }
        this.updateTimeFieldsContent();
    }

    private onChangeTimeUntil(event: Event) {
        if (this.isSameDate(this.flatpickr.selectedDates[0], this.flatpickr.selectedDates[1])) {
                this.disableTimeFromSelectors();
        }
        this.updateTimeFieldsContent();

    }

    private updateTimeFieldsContent() {
        const { fromHour, fromMinute, untilHour, untilMinute } = this.getSelectorVaulesAsString();

        this.elements.from.hourField.innerText = fromHour;
        this.elements.from.minuteField.innerText = fromMinute;

        this.elements.until.hourField.innerText = untilHour;
        this.elements.until.minuteField.innerText = untilMinute;
    }

    private disableTimeUntilSelectors() {
        const { fromHour, fromMinute } = this.getSelectedFrom();
        const { untilHour, untilMinute } = this.getSelectedUntil();

        this.elements.until.hour.options.forEach((option) => {
            option.disabled = Number(option.value) < fromHour;
        });

        if (fromHour === untilHour) {
            if (fromMinute > untilMinute) {
                this.elements.until.minute.selectedIndex = 4;
            }
            this.elements.until.minute.options.forEach((option) => {
                option.disabled = Number(option.value) < fromMinute;
            });
        } else {
            this.elements.until.minute.options.forEach((option) => {
                option.disabled = false;
            });
        }
    }

    private disableTimeFromSelectors() {
        const { fromHour, fromMinute } = this.getSelectedFrom();
        const { untilHour, untilMinute } = this.getSelectedUntil();

        this.elements.from.hour.options.forEach((option) => {
            option.disabled = Number(option.value) > untilHour;
        });

        if (fromHour === untilHour) {
            if (fromMinute > untilMinute) {
                this.elements.until.minute.selectedIndex = 4;
            }

            this.elements.from.minute.options.forEach((option) => {
                option.disabled = Number(option.value) > untilMinute;
            });
        } else {
            this.elements.until.minute.options.forEach((option) => {
                option.disabled = false;
            });
        }
    }

    private setUntilTimeConstraint(selectedDates: Date[]) {
        this.disableTimeUntilSelectors();
    }

    private resetTimeIfNeed() {
        const { fromHour, fromMinute } = this.getSelectedFrom();
        const { untilHour, untilMinute } = this.getSelectedUntil();

        if ((fromHour > untilHour) || (fromHour === untilHour && fromMinute > untilMinute)) {
            this.resetTime();
        }
    }

    private resetTime() {
        this.elements.from.hour.selectedIndex = 0;
        this.elements.from.minute.selectedIndex = 0;

        this.elements.until.hour.selectedIndex = 23;
        this.elements.until.minute.selectedIndex = 4;

        this.updateTimeFieldsContent();
    }

    private getSelectorVaulesAsString(): {fromHour: string, fromMinute: string, untilHour: string, untilMinute: string } {
        return {
            fromHour: this.elements.from.hour.options[this.elements.from.hour.selectedIndex].value,
            fromMinute: this.elements.from.minute.options[this.elements.from.minute.selectedIndex].value,
            untilHour: this.elements.until.hour.options[this.elements.until.hour.selectedIndex].value,
            untilMinute: this.elements.until.minute.options[this.elements.until.minute.selectedIndex].value,
        };
    }

    private getSelectedFrom(): { fromHour: number, fromMinute: number } {
        return {
            fromHour: Number(this.elements.from.hour.options[this.elements.from.hour.selectedIndex].value),
            fromMinute: Number(this.elements.from.minute.options[this.elements.from.minute.selectedIndex].value),
        };
    }

    private getSelectedUntil(): { untilHour: number, untilMinute: number } {
        return {
            untilHour: Number(this.elements.until.hour.options[this.elements.until.hour.selectedIndex].value),
            untilMinute: Number(this.elements.until.minute.options[this.elements.until.minute.selectedIndex].value),
        };
    }

    private setRangeConstraints(selectedDates: Date[]) {
        if (this.isRange()) {
            if (selectedDates.length === 1 && this.maxRangeDays) {
                const minDate = new Date(selectedDates[0]);
                const maxDate = new Date(selectedDates[0]);

                minDate.setDate(minDate.getDate() - this.maxRangeDays);
                maxDate.setDate(maxDate.getDate() + this.maxRangeDays);

                this.flatpickr.config.minDate = minDate;
                this.flatpickr.config.maxDate = maxDate;
            } else {
                this.resetConstraints();
            }
        }
    }

    private resetConstraints() {
        this.flatpickr.config.minDate = this.config.minDate;
        this.flatpickr.config.maxDate = this.config.maxDate;
    }

    private isRange(): boolean {
        return this.config.mode === DatepickerModes.RANGE;
    }

    private isRangeWithTime(): boolean {
        return this.isRange() && this.config.enableTime;
    }

    private setEmptyFieldStateIfNeed(): void {
        if (this.isRange() && this.flatpickr.selectedDates.length !== 2) {
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

    private addDescriptionIfNeed() {
        if (this.description) {
            const descriptionElement = document.createElement('p');
            descriptionElement.className = cssClasses.DESCRIPTION;
            descriptionElement.innerHTML = this.description;

            this.flatpickr.rContainer.appendChild(descriptionElement);
        }
    }

    private isSameDate(firstDate: Date, secondDate: Date): boolean {
        return firstDate && secondDate && firstDate.getDate() === secondDate.getDate() &&
            firstDate.getMonth() === secondDate.getMonth() &&
                firstDate.getFullYear() === secondDate.getFullYear();
    }
}
