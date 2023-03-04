import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { MOBILE_VIEW } from '../../common/constants/view-breakpoint-streams';
import { EvoDropdownOriginDirective } from '../evo-dropdown';
import { NavItem } from './types/nav-item';

@Component({
    selector: 'evo-navbar',
    templateUrl: './evo-navbar.component.html',
    styleUrls: ['./evo-navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoNavbarComponent {
    @Input() subMenuPositions?: ConnectedPosition[];
    @Input() items!: NavItem[];

    lastOpenedSubMenu?: EvoDropdownOriginDirective;

    constructor(
        @Inject(MOBILE_VIEW)
        public readonly isMobileView$: Observable<boolean>,
    ) {}

    closeLastOpenedSubMenu(): void {
        if (this.lastOpenedSubMenu) {
            this.closeSubMenu(this.lastOpenedSubMenu);
        }
    }

    toggleSubMenu(origin: EvoDropdownOriginDirective): void {
        if (origin.isDropdownOpen) {
            this.closeSubMenu(origin);
        } else {
            this.openSubMenu(origin);
        }
    }

    openSubMenu(origin: EvoDropdownOriginDirective): void {
        origin.open();
        this.lastOpenedSubMenu = origin;
    }

    closeSubMenu(origin: EvoDropdownOriginDirective): void {
        origin.close();
        this.lastOpenedSubMenu = undefined;
    }
}
