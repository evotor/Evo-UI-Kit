import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Serializable } from '../../common/Serializable';

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
        [ EvoBannerLocations.main ]: [
            'main',
            'top',
            'bottom',
        ],
        [ EvoBannerLocations.category ]: [
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
    styleUrls: [ './evo-banner.component.scss' ],
    providers: [
        { provide: 'Window', useValue: window },
    ],
})
export class EvoBannerComponent {
    @Input() banner: EvoBanner;
    @Input() type: EvoBannerTypes = EvoBannerTypes.small;

    @Output() bannerClick: EventEmitter<EvoBanner> = new EventEmitter<EvoBanner>();

    constructor(
        @Inject('Window') private window: any,
    ) {
    }

    onBannerClick() {
        this.bannerClick.emit(this.banner);
    }
}
