import { Directive, ElementRef, Input, IterableDiffers, KeyValueDiffers, Renderer2 } from '@angular/core';
import { NgClass } from '@angular/common';

const isObject = (item) => item != null && typeof item === 'object';
const isString = (item) => typeof item === 'string';
const isArray = (item) => Array.isArray(item);
const isUndefined = (item) => typeof item === 'undefined';

@Directive({
    selector: '[evoUiClass]',
})
export class EvoUiClassDirective extends NgClass {
    @Input('evoUiClass')
    set setterOfClass(data: any) {
        if (isArray(data)) {
            data = data.map((className: string) => `${this.prefix}_${className}`);
        } else if (isObject(data)) {
            data = Object.keys(data).reduce((newData: any, key: string) => {
                newData[ `${this.prefix}_${key}` ] = data[ key ];
                return newData;
            }, {});
        } else if (isString(data)) {
            data = data
                .split(' ')
                .map((myClass) => `${this.prefix}_${myClass}`)
                .join(' ');
        } else if (isUndefined(data)) {
            data = '';
        } else {
            throw new Error('Data type not allowed!');
        }

        this.ngClass = data;
    }

    ngClass: any;

    private prefix: string;

    constructor(_iterableDiffers: IterableDiffers, _keyValueDiffers: KeyValueDiffers,
                _ngEl: ElementRef, _renderer: Renderer2) {
        super(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer);
        this.prefix = _ngEl.nativeElement.classList[ 0 ];
    }
}
