import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'evo-stepper-item',
  templateUrl: './evo-stepper-item.component.html',
  styleUrls: [ './evo-stepper-item.component.scss' ],
})
export class EvoStepperItemComponent implements OnInit {

  @Input() label: string;

  isSelected: boolean;

  @ContentChild(TemplateRef) contentTemp: TemplateRef<any>;

  ngOnInit() {
    if (!this.isSelected) {
      this.isSelected = false;
    }
  }

}
