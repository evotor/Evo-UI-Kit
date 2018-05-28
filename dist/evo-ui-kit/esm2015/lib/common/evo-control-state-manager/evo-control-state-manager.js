/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class EvoControlStateManager {
    /**
     * @param {?} control
     * @param {?=} extraStates
     */
    constructor(control, extraStates) {
        this.control = control;
    }
    /**
     * @return {?}
     */
    get currentState() {
        // TODO merge conditions with extraStates
        return {
            valid: this.control.dirty && this.control.touched && this.control.valid,
            invalid: this.control.dirty && this.control.touched && this.control.invalid,
        };
    }
}
function EvoControlStateManager_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoControlStateManager.prototype.control;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTTs7Ozs7SUFHSixZQUFZLE9BQXdCLEVBQUUsV0FBOEI7UUFDbEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7Ozs7SUFFRCxJQUFJLFlBQVk7O1FBR2QsTUFBTSxDQUFDO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztZQUN2RSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1NBQzVFLENBQUM7S0FDSDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUV2b0NvbnRyb2xTdGF0ZSB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXIge1xuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBleHRyYVN0YXRlcz86IElFdm9Db250cm9sU3RhdGUpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRTdGF0ZSgpOiBJRXZvQ29udHJvbFN0YXRlIHtcbiAgICAvLyBUT0RPIG1lcmdlIGNvbmRpdGlvbnMgd2l0aCBleHRyYVN0YXRlc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkOiB0aGlzLmNvbnRyb2wuZGlydHkgJiYgdGhpcy5jb250cm9sLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sLnZhbGlkLFxuICAgICAgaW52YWxpZDogdGhpcy5jb250cm9sLmRpcnR5ICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC5pbnZhbGlkLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==