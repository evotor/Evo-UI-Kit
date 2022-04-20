import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoInputContenteditableComponent } from './evo-input-contenteditable.component';

describe('EvoInputContenteditableComponent', () => {
  let component: EvoInputContenteditableComponent;
  let fixture: ComponentFixture<EvoInputContenteditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoInputContenteditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoInputContenteditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
