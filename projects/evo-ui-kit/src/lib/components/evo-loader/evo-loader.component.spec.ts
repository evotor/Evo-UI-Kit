import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoLoaderComponent} from './index';
import {EvoUiClassDirective} from '../../directives/';

describe('EvoLoaderComponent', () => {
    let component: EvoLoaderComponent;
    let fixture: ComponentFixture<EvoLoaderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoLoaderComponent,
                EvoUiClassDirective,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
