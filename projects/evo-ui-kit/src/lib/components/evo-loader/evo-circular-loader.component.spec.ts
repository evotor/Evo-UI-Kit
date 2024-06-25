import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoCircularLoaderComponent} from './index';
import {EvoUiClassDirective} from '../../directives/';

describe('EvoCircularLoaderComponent', () => {
    let component: EvoCircularLoaderComponent;
    let fixture: ComponentFixture<EvoCircularLoaderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [EvoCircularLoaderComponent, EvoUiClassDirective],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoCircularLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
