import {AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Optional} from '@angular/core';
import {EvoTabsService} from '../evo-tabs.service';
import {filter, takeUntil} from 'rxjs/operators';
import {EvoTabState} from '../evo-tab-state.collection';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {Subject} from 'rxjs';
import {EvoTabsSizeService} from '../evo-tabs-size.service';
import {EvoTabsSize} from '../enums/evo-tabs-size';
import {EvoUiClassDirective} from '../../../directives/evo-ui-class.directive';

@Component({
    selector: 'evo-tab, [evoTab]',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss'],
    standalone: true,
    imports: [EvoUiClassDirective],
})
export class EvoTabComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() name: string;

    selected = false;
    size = this.sizeService.size;

    private _groupName: string;
    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly tabsService: EvoTabsService,
        private readonly cd: ChangeDetectorRef,
        private readonly sizeService: EvoTabsSizeService,
        @Optional() private readonly routerLink: RouterLink,
        @Optional() private readonly routerLinkWithHref: RouterLink,
        @Optional() private readonly router: Router,
    ) {}

    set groupName(tabGroupId: string) {
        this._groupName = tabGroupId;
        this.subscribeToTabChanges();
    }

    get groupName(): string {
        return this._groupName;
    }

    get wrapperClasses(): {[cssClass: string]: boolean} {
        return {
            selected: this.selected,
            'size-small': this.size === EvoTabsSize.small,
        };
    }

    ngOnInit() {
        this.subscribeOnNavigationEnd();
    }

    ngAfterViewInit(): void {
        this.initByUrl();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onChangeTabClick() {
        this.setTabActive();
    }

    private initByUrl(): void {
        const urlTree = this.routerLink?.urlTree || this.routerLinkWithHref?.urlTree;
        if (!(urlTree && this.router.isActive(urlTree, true))) {
            return;
        }
        this.setTabActive();
    }

    private setTabActive() {
        this.tabsService.setTab(this.groupName, this.name);
    }

    private subscribeOnNavigationEnd() {
        this.router?.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this.destroy$),
            )
            .subscribe(() => this.initByUrl());
    }

    private subscribeToTabChanges() {
        this.tabsService
            .getTabEventsSubscription(this.groupName, this.name)
            .pipe(takeUntil(this.destroy$))
            .subscribe((data: EvoTabState) => {
                this.selected = data.isActive;
                this.cd.detectChanges();
            });
    }
}
