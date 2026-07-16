import {InjectionToken, Provider} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {CSS_BREAKPOINTS} from './css-breakpoints';

export const MOBILE_VIEW = new InjectionToken<Observable<boolean>>('MOBILE_VIEW');

export const MobileViewProvider: Provider = {
    provide: MOBILE_VIEW,
    // Дробный порог `.98` вместо целого `767`: целый `max-width: 767px` расходился с CSS
    // `media-tablet` (`min-width: 768px`) на дробных ширинах в полосе 767-768px (зум, масштаб экрана) -
    // CSS уже давал мобильную раскладку, а JS ещё считал десктоп. Это ломало потребителей, которые
    // гейтят DOM по стриму (evo-table). Дробная граница совмещает JS с CSS, не меняя поведение на
    // целых ширинах и десктопный дефолт при SSR (сервер отдаёт `matches: false`).
    useFactory: (breakpointObserver: BreakpointObserver) =>
        breakpointObserver
            .observe(`(max-width: ${CSS_BREAKPOINTS.tablet - 0.02}px)`)
            .pipe(map((breakpointState) => breakpointState.matches)),
    deps: [BreakpointObserver],
};

export const TABLET_VIEW = new InjectionToken<Observable<boolean>>('TABLET_VIEW');

export const TabletViewProvider: Provider = {
    provide: TABLET_VIEW,
    useFactory: (breakpointObserver: BreakpointObserver) =>
        breakpointObserver
            .observe(`(min-width: ${CSS_BREAKPOINTS.tablet}px)`)
            .pipe(map((breakpointState) => breakpointState.matches)),
    deps: [BreakpointObserver],
};

export const DESKTOP_SMALL_VIEW = new InjectionToken<Observable<boolean>>('DESKTOP_SMALL_VIEW');

export const DesktopSmallViewProvider: Provider = {
    provide: DESKTOP_SMALL_VIEW,
    useFactory: (breakpointObserver: BreakpointObserver) =>
        breakpointObserver
            .observe(`(min-width: ${CSS_BREAKPOINTS.desktopS}px)`)
            .pipe(map((breakpointState) => breakpointState.matches)),
    deps: [BreakpointObserver],
};

export const VIEW_BREAKPOINTS_PROVIDERS = [MobileViewProvider, TabletViewProvider, DesktopSmallViewProvider];
