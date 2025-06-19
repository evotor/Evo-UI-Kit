import {Directive, ElementRef, HostBinding, OnDestroy, Optional} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {EMPTY, fromEvent, merge, Observable, Subject} from 'rxjs';
import {filter, switchMap, take, takeUntil, tap} from 'rxjs/operators';
import {RouterLinkActiveService} from '../../services/router-link-active.service';
import {MutationObserverService} from '../../services/mutation-observer.service';

export const EVO_TAB_ACTIVATE = 'evo-tab-activate';

@Directive({
    selector: 'button[evoNavigationTab]:not([routerLink]), button[evoNavigationTab][routerLink][routerLinkActive]',
    providers: [MutationObserverService, RouterLinkActiveService],
})
export class EvoNavigationTabDirective implements OnDestroy {
    @HostBinding('class.evo-navigation-tab') tabClass = true;

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly el: ElementRef,
        private readonly routerLinkActiveService: RouterLinkActiveService,
        @Optional() private readonly rla: RouterLinkActive,
        @Optional() private readonly mutation: MutationObserverService,
    ) {
        this.initSubscriptions();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private initSubscriptions(): void {
        const mutationObserver =
            this.rla && this.mutation ? this.mutation.pipe(filter((): boolean => this.rla.isActive)) : EMPTY;

        merge(
            mutationObserver,
            this.routerLinkActiveService.pipe(filter((r): boolean => r)),
            fromEvent(this.el.nativeElement, 'click').pipe(
                // Delaying execution until after all other click callbacks
                switchMap(
                    (): Observable<unknown> => fromEvent(this.el.nativeElement.parentElement!, 'click').pipe(take(1)),
                ),
            ),
        )
            .pipe(
                tap((): void => {
                    this.el.nativeElement.dispatchEvent(new CustomEvent(EVO_TAB_ACTIVATE, {bubbles: true}));
                }),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }
}
