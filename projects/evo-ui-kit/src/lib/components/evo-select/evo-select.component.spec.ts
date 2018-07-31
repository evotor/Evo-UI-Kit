import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoSelectComponent } from './evo-select.component';

describe('EvoSelectComponent', () => {
  let component: EvoSelectComponent;
  let fixture: ComponentFixture<EvoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoSelectComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
