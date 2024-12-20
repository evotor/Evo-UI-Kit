import {ChangeDetectionStrategy, Component, Inject, Input, QueryList, ViewChildren} from '@angular/core';
import {ConnectedPosition} from '@angular/cdk/overlay';
import {Observable} from 'rxjs';
import {MOBILE_VIEW} from '../../common/constants/view-breakpoint-streams';
import {EvoDropdownOriginDirective} from '../evo-dropdown';
import {NavItem} from './types/nav-item';
import {AsyncPipe} from '@angular/common';
import {EvoNavbarItemComponent} from './evo-navbar-item/evo-navbar-item.component';

@Component({
    selector: 'evo-navbar',
    templateUrl: './evo-navbar.component.html',
    styleUrls: ['./evo-navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [EvoNavbarItemComponent, AsyncPipe],
})
export class EvoNavbarComponent {
    @Input() subMenuPositions: ConnectedPosition[] = [
        {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
        },
    ];
    @Input() items!: NavItem[];

    @ViewChildren(EvoNavbarItemComponent) children: QueryList<EvoNavbarItemComponent>;

    lastOpenedSubMenu?: EvoDropdownOriginDirective;

    constructor(
        @Inject(MOBILE_VIEW)
        readonly isMobileView$: Observable<boolean>,
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
