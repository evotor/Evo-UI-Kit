import { ElementRef } from '@angular/core';
export declare enum EvoButtonSizes {
    small = "small",
    large = "large",
}
export declare enum EvoButtonStyles {
    lined = "lined",
    darkblue = "darkblue",
    darkblueLined = "darkblue-lined",
    green = "green",
    greenlined = "green-lined",
    purple = "purple",
}
export declare class EvoButtonComponent {
    private elRef;
    color: EvoButtonStyles;
    size: EvoButtonSizes;
    disabled: boolean;
    loading: boolean;
    private _disabled;
    private _loading;
    constructor(elRef: ElementRef);
    readonly totalClasses: string[];
    readonly totalStyles: {
        [styleKey: string]: any;
    };
}
