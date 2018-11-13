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

    // Флаг для закрытия по клику вне popover-а
    private canCloseByClickOutside = false;

    @HostListener('mouseover')
    onHover() {
        this.popoverVisibilityTimeout = false;
        this.hovered = true;
        // На мобильных девайсах сперва отрабатывает onHover() потом onClickOutside()
        // без тайм-аута popover сразу после открытия закроется
        setTimeout(() => {
            this.canCloseByClickOutside = true;
        }, 100);
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

    // Клик вне popover
    onClickOutside(event: any): void {
        if (this.canCloseByClickOutside) {
            this.hovered = false;
            this.canCloseByClickOutside = false;
        }
    }
}
