import { ComponentRef, ElementRef, Injectable, Injector, TemplateRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef
} from '@angular/cdk/overlay';
import {
  BehaviorSubject,
  EMPTY,
  fromEvent,
  merge, Observable, Subject,
} from 'rxjs';
import { catchError, debounceTime, filter, first, map } from 'rxjs/operators';
import { EvoTooltipPositionType } from '../types/evo-tooltip-position-type';
import { EvoTooltipStyles } from '../interfaces/evo-tooltip-styles';
import { EvoTooltipConfig } from '../interfaces/evo-tooltip-config';
import { EVO_TOOLTIP_CONFIG } from '../constants/evo-tooltip-config';
import { EvoTooltipComponent } from '../evo-tooltip.component';
import { EVO_TOOLTIP_POSITION } from '../enums/evo-tooltip-position';
import { EVO_CONNECTED_POSITION } from '../constants/evo-tooltip-connected-position';
import { EVO_PRIORITY_POSITIONS_ORDER } from '../constants/evo-tooltip-priority-positions-order';
import { EVO_DEFAULT_POSITIONS_ORDER } from '../constants/evo-tooltip-default-positions-order';

@Injectable()
export class EvoTooltipService {
  stringContent$: Observable<string | null>;
  templateContent$: Observable<TemplateRef<HTMLElement> | null>;
  position$: Observable<EvoTooltipPositionType | string>;
  styles$: Observable<EvoTooltipStyles>;

  private stringContentSubject$ = new BehaviorSubject<string | null>(null);
  private templateContentSubject$ = new BehaviorSubject<TemplateRef<HTMLElement> | null>(null);
  private positionSubject$ = new BehaviorSubject<EvoTooltipPositionType | string>(EVO_TOOLTIP_POSITION.BOTTOM);
  private configSubject$ = new BehaviorSubject<EvoTooltipConfig>(EVO_TOOLTIP_CONFIG);
  private stylesSubject$ = new Subject<EvoTooltipStyles>();
  private readonly viewportMargin = 2;
  private overlayRef: OverlayRef;
  private positionStrategy: FlexibleConnectedPositionStrategy;
  private tooltipComponentRef: ComponentRef<EvoTooltipComponent> | null;
  private parentRef: ElementRef;
  private targetElement: EventTarget | null;

  constructor(
    private readonly overlay: Overlay,
    private readonly overlayPositionBuilder: OverlayPositionBuilder,
    private readonly injector: Injector,
  ) {
    this.stringContent$ = this.stringContentSubject$.asObservable();
    this.templateContent$ = this.templateContentSubject$.asObservable();
    this.position$ = this.positionSubject$.asObservable();
    this.styles$ = this.stylesSubject$.asObservable();
  }

  showTooltip(
    elementRef: ElementRef,
    content: string | TemplateRef<HTMLElement>,
    position: EvoTooltipPositionType | string,
    config: EvoTooltipConfig,
    targetElement?: EventTarget | null,
  ) {
    this.parentRef = elementRef;
    this.targetElement = targetElement ?? null;

    this.setContent(content);
    this.setPosition(position);
    this.setConfig(config);
    this.createOverlay(elementRef, position as EVO_TOOLTIP_POSITION);
    this.createPortal();
    this.initSubscriptions();
  }

  hideTooltip() {
    if (this.tooltipComponentRef) {
      this.tooltipComponentRef.destroy();
      this.tooltipComponentRef = null;
    }

    this.overlayRef.detach();
  }

  get hasAttached(): boolean {
    return this.overlayRef?.hasAttached() ?? false;
  }

  get config(): EvoTooltipConfig {
    return this.configSubject$.value;
  }

  setContent(content: string | TemplateRef<HTMLElement> | undefined) {
    if (typeof content === 'string') {
      this.stringContentSubject$.next(content);
    } else if (content instanceof TemplateRef) {
      this.templateContentSubject$.next(content);
    }
  }

  setPosition(position: EvoTooltipPositionType | string) {
    this.positionSubject$.next(position);
  }

  setConfig(config: EvoTooltipConfig) {
    this.configSubject$.next(config);
  }

  setStyles(styles: EvoTooltipStyles) {
    this.stylesSubject$.next(styles);
  }

  setArrowPosition() {
    const tooltipRadius = 8;
    const arrowSize = 16;
    const positionArrow = (size: number) => ((size / 2) - (arrowSize / 2));
    const verticalPositionArrow = positionArrow(this.parentRef.nativeElement.offsetHeight);
    const horizontalPositionArrow = positionArrow(this.parentRef.nativeElement.offsetWidth);

    this.setStyles({
      '--tooltip-vertical-position-arrow': verticalPositionArrow < tooltipRadius ? `${tooltipRadius}px` : `${verticalPositionArrow}px`,
      '--tooltip-horizontal-position-arrow': horizontalPositionArrow < tooltipRadius ? `${tooltipRadius}px` : `${horizontalPositionArrow}px`,
    });
  }

  createOverlay(elementRef: ElementRef, position: EVO_TOOLTIP_POSITION): void {
    this.positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(elementRef)
      .withPositions(this.getPositions(position))
      .withViewportMargin(this.viewportMargin);

    const scrollStrategy = this.overlay.scrollStrategies.close({threshold: 10});
    this.overlayRef = this.overlay.create(
      { positionStrategy: this.positionStrategy, scrollStrategy }
    );
  }

  createPortal(): void {
    const tooltipPortal = new ComponentPortal(EvoTooltipComponent, null, this.injector);
    this.tooltipComponentRef = this.overlayRef.attach(tooltipPortal);
  }

  initSubscriptions(): void {
    const parentElement = this.targetElement ? this.targetElement : this.parentRef.nativeElement;
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
      this.positionSubject$.next(value.connectionPair.panelClass as EVO_TOOLTIP_POSITION);

      this.setArrowPosition();
    });
  }

  getPositions(position: EVO_TOOLTIP_POSITION): ConnectedPosition[] {
    return this.getPositionsOrder(position).map((key) => EVO_CONNECTED_POSITION[key]);
  }

  getPositionsOrder(position: EVO_TOOLTIP_POSITION): EVO_TOOLTIP_POSITION[] {
    const priorityPositions = EVO_PRIORITY_POSITIONS_ORDER[position];

    if (priorityPositions) {
      return [
        ...priorityPositions,
        ...EVO_DEFAULT_POSITIONS_ORDER.filter((defaultPosition) => !priorityPositions.includes(defaultPosition))
      ];
    }

    const indexPositionKey: number = EVO_DEFAULT_POSITIONS_ORDER.indexOf(position);
    return EVO_DEFAULT_POSITIONS_ORDER.slice(indexPositionKey).concat(EVO_DEFAULT_POSITIONS_ORDER.slice(0, indexPositionKey));
  }
}
