import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { EvoUiClassDirective, EvoTabsComponent } from '../../evo-ui-kit.module';
import { Component, ViewChild } from '@angular/core';
import { EvoTabItemComponent } from './evo-tab-item/evo-tab-item.component';

@Component({
    selector: 'evo-host-component',
    template: `
    <evo-tabs>
      <evo-tab-item label="First" isSelected="true">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolor!</p>
      </evo-tab-item>
      <evo-tab-item label="Second">
        <p>Fugit nisi facere dolores cupiditate sapiente nemo ullam eos maiores, in porro est illo officia excepturi odio vel
        eaque velit alias quaerat, quis sed neque soluta. Pariatur molestias maiores quo officiis? Expedita, accusamus illo veniam
        aut sequi eum, corporis iste eveniet vitae architecto debitis voluptate eos a numquam, corrupti maiores.</p>
      </evo-tab-item>
    </evo-tabs>`,
})
class TestHostComponent {
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
    });

    it('should have seleted tab after construction', () => {
        testHostFixture.detectChanges();
        expect(testHostComponent.tabsComponent.selectedIndex).toEqual(0);
    });

});
