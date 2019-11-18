import { Component, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Serializable } from '../../common/Serializable';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { CSS_BREAKPOINTS } from '../../common/constants';
import { async } from 'rxjs/internal/scheduler/async';

export enum EvoBannerTypes {
    large = 'large',
    small = 'small',
    fullWidth = 'full-width',
}

export enum EvoBannerLocations {
    main = 'Main',
    category = 'Category',
}

export class EvoBanner extends Serializable {
    background: string;
    bannerPositionNames = {
        [EvoBannerLocations.main]: [
            'main',
            'top',
            'bottom',
        ],
        [EvoBannerLocations.category]: [
            'main',
        ],
    };
    button: string;
    id: string;
    image: string;
    title: string;
    url: string;

    constructor(data) {
        super(data);
    }
}

@Component({
    selector: 'evo-banner',
    templateUrl: './evo-banner.component.html',
    styleUrls: ['./evo-banner.component.scss'],
    providers: [
        {provide: 'Window', useValue: window},
    ],
})
export class EvoBannerComponent implements OnInit, OnDestroy {
    @Input() banner: EvoBanner;
    @Input() type: EvoBannerTypes = EvoBannerTypes.small;

    @Output() bannerClick: EventEmitter<EvoBanner> = new EventEmitter<EvoBanner>();

    bannerSize$: BehaviorSubject<string[]> = new BehaviorSubject(['']);

    subscriptions: {[name: string]: Subscription} = {};

    constructor(
        @Inject('Window') private window: any,
        private el: ElementRef,
    ) {
        this.initResizeEvent();
    }

    ngOnInit() {
        this.onResize();
    }

    ngOnDestroy() {
        Object.keys(this.subscriptions).forEach((key) => {
            this.subscriptions[key].unsubscribe();
        });
    }

    onBannerClick() {
        this.bannerClick.emit(this.banner);
    }

    get bannerClass() {
        const result = [];

        if (this.type) {
            result.push(this.type);
        }

        if (this.bannerSize$.getValue()) {
            result.push(...this.bannerSize$.getValue());
        }

        return result;
    }

    private initResizeEvent() {
        this.subscriptions['resize'] = fromEvent(window, 'resize')
            .pipe(
                throttleTime(300, async, {trailing: true}),
            )
            .subscribe(() => {
                this.onResize();
            });
    }

    private onResize() {
        if (!this.el.nativeElement) {
            return;
        }

        const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();

        if (!rect) {
            return;
        }

        const width = rect.width + 30; // grid double gap

        if (width <= CSS_BREAKPOINTS.mobile) {
            this.bannerSize$.next(['size-mobile']);
        } else if (width < CSS_BREAKPOINTS.tablet) {
            this.bannerSize$.next(['size-tablet']);
        } else if (width < CSS_BREAKPOINTS.desktopS) {
            this.bannerSize$.next(['size-desktop', 'size-desktop-s']);
        } else {
            this.bannerSize$.next(['size-desktop']);
        }
    }
}
