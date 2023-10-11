import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoSwitcherComponent } from './index';
import { EvoUiClassDirective } from '../../directives/';

describe('EvoSwitcherComponent', () => {
    let component: EvoSwitcherComponent;
    let fixture: ComponentFixture<EvoSwitcherComponent>;

    beforeEach(async(() => {
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
