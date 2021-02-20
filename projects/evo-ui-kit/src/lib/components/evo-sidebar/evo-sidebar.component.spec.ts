import { async, fakeAsync, tick } from '@angular/core/testing';
// tslint:disable-next-line:max-line-length
import {
    EVO_SIDEBAR_DATA,
    EvoSidebarCloseTargets,
    EvoSidebarComponent,
    EvoSidebarContentComponent,
    EvoSidebarFooterComponent,
    EvoSidebarHeaderComponent,
    EvoSidebarService
} from './index';
import { Component, ElementRef, Inject, Provider, ViewChild } from '@angular/core';
import { EvoUiClassDirective } from '../../directives/';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { EvoIconModule } from '../evo-icon';
import { icons } from '../../../../icons';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const sidebarId = 'testSidebarId';
const headerText = 'Header text';
const contentText = 'Some content text with 🌮 & 🌯';
const footerText = 'Footer text';

const sidebarServiceInstance = new EvoSidebarService();
const sidebarServiceProvider: Provider = {
    provide: EvoSidebarService,
    useValue: sidebarServiceInstance
};

@Component({ selector: 'evo-test-cmp', template: `
    <div evo-sidebar-header (back)="onBackClick()">{{ headerText }}</div>
    <div evo-sidebar-content [relativeFooter]="relativeFooter">{{ data.message }}</div>
    <div evo-sidebar-footer>{{ footerText }}</div>
    `,
    styles: [`:host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }`],
 })
class TestDynamicComponent {
    headerText = headerText;
    footerText = footerText;
    backButton = false;
    relativeFooter = false;

    constructor(
        @Inject(EVO_SIDEBAR_DATA) public data: { message: string},
    ) {}

    onBackClick() {}
}

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    @ViewChild(EvoSidebarComponent, {static: true}) sidebarComponent: EvoSidebarComponent;
    id = sidebarId;
    headerText = headerText;
    contentText = contentText;
    footerText = footerText;
    backButton = false;
    size = 'middle';

    constructor(
        public sidebarService: EvoSidebarService,
        public element: ElementRef,
    ) {
    }

    open() {
        this.sidebarService.open(this.id);
    }

    openDynamic() {
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
        NoopAnimationsModule,
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

const openSidebarDynamic = () => {
    openBtnEl = hostEl.querySelector('.open-btn_dynamic');
    openBtnEl.dispatchEvent(new MouseEvent('click'));
    host.detectChanges();
};

const closeSidebar = () => {
    closeBtnEl = hostEl.querySelector('.evo-sidebar__close');
    closeBtnEl?.dispatchEvent(new MouseEvent('click'));
    host?.detectChanges();
};

describe('EvoSidebarComponent', () => {

    beforeEach(async(() => {
        host = createHost(`
            <button evo-button class="open-btn" (click)="open()">Open</button>
            <button evo-button class="open-btn_dynamic" (click)="openDynamic()">Open dynamic</button>
            <evo-sidebar
                [id]="id"
                [backButton]="backButton"
                [header]="headerText"
                [size]="size"
                >
            <div content>{{ contentText }}</div>
            <div footer>{{ footerText }}</div>
            </evo-sidebar>
        `);
        sidebarComponent = host.hostComponent.sidebarComponent;
        hostEl = host.hostComponent.element.nativeElement;
    }));

    it('should create', () => {
        expect(sidebarComponent).toBeTruthy();
        expect(host.query('.evo-sidebar_visible')).toBeFalsy();
    });

    it(`should have id = ${ sidebarId }, after construction`, () => {
        expect(sidebarComponent.id).toEqual(sidebarId);
    });

    it(`should specified size`, fakeAsync(() => {
        openSidebar();
        tick(1);
        expect(
            host.query('.evo-sidebar').classList.contains('evo-sidebar_middle')
        ).toBeTruthy();
    }));

    it(`should have header with text`, fakeAsync(() => {
        openSidebar();
        tick(1);
        expect(host.query('.evo-sidebar__header')).toBeTruthy();
        expect(host.query('.evo-sidebar__title').textContent).toEqual(headerText);
    }));

    it(`should have header with text (dynamic content)`, fakeAsync(() => {
        openSidebarDynamic();
        tick(1);
        host.detectChanges();
        expect(host.query('.evo-sidebar__header')).toBeTruthy();
        expect(host.query('.evo-sidebar__title').textContent).toEqual(headerText);
    }));

    it(`should have content with text`, fakeAsync(() => {
        openSidebar();
        tick(1);
        const contentEl = host.query('.evo-sidebar__content > div');
        expect(contentEl).toBeTruthy();
        expect(contentEl.textContent).toEqual(contentText);
    }));

    it(`should have content with text (dynamic content)`, fakeAsync(() => {
        openSidebarDynamic();
        tick(1);
        host.detectChanges();
        const contentEl = host.query('.evo-sidebar__content');
        expect(contentEl).toBeTruthy();
        expect(contentEl.textContent).toEqual(contentText);
    }));

    it(`should have footer with text`, fakeAsync(() => {
        openSidebar();
        tick(1);
        host.detectChanges();
        const footerEl = host.query('.evo-sidebar__footer');
        expect(footerEl).toBeTruthy();
        expect(footerEl.textContent).toEqual(footerText);
    }));

    it(`should have footer with text (dynamic content)`, fakeAsync(() => {
        openSidebarDynamic();
        tick(1);
        host.detectChanges();
        const footerEl = host.query('.evo-sidebar__footer');
        expect(footerEl).toBeTruthy();
        expect(footerEl.textContent).toEqual(footerText);
    }));

    it(`should have working "back" button if property backButton = true`, fakeAsync(() => {
        spyOn(host.hostComponent.sidebarComponent, 'handleBackClick');
        openSidebar();
        tick(1);
        expect(host.query('.evo-sidebar__back')).toBeFalsy();
        closeSidebar();
        tick(1);
        host.hostComponent.backButton = true;
        host.detectChanges();
        openSidebar();
        tick(1);
        host.detectChanges();
        expect(host.query('.evo-sidebar__back')).toBeTruthy();
        host.detectChanges();
        host.click('.evo-sidebar__back');
        tick(1);
        expect(host.hostComponent.sidebarComponent.handleBackClick).toHaveBeenCalled();
    }));

    it(`should have working "back" button if property backButton = true (dynamic content)`, fakeAsync(() => {
        openSidebarDynamic();
        tick(1);
        expect(host.query('.evo-sidebar__back')).toBeFalsy();
        closeSidebar();
        tick(1);
        host.hostComponent.backButton = true;
        host.detectChanges();
        openSidebarDynamic();
        tick(1);
        host.detectChanges();
        expect(host.query('.evo-sidebar__back')).toBeTruthy();
        const dynamicComponentInstance = host.hostComponent.sidebarComponent['dynamicComponentRef'].instance;
        spyOn(dynamicComponentInstance, 'onBackClick');
        host.click('.evo-sidebar__back');
        tick(1);
        expect(dynamicComponentInstance.onBackClick).toHaveBeenCalled();
    }));

    it(`should close sidebar by clicking "close" button`, fakeAsync(() => {
        openSidebar();
        tick(1);
        host.detectChanges();
        const closeBtn = host.query('.evo-sidebar__close');
        expect(closeBtn).toBeTruthy();
        expect(host.query('.evo-sidebar_visible')).toBeTruthy();
        expect(sidebarComponent.isVisible).toBeTruthy();
        host.click('.evo-sidebar__close');
        tick(1);
        expect(host.query('.evo-sidebar_visible')).toBeFalsy();
        expect(sidebarComponent.isVisible).toBeFalsy();
    }));

    it(`should close sidebar by clicking "close" button (dynamic content)`, fakeAsync(() => {
        openSidebarDynamic();
        tick(1);
        host.detectChanges();
        const closeBtn = host.query('.evo-sidebar__close');
        expect(closeBtn).toBeTruthy();
        expect(host.query('.evo-sidebar_visible')).toBeTruthy();
        expect(sidebarComponent.isVisible).toBeTruthy();
        host.click('.evo-sidebar__close');
        host.detectChanges();
        tick(1);
        host.detectChanges();
        expect(host.query('.evo-sidebar_visible')).toBeFalsy();
        expect(sidebarComponent.isVisible).toBeFalsy();
    }));

    it(`should close sidebar by pressing "ESC"`, fakeAsync(() => {
        openSidebar();
        tick(1);
        host.detectChanges();
        document.body.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
        host.detectChanges();
        expect(sidebarComponent['closeTarget']).toEqual(EvoSidebarCloseTargets.ESC);
        tick(1);
        host.detectChanges();
        expect(host.query('.evo-sidebar_visible')).toBeFalsy();
        expect(sidebarComponent.isVisible).toBeFalsy();
    }));

    it(`should cleanup content after closing (dynamic content)`, fakeAsync(() => {
        openSidebarDynamic();
        tick(1);
        host.detectChanges();
        expect(host.query('.evo-sidebar__header')).toBeTruthy();
        expect(host.query('.evo-sidebar__content')).toBeTruthy();
        expect(host.query('.evo-sidebar__footer')).toBeTruthy();
        expect(sidebarComponent.isDynamicContent).toBeTruthy();
        expect(sidebarComponent['dynamicComponentRef']).toBeTruthy();
        host.click('.evo-sidebar__close');
        tick(1);
        host.detectChanges();
        expect(sidebarComponent['dynamicComponentRef']).toBeFalsy();
        expect(host.query('.evo-sidebar__header')).toBeFalsy();
        expect(host.query('.evo-sidebar__content')).toBeFalsy();
        expect(host.query('.evo-sidebar__footer')).toBeFalsy();
    }));


    it(`should unsubscribe from events after destroy`, fakeAsync(() => {
        sidebarComponent.ngOnDestroy();
        const stream = sidebarServiceInstance.getEventsSubscription(sidebarId);
        expect(stream['observers'].length).toEqual(0);
    }));

    afterAll(() => {
        closeSidebar();
    });
});
