/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, IterableDiffers, KeyValueDiffers, Renderer2 } from '@angular/core';
import { NgClass } from '@angular/common';
var /** @type {?} */ isObject = function (item) { return item != null && typeof item === 'object'; };
var ɵ0 = isObject;
var /** @type {?} */ isString = function (item) { return typeof item === 'string'; };
var ɵ1 = isString;
var /** @type {?} */ isArray = function (item) { return Array.isArray(item); };
var ɵ2 = isArray;
var EvoUiClassDirective = /** @class */ (function (_super) {
    tslib_1.__extends(EvoUiClassDirective, _super);
    function EvoUiClassDirective(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
        var _this = _super.call(this, _iterableDiffers, _keyValueDiffers, _ngEl, _renderer) || this;
        _this.prefix = _ngEl.nativeElement.classList[0];
        return _this;
    }
    Object.defineProperty(EvoUiClassDirective.prototype, "setterOfClass", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            if (isArray(data)) {
                data = data.map(function (className) { return _this.prefix + "_" + className; });
            }
            else if (isObject(data)) {
                data = Object.keys(data).reduce(function (newData, key) {
                    newData[_this.prefix + "_" + key] = data[key];
                    return newData;
                }, {});
            }
            else if (isString(data)) {
                data = data
                    .split(' ')
                    .map(function (myClass) { return _this.prefix + "_" + myClass; })
                    .join(' ');
            }
            else {
                throw new Error('Data type not allowed!');
            }
            this.ngClass = data;
        },
        enumerable: true,
        configurable: true
    });
    EvoUiClassDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[evoUiClass]'
                },] },
    ];
    /** @nocollapse */
    EvoUiClassDirective.ctorParameters = function () { return [
        { type: IterableDiffers },
        { type: KeyValueDiffers },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    EvoUiClassDirective.propDecorators = {
        setterOfClass: [{ type: Input, args: ['evoUiClass',] }]
    };
    return EvoUiClassDirective;
}(NgClass));
export { EvoUiClassDirective };
function EvoUiClassDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoUiClassDirective.prototype.ngClass;
    /** @type {?} */
    EvoUiClassDirective.prototype.prefix;
}
export { ɵ0, ɵ1, ɵ2 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUxQyxxQkFBTSxRQUFRLEdBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBeEMsQ0FBd0MsQ0FBQzs7QUFDcEUscUJBQU0sUUFBUSxHQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsT0FBTyxJQUFJLEtBQUssUUFBUSxFQUF4QixDQUF3QixDQUFDOztBQUNwRCxxQkFBTSxPQUFPLEdBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixDQUFDOzs7SUFLTCwrQ0FBTztJQTBCOUMsNkJBQVksZ0JBQWlDLEVBQUUsZ0JBQWlDLEVBQzFFLEtBQWlCLEVBQUUsU0FBb0I7UUFEN0MsWUFFRSxrQkFBTSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBRTVEO1FBREMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7S0FDaEQ7SUE3QkQsc0JBQ0ksOENBQWE7Ozs7O1FBRGpCLFVBQ2tCLElBQVM7WUFEM0IsaUJBbUJDO1lBakJDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsU0FBaUIsSUFBSyxPQUFHLEtBQUksQ0FBQyxNQUFNLFNBQUksU0FBVyxFQUE3QixDQUE2QixDQUFDLENBQUM7YUFDdkU7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBWSxFQUFFLEdBQVc7b0JBQ3hELE9BQU8sQ0FBSSxLQUFJLENBQUMsTUFBTSxTQUFJLEdBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQztpQkFDaEIsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNSO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksR0FBRyxJQUFJO3FCQUNSLEtBQUssQ0FBQyxHQUFHLENBQUM7cUJBQ1YsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUcsS0FBSSxDQUFDLE1BQU0sU0FBSSxPQUFTLEVBQTNCLENBQTJCLENBQUM7cUJBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7OztPQUFBOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFUc0MsZUFBZTtnQkFBRSxlQUFlO2dCQUFuRCxVQUFVO2dCQUEyQyxTQUFTOzs7Z0NBVy9FLEtBQUssU0FBQyxZQUFZOzs4QkFYckI7RUFVeUMsT0FBTztTQUFuQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBJdGVyYWJsZURpZmZlcnMsIEtleVZhbHVlRGlmZmVycywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgaXNPYmplY3QgPSAoaXRlbSkgPT4gaXRlbSAhPSBudWxsICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JztcbmNvbnN0IGlzU3RyaW5nID0gKGl0ZW0pID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJztcbmNvbnN0IGlzQXJyYXkgPSAoaXRlbSkgPT4gQXJyYXkuaXNBcnJheShpdGVtKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2V2b1VpQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUNsYXNzRGlyZWN0aXZlIGV4dGVuZHMgTmdDbGFzcyB7XG4gIEBJbnB1dCgnZXZvVWlDbGFzcycpXG4gIHNldCBzZXR0ZXJPZkNsYXNzKGRhdGE6IGFueSkge1xuICAgIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YS5tYXAoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtjbGFzc05hbWV9YCk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgZGF0YSA9IE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZSgobmV3RGF0YTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBuZXdEYXRhW2Ake3RoaXMucHJlZml4fV8ke2tleX1gXSA9IGRhdGFba2V5XTtcbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgICB9LCB7fSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhkYXRhKSkge1xuICAgICAgZGF0YSA9IGRhdGFcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgobXlDbGFzcykgPT4gYCR7dGhpcy5wcmVmaXh9XyR7bXlDbGFzc31gKVxuICAgICAgICAuam9pbignICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgdHlwZSBub3QgYWxsb3dlZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLm5nQ2xhc3MgPSBkYXRhO1xuICB9XG5cbiAgbmdDbGFzczogYW55O1xuXG4gIHByaXZhdGUgcHJlZml4OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgICAgIF9uZ0VsOiBFbGVtZW50UmVmLCBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKF9pdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnMsIF9uZ0VsLCBfcmVuZGVyZXIpO1xuICAgIHRoaXMucHJlZml4ID0gX25nRWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RbMF07XG4gIH1cbn1cbiJdfQ==