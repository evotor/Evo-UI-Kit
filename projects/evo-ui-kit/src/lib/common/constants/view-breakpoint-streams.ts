import {InjectionToken, Provider} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {CSS_BREAKPOINTS} from './css-breakpoints';

export const MOBILE_VIEW = new InjectionToken<Observable<boolean>>('MOBILE_VIEW');

export const MobileViewProvider: Provider = {
    provide: MOBILE_VIEW,
    useFactory: (breakpointObserver: BreakpointObserver) =>
        breakpointObserver.observe(`(max-width: ${ CSS_BREAKPOINTS.tablet - 1 }px)`).pipe(map((breakpointState) => breakpointState.matches)),
    deps: [BreakpointObserver],
};

export const TABLET_VIEW = new InjectionToken<Observable<boolean>>('TABLET_VIEW');

export const TabletViewProvider: Provider = {
    provide: TABLET_VIEW,
    useFactory: (breakpointObserver: BreakpointObserver) =>
        breakpointObserver.observe(`(min-width: ${ CSS_BREAKPOINTS.tablet }px)`).pipe(map((breakpointState) => breakpointState.matches)),
    deps: [BreakpointObserver],
};

export const DESKTOP_SMALL_VIEW = new InjectionToken<Observable<boolean>>('DESKTOP_SMALL_VIEW');

export const DesktopSmallViewProvider: Provider = {
    provide: DESKTOP_SMALL_VIEW,
    useFactory: (breakpointObserver: BreakpointObserver) =>
        breakpointObserver.observe(`(min-width: ${ CSS_BREAKPOINTS.desktopS }px)`).pipe(map((breakpointState) => breakpointState.matches)),
    deps: [BreakpointObserver],
};

export const VIEW_BREAKPOINTS_PROVIDERS = [MobileViewProvider, TabletViewProvider, DesktopSmallViewProvider];
