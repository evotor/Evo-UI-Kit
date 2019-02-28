import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoSubmenuComponent } from './evo-submenu.component';

describe('EvoSubmenuComponent', () => {
  let component: EvoSubmenuComponent;
  let fixture: ComponentFixture<EvoSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoSubmenuComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
