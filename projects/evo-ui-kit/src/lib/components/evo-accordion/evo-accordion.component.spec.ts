import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoAccordionComponent } from './index';

describe('EvoAccordionComponent', () => {
    let component: EvoAccordionComponent;
    let fixture: ComponentFixture<EvoAccordionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoAccordionComponent,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoAccordionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
