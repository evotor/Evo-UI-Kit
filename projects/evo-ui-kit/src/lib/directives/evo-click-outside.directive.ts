import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: '[evoClickOutside]',
    standalone: true,
})
export class EvoClickOutsideDirective {
    @Output()
    evoClickOutside = new EventEmitter();

    constructor(private readonly _elementRef: ElementRef) {}

    @HostListener('document:click', ['$event', '$event.target'])
    onClick<T extends MouseEvent, F extends HTMLElement>(event: T, targetElement: F) {
        this.clickOrTouchOutside(event, targetElement);
    }

    @HostListener('document:touchstart', ['$event', '$event.target'])
    onTouchStart<T extends MouseEvent, F extends HTMLElement>(event: T, targetElement: F) {
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
