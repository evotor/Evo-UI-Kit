import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { EvoPopoverComponent, EvoUiClassDirective } from '../../evo-ui-kit.module';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'evo-host-component',
    template: `
    <evo-popover [position]="'right'" [media-tablet-position]="'left'">
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
}

describe('EvoPopoverComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EvoPopoverComponent, TestHostComponent, EvoUiClassDirective ],
        }).compileComponents();
    }));

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
    });

    it('should not be hovered after construction', () => {
        expect(testHostComponent.popoverComponent.hovered).toBeFalsy();
    });

    it('should display content when hovered', () => {
        testHostComponent.popoverComponent.onEnter();
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector('[popover-body]')).toBeTruthy();
    });

    it('should hide content when mouse leave after 100ms', fakeAsync(() => {
        testHostComponent.popoverComponent.hovered = true;
        testHostComponent.popoverComponent.onLeave();
        tick(100);
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector('[popover-body]')).toBeFalsy();
    }));

    it(`should have class name 'plan-helper_position-right'`, () => {
        testHostComponent.popoverComponent.onEnter();
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector('.plan-helper').classList.contains('plan-helper_position-right'))
            .toBeTruthy();
    });

    it(`should have class name 'plan-helper_media-tablet-left'`, () => {
        testHostComponent.popoverComponent.onEnter();
        testHostFixture.detectChanges();
        expect(testHostFixture.nativeElement.querySelector('.plan-helper').classList.contains('plan-helper_media-tablet-left'))
            .toBeTruthy();
    });
});
