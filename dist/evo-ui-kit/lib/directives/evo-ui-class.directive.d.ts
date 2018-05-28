import { ElementRef, IterableDiffers, KeyValueDiffers, Renderer2 } from '@angular/core';
import { NgClass } from '@angular/common';
export declare class EvoUiClassDirective extends NgClass {
    setterOfClass: any;
    ngClass: any;
    private prefix;
    constructor(_iterableDiffers: IterableDiffers, _keyValueDiffers: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer2);
}
