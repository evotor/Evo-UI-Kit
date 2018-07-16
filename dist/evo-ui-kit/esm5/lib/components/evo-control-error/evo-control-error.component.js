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
            var /** @type {?} */ errorKeys = Object.keys(this.errors || {});
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
                    styles: [".evo-error{margin-top:10px;color:#f22;font-size:14px;font-style:italic}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXZvLXVpLWtpdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7eUJBa0JqRCxDQUFDO29DQUUyQjtZQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLEtBQUssRUFBRSwyQkFBMkI7WUFDbEMsS0FBSyxFQUFFLGlCQUFpQjtTQUMzQjs7SUFFRCxzQkFBSSwrQ0FBUzs7OztRQUFiO1lBQ0kscUJBQU0sYUFBYSx3QkFDWixJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FDakMsQ0FBQztZQUNGLHFCQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztTQUNyRDs7O09BQUE7Ozs7O0lBRUQsNENBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDbkIsTUFBTSxDQUFDLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDcEM7O2dCQS9CSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGtKQUdiO29CQUNHLE1BQU0sRUFBRSxDQUFDLHlFQUF5RSxDQUFDO29CQUNuRixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDbEQ7Ozt5QkFFSSxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsS0FBSzs7bUNBbEJWOztTQWVhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2b0NvbnRyb2xFcnJvciB7XG4gICAgW2Vycm9yOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWNvbnRyb2wtZXJyb3InLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1lcnJvclwiICpuZ0Zvcj1cImxldCBlcnJvck1zZyBvZiBlcnJvcnNNYXA7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgPHNwYW4gKm5nSWY9XCJzaG93RXJyb3IoaSlcIj57eyBlcnJvck1zZyB9fTwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1lcnJvcnttYXJnaW4tdG9wOjEwcHg7Y29sb3I6I2YyMjtmb250LXNpemU6MTRweDtmb250LXN0eWxlOml0YWxpY31gXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBlcnJvcnM6IGFueTtcbiAgICBASW5wdXQoKSBlcnJvcnNNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvcjtcbiAgICBASW5wdXQoKSBzaG93Q291bnQgPSAxO1xuXG4gICAgcHJpdmF0ZSBkZWZhdWx0RXJyb3JNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvciA9IHtcbiAgICAgICAgcmVxdWlyZWQ6ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUnLFxuICAgICAgICBlbWFpbDogJ9Cd0LXQv9GA0LDQstC40LvRjNC90L4g0YPQutCw0LfQsNC90LAg0L/QvtGH0YLQsCcsXG4gICAgICAgIHBob25lOiAn0JLQstC10LTQuNGC0LUg0YLQtdC70LXRhNC+0L0nLFxuICAgIH07XG5cbiAgICBnZXQgZXJyb3JzTWFwKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEVycm9yTWVzc2FnZXMsXG4gICAgICAgICAgICAuLi4odGhpcy5lcnJvcnNNZXNzYWdlcyB8fCB7fSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzIHx8IHt9KTtcbiAgICAgICAgcmV0dXJuIGVycm9yS2V5cy5tYXAoKGtleSkgPT4gZXJyb3JNZXNzYWdlc1trZXldKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKytpbmRleCA8PSB0aGlzLnNob3dDb3VudDtcbiAgICB9XG59XG4iXX0=