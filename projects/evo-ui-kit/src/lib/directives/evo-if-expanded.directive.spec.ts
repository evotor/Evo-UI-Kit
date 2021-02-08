import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { EvoIfExpandedDirective } from "./evo-if-expanded.directive";

function createTestComponent(template: string): ComponentFixture<TestComponent> {
    return TestBed
        .overrideComponent(TestComponent, {set: {template: template}})
        .createComponent(TestComponent);
}

@Component({
    selector: 'test-cmp',
    template: ''
})
export class TestComponent {
}

describe('Structural EvoIfExpandedDirective bindings', () => {
    let fixture: ComponentFixture<TestComponent> | null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, EvoIfExpandedDirective],
        });
    })

    afterEach(() => {
        fixture = null;
    });

    it('should nothing content with default value', () => {
        fixture = createTestComponent(`<div *evoIfExpanded class="test-content">Test</div>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toBeNull();
    });

    it('should nothing content with value false', () => {
        fixture = createTestComponent(`<div *evoIfExpanded="false" class="test-content">Test</div>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toBeNull();
    });

    it('should content with value true', () => {
        fixture = createTestComponent(`<div *evoIfExpanded="true" class="test-content">Test</div>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toExist();
    });
});

describe('Attribute EvoIfExpandedDirective bindings', () => {
    let fixture: ComponentFixture<TestComponent> | null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, EvoIfExpandedDirective],
        });
    })

    afterEach(() => {
        fixture.destroy();
    });

    it('should nothing content with default value', () => {
        fixture = createTestComponent(`<ng-template evoIfExpanded><div class="test-content">Test</div></ng-template>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toBeNull();
    });

    it('should nothing content with value false', () => {
        fixture = createTestComponent(`<ng-template [evoIfExpanded]="false"><div class="test-content">Test</div></ng-template>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toBeNull();
    });

    it('should content with value true', () => {
        fixture = createTestComponent(`<ng-template [evoIfExpanded]="true"><div class="test-content">Test</div></ng-template>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toExist();
    });
});
