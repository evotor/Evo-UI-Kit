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
    ViewContainerRef,
} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {EvoExpandedService} from '../services/evo-expanded.service';

@Directive({
    selector: '[evoIsExpanded]',
})
export class EvoIsExpandedDirective implements OnInit, OnChanges, OnDestroy {
    @Input() evoIsExpanded: boolean;
    @Output() evoIsExpandedChange = new EventEmitter<boolean>(false);

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly templateRef: TemplateRef<object>,
        private readonly viewContainer: ViewContainerRef,
        @Optional() private readonly expandedService: EvoExpandedService,
    ) {}

    ngOnInit(): void {
        if (this.expandedService) {
            this.expandedService.isExpanded = this.evoIsExpanded;
        }
        this.updateView();
        this.handleExpandedChange();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.evoIsExpanded && !changes.evoIsExpanded.isFirstChange()) {
            const isExpanded = changes.evoIsExpanded.currentValue;
            if (!this.expandedService) {
                this.evoIsExpandedChange.emit(isExpanded);
                this.updateView();
                return;
            }
            this.expandedService.isExpanded = isExpanded;
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }

    handleExpandedChange(): void {
        this.expandedService?.isExpandedChange$.pipe(takeUntil(this.destroy$)).subscribe((isExpanded) => {
            if (isExpanded !== this.evoIsExpanded) {
                this.evoIsExpanded = isExpanded;
                this.evoIsExpandedChange.emit(isExpanded);
            }
            this.updateView();
        });
    }

    private updateView(): void {
        if (this.evoIsExpanded && this.viewContainer.length !== 0) {
            return;
        }
        if (this.evoIsExpanded) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
