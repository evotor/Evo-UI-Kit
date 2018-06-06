/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoControlStateManager = /** @class */ (function () {
    function EvoControlStateManager(control, extraStates) {
        this.control = control;
    }
    Object.defineProperty(EvoControlStateManager.prototype, "currentState", {
        get: /**
         * @return {?}
         */
        function () {
            // TODO merge conditions with extraStates
            return {
                valid: this.control.dirty && this.control.touched && this.control.valid,
                invalid: this.control.dirty && this.control.touched && this.control.invalid,
            };
        },
        enumerable: true,
        configurable: true
    });
    return EvoControlStateManager;
}());
export { EvoControlStateManager };
function EvoControlStateManager_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoControlStateManager.prototype.control;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsSUFBQTtJQUdFLGdDQUFZLE9BQXdCLEVBQUUsV0FBOEI7UUFDbEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7SUFFRCxzQkFBSSxnREFBWTs7OztRQUFoQjs7WUFHRSxNQUFNLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDdkUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzthQUM1RSxDQUFDO1NBQ0g7OztPQUFBO2lDQWpCSDtJQWtCQyxDQUFBO0FBZkQsa0NBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJRXZvQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbFN0YXRlTWFuYWdlciB7XG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBjb25zdHJ1Y3Rvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGV4dHJhU3RhdGVzPzogSUV2b0NvbnRyb2xTdGF0ZSkge1xuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gIH1cblxuICBnZXQgY3VycmVudFN0YXRlKCk6IElFdm9Db250cm9sU3RhdGUge1xuICAgIC8vIFRPRE8gbWVyZ2UgY29uZGl0aW9ucyB3aXRoIGV4dHJhU3RhdGVzXG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wudmFsaWQsXG4gICAgICBpbnZhbGlkOiB0aGlzLmNvbnRyb2wuZGlydHkgJiYgdGhpcy5jb250cm9sLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sLmludmFsaWQsXG4gICAgfTtcbiAgfVxufVxuIl19