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
        if (this.ifExpandedService) {
            this.ifExpandedService.expanded = this.expanded;
        }
        this.updateView();
        this.handleExpandedChange();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.expanded && !changes.expanded.isFirstChange()) {
            const isExpanded = changes.expanded.currentValue;
            if (!this.ifExpandedService) {
                this.expandedChange.emit(isExpanded);
                this.updateView();
                return;
            }
            this.ifExpandedService.expanded = isExpanded;
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
            if (isExpanded !== this.expanded) {
                this.expanded = isExpanded;
                this.expandedChange.emit(isExpanded);
            }
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
