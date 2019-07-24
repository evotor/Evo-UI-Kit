import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

export interface PageEvent {
    currentPage: number;
    previousPage: number;
    pageSize: number;
    pagesTotal: number;
}

// use only number please
const PAGES_VISIBLE = 5;

@Component({
    selector: 'evo-paginator',
    templateUrl: './evo-paginator.component.html',
    styleUrls: ['./evo-paginator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoPaginatorComponent {
    @Output() pageClick = new EventEmitter<PageEvent>();

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

    pagesTotal = 1;
    hasMinPage = false;
    hasMaxPage = false;

    pagesList = [1];

    protected pageSize = 10;
    protected itemsTotal = 0;
    protected currentPage = 1; // starts with 1

    onPageClick(page: number) {
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

    isActivePage(page: string | number) {
        return parseInt(page as string, 10) === this.currentPage;
    }

    protected updatePagesList() {
        this.pagesList = [];
        this.pagesTotal = Math.ceil(this.itemsTotal / this.pageSize) || 1;

        const halfVisible = (PAGES_VISIBLE - 1) / 2;

        if (this.currentPage > this.pagesTotal) {
            return;
        }

        const createPagesList = (total: number, getItem: (index: number) => number) => {
            for (let index = 0; index < total; index++) {
                this.pagesList.push(getItem(index));
            }
        };

        if (this.pagesTotal <= PAGES_VISIBLE + 2) {
            this.hasMinPage = false;
            this.hasMaxPage = false;
            return createPagesList(this.pagesTotal, (index) => index + 1);
        }

        if (this.currentPage - 1 < halfVisible + 2) {
            this.hasMinPage = false;
            this.hasMaxPage = true;
            return createPagesList(PAGES_VISIBLE + 1, (index) => index + 1);
        }

        if (this.currentPage - 1 > this.pagesTotal - PAGES_VISIBLE) {
            this.hasMinPage = true;
            this.hasMaxPage = false;
            return createPagesList(PAGES_VISIBLE + 1, (index) => index + this.pagesTotal - PAGES_VISIBLE);
        }

        this.hasMinPage = true;
        this.hasMaxPage = true;
        return createPagesList(PAGES_VISIBLE, (index) => index + this.currentPage - halfVisible);
    }
}
