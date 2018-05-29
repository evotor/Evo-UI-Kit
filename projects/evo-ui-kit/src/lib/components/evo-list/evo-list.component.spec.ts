import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoListComponent } from './evo-list.component';

describe('EvoListComponent', () => {
  let component: EvoListComponent;
  let fixture: ComponentFixture<EvoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
