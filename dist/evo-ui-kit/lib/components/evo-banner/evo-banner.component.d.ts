import { EventEmitter } from '@angular/core';
import { Serializable } from '../../common/Serializable';
export declare enum EvoBannerTypes {
    large = "large",
    small = "small",
    fullWidth = "full-width",
}
export declare enum EvoBannerLocations {
    main = "Main",
    category = "Category",
}
export interface IEvoBannerAnalytics {
    url: string;
    data: {
        id: string;
        name: string;
        creative: string;
        position: string;
        dimension7?: string;
    };
}
export declare class EvoBanner extends Serializable {
    background: string;
    bannerPositionNames: {
        [EvoBannerLocations.main]: string[];
        [EvoBannerLocations.category]: string[];
    };
    button: string;
    id: string;
    image: string;
    title: string;
    url: string;
    constructor(data: any);
}
export declare class EvoBannerComponent {
    private window;
    banner: EvoBanner;
    type: EvoBannerTypes;
    bannerClick: EventEmitter<EvoBanner>;
    constructor(window: any);
    onBannerClick(): void;
}
