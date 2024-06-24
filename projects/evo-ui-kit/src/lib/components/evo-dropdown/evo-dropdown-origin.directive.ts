import {ChangeDetectorRef, Directive, ElementRef} from '@angular/core';
import {CdkOverlayOrigin} from '@angular/cdk/overlay';

@Directive({
    selector: '[evoDropdownOrigin]',
    exportAs: 'evoDropdownOrigin',
    standalone: true,
})
export class EvoDropdownOriginDirective extends CdkOverlayOrigin {
    get isDropdownOpen(): boolean {
        return this._isDropdownOpen;
    }

    set isDropdownOpen(value: boolean) {
        this._isDropdownOpen = value;
        this.cdr.markForCheck();
    }
    private _isDropdownOpen = false;

    constructor(
        private readonly cdr: ChangeDetectorRef,
        elementRef: ElementRef,
    ) {
        super(elementRef);
    }

    open(): void {
        this.isDropdownOpen = true;
    }

    close(): void {
        this.isDropdownOpen = false;
    }

    toggle(): void {
        if (this.isDropdownOpen) {
            this.close();
        } else {
            this.open();
        }
    }
}
