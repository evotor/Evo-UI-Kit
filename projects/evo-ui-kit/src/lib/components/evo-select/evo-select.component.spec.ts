import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoSelectComponent } from './evo-select.component';
import { EvoUiClassDirective } from '../../evo-ui-kit.module';
import { FormsModule } from '@angular/forms';
import { ViewChild, Component } from '@angular/core';

@Component({
  selector: 'evo-host-component',
  template: `
  <evo-select [style]="'inline'">
    <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
  </evo-select>`,
})
class TestHostComponent {
  options = [
    { label: 'Все сотрудники', value: 'all' },
    { label: 'Илья Лыткин', value: 'i.lytkin' },
    { label: 'Кристина Михайлова', value: 'k.mykhaylova' },
    { label: 'Аааааааааааааааааааааааа', value: 'panic' },
  ];
  @ViewChild(EvoSelectComponent)
  public selectComponent: EvoSelectComponent;
}

describe('EvoSelectComponent', () => {
  let testHostComponent: EvoSelectComponent;
  let testHostFixture: ComponentFixture<EvoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EvoSelectComponent, EvoUiClassDirective ],
    }).compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(EvoSelectComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });
});
