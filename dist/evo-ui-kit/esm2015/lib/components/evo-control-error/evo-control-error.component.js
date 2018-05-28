/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export class EvoControlErrorComponent {
    constructor() {
        this.showCount = 1;
        this.defaultErrorMessages = {
            required: 'Заполните поле',
            email: 'Неправильно указана почта',
            phone: 'Введите телефон',
        };
    }
    /**
     * @return {?}
     */
    get errorsMap() {
        const /** @type {?} */ errorMessages = Object.assign({}, this.defaultErrorMessages, (this.errorsMessages || {}));
        const /** @type {?} */ errorKeys = Object.keys(this.errors);
        return errorKeys.map((key) => errorMessages[key]);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showError(index) {
        return ++index <= this.showCount;
    }
}
EvoControlErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-control-error',
                template: `<div class="evo-error" *ngFor="let errorMsg of errorsMap; let i = index;">
    <span *ngIf="showError(i)">{{ errorMsg }}</span>
</div>
`,
                styles: [`.evo-error{font-size:14px;color:#f22;font-style:italic;margin-top:10px}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
EvoControlErrorComponent.propDecorators = {
    errors: [{ type: Input }],
    errorsMessages: [{ type: Input }],
    showCount: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXZvLXVpLWtpdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFlMUUsTUFBTTs7eUJBR21CLENBQUM7b0NBRTJCO1lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsS0FBSyxFQUFFLDJCQUEyQjtZQUNsQyxLQUFLLEVBQUUsaUJBQWlCO1NBQzNCOzs7OztJQUVELElBQUksU0FBUztRQUNULHVCQUFNLGFBQWEscUJBQ1osSUFBSSxDQUFDLG9CQUFvQixFQUN6QixDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQ2pDLENBQUM7UUFDRix1QkFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3JEOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ25CLE1BQU0sQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3BDOzs7WUEvQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7O0NBR2I7Z0JBQ0csTUFBTSxFQUFFLENBQUMseUVBQXlFLENBQUM7Z0JBQ25GLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOzs7cUJBRUksS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFdm9Db250cm9sRXJyb3Ige1xuICAgIFtlcnJvcjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jb250cm9sLWVycm9yJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tZXJyb3JcIiAqbmdGb3I9XCJsZXQgZXJyb3JNc2cgb2YgZXJyb3JzTWFwOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgIDxzcGFuICpuZ0lmPVwic2hvd0Vycm9yKGkpXCI+e3sgZXJyb3JNc2cgfX08L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tZXJyb3J7Zm9udC1zaXplOjE0cHg7Y29sb3I6I2YyMjtmb250LXN0eWxlOml0YWxpYzttYXJnaW4tdG9wOjEwcHh9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBlcnJvcnM6IGFueTtcbiAgICBASW5wdXQoKSBlcnJvcnNNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvcjtcbiAgICBASW5wdXQoKSBzaG93Q291bnQgPSAxO1xuXG4gICAgcHJpdmF0ZSBkZWZhdWx0RXJyb3JNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvciA9IHtcbiAgICAgICAgcmVxdWlyZWQ6ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUnLFxuICAgICAgICBlbWFpbDogJ9Cd0LXQv9GA0LDQstC40LvRjNC90L4g0YPQutCw0LfQsNC90LAg0L/QvtGH0YLQsCcsXG4gICAgICAgIHBob25lOiAn0JLQstC10LTQuNGC0LUg0YLQtdC70LXRhNC+0L0nLFxuICAgIH07XG5cbiAgICBnZXQgZXJyb3JzTWFwKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEVycm9yTWVzc2FnZXMsXG4gICAgICAgICAgICAuLi4odGhpcy5lcnJvcnNNZXNzYWdlcyB8fCB7fSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3JLZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICByZXR1cm4gZXJyb3JLZXlzLm1hcCgoa2V5KSA9PiBlcnJvck1lc3NhZ2VzW2tleV0pO1xuICAgIH1cblxuICAgIHNob3dFcnJvcihpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiArK2luZGV4IDw9IHRoaXMuc2hvd0NvdW50O1xuICAgIH1cbn1cbiJdfQ==