import {Component} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoUiClassDirective} from './evo-ui-class.directive';

describe('EvoUiClass binding to CSS class list', () => {
    let fixture: ComponentFixture<any> | null;
    const prefix = 'bem-block';

    function normalizeClassNames(classes: string) {
        return classes.trim().split(' ').sort().filter((k) => k).join(' ');
    }

    function prefixClassNames(classes) {
        if (!classes) {
            return '';
        }

        return normalizeClassNames(classes).split(' ').map(k => prefix + '_' + k).join(' ');
    }

    function detectChangesAndExpectClassName(prefixable: string, nonPrefixable: string = ''): void {
        fixture.detectChanges();
        const nonNormalizedClassName = fixture.debugElement.children[0].nativeElement.className;

        const expected = normalizeClassNames([prefix, prefixClassNames(prefixable), nonPrefixable].join(' '));

        expect(normalizeClassNames(nonNormalizedClassName)).toEqual(expected);
    }

    function getComponent(): TestComponent {
        return fixture.debugElement.componentInstance;
    }

    afterEach(() => {
        fixture = null;
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, EvoUiClassDirective],
        });
    });

    it('should clean up when the directive is destroyed', waitForAsync(() => {
        fixture = createTestComponent(`<div class="${ prefix }" *ngFor="let item of items" [evoUiClass]="item"></div>`);

        getComponent().items = [['0']];
        fixture.detectChanges();
        getComponent().items = [['1']];
        detectChangesAndExpectClassName('1');
    }));

    describe('expressions evaluating to objects', () => {

        it('should add classes specified in an object literal', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="{foo: true, bar: false}"></div>`);

            detectChangesAndExpectClassName('foo');
        }));

        it('should add classes specified in an object literal without change in class names',
            waitForAsync(() => {
                fixture =
                    createTestComponent(`<div class="${ prefix }" [evoUiClass]="{'foo-bar': true, 'fooBar': true}"></div>`);

                detectChangesAndExpectClassName('foo-bar fooBar');
            }));

        it('should add and remove classes based on changes in object literal values', waitForAsync(() => {
            fixture =
                createTestComponent(`<div class="${ prefix }" [evoUiClass]="{foo: condition, bar: !condition}"></div>`);

            detectChangesAndExpectClassName('foo');

            getComponent().condition = false;
            detectChangesAndExpectClassName('bar');
        }));

        it('should add and remove classes based on changes to the expression object', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="objExpr"></div>`);
            const objExpr = getComponent().objExpr;

            detectChangesAndExpectClassName('foo');

            objExpr['bar'] = true;
            detectChangesAndExpectClassName('foo bar');

            objExpr['baz'] = true;
            detectChangesAndExpectClassName('foo bar baz');

            delete (objExpr['bar']);
            detectChangesAndExpectClassName('foo baz');
        }));

        it('should add and remove classes based on reference changes to the expression object',
            waitForAsync(() => {
                fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="objExpr"></div>`);

                detectChangesAndExpectClassName('foo');

                getComponent().objExpr = {foo: true, bar: true};
                detectChangesAndExpectClassName('foo bar');

                getComponent().objExpr = {baz: true};
                detectChangesAndExpectClassName('baz');
            }));

        it('should remove active classes when expression evaluates to null', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="objExpr"></div>`);

            detectChangesAndExpectClassName('foo');

            getComponent().objExpr = null;
            detectChangesAndExpectClassName('');

            getComponent().objExpr = {'foo': false, 'bar': true};
            detectChangesAndExpectClassName('bar');
        }));


        it('should allow multiple classes per expression', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="objExpr"></div>`);

            getComponent().objExpr = {'bar baz': true, 'bar1 baz1': true};
            detectChangesAndExpectClassName('bar baz bar1 baz1');

            getComponent().objExpr = {'bar baz': false, 'bar1 baz1': true};
            detectChangesAndExpectClassName('bar1 baz1');
        }));

        it('should split by one or more spaces between classes', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="objExpr"></div>`);

            getComponent().objExpr = {'foo bar     baz': true};
            detectChangesAndExpectClassName('foo bar baz');
        }));
    });

    describe('expressions evaluating to lists', () => {

        it('should add classes specified in a list literal', waitForAsync(() => {
            fixture =
                createTestComponent(`<div class="${ prefix }" [evoUiClass]="['foo', 'bar', 'foo-bar', 'fooBar']"></div>`);

            detectChangesAndExpectClassName('foo bar foo-bar fooBar');
        }));

        it('should add and remove classes based on changes to the expression', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="arrExpr"></div>`);
            const arrExpr = getComponent().arrExpr;
            detectChangesAndExpectClassName('foo');

            arrExpr.push('bar');
            detectChangesAndExpectClassName('foo bar');

            arrExpr[1] = 'baz';
            detectChangesAndExpectClassName('foo baz');

            getComponent().arrExpr = arrExpr.filter((v: string) => v !== 'baz');
            detectChangesAndExpectClassName('foo');
        }));

        it('should add and remove classes when a reference changes', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="arrExpr"></div>`);
            detectChangesAndExpectClassName('foo');

            getComponent().arrExpr = ['bar'];
            detectChangesAndExpectClassName('bar');
        }));

        it('should take initial classes into account when a reference changes', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix } foo" [evoUiClass]="arrExpr"></div>`);
            detectChangesAndExpectClassName('', 'foo');

            getComponent().arrExpr = ['bar'];
            detectChangesAndExpectClassName('bar', 'foo');
        }));

        it('should ignore empty or blank class names', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix } foo" [evoUiClass]="arrExpr"></div>`);
            getComponent().arrExpr = ['', '  '];
            detectChangesAndExpectClassName('', 'foo');
        }));

        it('should trim blanks from class names', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix } foo" [evoUiClass]="arrExpr"></div>`);

            getComponent().arrExpr = [' bar  '];
            detectChangesAndExpectClassName('bar', 'foo');
        }));


        it('should allow multiple classes per item in arrays', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="arrExpr"></div>`);

            getComponent().arrExpr = ['foo bar baz', 'foo1 bar1   baz1'];
            detectChangesAndExpectClassName('foo bar baz foo1 bar1 baz1');

            getComponent().arrExpr = ['foo bar   baz foobar'];
            detectChangesAndExpectClassName('foo bar baz foobar');
        }));

        it('should throw with descriptive error message when CSS class is not a string', () => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="['foo', {}]"></div>`);
            expect(() => fixture.detectChanges())
                .toThrowError(
                    /EvoUiClass can only toggle CSS classes expressed as strings, got \[object Object\]/);
        });
    });

    describe('expressions evaluating to sets', () => {

        it('should add and remove classes if the set instance changed', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="setExpr"></div>`);
            let setExpr = new Set<string>();
            setExpr.add('bar');
            getComponent().setExpr = setExpr;
            detectChangesAndExpectClassName('bar');

            setExpr = new Set<string>();
            setExpr.add('baz');
            getComponent().setExpr = setExpr;
            detectChangesAndExpectClassName('baz');
        }));
    });

    describe('expressions evaluating to string', () => {

        it('should add classes specified in a string literal', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="'foo bar foo-bar fooBar'"></div>`);
            detectChangesAndExpectClassName('foo bar foo-bar fooBar');
        }));

        it('should add and remove classes based on changes to the expression', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="strExpr"></div>`);
            detectChangesAndExpectClassName('foo');

            getComponent().strExpr = 'foo bar';
            detectChangesAndExpectClassName('foo bar');


            getComponent().strExpr = 'baz';
            detectChangesAndExpectClassName('baz');
        }));

        it('should remove active classes when switching from string to null', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix }" [evoUiClass]="strExpr"></div>`);
            detectChangesAndExpectClassName('foo');

            getComponent().strExpr = null;
            detectChangesAndExpectClassName('');
        }));

        it('should take initial classes into account when switching from string to null',
            waitForAsync(() => {
                fixture = createTestComponent(`<div class="${ prefix } foo" [evoUiClass]="strExpr"></div>`);
                detectChangesAndExpectClassName('', 'foo');

                getComponent().strExpr = null;
                detectChangesAndExpectClassName('', 'foo');
            }));

        it('should ignore empty and blank strings', waitForAsync(() => {
            fixture = createTestComponent(`<div class="${ prefix } foo" [evoUiClass]="strExpr"></div>`);
            getComponent().strExpr = '';
            detectChangesAndExpectClassName('', 'foo');
        }));

    });

    describe('cooperation with other class-changing constructs', () => {

        it('should co-operate with the class attribute', waitForAsync(() => {
            fixture = createTestComponent(`<div [evoUiClass]="objExpr" class="${ prefix } init foo"></div>`);
            const objExpr = getComponent().objExpr;

            objExpr['bar'] = true;
            detectChangesAndExpectClassName('bar', 'init foo');

            objExpr['foo'] = false;
            detectChangesAndExpectClassName('bar', 'init');

            getComponent().objExpr = null;
            detectChangesAndExpectClassName('', 'init foo');
        }));

        it('should co-operate with the interpolated class attribute', waitForAsync(() => {
            fixture = createTestComponent(`<div [evoUiClass]="objExpr" class="${ prefix } {{'init foo'}}"></div>`);
            const objExpr = getComponent().objExpr;

            objExpr['bar'] = true;
            detectChangesAndExpectClassName('bar', 'init foo');

            objExpr['foo'] = false;
            detectChangesAndExpectClassName('bar', 'init');

            getComponent().objExpr = null;
            detectChangesAndExpectClassName('', 'init foo');
        }));

        it('should co-operate with the interpolated class attribute when interpolation changes',
            waitForAsync(() => {
                fixture = createTestComponent(
                    `<div [evoUiClass]="{large: false, small: true}" class="${ prefix } {{strExpr}}"></div>`);

                detectChangesAndExpectClassName(`small`, 'foo');

                getComponent().strExpr = 'bar';
                detectChangesAndExpectClassName(`small`, 'bar');
            }));
    });
});


// tslint:disable-next-line:component-selector
@Component({selector: 'test-cmp', template: ''})
class TestComponent {
    condition = true;
    items: any[];
    arrExpr: string[] = ['foo'];
    setExpr: Set<string> = new Set<string>();
    objExpr: {[klass: string]: any} | null = {'foo': true, 'bar': false};
    strExpr: string | null = 'foo';

    constructor() {
        this.setExpr.add('foo');
    }
}

function createTestComponent(template: string): ComponentFixture<TestComponent> {
    return TestBed
        .overrideComponent(TestComponent, {set: {template: template}})
        .createComponent(TestComponent);
}
