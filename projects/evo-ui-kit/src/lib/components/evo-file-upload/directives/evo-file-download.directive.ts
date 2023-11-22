import {
    AfterViewInit,
    Directive,
    ElementRef,
    HostListener,
    Input
} from '@angular/core';

@Directive({
    selector: 'a[evoFileDownload]'
})
export class EvoFileDownloadDirective implements AfterViewInit {
    @Input() downloadLabel: string;

    constructor(private readonly element: ElementRef<HTMLAnchorElement>) {}

    ngAfterViewInit(): void {
        const anchor = this.element.nativeElement;

        if (anchor.href) {
            anchor.download = this.downloadLabel;
            anchor.target = '_blank';
        }
    }

    @HostListener('document:click', ['$event']) onClick(
        event: PointerEvent
    ): void {
        if (!this.element.nativeElement.href) {
            event.preventDefault();
        }
    }
}
