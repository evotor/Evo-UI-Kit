import {
    Directive,
    DoCheck,
    ElementRef,
    Input,
    IterableChanges,
    IterableDiffer,
    IterableDiffers,
    KeyValueChanges,
    KeyValueDiffer,
    KeyValueDiffers,
    Renderer2,
    ɵstringify as stringify,
} from '@angular/core';

// TODO: actualize to current realization of NgClass

function isJsObject(o: any): boolean {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}

function isListLikeIterable(obj: any): boolean {
    if (!isJsObject(obj)) return false;
    return (
        Array.isArray(obj) ||
        (!(obj instanceof Map) && // JS Map are iterables but return entries as [k, v]
            Symbol.iterator in obj)
    ); // JS Iterable have a Symbol.iterator prop
}

/**
 * @usageNotes
 * ```
 *     <some-element [evoUiClass]="'first second'">...</some-element>
 *
 *     <some-element [evoUiClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [evoUiClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [evoUiClass]="stringExp|arrayExp|objExp">...</some-element>
 *
 *     <some-element [evoUiClass]="{'class1 class2 class3' : true}">...</some-element>
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
 */
@Directive({
    selector: '[evoUiClass]',
})
export class EvoUiClassDirective implements DoCheck {
    private iterableDiffer!: IterableDiffer<string> | null;
    private keyValueDiffer!: KeyValueDiffer<string, any> | null;
    private initialClasses: string[] = [];
    private rawClass!: string[] | Set<string> | {[klass: string]: any};

    constructor(
        private _iterableDiffers: IterableDiffers,
        private _keyValueDiffers: KeyValueDiffers,
        private _ngEl: ElementRef,
        private _renderer: Renderer2,
    ) {}

    @Input('class')
    set klass(value: string) {
        this.removeClasses(this.initialClasses);
        this.initialClasses = typeof value === 'string' ? value.split(/\s+/) : [];
        this.applyClasses(this.initialClasses);
        this.applyClasses(this.rawClass);
    }

    @Input()
    set evoUiClass(value: string | string[] | Set<string> | {[klass: string]: any}) {
        this.removeClasses(this.rawClass);
        this.applyClasses(this.initialClasses);

        this.iterableDiffer = null;
        this.keyValueDiffer = null;

        this.rawClass = typeof value === 'string' ? value.split(/\s+/) : value;

        if (this.rawClass) {
            if (isListLikeIterable(this.rawClass)) {
                this.iterableDiffer = this._iterableDiffers.find(this.rawClass).create();
            } else {
                this.keyValueDiffer = this._keyValueDiffers.find(this.rawClass).create();
            }
        }
    }

    ngDoCheck(): void {
        if (this.iterableDiffer) {
            const iterableChanges = this.iterableDiffer.diff(this.rawClass as string[]);
            if (iterableChanges) {
                this.applyIterableChanges(iterableChanges);
            }
        } else if (this.keyValueDiffer) {
            const keyValueChanges = this.keyValueDiffer.diff(this.rawClass as {[k: string]: any});
            if (keyValueChanges) {
                this.applyKeyValueChanges(keyValueChanges);
            }
        }
    }

    private applyKeyValueChanges(changes: KeyValueChanges<string, any>): void {
        changes.forEachAddedItem((record) => this.toggleClass(record.key, record.currentValue));
        changes.forEachChangedItem((record) => this.toggleClass(record.key, record.currentValue));
        changes.forEachRemovedItem((record) => {
            if (record.previousValue) {
                this.toggleClass(record.key, false);
            }
        });
    }

    private applyIterableChanges(changes: IterableChanges<string>): void {
        changes.forEachAddedItem((record) => {
            if (typeof record.item === 'string') {
                this.toggleClass(record.item, true);
            } else {
                throw new Error(
                    `EvoUiClass can only toggle CSS classes expressed as strings, got ${stringify(record.item)}`,
                );
            }
        });

        changes.forEachRemovedItem((record) => this.toggleClass(record.item, false));
    }

    /**
     * Applies a collection of CSS classes to the DOM element.
     *
     * For argument of type Set and Array CSS class names contained in those collections are always
     * added.
     * For argument of type Map CSS class name in the map's key is toggled based on the value (added
     * for truthy and removed for falsy).
     */
    private applyClasses(rawClassVal: string[] | Set<string> | {[klass: string]: any}) {
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                (rawClassVal as any).forEach((klass: string) => this.toggleClass(klass, true));
            } else {
                Object.keys(rawClassVal).forEach((klass) => this.toggleClass(klass, !!rawClassVal[klass]));
            }
        }
    }

    /**
     * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
     * purposes.
     */
    private removeClasses(rawClassVal: string[] | Set<string> | {[klass: string]: any}) {
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                (rawClassVal as any).forEach((klass: string) => this.toggleClass(klass, false));
            } else {
                Object.keys(rawClassVal).forEach((klass) => this.toggleClass(klass, false));
            }
        }
    }

    private toggleClass(klass: string, enabled: boolean): void {
        const prefix = this.initialClasses[0];

        const prefixClasses = (classes: string) => {
            return classes
                .trim()
                .split(' ')
                .filter((k) => k.trim())
                .map((k) => prefix + '_' + k)
                .join(' ');
        };

        klass = this.initialClasses.indexOf(klass) === -1 ? prefixClasses(klass) : klass.trim();

        if (klass) {
            klass.split(/\s+/g).forEach((_klass) => {
                if (enabled) {
                    this._renderer.addClass(this._ngEl.nativeElement, _klass);
                } else {
                    this._renderer.removeClass(this._ngEl.nativeElement, _klass);
                }
            });
        }
    }
}
