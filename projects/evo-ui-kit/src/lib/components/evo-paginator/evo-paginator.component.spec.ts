import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, EventEmitter, ViewChild} from '@angular/core';
import {By} from '@angular/platform-browser';
import {EvoPaginatorComponent, PageEvent} from "./index";

@Component({
    // eslint-disable-next-line:component-selector
    selector: 'app-host',
    template: `
        <evo-paginator
            [itemsTotal]="itemsTotal"
            [currentPage]="currentPage"
            [pageSize]="pageSize"
            (pageClick)="page.emit($event)"
        />
    `,
    standalone: true,
    imports: [EvoPaginatorComponent],
})
class HostComponent {
    @ViewChild(EvoPaginatorComponent) component: EvoPaginatorComponent;
    page = new EventEmitter<PageEvent>();

    pageSize: number;
    currentPage: number;
    itemsTotal: number;
}

describe('EvoPaginatorComponent', (): void => {
    let hostComponent: HostComponent;
    let fixture: ComponentFixture<HostComponent>;
    const selectPages = By.css('.paginator__btn');
    const selectSeparators = By.css('.paginator__separator');

    const PAGE_SIZE = 5;
    const ITEMS_TOTAL = 21;

    beforeEach((): void => {
        TestBed.configureTestingModule({
            imports: [EvoPaginatorComponent, HostComponent],
        });
    });

    beforeEach((): void => {
        fixture = TestBed.createComponent(HostComponent);
        hostComponent = fixture.componentInstance;

        hostComponent.pageSize = PAGE_SIZE;
        hostComponent.itemsTotal = ITEMS_TOTAL;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(hostComponent).toBeTruthy();
    });

    it('should calculate pages based on pageSize and itemsTotal (3)', (): void => {
        hostComponent.pageSize = 1;
        hostComponent.itemsTotal = 3;
        hostComponent.currentPage = 1;

        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(selectPages).length).toBe(3);
    });

    it('should calculate pages and layout based on pageSize, itemsTotal and currentPage (5, 1000, 1)', (): void => {
        hostComponent.itemsTotal = 1000;
        hostComponent.pageSize = 5;
        hostComponent.currentPage = 1;

        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(selectPages).length).toBe(5);
        expect(fixture.debugElement.queryAll(selectSeparators).length).toBe(1);
    });

    it('should properly calculate pages when length is dividable to page size', (): void => {
        hostComponent.pageSize = 10;
        hostComponent.itemsTotal = 20;
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(selectPages).length).toBe(2);
    });

    it('should have pages label 1-based', (): void => {
        const pageElement = fixture.debugElement.query(selectPages).nativeElement as HTMLDivElement;
        expect(pageElement.innerText).toBe('1');
    });

    it('should highlight active page', (): void => {
        hostComponent.currentPage = 2;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);

        expect((pageElements[0].nativeElement as HTMLElement).classList.contains('paginator__btn_selected')).toBeFalsy();
        expect((pageElements[1].nativeElement as HTMLElement).classList.contains('paginator__btn_selected')).toBeTruthy();
    });

    it('should use short layout', (): void => {
        hostComponent.itemsTotal = 4;
        hostComponent.currentPage = 1;
        hostComponent.pageSize = 1;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);

        expect(pageElements.length).toBe(4);
    });

    it('should use beginnings layout', (): void => {
        hostComponent.itemsTotal = 15;
        hostComponent.currentPage = 1;
        hostComponent.pageSize = 1;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);
        const separatorsElements = fixture.debugElement.queryAll(selectSeparators);

        expect(pageElements.length).toBe(5);
        expect(separatorsElements.length).toBe(1);
        expect(pageElements[0].nativeElement.innerText).toBe('1');
        expect(pageElements[pageElements.length - 2].nativeElement.innerText).toBe('4');
        expect(pageElements[pageElements.length - 1].nativeElement.innerText).toBe('15');
    });

    it('should use middle layout', (): void => {
        hostComponent.itemsTotal = 15;
        hostComponent.currentPage = 7;
        hostComponent.pageSize = 1;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);
        const separatorsElements = fixture.debugElement.queryAll(selectSeparators);

        expect(pageElements.length).toBe(5);
        expect(separatorsElements.length).toBe(2);
        expect(pageElements[0].nativeElement.innerText).toBe('1');
        expect(pageElements[2].nativeElement.innerText).toBe('7');
        expect(pageElements[pageElements.length - 1].nativeElement.innerText).toBe('15');
    });

    it('should use ending layout', (): void => {
        hostComponent.itemsTotal = 15;
        hostComponent.currentPage = 15;
        hostComponent.pageSize = 1;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);
        const separatorsElements = fixture.debugElement.queryAll(selectSeparators);

        expect(pageElements.length).toBe(5);
        expect(separatorsElements.length).toBe(1);
        expect(pageElements[0].nativeElement.innerText).toBe('1');
        expect(pageElements[1].nativeElement.innerText).toBe('12');
        expect(pageElements[pageElements.length - 1].nativeElement.innerText).toBe('15');
    });

    it('should change layout by currentPage', (): void => {
        hostComponent.itemsTotal = 20;
        hostComponent.pageSize = 1;

        // BEGINNING LAYOUT
        hostComponent.currentPage = 1;
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(selectPages).length).toBe(5);
        expect(fixture.debugElement.queryAll(selectPages)[1].nativeElement.innerText).toBe('2');
        expect(fixture.debugElement.queryAll(selectSeparators).length).toBe(1);

        // MIDDLE LAYOUT
        hostComponent.currentPage = 5;
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(selectPages).length).toBe(5);
        expect(fixture.debugElement.queryAll(selectPages)[1].nativeElement.innerText).toBe('4');
        expect(fixture.debugElement.queryAll(selectSeparators).length).toBe(2);

        // END LAYOUT
        hostComponent.currentPage = 20;
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(selectPages).length).toBe(5);
        expect(fixture.debugElement.queryAll(selectPages)[1].nativeElement.innerText).toBe('17');
        expect(fixture.debugElement.queryAll(selectSeparators).length).toBe(1);
    });

    describe('Output Events', (): void => {
        let eventHandler: jasmine.Spy;
        beforeEach((): void => {
            eventHandler = jasmine.createSpy('eventHandler');
            hostComponent.page.subscribe(eventHandler);
        });

        it('should emit event when click on any page', (): void => {
            const NEW_PAGE = 3;
            hostComponent.currentPage = 1;
            fixture.detectChanges();

            const pages = fixture.debugElement.queryAll(selectPages);
            pages[NEW_PAGE - 1].triggerEventHandler('click', {});

            expect(eventHandler).toHaveBeenCalledTimes(1);
            expect(eventHandler).toHaveBeenCalledWith({
                currentPage: NEW_PAGE,
                previousPage: 1,
                pageSize: PAGE_SIZE,
                pagesTotal: Math.ceil(ITEMS_TOTAL / PAGE_SIZE),
            });
        });

        it('should NOT emit event when click on active page', (): void => {
            hostComponent.currentPage = 1;
            fixture.detectChanges();

            const pages = fixture.debugElement.queryAll(selectPages);
            pages[0].triggerEventHandler('click', {});

            expect(eventHandler).not.toHaveBeenCalled();
        });
    });
});
