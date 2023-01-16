import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { EvoNavbarModule } from './evo-navbar.module';
import { EvoNavbarComponent, NavItem } from './evo-navbar.component';
import createSpy = jasmine.createSpy;

@Component({selector: 'evo-host-component', template: ``})
class TestHostComponent {
    items!: NavItem[];
}

const createHost = createHostFactory({
    component: EvoNavbarComponent,
    host: TestHostComponent,
    imports: [EvoNavbarModule],
});

describe('EvoNavbarComponent', () => {
    let host: SpectatorHost<EvoNavbarComponent, TestHostComponent>;

    beforeEach(async(() => {
        host = createHost(`
            <evo-navbar [items]="items"></evo-navbar>
        `);
        host.hostComponent.items = [];
    }));


    it(`should close last opened sub menu`, (() => {
        const closeSpy = createSpy();
        host.component.lastOpenedSubMenu = { close: closeSpy } as any;

        expect(host.component.lastOpenedSubMenu).toBeDefined();
        host.component.closeLastOpenedSubMenu();
        expect(host.component.lastOpenedSubMenu).toBeUndefined();
        expect(closeSpy).toHaveBeenCalled();
    }));
});
