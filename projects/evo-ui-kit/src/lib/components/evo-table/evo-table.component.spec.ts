import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoTableComponent } from './evo-table.component';

describe('EvoTableComponent', () => {
  let component: EvoTableComponent;
  let fixture: ComponentFixture<EvoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
