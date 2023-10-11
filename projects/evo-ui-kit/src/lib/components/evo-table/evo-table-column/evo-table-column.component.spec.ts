import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoTableColumnComponent } from '../index';

describe('EvoTableColumnComponent', () => {
    let component: EvoTableColumnComponent;
    let fixture: ComponentFixture<EvoTableColumnComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoTableColumnComponent,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoTableColumnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
