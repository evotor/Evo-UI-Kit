import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    Output,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NgControl} from '@angular/forms';
import {merge, Subject} from 'rxjs';
import {NgSelectComponent, NgSelectModule} from '@ng-select/ng-select';
import {delay, takeUntil, tap} from 'rxjs/operators';
import {isNull} from 'lodash-es';
import {EvoInputTheme} from '../../evo-input';
import {EvoAutocompleteSize} from '../types/evo-autocomplete-size';
import {EvoIconService} from '../../evo-icon';
import {DomSanitizer} from '@angular/platform-browser';
import {EVO_ICON_RESOLVER} from '../../../common/tokens';
import {EvoControlErrorModule} from '../../evo-control-error/evo-control-error.module';
import {NgIf, NgTemplateOutlet} from '@angular/common';
import {EvoUiClassDirective} from '../../../directives/evo-ui-class.directive';

export type DropdownPosition = 'bottom' | 'top' | 'auto';
// eslint-disable-next-line
export type AddTagFn = (term: string) => any | Promise<any>;
// eslint-disable-next-line
export type SearchFn = (term: string, item: any) => boolean;
// eslint-disable-next-line
export type CompareWithFn = (a: any, b: any) => boolean;
// eslint-disable-next-line
export type GroupValueFn = (key: string | object, children: any[]) => string | object;

@Component({
    // eslint-disable-next-line
    selector: 'evo-autocomplete',
    templateUrl: './evo-autocomplete.component.html',
    styleUrls: ['./evo-autocomplete.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [EvoUiClassDirective, NgSelectModule, FormsModule, NgTemplateOutlet, NgIf, EvoControlErrorModule],
})
export class EvoAutocompleteComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    theme: EvoInputTheme = EvoInputTheme.default;

    @Input() size: EvoAutocompleteSize = 'normal';

    isFocused = false;
    isSelectbox = false;

    // eslint-disable-next-line
    @Input() isOpen;
    // eslint-disable-next-line
    @Input() items: any[];
    @Input() bindLabel: string;
    @Input() bindValue: string;
    @Input() markFirst = true;
    @Input() placeholder: string;
    @Input() notFoundText = 'Не найдено';
    @Input() typeToSearchText: string;
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
    // eslint-disable-next-line
    @Input() groupBy: string | ((value: any) => any);
    @Input() groupValue: GroupValueFn;
    @Input() bufferAmount = 4;
    @Input() virtualScroll: boolean;
    @Input() selectableGroup: boolean;
    @Input() selectableGroupAsModel = true;
    // eslint-disable-next-line
    @Input() searchFn: SearchFn;
    @Input() clearOnBackspace = true;
    @Input() typeahead: Subject<string>;
    @Input() multiple: boolean;
    @Input() multipleInline: boolean;
    @Input() addTag: boolean | AddTagFn;
    @Input() searchable = true;
    @Input() clearable = true;
    @Input() errorsMessages: {[key: string]: string};
    @Input() compareWith: CompareWithFn;

    // Fix: https://github.com/ng-select/ng-select/pull/1257
    // Don't work with custom template - labelTemp
    @Input() editQuery = false;

    // Outputs
    /* eslint-disable @angular-eslint/no-output-rename */
    @Output('blur') blurEvent = new EventEmitter();
    @Output('focus') focusEvent = new EventEmitter();
    @Output('change') changeEvent = new EventEmitter();
    @Output('open') openEvent = new EventEmitter();
    @Output('close') closeEvent = new EventEmitter();
    // eslint-disable-next-line
    @Output('search') searchEvent = new EventEmitter<{term: string; items: any[]}>();
    @Output('clear') clearEvent = new EventEmitter();
    @Output('add') addEvent = new EventEmitter();
    @Output('remove') removeEvent = new EventEmitter();
    @Output('scroll') scrollEvent = new EventEmitter<{start: number; end: number}>();
    @Output('scrollToEnd') scrollToEndEvent = new EventEmitter();
    /* eslint-enable @angular-eslint/no-output-rename */

    @ViewChild(NgSelectComponent)
    ngSelectComponent: NgSelectComponent;

    // eslint-disable-next-line
    @ContentChild('labelTemp', {read: TemplateRef}) labelTemp: TemplateRef<any>;
    // eslint-disable-next-line
    @ContentChild('multiLabelTemp', {read: TemplateRef}) multiLabelTemp: TemplateRef<any>;
    // eslint-disable-next-line
    @ContentChild('optionTemp', {read: TemplateRef}) optionTemp: TemplateRef<any>;

    protected inputVal: string;

    protected readonly _destroy$ = new Subject<void>();

    // eslint-disable-next-line
    protected _value: any;

    protected inputEl: HTMLInputElement;

    constructor(
        private readonly cdr: ChangeDetectorRef,
        public control: NgControl,
        private readonly evoIconService: EvoIconService,
        private readonly sanitizer: DomSanitizer,
        @Inject(EVO_ICON_RESOLVER) private readonly iconResolver: (s: string) => string,
    ) {
        control.valueAccessor = this;
    }

    @Input('isSelectbox') set setSelectbox(isSelectbox: boolean) {
        this.clearable = false;
        this.editQuery = false;
        this.searchable = false;
        this.notFoundText = '';
        this.isSelectbox = isSelectbox;
    }

    @Input('theme') set setTheme(theme: string | EvoInputTheme) {
        if (EvoInputTheme[theme]) {
            this.theme = EvoInputTheme[theme];
        }
    }

    get hasErrors(): boolean {
        return this.control.dirty && this.control.touched && this.control.invalid;
    }

    get classes(): {[key: string]: boolean} {
        return {
            'is-multiple-inline': this.multipleInline,
            'is-edit-query': this.editQuery,
            'is-selectbox': this.isSelectbox,
            disabled: this.control.disabled,
            touched: this.control.touched,
            valid: this.control.valid,
            invalid: this.control.invalid,
            [`theme-${this.theme}`]: true,
            [`size-${this.size}`]: true,
        };
    }

    // eslint-disable-next-line
    get value(): any {
        return this._value;
    }

    // eslint-disable-next-line
    set value(value: any) {
        if (value !== this._value) {
            this._value = value;
            this._onChange(value);
        }
    }

    // eslint-disable-next-line
    getMultipleInlineItemsLabels(items: any[]): string {
        if (!items || !Array.isArray(items) || items.length === 0) {
            return '';
        }
        return items
            .map((item) => item[this.bindLabel] || '')
            .filter((item) => item !== '')
            .join(', ');
    }

    ngAfterViewInit(): void {
        if (this.editQuery) {
            this.editQueryMode();
        }

        this.patchClearButtonIcon();

        // prevent option click to close evo-modal
        this.ngSelectComponent.element.addEventListener('click', (e) => {
            if ((e.target as HTMLElement).closest('.ng-option')) {
                e.stopPropagation();
            }
        });

        // Allows to mark view for check
        // if control was validated with FormHelper.validate
        // and it's touched
        this.control.control.statusChanges
            .pipe(
                takeUntil(this._destroy$),
                tap(() => this.cdr.markForCheck()),
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    // eslint-disable-next-line
    writeValue(value: any): void {
        this.value = value;
        if (this.ngSelectComponent) {
            this.ngSelectComponent.writeValue(value);
        }
    }

    // eslint-disable-next-line
    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    // eslint-disable-next-line
    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (this.ngSelectComponent) {
            this.ngSelectComponent.setDisabledState(isDisabled);
        }
    }

    // TODO: investigate and remove
    editQueryMode(): void {
        const ngSelectEl: HTMLElement = this.ngSelectComponent.element;
        this.inputEl = ngSelectEl.querySelector('.ng-input input');
        const streams$ = [
            this.changeEvent.pipe(
                delay(0),
                tap(() => {
                    this.resetSearchQuery();
                    this.inputEl.value = this.inputVal || '';
                }),
            ),
            this.closeEvent.pipe(
                delay(0),
                tap(() => {
                    this.resetSearchQuery();
                    if (ngSelectEl.classList.contains('ng-select-focused')) {
                        this.inputEl.value = this.inputVal || '';
                    }
                }),
            ),
            this.focusEvent.pipe(
                tap(() => {
                    this.resetSearchQuery();
                    this.inputEl.value = this.inputVal || '';
                }),
            ),
            this.blurEvent.pipe(
                tap(() => {
                    this.inputEl.value = '';
                }),
            ),
        ];

        if (this.control.valueChanges) {
            streams$.push(
                this.control.valueChanges.pipe(
                    tap((value) => {
                        if (!isNull(value)) {
                            this.resetSearchQuery();
                            return;
                        }
                        this.inputVal = '';
                        this.inputEl.value = '';
                    }),
                ),
            );
        }

        merge(...streams$)
            .pipe(takeUntil(this._destroy$))
            .subscribe();
    }

    resetSearchQuery(): void {
        const currentItem = this.ngSelectComponent.selectedItems[0];
        this.inputVal = currentItem?.label || '';
    }

    focus(): void {
        this.ngSelectComponent.focus();
    }

    blur(): void {
        this.ngSelectComponent.blur();
    }

    open(): void {
        this.ngSelectComponent.open();
    }

    close(): void {
        this.ngSelectComponent.close();
    }

    onFocus(event: FocusEvent): void {
        this.isFocused = true;
        this._onTouched();
        if (this.control.value) {
            this.focusEvent.emit(event);
        }
    }

    onBlur(event: FocusEvent): void {
        this.isFocused = false;
        this.blurEvent.emit(event);
    }

    onClearClick(): void {
        this.ngSelectComponent.handleClearClick();
    }

    protected _onChange = (value) => {};

    protected _onTouched = () => {};

    /**
     * Try to patch clear button icon
     */
    protected patchClearButtonIcon(): void {
        const originalShowClearFn = this.ngSelectComponent.showClear;
        const ngSelectElement = this.ngSelectComponent;
        let fetchIconSubscription = null;

        const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iconResolver('decline'));
        const icon$ = this.evoIconService.fetchIcon(safeUrl);

        this.ngSelectComponent.showClear = function () {
            const isClearButtonVisible = originalShowClearFn.bind(this)();

            if (isClearButtonVisible) {
                fetchIconSubscription?.unsubscribe();

                fetchIconSubscription = icon$.subscribe((iconDecline) => {
                    const ngClearWrapperElement = ngSelectElement.element.querySelector('.ng-clear-wrapper');
                    if (!ngClearWrapperElement) {
                        return;
                    }
                    // eslint-disable-next-line:max-line-length
                    ngClearWrapperElement.innerHTML = `<span class="ng-clear ng-clear_patched"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${iconDecline}</svg></span>`;
                });
            }

            return isClearButtonVisible;
        };
    }
}
