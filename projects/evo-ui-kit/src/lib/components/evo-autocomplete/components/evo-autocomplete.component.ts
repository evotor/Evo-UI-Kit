import {
    Component, Input, ViewChild, Output, EventEmitter,
    HostBinding, ViewEncapsulation, ContentChild, TemplateRef, AfterViewInit, OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { tap, takeUntil, delay, filter } from 'rxjs/operators';
import { isNull } from 'lodash-es';

export type DropdownPosition = 'bottom' | 'top' | 'auto';
export type AutoCorrect = 'off' | 'on';
export type AutoCapitalize = 'off' | 'on';
export type AddTagFn = ((term: string) => any | Promise<any>);
export type GroupValueFn = (key: string | object, children: any[]) => string | object;

@Component({
    selector: 'evo-autocomplete',
    templateUrl: './evo-autocomplete.component.html',
    styleUrls: ['./evo-autocomplete.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class EvoAutocompleteComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    // Inputs
    @Input() items: any[];
    @Input() bindLabel: string;
    @Input() bindValue: string;
    @Input() markFirst = true;
    @Input() placeholder: string;
    @Input() notFoundText = 'Не найдено';
    @Input() typeToSearchText = 'Начните писать...';
    @Input() addTagText = 'Добавить тэг';
    @Input() loadingText = 'Идет поиск...';
    @Input() clearAllText: string;
    @Input() dropdownPosition: DropdownPosition = 'auto';
    @Input() appendTo: string;
    @Input() loading: boolean;
    @Input() closeOnSelect = true;
    @Input() hideSelected: boolean;
    @Input() selectOnTab: boolean;
    @Input() openOnEnter: boolean;
    @Input() maxSelectedItems: number;
    @Input() groupBy: string | Function;
    @Input() groupValue: GroupValueFn;
    @Input() bufferAmount = 4;
    @Input() virtualScroll: boolean;
    @Input() selectableGroup: boolean;
    @Input() selectableGroupAsModel = true;
    @Input() searchFn: () => {};
    @Input() excludeGroupsFromDefaultSelection: boolean;
    @Input() clearOnBackspace = true;
    @Input() autoCorrect: AutoCorrect = 'off';
    @Input() autoCapitalize: AutoCapitalize = 'off';
    @Input() typeahead: Subject<string>;
    @Input() multiple: boolean;
    @Input() addTag: boolean | AddTagFn;
    @Input() searchable = true;
    @Input() clearable = true;
    @Input() isOpen: boolean;
    @Input() errorsMessages: { [key: string]: string };

    // Fix: https://github.com/ng-select/ng-select/pull/1257
    // Don't work with custom template - labelTemp
    @Input() editQuery = false;

    // Outputs
    @Output() blur = new EventEmitter();
    @Output() focus = new EventEmitter();
    @Output() change = new EventEmitter();
    @Output() open = new EventEmitter();
    @Output() close = new EventEmitter();
    @Output() search = new EventEmitter<{ term: string, items: any[] }>();
    @Output() clear = new EventEmitter();
    @Output() add = new EventEmitter();
    @Output() remove = new EventEmitter();
    @Output() scroll = new EventEmitter<{ start: number; end: number }>();
    @Output() scrollToEnd = new EventEmitter();

    @ViewChild(NgSelectComponent) ngSelectComponent: NgSelectComponent;

    @HostBinding('attr.class') hostClassName = 'evo-autocomplete';

    @ContentChild('labelTemp') labelTemp: TemplateRef<any>;
    @ContentChild('optionTemp') optionTemp: TemplateRef<any>;

    protected inputVal: string;

    protected readonly _destroy$ = new Subject<void>();

    protected _value: any;

    protected inputEl: HTMLInputElement;

    constructor(
        public control: NgControl,
    ) {
        control.valueAccessor = this;
    }

    get hasErrors(): boolean {
        return this.control.dirty && this.control.touched && this.control.invalid;
    }

    get classes(): { [key: string]: boolean } {
        return {
            'touched': this.control.touched,
            'valid': this.control.valid,
            'invalid': this.control.invalid,
            'edit-query': this.editQuery,
        };
    }

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

    ngAfterViewInit() {
        if (this.editQuery) {
            this.editQueryMode();
        }
    }

    editQueryMode() {
        const ngSelectEl: HTMLElement = this.ngSelectComponent.element;
        this.inputEl = ngSelectEl.querySelector('.ng-input input');

        this.change.pipe(
            delay(0),
            tap(() => {
                this.resetSearchQuery();
                this.inputEl.value = this.inputVal || '';
            }),
            takeUntil(this._destroy$),
        ).subscribe();

        this.close.pipe(
            delay(0),
            tap(() => {
                this.resetSearchQuery();
                if (ngSelectEl.classList.contains('ng-select-focused')) {
                    this.inputEl.value = this.inputVal || '';
                }
            }),
            takeUntil(this._destroy$),
        ).subscribe();

        this.focus.pipe(
            tap(() => {
                this.resetSearchQuery();
                this.inputEl.value = this.inputVal || '';
            }),
            takeUntil(this._destroy$),
        ).subscribe();

        this.blur.pipe(
            tap(() => {
                this.inputEl.value = '';
            }),
            takeUntil(this._destroy$),
        ).subscribe();

        this.control.valueChanges.pipe(
            tap((value) => {
                if (!isNull(value)) {
                    this.resetSearchQuery();
                    return;
                }
                this.inputVal = '';
                this.inputEl.value = '';
            }),
            takeUntil(this._destroy$),
        ).subscribe();

    }

    resetSearchQuery() {
        const currentItem = this.ngSelectComponent.selectedItems[0];
        this.inputVal = (currentItem && currentItem.label) || '';
    }

    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }

    protected _onChange = (value) => { };
    protected _onTouched = () => { };
}
