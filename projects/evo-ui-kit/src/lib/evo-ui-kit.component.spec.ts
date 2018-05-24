import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoUiKitComponent } from './evo-ui-kit.component';

describe('EvoUiKitComponent', () => {
  let component: EvoUiKitComponent;
  let fixture: ComponentFixture<EvoUiKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoUiKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoUiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
