import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    Injector,
    Input,
    LOCALE_ID,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CloseScrollStrategy, ScrollStrategyOptions} from '@angular/cdk/overlay';
import {CalendarDay, getDateByCalendarDay} from '../../../evo-calendar';
import {maskitoDateOptionsGenerator, maskitoDateTimeOptionsGenerator, MaskitoTimeMode} from '@maskito/kit';
import {Maskito, MaskitoOptions} from '@maskito/core';
import {formatDate} from '@angular/common';
import {parse} from 'date-fns';
import {DATE_SEPARATOR, DATE_TIME_SEPARATOR, MASKITO_DATE_MODE, MASKITO_DATE_OPTIONS_DEFAULTS} from '../../constants';
import {EvoBaseInputLikeControl} from '../../../../common/evo-base-input-like-control';
import {BehaviorSubject, combineLatest, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
    selector: 'evo-input-date',
    templateUrl: './evo-input-date.component.html',
    styleUrls: ['./evo-input-date.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoInputDateComponent),
            multi: true,
        },
    ],
})
export class EvoInputDateComponent
    extends EvoBaseInputLikeControl
    implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    @Input() disabled = false;

    @Input() set min(min: CalendarDay) {
        this._maxCalendarDay$.next(min);
    }

    @Input() set max(max: CalendarDay) {
        this._maxCalendarDay$.next(max);
    }

    @Input() set hasTime(hasTime: boolean) {
        this._hasTime$.next(hasTime);
    }

    @Input() placeholder = 'Выберите дату';
    @Input() openOnFocus = true;
    @Input() timeMode: MaskitoTimeMode = 'HH:MM';

    date: Date = new Date();

    isCalendarOpen = false;

    readonly closeScrollStrategy: CloseScrollStrategy = this.scrollStrategyOptions.close();

    @ViewChild('inputElement', {read: ElementRef}) private readonly inputElement: ElementRef;

    private _isFocused = false;
    private _maskitoInstance: Maskito = null;

    private readonly _hasTime$ = new BehaviorSubject<boolean>(false);
    private readonly _minCalendarDay$ = new BehaviorSubject<CalendarDay>(null);
    private readonly _maxCalendarDay$ = new BehaviorSubject<CalendarDay>(null);
    private readonly _destroy$ = new Subject<void>();

    constructor(
        protected readonly injector: Injector,
        private readonly cdr: ChangeDetectorRef,
        @Inject(LOCALE_ID) private readonly locale: string,
        private readonly scrollStrategyOptions: ScrollStrategyOptions,
        private readonly elRef: ElementRef,
    ) {
        super(injector);
    }

    get isFocused(): boolean {
        return this._isFocused || this.isCalendarOpen;
    }

    get hasTime(): boolean {
        return this._hasTime$.value;
    }

    get min(): CalendarDay {
        return this._minCalendarDay$.value;
    }

    get max(): CalendarDay {
        return this._maxCalendarDay$.value;
    }

    /**
     * input ngModel value formatter
     */
    get inputValue(): string {
        return this.date ? formatDate(this.date, 'dd.MM.YYYY', this.locale) : '';
    }

    /**
     * input ngModel value parser
     */
    set inputValue(value: string) {
        const date: Date = this.getDateFromString(value);
        if (date) {
            this.changeValue(date);
            this.isCalendarOpen = false;
        } else {
            this.isCalendarOpen = true;
        }
    }

    onCalendarOutsideClick(event: MouseEvent): void {
        if (!event?.target || !(event.target as HTMLElement).closest(this.elRef.nativeElement.tagName)) {
            this.isCalendarOpen = false;
        }
    }

    onIconClick(event: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        this.isCalendarOpen = !this.isCalendarOpen;
    }

    onInputFocus(event: Event): void {
        this._isFocused = true;
        if (this.openOnFocus) {
            this.isCalendarOpen = true;
        }
    }

    onInputBlur(event: Event): void {
        this._isFocused = false;
        this.onTouched();
    }

    onInputChange(event: Event): void {
        const input = event?.target as HTMLInputElement;
        if (!input.value || !this.getDateFromString(input.value)) {
            this.changeValue(null);
            (event?.target as HTMLInputElement).value = '';
        }
    }

    /**
     * Handle date selection via Calendar
     *
     * @param date
     */
    onCalendarDateChange(date: Date): void {
        this.changeValue(date);
        console.log(date);
        // this.isCalendarOpen = false;
        // this.inputElement.nativeElement.blur();
    }

    ngOnInit(): void {
        this._destroy$
            .pipe(
                tap(() => {
                    if (!this._maskitoInstance) {
                        return;
                    }
                    this._maskitoInstance.destroy();
                }),
            )
            .subscribe();
    }

    ngAfterViewInit(): void {
        this.initInputMaskSubscription();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
    }

    onChange: any = (): void => {};
    onTouched: any = (): void => {};

    writeValue(date: Date): void {
        this.date = date;
        this.cdr.detectChanges();
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    /**
     * Change ngControl value
     *
     * @param date
     * @private
     */
    private changeValue(date: Date): void {
        this.date = date;
        this.onChange(date);
    }

    /**
     * Parse full date from string
     *
     * @param value
     * @private
     */
    private getDateFromString(value: string): Date {
        if (value.length !== MASKITO_DATE_MODE.length) {
            return null;
        }
        const parsedDate = parse((event?.target as HTMLInputElement)?.value, 'dd.MM.yyyy', new Date());
        return isNaN(parsedDate.valueOf()) ? null : parsedDate;
    }

    private initInputMask(hasTime: boolean, min: Date, max: Date): void {
        const maskitoOptions: MaskitoOptions = {
            ...MASKITO_DATE_OPTIONS_DEFAULTS,
            ...(hasTime
                ? maskitoDateTimeOptionsGenerator({
                      dateMode: MASKITO_DATE_MODE,
                      timeMode: this.timeMode,
                      dateSeparator: DATE_SEPARATOR,
                      dateTimeSeparator: DATE_TIME_SEPARATOR,
                      ...(min ? {min} : {}),
                      ...(max ? {max} : {}),
                  })
                : maskitoDateOptionsGenerator({
                      mode: MASKITO_DATE_MODE,
                      separator: DATE_SEPARATOR,
                      ...(min ? {min} : {}),
                      ...(max ? {max} : {}),
                  })),
        };
        this._maskitoInstance = new Maskito(this.inputElement.nativeElement, maskitoOptions);
    }

    private initInputMaskSubscription(): void {
        combineLatest([this._hasTime$, this._minCalendarDay$, this._maxCalendarDay$])
            .pipe(
                tap(([hasTime, min, max]) =>
                    this.initInputMask(hasTime, getDateByCalendarDay(min), getDateByCalendarDay(max)),
                ),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }
}
