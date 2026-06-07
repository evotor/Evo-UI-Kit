import {ComponentRef, ElementRef, Injectable, Injector, OnDestroy, TemplateRef} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {
    FlexibleConnectedPositionStrategy,
    Overlay,
    OverlayPositionBuilder,
    OverlayRef,
    ScrollStrategy,
} from '@angular/cdk/overlay';
import {BehaviorSubject, EMPTY, merge, Observable, Subject} from 'rxjs';
import {filter, take, takeUntil, tap} from 'rxjs/operators';
import {EvoTooltipComponent} from '../evo-tooltip.component';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';
import {getTooltipConnectedPositions} from '../utils/get-tooltip-connected-positions';
import {EvoScrollStrategy, EvoScrollStrategyOptions} from '../../../common/scroll';

const DEFAULT_TOOLTIP_SCROLL_STRATEGY: EvoScrollStrategy = 'close';
const DEFAULT_TOOLTIP_CLOSE_THRESHOLD = 10;

@Injectable()
export class EvoTooltipService implements OnDestroy {
    readonly stringContent$: Observable<string | null> = EMPTY;
    readonly templateContent$: Observable<TemplateRef<HTMLElement> | null> = EMPTY;
    readonly position$: Observable<EvoTooltipPosition> = EMPTY;
    readonly parentRef$: Observable<ElementRef> = EMPTY;
    readonly tooltipClasses$: Observable<string[]> = EMPTY;
    readonly styles$: Observable<EvoTooltipStyles> = EMPTY;
    readonly visibleArrow$: Observable<boolean> = EMPTY;
    readonly isOpen$: Observable<boolean> = EMPTY;

    private readonly _stringContent$ = new BehaviorSubject<string | null>(null);
    private readonly _templateContent$ = new BehaviorSubject<TemplateRef<HTMLElement> | null>(null);
    private readonly _position$ = new BehaviorSubject<EvoTooltipPosition>(EvoTooltipPosition.BOTTOM);
    private readonly _parentRef$ = new BehaviorSubject<ElementRef>(null);
    private readonly _tooltipClasses$ = new BehaviorSubject<string[]>([]);
    private readonly _styles$ = new BehaviorSubject<EvoTooltipStyles>(null);
    private readonly _visibleArrow$ = new BehaviorSubject<boolean>(true);
    private readonly _isOpen$ = new Subject<boolean>();
    private readonly destroy$ = new Subject<void>();

    private overlayRef: OverlayRef | null = null;
    private positionStrategy: FlexibleConnectedPositionStrategy | null = null;
    private tooltipComponentRef: ComponentRef<EvoTooltipComponent> | null = null;

    get hasAttached(): boolean {
        return this.overlayRef?.hasAttached() ?? false;
    }

    constructor(
        private readonly overlay: Overlay,
        private readonly overlayPositionBuilder: OverlayPositionBuilder,
        private readonly evoScrollStrategyOptions: EvoScrollStrategyOptions,
        private readonly injector: Injector,
    ) {
        this.stringContent$ = this._stringContent$.asObservable();
        this.templateContent$ = this._templateContent$.asObservable();
        this.position$ = this._position$.asObservable();
        this.parentRef$ = this._parentRef$.asObservable();
        this.tooltipClasses$ = this._tooltipClasses$.asObservable();
        this.styles$ = this._styles$.asObservable();
        this.visibleArrow$ = this._visibleArrow$.asObservable();
        this.isOpen$ = this._isOpen$.asObservable();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    showTooltip(params: {
        parentRef: ElementRef;
        content: string | TemplateRef<HTMLElement>;
        position?: EvoTooltipPosition;
        hasArrow?: boolean;
        scrollStrategy?: EvoScrollStrategy;
    }): HTMLElement {
        const {parentRef, content, position = EvoTooltipPosition.BOTTOM, hasArrow = true} = params;

        this._parentRef$.next(parentRef);
        this._visibleArrow$.next(hasArrow);

        this.setContent(content);
        this._position$.next(position);

        const scrollStrategy = params.scrollStrategy || DEFAULT_TOOLTIP_SCROLL_STRATEGY;
        this.createOverlay(parentRef, position, hasArrow, scrollStrategy);

        this.createPortal();

        this._isOpen$.next(this.hasAttached);
        this.initSubscriptions();

        return this.overlayRef.overlayElement;
    }

    hideTooltip(): void {
        if (this.tooltipComponentRef) {
            this.tooltipComponentRef.destroy();
            this.tooltipComponentRef = null;
        }

        this.overlayRef?.detach();
        this._isOpen$.next(!!this.overlayRef?.hasAttached());
    }

    setTooltipStyles(tooltipStyles: EvoTooltipStyles): void {
        this._styles$.next(tooltipStyles);
    }

    setTooltipClass(tooltipClassOrClasses: string | string[]): void {
        this._tooltipClasses$.next(
            !tooltipClassOrClasses
                ? []
                : Array.isArray(tooltipClassOrClasses)
                ? tooltipClassOrClasses
                : [tooltipClassOrClasses],
        );
    }

    private setContent(content: string | TemplateRef<HTMLElement> | undefined): void {
        if (typeof content === 'string') {
            this._stringContent$.next(content);
        } else if (content instanceof TemplateRef) {
            this._templateContent$.next(content);
        }
    }

    private createOverlay(
        parentRef: ElementRef,
        position: EvoTooltipPosition,
        hasArrow: boolean,
        scrollStrategy: EvoScrollStrategy,
    ): void {
        this.positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(parentRef)
            .withPositions(getTooltipConnectedPositions(position, parentRef, hasArrow))
            .withPush(false);

        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.getScrollStrategy(scrollStrategy, parentRef),
        });
    }

    private getScrollStrategy(scrollStrategy: EvoScrollStrategy, parentRef: ElementRef): ScrollStrategy {
        return this.evoScrollStrategyOptions.create(scrollStrategy, {
            threshold: DEFAULT_TOOLTIP_CLOSE_THRESHOLD,
            triggerRef: parentRef,
        });
    }

    private createPortal(): void {
        const tooltipPortal = new ComponentPortal(EvoTooltipComponent, null, this.injector);
        this.tooltipComponentRef = this.overlayRef.attach(tooltipPortal);
    }

    private initSubscriptions(): void {
        if (this.positionStrategy) {
            const closed$ = this._isOpen$.pipe(filter((isOpened: boolean) => !isOpened));

            this.positionStrategy.positionChanges.pipe(takeUntil(merge(this.destroy$, closed$))).subscribe((value) => {
                this._position$.next(value.connectionPair.panelClass as EvoTooltipPosition);
            });
        }

        if (this.overlayRef) {
            this.overlayRef
                .detachments()
                .pipe(
                    take(1),
                    tap(() => {
                        this.positionStrategy = null;
                        this.overlayRef = null;
                        this._isOpen$.next(false);
                    }),
                    takeUntil(this.destroy$),
                )
                .subscribe();
        }
    }
}
