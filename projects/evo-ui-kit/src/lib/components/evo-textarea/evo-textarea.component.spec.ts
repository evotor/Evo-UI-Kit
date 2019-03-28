import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoTextareaComponent } from './evo-textarea.component';
import { EvoControlErrorComponent, EvoUiClassDirective } from '../../evo-ui-kit.module';
import { FormsModule } from '@angular/forms';

describe('EvoTextareaComponent', () => {
  let component: EvoTextareaComponent;
  let fixture: ComponentFixture<EvoTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule ],
        declarations: [
          EvoTextareaComponent,
          EvoUiClassDirective,
          EvoControlErrorComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
