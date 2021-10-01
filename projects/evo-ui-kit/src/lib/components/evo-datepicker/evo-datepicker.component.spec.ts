import { EvoDatepickerComponent, FlatpickrOptions } from './evo-datepicker.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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

    it('locale should be undefined if config is null', () => {
        component.config = null;
        expect(component.getConfig()['locale']).toBeFalsy();
    });

    it('should have locale if config is provided', () => {
        expect(component.getConfig()['locale']).toBeDefined();
    });

    it('onChange should be defined after initialization', () => {
        component.ngAfterViewInit();
        expect(component.getDefaultFlatpickrOptions()['onChange']).toBeDefined();
    });

    it('should return defaultOptions', () => {
        expect(component.getDefaultFlatpickrOptions()).toBeDefined();
    });

    it('default options should contain appendTo if appendToBody not provided', () => {
        expect(component.getDefaultFlatpickrOptions()['appendTo']).toBeDefined();
    });

    it('default options should not contain appendTo if appendToBody is false', () => {
        component.appendToBody = false;
        fixture.detectChanges();
        expect(component.getDefaultFlatpickrOptions()['appendTo']).toBeFalsy();
    });

    it('default options should not contain appendTo if appendToBody is true', () => {
        component.appendToBody = true;
        fixture.detectChanges();
        expect(component.getDefaultFlatpickrOptions()['appendTo']).toBeTruthy();
    });
});
