import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[evoClickOutside]',
})
export class EvoClickOutsideDirective {

    @Output()
    public evoClickOutside = new EventEmitter();

    constructor(private _elementRef: ElementRef) {
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick<T extends MouseEvent, F extends HTMLElement>(event: T, targetElement: F) {
        this.clickOrTouchOutside(event, targetElement);
    }

    @HostListener('document:touchstart', ['$event', '$event.target'])
    public onTouchStart<T extends MouseEvent, F extends HTMLElement>(event: T, targetElement: F) {
        this.clickOrTouchOutside(event, targetElement);
    }

    clickOrTouchOutside<T extends MouseEvent, F extends HTMLElement>(event: T, targetElement: F) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.evoClickOutside.emit(event);
        }
    }
}
