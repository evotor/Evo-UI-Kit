/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/**
 * @record
 */
export function IEvoControlError() { }
function IEvoControlError_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [error: string]: string;
    */
}
var EvoControlErrorComponent = /** @class */ (function () {
    function EvoControlErrorComponent() {
        this.showCount = 1;
        this.defaultErrorMessages = {
            required: 'Заполните поле',
            email: 'Неправильно указана почта',
            phone: 'Введите телефон',
        };
    }
    Object.defineProperty(EvoControlErrorComponent.prototype, "errorsMap", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ errorMessages = tslib_1.__assign({}, this.defaultErrorMessages, (this.errorsMessages || {}));
            var /** @type {?} */ errorKeys = Object.keys(this.errors);
            return errorKeys.map(function (key) { return errorMessages[key]; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    EvoControlErrorComponent.prototype.showError = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return ++index <= this.showCount;
    };
    EvoControlErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-control-error',
                    template: "<div class=\"evo-error\" *ngFor=\"let errorMsg of errorsMap; let i = index;\">\n    <span *ngIf=\"showError(i)\">{{ errorMsg }}</span>\n</div>\n",
                    styles: [".evo-error{font-size:14px;color:#f22;font-style:italic;margin-top:10px}"],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    EvoControlErrorComponent.propDecorators = {
        errors: [{ type: Input }],
        errorsMessages: [{ type: Input }],
        showCount: [{ type: Input }]
    };
    return EvoControlErrorComponent;
}());
export { EvoControlErrorComponent };
function EvoControlErrorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoControlErrorComponent.prototype.errors;
    /** @type {?} */
    EvoControlErrorComponent.prototype.errorsMessages;
    /** @type {?} */
    EvoControlErrorComponent.prototype.showCount;
    /** @type {?} */
    EvoControlErrorComponent.prototype.defaultErrorMessages;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXZvLXVpLWtpdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7eUJBa0JqRCxDQUFDO29DQUUyQjtZQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLEtBQUssRUFBRSwyQkFBMkI7WUFDbEMsS0FBSyxFQUFFLGlCQUFpQjtTQUMzQjs7SUFFRCxzQkFBSSwrQ0FBUzs7OztRQUFiO1lBQ0kscUJBQU0sYUFBYSx3QkFDWixJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FDakMsQ0FBQztZQUNGLHFCQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1NBQ3JEOzs7T0FBQTs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUNuQixNQUFNLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUNwQzs7Z0JBL0JKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsa0pBR2I7b0JBQ0csTUFBTSxFQUFFLENBQUMseUVBQXlFLENBQUM7b0JBQ25GLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNsRDs7O3lCQUVJLEtBQUs7aUNBQ0wsS0FBSzs0QkFDTCxLQUFLOzttQ0FsQlY7O1NBZWEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRXZvQ29udHJvbEVycm9yIHtcbiAgICBbZXJyb3I6IHN0cmluZ106IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tY29udHJvbC1lcnJvcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWVycm9yXCIgKm5nRm9yPVwibGV0IGVycm9yTXNnIG9mIGVycm9yc01hcDsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICA8c3BhbiAqbmdJZj1cInNob3dFcnJvcihpKVwiPnt7IGVycm9yTXNnIH19PC9zcGFuPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWVycm9ye2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiNmMjI7Zm9udC1zdHlsZTppdGFsaWM7bWFyZ2luLXRvcDoxMHB4fWBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZXJyb3JzOiBhbnk7XG4gICAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG4gICAgQElucHV0KCkgc2hvd0NvdW50ID0gMTtcblxuICAgIHByaXZhdGUgZGVmYXVsdEVycm9yTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3IgPSB7XG4gICAgICAgIHJlcXVpcmVkOiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1JyxcbiAgICAgICAgZW1haWw6ICfQndC10L/RgNCw0LLQuNC70YzQvdC+INGD0LrQsNC30LDQvdCwINC/0L7Rh9GC0LAnLFxuICAgICAgICBwaG9uZTogJ9CS0LLQtdC00LjRgtC1INGC0LXQu9C10YTQvtC9JyxcbiAgICB9O1xuXG4gICAgZ2V0IGVycm9yc01hcCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmRlZmF1bHRFcnJvck1lc3NhZ2VzLFxuICAgICAgICAgICAgLi4uKHRoaXMuZXJyb3JzTWVzc2FnZXMgfHwge30pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgcmV0dXJuIGVycm9yS2V5cy5tYXAoKGtleSkgPT4gZXJyb3JNZXNzYWdlc1trZXldKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKytpbmRleCA8PSB0aGlzLnNob3dDb3VudDtcbiAgICB9XG59XG4iXX0=