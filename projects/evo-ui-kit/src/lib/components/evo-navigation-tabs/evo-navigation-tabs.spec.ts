import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {EvoNavigationTabsComponent} from './evo-navigation-tabs.component';
import {EVO_TAB_ACTIVATE} from './evo-navigation-tab.directive';

@Component({
    template: `
        <evo-navigation-tabs
            [tabs]="tabs"
            [disabled]="disabled"
            [activeIndex]="activeIndex"
            (activeItemIndexChange)="onTabChange($event)"
        />
    `,
})
class TestHostComponent {
    tabs = [{label: 'Tab 1'}, {label: 'Tab 2'}, {label: 'Tab 3', disabled: true}];
    disabled = false;
    activeIndex = 0;
    selectedIndex: number | null = null;

    onTabChange(index: number): void {
        this.selectedIndex = index;
    }
}

describe('EvoNavigationTabsComponent', (): void => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;

    beforeEach(async (): Promise<void> => {
        await TestBed.configureTestingModule({
            declarations: [EvoNavigationTabsComponent, TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', (): void => {
        const component = fixture.debugElement.query(By.directive(EvoNavigationTabsComponent));
        expect(component).toBeTruthy();
    });

    it('should render all provided tabs', (): void => {
        const tabButtons = fixture.debugElement.nativeElement.querySelectorAll('[evoNavigationTab]');
        expect(tabButtons.length).toBe(hostComponent.tabs.length);
    });

    it('should emit activeItemIndexChange when tab is activated', (): void => {
        const mockEvent = new CustomEvent(EVO_TAB_ACTIVATE, {bubbles: true});
        const buttons = fixture.nativeElement.querySelectorAll('[evoNavigationTab]');
        const indexToActivate = 1;
        spyOn(hostComponent, 'onTabChange');

        buttons[indexToActivate].dispatchEvent(mockEvent);
        fixture.detectChanges();

        expect(hostComponent.onTabChange).toHaveBeenCalledWith(indexToActivate);
    });

    it('should set activeIndex via Input and apply _active class', (): void => {
        hostComponent.activeIndex = 1;
        fixture.detectChanges();

        const buttons = fixture.nativeElement.querySelectorAll('[evoNavigationTab]');
        expect(buttons[1].classList).toContain('_active');
        expect(buttons[0].classList).not.toContain('_active');
    });

    it('should apply _all_disabled class and disable all tabs when disabled is true', (): void => {
        hostComponent.disabled = true;
        fixture.detectChanges();

        const buttons: HTMLButtonElement[] = fixture.nativeElement.querySelectorAll('[evoNavigationTab]');
        buttons.forEach((button: HTMLButtonElement): void => {
            expect(button.hasAttribute('disabled')).toBeTrue();
        });
    });

    it('should have default size as normal', (): void => {
        const componentInstance = fixture.debugElement.query(
            By.directive(EvoNavigationTabsComponent),
        ).componentInstance;
        expect(componentInstance.size).toBe('normal');
    });

    it('should accept and set size input', (): void => {
        const componentInstance = fixture.debugElement.query(
            By.directive(EvoNavigationTabsComponent),
        ).componentInstance;
        componentInstance.size = 'compact';
        fixture.detectChanges();
        expect(componentInstance.size).toBe('compact');
    });

    it('should apply _active class to the selected tab', (): void => {
        const buttons = fixture.nativeElement.querySelectorAll('[evoNavigationTab]');
        const activeButton = buttons[hostComponent.activeIndex];
        expect(activeButton.classList).toContain('_active');
    });
});
