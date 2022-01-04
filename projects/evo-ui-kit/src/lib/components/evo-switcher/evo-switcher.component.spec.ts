import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EvoSwitcherComponent} from './index';
import {EvoUiClassDirective} from '../../directives/';

describe('EvoSwitcherComponent', () => {
    let component: EvoSwitcherComponent;
    let fixture: ComponentFixture<EvoSwitcherComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoSwitcherComponent,
                EvoUiClassDirective,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
