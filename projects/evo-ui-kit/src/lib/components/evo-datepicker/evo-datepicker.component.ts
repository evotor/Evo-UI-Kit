import { Component, ViewChild, ViewEncapsulation, AfterViewInit, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FlatpickrOptions } from './flatpickr-options.interface';

declare var require: any;

if (typeof window !== 'undefined') {
    require('flatpickr');
}

@Component({
    selector: 'evo-datepicker',
    templateUrl: './evo-datepicker.component.html',
    styleUrls: [ './evo-datepicker.component.scss' ],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoDatepickerComponent),
            multi: true,
        },
    ],
})
export class EvoDatepickerComponent implements AfterViewInit, ControlValueAccessor, OnChanges {
    state = {
        isOpen: false,
    };

    private flatpickr: any;

    private defaultFlatpickrOptions: FlatpickrOptions = {
        wrap: true,
        clickOpens: true,
        onChange: (selectedDates: any) => {
            this.writeValue(selectedDates);
        },
        onClose: () => {
            this.setOpenedState(false);
        },
        onOpen: () => {
            this.shiftPickerPosition();
            this.setOpenedState(true);
        },
    };

    @ViewChild('flatpickr')
    flatpickrElement: any;

    @Input()
    config: FlatpickrOptions;

    @Input()
    placeholder = '';

    @Input()
    setDate: string | Date;

    writeValue(value: any) {
        this.propagateChange(value);
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}

    propagateChange = (_: any) => {};

    setDateFromInput(date: any) {
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

    /**
    * Customization of the flatpickr's view to ui-kit state
    */
    private customizePicker(): void {
        this.changeNextIcon();
    }

    /**
    * Flatpickr sets position in the document, but this position is too small
    */
    private shiftPickerPosition(): void {
        this.flatpickr.calendarContainer.style.display = 'none';

        setTimeout(() => {
            this.flatpickr.calendarContainer.style.top = '57px';
            this.flatpickr.calendarContainer.style.right = '0px';
            this.flatpickr.calendarContainer.style.display = 'block';
        }, 0, this); // HACK. Here we are setting our position
                     // in the next tick becouse flatpickr's positioning method is called after hook
    }

    /**
    * Sets new state of the picker openness
    * @param state new state
    */
    private setOpenedState(state: boolean) {
        this.state.isOpen = state;
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
