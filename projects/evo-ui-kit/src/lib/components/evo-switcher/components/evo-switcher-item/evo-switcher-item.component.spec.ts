import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EvoSwitcherItemComponent} from '../../index';

describe('EvoSwitcherItemComponent', () => {
    let component: EvoSwitcherItemComponent;
    let fixture: ComponentFixture<EvoSwitcherItemComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoSwitcherItemComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoSwitcherItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
