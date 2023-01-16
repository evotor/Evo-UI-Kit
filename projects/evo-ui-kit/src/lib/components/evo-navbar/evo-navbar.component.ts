import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { Params, QueryParamsHandling } from '@angular/router';
import { Observable } from 'rxjs';
import { MOBILE_VIEW } from '../../common/constants/view-breakpoint-streams';
import { EvoDropdownOriginDirective } from '../evo-dropdown/evo-dropdown-origin.directive';

export interface NavItemMainInfo {
    title: string;
    subItems?: NavItem[];
}
export interface NavItemHref {
    href: string;
    target?: string;
}
export interface NavItemRouterLink {
    routerLink: any[] | string | null;
    isExactPath?: boolean;
    queryParams?: Params | null;
    fragment?: string;
    queryParamsHandling?: QueryParamsHandling | null;
    preserveFragment?: boolean;
    skipLocationChange?: boolean;
    replaceUrl?: boolean;
    state?: { [k: string]: any };
    // relativeTo?: ActivatedRoute | null; TODO: add after update to ng12
}
export type NavItem = NavItemMainInfo & (NavItemHref | NavItemRouterLink);

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
