import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface PageEvent {
    currentPage: number;
    previousPage: number;
    pageSize: number;
    pagesTotal: number;
}

const MIN_VISIBLE_PAGES_LIMIT = 5;
const DEFAULT_VISIBLE_PAGES_LIMIT = 7;
const DEFAULT_PAGE_SIZE = 10;

@Component({
    selector: 'evo-paginator',
    templateUrl: './evo-paginator.component.html',
    styleUrls: ['./evo-paginator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoPaginatorComponent {
    @Output() pageClick = new EventEmitter<PageEvent>();

    pagesTotal = 1;
    hasMinPage = false;
    hasMaxPage = false;
    visiblePagesLimit = DEFAULT_VISIBLE_PAGES_LIMIT;
    pagesList = [1];

    private pageSize = DEFAULT_PAGE_SIZE;
    private itemsTotal = 0;
    private currentPage = 1; // starts with 1

    @Input('currentPage') set setCurrentPage(value: string | number) {
        this.currentPage = parseInt(value as string, 10) || 1;
    }

    @Input('itemsTotal') set setItemsTotal(itemsTotal: number) {
        this.itemsTotal = itemsTotal > 0 ? itemsTotal : 0;
        this.updatePagesList();
    }

    @Input('pageSize') set setPageSize(pageSize: number) {
        this.pageSize = pageSize > 0 ? pageSize : 10;
        this.updatePagesList();
    }

    @Input('visiblePagesLimit') set setMaxVisiblePages(visiblePagesLimit: number) {
        if (!visiblePagesLimit) {
            return;
        }
        let valueToSet = visiblePagesLimit;
        if (visiblePagesLimit % 2 === 0 || visiblePagesLimit < MIN_VISIBLE_PAGES_LIMIT) {
            console.warn(`evo-paginator: visiblePagesLimit MUST be a positive odd number. Minimal value is ${ MIN_VISIBLE_PAGES_LIMIT }. The Component will use default value (${ DEFAULT_VISIBLE_PAGES_LIMIT }) instead of your value (${ visiblePagesLimit })`);
            valueToSet = DEFAULT_VISIBLE_PAGES_LIMIT;
        }
        this.visiblePagesLimit = valueToSet;
        this.updatePagesList();
    }

    onPageClick(page: number): void {
        if (page === this.currentPage) {
            return;
        }

        const payload: PageEvent = {
            currentPage: page,
            previousPage: this.currentPage,
            pageSize: this.pageSize,
            pagesTotal: this.pagesTotal,
        };
        this.currentPage = page;
        this.pageClick.emit(payload);
        this.updatePagesList();
    }

    isActivePage(page: string | number): boolean {
        return parseInt(page as string, 10) === this.currentPage;
    }

    private updatePagesList(): void {
        this.pagesList = [];
        this.pagesTotal = Math.ceil(this.itemsTotal / this.pageSize) || 1;

        const halfVisible = (this.visiblePagesLimit - 1) / 2;

        if (this.currentPage > this.pagesTotal) {
            return;
        }

        const createPagesList = (total: number, getItem: (index: number) => number) => {
            for (let index = 0; index < total; index++) {
                this.pagesList.push(getItem(index));
            }
        };

        if (this.pagesTotal <= this.visiblePagesLimit) {
            this.hasMinPage = false;
            this.hasMaxPage = false;
            return createPagesList(this.pagesTotal, (index) => index + 1);
        }

        if (this.currentPage - 1 < halfVisible) {
            this.hasMinPage = false;
            this.hasMaxPage = true;
            return createPagesList(this.visiblePagesLimit - 1, (index) => index + 1);
        }

        if (this.currentPage >= this.pagesTotal - halfVisible) {
            this.hasMinPage = true;
            this.hasMaxPage = false;
            return createPagesList(this.visiblePagesLimit - 1, (index) => index + this.pagesTotal - halfVisible - 1);
        }

        this.hasMinPage = true;
        this.hasMaxPage = true;
        return createPagesList(this.visiblePagesLimit - 2, (index) => index + this.currentPage - halfVisible + 1);
    }
}
