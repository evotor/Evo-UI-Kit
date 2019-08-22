import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoPlusMinusComponent } from './index';

describe('EvoPlusMinusComponent', () => {
    let component: EvoPlusMinusComponent;
    let fixture: ComponentFixture<EvoPlusMinusComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EvoPlusMinusComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoPlusMinusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
