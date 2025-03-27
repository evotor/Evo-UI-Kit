import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {EvoLetDirective} from "../../directives";

export interface PageEvent {
    currentPage: number;
    previousPage: number;
    pageSize: number;
    pagesTotal: number;
}

enum PaginatorLayout {
    SHORT = 'SHORT',
    BEGINNING = 'BEGINNING',
    MIDDLE = 'MIDDLE',
    END = 'END',
}

const SHORT_STATE_PAGES_LIMIT = 5;
const CORNER_STATE_PAGE_MAX_OFFSET = 3;

const DEFAULT_PAGE_SIZE = 10;

@Component({
    selector: 'evo-paginator',
    templateUrl: './evo-paginator.component.html',
    styleUrls: ['./evo-paginator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgClass, EvoLetDirective, NgTemplateOutlet],
})
export class EvoPaginatorComponent {
    @Input('currentPage') set setCurrentPage(value: string | number) {
        this.currentPage = parseInt(value as string, 10) || 1;
    }

    @Input('itemsTotal') set setItemsTotal(itemsTotal: number) {
        this.itemsTotal = itemsTotal > 0 ? itemsTotal : 0;
        this.pagesTotal = Math.ceil(this.itemsTotal / this.pageSize) || 1;
    }

    @Input('pageSize') set setPageSize(pageSize: number) {
        this.pageSize = pageSize > 0 ? pageSize : 10;
        this.pagesTotal = Math.ceil(this.itemsTotal / this.pageSize) || 1;
    }

    @Output() pageClick = new EventEmitter<PageEvent>();

    currentPage = 1; // starts with 1
    pagesTotal = 1;

    readonly CORNER_STATE_PAGE_MAX_OFFSET = CORNER_STATE_PAGE_MAX_OFFSET;
    readonly PaginatorLayout = PaginatorLayout;

    private pageSize = DEFAULT_PAGE_SIZE;
    private itemsTotal = 0;

    get currentLayout(): PaginatorLayout {
        if (this.pagesTotal <= SHORT_STATE_PAGES_LIMIT) {
            return PaginatorLayout.SHORT;
        }

        // first CORNER_STATE_PAGE_MAX_OFFSET pages
        // ex: CORNER_STATE_PAGE_MAX_OFFSET = 3, currentPage = 1 | 2 | 3
        if (this.currentPage <= CORNER_STATE_PAGE_MAX_OFFSET) {
            return PaginatorLayout.BEGINNING;
        }

        // last CORNER_STATE_PAGE_MAX_OFFSET pages
        // ex: CORNER_STATE_PAGE_MAX_OFFSET = 3, pagesTotal = 100, currentPage = 98 | 99 | 100
        if (this.pagesTotal - this.currentPage < CORNER_STATE_PAGE_MAX_OFFSET) {
            return PaginatorLayout.END;
        }

        return PaginatorLayout.MIDDLE;
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
    }

    isSelectedPage(page: string | number): boolean {
        return parseInt(page as string, 10) === this.currentPage;
    }
}
