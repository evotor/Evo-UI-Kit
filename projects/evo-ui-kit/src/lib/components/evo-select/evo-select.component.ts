import { Component, OnInit, Input, forwardRef, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'evo-select',
    templateUrl: './evo-select.component.html',
    styleUrls: [ './evo-select.component.scss' ],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => EvoSelectComponent),
          multi: true,
        },
      ],
})
export class EvoSelectComponent implements OnInit, ControlValueAccessor, AfterContentInit {

    @Input() style: 'input' | 'inline' = 'input';
    @Input() label: string;
    @ViewChild('select') select: ElementRef;

    selectedValue: any;
    propagateChange = (_: any) => {};

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit() {
        const selectOptions = this.select.nativeElement.options;
        this.selectedValue = selectOptions && selectOptions.length > 0 ? selectOptions[0].value : undefined;
    }

    writeValue(value: any) {
        if (value !== undefined) {
            this.selectedValue = value;
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    getSelectClasses() {
        return {
            [ this.style ]: true,
        };
    }

    onChange(newValue) {
        this.propagateChange(newValue);
    }

}
