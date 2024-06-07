import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

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
    visiblePagesLimit = DEFAULT_VISIBLE_PAGES_LIMIT;
    pagesList = [1];
    private pageSize = DEFAULT_PAGE_SIZE;
    private itemsTotal = 0;
    private currentPage = 1; // starts with 1

    @Input('currentPage') set setCurrentPage(value: string | number) {
        this.currentPage = parseInt(value as string, 10) || 1;
        this.updatePagesList();
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
            console.warn(`evo-paginator: visiblePagesLimit MUST be a positive odd number. Minimal value is ${MIN_VISIBLE_PAGES_LIMIT}.
            The Component will use default value (${DEFAULT_VISIBLE_PAGES_LIMIT}) instead of your value (${visiblePagesLimit})`);
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
        const allPages = [...new Array(this.pagesTotal)].map((_, i) => i + 1);
        const halfVisible = (this.visiblePagesLimit - 1) / 2;
        const pagesOnSides = (this.visiblePagesLimit - 2 - 1) / 2;

        const lastPageNumber = allPages.length;
        if (this.currentPage > this.pagesTotal) {
            return;
        }

        this.pagesList = allPages.filter((p, i) => {
            // is boundary value (always visible)
            if (p === 1 || p === lastPageNumber || p === this.currentPage) {
                return true;
            }
            // start non-shiftable items, for example, when currentPage === 3: [1 2 (3)] 4 5 6 9
            if (this.currentPage <= halfVisible) {
                return p < this.visiblePagesLimit;
            }

            // end non-shiftable items, for example, when currentPage === 8: 1 4 5 6 [7 (8) 9]
            // in example above it is 4
            if (this.currentPage >= lastPageNumber - halfVisible) {
                return lastPageNumber - this.visiblePagesLimit < i;
            }

            // siblings, for example, when currentPage === 5: 1 [3 4] (5) [6 7] 9
            return (
                (p < this.currentPage && this.currentPage - pagesOnSides <= p) ||
                (p > this.currentPage && p <= this.currentPage + pagesOnSides)
            );
        });
    }
}
