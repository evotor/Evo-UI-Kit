import {
    Component, Input, forwardRef, ViewChild, Output, EventEmitter,
    HostBinding, ViewEncapsulation, ContentChild, TemplateRef, AfterViewInit, OnDestroy
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { tap, takeUntil, delay } from 'rxjs/operators';

export type DropdownPosition = 'bottom' | 'top' | 'auto';
export type AutoCorrect = 'off' | 'on';
export type AutoCapitalize = 'off' | 'on';
export type AddTagFn = ((term: string) => any | Promise<any>);
export type GroupValueFn = (key: string | object, children: any[]) => string | object;

@Component({
    selector: 'evo-autocomplete',
    templateUrl: './evo-autocomplete.component.html',
    styleUrls: ['./evo-autocomplete.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoAutocompleteComponent),
            multi: true,
        },
    ],
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

    // Fix: https://github.com/ng-select/ng-select/issues/1088
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

    @ViewChild(NgSelectComponent, {static: false})
    ngSelectComponent: NgSelectComponent;

    @HostBinding('attr.class') hostClassName = 'evo-autocomplete';

    @ContentChild('labelTemp', {read: TemplateRef, static: false}) labelTemp: TemplateRef<any>;
    @ContentChild('optionTemp', {read: TemplateRef, static: false}) optionTemp: TemplateRef<any>;

    protected inputVal: string;

    protected readonly _destroy$ = new Subject<void>();

    protected _value: any;

    protected inputEl: HTMLInputElement;

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

    ngAfterViewInit() {
        if (this.editQuery) {
            const ngSelectEl: HTMLElement = this.ngSelectComponent.element;
            this.inputEl = ngSelectEl.querySelector('.ng-input input');

            this.change.pipe(
                // @ts-ignore
                delay(0),
                tap((item: any) => {
                    this.inputVal = (item && item.label) || '';
                    this.inputEl.value = this.inputVal;
                }),
                takeUntil(this._destroy$),
            ).subscribe();

            this.focus.pipe(
                // @ts-ignore
                tap(() => this.inputEl.value = this.inputVal || ''),
                takeUntil(this._destroy$),
            ).subscribe();

            this.blur.pipe(
                // @ts-ignore
                tap(() => this.inputEl.value = ''),
                takeUntil(this._destroy$),
            ).subscribe();
        }
    }

    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }

    protected _onChange = (value) => { };
    protected _onTouched = () => { };
}
