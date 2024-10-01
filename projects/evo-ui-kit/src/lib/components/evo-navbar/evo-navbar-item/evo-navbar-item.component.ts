import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewChild} from '@angular/core';
import {ConnectedPosition} from '@angular/cdk/overlay';
import {EvoDropdownOriginDirective} from '../../evo-dropdown';
import {NavItem} from '../types/nav-item';
import {EvoDropdownComponent} from '../../evo-dropdown/evo-dropdown.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgFor, NgIf, NgTemplateOutlet} from '@angular/common';
import {EvoLetDirective} from '../../../directives/evo-let/evo-let.directive';
import {NavItemMainInfo} from '../interfaces/nav-item-main-info';
import {NavItemHref} from '../interfaces/nav-item.href';

@Component({
    selector: 'evo-navbar-item',
    templateUrl: './evo-navbar-item.component.html',
    styleUrls: ['./evo-navbar-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        EvoLetDirective,
        NgIf,
        EvoDropdownOriginDirective,
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
    @Input() subMenuPositions?: ConnectedPosition[];

    @Output() openSubMenu = new EventEmitter<EvoDropdownOriginDirective>();
    @Output() closeSubMenu = new EventEmitter<EvoDropdownOriginDirective>();

    @ViewChild('origin') dropdownOrigin: EvoDropdownOriginDirective;

    @HostBinding('attr.id') get id(): NavItem['id'] {
        return this.item.id || '';
    }

    @HostBinding('class') get ngClass(): NavItem['ngClass'] {
        return this.item.ngClass;
    }

    toggle(): void {
        if (this.isSubMenuOpen()) {
            this.closeSubMenu.emit(this.dropdownOrigin);
        } else {
            this.openSubMenu.emit(this.dropdownOrigin);
        }
    }

    open(): void {
        if (!this.isSubMenuOpen()) {
            this.openSubMenu.emit(this.dropdownOrigin);
        }
    }

    close(): void {
        if (this.isSubMenuOpen()) {
            this.closeSubMenu.emit(this.dropdownOrigin);
        }
    }

    isSubMenuOpen() {
        return this.dropdownOrigin.isDropdownOpen;
    }

    protected isNativeLink(item: NavItem): item is NavItemMainInfo & NavItemHref {
        return 'href' in item;
    }
}
