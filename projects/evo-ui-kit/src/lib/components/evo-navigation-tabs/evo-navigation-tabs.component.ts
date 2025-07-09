import {
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input, OnDestroy,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {Subject} from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';
import {EVO_TAB_ACTIVATE} from './evo-navigation-tab.directive';
import {EvoNavigationTabsSize} from './types/evo-navigation-tabs-size';

@Component({
    selector: 'evo-navigation-tabs',
    templateUrl: './evo-navigation-tabs.component.html',
    styleUrls: ['./evo-navigation-tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class EvoNavigationTabsComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() tabs: {label: string; link?: string; disabled?: boolean}[] = [];
    @Input() size: EvoNavigationTabsSize = 'normal';
    @Input('activeIndex') set setActiveIndex(index: number) {
        this.activeIndex = index;
        this.markTabAsActive();
    }
    @Input('disabled') set setDisabled(disabled: boolean) {
        this.disabled = disabled;
        this.disabledSubject$.next(disabled);
    }

    @Output() activeItemIndexChange = new EventEmitter<number>();

    disabled = false;

    private activeIndex = 0;

    private readonly disabledSubject$ = new Subject<boolean>();
    private readonly nextRenderSubject$ = new Subject<void>();
    private readonly destroy$ = new Subject<void>();

    constructor(private readonly el: ElementRef) {
        this.initSubscriptions();
    }

    ngAfterViewInit(): void {
        this.markTabAsActive();
    }

    ngAfterViewChecked(): void {
        this.nextRenderSubject$.next();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    @HostListener(EVO_TAB_ACTIVATE, ['$event', '$event.target'])
    onActivate(event: Event, element: HTMLButtonElement): void {
        const index = this.tabsList.findIndex((tab) => tab === element);

        event.stopPropagation();

        if (index === this.activeIndex) {
            return;
        }

        this.activeItemIndexChange.emit(index);
        this.activeIndex = index;
        this.markTabAsActive();
    }

    private get tabsList(): readonly HTMLButtonElement[] {
        return Array.from(this.el.nativeElement.querySelectorAll('[evoNavigationTab]'));
    }

    private get activeElement(): HTMLButtonElement | undefined {
        return this.tabsList[this.activeIndex] || undefined;
    }

    private markTabAsActive(): void {
        const {tabsList, activeElement} = this;

        tabsList.forEach((nativeElement) => {
            const active = nativeElement === activeElement;

            nativeElement.classList.toggle('_active', active);
            nativeElement.setAttribute('tabIndex', active ? '0' : '-1');
        });
    }

    private markTabAsDisabled(): void {
        this.tabsList.forEach((nativeElement) => {
            const allDisabledClassName = '_all_disabled';

            if (this.disabled && !nativeElement.disabled) {
                nativeElement.classList.add(allDisabledClassName);
                nativeElement.setAttribute('disabled', '');
            }

            if (!this.disabled && nativeElement.classList.contains(allDisabledClassName)) {
                nativeElement.classList.remove(allDisabledClassName);
                nativeElement.removeAttribute('disabled');
            }
        });
    }

    private initSubscriptions(): void {
        this.disabledSubject$
            .pipe(
                switchMap(() => this.nextRenderSubject$.pipe(take(1))),
                tap(() => {
                    this.markTabAsDisabled();
                }),
                takeUntil(this.destroy$)
            )
            .subscribe();
    }
}
