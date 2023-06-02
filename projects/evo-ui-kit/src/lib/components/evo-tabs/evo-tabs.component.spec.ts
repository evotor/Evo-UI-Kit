import {EvoTabsComponent} from './evo-tabs.component';
import {EvoTabsService} from './evo-tabs.service';
import {EvoTabComponent} from './evo-tab/evo-tab.component';
import {EvoTabContentComponent} from './evo-tab-content/evo-tab-content.component';
import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoTabState} from './evo-tab-state.collection';
import {Router, Routes} from '@angular/router';
import {fakeAsync, getTestBed, TestBed, tick} from '@angular/core/testing';
import {EvoTabsModule} from './evo-tabs.module';
import {RouterTestingModule} from '@angular/router/testing';
import {EvoTabsSizeService} from './evo-tabs-size.service';
import {EvoTabsSize} from './enums/evo-tabs-size';

const groupName = 'groupName';

const firstTabName = 'firstTabName';
const secondTabName = 'secondTabName';
const thirdTabName = 'thirdTabName';

const firstTabText = 'cheburek';
const secondTabText = 'banana';
const thirdTabText = 'nail';

const firstContent = 'some content for first tab';
const thirdContent = 'some content for third tab';

@Component({
    selector: 'evo-tabs-link-wrapper',
    template: `
        <evo-tabs name="groupName">
            <a evoTab [routerLink]="'home'" name="home">home</a>
            <a #newsTab evoTab [routerLink]="'news'" name="news">news</a>
            <a evoTab [routerLink]="'about'" name="about">about</a>
        </evo-tabs>
        <router-outlet></router-outlet>
    `
})
export class EvoTabsLinkWrapperComponent {
    @ViewChild('newsTab', {read: ElementRef}) newsTab: ElementRef;
}

@Component({
    selector: 'evo-stub-component',
    template: '',
})
export class EvoStubContentComponent {
}

@Component({
    selector: 'evo-tabs-wrapper',
    template: '',
})
class EvoTabsWrapperComponent {
    groupName = groupName;

    firstTabName = firstTabName;
    secondTabName = secondTabName;
    thirdTabName = thirdTabName;

    firstTabText = firstTabText;
    secondTabText = secondTabText;
    thirdTabText = thirdTabText;

    firstTabsRef = groupName + '#' + firstTabName;
    thirdTabsRef = groupName + '#' + thirdTabName;

    firstContent = firstContent;
    thirdContent = thirdContent;

    tabIsVisible = false;

    iterableListOne = ['banana', 'apple'];

    @ViewChild(EvoTabsComponent) evoTabsComponent: EvoTabsComponent;
    @ViewChildren(EvoTabContentComponent) evoTabContentList: QueryList<any>;

    constructor(
        public evoTabsService: EvoTabsService,
        public evoTabsSizeService: EvoTabsSizeService,
        public element: ElementRef,
    ) {
    }
}

let host: SpectatorHost<EvoTabsComponent, EvoTabsWrapperComponent>;
let tabsComponent: EvoTabsComponent;
let tabsService: EvoTabsService;
const routes: Routes = [
    {path: 'home', component: EvoStubContentComponent},
    {path: 'news', component: EvoStubContentComponent},
    {path: 'about', component: EvoStubContentComponent},
];

const createHost = createHostFactory({
    component: EvoTabsComponent,
    declarations: [
        EvoTabsComponent,
        EvoTabComponent,
        EvoTabContentComponent,
    ],
    providers: [
        EvoTabsService,
        EvoTabsSizeService
    ],
    host: EvoTabsWrapperComponent,
    componentProviders: [EvoTabsSizeService]
});

const createDefaultHost = () => {
    host = createHost(`
            <evo-tabs [name]="groupName">
                <evo-tab [name]="firstTabName" class="first-tab">{{ firstTabText }}</evo-tab>
                <evo-tab [name]="secondTabName" class="second-tab">{{ secondTabText }}</evo-tab>
                <evo-tab [name]="thirdTabName" class="third-tab">{{ thirdTabText }}</evo-tab>
            </evo-tabs>
            <evo-tab-content [tabsRef]="firstTabsRef" class="first-tab-content">{{ firstContent }}</evo-tab-content>
            <evo-tab-content [tabsRef]="thirdTabsRef" class="third-tab-content">{{ thirdContent }}</evo-tab-content>
        `);
    tabsComponent = host.hostComponent.evoTabsComponent;
    tabsService = host.hostComponent.evoTabsService;
};

describe('EvoTabsComponent', () => {

    it('should create', () => {
        createDefaultHost();
        expect(tabsComponent).toBeTruthy();
    });

    it('should register evo-tabs group after creation', () => {
        createDefaultHost();
        expect(tabsService.getRegisteredTabsGroup(host.hostComponent.groupName).name).toEqual(host.hostComponent.groupName);
    });

    it('should register all evo-tab components after creation', () => {
        createDefaultHost();
        expect(tabsComponent.tabComponentsList.length).toEqual(3);
    });

    it('should place all registered evo-tab components inside tabs container', () => {
        createDefaultHost();
        expect(host.queryAll('.evo-tabs__container evo-tab .evo-tab').length).toEqual(3);
    });

    it('should set groupName attribute for all registered evo-tab components right after creation', () => {
        createDefaultHost();
        tabsComponent.tabComponentsList.forEach((tab: EvoTabComponent) => {
            expect(tab.groupName).toEqual(host.hostComponent.groupName);
        });
    });

    it('should register each evo-tab using their name attributes', () => {
        createDefaultHost();
        const tabsGroup = tabsService['tabsGroupsMap'].get(host.hostComponent.groupName);
        expect(tabsGroup).toBeTruthy();

        const hostTabNamesArray = [
            host.hostComponent.firstTabName,
            host.hostComponent.secondTabName,
            host.hostComponent.thirdTabName,
        ];

        const registeredTabNames = tabsGroup.tabs.map((tab: EvoTabState) => tab.name);
        expect(registeredTabNames).toEqual(hostTabNamesArray);
    });

    it('should set first evo-tab as selected when register it to evo-tabs group', () => {
        createDefaultHost();
        const firstTabComponent = tabsComponent.tabComponentsList.find((tab: EvoTabComponent) => tab.name === host.hostComponent.firstTabName);
        expect(firstTabComponent.selected).toBeTruthy();
        expect(host.query('.evo-tabs__container evo-tab.first-tab .evo-tab')).toHaveClass('evo-tab_selected');
    });

    it('should change selected attribute and selected css class when switch among evo-tab components using setTab method', () => {
        createDefaultHost();
        // first tab is selected by default
        const selectedTabComponent = tabsComponent.tabComponentsList.find((tab: EvoTabComponent) => tab.name === host.hostComponent.firstTabName);

        const newSelectedTabName = host.hostComponent.secondTabName;
        const newSelectedTab = tabsComponent.tabComponentsList.find((tab: EvoTabComponent) => tab.name === host.hostComponent.secondTabName);

        expect(selectedTabComponent.selected).toBeTruthy();
        expect(host.query('.evo-tabs__container evo-tab.first-tab .evo-tab')).toHaveClass('evo-tab_selected');
        expect(newSelectedTab.selected).toBeFalsy();
        expect(host.query('.evo-tabs__container evo-tab.second-tab .evo-tab')).not.toHaveClass('evo-tab_selected');

        // set other tab
        tabsService.setTab(host.hostComponent.groupName, newSelectedTabName);
        host.detectChanges();

        expect(selectedTabComponent.selected).toBeFalsy();
        expect(host.query('.evo-tabs__container evo-tab.first-tab .evo-tab')).not.toHaveClass('evo-tab_selected');
        expect(newSelectedTab.selected).toBeTruthy();
        expect(host.query('.evo-tabs__container evo-tab.second-tab .evo-tab')).toHaveClass('evo-tab_selected');
    });

    it('should have only one evo-tab selected at one time', () => {
        createDefaultHost();
        // first tab set as default
        expect(tabsComponent.tabComponentsList.filter((tab: EvoTabComponent) => tab.selected).length).toEqual(1);
        expect(host.queryAll('.evo-tabs__container evo-tab .evo-tab.evo-tab_selected').length).toEqual(1);
        // set other tab
        tabsService.setTab(host.hostComponent.groupName, host.hostComponent.secondTabName);
        host.detectChanges();
        expect(tabsComponent.tabComponentsList.filter((tab: EvoTabComponent) => tab.selected).length).toEqual(1);
        expect(host.queryAll('.evo-tabs__container evo-tab .evo-tab.evo-tab_selected').length).toEqual(1);
    });

    it('should select evo-tab if it clicked in interface', () => {
        createDefaultHost();
        // first tab set as default
        const selectedTabComponent = tabsComponent.tabComponentsList.find((tab: EvoTabComponent) => tab.name === host.hostComponent.firstTabName);
        expect(selectedTabComponent.selected).toBeTruthy();
        expect(host.query('.evo-tabs__container evo-tab.first-tab .evo-tab')).toHaveClass('evo-tab_selected');

        // clicking on other tab
        const newSelectedTabComponent = tabsComponent.tabComponentsList.find((tab: EvoTabComponent) => tab.name === host.hostComponent.secondTabName);
        host.query('.evo-tabs__container evo-tab.second-tab .evo-tab').dispatchEvent(new MouseEvent('click'));
        host.detectChanges();
        expect(newSelectedTabComponent.selected).toBeTruthy();
        expect(host.query('.evo-tabs__container evo-tab.second-tab .evo-tab')).toHaveClass('evo-tab_selected');
    });

    it('should display passed content inside each evo-tab ng-container', () => {
        createDefaultHost();
        expect(host.query('.evo-tabs__container evo-tab.first-tab .evo-tab').innerHTML).toContain(host.hostComponent.firstTabText);
        expect(host.query('.evo-tabs__container evo-tab.second-tab .evo-tab').innerHTML).toContain(host.hostComponent.secondTabText);
        expect(host.query('.evo-tabs__container evo-tab.third-tab .evo-tab').innerHTML).toContain(host.hostComponent.thirdTabText);
    });

    it('should set groupName and tabName to evo-tab-content based on tabsRef attribute', () => {
        createDefaultHost();

        const firstContentComponent = host.hostComponent.evoTabContentList.toArray()[0];
        expect(firstContentComponent['groupName'] + '#' + firstContentComponent['tabName']).toEqual(host.hostComponent.firstTabsRef);

        const secondContentComponent = host.hostComponent.evoTabContentList.toArray()[1];
        expect(secondContentComponent['groupName'] + '#' + secondContentComponent['tabName']).toEqual(host.hostComponent.thirdTabsRef);
    });

    it('should show evo-tab-content referred to one exact evo-tab at one time', () => {
        createDefaultHost();

        const firstContentComponent = host.hostComponent.evoTabContentList.toArray()[0];
        const thirdContentComponent = host.hostComponent.evoTabContentList.toArray()[1];

        expect(firstContentComponent.isActive).toBeTruthy();
        expect(host.hostFixture.nativeElement.querySelector('.first-tab-content div').innerHTML).toContain(host.hostComponent.firstContent);
        expect(thirdContentComponent.isActive).toBeFalsy();
        expect(host.hostFixture.nativeElement.querySelector('.third-tab-content div')).toBeFalsy();

        // click on other tab
        host.query('.evo-tabs__container evo-tab.third-tab .evo-tab').dispatchEvent(new MouseEvent('click'));
        host.detectChanges();

        expect(firstContentComponent.isActive).toBeFalsy();
        expect(host.hostFixture.nativeElement.querySelector('.first-tab-content div')).toBeFalsy();
        expect(thirdContentComponent.isActive).toBeTruthy();
        expect(host.hostFixture.nativeElement.querySelector('.third-tab-content div').innerHTML).toContain(host.hostComponent.thirdContent);
    });

    it('should show few evo-tab-content components if they referred to one evo-tab', () => {
        host = createHost(`
            <evo-tabs [name]="groupName">
                <evo-tab [name]="firstTabName" class="first-tab">{{ firstTabText }}</evo-tab>
            </evo-tabs>
            <evo-tab-content [tabsRef]="firstTabsRef" class="first-tab-content">{{ firstContent }}</evo-tab-content>
            <evo-tab-content [tabsRef]="firstTabsRef" class="another-first-tab-content">something else</evo-tab-content>
        `);
        tabsComponent = host.hostComponent.evoTabsComponent;

        const firstContentComponent = host.hostComponent.evoTabContentList.toArray()[0];
        const secondContentComponent = host.hostComponent.evoTabContentList.toArray()[1];

        expect(firstContentComponent.isActive).toBeTruthy();
        expect(secondContentComponent.isActive).toBeTruthy();
        expect(host.hostFixture.nativeElement.querySelector('.first-tab-content div').innerHTML).toContain(host.hostComponent.firstContent);
        expect(host.hostFixture.nativeElement.querySelector('.another-first-tab-content div').innerHTML).toContain('something else');
    });

    it('should show evo-tabs group if any evo-tab inside', () => {
        // create component with tab inside
        host = createHost(`
            <evo-tabs [name]="groupName">
                 <evo-tab [name]="firstTabName">{{ firstTabText }}</evo-tab>
            </evo-tabs>
        `);
        tabsComponent = host.hostComponent.evoTabsComponent;

        expect(tabsComponent).toBeTruthy();
        expect(host.query('.evo-tabs__container')).toBeTruthy();
    });

    it('should not show evo-tabs group if no evo-tab components inside', () => {
        // create component without tabs inside
        host = createHost(`
            <evo-tabs [name]="groupName"></evo-tabs>
        `);
        tabsComponent = host.hostComponent.evoTabsComponent;

        expect(tabsComponent).toBeTruthy();
        expect(host.query('.evo-tabs__container')).toBeFalsy();
    });

    it('should throw error when some evo-tab has no name attribute', () => {
        // try to create component with tab which has no name attribute
        expect(() => {
            createHost(`
                <evo-tabs [name]="groupName">
                    <evo-tab>{{ firstTabName }}</evo-tab>
                    <evo-tab [name]="secondTabName">{{ secondTabText }}</evo-tab>
                </evo-tabs>
            `);
        }).toThrowError('[EvoUiKit]: some evo-tab component has no name attribute!');
    });

    it('should throw error when has two evo-tab components with the same name attribute', () => {
        // create two tabs with same names
        expect(() => {
            createHost(`
                <evo-tabs [name]="groupName">
                     <evo-tab [name]="firstTabName">{{ firstTabText }}</evo-tab>
                     <evo-tab [name]="firstTabName">{{ firstTabText }}</evo-tab>
                </evo-tabs>
            `);
        }).toThrowError('[EvoUiKit]: some evo-tab components have the same name attribute!');
    });

    it('should dynamically register and show evo-tab if it becomes visible', () => {
        host = createHost(`
            <evo-tabs [name]="groupName">
                 <evo-tab [name]="firstTabName">{{ firstTabName }}</evo-tab>
                 <evo-tab [name]="secondTabName" *ngIf="tabIsVisible">{{ firstTabName }}</evo-tab>
            </evo-tabs>
        `);
        tabsComponent = host.hostComponent.evoTabsComponent;
        expect(tabsComponent.tabComponentsList.length).toEqual(1);
        expect(host.queryAll('.evo-tabs__container evo-tab .evo-tab').length).toEqual(1);

        host.hostComponent.tabIsVisible = true;
        host.detectChanges();
        expect(tabsComponent.tabComponentsList.length).toEqual(2);
        expect(host.queryAll('.evo-tabs__container evo-tab .evo-tab').length).toEqual(2);
    });

    it('should throw error when can not get groupName or tabName from tabsRef in evo-tab-content', () => {
        // create two tabs with same names
        expect(() => {
            createHost(`
                <evo-tabs [name]="groupName">
                     <evo-tab [name]="firstTabName">{{ firstTabName }}</evo-tab>
                </evo-tabs>
                <evo-tab-content tabsRef="somethingBad" class="first-tab-content">{{ firstContent }}</evo-tab-content>
            `);
        }).toThrowError('[EvoUiKit]: specify both group and name divided by # for evo-tab-content!');
    });

    it('should activated news tab by router', fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EvoTabsLinkWrapperComponent, EvoStubContentComponent],
            imports: [
                EvoTabsModule,
                RouterTestingModule.withRoutes(routes),
            ],
            providers: [EvoTabsService]
        });
        const router = TestBed.inject(Router);

        router.navigate(['']);
        tick();
        const injector = getTestBed();
        const fixture = TestBed.createComponent(EvoTabsLinkWrapperComponent);
        tabsService = injector.inject(EvoTabsService);
        router.initialNavigation();
        fixture.detectChanges();

        (fixture.componentInstance.newsTab.nativeElement as HTMLElement).click();
        const newsTabState = tabsService.getRegisteredTabsGroup(groupName).tabs.find(tab => tab.name === 'news');
        tick();
        const isNewsRoute = router.url.indexOf('news') !== -1;
        expect(newsTabState.isActive && isNewsRoute).toBeTruthy();
    }));


    it(`should be ${EvoTabsSize.normal} size if size is default`, () => {
        host = createHost(`
            <evo-tabs [name]="groupName">
                <evo-tab [name]="firstTabName" class="first-tab">{{ firstTabText }}</evo-tab>
            </evo-tabs>
        `);

        expect(host.fixture.nativeElement.querySelector('.evo-tabs').classList.contains('evo-tabs_size-small')).toBeFalsy();
    });

    it(`should be ${EvoTabsSize.normal} size if size is incorrect`, () => {
        host = createHost(`
            <evo-tabs [name]="groupName" size="incorrect">
                <evo-tab [name]="firstTabName" class="first-tab">{{ firstTabText }}</evo-tab>
            </evo-tabs>
        `);

        expect(host.fixture.nativeElement.querySelector('.evo-tabs').classList.contains('evo-tabs_size-small')).toBeFalsy();
    });

    it(`should be ${EvoTabsSize.small} size if size is small`, () => {
        host = createHost(`
            <evo-tabs [name]="groupName" size="small">
                <evo-tab [name]="firstTabName" class="first-tab">{{ firstTabText }}</evo-tab>
            </evo-tabs>
        `);

        expect(host.fixture.nativeElement.querySelector('.evo-tabs').classList.contains('evo-tabs_size-small')).toBeTruthy();
    });
});

it('should remove tabs from registered if they disappear from DOM', () => {
    host = createHost(`
            <evo-tabs [name]="groupName">
                 <evo-tab *ngFor="let tab of iterableListOne" [name]="tab">{{ tab }}</evo-tab>
            </evo-tabs>
        `);

    tabsService = host.hostComponent.evoTabsService;

    expect(host.queryAll('.evo-tabs__container evo-tab .evo-tab').length).toEqual(2);
    expect(tabsService.getRegisteredTabsGroup(host.hostComponent.groupName).tabs.length).toEqual(2);

    let registeredTabsNames = tabsService.getRegisteredTabsGroup(host.hostComponent.groupName).tabs.map((tab: EvoTabState) => {
        return tab.name;
    });
    expect(registeredTabsNames).toEqual(host.hostComponent.iterableListOne);

    const alternativeIterableListOne = ['peach', 'hamburger', 'soda'];
    host.hostComponent.iterableListOne = alternativeIterableListOne;
    host.detectChanges();
    expect(host.queryAll('.evo-tabs__container evo-tab .evo-tab').length).toEqual(3);
    registeredTabsNames = tabsService.getRegisteredTabsGroup(host.hostComponent.groupName).tabs.map((tab: EvoTabState) => {
        return tab.name;
    });
    expect(registeredTabsNames).toEqual(alternativeIterableListOne);
});

it('should reset active tab if previous active tab was removed from DOM', () => {
    host = createHost(`
            <evo-tabs [name]="groupName">
                 <evo-tab *ngFor="let tab of iterableListOne" [name]="tab">{{ tab }}</evo-tab>
            </evo-tabs>
        `);

    tabsService = host.hostComponent.evoTabsService;
    tabsComponent = host.hostComponent.evoTabsComponent;

    let activeTabComponent = tabsComponent.tabComponentsList.find((tab: EvoTabComponent) => tab.selected);
    expect(activeTabComponent.name).toBeTruthy(host.hostComponent.iterableListOne[0]);

    const alternativeIterableListOne = ['hotdog', 'hamburger', 'soda'];
    host.hostComponent.iterableListOne = alternativeIterableListOne;
    host.detectChanges();

    activeTabComponent = tabsComponent.tabComponentsList.find((tab: EvoTabComponent) => tab.selected);
    expect(activeTabComponent.name).toBeTruthy(alternativeIterableListOne[0]);
});
