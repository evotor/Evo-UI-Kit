import { Component, Input, ContentChild, TemplateRef, OnChanges, SimpleChanges, Host } from '@angular/core';
import { EvoStepperEvent, EvoStepperEvents } from '../evo-stepper-events';

@Component({
    selector: 'evo-stepper-item',
    templateUrl: './evo-stepper-item.component.html',
    styleUrls: ['./evo-stepper-item.component.scss'],
})
export class EvoStepperItemComponent implements OnChanges {

    @Input() label: string;

    isSelected = false;

    @ContentChild(TemplateRef) contentTemp: TemplateRef<any>;

    constructor(
        @Host()
        private stepperEvents: EvoStepperEvents
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        const { firstChange } = changes.label;

        if (!firstChange) {
            this.stepperEvents.emit(EvoStepperEvent.LABEL_CHANGED);
        }
    }

}
