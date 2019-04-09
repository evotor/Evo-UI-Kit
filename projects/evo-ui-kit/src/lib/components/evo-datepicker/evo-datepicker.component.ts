import { Component, ViewChild, ViewEncapsulation, AfterViewInit, forwardRef, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
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
export class EvoDatepickerComponent implements AfterViewInit, ControlValueAccessor, OnChanges, OnInit {
    state = {
        isOpen: false,
    };

    private flatpickr: any;
    maskConfig: {mask: any, pattern?: string, max?: Date} = {
        mask: Date,
    };
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
            this.setOpenedState(true);
        },
    };

    @ViewChild('flatpickr')
    flatpickrElement: any;

    @Input()
    config: FlatpickrOptions;

    @Input()
    maskedInput: boolean;

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

    handleMaskComplete(value) {
        const date = this.flatpickrElement.nativeElement._flatpickr.parseDate(value, this.config.dateFormat);
        this.setDateFromInput(date);
    }

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

    ngOnInit() {
        if (this.config.allowInput && this.maskedInput) {
            this.maskConfig.pattern = this.config.dateFormat;
            this.maskConfig.max = this.config.maxDate as Date;
        }
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
