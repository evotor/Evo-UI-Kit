import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoHeaderComponent } from './evo-header.component';

describe('EvoHeaderComponent', () => {
  let component: EvoHeaderComponent;
  let fixture: ComponentFixture<EvoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
