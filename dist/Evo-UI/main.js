(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/evo-ui-kit/fesm5/evo-ui-kit.js":
/*!*********************************************!*\
  !*** ./dist/evo-ui-kit/fesm5/evo-ui-kit.js ***!
  \*********************************************/
/*! exports provided: EvoUiKitModule, ɵc, ɵf, ɵa, ɵb, ɵd, ɵe, ɵg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvoUiKitModule", function() { return EvoUiKitModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return EvoBaseControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return EvoBannerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return EvoButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return EvoCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return EvoControlErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return EvoInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return EvoUiClassDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_4__);






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoButtonComponent = /** @class */ (function () {
    function EvoButtonComponent(elRef) {
        this.elRef = elRef;
        this.disabled = false;
        this._loading = false;
    }
    Object.defineProperty(EvoButtonComponent.prototype, "totalClasses", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ classes = [];
            if (this.size) {
                classes.push(this.size);
            }
            if (this.color) {
                classes.push(this.color);
            }
            if (this._loading) {
                classes.push('loading');
            }
            if (this.disabled) {
                classes.push('disabled');
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvoButtonComponent.prototype, "totalStyles", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ result = {};
            if (this._loading) {
                result['width'] = this.clientWidth + "px";
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvoButtonComponent.prototype, "loading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.clientWidth = this.elRef.nativeElement.getBoundingClientRect().width;
            this._loading = value;
        },
        enumerable: true,
        configurable: true
    });
    EvoButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'evo-button',
                    template: "<div class=\"evo-button\" [evoUiClass]=\"totalClasses\" [ngStyle]=\"totalStyles\">\n    <span *ngIf=\"!loading\">\n        <ng-content></ng-content>\n    </span>\n    <span *ngIf=\"loading\" class=\"evo-button__dots\">\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n    </span>\n</div>\n",
                    styles: ["@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}.evo-button{display:inline-block;padding:0 30px;height:44px;line-height:44px;vertical-align:middle;text-align:center;background-image:none;white-space:nowrap;font-family:museo,Arial,sans-serif;font-weight:700;font-size:16px;color:#fff;text-transform:uppercase;border-radius:30px;background-color:#ff7800;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s}.evo-button:hover{background-color:#ff9d47;color:#fff}.evo-button:active,.evo-button:focus{background-color:#cc6000;color:#fff;outline:0}.evo-button:disabled,.evo-button_disabled{background:#d6d6d6!important;border-color:#d6d6d6!important;color:#fff!important;cursor:not-allowed}.evo-button_lined{background-color:#fff;color:#ff7800;border:1px solid #ff7800}.evo-button_lined:hover{background-color:#ff7800;color:#fff}.evo-button_lined:active,.evo-button_lined:focus{background-color:#cc6000;color:#fff;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{background-color:#fff;color:#546e7a;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{background-color:#546e7a;color:#fff}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{background-color:#283239;color:#fff;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{background-color:#fff;color:#8bc34a;border:1px solid #8bc34a}.evo-button_green-lined:hover{background-color:#8bc34a;color:#fff}.evo-button_green-lined:active,.evo-button_green-lined:focus{background-color:#6f9c3b;color:#fff;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_full-width{width:100%;text-align:center}.evo-button_small{padding:0 20px;height:30px;line-height:30px;font-size:14px}.evo-button_large{padding:0 40px;height:60px;line-height:60px;font-size:18px}.evo-button_icon{padding-left:22px;padding-right:22px;display:inline-flex;align-items:center}.evo-button_loading{pointer-events:none;position:relative}.evo-button__dots{position:absolute;top:50%;left:50%;margin-left:-30px;margin-top:-5px}.evo-button__dot{width:10px;height:10px;border-radius:50%;float:left;background:currentColor;margin:0 5px;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    EvoButtonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    EvoButtonComponent.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return EvoButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EvoControlStates = {
    valid: 'valid',
    invalid: 'invalid',
};

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
        formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],] }],
        formControlDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"],] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        errorsMessages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return EvoBaseControl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoCheckboxComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(EvoCheckboxComponent, _super);
    function EvoCheckboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        _this.onChange = function (_) { };
        _this.onTouched = function () { };
        return _this;
    }
    Object.defineProperty(EvoCheckboxComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this.onChange(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvoCheckboxComponent.prototype, "checkboxClass", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                'invalid': this.stateManager.currentState[EvoControlStates.invalid]
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    EvoCheckboxComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EvoCheckboxComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EvoCheckboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    EvoCheckboxComponent.prototype.setDisabledState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.disabled = state;
    };
    EvoCheckboxComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'evo-checkbox',
                    template: "<label class=\"evo-checkbox\">\n    <input class=\"evo-checkbox__input\"\n           type=\"checkbox\"\n           [evoUiClass]=\"checkboxClass\"\n           [disabled]=\"disabled\"\n           [(ngModel)]=\"value\">\n    <span class=\"evo-checkbox__text\">\n        <ng-content></ng-content>\n    </span>\n</label>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                    styles: [".evo-checkbox{margin:0}.evo-checkbox__input{display:none}.evo-checkbox__text{position:relative;display:inline-block;padding-left:26px;color:#212121;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-checkbox__text:before{content:'';position:absolute;top:2px;left:0;width:16px;height:16px;background-color:#fff;border:1px solid #dbdbdb;border-radius:3px}input:checked+.evo-checkbox__text:before{border-color:#448aff;background:url(/assets/evo-ui-kit/icons/checkbox-check.svg) center no-repeat #448aff}input:disabled:not(:checked)+.evo-checkbox__text{cursor:default}input:disabled:not(:checked)+.evo-checkbox__text:before{background-color:#f6f6f6}input:disabled:checked+.evo-checkbox__text{cursor:default}input:disabled:checked+.evo-checkbox__text:before{opacity:.5}input.evo-checkbox_invalid+.evo-checkbox__text:before{border-color:#f22}"],
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EvoCheckboxComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    return EvoCheckboxComponent;
}(EvoBaseControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
            var /** @type {?} */ errorMessages = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.defaultErrorMessages, (this.errorsMessages || {}));
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'evo-control-error',
                    template: "<div class=\"evo-error\" *ngFor=\"let errorMsg of errorsMap; let i = index;\">\n    <span *ngIf=\"showError(i)\">{{ errorMsg }}</span>\n</div>\n",
                    styles: [".evo-error{font-size:14px;color:#f22;font-style:italic;margin-top:10px}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    EvoControlErrorComponent.propDecorators = {
        errors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        errorsMessages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return EvoControlErrorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoInputComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(EvoInputComponent, _super);
    function EvoInputComponent() {
        var _this = _super.call(this) || this;
        _this.type = 'text';
        _this.tooltipShown = false;
        _this.disabled = false;
        _this.focused = false;
        _this.tooltipVisibilityTimeout = false;
        return _this;
    }
    /**
     * @return {?}
     */
    EvoInputComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.autoFocus) {
            this.inputElement.nativeElement.focus();
        }
    };
    Object.defineProperty(EvoInputComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value || this._value) {
                this._value = value;
                this.onChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvoInputComponent.prototype, "inputClass", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                'focused': this.focused,
                'disabled': this.disabled,
                'valid': this.stateManager.currentState[EvoControlStates.valid],
                'invalid': this.stateManager.currentState[EvoControlStates.invalid]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvoInputComponent.prototype, "hasAdditional", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.tooltip;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    EvoInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this.value = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EvoInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EvoInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    EvoInputComponent.prototype.setDisabledState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.disabled = state;
    };
    /**
     * @return {?}
     */
    EvoInputComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (!this.focused) {
            this.focused = true;
        }
    };
    /**
     * @return {?}
     */
    EvoInputComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.focused = false;
        this.onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EvoInputComponent.prototype.onTooltipClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @return {?}
     */
    EvoInputComponent.prototype.hideTooltip = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tooltipVisibilityTimeout = true;
        setTimeout(function () {
            if (_this.tooltipVisibilityTimeout) {
                _this.tooltipShown = false;
            }
        }, 25);
    };
    /**
     * @return {?}
     */
    EvoInputComponent.prototype.showTooltip = /**
     * @return {?}
     */
    function () {
        this.tooltipShown = true;
        this.tooltipVisibilityTimeout = false;
    };
    EvoInputComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'evo-input',
                    template: "<div class=\"evo-input\" [evoUiClass]=\"inputClass\">\n    <label class=\"evo-input__container\">\n        <input #input\n               *ngIf=\"!mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [disabled]=\"disabled\">\n        <input #input\n               *ngIf=\"mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [textMask]=\"mask\"\n               [disabled]=\"disabled\">\n        <div class=\"evo-input__additional\"\n             *ngIf=\"hasAdditional\">\n            <div class=\"evo-input__tooltip\"\n                 *ngIf=\"tooltip\"\n                 (mouseenter)=\"showTooltip()\"\n                 (mouseleave)=\"hideTooltip()\"\n                 (click)=\"onTooltipClick($event)\">?</div>\n            <div *ngIf=\"tooltip && tooltipShown\"\n                 (click)=\"onTooltipClick($event)\"\n                 (mouseenter)=\"showTooltip()\"\n                 (mouseleave)=\"hideTooltip()\"\n                 class=\"evo-input__tooltip-label\">{{ tooltip }}</div>\n        </div>\n    </label>\n</div>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                    styles: [".evo-input{display:flex;width:100%;height:48px;line-height:48px;white-space:nowrap;background-color:#fff;background-image:none;border:1px solid #dbdbdb;border-radius:4px;transition:box-shadow .3s,border .3s;outline:0}.evo-input__container{display:flex;align-items:center;margin:0;width:100%;height:100%;border-radius:4px;cursor:text}.evo-input_focused{box-shadow:0 0 2px 0 #546e7a!important;border:1px solid #546e7a}.evo-input_disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input_disabled .evo-input__container{cursor:default}.evo-input_valid{border-color:#8bc34a}.evo-input_invalid{border-color:#f22}.evo-input__field{height:100%;border:none;margin:0;padding:0 20px;outline:0;font-size:16px;font-weight:400;color:#000;flex-grow:1;border-radius:4px;width:100%}.evo-input__field::-webkit-input-placeholder{color:#9b9b9b}.evo-input__field::-moz-placeholder{color:#9b9b9b;opacity:1}.evo-input__field:-ms-input-placeholder{color:#9b9b9b}.evo-input__field:disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input__field:not(:last-child){padding-right:0}.evo-input__tooltip{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0 10px;width:24px;height:24px;border-radius:50%;background:#eceff1;line-height:24px;text-align:center;font-family:\"Open Sans\",Arial,sans-serif;font-size:18px;font-weight:600;color:#546e7a;cursor:pointer}.evo-input__tooltip-label{position:absolute;width:100%;top:calc(100% - 2px);left:0;background-color:#fff8e6;z-index:1;border-radius:4px;padding:10px 10px 10px 20px;color:#212121;display:flex;box-shadow:0 4px 12px 0 rgba(0,0,0,.2);line-height:normal;white-space:normal;cursor:default}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(100% - 34px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute;pointer-events:none}@media (min-width:1200px){.evo-input__tooltip-label{left:calc(50% - 22px)}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(50% - 12px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute}}"],
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EvoInputComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    EvoInputComponent.ctorParameters = function () { return []; };
    EvoInputComponent.propDecorators = {
        autoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        mask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }],
        inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['input',] }]
    };
    return EvoInputComponent;
}(EvoBaseControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Serializable = /** @class */ (function () {
    function Serializable(data) {
        Object.assign(this, data);
    }
    return Serializable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EvoBannerTypes = {
    large: 'large',
    small: 'small',
    fullWidth: 'full-width',
};
/** @enum {string} */
var EvoBannerLocations = {
    main: 'Main',
    category: 'Category',
};
var EvoBanner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(EvoBanner, _super);
    function EvoBanner(data) {
        var _this = _super.call(this, data) || this;
        _this.bannerPositionNames = (_a = {},
            _a[EvoBannerLocations.main] = [
                'main',
                'top',
                'bottom'
            ],
            _a[EvoBannerLocations.category] = [
                'main'
            ],
            _a);
        return _this;
        var _a;
    }
    return EvoBanner;
}(Serializable));
var ɵ0 = window;
var EvoBannerComponent = /** @class */ (function () {
    function EvoBannerComponent(window) {
        this.window = window;
        this.type = EvoBannerTypes.small;
        this.bannerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    EvoBannerComponent.prototype.onBannerClick = /**
     * @return {?}
     */
    function () {
        this.bannerClick.emit(this.banner);
    };
    EvoBannerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'evo-banner',
                    template: "<a class=\"evo-banner\"\n   target=\"_blank\"\n   [attr.href]=\"banner?.url\"\n   (click)=\"onBannerClick()\"\n   [evoUiClass]=\"type\"\n   [ngStyle]=\"{'background-color': banner?.background}\">\n    <div class=\"evo-banner__content\">\n        <div class=\"evo-banner__title\">{{ banner?.title }}</div>\n        <button class=\"btn btn-white promo-btn\"\n                [ngStyle]=\"{'color': banner?.background}\"\n                *ngIf=\"banner?.button\">{{ banner?.button }}</button>\n    </div>\n    <img class=\"evo-banner__img\"\n         src=\"{{ banner?.image }}\"\n         alt=\"{{ banner?.title }}\">\n</a>\n",
                    styles: [".evo-banner{display:block;position:relative;height:430px;padding:12px 20px;border-radius:6px;overflow:hidden;color:#fff;cursor:pointer;transition:box-shadow .3s}.evo-banner:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}.evo-banner__content{position:relative;z-index:2}.evo-banner__content .promo-btn{height:40px;padding:0 20px;min-width:156px;font-weight:600;font-size:14px;text-transform:uppercase;display:table-cell;vertical-align:middle}.evo-banner__content .promo-btn:hover{background:#fff}.evo-banner__content .promo-btn:active{box-shadow:none}.evo-banner__content .promo-btn span{font-size:18px}.evo-banner__title{font-family:museo,Arial,sans-serif;font-weight:700;line-height:1.3;font-size:30px;margin-bottom:10px}.evo-banner__description{font-size:14px;line-height:1.3;margin-top:20px;margin-bottom:10px}.evo-banner__img{position:absolute;bottom:0;right:0;width:290px;height:290px}.evo-banner_full-width{padding:20px}.evo-banner_full-width .evo-banner__title{line-height:38px}@media (min-width:768px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:60%}.evo-banner__description{max-width:250px}.evo-banner__img{width:430px;height:430px}.evo-banner_full-width{height:240px;padding:30px}.evo-banner_full-width .evo-banner__content{max-width:50%}.evo-banner_full-width .evo-banner__title{font-size:36px;line-height:44px}.evo-banner_full-width .evo-banner__img{height:240px;width:240px}}@media (min-width:1200px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:63%}.evo-banner_small{height:210px;padding:20px}.evo-banner_small .evo-banner__title{font-size:20px;margin-bottom:20px}.evo-banner_small .promo-btn{height:32px}.evo-banner_small .evo-banner__img{width:210px;height:210px}.evo-banner_full-width .evo-banner__content{max-width:63%}}"],
                    providers: [
                        { provide: 'Window', useValue: ɵ0 }
                    ],
                },] },
    ];
    /** @nocollapse */
    EvoBannerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['Window',] }] }
    ]; };
    EvoBannerComponent.propDecorators = {
        banner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bannerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return EvoBannerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ isObject = function (item) { return item != null && typeof item === 'object'; };
var /** @type {?} */ isString = function (item) { return typeof item === 'string'; };
var /** @type {?} */ isArray = function (item) { return Array.isArray(item); };
var EvoUiClassDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(EvoUiClassDirective, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[evoUiClass]'
                },] },
    ];
    /** @nocollapse */
    EvoUiClassDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    EvoUiClassDirective.propDecorators = {
        setterOfClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['evoUiClass',] }]
    };
    return EvoUiClassDirective;
}(_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ components = [
    EvoButtonComponent,
    EvoCheckboxComponent,
    EvoControlErrorComponent,
    EvoInputComponent,
    EvoBannerComponent,
];
var /** @type {?} */ directives = [
    EvoUiClassDirective,
];
var /** @type {?} */ bundle = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(components, directives);
var EvoUiKitModule = /** @class */ (function () {
    function EvoUiKitModule() {
    }
    EvoUiKitModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_4__["TextMaskModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(bundle),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(bundle),
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
                },] },
    ];
    return EvoUiKitModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vU2VyaWFsaXphYmxlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvZXZvLXVpLWtpdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU2l6ZXMge1xuICAgIGZ1bGxXaWR0aCA9ICdmdWxsLXdpZHRoJyxcbiAgICBzbWFsbCA9ICdzbWFsbCcsXG4gICAgbGFyZ2UgPSAnbGFyZ2UnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CdXR0b25TdHlsZXMge1xuICAgIGxpbmVkID0gJ2xpbmVkJyxcbiAgICBkYXJrYmx1ZSA9ICdkYXJrYmx1ZScsXG4gICAgZGFya2JsdWVMaW5lZCA9ICdkYXJrYmx1ZS1saW5lZCcsXG4gICAgZ3JlZW4gPSAnZ3JlZW4nLFxuICAgIGdyZWVubGluZWQgPSAnZ3JlZW4tbGluZWQnLFxuICAgIHB1cnBsZSA9ICdwdXJwbGUnXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWJ1dHRvblwiIFtldm9VaUNsYXNzXT1cInRvdGFsQ2xhc3Nlc1wiIFtuZ1N0eWxlXT1cInRvdGFsU3R5bGVzXCI+XG4gICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZ1wiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgQC13ZWJraXQta2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX0uZXZvLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjAgMzBweDtoZWlnaHQ6NDRweDtsaW5lLWhlaWdodDo0NHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxNnB4O2NvbG9yOiNmZmY7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1yYWRpdXM6MzBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4MDA7Ym9yZGVyOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzLGNvbG9yIC4zcyxib3JkZXIgLjNzfS5ldm8tYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmOWQ0Nztjb2xvcjojZmZmfS5ldm8tYnV0dG9uOmFjdGl2ZSwuZXZvLWJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjYzYwMDA7Y29sb3I6I2ZmZjtvdXRsaW5lOjB9LmV2by1idXR0b246ZGlzYWJsZWQsLmV2by1idXR0b25fZGlzYWJsZWR7YmFja2dyb3VuZDojZDZkNmQ2IWltcG9ydGFudDtib3JkZXItY29sb3I6I2Q2ZDZkNiFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7Y3Vyc29yOm5vdC1hbGxvd2VkfS5ldm8tYnV0dG9uX2xpbmVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojZmY3ODAwO2JvcmRlcjoxcHggc29saWQgI2ZmNzgwMH0uZXZvLWJ1dHRvbl9saW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4MDA7Y29sb3I6I2ZmZn0uZXZvLWJ1dHRvbl9saW5lZDphY3RpdmUsLmV2by1idXR0b25fbGluZWQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojY2M2MDAwO2NvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNjYzYwMDB9LmV2by1idXR0b25fZGFya2JsdWV7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izc1OTZhNX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZTphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMjgzMjM5fS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojNTQ2ZTdhO2JvcmRlcjoxcHggc29saWQgIzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM1NDZlN2E7Y29sb3I6I2ZmZn0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMjgzMjM5O2NvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiMyODMyMzl9LmV2by1idXR0b25fZ3JlZW57YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2EyY2Y2ZX0uZXZvLWJ1dHRvbl9ncmVlbjphY3RpdmUsLmV2by1idXR0b25fZ3JlZW46Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNmY5YzNifS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojOGJjMzRhO2JvcmRlcjoxcHggc29saWQgIzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM4YmMzNGE7Y29sb3I6I2ZmZn0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZ3JlZW4tbGluZWQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNmY5YzNiO2NvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiM2ZjljM2J9LmV2by1idXR0b25fcHVycGxle2JhY2tncm91bmQtY29sb3I6I2FiNGFjM30uZXZvLWJ1dHRvbl9wdXJwbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2M1OGU4fS5ldm8tYnV0dG9uX3B1cnBsZTphY3RpdmUsLmV2by1idXR0b25fcHVycGxlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzkzMzVhYn0uZXZvLWJ1dHRvbl9mdWxsLXdpZHRoe3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9LmV2by1idXR0b25fc21hbGx7cGFkZGluZzowIDIwcHg7aGVpZ2h0OjMwcHg7bGluZS1oZWlnaHQ6MzBweDtmb250LXNpemU6MTRweH0uZXZvLWJ1dHRvbl9sYXJnZXtwYWRkaW5nOjAgNDBweDtoZWlnaHQ6NjBweDtsaW5lLWhlaWdodDo2MHB4O2ZvbnQtc2l6ZToxOHB4fS5ldm8tYnV0dG9uX2ljb257cGFkZGluZy1sZWZ0OjIycHg7cGFkZGluZy1yaWdodDoyMnB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5ldm8tYnV0dG9uX2xvYWRpbmd7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZX0uZXZvLWJ1dHRvbl9fZG90c3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0zMHB4O21hcmdpbi10b3A6LTVweH0uZXZvLWJ1dHRvbl9fZG90e3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czo1MCU7ZmxvYXQ6bGVmdDtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjttYXJnaW46MCA1cHg7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuM3MgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC4zcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuNnMgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC42cyBpbmZpbml0ZSBmeH1gXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFdm9CdXR0b25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGNvbG9yOiBFdm9CdXR0b25TdHlsZXM7XG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzaXplOiBFdm9CdXR0b25TaXplcztcblxuICAgIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIGNsaWVudFdpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgICB9XG5cbiAgICBnZXQgdG90YWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbG9hZGluZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdsb2FkaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsU3R5bGVzKCk6IHtbc3R5bGVLZXk6IHN0cmluZ106IGFueX0ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5fbG9hZGluZykge1xuICAgICAgICAgICAgcmVzdWx0Wyd3aWR0aCddID0gYCR7dGhpcy5jbGllbnRXaWR0aH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgbG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNsaWVudFdpZHRoID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gRXZvQ29udHJvbFN0YXRlcyB7XG4gIHZhbGlkID0gJ3ZhbGlkJyxcbiAgaW52YWxpZCA9ICdpbnZhbGlkJyxcbn1cbiIsImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElFdm9Db250cm9sU3RhdGUgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBFdm9Db250cm9sU3RhdGVNYW5hZ2VyIHtcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgZXh0cmFTdGF0ZXM/OiBJRXZvQ29udHJvbFN0YXRlKSB7XG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgfVxuXG4gIGdldCBjdXJyZW50U3RhdGUoKTogSUV2b0NvbnRyb2xTdGF0ZSB7XG4gICAgLy8gVE9ETyBtZXJnZSBjb25kaXRpb25zIHdpdGggZXh0cmFTdGF0ZXNcblxuICAgIHJldHVybiB7XG4gICAgICB2YWxpZDogdGhpcy5jb250cm9sLmRpcnR5ICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC52YWxpZCxcbiAgICAgIGludmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wuaW52YWxpZCxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJRXZvQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXInO1xuaW1wb3J0IHsgSUV2b0NvbnRyb2xFcnJvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0nO1xuXG5leHBvcnQgY2xhc3MgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUpIGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sRGlyZWN0aXZlKSBmb3JtQ29udHJvbERpcmVjdGl2ZTogRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG4gIEBJbnB1dCgpIHN0YXRlOiBJRXZvQ29udHJvbFN0YXRlO1xuICBASW5wdXQoKSBlcnJvcnNNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvcjtcblxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gIHN0YXRlTWFuYWdlcjogRXZvQ29udHJvbFN0YXRlTWFuYWdlcjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2w7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlICYmIHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuc3RhdGVNYW5hZ2VyID0gbmV3IEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXIodGhpcy5jb250cm9sLCB0aGlzLnN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB0ZW1wbGF0ZSBkcml2ZW4gZm9ybXMgYWxsb3dlZCB3aXRoIEV2b1VpIGtpdCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaG93RXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlTWFuYWdlci5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IGA8bGFiZWwgY2xhc3M9XCJldm8tY2hlY2tib3hcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJldm8tY2hlY2tib3hfX2lucHV0XCJcbiAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgW2V2b1VpQ2xhc3NdPVwiY2hlY2tib3hDbGFzc1wiXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgICA8c3BhbiBjbGFzcz1cImV2by1jaGVja2JveF9fdGV4dFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuPC9sYWJlbD5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWNoZWNrYm94e21hcmdpbjowfS5ldm8tY2hlY2tib3hfX2lucHV0e2Rpc3BsYXk6bm9uZX0uZXZvLWNoZWNrYm94X190ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDoyNnB4O2NvbG9yOiMyMTIxMjE7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjJweDtsZWZ0OjA7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6M3B4fWlucHV0OmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7Ym9yZGVyLWNvbG9yOiM0NDhhZmY7YmFja2dyb3VuZDp1cmwoL2Fzc2V0cy9ldm8tdWkta2l0L2ljb25zL2NoZWNrYm94LWNoZWNrLnN2ZykgY2VudGVyIG5vLXJlcGVhdCAjNDQ4YWZmfWlucHV0OmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrLmV2by1jaGVja2JveF9fdGV4dHtjdXJzb3I6ZGVmYXVsdH1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNn1pbnB1dDpkaXNhYmxlZDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHR7Y3Vyc29yOmRlZmF1bHR9aW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtvcGFjaXR5Oi41fWlucHV0LmV2by1jaGVja2JveF9pbnZhbGlkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JvcmRlci1jb2xvcjojZjIyfWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0NoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF92YWx1ZTogYm9vbGVhbjtcblxuICAgIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgZ2V0IHZhbHVlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBjaGVja2JveENsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2ludmFsaWQnOiB0aGlzLnN0YXRlTWFuYWdlci5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHN0YXRlO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRXZvQ29udHJvbEVycm9yIHtcbiAgICBbZXJyb3I6IHN0cmluZ106IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tY29udHJvbC1lcnJvcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWVycm9yXCIgKm5nRm9yPVwibGV0IGVycm9yTXNnIG9mIGVycm9yc01hcDsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICA8c3BhbiAqbmdJZj1cInNob3dFcnJvcihpKVwiPnt7IGVycm9yTXNnIH19PC9zcGFuPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWVycm9ye2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiNmMjI7Zm9udC1zdHlsZTppdGFsaWM7bWFyZ2luLXRvcDoxMHB4fWBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZXJyb3JzOiBhbnk7XG4gICAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG4gICAgQElucHV0KCkgc2hvd0NvdW50ID0gMTtcblxuICAgIHByaXZhdGUgZGVmYXVsdEVycm9yTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3IgPSB7XG4gICAgICAgIHJlcXVpcmVkOiAnw5DCl8OQwrDDkMK/w5DCvsOQwrvDkMK9w5DCuMORwoLDkMK1IMOQwr/DkMK+w5DCu8OQwrUnLFxuICAgICAgICBlbWFpbDogJ8OQwp3DkMK1w5DCv8ORwoDDkMKww5DCssOQwrjDkMK7w5HCjMOQwr3DkMK+IMORwoPDkMK6w5DCsMOQwrfDkMKww5DCvcOQwrAgw5DCv8OQwr7DkcKHw5HCgsOQwrAnLFxuICAgICAgICBwaG9uZTogJ8OQwpLDkMKyw5DCtcOQwrTDkMK4w5HCgsOQwrUgw5HCgsOQwrXDkMK7w5DCtcORwoTDkMK+w5DCvScsXG4gICAgfTtcblxuICAgIGdldCBlcnJvcnNNYXAoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0RXJyb3JNZXNzYWdlcyxcbiAgICAgICAgICAgIC4uLih0aGlzLmVycm9yc01lc3NhZ2VzIHx8IHt9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvcktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgIHJldHVybiBlcnJvcktleXMubWFwKChrZXkpID0+IGVycm9yTWVzc2FnZXNba2V5XSk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICsraW5kZXggPD0gdGhpcy5zaG93Q291bnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWlucHV0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0XCIgW2V2b1VpQ2xhc3NdPVwiaW5wdXRDbGFzc1wiPlxuICAgIDxsYWJlbCBjbGFzcz1cImV2by1pbnB1dF9fY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCAjaW5wdXRcbiAgICAgICAgICAgICAgICpuZ0lmPVwiIW1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgICAgICAqbmdJZj1cIm1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFt0ZXh0TWFza109XCJtYXNrXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0X19hZGRpdGlvbmFsXCJcbiAgICAgICAgICAgICAqbmdJZj1cImhhc0FkZGl0aW9uYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldm8taW5wdXRfX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAqbmdJZj1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzaG93VG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaGlkZVRvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJvblRvb2x0aXBDbGljaygkZXZlbnQpXCI+PzwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRvb2x0aXAgJiYgdG9vbHRpcFNob3duXCJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVG9vbHRpcENsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzaG93VG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaGlkZVRvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X190b29sdGlwLWxhYmVsXCI+e3sgdG9vbHRpcCB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgc3R5bGVzOiBbYC5ldm8taW5wdXR7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDt3aGl0ZS1zcGFjZTpub3dyYXA7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czo0cHg7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcyxib3JkZXIgLjNzO291dGxpbmU6MH0uZXZvLWlucHV0X19jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlci1yYWRpdXM6NHB4O2N1cnNvcjp0ZXh0fS5ldm8taW5wdXRfZm9jdXNlZHtib3gtc2hhZG93OjAgMCAycHggMCAjNTQ2ZTdhIWltcG9ydGFudDtib3JkZXI6MXB4IHNvbGlkICM1NDZlN2F9LmV2by1pbnB1dF9kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjYhaW1wb3J0YW50O2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9kaXNhYmxlZCAuZXZvLWlucHV0X19jb250YWluZXJ7Y3Vyc29yOmRlZmF1bHR9LmV2by1pbnB1dF92YWxpZHtib3JkZXItY29sb3I6IzhiYzM0YX0uZXZvLWlucHV0X2ludmFsaWR7Ym9yZGVyLWNvbG9yOiNmMjJ9LmV2by1pbnB1dF9fZmllbGR7aGVpZ2h0OjEwMCU7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowIDIwcHg7b3V0bGluZTowO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjojMDAwO2ZsZXgtZ3JvdzoxO2JvcmRlci1yYWRpdXM6NHB4O3dpZHRoOjEwMCV9LmV2by1pbnB1dF9fZmllbGQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X19maWVsZDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjliO29wYWNpdHk6MX0uZXZvLWlucHV0X19maWVsZDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X19maWVsZDpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjYhaW1wb3J0YW50O2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6bm90KDpsYXN0LWNoaWxkKXtwYWRkaW5nLXJpZ2h0OjB9LmV2by1pbnB1dF9fdG9vbHRpcHstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7bWFyZ2luOjAgMTBweDt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6I2VjZWZmMTtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtZmFtaWx5OlwiT3BlbiBTYW5zXCIsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MThweDtmb250LXdlaWdodDo2MDA7Y29sb3I6IzU0NmU3YTtjdXJzb3I6cG9pbnRlcn0uZXZvLWlucHV0X190b29sdGlwLWxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7dG9wOmNhbGMoMTAwJSAtIDJweCk7bGVmdDowO2JhY2tncm91bmQtY29sb3I6I2ZmZjhlNjt6LWluZGV4OjE7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzoxMHB4IDEwcHggMTBweCAyMHB4O2NvbG9yOiMyMTIxMjE7ZGlzcGxheTpmbGV4O2JveC1zaGFkb3c6MCA0cHggMTJweCAwIHJnYmEoMCwwLDAsLjIpO2xpbmUtaGVpZ2h0Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3JtYWw7Y3Vyc29yOmRlZmF1bHR9LmV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbDpiZWZvcmV7Y29udGVudDonJzt0b3A6LTIwcHg7bGVmdDpjYWxjKDEwMCUgLSAzNHB4KTtib3JkZXI6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2ZmZjhlNjtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbHtsZWZ0OmNhbGMoNTAlIC0gMjJweCl9LmV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbDpiZWZvcmV7Y29udGVudDonJzt0b3A6LTIwcHg7bGVmdDpjYWxjKDUwJSAtIDEycHgpO2JvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjZmZmOGU2O3Bvc2l0aW9uOmFic29sdXRlfX1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9JbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9JbnB1dENvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBhdXRvRm9jdXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1hc2s6IGFueTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICBASW5wdXQoJ3ZhbHVlJykgX3ZhbHVlOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dEVsZW1lbnQ7XG5cbiAgb25DaGFuZ2U7XG4gIG9uVG91Y2hlZDtcblxuICBwdWJsaWMgdG9vbHRpcFNob3duID0gZmFsc2U7XG5cbiAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZm9jdXNlZCA9IGZhbHNlO1xuICBwcml2YXRlIHRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgfHwgdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW5wdXRDbGFzcygpOiB7W2Nzc0NsYXNzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb2N1c2VkJzogdGhpcy5mb2N1c2VkLFxuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICd2YWxpZCc6IHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLnZhbGlkXSxcbiAgICAgICdpbnZhbGlkJzogdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF1cbiAgICB9O1xuICB9XG5cbiAgZ2V0IGhhc0FkZGl0aW9uYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy50b29sdGlwO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHN0YXRlO1xuICB9XG5cbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIG9uVG9vbHRpcENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaGlkZVRvb2x0aXAoKSB7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFNob3duID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgMjUpO1xuICB9XG5cbiAgc2hvd1Rvb2x0aXAoKSB7XG4gICAgdGhpcy50b29sdGlwU2hvd24gPSB0cnVlO1xuICAgIHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9TZXJpYWxpemFibGUnO1xuXG5leHBvcnQgZW51bSBFdm9CYW5uZXJUeXBlcyB7XG4gIGxhcmdlID0gJ2xhcmdlJyxcbiAgc21hbGwgPSAnc21hbGwnLFxuICBmdWxsV2lkdGggPSAnZnVsbC13aWR0aCcsXG59XG5cbmV4cG9ydCBlbnVtIEV2b0Jhbm5lckxvY2F0aW9ucyB7XG4gIG1haW4gPSAnTWFpbicsXG4gIGNhdGVnb3J5ID0gJ0NhdGVnb3J5J1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElFdm9CYW5uZXJBbmFseXRpY3Mge1xuICB1cmw6IHN0cmluZztcbiAgZGF0YToge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNyZWF0aXZlOiBzdHJpbmc7XG4gICAgcG9zaXRpb246IHN0cmluZztcbiAgICBkaW1lbnNpb243Pzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRXZvQmFubmVyIGV4dGVuZHMgU2VyaWFsaXphYmxlIHtcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICBiYW5uZXJQb3NpdGlvbk5hbWVzID0ge1xuICAgIFtFdm9CYW5uZXJMb2NhdGlvbnMubWFpbl06IFtcbiAgICAgICdtYWluJyxcbiAgICAgICd0b3AnLFxuICAgICAgJ2JvdHRvbSdcbiAgICBdLFxuICAgIFtFdm9CYW5uZXJMb2NhdGlvbnMuY2F0ZWdvcnldOiBbXG4gICAgICAnbWFpbidcbiAgICBdXG4gIH07XG4gIGJ1dHRvbjogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWJhbm5lcicsXG4gIHRlbXBsYXRlOiBgPGEgY2xhc3M9XCJldm8tYmFubmVyXCJcbiAgIHRhcmdldD1cIl9ibGFua1wiXG4gICBbYXR0ci5ocmVmXT1cImJhbm5lcj8udXJsXCJcbiAgIChjbGljayk9XCJvbkJhbm5lckNsaWNrKClcIlxuICAgW2V2b1VpQ2xhc3NdPVwidHlwZVwiXG4gICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBiYW5uZXI/LmJhY2tncm91bmR9XCI+XG4gICAgPGRpdiBjbGFzcz1cImV2by1iYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1iYW5uZXJfX3RpdGxlXCI+e3sgYmFubmVyPy50aXRsZSB9fTwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13aGl0ZSBwcm9tby1idG5cIlxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBiYW5uZXI/LmJhY2tncm91bmR9XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImJhbm5lcj8uYnV0dG9uXCI+e3sgYmFubmVyPy5idXR0b24gfX08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aW1nIGNsYXNzPVwiZXZvLWJhbm5lcl9faW1nXCJcbiAgICAgICAgIHNyYz1cInt7IGJhbm5lcj8uaW1hZ2UgfX1cIlxuICAgICAgICAgYWx0PVwie3sgYmFubmVyPy50aXRsZSB9fVwiPlxuPC9hPlxuYCxcbiAgc3R5bGVzOiBbYC5ldm8tYmFubmVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjQzMHB4O3BhZGRpbmc6MTJweCAyMHB4O2JvcmRlci1yYWRpdXM6NnB4O292ZXJmbG93OmhpZGRlbjtjb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3N9LmV2by1iYW5uZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMCwwLDAsLjIpfS5ldm8tYmFubmVyX19jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRue2hlaWdodDo0MHB4O3BhZGRpbmc6MCAyMHB4O21pbi13aWR0aDoxNTZweDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2Rpc3BsYXk6dGFibGUtY2VsbDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bjphY3RpdmV7Ym94LXNoYWRvdzpub25lfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG4gc3Bhbntmb250LXNpemU6MThweH0uZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1mYW1pbHk6bXVzZW8sQXJpYWwsc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7bGluZS1oZWlnaHQ6MS4zO2ZvbnQtc2l6ZTozMHB4O21hcmdpbi1ib3R0b206MTBweH0uZXZvLWJhbm5lcl9fZGVzY3JpcHRpb257Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS4zO21hcmdpbi10b3A6MjBweDttYXJnaW4tYm90dG9tOjEwcHh9LmV2by1iYW5uZXJfX2ltZ3twb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtyaWdodDowO3dpZHRoOjI5MHB4O2hlaWdodDoyOTBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoe3BhZGRpbmc6MjBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX190aXRsZXtsaW5lLWhlaWdodDozOHB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLWJhbm5lcntwYWRkaW5nOjMwcHggNDBweH0uZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjAlfS5ldm8tYmFubmVyX19kZXNjcmlwdGlvbnttYXgtd2lkdGg6MjUwcHh9LmV2by1iYW5uZXJfX2ltZ3t3aWR0aDo0MzBweDtoZWlnaHQ6NDMwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aHtoZWlnaHQ6MjQwcHg7cGFkZGluZzozMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjUwJX0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX190aXRsZXtmb250LXNpemU6MzZweDtsaW5lLWhlaWdodDo0NHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2ltZ3toZWlnaHQ6MjQwcHg7d2lkdGg6MjQwcHh9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmV2by1iYW5uZXJ7cGFkZGluZzozMHB4IDQwcHh9LmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYzJX0uZXZvLWJhbm5lcl9zbWFsbHtoZWlnaHQ6MjEwcHg7cGFkZGluZzoyMHB4fS5ldm8tYmFubmVyX3NtYWxsIC5ldm8tYmFubmVyX190aXRsZXtmb250LXNpemU6MjBweDttYXJnaW4tYm90dG9tOjIwcHh9LmV2by1iYW5uZXJfc21hbGwgLnByb21vLWJ0bntoZWlnaHQ6MzJweH0uZXZvLWJhbm5lcl9zbWFsbCAuZXZvLWJhbm5lcl9faW1ne3dpZHRoOjIxMHB4O2hlaWdodDoyMTBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MyV9fWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6ICdXaW5kb3cnLCAgdXNlVmFsdWU6IHdpbmRvdyB9XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0Jhbm5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJhbm5lcjogRXZvQmFubmVyO1xuICBASW5wdXQoKSB0eXBlOiBFdm9CYW5uZXJUeXBlcyA9IEV2b0Jhbm5lclR5cGVzLnNtYWxsO1xuXG4gIEBPdXRwdXQoKSBiYW5uZXJDbGljazogRXZlbnRFbWl0dGVyPEV2b0Jhbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2b0Jhbm5lcj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdXaW5kb3cnKSBwcml2YXRlIHdpbmRvdzogYW55LFxuICApIHtcbiAgfVxuXG4gIG9uQmFubmVyQ2xpY2soKSB7XG4gICAgdGhpcy5iYW5uZXJDbGljay5lbWl0KHRoaXMuYmFubmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgSXRlcmFibGVEaWZmZXJzLCBLZXlWYWx1ZURpZmZlcnMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IGlzT2JqZWN0ID0gKGl0ZW0pID0+IGl0ZW0gIT0gbnVsbCAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCc7XG5jb25zdCBpc1N0cmluZyA9IChpdGVtKSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZyc7XG5jb25zdCBpc0FycmF5ID0gKGl0ZW0pID0+IEFycmF5LmlzQXJyYXkoaXRlbSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tldm9VaUNsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlDbGFzc0RpcmVjdGl2ZSBleHRlbmRzIE5nQ2xhc3Mge1xuICBASW5wdXQoJ2V2b1VpQ2xhc3MnKVxuICBzZXQgc2V0dGVyT2ZDbGFzcyhkYXRhOiBhbnkpIHtcbiAgICBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IGRhdGEubWFwKChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7dGhpcy5wcmVmaXh9XyR7Y2xhc3NOYW1lfWApO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2UoKG5ld0RhdGE6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgbmV3RGF0YVtgJHt0aGlzLnByZWZpeH1fJHtrZXl9YF0gPSBkYXRhW2tleV07XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgICAgfSwge30pO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBkYXRhXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKG15Q2xhc3MpID0+IGAke3RoaXMucHJlZml4fV8ke215Q2xhc3N9YClcbiAgICAgICAgLmpvaW4oJyAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIHR5cGUgbm90IGFsbG93ZWQhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5uZ0NsYXNzID0gZGF0YTtcbiAgfVxuXG4gIG5nQ2xhc3M6IGFueTtcblxuICBwcml2YXRlIHByZWZpeDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKF9pdGVyYWJsZURpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycywgX2tleVZhbHVlRGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgICAgICBfbmdFbDogRWxlbWVudFJlZiwgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihfaXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzLCBfbmdFbCwgX3JlbmRlcmVyKTtcbiAgICB0aGlzLnByZWZpeCA9IF9uZ0VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0WzBdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuXG5pbXBvcnQgeyBFdm9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWJ1dHRvbi9ldm8tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9DaGVja2JveENvbXBvbmVudCAgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8taW5wdXQvZXZvLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9CYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWJhbm5lci9ldm8tYmFubmVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEV2b1VpQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IGFueSA9IFtcbiAgRXZvQnV0dG9uQ29tcG9uZW50LFxuICBFdm9DaGVja2JveENvbXBvbmVudCxcbiAgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50LFxuICBFdm9JbnB1dENvbXBvbmVudCxcbiAgRXZvQmFubmVyQ29tcG9uZW50LFxuXTtcblxuY29uc3QgZGlyZWN0aXZlczogYW55ID0gW1xuICBFdm9VaUNsYXNzRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgYnVuZGxlOiBhbnkgPSBbXG4gIC4uLmNvbXBvbmVudHMsXG4gIC4uLmRpcmVjdGl2ZXNcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlL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

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"element\">\n    <div class=\"element__title\">\n      <h1 class=\"evo-h1\">Заголовки</h1>\n    </div>\n    <div class=\"element__example\">\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <h1 class=\"evo-h1\">Заголовок h1</h1>\n          <h2 class=\"evo-h2\">Заголовок h2</h2>\n          <h3 class=\"evo-h3\">Заголовок h3</h3>\n          <h4 class=\"evo-h4\">Заголовок h4</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"element\">\n    <div class=\"element__title\">\n      <h1 class=\"evo-h1\">Карточка</h1>\n    </div>\n    <div class=\"element__example\">\n      <div class=\"evo-cards\">\n        <div class=\"evo-card\">\n          <div class=\"evo-card__title\">Заголовок</div>\n          <div class=\"evo-card__content\">Содержание</div>\n          <div class=\"evo-card__footer\"><evo-button size=\"full-width\">Действие!</evo-button></div>\n        </div>\n        <div class=\"evo-card\">\n          <div class=\"evo-card__title\"><img src=\"/assets/sberbank.png\"></div>\n          <div class=\"evo-card__content\">Содержание</div>\n          <div class=\"evo-card__footer\"><evo-button size=\"full-width\">Действие!</evo-button></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"element\">\n    <div class=\"element__title\">\n      <h1 class=\"evo-h1\">Список</h1>\n    </div>\n    <div class=\"element__example\">\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <ul class=\"evo-list\">\n            <li>item 1</li>\n            <li>item 2</li>\n            <li>item 3</li>\n          </ul>\n        </div>\n        <div class=\"col-md\">\n          <ul class=\"evo-list evo-list_check\">\n            <li>item 1</li>\n            <li>item 2</li>\n            <li>item 3</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"element\">\n    <div class=\"element__title\">\n      <h1 class=\"evo-h1\">Алерт</h1>\n    </div>\n    <div class=\"element__example\">\n      <div class=\"evo-alert evo-alert_success\">Успешно! Карта добавлена</div>\n      <div class=\"evo-alert evo-alert_danger\">Ошибка! Не удалось удалить карту</div>\n    </div>\n  </div>\n</div>\n<!-- <evo-button>Кликни меня</evo-button>\n\n<form [formGroup]=\"sampleForm\">\n  <evo-checkbox formControlName=\"sampleCheckbox\">Я согласен получать новости и статьи</evo-checkbox>\n  <evo-control-error [errors]=\"{test: true}\" [errorsMessages]=\"{test: 'Тест!'}\"></evo-control-error>\n  <evo-input formControlName=\"sampleText\"></evo-input>\n  <evo-banner></evo-banner>\n</form> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* media mixins - mobile first*/\n.orange-bg {\n  background-color: #FF7800; }\n.element {\n  padding-bottom: 40px; }\n.element__title {\n    padding-bottom: 20px; }\n.evo-cards {\n  display: flex;\n  flex-direction: column; }\n@media (min-width: 992px) {\n    .evo-cards {\n      flex-direction: row; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.title = 'app';
        this.sampleForm = this.fb.group({
            sampleCheckbox: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            sampleText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var evo_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evo-ui-kit */ "./dist/evo-ui-kit/fesm5/evo-ui-kit.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                evo_ui_kit__WEBPACK_IMPORTED_MODULE_4__["EvoUiKitModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kozlovnikita/Projects/Evo-UI-Kit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map