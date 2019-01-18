import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[evoClickOutside]',
})
export class EvoClickOutsideDirective {
    constructor(private _elementRef: ElementRef) {
    }

    @Output()
    public evoClickOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', [ '$event', '$event.target' ])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        this.clickOrTouchOutside(event, targetElement);
    }

    @HostListener('document:touchstart', [ '$event', '$event.target' ])
    public onTouchStart(event: MouseEvent, targetElement: HTMLElement): void {
        this.clickOrTouchOutside(event, targetElement);
    }

    clickOrTouchOutside(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.evoClickOutside.emit(event);
        }
    }
}
