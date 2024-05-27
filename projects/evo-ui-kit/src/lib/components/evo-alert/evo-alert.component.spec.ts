import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoAlertComponent, EvoAlertDefaultIcons, EvoAlertSizes, EvoAlertTypes} from './index';
import {EvoUiKitModule} from '../../evo-ui-kit.module';

describe('EvoAlertComponent', () => {
    let component: EvoAlertComponent;
    let fixture: ComponentFixture<EvoAlertComponent>;
    let evoAlertEl: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [EvoUiKitModule],
                declarations: [EvoAlertComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoAlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        evoAlertEl = fixture.nativeElement.querySelector('.evo-alert');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show closing cross element when component input "closable" = true', () => {
        expect(fixture.nativeElement.querySelector('.evo-alert__close')).toBeFalsy();
        component.closable = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-alert__close')).toBeTruthy();
    });

    it('should emit close event when clicking on cross element', () => {
        component.closable = true;
        fixture.detectChanges();
        spyOn(component.close, 'emit');

        const closingCrossEl = fixture.nativeElement.querySelector('.evo-alert__close');
        closingCrossEl.dispatchEvent(new MouseEvent('click'));
        expect(component.close.emit).toHaveBeenCalled();
    });

    it('Should apply exact css styles when defining component input "type"', () => {
        component.type = EvoAlertTypes.success;
        fixture.detectChanges();
        expect(evoAlertEl.classList.contains('evo-alert_success')).toBeTruthy();
        expect(evoAlertEl.classList.contains('evo-alert_danger')).toBeFalsy();
        expect(evoAlertEl.classList.contains('evo-alert_warning')).toBeFalsy();

        component.type = EvoAlertTypes.danger;
        fixture.detectChanges();
        expect(evoAlertEl.classList.contains('evo-alert_danger')).toBeTruthy();
        expect(evoAlertEl.classList.contains('evo-alert_success')).toBeFalsy();
        expect(evoAlertEl.classList.contains('evo-alert_warning')).toBeFalsy();

        component.type = EvoAlertTypes.warning;
        fixture.detectChanges();
        expect(evoAlertEl.classList.contains('evo-alert_warning')).toBeTruthy();
        expect(evoAlertEl.classList.contains('evo-alert_danger')).toBeFalsy();
        expect(evoAlertEl.classList.contains('evo-alert_success')).toBeFalsy();
    });

    it('should apply exact size when defining component input "size"', () => {
        expect(evoAlertEl.classList.contains('evo-alert_normal')).toBeTruthy();

        component.size = EvoAlertSizes.large;
        fixture.detectChanges();
        expect(evoAlertEl.classList.contains('evo-alert_large')).toBeTruthy();
        expect(evoAlertEl.classList.contains('evo-alert_normal')).toBeFalsy();
    });

    it('should display default icon when defining component input "icon"', () => {
        expect(fixture.nativeElement.querySelector('.evo-alert__icon')).toBeFalsy();

        component.icon = EvoAlertDefaultIcons.exclamation;
        fixture.detectChanges();
        const evoAlertIconEl = fixture.nativeElement.querySelector('.evo-alert__icon');
        expect(evoAlertIconEl).toBeTruthy();
        expect(evoAlertIconEl.classList.contains('evo-alert__icon_exclamation')).toBeTruthy();
        expect(evoAlertIconEl.classList.contains('evo-alert__icon_success')).toBeFalsy();

        component.icon = EvoAlertDefaultIcons.success;
        fixture.detectChanges();
        expect(evoAlertIconEl).toBeTruthy();
        expect(evoAlertIconEl.classList.contains('evo-alert__icon_success')).toBeTruthy();
        expect(evoAlertIconEl.classList.contains('evo-alert__icon_exclamation')).toBeFalsy();
    });

    it('should display custom icon when defining component input "iconSrc"', () => {
        expect(fixture.nativeElement.querySelector('.evo-alert__icon')).toBeFalsy();
        const iconSrc = 'something.svg';
        component.iconSrc = iconSrc;
        fixture.detectChanges();
        const evoAlertIconEl = fixture.nativeElement.querySelector('.evo-alert__icon');
        expect(evoAlertIconEl).toBeTruthy();
        const evoAlertIconImgEl = evoAlertIconEl.querySelector('img');
        expect(evoAlertIconImgEl).toBeTruthy();
        expect(evoAlertIconImgEl.src).toContain(iconSrc);
    });
});
