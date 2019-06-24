import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

export interface PageEvent {
  length: number;
  pageIndex: number;
  pageSize: number;
  previousPageIndex: number;
}

@Component({
  selector: 'evo-paginator',
  templateUrl: './evo-paginator.component.html',
  styleUrls: ['./evo-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoPaginatorComponent implements OnChanges {
  @Output() page = new EventEmitter<PageEvent>();

  @Input() pageSize: number;
  @Input() pageIndex: number;
  @Input() length: number;

  public pages: number[] = [];

  ngOnChanges() {
    const pages = [];

    for (let i = 0; i * this.pageSize < this.length; i++) {
      pages.push(i + 1);
    }

    this.pages = pages;
  }

  hasPreviousPage() {
    return this.pageIndex > 0;
  }

  hasNextPage() {
    return this.pageIndex < this.pages.length - 1;
  }

  trackByIndex(i: number) {
    return i;
  }

  changePage(newPageIndex: number) {
    if (this.pageIndex === newPageIndex) {
      return;
    }

    this.page.emit({
      length: this.length,
      pageIndex: newPageIndex,
      pageSize: this.pageSize,
      previousPageIndex: this.pageIndex,
    });
  }
}
