import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoCardComponent } from './evo-card.component';

describe('EvoCardComponent', () => {
  let component: EvoCardComponent;
  let fixture: ComponentFixture<EvoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
