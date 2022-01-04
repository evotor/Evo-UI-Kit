import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoControlErrorComponent} from './evo-control-error.component';
import {ChangeDetectionStrategy} from '@angular/core';

describe('EvoControlErrorComponent', () => {
    let component: EvoControlErrorComponent;
    let fixture: ComponentFixture<EvoControlErrorComponent>;
    const customErrorsCount = 10;
    const errorMessageSelector = '.evo-error';

    /**
     * @see evo-control-error.component.ts
     */
    const defaultErrorMessages = {
        required: 'Заполните поле',
        email: 'Неправильно указана почта',
        phone: 'Введите телефон',
    };

    beforeEach(waitForAsync(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    EvoControlErrorComponent,
                ],
            })
            .overrideComponent(EvoControlErrorComponent, {
                set: {changeDetection: ChangeDetectionStrategy.Default}
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed
            .createComponent(EvoControlErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show default error messages with default count (1)', () => {
        const messages = Object.assign({}, defaultErrorMessages);
        const errorKeys = Object.keys(messages);
        const errors = {};

        errorKeys.forEach((errorKey) => (errors[errorKey] = true));

        component.errors = errors;

        fixture.detectChanges();

        const errorElements = fixture.nativeElement.querySelectorAll(errorMessageSelector);
        expect(errorElements.length).toEqual(1);
        expect(errorElements[0].textContent).toEqual(defaultErrorMessages[errorKeys[0]]);
    });

    it(`should show default error messages with custom count (${ customErrorsCount })`, () => {
        const messages = Object.assign({}, defaultErrorMessages);
        const errorKeys = Object.keys(messages);
        const errors = {};

        errorKeys.forEach((errorKey) => (errors[errorKey] = true));

        component.errors = errors;
        component.showCount = customErrorsCount;

        fixture.detectChanges();

        const errorElements = fixture.nativeElement.querySelectorAll(errorMessageSelector);
        expect(errorElements.length).toEqual(errorKeys.length);
        errorKeys.forEach((errorKey, index) => {
            expect(errorElements[index].textContent).toEqual(defaultErrorMessages[errorKey]);
        });
    });

    it(`should override default messages and add one custom`, () => {
        const messages = Object.assign({}, defaultErrorMessages, {'custom': 'errormessage'});
        const errorKeys = Object.keys(messages);
        const errors = {};

        errorKeys.forEach((key) => messages[key] = defaultErrorMessages[key] + '_override');
        errorKeys.forEach((errorKey) => (errors[errorKey] = true));

        component.errorsMessages = messages;
        component.showCount = customErrorsCount;
        component.errors = errors;

        fixture.detectChanges();

        const errorElements = fixture.nativeElement.querySelectorAll(errorMessageSelector);

        expect(errorElements.length).toEqual(errorKeys.length);
        errorKeys.forEach((errorKey, index) => {
            expect(errorElements[index].textContent).toEqual(messages[errorKey]);
        });
    });

    it(`should omit empty messages`, () => {
        const messages = Object.assign({}, defaultErrorMessages, {'empty': ''});
        const errorKeys = Object.keys(messages);
        const errors = {};

        errorKeys.forEach((errorKey) => (errors[errorKey] = true));

        component.errorsMessages = messages;
        component.showCount = customErrorsCount;
        component.errors = errors;

        fixture.detectChanges();

        const errorElements = fixture.nativeElement.querySelectorAll(errorMessageSelector);

        expect(errorElements.length).toEqual(errorKeys.length - 1);

        errorKeys.forEach((errorKey, index) => {
            if (messages[errorKey]) {
                expect(errorElements[index].textContent).toEqual(messages[errorKey]);
            } else {
                expect(errorElements[index]).toEqual(undefined);
            }
        });
    });
});
