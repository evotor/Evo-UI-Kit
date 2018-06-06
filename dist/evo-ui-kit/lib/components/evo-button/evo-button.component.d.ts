import { ElementRef } from '@angular/core';
export declare enum EvoButtonSizes {
    fullWidth = "full-width",
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
    disabled: boolean;
    size: EvoButtonSizes;
    private _loading;
    private clientWidth;
    constructor(elRef: ElementRef);
    readonly totalClasses: string[];
    readonly totalStyles: {
        [styleKey: string]: any;
    };
    loading: boolean;
}
