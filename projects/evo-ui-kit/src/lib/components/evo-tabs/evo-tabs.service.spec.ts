import { fakeAsync, getTestBed, TestBed, tick } from '@angular/core/testing';
import { EvoTabsGroup, EvoTabsService } from './evo-tabs.service';
import { EvoTabState, EvoTabStateCollection } from './evo-tab-state.collection';

describe('EvoToastService', () => {
    let injector: TestBed;
    let service: EvoTabsService;

    const groupName = 'testTabsGroup';
    const tabNameOne = 'tabNameOne';
    const tabNameTwo = 'tabNameTwo';
    const tabNameThree = 'tabNameThree';

    const registerGroupAndTab = () => {
        service.registerTabsGroup(groupName);
        service.registerTab(groupName, tabNameOne);
    };

    const registerGroupAndTabs = () => {
        service.registerTabsGroup(groupName);
        service.registerTab(groupName, tabNameOne);
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
        const tabsGroupToCheck = service['tabsGroupsMap'].get(groupName);
        expect(service.getRegisteredTabsGroup(groupName)).toEqual(tabsGroupToCheck);
    });

    it('should register tabs group in the map when call registerTabsGroup', () => {
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
        expect(tabsGroup.tabs.some((tab: EvoTabState) => tab.name === tabNameOne)).toBeTruthy();
    });

    it('should call initTab method in EvoTabStateCollection when registering tab', () => {
        spyOn(EvoTabStateCollection.prototype, 'initTab');
        registerGroupAndTab();
        expect(EvoTabStateCollection.prototype.initTab).toHaveBeenCalled();
    });

    it('should call create method in EvoTabStateCollection when register tabs', () => {
        spyOn(EvoTabStateCollection, 'create');
        service.registerTabsGroup(groupName);
        expect(EvoTabStateCollection.create).toHaveBeenCalled();
    });

    it('should create EvoTabStateCollection with tabs when register tabs group with tabs', () => {
        service['tabsGroupsMap'].set(groupName, {name: groupName, tabs: EvoTabStateCollection.create([{name: tabNameOne, isActive: false}])});
        const tabsGroup = service.getRegisteredTabsGroup(groupName);
        expect(tabsGroup.tabs.length).toEqual(1);
    });

    it('should throw error when try to register few tabs with the same name', () => {
        registerGroupAndTab();
        expect(() => {
            service.registerTab(groupName, tabNameOne);
        }).toThrowError(`[EvoUiKit]: trying to register existing tab name('${tabNameOne}') of '${groupName}' group`);
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
        registerGroupAndTabs();
        spyOn(EvoTabStateCollection.prototype, 'setTab');
        service.setTab(groupName, tabNameTwo);
        expect(EvoTabStateCollection.prototype.setTab).toHaveBeenCalled();
    });

    it('should save params in tab if they passed in setTab method', () => {
        registerGroupAndTabs();

        const params = {beautiful: true};
        service.setTab(groupName, tabNameTwo, params);

        const tabsGroup = service.getRegisteredTabsGroup(groupName);
        expect(tabsGroup.tabs.getTab(tabNameTwo).params).toEqual(params);
    });

    it('should change tab isActive flag when setting tab', () => {
        registerGroupAndTabs();
        const tabsGroup = service.getRegisteredTabsGroup(groupName);
        const defaultTab = tabsGroup.tabs.getTab(tabNameOne);
        const newTab = tabsGroup.tabs.getTab(tabNameTwo);
        expect(defaultTab.isActive).toBeTruthy();
        expect(newTab.isActive).toBeFalsy();

        service.setTab(groupName, tabNameTwo);
        expect(defaultTab.isActive).toBeFalsy();
        expect(newTab.isActive).toBeTruthy();
    });

    it('should call tabsState$.next when setting new tab', () => {
        registerGroupAndTabs();
        spyOn(service['tabsState$'], 'next');
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

    it('should return tab subscriptions each time when tab state changes', () => {
        let eventCounter = 0;
        // subscribe to tabNameTwo only
        service.getTabEventsSubscription(groupName, tabNameTwo).subscribe({
            next: () => eventCounter++,
            complete: () => expect(eventCounter).toEqual(2)
        });

        service.registerTabsGroup(groupName);
        // set tabNameOne active as default -> tabNameTwo is not involved, do not expect to receive event
        service.registerTab(groupName, tabNameOne);
        service.registerTab(groupName, tabNameTwo);
        service.registerTab(groupName, tabNameThree);

        // witch to tabNameTwo -> expect to receive event
        service.setTab(groupName, tabNameTwo);

        // switch from tabNameTwo to tabNameThree -> expect to receive event
        service.setTab(groupName, tabNameThree);

        // switch from tabNameThree to tabNameOne -> tabNameTwo is not involved, do not expect to receive event
        service.setTab(groupName, tabNameOne);
        service['tabsState$'].complete();
    });

    it('should return tabs group subscriptions in each time when tab state changes', fakeAsync(() => {
        let eventCounter = 0;
        // subscribe to whole group
        service.getGroupEventsSubscription(groupName).subscribe({
            next: () => eventCounter++,
            complete: () => expect(eventCounter).toEqual(4)
        });

        service.registerTabsGroup(groupName);
        // set tabNameOne active as default -> expect to receive event
        service.registerTab(groupName, tabNameOne);
        service.registerTab(groupName, tabNameTwo);
        service.registerTab(groupName, tabNameThree);

        // switch to another tab -> expect to receive event
        service.setTab(groupName, tabNameTwo);

        // switch to another tab -> expect to receive event
        service.setTab(groupName, tabNameThree);

        // switch to another tab -> expect to receive event
        service.setTab(groupName, tabNameOne);

        service['tabsState$'].complete();
    }));

    it('should return states of exact tab group when subscribing to this group (ignore other created groups)', () => {
        let eventCounter = 0;
        // subscribe to one group
        service.getGroupEventsSubscription(groupName).subscribe({
            next: (tabsGroup: EvoTabsGroup) => {
                expect(tabsGroup.name).toEqual(groupName);
                eventCounter++;
            },
            complete: () => expect(eventCounter).toEqual(1)
        });

        service.registerTabsGroup(groupName);
        // set tabNameOne active as default -> expect to receive event
        service.registerTab(groupName, tabNameOne);
        service.registerTab(groupName, tabNameTwo);
        service.registerTab(groupName, tabNameThree);

        // register some other group (we don't subscribe to it)
        const anotherGroupName = 'anotherGroupName';
        const anotherGroupTabName = 'anotherGroupTabName';
        service.registerTabsGroup(anotherGroupName);
        // set anotherGroupTabName active as default -> do not expect to receive event, because we subscribed to another group
        service.registerTab(groupName, anotherGroupTabName);

        service['tabsState$'].complete();
    });
});
