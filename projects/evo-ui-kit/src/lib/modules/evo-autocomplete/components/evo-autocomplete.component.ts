import { Component, Input, forwardRef, ViewChild, Output, EventEmitter,
    HostBinding, ViewEncapsulation, ContentChild, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'evo-autocomplete',
    templateUrl: './evo-autocomplete.component.html',
    styleUrls: [ './evo-autocomplete.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoAutocompleteComponent),
            multi: true,
        },
    ],
    encapsulation: ViewEncapsulation.None,
})
export class EvoAutocompleteComponent implements ControlValueAccessor {
    @Input() items: any[];
    @Input() bindLabel: string;
    @Input() bindValue: string;
    @Input() searchFn: () => {};
    @Input() loading: boolean;
    @Input() hideSelected: boolean;
    @Input() typeahead: Observable<any>;
    @Input() virtualScroll: boolean;
    @Input() clearOnBackspace = true;

    @Output() change = new EventEmitter();
    @Output() scroll = new EventEmitter();
    @Output() scrollToEnd = new EventEmitter();

    @ViewChild(NgSelectComponent)
    ngSelectComponent: NgSelectComponent;

    @HostBinding('attr.class') hostClassName = 'evo-autocomplete';

    @ContentChild('labelTemp') labelTemp: TemplateRef<any>;
    @ContentChild('optionTemp') optionTemp: TemplateRef<any>;

    private _value: any;

    private _onChange = (value) => {};
    private _onTouched = () => {};

    constructor() { }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        if (value !== this._value) {
            this._value = value;
            this._onChange(value);
        }
        this._onTouched();
    }

    writeValue(value: any): void {
        this.value = value;
        this.ngSelectComponent.writeValue(value);
    }

    registerOnChange(fn: any) {
        this._onChange = fn;
    }

    registerOnTouched(fn: any) {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.ngSelectComponent.setDisabledState(isDisabled);
    }
}
