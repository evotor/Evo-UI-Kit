import {
    Component, Input, QueryList, ContentChildren,
    SimpleChanges, OnChanges, Output, EventEmitter, AfterViewInit, OnDestroy,
} from '@angular/core';
import { EvoStepperItemComponent } from './evo-stepper-item/evo-stepper-item.component';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'evo-stepper',
    templateUrl: './evo-stepper.component.html',
    styleUrls: [ './evo-stepper.component.scss' ],
})
export class EvoStepperComponent implements AfterViewInit, OnChanges, OnDestroy {

    stepsList: { label: string }[];

    @ContentChildren(EvoStepperItemComponent) stepComponentsList: QueryList<any>;

    @Input() currentStepIndex = 0;

    @Input() clickableItems = false;

    @Output() onChange = new EventEmitter<number>();

    @Output() clickItem  = new EventEmitter<number>();

    private subscription: Subscription;

    ngAfterViewInit(): void {
        setTimeout(() => this.getStepsList());
        this.subscription = this.stepComponentsList.changes.pipe(
            tap(() => this.getStepsList())
        ).subscribe();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.stepComponentsList) {
            const index = changes.currentStepIndex.currentValue;
            this.changeCurrentStep(index);
        }
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getStepsList(): void {
        this.stepsList = this.stepComponentsList.map((step: EvoStepperItemComponent, i: number) => ({ label: step.label }));
        const currentStepComponents = this.stepComponentsList.find((stepComponent, i) => i === this.currentStepIndex);
        currentStepComponents.isSelected = true;
    }

    changeCurrentStep(index: number): void {
        this.stepComponentsList.forEach((step, i) => step.isSelected = (index === i) );
        this.currentStepIndex = index;
        this.onChange.emit(index);
    }

    handleItemClick(index: number): void {
        if (this.clickableItems) {
            this.clickItem.emit(index);
        }
    }
}
