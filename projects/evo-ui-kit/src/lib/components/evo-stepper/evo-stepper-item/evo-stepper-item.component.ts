import { Component, Input, ContentChild, TemplateRef, OnChanges, SimpleChanges, Host, OnInit } from '@angular/core';
import { EvoStepperComponent } from '../evo-stepper.component';

@Component({
  selector: 'evo-stepper-item',
  templateUrl: './evo-stepper-item.component.html',
  styleUrls: [ './evo-stepper-item.component.scss' ],
})
export class EvoStepperItemComponent implements OnInit, OnChanges {

  @Input() label: string;

  isSelected = false;

  @ContentChild(TemplateRef) contentTemp: TemplateRef<any>;

  constructor(
      @Host()
      private stepper: EvoStepperComponent
  ) {}

  ngOnInit() {
      if (!this.stepper) {
          throw new Error('You should use EvoStepperItem only inside EvoStepper!');
      }
  }

  ngOnChanges(changes: SimpleChanges) {
      const { firstChange } = changes.label;

      if (!firstChange) {
          this.stepper.getStepsList();
      }
  }

}
