import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Russian} from 'flatpickr/dist/l10n/ru';
import {EvoDatepickerComponent, FlatpickrOptions} from './evo-datepicker.component';

const RANGE_VALUE = [new Date(2018, 3, 5), new Date(2018, 3, 12)];
const SINGLE_VALUE = [new Date(2018, 3, 5)];

const rangeConfig: FlatpickrOptions = {locale: Russian, dateFormat: 'd.m.Y', mode: 'range'};
const singleConfig: FlatpickrOptions = {locale: Russian, dateFormat: 'd.m.Y'};
const maskedConfig: FlatpickrOptions = {locale: Russian, dateFormat: 'd.m.Y', allowInput: true};

@Component({
    selector: 'evo-onpush-host',
    template: `<evo-datepicker
        [config]="config"
        [theme]="theme"
        [maskedInput]="maskedInput"
        [formControl]="control"
    />`,
    standalone: true,
    imports: [ReactiveFormsModule, EvoDatepickerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class OnPushHostComponent {
    @Input() config: FlatpickrOptions = rangeConfig;
    @Input() theme?: string = 'range';
    @Input() maskedInput = false;
    @Input() control = new FormControl<Date[]>(RANGE_VALUE);
}

@Component({
    selector: 'evo-default-range-host',
    template: `<evo-datepicker [config]="config" theme="range" [formControl]="control" />`,
    standalone: true,
    imports: [ReactiveFormsModule, EvoDatepickerComponent],
})
class DefaultRangeHostComponent {
    config = rangeConfig;
    control = new FormControl<Date[]>(RANGE_VALUE);
}

@Component({
    selector: 'evo-onpush-async-host',
    template: `
        @if (loaded) {
            <evo-datepicker [config]="config" theme="range" [formControl]="control" />
        }
    `,
    standalone: true,
    imports: [ReactiveFormsModule, EvoDatepickerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class OnPushAsyncHostComponent {
    private readonly cdr = inject(ChangeDetectorRef);

    config = rangeConfig;
    control = new FormControl<Date[]>(null);
    loaded = false;

    // Эмуляция боевого пути: ответ HTTP приходит макрозадачей, поддерево создаётся внутри того же
    // прохода CD - следующего тика, в котором мог бы сработать markForCheck из ngAfterViewInit, нет.
    load(): void {
        setTimeout(() => {
            this.control.setValue(RANGE_VALUE);
            this.loaded = true;
            this.cdr.markForCheck();
        });
    }
}

// Боевая расстановка потребителя: обычный корень, между ним и датапикером - OnPush-компонент.
// Проход CD от корня в такую ветку не заходит, пока её кто-нибудь не пометит грязной.
@Component({
    selector: 'evo-default-root-host',
    template: `<evo-onpush-host [config]="config" [theme]="theme" [control]="control" />`,
    standalone: true,
    imports: [OnPushHostComponent],
})
class DefaultRootHostComponent {
    @Input() config = rangeConfig;
    @Input() theme = 'range';
    @Input() control = new FormControl<Date[]>(null);
}

@Component({
    selector: 'evo-onpush-setdate-host',
    template: `<evo-datepicker [config]="config" theme="range" [setDate]="dates" />`,
    standalone: true,
    imports: [EvoDatepickerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class OnPushSetDateHostComponent {
    config = rangeConfig;
    @Input() dates: Date[] = null;
}

const valueSpan = (fixture: ComponentFixture<unknown>): HTMLElement =>
    fixture.nativeElement.querySelector('.evo-datepicker__value');
const emptyText = (fixture: ComponentFixture<unknown>): HTMLElement =>
    fixture.nativeElement.querySelector('.evo-datepicker__empty-text');
const pickerInput = (fixture: ComponentFixture<unknown>): HTMLInputElement =>
    fixture.nativeElement.querySelector('.evo-datepicker__input');

const expectRenderedValue = (fixture: ComponentFixture<unknown>): void => {
    const span = valueSpan(fixture);

    expect(span).not.toBeNull();
    expect(span.textContent.trim()).toBe(pickerInput(fixture).value);
};

const createOnPushHost = (inputs: Partial<OnPushHostComponent> = {}): ComponentFixture<OnPushHostComponent> => {
    const fixture = TestBed.createComponent(OnPushHostComponent);
    Object.entries(inputs).forEach(([name, value]) => fixture.componentRef.setInput(name, value));

    return fixture;
};

describe('EvoDatepickerComponent: first render under an OnPush host', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                OnPushHostComponent,
                DefaultRangeHostComponent,
                OnPushAsyncHostComponent,
                OnPushSetDateHostComponent,
                DefaultRootHostComponent,
            ],
        }).compileComponents();
    }));

    // Значение из форм-контрола должно быть видно сразу, без единого события в поддереве.
    it('should render the form control value on the first change detection run', () => {
        const fixture = createOnPushHost();

        fixture.detectChanges();

        expectRenderedValue(fixture);
        expect(valueSpan(fixture).textContent).toContain('05.04.2018');
        expect(emptyText(fixture)).toBeNull();
    });

    it('should render a value that arrives while the subtree is being created', fakeAsync(() => {
        const fixture = TestBed.createComponent(OnPushAsyncHostComponent);
        fixture.detectChanges();

        fixture.componentInstance.load();
        tick();
        fixture.detectChanges();

        expectRenderedValue(fixture);
    }));

    // Под Default-хостом тот же дефект виден как NG0100: @if переключается уже после проверки вью.
    it('should not throw NG0100 under a default change detection host', () => {
        const fixture = TestBed.createComponent(DefaultRangeHostComponent);

        expect(() => fixture.detectChanges()).not.toThrow();
        expect(valueSpan(fixture)).not.toBeNull();
    });

    it('should keep the input visible and the placeholder hidden in single mode', () => {
        const fixture = createOnPushHost({
            config: singleConfig,
            theme: undefined,
            control: new FormControl<Date[]>(SINGLE_VALUE),
        });

        fixture.detectChanges();

        const input = pickerInput(fixture);
        expect(input.value).toBe('05.04.2018');
        expect(input.classList.contains('evo-datepicker__input_hidden')).toBeFalse();
        expect(emptyText(fixture)).toBeNull();
    });

    it('should show the range placeholder and no value for an empty control', () => {
        const fixture = createOnPushHost({control: new FormControl<Date[]>(null)});

        fixture.detectChanges();

        expect(valueSpan(fixture)).toBeNull();
        expect(emptyText(fixture).textContent.trim()).toBe('За период');
    });

    it('should show the single placeholder and hide the input for an empty control', () => {
        const fixture = createOnPushHost({
            config: singleConfig,
            theme: undefined,
            control: new FormControl<Date[]>(null),
        });

        fixture.detectChanges();

        expect(emptyText(fixture).textContent.trim()).toBe('Дата');
        expect(pickerInput(fixture).classList.contains('evo-datepicker__input_hidden')).toBeTrue();
    });

    it('should apply a [setDate] value bound at creation time', () => {
        const fixture = TestBed.createComponent(OnPushSetDateHostComponent);
        fixture.componentRef.setInput('dates', RANGE_VALUE);

        expect(() => fixture.detectChanges()).not.toThrow();
        expect(pickerInput(fixture).value).toContain('05.04.2018');
        expect(valueSpan(fixture)).not.toBeNull();
    });

    it('should apply a [setDate] value changed after initialization', () => {
        const fixture = TestBed.createComponent(OnPushSetDateHostComponent);
        fixture.detectChanges();

        fixture.componentRef.setInput('dates', RANGE_VALUE);
        fixture.detectChanges();

        expect(pickerInput(fixture).value).toContain('05.04.2018');
        expect(valueSpan(fixture)).not.toBeNull();
        expect(emptyText(fixture)).toBeNull();
    });

    // Программная запись значения в контрол не помечает OnPush-ветку грязной - её метит
    // прочитанный шаблоном сигнал displayValue, иначе заглушка остаётся поверх заполненного поля.
    it('should render a value set on the control from outside through an OnPush branch', () => {
        const fixture = TestBed.createComponent(DefaultRootHostComponent);
        const control = new FormControl<Date[]>(null);
        fixture.componentRef.setInput('control', control);
        fixture.detectChanges();
        expect(valueSpan(fixture)).toBeNull();

        control.setValue(RANGE_VALUE);
        fixture.detectChanges();

        expectRenderedValue(fixture);
        expect(emptyText(fixture)).toBeNull();
    });

    it('should hide the single placeholder when the control is set from outside through an OnPush branch', () => {
        const fixture = TestBed.createComponent(DefaultRootHostComponent);
        const control = new FormControl<Date[]>(null);
        fixture.componentRef.setInput('config', singleConfig);
        fixture.componentRef.setInput('theme', undefined);
        fixture.componentRef.setInput('control', control);
        fixture.detectChanges();
        expect(emptyText(fixture).textContent.trim()).toBe('Дата');

        control.setValue(SINGLE_VALUE);
        fixture.detectChanges();

        expect(emptyText(fixture)).toBeNull();
        expect(pickerInput(fixture).classList.contains('evo-datepicker__input_hidden')).toBeFalse();
    });

    it('should not distort the initial value with the input mask', () => {
        const fixture = createOnPushHost({
            config: maskedConfig,
            theme: undefined,
            maskedInput: true,
            control: new FormControl<Date[]>(SINGLE_VALUE),
        });

        fixture.detectChanges();

        expect(pickerInput(fixture).value).toBe('05.04.2018');
    });

    it('should keep the input readonly when config.allowInput is not set', () => {
        const fixture = createOnPushHost({
            config: singleConfig,
            theme: undefined,
            control: new FormControl<Date[]>(SINGLE_VALUE),
        });

        fixture.detectChanges();

        expect(pickerInput(fixture).readOnly).toBeTrue();
    });

    it('should keep the value after opening and closing the picker', () => {
        const fixture = createOnPushHost();
        fixture.detectChanges();
        const root: HTMLElement = fixture.nativeElement.querySelector('.evo-datepicker');

        root.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
        expect(valueSpan(fixture)).not.toBeNull();

        document.body.dispatchEvent(new MouseEvent('mousedown', {button: 0, bubbles: true}));
        fixture.detectChanges();

        expectRenderedValue(fixture);
    });
});

describe('EvoDatepickerComponent: lifecycle before the calendar exists', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({imports: [EvoDatepickerComponent]}).compileComponents();
    }));

    // Компонент, выброшенный до первой проверки вью, не доходит до ngAfterViewInit,
    // поэтому инстанса flatpickr к моменту ngOnDestroy ещё нет.
    it('should not throw when destroyed before the calendar is created', () => {
        const fixture = TestBed.createComponent(EvoDatepickerComponent);
        fixture.componentInstance.config = singleConfig;

        expect(() => fixture.componentInstance.ngOnDestroy()).not.toThrow();
    });
});
