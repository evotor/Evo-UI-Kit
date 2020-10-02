import { EvoDatepickerComponent, FlatpickrOptions } from './evo-datepicker.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Russian } from 'flatpickr/dist/l10n/ru';
import { EvoControlErrorComponent } from '../evo-control-error';
import { IMaskModule } from 'angular-imask';
import { EvoUiClassDirective } from '../../directives';

describe('EvoDatepickerComponent', () => {
    let component: EvoDatepickerComponent;
    let fixture: ComponentFixture<EvoDatepickerComponent>;
    let datepickerEl: HTMLElement;

    const datepickerOptions: FlatpickrOptions = {
        locale: Russian,
        defaultDate: new Date(2018, 3, 1),
        dateFormat: 'd.m.Y',
        maxDate: '05.09.2018',
        time_24hr: true,
    };

    function openDatepicker() {
        datepickerEl.dispatchEvent(new MouseEvent('click'));
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                IMaskModule,
            ],
            declarations: [
                EvoDatepickerComponent,
                EvoControlErrorComponent,
                EvoUiClassDirective,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoDatepickerComponent);
        component = fixture.componentInstance;
        component.config = datepickerOptions;
        fixture.detectChanges();
        datepickerEl = fixture.nativeElement.querySelector('.evo-datepicker');
    });

    it('should have value equal to defaultDate', () => {
        expect(fixture.nativeElement.querySelector('.evo-datepicker__input').value === '01.04.2018').toBeTruthy();
    });

    it('should open datepicker on input click', () => {
        expect(document.querySelector('.flatpickr-calendar').classList.contains('open')).toBeFalsy();
        openDatepicker();
        expect(document.querySelector('.flatpickr-calendar').classList.contains('open')).toBeTruthy();
    });

    it('should close datepicker on outside element click', () => {
        openDatepicker();
        expect(document.querySelector('.flatpickr-calendar').classList.contains('open')).toBeTruthy();
        document.body.dispatchEvent(new MouseEvent('mousedown', {
            button: 0,
            bubbles: true,
        }));
        expect(document.querySelector('.flatpickr-calendar').classList.contains('open')).toBeFalsy();
    });
});
