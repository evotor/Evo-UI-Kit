import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ConnectedPosition} from '@angular/cdk/overlay';
import {EvoDropdownOriginDirective} from '../../evo-dropdown';
import {NavItem} from '../types/nav-item';

@Component({
    selector: 'evo-navbar-item',
    templateUrl: './evo-navbar-item.component.html',
    styleUrls: ['./evo-navbar-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoNavbarItemComponent {
    @Input() item!: NavItem;
    /**
     * Is a secondary link
     */
    @Input() isNested?: boolean;
    @Input() isMobileView?: boolean;
    @Input() subMenuPositions: ConnectedPosition[] = [
        {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
        },
    ];

    @Output() openSubMenu = new EventEmitter<EvoDropdownOriginDirective>();
    @Output() closeSubMenu = new EventEmitter<EvoDropdownOriginDirective>();

    toggle(origin: EvoDropdownOriginDirective) {
        if (origin.isDropdownOpen) {
            this.closeSubMenu.emit(origin);
        } else {
            this.openSubMenu.emit(origin);
        }
    }

    open(origin: EvoDropdownOriginDirective) {
        if (!origin.isDropdownOpen) {
            this.openSubMenu.emit(origin);
        }
    }

    close(origin: EvoDropdownOriginDirective) {
        if (origin.isDropdownOpen) {
            this.closeSubMenu.emit(origin);
        }
    }
}
