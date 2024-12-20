import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    QueryList,
    SimpleChanges,
} from '@angular/core';
import {EvoStepperItemComponent} from './evo-stepper-item/evo-stepper-item.component';
import {map} from 'rxjs/operators';
import {asyncScheduler, concat, merge, Observable, of, scheduled} from 'rxjs';
import {EvoStepperEvent, EvoStepperEvents} from './evo-stepper-events';
import {AsyncPipe} from '@angular/common';
import {EvoUiClassDirective} from '../../directives/evo-ui-class.directive';

@Component({
    selector: 'evo-stepper',
    templateUrl: './evo-stepper.component.html',
    styleUrls: ['./evo-stepper.component.scss'],
    providers: [EvoStepperEvents],
    standalone: true,
    imports: [EvoUiClassDirective, AsyncPipe],
})
export class EvoStepperComponent implements AfterViewInit, OnChanges {
    stepsList$: Observable<{label: string}[]>;

    @ContentChildren(EvoStepperItemComponent) stepComponentsList: QueryList<EvoStepperItemComponent>;

    @Input() currentStepIndex = 0;

    @Input() clickableItems = false;

    @Output() onChange = new EventEmitter<number>();

    @Output() clickItem = new EventEmitter<number>();

    constructor(
        private readonly cd: ChangeDetectorRef,
        private readonly stepperEvents: EvoStepperEvents,
    ) {}

    ngAfterViewInit() {
        this.stepsList$ = concat(
            scheduled(of(null), asyncScheduler),
            merge(this.stepComponentsList.changes, this.stepperEvents.getEvents(EvoStepperEvent.LABEL_CHANGED)),
        ).pipe(map(() => this.getStepsList()));
        this.cd.detectChanges();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.stepComponentsList && changes.currentStepIndex !== undefined) {
            const index = changes.currentStepIndex.currentValue;
            this.changeCurrentStep(index);
        }
    }

    getStepsList() {
        const currentStepComponent = this.stepComponentsList.find((stepComponent, i) => i === this.currentStepIndex);
        currentStepComponent.isSelected = true;
        return this.stepComponentsList.map(({label}) => ({label}));
    }

    changeCurrentStep(index: number) {
        this.stepComponentsList.forEach((step, i) => (step.isSelected = index === i));
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
