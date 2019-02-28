import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoSwitcherItemComponent } from './evo-switcher-item.component';

describe('EvoSwitcherItemComponent', () => {
  let component: EvoSwitcherItemComponent;
  let fixture: ComponentFixture<EvoSwitcherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoSwitcherItemComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoSwitcherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
