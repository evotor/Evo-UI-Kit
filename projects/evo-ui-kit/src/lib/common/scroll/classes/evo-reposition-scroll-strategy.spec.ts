import {Injector} from '@angular/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {OverlayRef} from '@angular/cdk/overlay';
import {Platform} from '@angular/cdk/platform';
import {EvoRepositionScrollStrategy} from './evo-reposition-scroll-strategy';

interface OverlayRefStub {
    overlayElement: HTMLElement;
    updatePosition: jasmine.Spy;
    detach: jasmine.Spy;
    hasAttached: () => boolean;
}

function createOverlayRefStub(): OverlayRefStub {
    const overlayElement = document.createElement('div');
    document.body.appendChild(overlayElement);

    return {
        overlayElement,
        updatePosition: jasmine.createSpy('updatePosition'),
        detach: jasmine.createSpy('detach'),
        hasAttached: () => true,
    };
}

function rect(top: number, bottom: number, left: number, right: number): DOMRect {
    return {top, bottom, left, right, x: left, y: top, width: right - left, height: bottom - top} as DOMRect;
}

describe('EvoRepositionScrollStrategy', () => {
    let injector: Injector;
    let host: HTMLElement;
    let container: HTMLElement; // a scroll container that is NOT an ancestor of the overlay/trigger
    let overlayRef: OverlayRefStub;

    function buildDom(): void {
        host = document.createElement('div');
        host.innerHTML = `<div id="c" style="height:50px;overflow:auto"><div style="height:1000px"></div></div>`;
        document.body.appendChild(host);
        container = host.querySelector('#c') as HTMLElement;
        overlayRef = createOverlayRefStub();
    }

    function cleanupDom(): void {
        host.remove();
        overlayRef.overlayElement.remove();
    }

    function createStrategy(): EvoRepositionScrollStrategy {
        const strategy = new EvoRepositionScrollStrategy(injector);
        strategy.attach(overlayRef as unknown as OverlayRef);

        return strategy;
    }

    describe('in a browser', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({});
            injector = TestBed.inject(Injector);
            buildDom();
        });

        afterEach(cleanupDom);

        it('repositions when an inner container that is NOT an ancestor of the trigger scrolls', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            expect(container.contains(overlayRef.overlayElement)).toBe(false);

            container.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).toHaveBeenCalled();
            strategy.detach();
        }));

        it('coalesces a same-frame burst of scroll events to a single updatePosition', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            for (let i = 0; i < 12; i++) {
                container.dispatchEvent(new Event('scroll'));
            }
            tick(50);

            // auditTime(0, animationFrameScheduler) is trailing-only: a burst within one frame
            // collapses to exactly one rAF-aligned reposition carrying the latest scroll offset.
            expect(overlayRef.updatePosition.calls.count()).toBe(1);
            strategy.detach();
        }));

        it('still repositions on page/document scroll (handled by the CDK global listener)', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            document.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).toHaveBeenCalled();
            strategy.detach();
        }));

        // `body { height: 100dvh }` makes the page scroll fire on <body>, whose scroll does NOT reach
        // the CDK global listener (it only catches target === document). Our capture stream must keep it.
        it('repositions on body scroll (body height:100dvh case)', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            document.body.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).toHaveBeenCalled();
            strategy.detach();
        }));

        it('ignores scrolls that originate inside the overlay', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();

            const innerOverlayScroller = document.createElement('div');
            overlayRef.overlayElement.appendChild(innerOverlayScroller);
            innerOverlayScroller.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).not.toHaveBeenCalled();
            strategy.detach();
        }));

        it('stops reacting after detach', fakeAsync(() => {
            const strategy = createStrategy();
            strategy.enable();
            strategy.detach();

            overlayRef.updatePosition.calls.reset();
            container.dispatchEvent(new Event('scroll'));
            document.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).not.toHaveBeenCalled();
        }));
    });

    describe('without a browser platform (SSR)', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [{provide: Platform, useValue: {isBrowser: false}}],
            });
            injector = TestBed.inject(Injector);
            buildDom();
        });

        afterEach(cleanupDom);

        it('does not touch window or reposition on scroll', fakeAsync(() => {
            const strategy = createStrategy();

            expect(() => strategy.enable()).not.toThrow();

            container.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.updatePosition).not.toHaveBeenCalled();
            strategy.detach();
        }));
    });

    describe('closing when the trigger leaves its scroll container', () => {
        let scrollContainer: HTMLElement;
        let origin: HTMLElement;

        beforeEach(() => {
            TestBed.configureTestingModule({});
            injector = TestBed.inject(Injector);

            host = document.createElement('div');
            host.innerHTML = `
                <div id="sc" style="height:100px;overflow:auto">
                    <div style="height:1000px"><button id="o"></button></div>
                </div>`;
            document.body.appendChild(host);
            scrollContainer = host.querySelector('#sc') as HTMLElement;
            origin = host.querySelector('#o') as HTMLElement;
            overlayRef = createOverlayRefStub();
        });

        afterEach(cleanupDom);

        function createStrategyWithOrigin(): EvoRepositionScrollStrategy {
            const strategy = new EvoRepositionScrollStrategy(injector, {getOrigin: () => origin});
            strategy.attach(overlayRef as unknown as OverlayRef);

            return strategy;
        }

        it('stays open while the trigger is still inside its container', fakeAsync(() => {
            spyOn(scrollContainer, 'getBoundingClientRect').and.returnValue(rect(0, 100, 0, 100));
            spyOn(origin, 'getBoundingClientRect').and.returnValue(rect(20, 40, 20, 40));

            const strategy = createStrategyWithOrigin();
            strategy.enable();

            scrollContainer.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.detach).not.toHaveBeenCalled();
            strategy.detach();
        }));

        it('closes when the trigger has scrolled out of its container', fakeAsync(() => {
            spyOn(scrollContainer, 'getBoundingClientRect').and.returnValue(rect(0, 100, 0, 100));
            // origin scrolled above the container (bottom -20 < container top 0)
            spyOn(origin, 'getBoundingClientRect').and.returnValue(rect(-60, -20, 20, 40));

            const strategy = createStrategyWithOrigin();
            strategy.enable();

            scrollContainer.dispatchEvent(new Event('scroll'));
            tick(50);

            expect(overlayRef.detach).toHaveBeenCalled();
            strategy.detach();
        }));
    });
});
