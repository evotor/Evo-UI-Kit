import { async, tick, fakeAsync } from '@angular/core/testing';
// tslint:disable-next-line:max-line-length
import { EvoSidebarComponent, EvoSidebarService, EvoSidebarHeaderComponent, EvoSidebarContentComponent, EvoSidebarFooterComponent, EVO_SIDEBAR_DATA } from './index';
import { Component, ElementRef, Inject, Provider, ViewChild } from '@angular/core';
import { EvoUiClassDirective } from '../../directives/';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { EvoIconModule } from '../evo-icon';
import { icons } from '../../../../icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const sidebarId = 'testSidebarId';
const contentText = 'Some content text with 🌮 & 🌯';

const sidebarServiceInstance = new EvoSidebarService();
const sidebarServiceProvider: Provider = {
    provide: EvoSidebarService,
    useValue: sidebarServiceInstance
};

@Component({ selector: 'evo-test-cmp', template: `
    <div evo-sidebar-header>Sidebar Title</div>
    <div evo-sidebar-content [relativeFooter]="relativeFooter">{{ data?.message }}</div>
    <div evo-sidebar-footer>Footer</div>
    `,
    styles: [`:host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }`],
 })
class TestDynamicComponent {
    relativeFooter = false;

    constructor(
        @Inject(EVO_SIDEBAR_DATA) public data: { message: string},
    ) {}
}

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    @ViewChild(EvoSidebarComponent, {static: true}) sidebarComponent: EvoSidebarComponent;
    id = sidebarId;

    constructor(
        public sidebarService: EvoSidebarService,
        public element: ElementRef,
    ) {
    }

    open() {
        this.sidebarService.open(this.id, {
            component: TestDynamicComponent,
            data: {
                message: contentText,
            }
        });
    }
}

let host: SpectatorHost<EvoSidebarComponent, TestHostComponent>;
let hostEl: HTMLElement;
let sidebarComponent: EvoSidebarComponent;
let openBtnEl: HTMLElement;
let closeBtnEl: HTMLElement;

const createHost = createHostFactory({
    component: EvoSidebarComponent,
    declarations: [
        EvoSidebarComponent,
        EvoSidebarHeaderComponent,
        EvoSidebarContentComponent,
        EvoSidebarFooterComponent,
        EvoUiClassDirective,
    ],
    entryComponents: [
        TestDynamicComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        EvoIconModule.forRoot([...icons]),
    ],
    providers: [sidebarServiceProvider],
    host: TestHostComponent,
    componentProviders: [sidebarServiceProvider]
});

const openSidebar = () => {
    openBtnEl = hostEl.querySelector('.open-btn');
    openBtnEl.dispatchEvent(new MouseEvent('click'));
    host.detectChanges();
};

const closeSidebar = () => {
    closeBtnEl = hostEl.querySelector('.evo-sidebar__close');
    closeBtnEl.dispatchEvent(new MouseEvent('click'));
    host.detectChanges();
};

fdescribe('EvoSidebarComponent', () => {

    beforeEach(async(() => {
        host = createHost(`
            <button evo-button class="open-btn" (click)="open()">Open</button>
            <evo-sidebar [id]="id"></evo-sidebar>
        `);
        sidebarComponent = host.hostComponent.sidebarComponent;
        hostEl = host.hostComponent.element.nativeElement;
    }));

    it('should create', () => {
        expect(sidebarComponent).toBeTruthy();
    });

    it(`should have id = ${ sidebarId }, after construction`, () => {
        expect(sidebarComponent.id).toEqual(sidebarId);
    });

    it(`should be opened after click "Open" button & closed after click "Close Icon" button`, fakeAsync(() => {
        openSidebar();
        tick(1);
        host.detectChanges();
        expect(sidebarComponent.isVisible).toEqual(true);
        expect(host.query('.evo-sidebar_visible')).toBeTruthy();
        expect(host.query('.evo-sidebar__background')).toBeTruthy();

        closeSidebar();
        tick(1);
        host.detectChanges();
        expect(sidebarComponent.isVisible).toEqual(false);
        expect(host.query('.evo-sidebar_visible')).toBeFalsy();
        expect(host.query('.evo-sidebar__background')).toBeFalsy();
    }));

    it(`should unsubscribe from events after destroy`, fakeAsync(() => {
        sidebarComponent.ngOnDestroy();
        const stream = sidebarServiceInstance.getEventsSubscription(sidebarId);
        expect(stream['observers'].length).toEqual(0);
    }));

    afterAll(() => {
        sidebarServiceInstance.close(sidebarId);
    });
});
