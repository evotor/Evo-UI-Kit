import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EvoLetDirective} from './evo-let.directive';

@Component({
    selector: 'evo-test-cmp',
    template: '',
    standalone: true,
    imports: [EvoLetDirective],
})
export class TestComponent {
    booleanCondition = true;
}

function createTestComponent(template: string): ComponentFixture<TestComponent> {
    return TestBed.overrideComponent(TestComponent, {set: {template}}).createComponent(TestComponent);
}

describe('Structural EvoLetDirective bindings', () => {
    let fixture: ComponentFixture<TestComponent> | null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [EvoLetDirective, TestComponent],
        });
    });

    afterEach(() => {
        fixture = null;
    });

    it('should render element if value == true', () => {
        const template = '<span *evoLet="booleanCondition as b">hello</span>';
        fixture = createTestComponent(template);
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
        expect(fixture.nativeElement).toHaveText('hello');
    });

    it('should render element if value == false', () => {
        const template = '<span *evoLet="booleanCondition as b">hello</span>';
        fixture = createTestComponent(template);
        fixture.componentInstance.booleanCondition = false;
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
        expect(fixture.nativeElement).toHaveText('hello');
    });

    it('should write alias value', () => {
        const template = '<span *evoLet="booleanCondition as b">{{ b }}</span>';
        fixture = createTestComponent(template);
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
        expect(fixture.nativeElement).toHaveText('true');

        fixture.componentInstance.booleanCondition = false;
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
        expect(fixture.nativeElement).toHaveText('false');
    });
});
