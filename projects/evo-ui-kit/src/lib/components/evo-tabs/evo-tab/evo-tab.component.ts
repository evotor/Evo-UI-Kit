import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Optional} from '@angular/core';
import {EvoTabsService} from '../evo-tabs.service';
import {filter, switchMap, takeUntil} from 'rxjs/operators';
import {EvoTabState} from '../evo-tab-state.collection';
import {IsActiveMatchOptions, NavigationEnd, Router, RouterLink} from '@angular/router';
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
export class EvoTabComponent implements OnInit, OnDestroy {
    @Input() name: string;

    @Input()
    set activeMatchOptions(activeMatchOptions: IsActiveMatchOptions | boolean) {
        this._activeMatchOptions = activeMatchOptions;
    }

    get activeMatchOptions(): IsActiveMatchOptions {
        if (typeof this._activeMatchOptions === 'boolean') {
            return this._activeMatchOptions
                ? {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'}
                : {paths: 'subset', queryParams: 'subset', fragment: 'ignored', matrixParams: 'ignored'};
        }

        return this._activeMatchOptions;
    }

    selected = false;
    size = this.sizeService.size;

    private _groupName: string;
    private _activeMatchOptions: IsActiveMatchOptions | boolean = true;
    private attachedTabName: string;
    private readonly tabIdentity$ = new Subject<{groupName: string; tabName: string}>();
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
        this.subscribeToTabChanges();
    }

    /**
     * @internal
     * Связывает таб с группой. Вызывается родительским evo-tabs после регистрации таба в реестре.
     * Повторный вызов нужен, когда у живого компонента сменился name: таб переподписывается на новое имя.
     */
    attach(groupName: string): void {
        if (this._groupName === groupName && this.attachedTabName === this.name) {
            return;
        }

        this._groupName = groupName;
        this.attachedTabName = this.name;
        this.tabIdentity$.next({groupName, tabName: this.name});

        this.initByUrl();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.tabIdentity$.complete();
    }

    onChangeTabClick() {
        this.setTabActive();
    }

    private initByUrl(): void {
        // evo-tab может быть отрендерен вне evo-tabs - тогда attach() не вызовут и группы у таба нет
        if (!this.groupName) {
            return;
        }

        const urlTree = this.routerLink?.urlTree || this.routerLinkWithHref?.urlTree;
        if (!urlTree) {
            return;
        }

        if (!this.router.isActive(urlTree, this.activeMatchOptions)) {
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

    private subscribeToTabChanges(): void {
        this.tabIdentity$
            .pipe(
                switchMap(({groupName, tabName}) => this.tabsService.getTabEventsSubscription(groupName, tabName)),
                takeUntil(this.destroy$),
            )
            .subscribe((state: EvoTabState) => {
                this.selected = state.isActive;
                this.cd.detectChanges();
            });
    }
}
