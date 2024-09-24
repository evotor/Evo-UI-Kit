import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
    Injector,
    Input,
    LOCALE_ID,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import {EvoBaseInputLikeControl} from '../../../common/evo-base-input-like-control';
import {BehaviorSubject, Subject} from 'rxjs/index';
import {tap} from 'rxjs/operators';
import {Maskito} from '@maskito/core';
import {MaskitoTimeMode} from '@maskito/kit';
import {CalendarDay} from '../../evo-calendar';
import {CloseScrollStrategy, ScrollStrategyOptions} from '@angular/cdk/overlay';

@Component({
    template: '',
})
export abstract class AbstractInputDateComponent
    extends EvoBaseInputLikeControl
    implements OnInit, AfterViewInit, OnDestroy {
    @Input() disabled = false;

    @Input() set hasTime(hasTime: boolean) {
        this._hasTime$.next(hasTime);
    }

    @Input() set min(min: CalendarDay) {
        this._minCalendarDay$.next(min);
    }

    @Input() set max(max: CalendarDay) {
        this._maxCalendarDay$.next(max);
    }

    @Input() placeholder = 'Выберите дату';
    @Input() openOnFocus = true;
    @Input() timeMode: MaskitoTimeMode = 'HH:MM';

    readonly closeScrollStrategy: CloseScrollStrategy = this.scrollStrategyOptions.close();

    @ViewChild('inputElement', {read: ElementRef}) protected readonly inputElement: ElementRef;

    protected _maskitoInstance: Maskito = null;

    protected readonly _isCalendarOpen$ = new BehaviorSubject<boolean>(false);
    protected readonly _hasTime$ = new BehaviorSubject<boolean>(false);
    protected readonly _destroy$ = new Subject<void>();
    protected readonly _isFocused$ = new BehaviorSubject<boolean>(false);
    protected readonly _minCalendarDay$ = new BehaviorSubject<CalendarDay>(null);
    protected readonly _maxCalendarDay$ = new BehaviorSubject<CalendarDay>(null);

    constructor(
        protected readonly injector: Injector,
        protected readonly elRef: ElementRef,
        @Inject(LOCALE_ID) protected readonly locale: string,
        protected readonly cdr: ChangeDetectorRef,
        protected readonly scrollStrategyOptions: ScrollStrategyOptions,
    ) {
        super(injector);
    }

    get min(): CalendarDay {
        return this._minCalendarDay$.value;
    }

    get max(): CalendarDay {
        return this._maxCalendarDay$.value;
    }

    get hasTime(): boolean {
        return this._hasTime$.value;
    }

    get isFocused(): boolean {
        return this._isFocused$.value || this.isCalendarOpen;
    }

    get isCalendarOpen(): boolean {
        return this._isCalendarOpen$.value;
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

    onCalendarOutsideClick(event: MouseEvent): void {
        if (!event?.target || !(event.target as HTMLElement).closest(this.elRef.nativeElement.tagName)) {
            this._isCalendarOpen$.next(false);
        }
    }

    onIconClick(event: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        this._isCalendarOpen$.next(!this.isCalendarOpen);
    }

    onInputFocus(_event: Event): void {
        this._isFocused$.next(true);
        if (this.openOnFocus) {
            this._isCalendarOpen$.next(true);
        }
    }

    onInputBlur(_event: Event): void {
        this._isFocused$.next(false);
        this.onTouched();
    }

    protected abstract initInputMaskSubscription(): void;
}
