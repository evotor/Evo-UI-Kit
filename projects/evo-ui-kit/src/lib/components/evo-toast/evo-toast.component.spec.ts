import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoToastComponent } from './evo-toast.component';

describe('EvoToastComponent', () => {
  let component: EvoToastComponent;
  let fixture: ComponentFixture<EvoToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoToastComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
