import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoRadioComponent } from 'evo-ui-kit';

describe('EvoRadioComponent', () => {
  let component: EvoRadioComponent;
  let fixture: ComponentFixture<EvoRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoRadioComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
