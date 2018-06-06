/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, IterableDiffers, KeyValueDiffers, Renderer2 } from '@angular/core';
import { NgClass } from '@angular/common';
const /** @type {?} */ isObject = (item) => item != null && typeof item === 'object';
const ɵ0 = isObject;
const /** @type {?} */ isString = (item) => typeof item === 'string';
const ɵ1 = isString;
const /** @type {?} */ isArray = (item) => Array.isArray(item);
const ɵ2 = isArray;
export class EvoUiClassDirective extends NgClass {
    /**
     * @param {?} _iterableDiffers
     * @param {?} _keyValueDiffers
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    constructor(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
        super(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer);
        this.prefix = _ngEl.nativeElement.classList[0];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set setterOfClass(data) {
        if (isArray(data)) {
            data = data.map((className) => `${this.prefix}_${className}`);
        }
        else if (isObject(data)) {
            data = Object.keys(data).reduce((newData, key) => {
                newData[`${this.prefix}_${key}`] = data[key];
                return newData;
            }, {});
        }
        else if (isString(data)) {
            data = data
                .split(' ')
                .map((myClass) => `${this.prefix}_${myClass}`)
                .join(' ');
        }
        else {
            throw new Error('Data type not allowed!');
        }
        this.ngClass = data;
    }
}
EvoUiClassDirective.decorators = [
    { type: Directive, args: [{
                selector: '[evoUiClass]'
            },] },
];
/** @nocollapse */
EvoUiClassDirective.ctorParameters = () => [
    { type: IterableDiffers },
    { type: KeyValueDiffers },
    { type: ElementRef },
    { type: Renderer2 }
];
EvoUiClassDirective.propDecorators = {
    setterOfClass: [{ type: Input, args: ['evoUiClass',] }]
};
function EvoUiClassDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoUiClassDirective.prototype.ngClass;
    /** @type {?} */
    EvoUiClassDirective.prototype.prefix;
}
export { ɵ0, ɵ1, ɵ2 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFDLHVCQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUM7O0FBQ3BFLHVCQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDOztBQUNwRCx1QkFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBSzlDLE1BQU0sMEJBQTJCLFNBQVEsT0FBTzs7Ozs7OztJQTBCOUMsWUFBWSxnQkFBaUMsRUFBRSxnQkFBaUMsRUFDMUUsS0FBaUIsRUFBRSxTQUFvQjtRQUMzQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7Ozs7O0lBN0JELElBQ0ksYUFBYSxDQUFDLElBQVM7UUFDekIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBWSxFQUFFLEdBQVcsRUFBRSxFQUFFO2dCQUM1RCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2hCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxJQUFJO2lCQUNSLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxFQUFFLENBQUM7aUJBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNkO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUNyQjs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQVRzQyxlQUFlO1lBQUUsZUFBZTtZQUFuRCxVQUFVO1lBQTJDLFNBQVM7Ozs0QkFXL0UsS0FBSyxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBJdGVyYWJsZURpZmZlcnMsIEtleVZhbHVlRGlmZmVycywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgaXNPYmplY3QgPSAoaXRlbSkgPT4gaXRlbSAhPSBudWxsICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JztcbmNvbnN0IGlzU3RyaW5nID0gKGl0ZW0pID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJztcbmNvbnN0IGlzQXJyYXkgPSAoaXRlbSkgPT4gQXJyYXkuaXNBcnJheShpdGVtKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2V2b1VpQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUNsYXNzRGlyZWN0aXZlIGV4dGVuZHMgTmdDbGFzcyB7XG4gIEBJbnB1dCgnZXZvVWlDbGFzcycpXG4gIHNldCBzZXR0ZXJPZkNsYXNzKGRhdGE6IGFueSkge1xuICAgIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YS5tYXAoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtjbGFzc05hbWV9YCk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgZGF0YSA9IE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZSgobmV3RGF0YTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBuZXdEYXRhW2Ake3RoaXMucHJlZml4fV8ke2tleX1gXSA9IGRhdGFba2V5XTtcbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgICB9LCB7fSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhkYXRhKSkge1xuICAgICAgZGF0YSA9IGRhdGFcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgobXlDbGFzcykgPT4gYCR7dGhpcy5wcmVmaXh9XyR7bXlDbGFzc31gKVxuICAgICAgICAuam9pbignICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgdHlwZSBub3QgYWxsb3dlZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLm5nQ2xhc3MgPSBkYXRhO1xuICB9XG5cbiAgbmdDbGFzczogYW55O1xuXG4gIHByaXZhdGUgcHJlZml4OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgICAgIF9uZ0VsOiBFbGVtZW50UmVmLCBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKF9pdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnMsIF9uZ0VsLCBfcmVuZGVyZXIpO1xuICAgIHRoaXMucHJlZml4ID0gX25nRWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RbMF07XG4gIH1cbn1cbiJdfQ==