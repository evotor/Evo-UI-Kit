import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { EvoPopoverComponent, EvoPopoverDelay } from './index';
import { Component, ViewChild } from '@angular/core';
import { EvoUiClassDirective } from '../../directives/';

const position = 'right';

@Component({
    selector: 'evo-host-component',
    template: `
        <evo-popover position="${position}" [delay]="delay">
            <p style="max-width: 360px">Some text content...<br>
                <a href="https://evotor.ru" target="_blank">Some link</a>
            </p>
            <p popover-body>Some popover text...<br>
                <a href="https://evotor.ru" target="_blank">Some link</a>
            </p>
        </evo-popover>`,
})
class TestHostComponent {
    @ViewChild(EvoPopoverComponent)
    public popoverComponent: EvoPopoverComponent;
    delay = undefined;
}

describe('EvoPopoverComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
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
        tipEl = testHostFixture.nativeElement.querySelector('.evo-popover__tip');
    });

    it('should not be visible after construction', () => {
        expect(testHostComponent.popoverComponent.show).toBeFalsy();
    });

    it('should display content when hovered', () => {
        testHostComponent.popoverComponent.onEnter();
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

    it(`should have attribute '[x-placement="${position}"]'`, () => {
        testHostComponent.popoverComponent.onEnter();
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector('.evo-popover__tip').getAttribute('x-placement'))
            .toEqual(position);
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
});
