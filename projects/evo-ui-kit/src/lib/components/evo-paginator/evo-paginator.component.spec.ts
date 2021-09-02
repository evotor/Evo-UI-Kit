import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, EventEmitter, ViewChild } from '@angular/core';
import { EvoPaginatorModule } from './evo-paginator.module';
import { EvoPaginatorComponent, PageEvent } from './evo-paginator.component';
import { By } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-host',
    template: `
        <evo-paginator
            [itemsTotal]="itemsTotal"
            [currentPage]="currentPage"
            [pageSize]="pageSize"
            [visiblePagesLimit]="visiblePagesLimit"
            (pageClick)="page.emit($event)"
        ></evo-paginator>
    `,
})
class HostComponent {
    @ViewChild(EvoPaginatorComponent) component: EvoPaginatorComponent;
    page = new EventEmitter<PageEvent>();

    pageSize: number;
    currentPage: number;
    itemsTotal: number;
    visiblePagesLimit: number;
}

describe('EvoPaginatorComponent', () => {
    let hostComponent: HostComponent;
    let fixture: ComponentFixture<HostComponent>;
    const selectPages = By.css('.page');

    const PAGE_SIZE = 5;
    const ITEMS_TOTAL = 21;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [EvoPaginatorModule],
            declarations: [HostComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
        hostComponent = fixture.componentInstance;

        hostComponent.pageSize = PAGE_SIZE;
        hostComponent.itemsTotal = ITEMS_TOTAL;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(hostComponent).toBeTruthy();
    });

    it('should calculate pages based on pageSize and itemsTotal (3)', () => {
        hostComponent.pageSize = 1;
        hostComponent.itemsTotal = 3;
        hostComponent.currentPage = 1;

        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(selectPages).length).toBe(3);
    });

    it('should calculate pages based on pageSize and itemsTotal (1000 / 3)', () => {
        hostComponent.itemsTotal = 1000;
        hostComponent.pageSize = 5;

        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(selectPages).length).toBe(7);
    });

    it('should properly calculate pages when length is dividable to page size', () => {
        hostComponent.pageSize = 10;
        hostComponent.itemsTotal = 20;
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(selectPages).length).toBe(2);
    });

    it('should have pages label 1-based', () => {
        const pageElement = fixture.debugElement.query(selectPages).nativeElement as HTMLDivElement;
        expect(pageElement.innerText).toBe('1');
    });

    it('should highlight active page', () => {
        hostComponent.currentPage = 2;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);

        expect((pageElements[0].nativeElement as HTMLElement).classList.contains('page_active')).toBeFalsy();
        expect((pageElements[1].nativeElement as HTMLElement).classList.contains('page_active')).toBeTruthy();
    });

    it('should hide first page and show last page', () => {
        hostComponent.itemsTotal = 15;
        hostComponent.currentPage = 1;
        hostComponent.pageSize = 1;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);

        expect((pageElements[0].nativeElement as HTMLElement).classList.contains('page_min')).toBeFalsy();
        expect((pageElements[pageElements.length - 1].nativeElement as HTMLElement).classList.contains('page_max')).toBeTruthy();
    });

    it('should show first page and last page', () => {
        hostComponent.itemsTotal = 15;
        hostComponent.currentPage = 7;
        hostComponent.pageSize = 1;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);

        expect((pageElements[0].nativeElement as HTMLElement).classList.contains('page_min')).toBeTruthy();
        expect((pageElements[pageElements.length - 1].nativeElement as HTMLElement).classList.contains('page_max')).toBeTruthy();
    });

    it('should show first page and hide last page', () => {
        hostComponent.itemsTotal = 15;
        hostComponent.currentPage = 15;
        hostComponent.pageSize = 1;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);

        expect((pageElements[0].nativeElement as HTMLElement).classList.contains('page_min')).toBeTruthy();
        expect((pageElements[pageElements.length - 1].nativeElement as HTMLElement).classList.contains('page_max')).toBeFalsy();
    });

    it('should show first 6 pages and last page for the first 4 pages', function () {
        hostComponent.itemsTotal = 20;
        hostComponent.currentPage = 1;
        hostComponent.pageSize = 1;

        const check = function () {
            fixture.detectChanges();
            const pageElements = fixture.debugElement.queryAll(selectPages);
            pageElements.forEach((pageElement: DebugElement, index) => {
                const el = pageElement.nativeElement as HTMLElement;
                if (index < 6) {
                    expect(el.classList.contains('page_min')).toBe(false);
                    expect(el.innerText).toBe(`${ index + 1 }`);
                } else {
                    expect(el.classList.contains('page_max')).toBe(true);
                }
            });
        };

        check();

        hostComponent.currentPage = 2;
        check();

        hostComponent.currentPage = 3;
        check();

        hostComponent.currentPage = 4;
        check();
    });

    it('should show first page and last 6 pages for the last 4 pages', function () {
        const pagesNumber = 20;
        const visiblePagesLimit = 7;
        hostComponent.itemsTotal = pagesNumber;
        hostComponent.currentPage = pagesNumber;
        hostComponent.pageSize = 1;
        hostComponent.visiblePagesLimit = visiblePagesLimit;

        const check = function () {
            fixture.detectChanges();
            const pageElements = fixture.debugElement.queryAll(selectPages);
            pageElements.forEach((pageElement: DebugElement, index) => {
                const el = pageElement.nativeElement as HTMLElement;
                if (index > 0) {
                    expect(el.classList.contains('page_max')).toBe(false);
                    expect(el.innerText).toBe(`${ pagesNumber - visiblePagesLimit + index + 1 }`);
                } else {
                    expect(el.classList.contains('page_min')).toBe(true);
                }
            });
        };

        check();

        hostComponent.currentPage = 19;
        check();

        hostComponent.currentPage = 18;
        check();

        hostComponent.currentPage = 17;
        check();
    });

    it('should limit visible pages by visiblePagesLimit (5)', () => {
        hostComponent.visiblePagesLimit = 5;
        hostComponent.itemsTotal = 10;
        hostComponent.currentPage = 1;
        hostComponent.pageSize = 1;

        fixture.detectChanges();
        const pageElements = fixture.debugElement.queryAll(selectPages);

        expect(pageElements.length).toBe(5);
    });

    it('should use default visible pages limit if visiblePagesLimit is even (10) or negative (-1), or not set (undefined)', () => {
        hostComponent.itemsTotal = 10;
        hostComponent.currentPage = 1;
        hostComponent.pageSize = 1;

        const DEFAULT_VISIBLE_PAGES_LIMIT = 7; // sync with component value
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(selectPages).length).toBe(DEFAULT_VISIBLE_PAGES_LIMIT);

        hostComponent.visiblePagesLimit = -1;
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(selectPages).length).toBe(DEFAULT_VISIBLE_PAGES_LIMIT);

        hostComponent.visiblePagesLimit = 10;
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(selectPages).length).toBe(DEFAULT_VISIBLE_PAGES_LIMIT);
    });

    describe('Output Events', () => {
        let eventHandler: jasmine.Spy;
        beforeEach(() => {
            eventHandler = jasmine.createSpy('eventHandler');
            hostComponent.page.subscribe(eventHandler);
        });

        it('should emit event when click on any page', () => {
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

        it('should NOT emit event when click on active page', () => {
            hostComponent.currentPage = 1;
            fixture.detectChanges();

            const pages = fixture.debugElement.queryAll(selectPages);
            pages[0].triggerEventHandler('click', {});

            expect(eventHandler).not.toHaveBeenCalled();
        });
    });
});
