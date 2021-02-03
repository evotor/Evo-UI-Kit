import {
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    Renderer2,
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
        @Optional() private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private elementRef: ElementRef,
        private renderer: Renderer2,
        @Optional() private ifExpandedService: EvoIfExpandedService
    ) { }
    
    ngOnInit(): void {
        this.updateView();
        this.ifExpandedService?.expandedChange$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(isExpanded => {
            this.expanded = isExpanded;
            this.expandedChange.emit(isExpanded);
            this.updateView();
        })
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.ifExpandedService && changes.expanded) {
            console.log(changes);
            this.updateView();
        }
    }

    ngOnDestroy(): void {
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }

    private updateView(): void {
        if (this.expanded && this.viewContainer.length !== 0) {
            return;
        }
        if (this.templateRef) {
            if (this.expanded) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        } else {
            if (this.expanded) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', null);
              } else {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
              }
        }
    }
}
