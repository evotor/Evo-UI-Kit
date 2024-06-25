import {waitForAsync} from '@angular/core/testing';
import {Component} from '@angular/core';
import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoNavbarItemComponent} from './evo-navbar-item.component';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {EvoUiKitModule} from '../../../evo-ui-kit.module';
import {EvoDropdownModule} from '../../evo-dropdown';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterLink} from '@angular/router';
import {NavItem} from '../types/nav-item';

@Component({selector: 'evo-host-component', template: ''})
class TestHostComponent {
    item: NavItem = {href: '/', title: ''};
    isMobileView = false;

    handleOpenSubMenu(origin) {
        origin.open();
    }

    handleCloseSubMenu(origin) {
        origin.close();
    }
}

const createHost = createHostFactory({
    component: EvoNavbarItemComponent,
    host: TestHostComponent,
    imports: [CommonModule, EvoUiKitModule, EvoDropdownModule, RouterTestingModule.withRoutes([{
        path: '**',
        component: TestHostComponent
    }])],
});

describe('EvoNavbarItemComponent', () => {
    let host: SpectatorHost<EvoNavbarItemComponent, TestHostComponent>;

    beforeEach(waitForAsync(() => {
        host = createHost(`
            <evo-navbar-item
                [item]="item"
                [isMobileView]="isMobileView"
                (openSubMenu)="handleOpenSubMenu($event)"
                (closeSubMenu)="handleCloseSubMenu($event)"
            ></evo-navbar-item>
        `);
    }));

    it(`should render href link`, (() => {
        host.hostComponent.item = {href: '#', target: '_blank', title: 'anchor'};

        host.detectChanges();

        expect(host.debugElement.queryAll(By.css('a[target="_blank"][href="#"]')).length).toEqual(1);
        expect(host.hostElement).toHaveText('anchor');
    }));

    it(`should render router link`, (() => {
        host.hostComponent.item = {
            title: 'router-link',
            routerLink: '/home',
        };

        host.detectChanges();

        expect(host.debugElement.queryAll(By.directive(RouterLink)).length).toEqual(1);
        expect(host.hostElement).toHaveText('router-link');
    }));

    it(`should render router link with sub links in desktop`, (() => {
        host.hostComponent.item = {
            title: '1',
            routerLink: '/1',
            subItems: [
                {title: '2', routerLink: '/1/2'},
                {title: '3', routerLink: '/1/3'}
            ]
        };

        host.detectChanges();

        host.debugElement.query(By.css('.evo-navbar__link')).nativeElement.dispatchEvent(new MouseEvent('mouseenter'));
        host.detectChanges();

        expect(host.debugElement.queryAll(By.css('.evo-navbar__link:not(.evo-navbar__link_nested)')).length).toEqual(1);
        expect(host.debugElement.queryAll(By.css('.evo-navbar__link_nested')).length).toEqual(host.hostComponent.item.subItems.length);

        host.debugElement.query(By.css('.evo-navbar__link')).nativeElement.dispatchEvent(new MouseEvent('mouseleave'));
        host.detectChanges();

        expect(host.debugElement.queryAll(By.css('.evo-navbar__link_nested')).length).toEqual(0);
    }));

    it(`should render router link with sub links in mobile`, (() => {
        host.hostComponent.isMobileView = true;
        host.hostComponent.item = {
            title: '1',
            routerLink: '/1',
            subItems: [
                {title: '2', routerLink: '/1/2'},
                {title: '3', routerLink: '/1/3'}
            ]
        };

        host.detectChanges();

        host.debugElement.query(By.css('.evo-navbar__link')).nativeElement.dispatchEvent(new MouseEvent('click'));
        host.detectChanges();

        expect(host.debugElement.queryAll(By.css('.evo-navbar__link:not(.evo-navbar__link_nested)')).length).toEqual(1);
        expect(host.debugElement.queryAll(By.css('.evo-navbar__link_nested')).length).toEqual(host.hostComponent.item.subItems.length);

        host.debugElement.query(By.css('.evo-navbar__link')).nativeElement.dispatchEvent(new MouseEvent('click'));
        host.detectChanges();

        expect(host.debugElement.queryAll(By.css('.evo-navbar__link_nested')).length).toEqual(0);
    }));

});
