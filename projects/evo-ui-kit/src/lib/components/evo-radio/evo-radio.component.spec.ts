import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EvoRadioComponent} from './index';

describe('EvoRadioComponent', () => {
    let component: EvoRadioComponent;
    let fixture: ComponentFixture<EvoRadioComponent>;

    beforeEach(waitForAsync(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    EvoRadioComponent,
                ],
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoRadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
