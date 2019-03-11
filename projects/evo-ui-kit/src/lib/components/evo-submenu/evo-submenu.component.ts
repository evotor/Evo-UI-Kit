import { AfterViewInit, Component, OnInit, ElementRef, HostListener, Inject, Input, ViewChild } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import { WINDOW } from '../../services/window.service';
import { DOCUMENT } from '@angular/common';

export interface EvoSubmenuItem {
    title: string;
    href: string;
    index?: number;
    scrollOffset?: number;
    scrollDuration?: number;
}

@Component({
    selector: 'evo-submenu',
    templateUrl: './evo-submenu.component.html',
    styleUrls: [ './evo-submenu.component.scss' ],
})
export class EvoSubmenuComponent implements OnInit, AfterViewInit {
    get items(): EvoSubmenuItem[] {
        return this._items;
    }

    @Input() set items(items: EvoSubmenuItem[]) {
        this._items = items;
        this.calculateActiveItemIndex();
    }

    @Input() offsetLeft = false;
    @ViewChild('container') container: ElementRef;
    isFloated = false;
    activeItemIndex = 0;
    private headerHeight: number;
    private submenuOffset = 0;
    private isWindowResize = false;

    private _items: EvoSubmenuItem[] = [];

    constructor(protected elRef: ElementRef,
        @Inject(WINDOW) private window: any,
        @Inject(DOCUMENT) protected document: any) {
    }

    ngOnInit() {}

    ngAfterViewInit() {
        this.submenuOffset = this.elRef.nativeElement.offsetTop;
        const headerElement = this.document.querySelector('ng-evo-header');
        this.headerHeight = headerElement ? headerElement.getBoundingClientRect().height : 0;
        this.onWindowScroll();
    }

    @HostListener('window:resize', [])
    onWindowResize() {
        this.isWindowResize = true;
        this.submenuOffset = this.elRef.nativeElement.offsetTop;
        this.onWindowScroll();
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.submenuOffset = this.elRef.nativeElement.offsetTop;
        this.isFloated = this.window.pageYOffset + this.headerHeight >= this.submenuOffset;
        this.calculateActiveItemIndex();
    }

    private calculateActiveItemIndex() {
        let newIndex;
        const {documentElement} = this.document;

        if (documentElement.clientHeight + documentElement.scrollTop >= documentElement.scrollHeight) {
            newIndex = this.items.length - 1;
        } else {
            newIndex = this.items
                .map((item: EvoSubmenuItem) => {
                    const anchorSection = this.document.querySelector('#' + item.href);

                    if (anchorSection) {
                        return anchorSection.getBoundingClientRect().top - item.scrollOffset - 1;
                    }
                })
                .filter((value: number) => value < 0).length - 1;
        }

        if (this.isWindowResize || newIndex !== this.activeItemIndex) {
            this.activeItemIndex = newIndex;
            this.isWindowResize = false;

            //  Timeout to get correct container scrollWidth
            observableOf({}).pipe(delay(0)).subscribe(() => {
                this.checkHorizontalScroll();
            });
        }
    }

    private checkHorizontalScroll() {
        const container = this.container.nativeElement;

        if (container.scrollWidth > container.clientWidth) {
            const items = container.querySelectorAll('.evo-submenu__item');
            const item = items ? items[this.activeItemIndex] : null;

            if (item) {
                const itemOffset = item.getBoundingClientRect().left;

                if (itemOffset >= 0) {
                    if (item.clientWidth + itemOffset > container.clientWidth) {
                        container.scroll({
                            left: container.scrollLeft + item.clientWidth + itemOffset - container.clientWidth,
                            behavior: 'smooth',
                        });
                    }
                } else {
                    container.scroll({
                        left: container.scrollLeft + itemOffset,
                        behavior: 'smooth',
                    });
                }
            } else {
                container.scroll({
                    left: 0,
                    behavior: 'smooth',
                });
            }
        }
    }

}
