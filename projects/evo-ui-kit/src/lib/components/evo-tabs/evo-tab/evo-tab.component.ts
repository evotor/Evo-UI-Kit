import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EvoTabsService } from '../evo-tabs.service';
import { filter, map, takeWhile } from 'rxjs/operators';
import { EvoTabState } from '../evo-tab-state.collection';
import { ActivatedRoute, NavigationEnd, Router, UrlTree } from '@angular/router';

@Component({
    selector: 'evo-tab, [evoTab]',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss'],
})
export class EvoTabComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() name: string;
    @Input() routerLink: string | UrlTree;
    @Input() queryParams: {
        [k: string]: any,
    };

    selected = false;

    private _groupName: string;
    private isAlive = true;

    constructor(
        private tabsService: EvoTabsService,
        private cd: ChangeDetectorRef,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {

    }

    set groupName(tabGroupId: string) {
        this._groupName = tabGroupId;
        this.subscribeToTabChanges();
    }

    get groupName(): string {
        return this._groupName;
    }

    ngOnInit() {
        this.subscribeOnNavigationEnd();
    }

    ngAfterViewInit() {
        this.initByUrl();
    }

    ngOnDestroy() {
        this.isAlive = false;
    }

    onChangeTabClick() {
        this.setTabActive();
    }

    private initByUrl() {
        if (this.routerLink || this.queryParams) {
            const commands = this.routerLink ? [this.routerLink] : [];
            const urlTree = this.router.createUrlTree(commands, {
                queryParams: this.queryParams,
            });

            if (this.router.isActive(urlTree, true)) {
                this.setTabActive();
            }
        }
    }

    private setTabActive() {
        this.tabsService.setTab(this.groupName, this.name);
    }

    private subscribeOnNavigationEnd() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map((route: ActivatedRoute) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            map((route: ActivatedRoute) => route.url),
        ).subscribe(() => {
            this.initByUrl();
        });
    }

    private subscribeToTabChanges() {
        this.tabsService.getTabEventsSubscription(this.groupName, this.name).pipe(
            takeWhile(() => this.isAlive),
        ).subscribe((data: EvoTabState) => {
            this.selected = data.isActive;
            this.cd.detectChanges();
        });
    }
}
