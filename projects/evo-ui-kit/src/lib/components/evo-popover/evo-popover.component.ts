import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'evo-popover',
    templateUrl: 'evo-popover.component.html',
    styleUrls: [ 'evo-popover.component.scss' ],
})
export class EvoPopoverComponent {

    /**
     * Отображать popover слева на media-tablet разрешении
     */
    @Input('media-tablet-left')
    mediaTabletLeft = false;

    /**
     * Отображать popover справа на media-tablet разрешении
     */
    @Input('media-tablet-right')
    mediaTabletRight = false;

    /**
     * Отображать popover всегда слева
     */
    @Input('position-left')
    positionLeft = false;

    /**
     * Отображать popover всегда справа
     */
    @Input('position-right')
    positionRight = false;

    hovered = false;

    private popoverVisibilityTimeout = false;

    @HostListener('mouseover')
    onHover() {
        this.popoverVisibilityTimeout = false;
        this.hovered = true;
    }

    @HostListener('mouseleave')
    onLeave() {
        this.popoverVisibilityTimeout = true;

        setTimeout(() => {
            if (this.popoverVisibilityTimeout) {
                this.hovered = false;
            }
        }, 100);
    }
}
