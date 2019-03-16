/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EvoStepperComponent } from './evo-stepper.component';

describe('EvoStepperComponent', () => {
  let component: EvoStepperComponent;
  let fixture: ComponentFixture<EvoStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoStepperComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
