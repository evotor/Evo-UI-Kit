import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoTabsComponent } from './evo-tabs.component';

describe('EvoTabsComponent', () => {
  let component: EvoTabsComponent;
  let fixture: ComponentFixture<EvoTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoTabsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
