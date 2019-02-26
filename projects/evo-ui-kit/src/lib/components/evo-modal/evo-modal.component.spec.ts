import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoModalComponent } from './evo-modal.component';

describe('EvoModalComponent', () => {
  let component: EvoModalComponent;
  let fixture: ComponentFixture<EvoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoModalComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
