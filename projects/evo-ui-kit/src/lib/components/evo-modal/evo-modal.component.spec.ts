import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoModalComponent } from './evo-modal.component';
import { EvoButtonComponent, EvoUiClassDirective, EvoModalService } from '../../evo-ui-kit.module';

describe('EvoModalComponent', () => {
  let component: EvoModalComponent;
  let fixture: ComponentFixture<EvoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ EvoModalComponent, EvoButtonComponent, EvoUiClassDirective ],
        providers: [ EvoModalService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
