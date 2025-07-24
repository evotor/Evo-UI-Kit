import {ComponentRef, ElementRef, Injectable, Injector, TemplateRef} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {
    ConnectedPosition,
    FlexibleConnectedPositionStrategy,
    Overlay,
    OverlayPositionBuilder,
    OverlayRef,
} from '@angular/cdk/overlay';
import {BehaviorSubject, EMPTY, fromEvent, merge, Observable, Subject} from 'rxjs';
import {catchError, debounceTime, filter, first, map} from 'rxjs/operators';
import {EvoTooltipConfig} from '../interfaces/evo-tooltip-config';
import {EVO_TOOLTIP_CONFIG} from '../constants/evo-tooltip-config';
import {EvoTooltipComponent} from '../evo-tooltip.component';
import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {EVO_CONNECTED_POSITION} from '../constants/evo-tooltip-connected-position';
import {EVO_PRIORITY_POSITIONS_ORDER} from '../constants/evo-tooltip-priority-positions-order';
import {EVO_DEFAULT_POSITIONS_ORDER} from '../constants/evo-tooltip-default-positions-order';
import {EVO_TOOLTIP_ARROW_SIZE} from '../constants/evo-tooltip-arrow-size';
import {EVO_TOOLTIP_RADIUS} from '../constants/evo-tooltip-radius';
import {EvoTooltipStyles} from '../interfaces/evo-tooltip-styles';
import {EVO_TOOLTIP_OFFSET} from '../constants/evo-tooltip-offset';

@Injectable()
export class EvoTooltipService {
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
    private readonly _config$ = new BehaviorSubject<EvoTooltipConfig>(EVO_TOOLTIP_CONFIG);
    private readonly _styles$ = new BehaviorSubject<EvoTooltipStyles>(null);
    private readonly _visibleArrow$ = new BehaviorSubject<boolean>(true);
    private readonly _isOpen$ = new Subject<boolean>();

    private overlayRef: OverlayRef;
    private positionStrategy: FlexibleConnectedPositionStrategy;
    private tooltipComponentRef: ComponentRef<EvoTooltipComponent> | null;
    private targetElement: EventTarget | null;

    constructor(
        private readonly overlay: Overlay,
        private readonly overlayPositionBuilder: OverlayPositionBuilder,
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

    showTooltip(
        parentRef: ElementRef,
        content: string | TemplateRef<HTMLElement>,
        position: EvoTooltipPosition,
        config: EvoTooltipConfig,
        targetElement?: EventTarget | null,
    ): void {
        this._parentRef$.next(parentRef);
        this.targetElement = targetElement ?? null;

        this.setContent(content);
        this._position$.next(position);
        this._config$.next(config);
        this.createOverlay(parentRef, position);
        this.createPortal();

        this._isOpen$.next(this.overlayRef.hasAttached());
        this.initSubscriptions();
    }

    hideTooltip(): void {
        if (this.tooltipComponentRef) {
            this.tooltipComponentRef.destroy();
            this.tooltipComponentRef = null;
        }

        this.overlayRef?.detach();
        this._isOpen$.next(!!this.overlayRef?.hasAttached());
    }

    setArrowVisibility(hasArrow: boolean): void {
        this._visibleArrow$.next(hasArrow);
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

    get hasAttached(): boolean {
        return this.overlayRef?.hasAttached() ?? false;
    }

    get config(): EvoTooltipConfig {
        return this._config$.value;
    }

    private get parentRef(): ElementRef {
        return this._parentRef$.value;
    }

    private setContent(content: string | TemplateRef<HTMLElement> | undefined): void {
        if (typeof content === 'string') {
            this._stringContent$.next(content);
        } else if (content instanceof TemplateRef) {
            this._templateContent$.next(content);
        }
    }

    private createOverlay(elementRef: ElementRef, position: EvoTooltipPosition): void {
        this.positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(elementRef)
            .withPositions(this.getPositions(position));

        const scrollStrategy = this.overlay.scrollStrategies.reposition();
        this.overlayRef = this.overlay.create({positionStrategy: this.positionStrategy, scrollStrategy});
    }

    private createPortal(): void {
        const tooltipPortal = new ComponentPortal(EvoTooltipComponent, null, this.injector);
        this.tooltipComponentRef = this.overlayRef.attach(tooltipPortal);
    }

    private initSubscriptions(): void {
        const parentElement = this.targetElement ? this.targetElement : this.parentRef?.nativeElement;
        const overlayElement = this.overlayRef.overlayElement;

        const mouseLeaveParentElement$ = fromEvent(parentElement, 'mouseleave').pipe(map(() => overlayElement));
        const mouseLeaveOverlayElement$ = fromEvent(overlayElement, 'mouseleave').pipe(map(() => parentElement));

        merge(mouseLeaveParentElement$, mouseLeaveOverlayElement$)
            .pipe(
                filter((element) => !element.matches(':hover')),
                debounceTime(this.config?.hideDelay ?? EVO_TOOLTIP_CONFIG.hideDelay),
                filter(() => !parentElement.matches(':hover') && !overlayElement.matches(':hover')),
                first(),
                catchError(() => {
                    this.hideTooltip();
                    return EMPTY;
                }),
            )
            .subscribe(() => {
                this.hideTooltip();
            });

        this.positionStrategy.positionChanges.subscribe((value) => {
            this._position$.next(value.connectionPair.panelClass as EvoTooltipPosition);
        });
    }

    private getPositions(position: EvoTooltipPosition): ConnectedPosition[] {
        return this.getPositionsOrder(position).map((key) => {
            const offset = EVO_TOOLTIP_OFFSET(this._visibleArrow$.value);
            const position = {...EVO_CONNECTED_POSITION(offset)[key]};
            const width = this.parentRef.nativeElement.offsetWidth;
            const height = this.parentRef.nativeElement.offsetHeight;
            const maxSize = EVO_TOOLTIP_ARROW_SIZE + EVO_TOOLTIP_RADIUS * 2;

            // Добавляем смещение тултипа для мелких обьектов
            if (width <= maxSize) {
                switch (key) {
                    case EvoTooltipPosition.BOTTOM_START:
                    case EvoTooltipPosition.TOP_START:
                        position.offsetX = -(maxSize - width) / 2;
                        break;
                    case EvoTooltipPosition.BOTTOM_END:
                    case EvoTooltipPosition.TOP_END:
                        position.offsetX = (maxSize - width) / 2;
                        break;
                }
            }

            // Добавляем смещение тултипа для мелких обьектов
            if (height <= maxSize) {
                switch (key) {
                    case EvoTooltipPosition.LEFT_START:
                    case EvoTooltipPosition.RIGHT_START:
                        position.offsetY = -(maxSize - height) / 2;
                        break;
                    case EvoTooltipPosition.LEFT_END:
                    case EvoTooltipPosition.RIGHT_END:
                        position.offsetY = (maxSize - height) / 2;
                        break;
                }
            }

            return position;
        });
    }

    private getPositionsOrder(position: EvoTooltipPosition): EvoTooltipPosition[] {
        const priorityPositions = EVO_PRIORITY_POSITIONS_ORDER[position];

        if (priorityPositions) {
            return [
                ...priorityPositions,
                ...EVO_DEFAULT_POSITIONS_ORDER.filter(
                    (defaultPosition) => !priorityPositions.includes(defaultPosition),
                ),
            ];
        }

        const indexPositionKey: number = EVO_DEFAULT_POSITIONS_ORDER.indexOf(position);
        return EVO_DEFAULT_POSITIONS_ORDER.slice(indexPositionKey).concat(
            EVO_DEFAULT_POSITIONS_ORDER.slice(0, indexPositionKey),
        );
    }
}
