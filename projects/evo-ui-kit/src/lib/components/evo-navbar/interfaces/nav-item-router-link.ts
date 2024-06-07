import {Params, QueryParamsHandling} from '@angular/router';

export interface NavItemRouterLink {
    // eslint-disable-next-line
    routerLink: any[] | string | null;
    isExactPath?: boolean;
    queryParams?: Params | null;
    fragment?: string;
    queryParamsHandling?: QueryParamsHandling | null;
    preserveFragment?: boolean;
    skipLocationChange?: boolean;
    replaceUrl?: boolean;
    // eslint-disable-next-line
    state?: {[k: string]: any};
    // relativeTo?: ActivatedRoute | null; TODO: add after update to ng12
}
