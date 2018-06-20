import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoSidebarWrapperComponent } from './evo-sidebar-wrapper.component';

describe('EvoSidebarWrapperComponent', () => {
  let component: EvoSidebarWrapperComponent;
  let fixture: ComponentFixture<EvoSidebarWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoSidebarWrapperComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoSidebarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
