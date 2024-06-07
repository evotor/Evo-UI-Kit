import {NavItemRouterLink} from '../interfaces/nav-item-router-link';
import {NavItemHref} from '../interfaces/nav-item.href';
import {NavItemMainInfo} from '../interfaces/nav-item-main-info';

export type NavItem = NavItemMainInfo & (NavItemHref | NavItemRouterLink);
