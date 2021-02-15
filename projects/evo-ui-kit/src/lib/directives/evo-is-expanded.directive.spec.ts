import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EvoIsExpandedDirective } from './evo-is-expanded.directive';

@Component({
    selector: 'evo-test-cmp',
    template: ''
})
export class TestComponent {
}

function createTestComponent(template: string): ComponentFixture<TestComponent> {
    return TestBed
        .overrideComponent(TestComponent, {set: {template: template}})
        .createComponent(TestComponent);
}

describe('Structural EvoIsExpandedDirective bindings', () => {
    let fixture: ComponentFixture<TestComponent> | null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, EvoIsExpandedDirective],
        });
    });

    afterEach(() => {
        fixture = null;
    });

    it('should hide content with default value', () => {
        fixture = createTestComponent(`<div *evoIsExpanded class="test-content">Test</div>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toBeNull();
    });

    it('should hide content with value false', () => {
        fixture = createTestComponent(`<div *evoIsExpanded="false" class="test-content">Test</div>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toBeNull();
    });

    it('should show content with value true', () => {
        fixture = createTestComponent(`<div *evoIsExpanded="true" class="test-content">Test</div>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toExist();
    });
});

describe('Attribute EvoIsExpandedDirective bindings', () => {
    let fixture: ComponentFixture<TestComponent> | null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, EvoIsExpandedDirective],
        });
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should hide content with default value', () => {
        fixture = createTestComponent(`<ng-template evoIsExpanded><div class="test-content">Test</div></ng-template>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toBeNull();
    });

    it('should hide content with value false', () => {
        fixture = createTestComponent(`<ng-template [evoIsExpanded]="false"><div class="test-content">Test</div></ng-template>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toBeNull();
    });

    it('should show content with value true', () => {
        fixture = createTestComponent(`<ng-template [evoIsExpanded]="true"><div class="test-content">Test</div></ng-template>`);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.test-content'))).toExist();
    });
});
