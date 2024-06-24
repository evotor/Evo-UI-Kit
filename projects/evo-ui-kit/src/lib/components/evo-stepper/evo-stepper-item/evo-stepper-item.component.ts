import {Component, ContentChild, Host, Input, OnChanges, SimpleChanges, TemplateRef} from '@angular/core';
import {EvoStepperEvent, EvoStepperEvents} from '../evo-stepper-events';
import {NgTemplateOutlet} from '@angular/common';

@Component({
    selector: 'evo-stepper-item',
    templateUrl: './evo-stepper-item.component.html',
    styleUrls: ['./evo-stepper-item.component.scss'],
    standalone: true,
    imports: [NgTemplateOutlet],
})
export class EvoStepperItemComponent implements OnChanges {
    @Input() label: string;

    isSelected = false;

    // eslint-disable-next-line
    @ContentChild(TemplateRef) contentTemp: TemplateRef<any>;

    constructor(
        @Host()
        private readonly stepperEvents: EvoStepperEvents,
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        const {firstChange} = changes.label;

        if (!firstChange) {
            this.stepperEvents.emit(EvoStepperEvent.LABEL_CHANGED);
        }
    }
}
