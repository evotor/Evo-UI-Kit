import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'evo-popover',
    templateUrl: 'evo-popover.component.html',
    styleUrls: [ 'evo-popover.component.scss' ],
})
export class EvoPopoverComponent {

    /**
     * Расположение стрелки на media-tablet разрешении
     */
    @Input('media-tablet-position')
    mediaTabletPosition: 'right' | 'left' | 'center' = 'center';

    /**
     * Расположение стрелки
     */
    @Input('position')
    position: 'right' | 'left' | 'center' = 'center';

    hovered = false;

    private popoverVisibilityTimeout = false;

    @HostListener('mouseenter')
    onEnter() {
        this.show();
    }

    @HostListener('touchend')
    onTouchEnd() {
        this.show();
    }

    show(): void {
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

    getPositionClass(): { [ key: string ]: boolean } {
        const classes = {};
        classes[ 'media-tablet-' + this.position ] = true;
        classes[ 'position-' + this.mediaTabletPosition ] = true;
        return classes;
    }

    onClickOutside(event: any): void {
        this.hovered = false;
    }
}
