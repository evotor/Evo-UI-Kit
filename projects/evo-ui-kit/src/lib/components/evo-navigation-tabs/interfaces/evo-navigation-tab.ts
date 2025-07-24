import {ActivatedRoute, Params, QueryParamsHandling} from '@angular/router';

export interface EvoNavigationTab {
    label: string;
    disabled?: boolean;
    routerLink?: any[] | string | null | undefined;
    relativeTo?: ActivatedRoute | null;
    queryParams?: Params | null;
    fragment?: string;
    queryParamsHandling?: QueryParamsHandling | null;
    preserveFragment?: boolean;
}
