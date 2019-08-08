import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'evo-stepper-item',
  templateUrl: './evo-stepper-item.component.html',
  styleUrls: [ './evo-stepper-item.component.scss' ],
})
export class EvoStepperItemComponent {

  @Input() label: string;

  isSelected = false;

  @ContentChild(TemplateRef, {static: false}) contentTemp: TemplateRef<any>;

}
