import { Component, Input, AfterContentChecked, QueryList, ContentChildren,
  SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { EvoStepperItemComponent } from './evo-stepper-item/evo-stepper-item.component';

@Component({
  selector: 'evo-stepper',
  templateUrl: './evo-stepper.component.html',
  styleUrls: [ './evo-stepper.component.scss' ],
})
export class EvoStepperComponent implements AfterContentChecked, OnChanges {
  isInited = false;

  stepsList: { label: string }[];

  @ContentChildren(EvoStepperItemComponent) stepComponentsList: QueryList<any>;

  @Input() currentStepIndex = 0;

  @Output() onChange: EventEmitter<number> = new EventEmitter();

  ngAfterContentChecked() {
      if (!this.isInited) {
          this.stepsList = this.stepComponentsList.map((step: EvoStepperItemComponent, i: number) => {
              if (this.currentStepIndex === i) {
                  step.isSelected = true;
              }
              return { label: step.label };
          });
          this.isInited = true;
      }
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (this.stepComponentsList) {
          const index = changes.currentStepIndex.currentValue;
          this.changeCurrentStep(index);
      }
  }

  changeCurrentStep(index: number): void {
      this.stepComponentsList.forEach((step, i) => {
          if (step.isSelected && i !== index) {
              step.isSelected = false;
          }
          if (index === i) {
              step.isSelected = true;
          }
      });
      this.currentStepIndex = index;
      this.onChange.emit(index);
  }
}
