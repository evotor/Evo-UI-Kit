import { AfterViewInit, Component, OnInit, ElementRef, HostListener, Inject, Input, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { WINDOW } from '../../services/window.service';
import { DOCUMENT } from '@angular/common';

/**
 * scroll - [default] link type with auto scroll to section on the same page
 * outer - outer link (not accesible with router)
 * router - router type link
 */
export enum EvoSubmenuType {
    scroll,
    outer,
    router,
}

export interface EvoSubmenuItem {
    title: string;
    href: string;
    type?: EvoSubmenuType; // if menuType === scroll, this property is ignored (for now)
    target?: string; // used only for outer type
    isActive?: boolean; // used only for outer type
    index?: number;
    scrollOffset?: number;
    scrollDuration?: number;
}

@Component({
    selector: 'evo-submenu',
    templateUrl: './evo-submenu.component.html',
    styleUrls: [
        './evo-submenu.component.scss',
    ],
})
export class EvoSubmenuComponent implements OnInit, AfterViewInit {
    get items(): EvoSubmenuItem[] {
        return this._items;
    }

    @Input() menuType: EvoSubmenuType = EvoSubmenuType.scroll;
    @Input() offsetLeft = false;

    @Input() set items(items: EvoSubmenuItem[]) {
        this._items = items;
        if (this.menuType === EvoSubmenuType.scroll) {
            this.calculateActiveItemIndex();
        }
    }

    @ViewChild('container') container: ElementRef;

    isFloated = false;
    activeItemIndex = 0;
    evoSubmenuType = EvoSubmenuType;

    private _items: EvoSubmenuItem[] = [];

    private headerHeight: number;
    private submenuOffset = 0;
    private isWindowResize = false;
    private header: Element | null;

    constructor(
        protected elRef: ElementRef,
        @Inject(WINDOW) protected window: any,
        @Inject(DOCUMENT) protected document: any,
    ) {
    }

    ngOnInit() {
    }

    @HostListener('window:resize', [])
    onWindowResize() {
        if (this.menuType === EvoSubmenuType.scroll) {
            this.isWindowResize = true;
            this.submenuOffset = this.elRef.nativeElement.offsetTop;
            this.onWindowScroll();
        }
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (this.menuType === EvoSubmenuType.scroll) {
            this.submenuOffset = this.elRef.nativeElement.offsetTop;
            this.isFloated = this.window.pageYOffset + this.headerHeight >= this.submenuOffset;
            this.calculateActiveItemIndex();
        }
    }

    ngAfterViewInit() {
        if (this.menuType === EvoSubmenuType.scroll) {
            this.submenuOffset = this.elRef.nativeElement.offsetTop;
            this.header = this.document.querySelector('evo-header');
            if (this.header) {
                this.headerHeight = this.header.getBoundingClientRect().height;
            }
            this.onWindowScroll();
        }
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
            of({}).pipe(
                delay(0),
            ).subscribe(() => {
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
