import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Russian} from 'flatpickr/dist/l10n/ru';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {EvoDatepickerComponent, FlatpickrOptions} from './evo-datepicker.component';

const RANGE_VALUE = [new Date(2018, 3, 5), new Date(2018, 3, 12)];
const SINGLE_VALUE = [new Date(2018, 3, 5)];

const rangeConfig: FlatpickrOptions = {locale: Russian, dateFormat: 'd.m.Y', mode: 'range'};
const singleConfig: FlatpickrOptions = {locale: Russian, dateFormat: 'd.m.Y'};
const maskedConfig: FlatpickrOptions = {locale: Russian, dateFormat: 'd.m.Y', allowInput: true};

@Component({
    selector: 'evo-onpush-range-host',
    template: `<evo-datepicker [config]="config" theme="range" [formControl]="control" />`,
    standalone: true,
    imports: [ReactiveFormsModule, EvoDatepickerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class OnPushRangeHostComponent {
    config = rangeConfig;
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
    selector: 'evo-onpush-single-host',
    template: `<evo-datepicker [config]="config" [formControl]="control" />`,
    standalone: true,
    imports: [ReactiveFormsModule, EvoDatepickerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class OnPushSingleHostComponent {
    config = singleConfig;
    @Input() control = new FormControl<Date[]>(SINGLE_VALUE);
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
        of(RANGE_VALUE)
            .pipe(delay(0))
            .subscribe((value) => {
                this.control.setValue(value);
                this.loaded = true;
                this.cdr.markForCheck();
            });
    }
}

@Component({
    selector: 'evo-onpush-branch',
    template: `<evo-datepicker [config]="config" [theme]="theme" [formControl]="control" />`,
    standalone: true,
    imports: [ReactiveFormsModule, EvoDatepickerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class OnPushBranchComponent {
    @Input() config: FlatpickrOptions;
    @Input() theme: string;
    @Input() control: FormControl<Date[]>;
}

// Боевая расстановка потребителя: обычный корень, между ним и датапикером - OnPush-компонент.
// Проход CD от корня в такую ветку не заходит, пока её кто-нибудь не пометит грязной.
@Component({
    selector: 'evo-default-root-host',
    template: `<evo-onpush-branch [config]="config" [theme]="theme" [control]="control" />`,
    standalone: true,
    imports: [OnPushBranchComponent],
})
class DefaultRootHostComponent {
    @Input() config = rangeConfig;
    @Input() theme = 'range';
    @Input() control = new FormControl<Date[]>(null);
}

@Component({
    selector: 'evo-onpush-masked-host',
    template: `<evo-datepicker [config]="config" [maskedInput]="true" [formControl]="control" />`,
    standalone: true,
    imports: [ReactiveFormsModule, EvoDatepickerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class OnPushMaskedHostComponent {
    config = maskedConfig;
    control = new FormControl<Date[]>(SINGLE_VALUE);
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

describe('EvoDatepickerComponent: первый рендер под OnPush-хостом', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                OnPushRangeHostComponent,
                DefaultRangeHostComponent,
                OnPushSingleHostComponent,
                OnPushAsyncHostComponent,
                OnPushSetDateHostComponent,
                OnPushMaskedHostComponent,
                DefaultRootHostComponent,
            ],
        }).compileComponents();
    }));

    // Значение из форм-контрола должно быть видно сразу, без единого события в поддереве.
    it('range: показывает значение форм-контрола после первого detectChanges', () => {
        const fixture = TestBed.createComponent(OnPushRangeHostComponent);

        fixture.detectChanges();

        const span = valueSpan(fixture);
        expect(span).not.toBeNull();
        expect(span.textContent.trim()).toBe(pickerInput(fixture).value);
        expect(span.textContent).toContain('05.04.2018');
        expect(emptyText(fixture)).toBeNull();
    });

    it('range: значение приходит асинхронно, поддерево создаётся внутри прохода CD', fakeAsync(() => {
        const fixture = TestBed.createComponent(OnPushAsyncHostComponent);
        fixture.detectChanges();

        fixture.componentInstance.load();
        tick();
        fixture.detectChanges();

        const span = valueSpan(fixture);
        expect(span).not.toBeNull();
        expect(span.textContent.trim()).toBe(pickerInput(fixture).value);
    }));

    // Под Default-хостом тот же дефект виден как NG0100: @if переключается уже после проверки вью.
    it('range: под обычным хостом первый detectChanges не бросает NG0100', () => {
        const fixture = TestBed.createComponent(DefaultRangeHostComponent);

        expect(() => fixture.detectChanges()).not.toThrow();
        expect(valueSpan(fixture)).not.toBeNull();
    });

    it('single: поле не скрыто и заглушка "Дата" не показана', () => {
        const fixture = TestBed.createComponent(OnPushSingleHostComponent);

        fixture.detectChanges();

        const input = pickerInput(fixture);
        expect(input.value).toBe('05.04.2018');
        expect(input.classList.contains('evo-datepicker__input_hidden')).toBeFalse();
        expect(emptyText(fixture)).toBeNull();
    });

    it('range: пустой контрол показывает "За период" и не рисует значение', () => {
        const fixture = TestBed.createComponent(OnPushRangeHostComponent);
        fixture.componentRef.setInput('control', new FormControl<Date[]>(null));

        fixture.detectChanges();

        expect(valueSpan(fixture)).toBeNull();
        expect(emptyText(fixture).textContent.trim()).toBe('За период');
    });

    it('single: пустой контрол показывает "Дата" и скрывает поле', () => {
        const fixture = TestBed.createComponent(OnPushSingleHostComponent);
        fixture.componentRef.setInput('control', new FormControl<Date[]>(null));

        fixture.detectChanges();

        expect(emptyText(fixture).textContent.trim()).toBe('Дата');
        expect(pickerInput(fixture).classList.contains('evo-datepicker__input_hidden')).toBeTrue();
    });

    it('[setDate]: значение задано на момент создания', () => {
        const fixture = TestBed.createComponent(OnPushSetDateHostComponent);
        fixture.componentRef.setInput('dates', RANGE_VALUE);

        expect(() => fixture.detectChanges()).not.toThrow();
        expect(pickerInput(fixture).value).toContain('05.04.2018');
        expect(valueSpan(fixture)).not.toBeNull();
    });

    it('[setDate]: значение меняется после инициализации', () => {
        const fixture = TestBed.createComponent(OnPushSetDateHostComponent);
        fixture.detectChanges();

        fixture.componentRef.setInput('dates', RANGE_VALUE);
        fixture.detectChanges();

        expect(pickerInput(fixture).value).toContain('05.04.2018');
        expect(valueSpan(fixture)).not.toBeNull();
        expect(emptyText(fixture)).toBeNull();
    });

    // Программная запись значения в контрол не помечает OnPush-ветку грязной,
    // поэтому пометить её должен сам компонент - иначе заглушка остаётся поверх заполненного поля.
    it('range: setValue из внешнего источника обновляет значение сквозь OnPush-ветку', () => {
        const fixture = TestBed.createComponent(DefaultRootHostComponent);
        const control = new FormControl<Date[]>(null);
        fixture.componentRef.setInput('control', control);
        fixture.detectChanges();
        expect(valueSpan(fixture)).toBeNull();

        control.setValue(RANGE_VALUE);
        fixture.detectChanges();

        const span = valueSpan(fixture);
        expect(span).not.toBeNull();
        expect(span.textContent.trim()).toBe(pickerInput(fixture).value);
        expect(emptyText(fixture)).toBeNull();
    });

    it('single: setValue из внешнего источника снимает заглушку "Дата" сквозь OnPush-ветку', () => {
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

    it('маска ввода не искажает начальное значение', () => {
        const fixture = TestBed.createComponent(OnPushMaskedHostComponent);

        fixture.detectChanges();

        expect(pickerInput(fixture).value).toBe('05.04.2018');
    });

    it('инпут остаётся readonly, когда config.allowInput не задан', () => {
        const fixture = TestBed.createComponent(OnPushSingleHostComponent);

        fixture.detectChanges();

        expect(pickerInput(fixture).readOnly).toBeTrue();
    });

    it('range: значение не пропадает после открытия и закрытия пикера', () => {
        const fixture = TestBed.createComponent(OnPushRangeHostComponent);
        fixture.detectChanges();
        const root: HTMLElement = fixture.nativeElement.querySelector('.evo-datepicker');

        root.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
        expect(valueSpan(fixture)).not.toBeNull();

        document.body.dispatchEvent(new MouseEvent('mousedown', {button: 0, bubbles: true}));
        fixture.detectChanges();

        const span = valueSpan(fixture);
        expect(span).not.toBeNull();
        expect(span.textContent.trim()).toBe(pickerInput(fixture).value);
    });
});
