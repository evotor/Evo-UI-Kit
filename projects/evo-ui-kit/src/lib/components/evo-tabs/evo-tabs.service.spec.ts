import { getTestBed, TestBed } from '@angular/core/testing';
import { EvoTabsGroup, EvoTabsService } from './evo-tabs.service';
import { EvoTabState, EvoTabStateCollection } from './evo-tab-state.collection';

describe('EvoToastService', () => {
    let injector: TestBed;
    let service: EvoTabsService;

    const groupName = 'testTabsGroup';
    const tabName = 'tabName';
    const tabNameTwo = 'tabNameTwo';
    const tabNameThree = 'tabNameThree';

    const registerGroupAndTab = () => {
        service.registerTabsGroup(groupName);
        service.registerTab(groupName, tabName);
    };

    const registerGroupAndTabs = () => {
        service.registerTabsGroup(groupName);
        service.registerTab(groupName, tabName);
        service.registerTab(groupName, tabNameTwo);
        service.registerTab(groupName, tabNameThree);
    };

    beforeEach(() => {
       TestBed.configureTestingModule({
          providers: [ EvoTabsService ],
       });

       injector = getTestBed();
       service = injector.get(EvoTabsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return tabs group by name when call getRegisteredTabsGroup', () => {
        service.registerTabsGroup(groupName);
        const map = service['tabsGroupsMap'];
        const tabsGroupToCheck = map.get(groupName);
        expect(service.getRegisteredTabsGroup(groupName)).toEqual(tabsGroupToCheck);
    });

    it('should register new tabs group in the map when call registerTabsGroup', () => {
        expect(service.getRegisteredTabsGroup(groupName)).toBeFalsy();
        service.registerTabsGroup(groupName);
        const tabsGroup = service.getRegisteredTabsGroup(groupName);
        expect(tabsGroup).toBeTruthy();
        expect(tabsGroup.name).toEqual(groupName);
    });

    it('should not duplicate tab groups in map if try to register a few tab groups with same names', () => {
        const map = service['tabsGroupsMap'];
        service.registerTabsGroup(groupName);
        expect(map.size).toEqual(1);

        service.registerTabsGroup('someOtherName');
        expect(map.size).toEqual(2);

        service.registerTabsGroup(groupName);
        expect(map.size).toEqual(2);
    });

    it('should create the empty EvoTabStateCollection of tabs inside tabs group when register tabs group', () => {
        service.registerTabsGroup(groupName);
        const tabsGroup = service.getRegisteredTabsGroup(groupName);
        expect(tabsGroup.tabs.length).toEqual(0);
        expect(tabsGroup.tabs instanceof EvoTabStateCollection).toBeTruthy();
    });

    it('should register tab in tabs group', () => {
        registerGroupAndTab();
        const tabsGroup = service.getRegisteredTabsGroup(groupName);
        expect(tabsGroup.tabs.some((tab: EvoTabState) => tab.name === tabName)).toBeTruthy();
    });

    it('should call initTab method in EvoTabStateCollection when registering tab', () => {
        spyOn(EvoTabStateCollection.prototype, 'initTab');
        registerGroupAndTab();
        expect(EvoTabStateCollection.prototype.initTab).toHaveBeenCalled();
    });

    it('should throw error when try to register tab with the same name', () => {
        registerGroupAndTab();
        expect(() => service.registerTab(groupName, tabName)).toThrowError(`[EvoUiKit]: trying to register existing tab name('${tabName}') of '${groupName}' group`);
    });

    it('should call service setTab method if we are registering first tab in group', () => {
        spyOn(service, 'setTab');
        registerGroupAndTab();
        expect(service.setTab).toHaveBeenCalled();
    });

    it('should throw error when trying to set tab for not registered group', () => {
        registerGroupAndTab();
        const strangeGroupName = 'someStrangeGroupName';
        expect(() => service.setTab(strangeGroupName, 'someStrangeName')).toThrowError(`[EvoUiKit]: trying to set tab for not registered group ${strangeGroupName}`);
    });

    it('should throw error when trying to set tab with not registered name', () => {
        registerGroupAndTab();
        const strangeTabName = 'someStrangeTabName';
        expect(() => service.setTab(groupName, strangeTabName)).toThrowError(`[EvoUiKit]: trying to set tab with not registered name ${strangeTabName}`);
    });

    it('should call setTab method in EvoTabStateCollection when setting tab', () => {
        spyOn(EvoTabStateCollection.prototype, 'setTab');
        registerGroupAndTabs();
        service.setTab(groupName, tabNameTwo);
        expect(EvoTabStateCollection.prototype.setTab).toHaveBeenCalled();
    });

    it('should change tab isActive flag when setting tab', () => {
        registerGroupAndTabs();
        const tabsGroup = service['tabsGroupsMap'].get(groupName);
        const defaultTab = tabsGroup.tabs.getTab(tabName);
        const newTab = tabsGroup.tabs.getTab(tabNameTwo);
        expect(defaultTab.isActive).toBeTruthy();
        expect(newTab.isActive).toBeFalsy();

        service.setTab(groupName, tabNameTwo);
        expect(defaultTab.isActive).toBeFalsy();
        expect(newTab.isActive).toBeTruthy();
    });

    it('should call tabsState$.next when setting new tab', () => {
        spyOn(service['tabsState$'], 'next');
        registerGroupAndTabs();
        service.setTab(groupName, tabNameTwo);
        expect(service['tabsState$'].next).toHaveBeenCalled();
    });

    it('should return state of exact tab when subscribing to this tab', () => {
        registerGroupAndTabs();
        service.getTabEventsSubscription(groupName, tabNameTwo).subscribe((tab: EvoTabState) => {
            expect(tab.name).toEqual(tabNameTwo);
        });
        service.setTab(groupName, tabNameTwo);
    });

    it('should return states of exact tab group when subscribing to this group', () => {
        registerGroupAndTabs();
        service.getGroupEventsSubscription(groupName).subscribe((tabGroup: EvoTabsGroup) => {
            expect(tabGroup.name).toEqual(groupName);
        });
        service.setTab(groupName, tabNameTwo);
    });

    it('should return tab subscriptions in each time when tab state changes', () => {
        let eventCounter = 0;
        service.getTabEventsSubscription(groupName, tabNameTwo).subscribe({
            next: () => eventCounter ++,
            complete: () => expect(eventCounter).toEqual(2)
        });

        service.registerTabsGroup(groupName);
        const group = service.getRegisteredTabsGroup(groupName);
        group.tabs.initTab(tabName);
        group.tabs.initTab(tabNameTwo);
        group.tabs.initTab(tabNameThree);

        const tabsGroup = service['tabsGroupsMap'].get(groupName);
        const tab = tabsGroup.tabs.getTab(tabNameTwo);

        // change tab of subscribed tab
        tab.isActive = true;
        service['tabsState$'].next(service['tabsGroupsMap']);
        // change tab of subscribed tab
        tab.isActive = false;
        service['tabsState$'].next(service['tabsGroupsMap']);
        service['tabsState$'].complete();
    });

    it('should not return tab subscription if tab state is not changed', () => {
        let eventCounter = 0;
        service.getTabEventsSubscription(groupName, tabNameTwo).subscribe({
            next: () => eventCounter++,
            complete: () => expect(eventCounter).toEqual(1)
        });

        service.registerTabsGroup(groupName);
        const group = service.getRegisteredTabsGroup(groupName);
        group.tabs.initTab(tabName);
        group.tabs.initTab(tabNameTwo);
        group.tabs.initTab(tabNameThree);

        const tabsGroup = service['tabsGroupsMap'].get(groupName);
        const tab = tabsGroup.tabs.getTab(tabNameTwo);
        const anotherTab = tabsGroup.tabs.getTab(tabNameThree);
        tab.isActive = true;

        service['tabsState$'].next(service['tabsGroupsMap']);
        // all tabs map is not changed
        service['tabsState$'].next(service['tabsGroupsMap']);
        // another tab is changed
        anotherTab.name = 'anotherName';
        service['tabsState$'].next(service['tabsGroupsMap']);
        service['tabsState$'].complete();
    });
});
