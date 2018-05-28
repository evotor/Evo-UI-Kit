/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ContentChild, Input } from '@angular/core';
import { FormControlDirective, FormControlName } from '@angular/forms';
import { EvoControlStateManager } from './evo-control-state-manager/evo-control-state-manager';
import { EvoControlStates } from './evo-control-state-manager/evo-control-states.enum';
var EvoBaseControl = /** @class */ (function () {
    function EvoBaseControl() {
    }
    /**
     * @return {?}
     */
    EvoBaseControl.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.formControlName && this.formControlName.control) {
            this.control = this.formControlName.control;
        }
        else if (this.formControlDirective && this.formControlDirective.control) {
            this.control = this.formControlDirective.control;
        }
        if (this.control) {
            this.stateManager = new EvoControlStateManager(this.control, this.state);
        }
        else {
            throw new Error('No template driven forms allowed with EvoUi kit');
        }
    };
    Object.defineProperty(EvoBaseControl.prototype, "showErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return this.stateManager.currentState[EvoControlStates.invalid];
        },
        enumerable: true,
        configurable: true
    });
    EvoBaseControl.propDecorators = {
        formControlName: [{ type: ContentChild, args: [FormControlName,] }],
        formControlDirective: [{ type: ContentChild, args: [FormControlDirective,] }],
        state: [{ type: Input }],
        errorsMessages: [{ type: Input }]
    };
    return EvoBaseControl;
}());
export { EvoBaseControl };
function EvoBaseControl_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoBaseControl.prototype.formControlName;
    /** @type {?} */
    EvoBaseControl.prototype.formControlDirective;
    /** @type {?} */
    EvoBaseControl.prototype.state;
    /** @type {?} */
    EvoBaseControl.prototype.errorsMessages;
    /** @type {?} */
    EvoBaseControl.prototype.control;
    /** @type {?} */
    EvoBaseControl.prototype.stateManager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWJhc2UtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBb0IsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQW1CLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRS9GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOzs7Ozs7O0lBV3JGLDJDQUFrQjs7O0lBQWxCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztTQUM3QztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDO1NBQ2xEO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFFO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7U0FDcEU7S0FDRjtJQUVELHNCQUFJLHNDQUFVOzs7O1FBQWQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakU7OztPQUFBOztrQ0F4QkEsWUFBWSxTQUFDLGVBQWU7dUNBQzVCLFlBQVksU0FBQyxvQkFBb0I7d0JBQ2pDLEtBQUs7aUNBQ0wsS0FBSzs7eUJBWFI7O1NBT2EsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElFdm9Db250cm9sU3RhdGUgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlcic7XG5pbXBvcnQgeyBJRXZvQ29udHJvbEVycm9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5cbmV4cG9ydCBjbGFzcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWU7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xEaXJlY3RpdmUpIGZvcm1Db250cm9sRGlyZWN0aXZlOiBGb3JtQ29udHJvbERpcmVjdGl2ZTtcbiAgQElucHV0KCkgc3RhdGU6IElFdm9Db250cm9sU3RhdGU7XG4gIEBJbnB1dCgpIGVycm9yc01lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yO1xuXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgc3RhdGVNYW5hZ2VyOiBFdm9Db250cm9sU3RhdGVNYW5hZ2VyO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbE5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtQ29udHJvbE5hbWUuY29udHJvbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUgJiYgdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlLmNvbnRyb2w7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgdGhpcy5zdGF0ZU1hbmFnZXIgPSBuZXcgRXZvQ29udHJvbFN0YXRlTWFuYWdlcih0aGlzLmNvbnRyb2wsIHRoaXMuc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHRlbXBsYXRlIGRyaXZlbiBmb3JtcyBhbGxvd2VkIHdpdGggRXZvVWkga2l0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNob3dFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdO1xuICB9XG59XG4iXX0=