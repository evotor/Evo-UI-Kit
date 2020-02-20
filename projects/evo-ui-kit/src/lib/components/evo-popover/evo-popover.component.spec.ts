import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { EvoPopoverComponent, EvoPopoverDelay } from './index';
import { Component, ViewChild } from '@angular/core';
import { EvoUiClassDirective } from '../../directives/';

const initialPosition = 'right';

@Component({
    selector: 'evo-host-component',
    template: `
        <evo-popover [position]="position" [delay]="delay">
            <p style="max-width: 360px">Some text content...<br>
                <a href="https://evotor.ru" target="_blank">Some link</a>
            </p>
            <p popover-body>Some popover text...<br>
                <a href="https://evotor.ru" target="_blank">Some link</a>
            </p>
        </evo-popover>`,
})
class TestHostComponent {
    @ViewChild(EvoPopoverComponent, {static: false}) popoverComponent: EvoPopoverComponent;
    position = initialPosition;
    delay = undefined;
}

describe('EvoPopoverComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
    let popoverComponent: EvoPopoverComponent;
    let tipEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoPopoverComponent,
                TestHostComponent,
                EvoUiClassDirective,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        popoverComponent = testHostComponent.popoverComponent;
        tipEl = testHostFixture.nativeElement.querySelector('.evo-popover__tip');
    });

    it('should not be visible after construction', () => {
        expect(testHostComponent.popoverComponent.show).toBeFalsy();
    });

    it('should display content when hovered and hide on click outside', () => {
        popoverComponent.onEnter();
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeTruthy();
        popoverComponent.onClickOutside();
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeFalsy();
    });

    it('should display content when touchend', () => {
        testHostComponent.popoverComponent.onTouchEnd();
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeTruthy();
    });

    it('should hide content when mouse leave after 100ms', fakeAsync(() => {
        testHostComponent.popoverComponent.show = true;
        testHostComponent.popoverComponent.onLeave();
        tick(100);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeFalsy();
    }));

    it(`should have attribute '[data-popper-placement="${initialPosition}"]'`, fakeAsync(() => {
        testHostComponent.popoverComponent.onEnter();
        testHostFixture.detectChanges();
        tick(100);
        expect(popoverComponent['placement']).toEqual(initialPosition);
        expect(testHostFixture.nativeElement.querySelector('.evo-popover__tip').getAttribute('data-popper-placement'))
            .toEqual(initialPosition);
    }));

    it(`should unsubscribe from updates after destroy'`, () => {
        popoverComponent.ngOnDestroy();
        const subscriptions$ = popoverComponent['subscriptions$'];
        expect(subscriptions$.observers.length).toEqual(0);
        expect(subscriptions$.isStopped).toEqual(true);
    });

    it('should hide content when mouse leave after 1000ms', fakeAsync(() => {
        testHostComponent.delay = {show: 0, hide: 1000};
        testHostFixture.detectChanges();
        testHostComponent.popoverComponent.onEnter();
        testHostComponent.popoverComponent.onLeave();
        tick(999);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeTruthy();
        tick(1);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeFalsy();
    }));

    it('should show content after 1000ms when mouse enter and hide immediately when mouse leave', fakeAsync(() => {
        testHostComponent.delay = {show: 1000, hide: 0};
        testHostFixture.detectChanges();
        testHostComponent.popoverComponent.onEnter();
        tick(999);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeFalsy();
        tick(1);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeTruthy();
        testHostComponent.popoverComponent.onLeave();
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeFalsy();
    }));

    it('should show content after 500ms when mouse enter and hide after 500ms when mouse leave', fakeAsync(() => {
        testHostComponent.delay = 500;
        testHostFixture.detectChanges();
        testHostComponent.popoverComponent.onEnter();
        tick(499);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeFalsy();
        tick(1);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeTruthy();
        testHostComponent.popoverComponent.onLeave();
        tick(499);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeTruthy();
        tick(1);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeFalsy();
    }));

    it(`should create new instance after position update'`, fakeAsync(() => {
        testHostFixture.detectChanges();
        popoverComponent['update$'].subscribe((value) => {
            expect(value).toBeFalsy();
        });
        const firstInstance = popoverComponent['popper'];
        const destroySpy = spyOn(popoverComponent, 'destroy').and.callThrough();
        const createSpy = spyOn(popoverComponent, 'create').and.callThrough();
        expect(firstInstance).toBeTruthy();
        testHostComponent.position = 'bottom-end';
        testHostFixture.detectChanges();
        expect(destroySpy).toHaveBeenCalled();
        expect(createSpy).toHaveBeenCalled();
        expect(firstInstance === popoverComponent['popper']).toBeFalsy();
        tick();
    }));
});
