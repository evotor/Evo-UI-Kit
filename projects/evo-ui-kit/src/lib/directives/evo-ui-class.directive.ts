import {
    Directive,
    ElementRef,
    Input,
    IterableDiffers,
    KeyValueDiffers,
    Renderer2,
    OnDestroy,
    DoCheck,
    IterableChanges,
    IterableDiffer,
    KeyValueChanges,
    KeyValueDiffer,
    ɵisListLikeIterable as isListLikeIterable,
    ɵstringify as stringify,
} from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, tap, takeUntil } from 'rxjs/operators';

const isObject = (item) => item != null && typeof item === 'object';
const isString = (item) => typeof item === 'string';
const isArray = (item) => Array.isArray(item);
const isUndefined = (item) => typeof item === 'undefined';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @ngModule CommonModule
 *
 * @usageNotes
 * ```
 *     <some-element [ngClass]="'first second'">...</some-element>
 *
 *     <some-element [ngClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
 *
 *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
 * ```
 *
 * @description
 *
 * Adds and removes CSS classes on an HTML element.
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * @publicApi
 */
class NgClass implements DoCheck {
    // TODO(issue/24571): remove '!'.
    private _iterableDiffer !: IterableDiffer<string> | null;
    // TODO(issue/24571): remove '!'.
    private _keyValueDiffer !: KeyValueDiffer<string, any> | null;
    private _initialClasses: string[] = [];
    // TODO(issue/24571): remove '!'.
    private _rawClass !: string[] | Set<string> | { [klass: string]: any };

    constructor(
        private _iterableDiffers: IterableDiffers, private _keyValueDiffers: KeyValueDiffers,
        private _ngEl: ElementRef, private _renderer: Renderer2) {}

    @Input('class')
    set klass(value: string) {
        this._removeClasses(this._initialClasses);
        this._initialClasses = typeof value === 'string' ? value.split(/\s+/) : [];
        this._applyClasses(this._initialClasses);
        this._applyClasses(this._rawClass);
    }

    @Input()
    set ngClass(value: string | string[] | Set<string> | { [klass: string]: any }) {
        this._removeClasses(this._rawClass);
        this._applyClasses(this._initialClasses);

        this._iterableDiffer = null;
        this._keyValueDiffer = null;

        this._rawClass = typeof value === 'string' ? value.split(/\s+/) : value;

        if (this._rawClass) {
            if (isListLikeIterable(this._rawClass)) {
                this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
            } else {
                this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
            }
        }
    }

    ngDoCheck(): void {
        if (this._iterableDiffer) {
            const iterableChanges = this._iterableDiffer.diff(this._rawClass as string[]);
            if (iterableChanges) {
                this._applyIterableChanges(iterableChanges);
            }
        } else if (this._keyValueDiffer) {
            const keyValueChanges = this._keyValueDiffer.diff(this._rawClass as { [k: string]: any });
            if (keyValueChanges) {
                this._applyKeyValueChanges(keyValueChanges);
            }
        }
    }

    private _applyKeyValueChanges(changes: KeyValueChanges<string, any>): void {
        changes.forEachAddedItem((record) => this._toggleClass(record.key, record.currentValue));
        changes.forEachChangedItem((record) => this._toggleClass(record.key, record.currentValue));
        changes.forEachRemovedItem((record) => {
            if (record.previousValue) {
                this._toggleClass(record.key, false);
            }
        });
    }

    private _applyIterableChanges(changes: IterableChanges<string>): void {
        changes.forEachAddedItem((record) => {
            if (typeof record.item === 'string') {
                this._toggleClass(record.item, true);
            } else {
                throw new Error(
                    `NgClass can only toggle CSS classes expressed as strings, got ${stringify(record.item)}`);
            }
        });

        changes.forEachRemovedItem((record) => this._toggleClass(record.item, false));
    }

    /**
     * Applies a collection of CSS classes to the DOM element.
     *
     * For argument of type Set and Array CSS class names contained in those collections are always
     * added.
     * For argument of type Map CSS class name in the map's key is toggled based on the value (added
     * for truthy and removed for falsy).
     */
    private _applyClasses(rawClassVal: string[] | Set<string> | { [klass: string]: any }) {
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                (<any> rawClassVal).forEach((klass: string) => this._toggleClass(klass, true));
            } else {
                Object.keys(rawClassVal).forEach(klass => this._toggleClass(klass, !!rawClassVal[klass]));
            }
        }
    }

    /**
     * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
     * purposes.
     */
    private _removeClasses(rawClassVal: string[] | Set<string> | { [klass: string]: any }) {
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                (<any> rawClassVal).forEach((klass: string) => this._toggleClass(klass, false));
            } else {
                Object.keys(rawClassVal).forEach(klass => this._toggleClass(klass, false));
            }
        }
    }

    private _toggleClass(klass: string, enabled: boolean): void {
        klass = klass.trim();
        if (klass) {
            klass.split(/\s+/g).forEach(_klass => {
                if (enabled) {
                    this._renderer.addClass(this._ngEl.nativeElement, _klass);
                } else {
                    this._renderer.removeClass(this._ngEl.nativeElement, _klass);
                }
            });
        }
    }
}

@Directive({
    selector: '[evoUiClass]',
})
export class EvoUiClassDirective extends NgClass implements OnDestroy {
    input$ = new Subject();

    subscription$ = new Subject();

    @Input('evoUiClass')
    set setterOfClass(data: any) {
        this.input$.next(data);
    }

    ngClass: any;

    private prefix: string;

    constructor(
        _iterableDiffers: IterableDiffers,
        _keyValueDiffers: KeyValueDiffers,
        _ngEl: ElementRef,
        _renderer: Renderer2,
    ) {
        super(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer);
        this.prefix = _ngEl.nativeElement.classList[0];

        this.input$.pipe(
            takeUntil(this.subscription$),
            distinctUntilChanged((a, b) => {
                let result = false;
                if ((isObject(a) && isObject(b)) || (isArray(a) && isArray(b))) {
                    result = JSON.stringify(a) === JSON.stringify(b);
                }
                if ((typeof a === 'number' && typeof b === 'number') || (isString(a) && isString(b))) {
                    result = a === b;
                }
                return result;
            }),
            tap(data => this.updateClasses(data)),
        ).subscribe();
    }

    updateClasses(data) {
        if (isArray(data)) {
            data = data.map((className: string) => `${ this.prefix }_${ className }`);
        } else if (isObject(data)) {
            data = Object.keys(data).reduce((newData: any, key: string) => {
                newData[`${ this.prefix }_${ key }`] = data[key];
                return newData;
            }, {});
        } else if (isString(data)) {
            data = data
                .split(' ')
                .map((myClass) => `${ this.prefix }_${ myClass }`)
                .join(' ');
        } else if (isUndefined(data)) {
            data = '';
        } else {
            throw new Error('Data type not allowed!');
        }

        this.ngClass = data;
    }

    ngOnDestroy() {
        this.subscription$.next();
        this.subscription$.complete();
    }
}
