import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoTextareaComponent} from './index';
import {FormControl, FormsModule} from '@angular/forms';
import {EvoUiClassDirective} from '../../directives/';
import {EvoControlErrorComponent} from '../evo-control-error';

describe('EvoTextareaComponent', () => {
    let component: EvoTextareaComponent;
    let fixture: ComponentFixture<EvoTextareaComponent>;
    let textareaEl: HTMLTextAreaElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [
                EvoTextareaComponent,
                EvoUiClassDirective,
                EvoControlErrorComponent,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoTextareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        textareaEl = fixture.nativeElement.querySelector('.evo-textarea');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be disabled when input disabled = true', () => {
        component.disabled = true;
        fixture.detectChanges();
        expect(textareaEl.classList.contains('evo-textarea_disabled')).toBeTruthy();
    });

    it('should show input placeholder in textarea element placeholder', () => {
        const placeholderText = 'Please type all that you think';
        component.placeholder = placeholderText;
        fixture.detectChanges();
        expect(textareaEl.placeholder).toBe(placeholderText);
    });

    it('should change component focused param to true when focusing textarea', () => {
        expect(component.focused).toBeFalsy();
        textareaEl.dispatchEvent(new FocusEvent('focus'));
        fixture.detectChanges();
        expect(component.focused).toBeTruthy();
        expect(textareaEl.classList.contains('evo-textarea_focused')).toBeTruthy();
    });

    it('should change component focused param to false when bluring textarea', () => {
        component.focused = true;
        textareaEl.dispatchEvent(new FocusEvent('blur'));
        fixture.detectChanges();
        expect(component.focused).toBeFalsy();
        expect(textareaEl.classList.contains('evo-textarea_focused')).toBeFalsy();
    });

    it('should display error when error exists', () => {
        expect(fixture.nativeElement.querySelector('evo-control-error')).toBeFalsy();

        const errorText = 'Error!';
        component.errorsMessages = {required: errorText};
        component.control = new FormControl('');
        component.control.setErrors({required: errorText});
        component.control.markAsTouched();
        component.control.markAsDirty();
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.evo-error').textContent).toEqual(errorText);
    });

    it('should has specified height in rows', () => {
        const rows = 5;
        component.rows = rows;
        fixture.detectChanges();
        expect(textareaEl.rows).toEqual(5);
    });
});
