import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { EvoTabsComponent, EvoTabItemComponent } from './index';
import { EvoUiClassDirective } from '../../directives/';

@Component({
    selector: 'evo-host-component',
    template: `
        <evo-tabs [selectedIndex]="index">
            <evo-tab-item label="First">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolor!</p>
            </evo-tab-item>
            <evo-tab-item label="Second">
                <p>Fugit nisi facere dolores cupiditate sapiente nemo ullam eos maiores, in porro est illo officia
                    excepturi odio vel
                    eaque velit alias quaerat, quis sed neque soluta. Pariatur molestias maiores quo officiis? Expedita,
                    accusamus illo veniam
                    aut sequi eum, corporis iste eveniet vitae architecto debitis voluptate eos a numquam, corrupti
                    maiores.</p>
            </evo-tab-item>
            <evo-tab-item label="Third">
                <p>Some short text here...</p>
            </evo-tab-item>
        </evo-tabs>`,
})
class TestHostComponent {
    index = 0;
    @ViewChild(EvoTabsComponent)
    public tabsComponent: EvoTabsComponent;
}

describe('EvoTabsComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                EvoTabsComponent,
                EvoTabItemComponent,
                EvoUiClassDirective,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        testHostFixture.detectChanges();
    });

    it('should have seleted tab with index = 0, after construction', () => {
        expect(testHostComponent.tabsComponent.selectedIndex).toEqual(0);
    });

    it('should have seleted tab with index = 1, after click', () => {
        testHostComponent.tabsComponent.onClick(1);
        expect(testHostComponent.tabsComponent.selectedIndex).toEqual(1);
    });

    it('should change seleted tab to index = 2, after input change', () => {
        testHostComponent.index = 2;
        testHostFixture.detectChanges();
        expect(testHostComponent.tabsComponent.selectedIndex).toEqual(2);
    });

});
