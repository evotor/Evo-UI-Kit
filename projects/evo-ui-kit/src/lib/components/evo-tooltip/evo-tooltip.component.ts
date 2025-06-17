import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    OnDestroy,
    OnInit,
    Renderer2,
    TemplateRef,
} from '@angular/core';
import {BehaviorSubject, combineLatest, EMPTY, Observable, Subject} from 'rxjs';
import {filter, map, pairwise, startWith, takeUntil, tap} from 'rxjs/operators';
import {EVO_TOOLTIP_FADEIN_ANIMATION} from './constants/evo-tooltip-fadein.animation';
import {EvoTooltipService} from './services/evo-tooltip.service';
import {EvoTooltipStyles} from './interfaces/evo-tooltip-styles';
import {EvoTooltipPosition} from './enums/evo-tooltip-position';
import {EVO_TOOLTIP_ARROW_SIZE} from './constants/evo-tooltip-arrow-size';
import {EVO_TOOLTIP_RADIUS} from './constants/evo-tooltip-radius';
import {EvoTooltipVariableArrowPosition} from './enums/evo-tooltip-variable-arrow-position';

@Component({
    selector: 'evo-tooltip',
    templateUrl: './evo-tooltip.component.html',
    styleUrls: ['./evo-tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [EVO_TOOLTIP_FADEIN_ANIMATION],
})
export class EvoTooltipComponent implements OnInit, AfterViewInit, OnDestroy {
    readonly position$: Observable<EvoTooltipPosition> = this.tooltipService.position$;
    readonly stringContent$: Observable<string> = this.tooltipService.stringContent$;
    readonly templateContent$: Observable<TemplateRef<unknown>> = this.tooltipService.templateContent$;
    readonly visibleArrow$: Observable<boolean> = this.tooltipService.visibleArrow$;
    readonly styles$: Observable<EvoTooltipStyles> = EMPTY;

    @HostBinding('@fadeIn') fadeIn = true;

    private readonly _positionArrowStyles$ = new BehaviorSubject<EvoTooltipStyles>(null);
    private readonly _destroy$ = new Subject<void>();

    constructor(
        private readonly elementRef: ElementRef,
        private readonly tooltipService: EvoTooltipService,
        private readonly renderer: Renderer2,
    ) {
        this.styles$ = combineLatest([this.tooltipService.styles$, this._positionArrowStyles$]).pipe(
            map(([style1, style2]) => ({...style1, ...style2})),
        );
    }

    ngOnInit(): void {
        combineLatest([this.position$, this.tooltipService.parentRef$, this.visibleArrow$])
            .pipe(
                filter(([_position, _parentRef, visibleArrow]) => visibleArrow),
                // Вычисление стрелки нужно только для угловых позиций
                filter(([position]) => {
                    switch (position) {
                        case EvoTooltipPosition.TOP:
                        case EvoTooltipPosition.RIGHT:
                        case EvoTooltipPosition.BOTTOM:
                        case EvoTooltipPosition.LEFT:
                            return false;
                        default:
                            return true;
                    }
                }),
                tap(([_, parentRef]) => {
                    this.setArrowPosition(parentRef);
                }),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }

    ngAfterViewInit(): void {
        this.tooltipService.tooltipClasses$
            .pipe(
                startWith([]),
                pairwise(),
                tap(([a, b]: [string[], string[]]) => {
                    (a || []).forEach((oldClass) => this.renderer.removeClass(this.elementRef.nativeElement, oldClass));
                    (b || []).forEach((newClass) => this.renderer.addClass(this.elementRef.nativeElement, newClass));
                }),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.fadeIn = false;
        this._destroy$.next();
        this._destroy$.complete();
    }

    private setArrowPosition(parentRef: ElementRef): void {
        // Для того чтобы стрелка тянулась к центру родителя - берем середину
        const widthParent = parentRef.nativeElement.offsetWidth / 2;
        const heightParent = parentRef.nativeElement.offsetHeight / 2;
        const isParentLonger = widthParent >= this.elementRef.nativeElement.offsetWidth;
        const isParentHigher = heightParent >= this.elementRef.nativeElement.offsetHeight;
        // Если середина родителя оказывается меньше тултипа - берем середину родителя иначе размер тултипа
        // Это проверка на максимальное смещение, смещение стрелки не должно быть больше размера тултипа
        const width = isParentLonger ? this.elementRef.nativeElement.offsetWidth : widthParent;
        const height = isParentHigher ? this.elementRef.nativeElement.offsetHeight : heightParent;

        const positionArrow = (size: number, isParentBigger: boolean): number =>
            // Если середина родителя больше тултипа
            // То берем размер тултипа и отнимаем размер стрелки и радиуса
            // Иначе берем середину родителя и отнимаем половину стрелки
            // Это условие нужно чтобы стрелка не смещалась
            isParentBigger ? size - EVO_TOOLTIP_ARROW_SIZE - EVO_TOOLTIP_RADIUS : size - EVO_TOOLTIP_ARROW_SIZE / 2;
        let verticalPositionArrow = positionArrow(height, isParentHigher);
        let horizontalPositionArrow = positionArrow(width, isParentLonger);

        // Проверка на минимальное смещение, смещение стрелки не должно быть меньше размера радиуса тултипа 8px
        horizontalPositionArrow =
            horizontalPositionArrow > EVO_TOOLTIP_RADIUS ? horizontalPositionArrow : EVO_TOOLTIP_RADIUS;
        verticalPositionArrow = verticalPositionArrow > EVO_TOOLTIP_RADIUS ? verticalPositionArrow : EVO_TOOLTIP_RADIUS;

        this._positionArrowStyles$.next({
            [EvoTooltipVariableArrowPosition.VERTICAL_POSITION_ARROW]: `${verticalPositionArrow}px`,
            [EvoTooltipVariableArrowPosition.HORIZONTAL_POSITION_ARROW]: `${horizontalPositionArrow}px`,
        });
    }
}
