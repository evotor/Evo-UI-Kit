import { ChangeDetectionStrategy, Component, ElementRef, Input, ContentChild, forwardRef, ViewChild, EventEmitter, Inject, Output, Injectable, Directive, IterableDiffers, KeyValueDiffers, Renderer2, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControlDirective, FormControlName, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { __extends, __assign, __spread } from 'tslib';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { Key } from 'ts-keycode-enum';
import { NgClass, CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

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
        { type: Component, args: [{
                    selector: 'evo-button',
                    template: "<div class=\"evo-button\" [evoUiClass]=\"totalClasses\" [ngStyle]=\"totalStyles\">\n    <span *ngIf=\"!loading\">\n        <ng-content></ng-content>\n    </span>\n    <span *ngIf=\"loading\" class=\"evo-button__dots\">\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n    </span>\n</div>\n",
                    styles: ["@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}.evo-button{display:inline-block;box-sizing:border-box;padding:0 30px;height:44px;line-height:44px;vertical-align:middle;text-align:center;background-image:none;white-space:nowrap;font-family:museo,Arial,sans-serif;font-weight:700;font-size:16px;color:#fff;text-transform:uppercase;border-radius:30px;background-color:#ff7800;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s}.evo-button:hover{background-color:#ff9d47;color:#fff}.evo-button:active,.evo-button:focus{background-color:#cc6000;color:#fff;outline:0}.evo-button:disabled,.evo-button_disabled{background:#d6d6d6!important;border-color:#d6d6d6!important;color:#fff!important;cursor:not-allowed}.evo-button_lined{background-color:#fff;color:#ff7800;border:1px solid #ff7800}.evo-button_lined:hover{background-color:#ff7800;color:#fff}.evo-button_lined:active,.evo-button_lined:focus{background-color:#cc6000;color:#fff;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{background-color:#fff;color:#546e7a;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{background-color:#546e7a;color:#fff}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{background-color:#283239;color:#fff;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{background-color:#fff;color:#8bc34a;border:1px solid #8bc34a}.evo-button_green-lined:hover{background-color:#8bc34a;color:#fff}.evo-button_green-lined:active,.evo-button_green-lined:focus{background-color:#6f9c3b;color:#fff;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_full-width{width:100%;text-align:center}.evo-button_small{padding:0 20px;height:30px;line-height:30px;font-size:14px}.evo-button_large{padding:0 40px;height:60px;line-height:60px;font-size:18px}.evo-button_icon{padding-left:22px;padding-right:22px;display:inline-flex;align-items:center}.evo-button_loading{pointer-events:none;position:relative}.evo-button__dots{position:absolute;top:50%;left:50%;margin-left:-30px;margin-top:-5px}.evo-button__dot{width:10px;height:10px;border-radius:50%;float:left;background:currentColor;margin:0 5px;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}"],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    EvoButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    EvoButtonComponent.propDecorators = {
        color: [{ type: Input }],
        disabled: [{ type: Input }],
        size: [{ type: Input }],
        loading: [{ type: Input }]
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
        formControlName: [{ type: ContentChild, args: [FormControlName,] }],
        formControlDirective: [{ type: ContentChild, args: [FormControlDirective,] }],
        state: [{ type: Input }],
        errorsMessages: [{ type: Input }]
    };
    return EvoBaseControl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoCheckboxComponent = /** @class */ (function (_super) {
    __extends(EvoCheckboxComponent, _super);
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
        { type: Component, args: [{
                    selector: 'evo-checkbox',
                    template: "<label class=\"evo-checkbox\">\n    <input class=\"evo-checkbox__input\"\n           type=\"checkbox\"\n           [evoUiClass]=\"checkboxClass\"\n           [disabled]=\"disabled\"\n           [(ngModel)]=\"value\">\n    <span class=\"evo-checkbox__text\">\n        <ng-content></ng-content>\n    </span>\n</label>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                    styles: [".evo-checkbox{margin:0}.evo-checkbox__input{display:none}.evo-checkbox__text{position:relative;display:inline-block;padding-left:26px;color:#212121;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-checkbox__text:before{content:'';position:absolute;top:2px;left:0;width:16px;height:16px;background-color:#fff;border:1px solid #dbdbdb;border-radius:3px}input:checked+.evo-checkbox__text:before{border-color:#448aff;background:url(/assets/evo-ui-kit/icons/checkbox-check.svg) center no-repeat #448aff}input:disabled:not(:checked)+.evo-checkbox__text{cursor:default}input:disabled:not(:checked)+.evo-checkbox__text:before{background-color:#f6f6f6}input:disabled:checked+.evo-checkbox__text{cursor:default}input:disabled:checked+.evo-checkbox__text:before{opacity:.5}input.evo-checkbox_invalid+.evo-checkbox__text:before{border-color:#f22}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return EvoCheckboxComponent; }),
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
            var /** @type {?} */ errorMessages = __assign({}, this.defaultErrorMessages, (this.errorsMessages || {}));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoInputComponent = /** @class */ (function (_super) {
    __extends(EvoInputComponent, _super);
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
        { type: Component, args: [{
                    selector: 'evo-input',
                    template: "<div class=\"evo-input\" [evoUiClass]=\"inputClass\">\n    <label class=\"evo-input__container\">\n        <input #input\n               *ngIf=\"!mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [disabled]=\"disabled\">\n        <input #input\n               *ngIf=\"mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [textMask]=\"mask\"\n               [disabled]=\"disabled\">\n        <div class=\"evo-input__additional\"\n             *ngIf=\"hasAdditional\">\n            <div class=\"evo-input__tooltip\"\n                 *ngIf=\"tooltip\"\n                 (mouseenter)=\"showTooltip()\"\n                 (mouseleave)=\"hideTooltip()\"\n                 (click)=\"onTooltipClick($event)\">?</div>\n            <div *ngIf=\"tooltip && tooltipShown\"\n                 (click)=\"onTooltipClick($event)\"\n                 (mouseenter)=\"showTooltip()\"\n                 (mouseleave)=\"hideTooltip()\"\n                 class=\"evo-input__tooltip-label\">{{ tooltip }}</div>\n        </div>\n    </label>\n</div>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                    styles: [".evo-input{display:flex;width:100%;height:48px;line-height:48px;white-space:nowrap;background-color:#fff;background-image:none;border:1px solid #dbdbdb;border-radius:4px;transition:box-shadow .3s,border .3s;outline:0}.evo-input__container{display:flex;align-items:center;margin:0;width:100%;height:100%;border-radius:4px;cursor:text}.evo-input_focused{box-shadow:0 0 2px 0 #546e7a!important;border:1px solid #546e7a}.evo-input_disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input_disabled .evo-input__container{cursor:default}.evo-input_valid{border-color:#8bc34a}.evo-input_invalid{border-color:#f22}.evo-input__field{height:100%;border:none;margin:0;padding:0 20px;outline:0;font-size:16px;font-weight:400;color:#000;flex-grow:1;border-radius:4px;width:100%}.evo-input__field::-webkit-input-placeholder{color:#9b9b9b}.evo-input__field::-moz-placeholder{color:#9b9b9b;opacity:1}.evo-input__field:-ms-input-placeholder{color:#9b9b9b}.evo-input__field:disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input__field:not(:last-child){padding-right:0}.evo-input__tooltip{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0 10px;width:24px;height:24px;border-radius:50%;background:#eceff1;line-height:24px;text-align:center;font-family:\"Open Sans\",Arial,sans-serif;font-size:18px;font-weight:600;color:#546e7a;cursor:pointer}.evo-input__tooltip-label{position:absolute;width:100%;top:calc(100% - 2px);left:0;background-color:#fff8e6;z-index:1;border-radius:4px;padding:10px 10px 10px 20px;color:#212121;display:flex;box-shadow:0 4px 12px 0 rgba(0,0,0,.2);line-height:normal;white-space:normal;cursor:default}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(100% - 34px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute;pointer-events:none}@media (min-width:1200px){.evo-input__tooltip-label{left:calc(50% - 22px)}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(50% - 12px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute}}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return EvoInputComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    EvoInputComponent.ctorParameters = function () { return []; };
    EvoInputComponent.propDecorators = {
        autoFocus: [{ type: Input }],
        mask: [{ type: Input }],
        placeholder: [{ type: Input }],
        tooltip: [{ type: Input }],
        type: [{ type: Input }],
        _value: [{ type: Input, args: ['value',] }],
        inputElement: [{ type: ViewChild, args: ['input',] }]
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
    __extends(EvoBanner, _super);
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
        this.bannerClick = new EventEmitter();
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
        { type: Component, args: [{
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
        { type: undefined, decorators: [{ type: Inject, args: ['Window',] }] }
    ]; };
    EvoBannerComponent.propDecorators = {
        banner: [{ type: Input }],
        type: [{ type: Input }],
        bannerClick: [{ type: Output }]
    };
    return EvoBannerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EvoSidebarTypes = {
    basket: 'basket',
    partnerAuth: 'partnerAuth',
    promoCode: 'promoCode',
};
var EvoSidebarService = /** @class */ (function () {
    function EvoSidebarService() {
        this.isSidebarVisible$ = new BehaviorSubject({});
        this.registeredSidebars = {};
    }
    /**
     * @param {?} id
     * @return {?}
     */
    EvoSidebarService.prototype.deregister = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        delete this.registeredSidebars[id];
    };
    /**
     * @param {?} id
     * @return {?}
     */
    EvoSidebarService.prototype.register = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (!(id in EvoSidebarTypes)) {
            console.error("Sidebar. Unknown '" + id + "', please add this id in enum");
            return;
        }
        this.registeredSidebars[id] = false;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    EvoSidebarService.prototype.open = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.registeredSidebars[id] = true;
        this.isSidebarVisible$.next(this.registeredSidebars);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    EvoSidebarService.prototype.close = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.registeredSidebars[id] = false;
        this.isSidebarVisible$.next(this.registeredSidebars);
    };
    EvoSidebarService.decorators = [
        { type: Injectable },
    ];
    return EvoSidebarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoSidebarComponent = /** @class */ (function () {
    function EvoSidebarComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.onClose = new EventEmitter();
        this.states = {
            isVisible: false,
        };
    }
    /**
     * @return {?}
     */
    EvoSidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sidebarService.deregister(this.id);
    };
    /**
     * @return {?}
     */
    EvoSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sidebarService.register(this.id);
        this.sidebarService.isSidebarVisible$.subscribe(function (payload) {
            if (_this.id in payload) {
                _this.states.isVisible = payload[_this.id];
            }
            if (_this.states.isVisible) {
                _this.keyUpSubscription = _this.subscribeToKeyEvent();
            }
            else if (_this.keyUpSubscription) {
                _this.keyUpSubscription.unsubscribe();
                _this.keyUpSubscription = null;
            }
        });
    };
    /**
     * @return {?}
     */
    EvoSidebarComponent.prototype.closeSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarService.close(this.id);
        this.onClose.emit();
    };
    /**
     * @return {?}
     */
    EvoSidebarComponent.prototype.subscribeToKeyEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return fromEvent(document.body, 'keyup').subscribe(function (event) {
            if (event.keyCode === Key.Escape) {
                _this.sidebarService.close(_this.id);
            }
        });
    };
    EvoSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-sidebar',
                    styles: [".evo-sidebar{position:fixed;top:0;left:120%;bottom:0;z-index:3000;display:flex;flex-direction:column;width:100%;background-color:#fff;box-shadow:0 0 12px rgba(0,0,0,.25)}@media (min-width:992px){.evo-sidebar{left:100%;margin-left:40px;width:674px;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}}.evo-sidebar_active{left:0}.evo-sidebar__header{display:flex;justify-content:space-between;align-items:flex-start;flex-shrink:0;border-bottom:1px solid #eceff1;padding:20px 0 8px;margin:0 15px}@media (min-width:992px){.evo-sidebar_active{left:100%;-webkit-transform:translateX(-714px);transform:translateX(-714px)}.evo-sidebar__header{margin:0 30px}}.evo-sidebar__title{font-family:museo,Arial,sans-serif;font-size:30px;font-weight:700;color:#333f48}@media (min-width:768px){.evo-sidebar__header{padding-top:38px}.evo-sidebar__title{font-size:30px;padding:0}}.evo-sidebar__close{padding:8px;transition:opacity .3s;margin:2px -8px 0 30px;cursor:pointer}.evo-sidebar__close:hover{opacity:.8}.evo-sidebar__close-icon{width:24px;height:24px;color:#546e7a;background:url(/assets/evo-ui-kit/icons/close.svg)}.evo-sidebar__content{display:flex;flex-direction:column;flex-grow:1;padding:20px 15px 40px;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (min-width:768px){.evo-sidebar__content{padding:40px 15px}}@media (min-width:992px){.evo-sidebar__content{padding:40px 30px}}.evo-sidebar__footer{display:flex;flex-direction:column;flex-shrink:0;padding:30px 15px;box-shadow:0 4px 12px rgba(0,0,0,.25);background-color:#fff}.evo-sidebar__footer:empty{display:none}@media (min-width:768px){.evo-sidebar__footer{flex-direction:row;justify-content:space-between;padding:18px 15px}}@media (min-width:992px){.evo-sidebar__footer{padding:18px 30px}}.evo-sidebar__buttons{display:flex;flex-direction:column;padding:30px 0 10px}.evo-sidebar__buttons_border{border-top:1px solid #eceff1;margin-top:50px}.evo-sidebar__button+.evo-sidebar__button{margin-top:20px}@media (min-width:768px){.evo-sidebar__buttons{flex-direction:row;justify-content:space-between;padding-bottom:0}.evo-sidebar__button+.evo-sidebar__button{margin-top:0}}"],
                    template: "<div class=\"fade-background fade-background_over-all\"\n     *ngIf=\"states.isVisible\"\n     (click)=\"closeSidebar()\"\n></div>\n\n<div class=\"evo-sidebar\" [ngClass]=\"{'evo-sidebar_active' : states.isVisible}\" >\n    <div class=\"evo-sidebar__header\">\n        <div class=\"evo-sidebar__title\">{{ title }}</div>\n\n        <div class=\"evo-sidebar__close\" (click)=\"sidebarService.close(id)\">\n            <div class=\"evo-sidebar__close-icon\"></div>\n        </div>\n    </div>\n\n\n    <div class=\"evo-sidebar__content\">\n        <ng-content select=\"[content]\"></ng-content>\n    </div>\n\n    <div class=\"evo-sidebar__footer\"><ng-content select=\"[footer]\"></ng-content></div> <!--\u0447\u0442\u043E\u0431\u044B :empty \u0440\u0430\u0431\u043E\u0442\u0430\u043B, \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438 evo-sidebar__footer \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0438\u0447\u0435\u0433\u043E, \u0434\u0430\u0436\u0435 \u043F\u0440\u043E\u0431\u0435\u043B\u0430-->\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    EvoSidebarComponent.ctorParameters = function () { return [
        { type: EvoSidebarService }
    ]; };
    EvoSidebarComponent.propDecorators = {
        id: [{ type: Input }],
        title: [{ type: Input }],
        onClose: [{ type: Output }]
    };
    return EvoSidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ isObject = function (item) { return item != null && typeof item === 'object'; };
var /** @type {?} */ isString = function (item) { return typeof item === 'string'; };
var /** @type {?} */ isArray = function (item) { return Array.isArray(item); };
var EvoUiClassDirective = /** @class */ (function (_super) {
    __extends(EvoUiClassDirective, _super);
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
    EvoSidebarComponent,
];
var /** @type {?} */ directives = [
    EvoUiClassDirective,
];
var /** @type {?} */ bundle = __spread(components, directives);
var EvoUiKitModule = /** @class */ (function () {
    function EvoUiKitModule() {
    }
    /**
     * @return {?}
     */
    EvoUiKitModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: EvoUiKitModule,
            providers: [
                EvoSidebarService,
            ]
        };
    };
    EvoUiKitModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TextMaskModule,
                    ],
                    declarations: __spread(bundle),
                    exports: __spread(bundle),
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

export { EvoSidebarService, EvoUiKitModule, EvoBaseControl as ɵc, EvoBannerComponent as ɵf, EvoButtonComponent as ɵa, EvoCheckboxComponent as ɵb, EvoControlErrorComponent as ɵd, EvoInputComponent as ɵe, EvoSidebarComponent as ɵg, EvoUiClassDirective as ɵh };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vU2VyaWFsaXphYmxlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuc2VydmljZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvZXZvLXVpLWtpdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU2l6ZXMge1xuICAgIGZ1bGxXaWR0aCA9ICdmdWxsLXdpZHRoJyxcbiAgICBzbWFsbCA9ICdzbWFsbCcsXG4gICAgbGFyZ2UgPSAnbGFyZ2UnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CdXR0b25TdHlsZXMge1xuICAgIGxpbmVkID0gJ2xpbmVkJyxcbiAgICBkYXJrYmx1ZSA9ICdkYXJrYmx1ZScsXG4gICAgZGFya2JsdWVMaW5lZCA9ICdkYXJrYmx1ZS1saW5lZCcsXG4gICAgZ3JlZW4gPSAnZ3JlZW4nLFxuICAgIGdyZWVubGluZWQgPSAnZ3JlZW4tbGluZWQnLFxuICAgIHB1cnBsZSA9ICdwdXJwbGUnXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWJ1dHRvblwiIFtldm9VaUNsYXNzXT1cInRvdGFsQ2xhc3Nlc1wiIFtuZ1N0eWxlXT1cInRvdGFsU3R5bGVzXCI+XG4gICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZ1wiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgQC13ZWJraXQta2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX0uZXZvLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowIDMwcHg7aGVpZ2h0OjQ0cHg7bGluZS1oZWlnaHQ6NDRweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1pbWFnZTpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MTZweDtjb2xvcjojZmZmO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItcmFkaXVzOjMwcHg7YmFja2dyb3VuZC1jb2xvcjojZmY3ODAwO2JvcmRlcjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyxjb2xvciAuM3MsYm9yZGVyIC4zc30uZXZvLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjlkNDc7Y29sb3I6I2ZmZn0uZXZvLWJ1dHRvbjphY3RpdmUsLmV2by1idXR0b246Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojY2M2MDAwO2NvbG9yOiNmZmY7b3V0bGluZTowfS5ldm8tYnV0dG9uOmRpc2FibGVkLC5ldm8tYnV0dG9uX2Rpc2FibGVke2JhY2tncm91bmQ6I2Q2ZDZkNiFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOiNkNmQ2ZDYhaW1wb3J0YW50O2NvbG9yOiNmZmYhaW1wb3J0YW50O2N1cnNvcjpub3QtYWxsb3dlZH0uZXZvLWJ1dHRvbl9saW5lZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6I2ZmNzgwMDtib3JkZXI6MXB4IHNvbGlkICNmZjc4MDB9LmV2by1idXR0b25fbGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY3ODAwO2NvbG9yOiNmZmZ9LmV2by1idXR0b25fbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2xpbmVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2NjNjAwMDtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojY2M2MDAwfS5ldm8tYnV0dG9uX2RhcmtibHVle2JhY2tncm91bmQtY29sb3I6IzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM3NTk2YTV9LmV2by1idXR0b25fZGFya2JsdWU6YWN0aXZlLC5ldm8tYnV0dG9uX2RhcmtibHVlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzI4MzIzOX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzU0NmU3YTtib3JkZXI6MXB4IHNvbGlkICM1NDZlN2F9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhO2NvbG9yOiNmZmZ9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzI4MzIzOTtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojMjgzMjM5fS5ldm8tYnV0dG9uX2dyZWVue2JhY2tncm91bmQtY29sb3I6IzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNhMmNmNmV9LmV2by1idXR0b25fZ3JlZW46YWN0aXZlLC5ldm8tYnV0dG9uX2dyZWVuOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzZmOWMzYn0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzhiYzM0YTtib3JkZXI6MXB4IHNvbGlkICM4YmMzNGF9LmV2by1idXR0b25fZ3JlZW4tbGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhO2NvbG9yOiNmZmZ9LmV2by1idXR0b25fZ3JlZW4tbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzZmOWMzYjtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojNmY5YzNifS5ldm8tYnV0dG9uX3B1cnBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNhYjRhYzN9LmV2by1idXR0b25fcHVycGxlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2NjNThlOH0uZXZvLWJ1dHRvbl9wdXJwbGU6YWN0aXZlLC5ldm8tYnV0dG9uX3B1cnBsZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM5MzM1YWJ9LmV2by1idXR0b25fZnVsbC13aWR0aHt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyfS5ldm8tYnV0dG9uX3NtYWxse3BhZGRpbmc6MCAyMHB4O2hlaWdodDozMHB4O2xpbmUtaGVpZ2h0OjMwcHg7Zm9udC1zaXplOjE0cHh9LmV2by1idXR0b25fbGFyZ2V7cGFkZGluZzowIDQwcHg7aGVpZ2h0OjYwcHg7bGluZS1oZWlnaHQ6NjBweDtmb250LXNpemU6MThweH0uZXZvLWJ1dHRvbl9pY29ue3BhZGRpbmctbGVmdDoyMnB4O3BhZGRpbmctcmlnaHQ6MjJweDtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uZXZvLWJ1dHRvbl9sb2FkaW5ne3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246cmVsYXRpdmV9LmV2by1idXR0b25fX2RvdHN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW4tbGVmdDotMzBweDttYXJnaW4tdG9wOi01cHh9LmV2by1idXR0b25fX2RvdHt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2JvcmRlci1yYWRpdXM6NTAlO2Zsb2F0OmxlZnQ7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7bWFyZ2luOjAgNXB4Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LWFuaW1hdGlvbjoxcyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgaW5maW5pdGUgZnh9LmV2by1idXR0b25fX2RvdDpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb246MXMgLjNzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyAuM3MgaW5maW5pdGUgZnh9LmV2by1idXR0b25fX2RvdDpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb246MXMgLjZzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyAuNnMgaW5maW5pdGUgZnh9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRXZvQnV0dG9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBjb2xvcjogRXZvQnV0dG9uU3R5bGVzO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2l6ZTogRXZvQnV0dG9uU2l6ZXM7XG5cbiAgICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjbGllbnRXaWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xuXG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmcpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnbG9hZGluZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGdldCB0b3RhbFN0eWxlcygpOiB7W3N0eWxlS2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJlc3VsdFsnd2lkdGgnXSA9IGAke3RoaXMuY2xpZW50V2lkdGh9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jbGllbnRXaWR0aCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIEV2b0NvbnRyb2xTdGF0ZXMge1xuICB2YWxpZCA9ICd2YWxpZCcsXG4gIGludmFsaWQgPSAnaW52YWxpZCcsXG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJRXZvQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbFN0YXRlTWFuYWdlciB7XG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBjb25zdHJ1Y3Rvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGV4dHJhU3RhdGVzPzogSUV2b0NvbnRyb2xTdGF0ZSkge1xuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gIH1cblxuICBnZXQgY3VycmVudFN0YXRlKCk6IElFdm9Db250cm9sU3RhdGUge1xuICAgIC8vIFRPRE8gbWVyZ2UgY29uZGl0aW9ucyB3aXRoIGV4dHJhU3RhdGVzXG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wudmFsaWQsXG4gICAgICBpbnZhbGlkOiB0aGlzLmNvbnRyb2wuZGlydHkgJiYgdGhpcy5jb250cm9sLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sLmludmFsaWQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUV2b0NvbnRyb2xTdGF0ZSB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlTWFuYWdlciB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyJztcbmltcG9ydCB7IElFdm9Db250cm9sRXJyb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcblxuZXhwb3J0IGNsYXNzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lKSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZTtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbERpcmVjdGl2ZSkgZm9ybUNvbnRyb2xEaXJlY3RpdmU6IEZvcm1Db250cm9sRGlyZWN0aXZlO1xuICBASW5wdXQoKSBzdGF0ZTogSUV2b0NvbnRyb2xTdGF0ZTtcbiAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG5cbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuICBzdGF0ZU1hbmFnZXI6IEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXI7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZSAmJiB0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICB0aGlzLnN0YXRlTWFuYWdlciA9IG5ldyBFdm9Db250cm9sU3RhdGVNYW5hZ2VyKHRoaXMuY29udHJvbCwgdGhpcy5zdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdGVtcGxhdGUgZHJpdmVuIGZvcm1zIGFsbG93ZWQgd2l0aCBFdm9VaSBraXQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0nO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgPGxhYmVsIGNsYXNzPVwiZXZvLWNoZWNrYm94XCI+XG4gICAgPGlucHV0IGNsYXNzPVwiZXZvLWNoZWNrYm94X19pbnB1dFwiXG4gICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgIFtldm9VaUNsYXNzXT1cImNoZWNrYm94Q2xhc3NcIlxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJldm8tY2hlY2tib3hfX3RleHRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbjwvbGFiZWw+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1jaGVja2JveHttYXJnaW46MH0uZXZvLWNoZWNrYm94X19pbnB1dHtkaXNwbGF5Om5vbmV9LmV2by1jaGVja2JveF9fdGV4dHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLWxlZnQ6MjZweDtjb2xvcjojMjEyMTIxO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoycHg7bGVmdDowO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjNweH1pbnB1dDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JvcmRlci1jb2xvcjojNDQ4YWZmO2JhY2tncm91bmQ6dXJsKC9hc3NldHMvZXZvLXVpLWtpdC9pY29ucy9jaGVja2JveC1jaGVjay5zdmcpIGNlbnRlciBuby1yZXBlYXQgIzQ0OGFmZn1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpKy5ldm8tY2hlY2tib3hfX3RleHR7Y3Vyc29yOmRlZmF1bHR9aW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjZ9aW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0e2N1cnNvcjpkZWZhdWx0fWlucHV0OmRpc2FibGVkOmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7b3BhY2l0eTouNX1pbnB1dC5ldm8tY2hlY2tib3hfaW52YWxpZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtib3JkZXItY29sb3I6I2YyMn1gXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9DaGVja2JveENvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9DaGVja2JveENvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IGJvb2xlYW47XG5cbiAgICBvbkNoYW5nZSA9IChfKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgY2hlY2tib3hDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdpbnZhbGlkJzogdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2b0NvbnRyb2xFcnJvciB7XG4gICAgW2Vycm9yOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWNvbnRyb2wtZXJyb3InLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1lcnJvclwiICpuZ0Zvcj1cImxldCBlcnJvck1zZyBvZiBlcnJvcnNNYXA7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgPHNwYW4gKm5nSWY9XCJzaG93RXJyb3IoaSlcIj57eyBlcnJvck1zZyB9fTwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1lcnJvcntmb250LXNpemU6MTRweDtjb2xvcjojZjIyO2ZvbnQtc3R5bGU6aXRhbGljO21hcmdpbi10b3A6MTBweH1gXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFdm9Db250cm9sRXJyb3JDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGVycm9yczogYW55O1xuICAgIEBJbnB1dCgpIGVycm9yc01lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yO1xuICAgIEBJbnB1dCgpIHNob3dDb3VudCA9IDE7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRFcnJvck1lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yID0ge1xuICAgICAgICByZXF1aXJlZDogJ8OQwpfDkMKww5DCv8OQwr7DkMK7w5DCvcOQwrjDkcKCw5DCtSDDkMK/w5DCvsOQwrvDkMK1JyxcbiAgICAgICAgZW1haWw6ICfDkMKdw5DCtcOQwr/DkcKAw5DCsMOQwrLDkMK4w5DCu8ORwozDkMK9w5DCviDDkcKDw5DCusOQwrDDkMK3w5DCsMOQwr3DkMKwIMOQwr/DkMK+w5HCh8ORwoLDkMKwJyxcbiAgICAgICAgcGhvbmU6ICfDkMKSw5DCssOQwrXDkMK0w5DCuMORwoLDkMK1IMORwoLDkMK1w5DCu8OQwrXDkcKEw5DCvsOQwr0nLFxuICAgIH07XG5cbiAgICBnZXQgZXJyb3JzTWFwKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEVycm9yTWVzc2FnZXMsXG4gICAgICAgICAgICAuLi4odGhpcy5lcnJvcnNNZXNzYWdlcyB8fCB7fSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3JLZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICByZXR1cm4gZXJyb3JLZXlzLm1hcCgoa2V5KSA9PiBlcnJvck1lc3NhZ2VzW2tleV0pO1xuICAgIH1cblxuICAgIHNob3dFcnJvcihpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiArK2luZGV4IDw9IHRoaXMuc2hvd0NvdW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0nO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1pbnB1dFwiIFtldm9VaUNsYXNzXT1cImlucHV0Q2xhc3NcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJldm8taW5wdXRfX2NvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgICAgICAqbmdJZj1cIiFtYXNrXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X19maWVsZFwiXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ7eyB0eXBlIH19XCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgcGxhY2Vob2xkZXIgfX1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGlucHV0ICNpbnB1dFxuICAgICAgICAgICAgICAgKm5nSWY9XCJtYXNrXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X19maWVsZFwiXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ7eyB0eXBlIH19XCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgcGxhY2Vob2xkZXIgfX1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICBbdGV4dE1hc2tdPVwibWFza1wiXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1pbnB1dF9fYWRkaXRpb25hbFwiXG4gICAgICAgICAgICAgKm5nSWY9XCJoYXNBZGRpdGlvbmFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0X190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2hvd1Rvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhpZGVUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25Ub29sdGlwQ2xpY2soJGV2ZW50KVwiPj88L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0b29sdGlwICYmIHRvb2x0aXBTaG93blwiXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJvblRvb2x0aXBDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2hvd1Rvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhpZGVUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbFwiPnt7IHRvb2x0aXAgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbjwvZGl2PlxuPGV2by1jb250cm9sLWVycm9yICpuZ0lmPVwic2hvd0Vycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc01lc3NhZ2VzXT1cImVycm9yc01lc3NhZ2VzXCI+PC9ldm8tY29udHJvbC1lcnJvcj5cbmAsXG4gIHN0eWxlczogW2AuZXZvLWlucHV0e2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2hlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjQ4cHg7d2hpdGUtc3BhY2U6bm93cmFwO2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3MsYm9yZGVyIC4zcztvdXRsaW5lOjB9LmV2by1pbnB1dF9fY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjRweDtjdXJzb3I6dGV4dH0uZXZvLWlucHV0X2ZvY3VzZWR7Ym94LXNoYWRvdzowIDAgMnB4IDAgIzU0NmU3YSFpbXBvcnRhbnQ7Ym9yZGVyOjFweCBzb2xpZCAjNTQ2ZTdhfS5ldm8taW5wdXRfZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudDtjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfZGlzYWJsZWQgLmV2by1pbnB1dF9fY29udGFpbmVye2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfdmFsaWR7Ym9yZGVyLWNvbG9yOiM4YmMzNGF9LmV2by1pbnB1dF9pbnZhbGlke2JvcmRlci1jb2xvcjojZjIyfS5ldm8taW5wdXRfX2ZpZWxke2hlaWdodDoxMDAlO2JvcmRlcjpub25lO21hcmdpbjowO3BhZGRpbmc6MCAyMHB4O291dGxpbmU6MDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDA7Y29sb3I6IzAwMDtmbGV4LWdyb3c6MTtib3JkZXItcmFkaXVzOjRweDt3aWR0aDoxMDAlfS5ldm8taW5wdXRfX2ZpZWxkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5YjtvcGFjaXR5OjF9LmV2by1pbnB1dF9fZmllbGQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudDtjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOm5vdCg6bGFzdC1jaGlsZCl7cGFkZGluZy1yaWdodDowfS5ldm8taW5wdXRfX3Rvb2x0aXB7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO21hcmdpbjowIDEwcHg7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNlY2VmZjE7bGluZS1oZWlnaHQ6MjRweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LWZhbWlseTpcIk9wZW4gU2Fuc1wiLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiM1NDZlN2E7Y3Vyc29yOnBvaW50ZXJ9LmV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO3RvcDpjYWxjKDEwMCUgLSAycHgpO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY4ZTY7ei1pbmRleDoxO2JvcmRlci1yYWRpdXM6NHB4O3BhZGRpbmc6MTBweCAxMHB4IDEwcHggMjBweDtjb2xvcjojMjEyMTIxO2Rpc3BsYXk6ZmxleDtib3gtc2hhZG93OjAgNHB4IDEycHggMCByZ2JhKDAsMCwwLC4yKTtsaW5lLWhlaWdodDpub3JtYWw7d2hpdGUtc3BhY2U6bm9ybWFsO2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWw6YmVmb3Jle2NvbnRlbnQ6Jyc7dG9wOi0yMHB4O2xlZnQ6Y2FsYygxMDAlIC0gMzRweCk7Ym9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNmZmY4ZTY7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWx7bGVmdDpjYWxjKDUwJSAtIDIycHgpfS5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWw6YmVmb3Jle2NvbnRlbnQ6Jyc7dG9wOi0yMHB4O2xlZnQ6Y2FsYyg1MCUgLSAxMnB4KTtib3JkZXI6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2ZmZjhlNjtwb3NpdGlvbjphYnNvbHV0ZX19YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBASW5wdXQoKSBtYXNrOiBhbnk7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCd2YWx1ZScpIF92YWx1ZTogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXRFbGVtZW50O1xuXG4gIG9uQ2hhbmdlO1xuICBvblRvdWNoZWQ7XG5cbiAgcHVibGljIHRvb2x0aXBTaG93biA9IGZhbHNlO1xuXG4gIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIGZvY3VzZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlIHx8IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlucHV0Q2xhc3MoKToge1tjc3NDbGFzczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIHJldHVybiB7XG4gICAgICAnZm9jdXNlZCc6IHRoaXMuZm9jdXNlZCxcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAndmFsaWQnOiB0aGlzLnN0YXRlTWFuYWdlci5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy52YWxpZF0sXG4gICAgICAnaW52YWxpZCc6IHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdXG4gICAgfTtcbiAgfVxuXG4gIGdldCBoYXNBZGRpdGlvbmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudG9vbHRpcDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgfVxuXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICBvblRvb2x0aXBDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGhpZGVUb29sdGlwKCkge1xuICAgIHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCkge1xuICAgICAgICB0aGlzLnRvb2x0aXBTaG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIDI1KTtcbiAgfVxuXG4gIHNob3dUb29sdGlwKCkge1xuICAgIHRoaXMudG9vbHRpcFNob3duID0gdHJ1ZTtcbiAgICB0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi9jb21tb24vU2VyaWFsaXphYmxlJztcblxuZXhwb3J0IGVudW0gRXZvQmFubmVyVHlwZXMge1xuICBsYXJnZSA9ICdsYXJnZScsXG4gIHNtYWxsID0gJ3NtYWxsJyxcbiAgZnVsbFdpZHRoID0gJ2Z1bGwtd2lkdGgnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CYW5uZXJMb2NhdGlvbnMge1xuICBtYWluID0gJ01haW4nLFxuICBjYXRlZ29yeSA9ICdDYXRlZ29yeSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRXZvQmFubmVyQW5hbHl0aWNzIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGRhdGE6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjcmVhdGl2ZTogc3RyaW5nO1xuICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgZGltZW5zaW9uNz86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEV2b0Jhbm5lciBleHRlbmRzIFNlcmlhbGl6YWJsZSB7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgYmFubmVyUG9zaXRpb25OYW1lcyA9IHtcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLm1haW5dOiBbXG4gICAgICAnbWFpbicsXG4gICAgICAndG9wJyxcbiAgICAgICdib3R0b20nXG4gICAgXSxcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLmNhdGVnb3J5XTogW1xuICAgICAgJ21haW4nXG4gICAgXVxuICB9O1xuICBidXR0b246IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1iYW5uZXInLFxuICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwiZXZvLWJhbm5lclwiXG4gICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgW2F0dHIuaHJlZl09XCJiYW5uZXI/LnVybFwiXG4gICAoY2xpY2spPVwib25CYW5uZXJDbGljaygpXCJcbiAgIFtldm9VaUNsYXNzXT1cInR5cGVcIlxuICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX190aXRsZVwiPnt7IGJhbm5lcj8udGl0bGUgfX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2hpdGUgcHJvbW8tYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJiYW5uZXI/LmJ1dHRvblwiPnt7IGJhbm5lcj8uYnV0dG9uIH19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGltZyBjbGFzcz1cImV2by1iYW5uZXJfX2ltZ1wiXG4gICAgICAgICBzcmM9XCJ7eyBiYW5uZXI/LmltYWdlIH19XCJcbiAgICAgICAgIGFsdD1cInt7IGJhbm5lcj8udGl0bGUgfX1cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2AuZXZvLWJhbm5lcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo0MzBweDtwYWRkaW5nOjEycHggMjBweDtib3JkZXItcmFkaXVzOjZweDtvdmVyZmxvdzpoaWRkZW47Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzfS5ldm8tYmFubmVyOmhvdmVye2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4yKX0uZXZvLWJhbm5lcl9fY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bntoZWlnaHQ6NDBweDtwYWRkaW5nOjAgMjBweDttaW4td2lkdGg6MTU2cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246bWlkZGxlfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46aG92ZXJ7YmFja2dyb3VuZDojZmZmfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46YWN0aXZle2JveC1zaGFkb3c6bm9uZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuIHNwYW57Zm9udC1zaXplOjE4cHh9LmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuMztmb250LXNpemU6MzBweDttYXJnaW4tYm90dG9tOjEwcHh9LmV2by1iYW5uZXJfX2Rlc2NyaXB0aW9ue2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuMzttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWJvdHRvbToxMHB4fS5ldm8tYmFubmVyX19pbWd7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7cmlnaHQ6MDt3aWR0aDoyOTBweDtoZWlnaHQ6MjkwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aHtwYWRkaW5nOjIwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7bGluZS1oZWlnaHQ6MzhweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1iYW5uZXJ7cGFkZGluZzozMHB4IDQwcHh9LmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYwJX0uZXZvLWJhbm5lcl9fZGVzY3JpcHRpb257bWF4LXdpZHRoOjI1MHB4fS5ldm8tYmFubmVyX19pbWd7d2lkdGg6NDMwcHg7aGVpZ2h0OjQzMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGh7aGVpZ2h0OjI0MHB4O3BhZGRpbmc6MzBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo1MCV9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1zaXplOjM2cHg7bGluZS1oZWlnaHQ6NDRweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19pbWd7aGVpZ2h0OjI0MHB4O3dpZHRoOjI0MHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5ldm8tYmFubmVye3BhZGRpbmc6MzBweCA0MHB4fS5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MyV9LmV2by1iYW5uZXJfc21hbGx7aGVpZ2h0OjIxMHB4O3BhZGRpbmc6MjBweH0uZXZvLWJhbm5lcl9zbWFsbCAuZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1zaXplOjIwcHg7bWFyZ2luLWJvdHRvbToyMHB4fS5ldm8tYmFubmVyX3NtYWxsIC5wcm9tby1idG57aGVpZ2h0OjMycHh9LmV2by1iYW5uZXJfc21hbGwgLmV2by1iYW5uZXJfX2ltZ3t3aWR0aDoyMTBweDtoZWlnaHQ6MjEwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjMlfX1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiAnV2luZG93JywgIHVzZVZhbHVlOiB3aW5kb3cgfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9CYW5uZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBiYW5uZXI6IEV2b0Jhbm5lcjtcbiAgQElucHV0KCkgdHlwZTogRXZvQmFubmVyVHlwZXMgPSBFdm9CYW5uZXJUeXBlcy5zbWFsbDtcblxuICBAT3V0cHV0KCkgYmFubmVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnV2luZG93JykgcHJpdmF0ZSB3aW5kb3c6IGFueSxcbiAgKSB7XG4gIH1cblxuICBvbkJhbm5lckNsaWNrKCkge1xuICAgIHRoaXMuYmFubmVyQ2xpY2suZW1pdCh0aGlzLmJhbm5lcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBFdm9TaWRlYmFyVHlwZXMge1xuICAgIGJhc2tldCA9ICdiYXNrZXQnLFxuICAgIHBhcnRuZXJBdXRoID0gJ3BhcnRuZXJBdXRoJyxcbiAgICBwcm9tb0NvZGUgPSAncHJvbW9Db2RlJyxcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2b1NpZGViYXJTZXJ2aWNlIHtcbiAgICBpc1NpZGViYXJWaXNpYmxlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICAgIHByaXZhdGUgcmVnaXN0ZXJlZFNpZGViYXJzID0ge307XG5cbiAgICBkZXJlZ2lzdGVyKGlkOiBFdm9TaWRlYmFyVHlwZXMpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXTtcbiAgICB9XG5cbiAgICByZWdpc3RlcihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIGlmICghKGlkIGluIEV2b1NpZGViYXJUeXBlcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFNpZGViYXIuIFVua25vd24gJyR7aWR9JywgcGxlYXNlIGFkZCB0aGlzIGlkIGluIGVudW1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvcGVuKGlkOiBFdm9TaWRlYmFyVHlwZXMpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1NpZGViYXJWaXNpYmxlJC5uZXh0KHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzKTtcbiAgICB9XG5cbiAgICBjbG9zZShpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2lkZWJhclZpc2libGUkLm5leHQodGhpcy5yZWdpc3RlcmVkU2lkZWJhcnMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgYXMgb2JzZXJ2YWJsZUZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSAndHMta2V5Y29kZS1lbnVtJztcblxuaW1wb3J0IHsgRXZvU2lkZWJhclNlcnZpY2UsIEV2b1NpZGViYXJUeXBlcyB9IGZyb20gJy4vZXZvLXNpZGViYXIuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tc2lkZWJhcicsXG4gICAgc3R5bGVzOiBbYC5ldm8tc2lkZWJhcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjEyMCU7Ym90dG9tOjA7ei1pbmRleDozMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDAgMTJweCByZ2JhKDAsMCwwLC4yNSl9QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcntsZWZ0OjEwMCU7bWFyZ2luLWxlZnQ6NDBweDt3aWR0aDo2NzRweDt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC41czt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzLC13ZWJraXQtdHJhbnNmb3JtIC41c319LmV2by1zaWRlYmFyX2FjdGl2ZXtsZWZ0OjB9LmV2by1zaWRlYmFyX19oZWFkZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZmxleC1zaHJpbms6MDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWNlZmYxO3BhZGRpbmc6MjBweCAwIDhweDttYXJnaW46MCAxNXB4fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfYWN0aXZle2xlZnQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC03MTRweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTcxNHB4KX0uZXZvLXNpZGViYXJfX2hlYWRlcnttYXJnaW46MCAzMHB4fX0uZXZvLXNpZGViYXJfX3RpdGxle2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjMwcHg7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMzMzNmNDh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9faGVhZGVye3BhZGRpbmctdG9wOjM4cHh9LmV2by1zaWRlYmFyX190aXRsZXtmb250LXNpemU6MzBweDtwYWRkaW5nOjB9fS5ldm8tc2lkZWJhcl9fY2xvc2V7cGFkZGluZzo4cHg7dHJhbnNpdGlvbjpvcGFjaXR5IC4zczttYXJnaW46MnB4IC04cHggMCAzMHB4O2N1cnNvcjpwb2ludGVyfS5ldm8tc2lkZWJhcl9fY2xvc2U6aG92ZXJ7b3BhY2l0eTouOH0uZXZvLXNpZGViYXJfX2Nsb3NlLWljb257d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtjb2xvcjojNTQ2ZTdhO2JhY2tncm91bmQ6dXJsKC9hc3NldHMvZXZvLXVpLWtpdC9pY29ucy9jbG9zZS5zdmcpfS5ldm8tc2lkZWJhcl9fY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZ3JvdzoxO3BhZGRpbmc6MjBweCAxNXB4IDQwcHg7b3ZlcmZsb3cteTphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2NvbnRlbnR7cGFkZGluZzo0MHB4IDE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfX2NvbnRlbnR7cGFkZGluZzo0MHB4IDMwcHh9fS5ldm8tc2lkZWJhcl9fZm9vdGVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1zaHJpbms6MDtwYWRkaW5nOjMwcHggMTVweDtib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMjUpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uZXZvLXNpZGViYXJfX2Zvb3RlcjplbXB0eXtkaXNwbGF5Om5vbmV9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9fZm9vdGVye2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nOjE4cHggMTVweH19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcl9fZm9vdGVye3BhZGRpbmc6MThweCAzMHB4fX0uZXZvLXNpZGViYXJfX2J1dHRvbnN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOjMwcHggMCAxMHB4fS5ldm8tc2lkZWJhcl9fYnV0dG9uc19ib3JkZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VjZWZmMTttYXJnaW4tdG9wOjUwcHh9LmV2by1zaWRlYmFyX19idXR0b24rLmV2by1zaWRlYmFyX19idXR0b257bWFyZ2luLXRvcDoyMHB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2J1dHRvbnN7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmctYm90dG9tOjB9LmV2by1zaWRlYmFyX19idXR0b24rLmV2by1zaWRlYmFyX19idXR0b257bWFyZ2luLXRvcDowfX1gXSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmYWRlLWJhY2tncm91bmQgZmFkZS1iYWNrZ3JvdW5kX292ZXItYWxsXCJcbiAgICAgKm5nSWY9XCJzdGF0ZXMuaXNWaXNpYmxlXCJcbiAgICAgKGNsaWNrKT1cImNsb3NlU2lkZWJhcigpXCJcbj48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyXCIgW25nQ2xhc3NdPVwieydldm8tc2lkZWJhcl9hY3RpdmUnIDogc3RhdGVzLmlzVmlzaWJsZX1cIiA+XG4gICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX190aXRsZVwiPnt7IHRpdGxlIH19PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19jbG9zZVwiIChjbGljayk9XCJzaWRlYmFyU2VydmljZS5jbG9zZShpZClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fY2xvc2UtaWNvblwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fZm9vdGVyXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3Rlcl1cIj48L25nLWNvbnRlbnQ+PC9kaXY+IDwhLS3DkcKHw5HCgsOQwr7DkMKxw5HCiyA6ZW1wdHkgw5HCgMOQwrDDkMKxw5DCvsORwoLDkMKww5DCuywgw5DCvcOQwrUgw5DCtMOQwr7DkMK7w5DCtsOQwr3DkMK+IMOQwrHDkcKLw5HCgsORwowgw5DCssOQwr3DkcKDw5HCgsORwoDDkMK4IGV2by1zaWRlYmFyX19mb290ZXIgw5DCssOQwr7DkMK+w5DCscORwonDkMK1IMOQwr3DkMK4w5HCh8OQwrXDkMKzw5DCviwgw5DCtMOQwrDDkMK2w5DCtSDDkMK/w5HCgMOQwr7DkMKxw5DCtcOQwrvDkMKwLS0+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEV2b1NpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gICAgQElucHV0KCkgaWQ6IEV2b1NpZGViYXJUeXBlcztcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBrZXlVcFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHN0YXRlcyA9IHtcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHNpZGViYXJTZXJ2aWNlOiBFdm9TaWRlYmFyU2VydmljZSkge31cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmRlcmVnaXN0ZXIodGhpcy5pZCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UucmVnaXN0ZXIodGhpcy5pZCk7XG5cbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5pc1NpZGViYXJWaXNpYmxlJC5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkIGluIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5pc1Zpc2libGUgPSBwYXlsb2FkW3RoaXMuaWRdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlVG9LZXlFdmVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmtleVVwU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZVNpZGViYXIoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuY2xvc2UodGhpcy5pZCk7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVUb0tleUV2ZW50KCkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZUZyb21FdmVudChkb2N1bWVudC5ib2R5LCAna2V5dXAnKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5LkVzY2FwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuY2xvc2UodGhpcy5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEl0ZXJhYmxlRGlmZmVycywgS2V5VmFsdWVEaWZmZXJzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBpc09iamVjdCA9IChpdGVtKSA9PiBpdGVtICE9IG51bGwgJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnO1xuY29uc3QgaXNTdHJpbmcgPSAoaXRlbSkgPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnO1xuY29uc3QgaXNBcnJheSA9IChpdGVtKSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZXZvVWlDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBOZ0NsYXNzIHtcbiAgQElucHV0KCdldm9VaUNsYXNzJylcbiAgc2V0IHNldHRlck9mQ2xhc3MoZGF0YTogYW55KSB7XG4gICAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBkYXRhLm1hcCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3RoaXMucHJlZml4fV8ke2NsYXNzTmFtZX1gKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBkYXRhID0gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlKChuZXdEYXRhOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIG5ld0RhdGFbYCR7dGhpcy5wcmVmaXh9XyR7a2V5fWBdID0gZGF0YVtrZXldO1xuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICAgIH0sIHt9KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKChteUNsYXNzKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtteUNsYXNzfWApXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSB0eXBlIG5vdCBhbGxvd2VkIScpO1xuICAgIH1cblxuICAgIHRoaXMubmdDbGFzcyA9IGRhdGE7XG4gIH1cblxuICBuZ0NsYXNzOiBhbnk7XG5cbiAgcHJpdmF0ZSBwcmVmaXg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcbiAgICAgICAgX25nRWw6IEVsZW1lbnRSZWYsIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoX2l0ZXJhYmxlRGlmZmVycywgX2tleVZhbHVlRGlmZmVycywgX25nRWwsIF9yZW5kZXJlcik7XG4gICAgdGhpcy5wcmVmaXggPSBfbmdFbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcblxuaW1wb3J0IHsgRXZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1idXR0b24vZXZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ2hlY2tib3hDb21wb25lbnQgIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jaGVja2JveC9ldm8tY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWlucHV0L2V2by1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuc2VydmljZSc7XG5leHBvcnQgeyBFdm9TaWRlYmFyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRXZvVWlDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlJztcblxuY29uc3QgY29tcG9uZW50czogYW55ID0gW1xuICBFdm9CdXR0b25Db21wb25lbnQsXG4gIEV2b0NoZWNrYm94Q29tcG9uZW50LFxuICBFdm9Db250cm9sRXJyb3JDb21wb25lbnQsXG4gIEV2b0lucHV0Q29tcG9uZW50LFxuICBFdm9CYW5uZXJDb21wb25lbnQsXG4gIEV2b1NpZGViYXJDb21wb25lbnQsXG5dO1xuXG5jb25zdCBkaXJlY3RpdmVzOiBhbnkgPSBbXG4gIEV2b1VpQ2xhc3NEaXJlY3RpdmUsXG5dO1xuXG5jb25zdCBidW5kbGU6IGFueSA9IFtcbiAgLi4uY29tcG9uZW50cyxcbiAgLi4uZGlyZWN0aXZlc1xuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uYnVuZGxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uYnVuZGxlLFxuICBdLFxuICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUtpdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRXZvVWlLaXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRXZvU2lkZWJhclNlcnZpY2UsXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG5cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIm9ic2VydmFibGVGcm9tRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0lBeUNJLDRCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO3dCQU5qQixLQUFLO3dCQUdOLEtBQUs7S0FLdkI7SUFFRCxzQkFBSSw0Q0FBWTs7OztRQUFoQjtZQUNJLHFCQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7WUFFN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO1lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0I7WUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM1QjtZQUVELE9BQU8sT0FBTyxDQUFDO1NBQ2xCOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFXOzs7O1FBQWY7WUFDSSxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWxCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQU0sSUFBSSxDQUFDLFdBQVcsT0FBSSxDQUFDO2FBQzdDO1lBRUQsT0FBTyxNQUFNLENBQUM7U0FDakI7OztPQUFBO0lBRUQsc0JBQUksdUNBQU87Ozs7UUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4Qjs7Ozs7UUFFRCxVQUFxQixLQUFjO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDekI7OztPQUxBOztnQkE5REosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsc1lBVWI7b0JBQ0csTUFBTSxFQUFFLENBQUMscWpHQUFxakcsQ0FBQztvQkFDL2pHLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNsRDs7OztnQkFoQzRDLFVBQVU7Ozt3QkFrQ2xELEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQTZDTCxLQUFLOzs2QkFqRlY7Ozs7Ozs7OztXQ0NVLE9BQU87YUFDTCxTQUFTOzs7Ozs7O0FDQ3JCLElBQUE7SUFHRSxnQ0FBWSxPQUF3QixFQUFFLFdBQThCO1FBQ2xFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCO0lBRUQsc0JBQUksZ0RBQVk7Ozs7UUFBaEI7O1lBR0UsT0FBTztnQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUN2RSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO2FBQzVFLENBQUM7U0FDSDs7O09BQUE7aUNBakJIO0lBa0JDLENBQUE7Ozs7OztBQ2xCRDs7Ozs7O0lBZ0JFLDJDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7U0FDN0M7YUFBTSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFO1lBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztTQUNsRDtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUNwRTtLQUNGO0lBRUQsc0JBQUksc0NBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakU7OztPQUFBOztrQ0F4QkEsWUFBWSxTQUFDLGVBQWU7dUNBQzVCLFlBQVksU0FBQyxvQkFBb0I7d0JBQ2pDLEtBQUs7aUNBQ0wsS0FBSzs7eUJBWFI7Ozs7Ozs7O0lDZ0MwQ0Esd0NBQWM7Ozt5QkFFbEMsS0FBSzt5QkFHWixVQUFDLENBQUMsS0FBTzswQkFDUixlQUFROzs7SUFFcEIsc0JBQUksdUNBQUs7Ozs7UUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0Qjs7Ozs7UUFFRCxVQUFVLEtBQWM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4Qjs7O09BTEE7SUFPRCxzQkFBSSwrQ0FBYTs7OztRQUFqQjtZQUNJLE9BQU87Z0JBQ0gsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzthQUN0RSxDQUFDO1NBQ0w7OztPQUFBOzs7OztJQUVELHlDQUFVOzs7O0lBQVYsVUFBVyxLQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixLQUFjO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOztnQkE5REosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUscWVBYWI7b0JBQ0csTUFBTSxFQUFFLENBQUMsNDNCQUE0M0IsQ0FBQztvQkFDdDRCLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsR0FBQSxDQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDZDtxQkFDSjtpQkFDSjs7K0JBL0JEO0VBZ0MwQyxjQUFjOzs7Ozs7Ozt5QkNkL0IsQ0FBQztvQ0FFMkI7WUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixLQUFLLEVBQUUsMkJBQTJCO1lBQ2xDLEtBQUssRUFBRSxpQkFBaUI7U0FDM0I7O0lBRUQsc0JBQUksK0NBQVM7Ozs7UUFBYjtZQUNJLHFCQUFNLGFBQWEsZ0JBQ1osSUFBSSxDQUFDLG9CQUFvQixHQUN4QixJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsRUFDaEMsQ0FBQztZQUNGLHFCQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQ3JEOzs7T0FBQTs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUNuQixPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDcEM7O2dCQS9CSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGtKQUdiO29CQUNHLE1BQU0sRUFBRSxDQUFDLHlFQUF5RSxDQUFDO29CQUNuRixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDbEQ7Ozt5QkFFSSxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsS0FBSzs7bUNBbEJWOzs7Ozs7OztJQ3lEdUNBLHFDQUFjO0lBbUJuRDtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtxQkFoQmUsTUFBTTs2QkFRQSxLQUFLO3lCQUVULEtBQUs7d0JBQ0wsS0FBSzt5Q0FDWSxLQUFLOztLQUl2Qzs7OztJQUVELDJDQUFlOzs7SUFBZjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QztLQUNGO0lBRUQsc0JBQUksb0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFFRCxVQUFVLEtBQVU7WUFDbEIsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7U0FDRjs7O09BUEE7SUFTRCxzQkFBSSx5Q0FBVTs7OztRQUFkO1lBQ0UsT0FBTztnQkFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDL0QsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzthQUNwRSxDQUFDO1NBQ0g7OztPQUFBO0lBRUQsc0JBQUksNENBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCOzs7T0FBQTs7Ozs7SUFFRCxzQ0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNuQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0tBQ0Y7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdkI7Ozs7SUFFRCxtQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtLQUNGOzs7O0lBRUQsa0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xCOzs7OztJQUVELDBDQUFjOzs7O0lBQWQsVUFBZSxLQUFVO1FBQ3ZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7UUFDckMsVUFBVSxDQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsd0JBQXdCLEVBQUU7Z0JBQ2pDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1NBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNSOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztLQUN2Qzs7Z0JBdEpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLGlsREF1Q1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsbWtFQUFpa0UsQ0FBQztvQkFDM2tFLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsR0FBQSxDQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7Ozs7NEJBRUUsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUssU0FBQyxPQUFPOytCQUViLFNBQVMsU0FBQyxPQUFPOzs0QkFqRXBCO0VBeUR1QyxjQUFjOzs7Ozs7QUN6RHJELElBQUE7SUFDSSxzQkFBWSxJQUFJO1FBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0I7dUJBSEw7SUFJQyxDQUFBOzs7Ozs7OztXQ0NTLE9BQU87V0FDUCxPQUFPO2VBQ0gsWUFBWTs7OztVQUlqQixNQUFNO2NBQ0YsVUFBVTs7QUFjdkIsSUFBQTtJQUErQkEsNkJBQVk7SUFrQnpDLG1CQUFZLElBQUk7UUFBaEIsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FDWjs7WUFqQkMsR0FBQyxrQkFBa0IsQ0FBQyxJQUFJLElBQUc7Z0JBQ3pCLE1BQU07Z0JBQ04sS0FBSztnQkFDTCxRQUFRO2FBQ1Q7WUFDRCxHQUFDLGtCQUFrQixDQUFDLFFBQVEsSUFBRztnQkFDN0IsTUFBTTthQUNQOzs7O0tBVUY7b0JBOUNIO0VBMEIrQixZQUFZLEVBcUIxQyxDQUFBO0FBckJELFNBNENvQyxNQUFNOztJQVN4Qyw0QkFDNEIsTUFBVztRQUFYLFdBQU0sR0FBTixNQUFNLENBQUs7b0JBTFAsY0FBYyxDQUFDLEtBQUs7MkJBRUgsSUFBSSxZQUFZLEVBQWE7S0FLN0U7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDcEM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSwrbUJBZ0JYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHl1REFBeXVELENBQUM7b0JBQ252RCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHLFFBQVEsSUFBUSxFQUFFO3FCQUN6QztpQkFDRjs7OztnREFRSSxNQUFNLFNBQUMsUUFBUTs7O3lCQU5qQixLQUFLO3VCQUNMLEtBQUs7OEJBRUwsTUFBTTs7NkJBN0VUOzs7Ozs7O0FDQUE7O1lBSWEsUUFBUTtpQkFDSCxhQUFhO2VBQ2YsV0FBVzs7OztpQ0FLSCxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUM7a0NBQ2QsRUFBRTs7Ozs7O0lBRS9CLHNDQUFVOzs7O0lBQVYsVUFBVyxFQUFtQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN0Qzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsRUFBbUI7UUFDeEIsSUFBSSxFQUFFLEVBQUUsSUFBSSxlQUFlLENBQUMsRUFBRTtZQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUFxQixFQUFFLGtDQUErQixDQUFDLENBQUM7WUFDdEUsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUN2Qzs7Ozs7SUFFRCxnQ0FBSTs7OztJQUFKLFVBQUssRUFBbUI7UUFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELGlDQUFLOzs7O0lBQUwsVUFBTSxFQUFtQjtRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDeEQ7O2dCQXpCSixVQUFVOzs0QkFUWDs7Ozs7OztBQ0FBO0lBNENJLDZCQUFtQixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7dUJBUGIsSUFBSSxZQUFZLEVBQU87c0JBR3JEO1lBQ0wsU0FBUyxFQUFFLEtBQUs7U0FDbkI7S0FFdUQ7Ozs7SUFFeEQseUNBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ3BELElBQUksS0FBSSxDQUFDLEVBQUUsSUFBSSxPQUFPLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUM7WUFFRCxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUN2QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDdkQ7aUJBQU0sSUFBSSxLQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQy9CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUNqQztTQUNKLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFTyxpREFBbUI7Ozs7O1FBQ3ZCLE9BQU9DLFNBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFvQjtZQUM5RSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0osQ0FBQyxDQUFDOzs7Z0JBdEVWLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsTUFBTSxFQUFFLENBQUMsK25FQUErbkUsQ0FBQztvQkFDem9FLFFBQVEsRUFBRSxrakNBcUJiO2lCQUNBOzs7O2dCQTVCUSxpQkFBaUI7OztxQkE4QnJCLEtBQUs7d0JBQ0wsS0FBSzswQkFFTCxNQUFNOzs4QkFyQ1g7Ozs7Ozs7QUNHQSxxQkFBTSxRQUFRLEdBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsR0FBQSxDQUFDO0FBQ3BFLHFCQUFNLFFBQVEsR0FBRyxVQUFDLElBQUksSUFBSyxPQUFBLE9BQU8sSUFBSSxLQUFLLFFBQVEsR0FBQSxDQUFDO0FBQ3BELHFCQUFNLE9BQU8sR0FBRyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQzs7SUFLTEQsdUNBQU87SUEwQjlDLDZCQUFZLGdCQUFpQyxFQUFFLGdCQUFpQyxFQUMxRSxLQUFpQixFQUFFLFNBQW9CO1FBRDdDLFlBRUUsa0JBQU0sZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUU1RDtRQURDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7O0tBQ2hEO0lBN0JELHNCQUNJLDhDQUFhOzs7OztRQURqQixVQUNrQixJQUFTO1lBRDNCLGlCQW1CQztZQWpCQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFpQixJQUFLLE9BQUcsS0FBSSxDQUFDLE1BQU0sU0FBSSxTQUFXLEdBQUEsQ0FBQyxDQUFDO2FBQ3ZFO2lCQUFNLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFZLEVBQUUsR0FBVztvQkFDeEQsT0FBTyxDQUFJLEtBQUksQ0FBQyxNQUFNLFNBQUksR0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3QyxPQUFPLE9BQU8sQ0FBQztpQkFDaEIsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNSO2lCQUFNLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QixJQUFJLEdBQUcsSUFBSTtxQkFDUixLQUFLLENBQUMsR0FBRyxDQUFDO3FCQUNWLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFHLEtBQUksQ0FBQyxNQUFNLFNBQUksT0FBUyxHQUFBLENBQUM7cUJBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUMzQztZQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCOzs7T0FBQTs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBVHNDLGVBQWU7Z0JBQUUsZUFBZTtnQkFBbkQsVUFBVTtnQkFBMkMsU0FBUzs7O2dDQVcvRSxLQUFLLFNBQUMsWUFBWTs7OEJBWHJCO0VBVXlDLE9BQU87Ozs7OztBQ01oRCxxQkFBTSxVQUFVLEdBQVE7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGLHFCQUFNLFVBQVUsR0FBUTtJQUN0QixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGLHFCQUFNLE1BQU0sWUFDUCxVQUFVLEVBQ1YsVUFBVSxDQUNkLENBQUM7Ozs7Ozs7SUFpQk8sc0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO0tBQ0g7O2dCQXRCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3FCQUNmO29CQUNELFlBQVksV0FDUCxNQUFNLENBQ1Y7b0JBQ0QsT0FBTyxXQUNGLE1BQU0sQ0FDVjtvQkFDRCxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtpQkFDcEM7O3lCQS9DRDs7Ozs7Ozs7Ozs7Ozs7OyJ9