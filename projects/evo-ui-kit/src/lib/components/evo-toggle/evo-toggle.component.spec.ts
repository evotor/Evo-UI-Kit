import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoToggleComponent } from './evo-toggle.component';

describe('EvoToggleComponent', () => {
  let component: EvoToggleComponent;
  let fixture: ComponentFixture<EvoToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoToggleComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
