import {NavItem} from '../types/nav-item';

export interface NavItemMainInfo {
    id?: string | number;
    // eslint-disable-next-line
    ngClass?: string | string[] | Set<string> | {[klass: string]: any};
    title: string;
    subItems?: NavItem[];
}
