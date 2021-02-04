import {
    Directive,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EvoIfExpandedService } from '../services/evo-if-expanded.service';

@Directive({
    selector: '[evoIfExpanded]'
})
export class EvoIfExpandedDirective implements OnInit, OnChanges, OnDestroy {
    @Input('evoIfExpanded') expanded: boolean;
    @Output('evoIfExpandedChange') expandedChange = new EventEmitter<boolean>(false);

    private destroy$ = new Subject<void>();

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        @Optional() private ifExpandedService: EvoIfExpandedService
    ) { }
    
    ngOnInit(): void {
        this.updateView();
        this.handleExpandedChange();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.ifExpandedService && changes.expanded) {
            this.updateView();
        }
    }

    ngOnDestroy(): void {
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }

    handleExpandedChange() {
        this.ifExpandedService?.expandedChange$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(isExpanded => {
            this.expanded = isExpanded;
            this.expandedChange.emit(isExpanded);
            this.updateView();
        })
    }

    private updateView(): void {
        if (this.expanded && this.viewContainer.length !== 0) {
            return;
        }
        if (this.expanded) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
