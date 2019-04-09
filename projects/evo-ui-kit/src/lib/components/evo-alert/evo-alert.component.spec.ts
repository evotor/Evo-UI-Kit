import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoAlertComponent } from './evo-alert.component';
import { EvoUiClassDirective } from '../../evo-ui-kit.module';

describe('EvoTextareaComponent', () => {
    let component: EvoAlertComponent;
    let fixture: ComponentFixture<EvoAlertComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                EvoAlertComponent,
                EvoUiClassDirective,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoAlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit close event when clicking on cross element', () => {
        const closingCrossEl = fixture.nativeElement.querySelector('.evo-alert__close');
        closingCrossEl.dispatchEvent(new MouseEvent('click'));

    });
});
