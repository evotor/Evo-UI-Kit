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
import moment from 'moment/src/moment';

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

    cssClasses = {
        DESCRIPTION: 'evo-datepicker__description',
        INPUT: 'evo-datepicker__input',
        TIME_PICKER: 'evo-datepicker__time-picker',
        TIME_LABEL: 'evo-datepicker__time-label',
        TIME_LABEL_FROM: 'evo-datepicker__time-label_from',
        TIME_LABEL_UNTIL: 'evo-datepicker__time-label_until',
        SELECTORS: 'evo-datepicker__selectors',
        SELECT: 'evo-datepicker__select',
        SELECTOR_HOUR: 'evo-datepicker__select_hour',
        SELECTOR_MINUTE: 'evo-datepicker__select_minute',
        SELECT_WRAPPER: 'evo-datepicker__select-wrapper',
        APPLY: 'evo-datepicker__apply',
        SELECT_FIELD: 'evo-datepicker__select-field'
    };

    elements: any = {

    };

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
            (event.target as HTMLElement).classList.contains(this.cssClasses.INPUT)) {
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
        this.addTimesSelectors();
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


    private addTimesSelectors() {
        const timeWrapper = document.createElement('div');
        timeWrapper.innerHTML = `
            <div class="${this.cssClasses.TIME_PICKER}">
                <label class="${this.cssClasses.TIME_LABEL} ${this.cssClasses.TIME_LABEL_FROM}"> Период с Вт 20.01.19 </label>
                <div class="${this.cssClasses.SELECTORS}">
                    <label class="${this.cssClasses.SELECT_WRAPPER}">
                        <div class="${this.cssClasses.SELECT_FIELD}">00</div>
                        <select value class="${this.cssClasses.SELECT} ${this.cssClasses.SELECTOR_HOUR}">
                            <option selected>00</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                        </select>
                    </label>
                    <span>:</span>
                    <label class="${this.cssClasses.SELECT_WRAPPER}">
                        <div class="${this.cssClasses.SELECT_FIELD}">00</div>
                        <select class="${this.cssClasses.SELECT} ${this.cssClasses.SELECTOR_MINUTE}">
                            <option selected>00</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                        </select>
                    </label>
                </div>
            </div>

            <div class="${this.cssClasses.TIME_PICKER}">
                <label class="${this.cssClasses.TIME_LABEL} ${this.cssClasses.TIME_LABEL_UNTIL}"> по Ср 20.01.19 </label>

                <div class="${this.cssClasses.SELECTORS}">
                    <label class="${this.cssClasses.SELECT_WRAPPER}">
                        <div class="${this.cssClasses.SELECT_FIELD}">23</div>
                        <select value class="${this.cssClasses.SELECT} ${this.cssClasses.SELECTOR_HOUR}">
                            <option>00</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option selected>23</option>
                        </select>
                    </label>
                    <span>:</span>
                    <label class="${this.cssClasses.SELECT_WRAPPER}">
                        <div class="${this.cssClasses.SELECT_FIELD}">59</div>
                        <select class="${this.cssClasses.SELECT} ${this.cssClasses.SELECTOR_MINUTE}">
                            <option selected>00</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                            <option selected>59</option>
                        </select>
                    </label>
                </div>
            </div>

            <button class="${this.cssClasses.APPLY}"> Применить </button>
        `;
        this.elements = {
            apply: timeWrapper.getElementsByClassName(this.cssClasses.APPLY)[0],
            from: {
                hour: timeWrapper.getElementsByClassName(this.cssClasses.SELECTOR_HOUR)[0],
                minute: timeWrapper.getElementsByClassName(this.cssClasses.SELECTOR_MINUTE)[0],
                label: timeWrapper.getElementsByClassName(this.cssClasses.TIME_LABEL_FROM)[0],
            },
            until: {
                hour: timeWrapper.getElementsByClassName(this.cssClasses.SELECTOR_HOUR)[1],
                minute: timeWrapper.getElementsByClassName(this.cssClasses.SELECTOR_MINUTE)[1],
                label: timeWrapper.getElementsByClassName(this.cssClasses.TIME_LABEL_UNTIL)[0],
            }
        };
        this.elements.from.hourField = this.elements.from.hour.previousElementSibling;
        this.elements.from.minuteField = this.elements.from.minute.previousElementSibling;

        this.elements.until.hourField = this.elements.until.hour.previousElementSibling;
        this.elements.until.minuteField = this.elements.until.minute.previousElementSibling;

        this.addListenersOnSelectors();

        this.elements.apply.onclick = this.onApply.bind(this);
        this.flatpickr.rContainer.appendChild(timeWrapper);
    }

    private onApply() {
        this.setTime();
        this.flatpickr.close();
    }

    private setTime() {
        const fromHour = this.elements.from.hour.options[this.elements.from.hour.selectedIndex].value;
        const fromMinute = this.elements.from.minute.options[this.elements.from.minute.selectedIndex].value;

        const untilHour = this.elements.until.hour.options[this.elements.until.hour.selectedIndex].value;
        const untilMinute = this.elements.until.minute.options[this.elements.until.minute.selectedIndex].value;
        const selectedDates = cloneDeep(this.flatpickr.selectedDates);

        selectedDates[0].setHours(fromHour, fromMinute);

        if (selectedDates[1]) {
            selectedDates[1].setHours(untilHour, untilMinute);
        }

        this.setDateFromInput(selectedDates);
    }

    private updateLabelValues(selectedDates: Date[]) {
        this.elements.from.label.innerText = `Период с ${this.flatpickr.formatDate(selectedDates[0], 'D d.m.Y')}`;

        if (selectedDates[1]) {
            this.elements.until.label.innerText = `по ${this.flatpickr.formatDate(selectedDates[1], 'D d.m.Y')}`;
        }

    }

    private setTimeConstraints(selectedDates: Date[]) {
        if (moment(selectedDates[0]).isSame(selectedDates[1], 'day')) {
            this.resetTimeIfNeed();
            this.setUntilTimeConstraint(selectedDates);
        } else {
            this.resetAllConstraints();
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

    private addListenersOnSelectors() {
        this.elements.from.hour.onchange = this.onChangeFrom.bind(this);
        this.elements.from.minute.onchange = this.onChangeFrom.bind(this);

        this.elements.until.hour.onchange = this.onChangeUntil.bind(this);
        this.elements.until.minute.onchange = this.onChangeUntil.bind(this);
    }

    private onChangeFrom(value) {
        this.updateFieldsContent();
        if (moment(this.flatpickr.selectedDates[0])
            .isSame(this.flatpickr.selectedDates[1], 'day')) {
                this.disableUntilSelectors();
        }
    }

    private onChangeUntil() {
        this.updateFieldsContent();
        if (moment(this.flatpickr.selectedDates[0])
            .isSame(this.flatpickr.selectedDates[1], 'day')) {
                this.disableFromSelectors();
        }
    }

    private updateFieldsContent() {
        const { fromHour, fromMinute, untilHour, untilMinute } = this.getSelectorVaulesAsString();

        this.elements.from.hourField.innerText = fromHour;
        this.elements.from.minuteField.innerText = fromMinute;

        this.elements.until.hourField.innerText = untilHour;
        this.elements.until.minuteField.innerText = untilMinute;
    }

    private disableUntilSelectors() {
        const { fromHour, fromMinute } = this.getSelectedFrom();
        const { untilHour, untilMinute } = this.getSelectedUntil();

        this.elements.until.hour.options.forEach((option) => {
            option.disabled = Number(option.value) < fromHour ? true : false;
        });

        if (fromHour === untilHour) {
            if (fromMinute > untilMinute) {
                this.elements.until.minute.selectedIndex = 4;
            }
            this.elements.until.minute.options.forEach((option) => {
                option.disabled = Number(option.value) < fromMinute ? true : false;
            });
        } else {
            this.elements.until.minute.options.forEach((option) => {
                option.disabled = false;
            });
        }
    }

    private disableFromSelectors() {
        const { fromHour, fromMinute } = this.getSelectedFrom();
        const { untilHour, untilMinute } = this.getSelectedUntil();

        this.elements.from.hour.options.forEach((option) => {
            option.disabled = Number(option.value) > untilHour ? true : false;
        });

        if (fromHour === untilHour) {
            if (fromMinute > untilMinute) {
                this.elements.until.minute.selectedIndex = 4;
            }

            this.elements.from.minute.options.forEach((option) => {
                option.disabled = Number(option.value) > untilMinute ? true : false;
            });
        } else {
            this.elements.until.minute.options.forEach((option) => {
                option.disabled = false;
            });
        }
    }

    private setUntilTimeConstraint(selectedDates: Date[]) {
        this.disableUntilSelectors();

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

        this.updateFieldsContent();
    }

    private getSelectorVaulesAsString() {
        return {
            fromHour: this.elements.from.hour.options[this.elements.from.hour.selectedIndex].value,
            fromMinute: this.elements.from.minute.options[this.elements.from.minute.selectedIndex].value,
            untilHour: this.elements.until.hour.options[this.elements.until.hour.selectedIndex].value,
            untilMinute: this.elements.until.minute.options[this.elements.until.minute.selectedIndex].value,
        };
    }

    private getSelectedFrom() {
        return {
            fromHour: Number(this.elements.from.hour.options[this.elements.from.hour.selectedIndex].value),
            fromMinute: Number(this.elements.from.minute.options[this.elements.from.minute.selectedIndex].value),
        };
    }

    private getSelectedUntil() {
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
            descriptionElement.className = this.cssClasses.DESCRIPTION;
            descriptionElement.innerHTML = this.description;

            this.flatpickr.rContainer.appendChild(descriptionElement);
        }
    }
}
