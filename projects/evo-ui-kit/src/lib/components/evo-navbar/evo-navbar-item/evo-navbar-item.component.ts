import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ConnectedPosition} from '@angular/cdk/overlay';
import {EvoDropdownOriginDirective} from '../../evo-dropdown';
import {NavItem} from '../types/nav-item';
import {EvoDropdownComponent} from '../../evo-dropdown/evo-dropdown.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {EvoDropdownOriginDirective as EvoDropdownOriginDirective_1} from '../../evo-dropdown/evo-dropdown-origin.directive';
import {NgFor, NgIf, NgTemplateOutlet} from '@angular/common';
import {EvoLetDirective} from '../../../directives/evo-let/evo-let.directive';

@Component({
    selector: 'evo-navbar-item',
    templateUrl: './evo-navbar-item.component.html',
    styleUrls: ['./evo-navbar-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        EvoLetDirective,
        NgIf,
        EvoDropdownOriginDirective_1,
        NgTemplateOutlet,
        RouterLink,
        RouterLinkActive,
        EvoDropdownComponent,
        NgFor,
    ],
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
