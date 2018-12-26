import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoInputComponent } from './evo-input.component';
import { EvoUiClassDirective } from '../../directives/evo-ui-class.directive';
import { NgModel } from '@angular/forms';
import { MaskedInputDirective } from 'angular2-text-mask';
import { EvoControlErrorComponent } from '../evo-control-error/evo-control-error.component';

describe('EvoInputComponent', () => {
    let component: EvoInputComponent;
    let fixture: ComponentFixture<EvoInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoInputComponent,
                EvoUiClassDirective,
                NgModel,
                MaskedInputDirective,
                EvoControlErrorComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain tooltip question mark', () => {
        component.tooltip = 'evotor';
        fixture.detectChanges();

        const questionMark = fixture.nativeElement.querySelector('.evo-input__tooltip');

        expect(questionMark).toBeTruthy();
    });

    it('should show tooltip container with given value on hover', () => {
        component.tooltip = 'evotor';
        fixture.detectChanges();

        const questionMark = fixture.nativeElement.querySelector('.evo-input__tooltip');

        questionMark.dispatchEvent(new MouseEvent('mouseover'));
        fixture.detectChanges();

        const tooltipContainer = fixture.nativeElement.querySelector('.evo-input__tooltip-container');

        expect(tooltipContainer).toBeTruthy();
        expect(tooltipContainer.textContent).toBe('evotor');
    });

    it('should represent prefix on view', () => {
        component.prefix = 'evo-';
        fixture.detectChanges();

        const prefix: HTMLElement = fixture.nativeElement.querySelector('.evo-input__prefix');

        expect(prefix.textContent).toBe('evo-');
    });

    it('should add prefix after input', () => {
        spyOn(component, 'onChange');
        component.prefix = 'evo';
        component.writeValue('tor');
        fixture.detectChanges();

        expect(component.onChange).toHaveBeenCalledWith('evotor');
    });
});
