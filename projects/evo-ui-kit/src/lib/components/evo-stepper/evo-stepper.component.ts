import {
    Component, Input, QueryList, ContentChildren,
    SimpleChanges, OnChanges, Output, EventEmitter, AfterViewInit, OnDestroy, ChangeDetectorRef,
} from '@angular/core';
import { EvoStepperItemComponent } from './evo-stepper-item/evo-stepper-item.component';
import { takeUntil, tap } from 'rxjs/operators';
import { concat, asyncScheduler, of, scheduled, Subject, merge } from 'rxjs';
import { EvoStepperEvent, EvoStepperEvents } from './evo-stepper-events';

@Component({
    selector: 'evo-stepper',
    templateUrl: './evo-stepper.component.html',
    styleUrls: [ './evo-stepper.component.scss' ],
    providers: [
        EvoStepperEvents,
    ]
})
export class EvoStepperComponent implements AfterViewInit, OnChanges, OnDestroy {

    stepsList: { label: string }[];

    @ContentChildren(EvoStepperItemComponent) stepComponentsList: QueryList<any>;

    @Input() currentStepIndex = 0;

    @Input() clickableItems = false;

    @Output() onChange = new EventEmitter<number>();

    @Output() clickItem  = new EventEmitter<number>();

    private subscriptions$ = new Subject();

    constructor(
        private cd: ChangeDetectorRef,
        private stepperEvents: EvoStepperEvents,
    ) {}

    ngAfterViewInit() {
        concat(
            scheduled(of(null), asyncScheduler),
            merge(
                this.stepComponentsList.changes,
                this.stepperEvents.getEvents(EvoStepperEvent.LABEL_CHANGED)
            )
        ).pipe(
            tap(() => this.getStepsList()),
            takeUntil(this.subscriptions$),
        ).subscribe();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.stepComponentsList && changes.currentStepIndex !== undefined) {
            const index = changes.currentStepIndex.currentValue;
            this.changeCurrentStep(index);
        }
    }

    ngOnDestroy() {
        this.subscriptions$.next();
        this.subscriptions$.complete();
    }

    getStepsList() {
        this.stepsList = this.stepComponentsList.map((step: EvoStepperItemComponent, i: number) => ({ label: step.label }));
        const currentStepComponents = this.stepComponentsList.find((stepComponent, i) => i === this.currentStepIndex);
        currentStepComponents.isSelected = true;
        this.cd.markForCheck();
    }

    changeCurrentStep(index: number) {
        this.stepComponentsList.forEach((step, i) => step.isSelected = (index === i));
        this.currentStepIndex = index;
        this.onChange.emit(index);
        this.cd.markForCheck();
    }

    handleItemClick(index: number) {
        if (this.clickableItems) {
            this.clickItem.emit(index);
        }
    }
}
