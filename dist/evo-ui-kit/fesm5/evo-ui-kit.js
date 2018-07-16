import { ChangeDetectionStrategy, Component, ElementRef, Input, ContentChild, forwardRef, ChangeDetectorRef, EventEmitter, Output, ViewChild, Inject, Injectable, HostListener, Directive, IterableDiffers, KeyValueDiffers, Renderer2, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControlDirective, FormControlName, NG_VALUE_ACCESSOR, FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __extends, __assign, __spread } from 'tslib';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { Key } from 'ts-keycode-enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgClass, CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoButtonComponent = /** @class */ (function () {
    function EvoButtonComponent(elRef) {
        this.elRef = elRef;
        this._disabled = false;
        this._loading = false;
    }
    Object.defineProperty(EvoButtonComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
            if (!this.loading) {
                this.elRef.nativeElement.disabled = value;
            }
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
            this._loading = value;
            if (!this.disabled) {
                this.elRef.nativeElement.disabled = value;
            }
        },
        enumerable: true,
        configurable: true
    });
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
            if (this.loading) {
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
            if (this.loading) {
                result['visibility'] = 'hidden';
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    EvoButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-button, button[evo-button]',
                    template: "<div class=\"evo-button\" [evoUiClass]=\"totalClasses\">\n    <span [ngStyle]=\"totalStyles\">\n        <ng-content></ng-content>\n    </span>\n    <span *ngIf=\"loading\" class=\"evo-button__dots\">\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n    </span>\n</div>\n",
                    styles: ["@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}:host{display:inline-block;margin:0;padding:0;vertical-align:top;background:0 0;border:0;outline:0}.evo-button{min-width:100px;height:44px;padding:0 30px;color:#fff;font-weight:700;font-size:16px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:44px;white-space:nowrap;text-align:center;text-transform:uppercase;vertical-align:middle;background:#ff7800;border:none;border-radius:30px;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-button:hover{color:#fff;background-color:#ff9d47}.evo-button:active,.evo-button:focus{color:#fff;background-color:#cc6000;outline:0}.evo-button:disabled,.evo-button_disabled{color:#fff!important;background:#d6d6d6!important;border-color:#d6d6d6!important;pointer-events:none}.evo-button_lined{color:#ff7800;background-color:#fff;border:1px solid #ff7800}.evo-button_lined:hover{color:#fff;background-color:#ff7800}.evo-button_lined:active,.evo-button_lined:focus{color:#fff;background-color:#cc6000;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{color:#546e7a;background-color:#fff;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{color:#fff;background-color:#546e7a}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{color:#fff;background-color:#283239;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{color:#8bc34a;background-color:#fff;border:1px solid #8bc34a}.evo-button_green-lined:hover{color:#fff;background-color:#8bc34a}.evo-button_green-lined:active,.evo-button_green-lined:focus{color:#fff;background-color:#6f9c3b;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_small{min-width:75px;height:30px;padding:0 20px;font-size:14px;line-height:30px}.evo-button_large{min-width:125px;height:60px;padding:0 40px;font-size:18px;line-height:60px}.evo-button_icon{display:inline-flex;align-items:center;padding-right:22px;padding-left:22px}.evo-button_loading{position:relative;pointer-events:none}.evo-button__dots{position:absolute;top:50%;left:50%;margin-top:-5px;margin-left:-30px}.evo-button__dot{float:left;width:10px;height:10px;margin:0 5px;background:currentColor;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    EvoButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    EvoButtonComponent.propDecorators = {
        color: [{ type: Input }],
        size: [{ type: Input }],
        disabled: [{ type: Input }],
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
        if (!this.control) {
            throw new Error('No template driven forms allowed with EvoUi kit');
        }
    };
    Object.defineProperty(EvoBaseControl.prototype, "currentState", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ defaultState = {
                valid: this.control.dirty && this.control.touched && this.control.valid,
                invalid: this.control.dirty && this.control.touched && this.control.invalid,
            };
            return Object.assign(defaultState, this.state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvoBaseControl.prototype, "showErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentState[EvoControlStates.invalid];
        },
        enumerable: true,
        configurable: true
    });
    EvoBaseControl.propDecorators = {
        formControlName: [{ type: ContentChild, args: [FormControlName,] }],
        formControlDirective: [{ type: ContentChild, args: [FormControlDirective,] }],
        errorsMessages: [{ type: Input }],
        state: [{ type: Input }]
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
                'invalid': this.currentState[EvoControlStates.invalid],
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
                    styles: [".evo-checkbox{margin:0}.evo-checkbox__input{display:none}.evo-checkbox__text{position:relative;display:inline-block;padding-left:26px;color:#212121;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-checkbox__text:before{content:'';position:absolute;top:2px;left:0;width:16px;height:16px;background-color:#fff;border:1px solid #dbdbdb;border-radius:3px}input:checked+.evo-checkbox__text:before{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg version%3D%221.1%22 id%3D%22%D0%A1%D0%BB%D0%BE%D0%B9_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2210px%22 height%3D%227px%22 viewBox%3D%220 0 10 7%22 enable-background%3D%22new 0 0 10 7%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath id%3D%22path0_fill%22 fill%3D%22%23FFFFFF%22 d%3D%22M9.7%2C0.3c0.4%2C0.4%2C0.4%2C1%2C0%2C1.4l-5%2C5C4.4%2C7%2C3.9%2C7.1%2C3.5%2C6.9c-0.2%2C0-0.3-0.1-0.4-0.3L0.3%2C3.8%09c-0.4-0.4-0.4-1%2C0-1.4c0.4-0.4%2C1-0.4%2C1.4%2C0l2.2%2C2.2l4.3-4.3C8.6-0.1%2C9.3-0.1%2C9.7%2C0.3z%22%2F%3E%3C%2Fsvg%3E\") center no-repeat #448aff;border-color:#448aff}input:disabled:not(:checked)+.evo-checkbox__text{cursor:default}input:disabled:not(:checked)+.evo-checkbox__text:before{background-color:#f6f6f6}input:disabled:checked+.evo-checkbox__text{cursor:default}input:disabled:checked+.evo-checkbox__text:before{opacity:.5}input.evo-checkbox_invalid+.evo-checkbox__text:before{border-color:#f22}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return EvoCheckboxComponent; }),
                            multi: true,
                        },
                    ],
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoInputComponent = /** @class */ (function (_super) {
    __extends(EvoInputComponent, _super);
    function EvoInputComponent(changeDetector) {
        var _this = _super.call(this) || this;
        _this.changeDetector = changeDetector;
        _this.type = 'text';
        _this.blur = new EventEmitter();
        _this.customTooltipChecked = false;
        _this.hasCustomTooltip = false;
        _this.tooltipShown = false;
        _this.disabled = false;
        _this.focused = false;
        _this.tooltipVisibilityTimeout = false;
        _this.onChange = function (value) { };
        _this.onTouched = function () { };
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
        this.checkCustomTooltip();
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
                'valid': this.currentState[EvoControlStates.valid],
                'invalid': this.currentState[EvoControlStates.invalid],
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
            return !!this.tooltip || this.hasCustomTooltip;
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
        if (value !== this._value) {
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
        this.blur.emit();
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
    /**
     * @return {?}
     */
    EvoInputComponent.prototype.checkCustomTooltip = /**
     * @return {?}
     */
    function () {
        this.hasCustomTooltip = this.tooltipElement &&
            this.tooltipElement.nativeElement &&
            this.tooltipElement.nativeElement.children.length > 0;
        this.changeDetector.detectChanges();
        this.customTooltipChecked = true;
    };
    EvoInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-input',
                    template: "<div class=\"evo-input\" [evoUiClass]=\"inputClass\">\n    <label class=\"evo-input__container\">\n        <input #input\n               *ngIf=\"!mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [disabled]=\"disabled\">\n        <input #input\n               *ngIf=\"mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [textMask]=\"mask\"\n               [disabled]=\"disabled\">\n        <div class=\"evo-input__additional\"\n             *ngIf=\"hasAdditional\">\n            <div class=\"evo-input__tooltip\"\n                 *ngIf=\"tooltip || hasCustomTooltip\"\n                 (mouseenter)=\"showTooltip()\"\n                 (mouseleave)=\"hideTooltip()\"\n                 (click)=\"onTooltipClick($event)\">?</div>\n        </div>\n        <div *ngIf=\"!customTooltipChecked || tooltipShown\"\n             [hidden]=\"!customTooltipChecked\"\n             (click)=\"onTooltipClick($event)\"\n             (mouseenter)=\"showTooltip()\"\n             (mouseleave)=\"hideTooltip()\"\n             #tooltipContainer\n             [ngClass]=\"{'evo-input__tooltip-container': tooltip}\">\n            {{ tooltip }}\n            <ng-content select=\"[tooltip]\"></ng-content>\n        </div>\n    </label>\n</div>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                    styles: [".evo-input{position:relative;display:flex;width:100%;height:48px;line-height:48px;white-space:nowrap;background-color:#fff;background-image:none;border:1px solid #dbdbdb;border-radius:4px;outline:0;transition:box-shadow .3s,border .3s}.evo-input__container{display:flex;align-items:center;width:100%;height:100%;margin:0;border-radius:4px;cursor:text}.evo-input_focused{border:1px solid #546e7a;box-shadow:0 0 2px 0 #546e7a!important}.evo-input_disabled{color:#9b9b9b;background-color:#f6f6f6!important}.evo-input_disabled .evo-input__container{cursor:default}.evo-input_valid{border-color:#8bc34a}.evo-input_invalid{border-color:#f22}.evo-input__field{flex-grow:1;width:100%;height:100%;margin:0;padding:0 20px;color:#000;font-weight:400;font-size:16px;border:none;border-radius:4px;outline:0}.evo-input__field::-webkit-input-placeholder{color:#9b9b9b}.evo-input__field::-moz-placeholder{color:#9b9b9b;opacity:1}.evo-input__field:-ms-input-placeholder{color:#9b9b9b}.evo-input__field:disabled{color:#9b9b9b;background-color:#f6f6f6!important}.evo-input__field:not(:last-child){padding-right:0}.evo-input__tooltip{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:24px;height:24px;margin:0 10px;color:#546e7a;font-weight:600;font-size:18px;font-family:OpenSans,Arial,sans-serif;line-height:24px;text-align:center;background:#eceff1;border-radius:50%;cursor:pointer}.evo-input__tooltip-container{position:absolute;top:calc(100% - 2px);left:0;z-index:1;display:flex;width:100%;padding:10px 10px 10px 20px;color:#212121;line-height:normal;white-space:normal;background-color:#fff8e6;border-radius:4px;box-shadow:0 4px 12px 0 rgba(0,0,0,.2);cursor:default}.evo-input__tooltip-container[hidden]{display:none!important}.evo-input__tooltip-container:before{position:absolute;top:-20px;left:calc(100% - 34px);border:10px solid transparent;border-bottom:10px solid #fff8e6;pointer-events:none;content:''}@media (min-width:1200px){.evo-input__tooltip-container{left:calc(50% - 22px)}.evo-input__tooltip-container:before{position:absolute;top:-20px;left:calc(50% - 12px);border:10px solid transparent;border-bottom:10px solid #fff8e6;content:''}}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return EvoInputComponent; }),
                            multi: true,
                        },
                    ],
                },] },
    ];
    /** @nocollapse */
    EvoInputComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    EvoInputComponent.propDecorators = {
        autoFocus: [{ type: Input }],
        mask: [{ type: Input }],
        placeholder: [{ type: Input }],
        tooltip: [{ type: Input }],
        type: [{ type: Input }],
        _value: [{ type: Input, args: ['value',] }],
        blur: [{ type: Output }],
        inputElement: [{ type: ViewChild, args: ['input',] }],
        tooltipElement: [{ type: ViewChild, args: ['tooltipContainer',] }]
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
                'bottom',
            ],
            _a[EvoBannerLocations.category] = [
                'main',
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
                    styles: [".evo-banner{position:relative;display:block;height:430px;padding:12px 20px;overflow:hidden;color:#fff;border-radius:6px;cursor:pointer;transition:box-shadow .3s}.evo-banner:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}.evo-banner__content{position:relative;z-index:2}.evo-banner__content .btn{padding:7px 30px}.evo-banner__content .btn-white{display:inline-block;color:#ff7800;font-weight:600;font-size:16px;text-transform:none;background-color:#fff;border-radius:24px}.evo-banner__content .btn-white:hover{color:#fff;background-color:#e55526}.evo-banner__content .btn-white:hover:before{display:none}.evo-banner__content .promo-btn{display:table-cell;min-width:156px;height:40px;padding:0 20px;font-weight:600;font-size:14px;text-transform:uppercase;vertical-align:middle}.evo-banner__content .promo-btn:hover{background:#fff}.evo-banner__content .promo-btn:active{box-shadow:none}.evo-banner__content .promo-btn span{font-size:18px}.evo-banner__title{margin-bottom:10px;font-weight:700;font-size:30px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:1.3}.evo-banner__description{margin-top:20px;margin-bottom:10px;font-size:14px;line-height:1.3}.evo-banner__img{position:absolute;right:0;bottom:0;width:290px;height:290px}.evo-banner_full-width{padding:20px}.evo-banner_full-width .evo-banner__title{line-height:38px}@media (min-width:768px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:60%}.evo-banner__description{max-width:250px}.evo-banner__img{width:430px;height:430px}.evo-banner_full-width{height:240px;padding:30px}.evo-banner_full-width .evo-banner__content{max-width:50%}.evo-banner_full-width .evo-banner__title{font-size:36px;line-height:44px}.evo-banner_full-width .evo-banner__img{width:240px;height:240px}}@media (min-width:1200px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:63%}.evo-banner_small{height:210px;padding:20px}.evo-banner_small .evo-banner__title{margin-bottom:20px;font-size:20px}.evo-banner_small .promo-btn{height:32px}.evo-banner_small .evo-banner__img{width:210px;height:210px}.evo-banner_full-width .evo-banner__content{max-width:63%}}"],
                    providers: [
                        { provide: 'Window', useValue: ɵ0 },
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
                    styles: [".evo-sidebar{position:fixed;top:0;bottom:0;left:120%;z-index:3000;display:flex;flex-direction:column;width:100%;background-color:#fff;box-shadow:0 0 12px rgba(0,0,0,.25)}@media (min-width:992px){.evo-sidebar{left:100%;width:674px;margin-left:40px;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}}.evo-sidebar_active{left:0}.evo-sidebar__header{display:flex;flex-shrink:0;justify-content:space-between;align-items:flex-start;margin:0 15px;padding:20px 0 8px;border-bottom:1px solid #eceff1}@media (min-width:768px){.evo-sidebar__header{padding-top:38px}}.evo-sidebar__title{color:#333f48;font-weight:700;font-size:24px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:32px}@media (min-width:992px){.evo-sidebar_active{left:100%;-webkit-transform:translateX(-714px);transform:translateX(-714px)}.evo-sidebar__header{margin:0 30px}.evo-sidebar__title{font-size:30px;line-height:38px}}.evo-sidebar__close{margin:-4px 0 -2px 20px;padding:8px;color:#546e7a;cursor:pointer;transition:opacity .3s}.evo-sidebar__close:hover{opacity:.8}.evo-sidebar__close svg{vertical-align:top}.evo-sidebar__content{display:flex;flex-grow:1;flex-direction:column;padding:20px 15px 40px;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (min-width:768px){.evo-sidebar__content{padding:40px 15px}}@media (min-width:992px){.evo-sidebar__close{margin:2px 0 0 30px}.evo-sidebar__content{padding:40px 30px}}.evo-sidebar__footer{display:flex;flex-shrink:0;flex-direction:column;padding:30px 15px;background-color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.25)}.evo-sidebar__footer:empty{display:none}@media (min-width:768px){.evo-sidebar__footer{flex-direction:row;justify-content:space-between;padding:18px 15px}}@media (min-width:992px){.evo-sidebar__footer{padding:18px 30px}}.evo-sidebar__buttons{display:flex;flex-direction:column;padding:30px 0 10px}.evo-sidebar__buttons_border{margin-top:50px;border-top:1px solid #eceff1}.evo-sidebar__button+.evo-sidebar__button{margin-top:20px}@media (min-width:768px){.evo-sidebar__buttons{flex-direction:row;justify-content:space-between;padding-bottom:0}.evo-sidebar__button+.evo-sidebar__button{margin-top:0}}"],
                    template: "<div class=\"fade-background fade-background_over-all\"\n     *ngIf=\"states.isVisible\"\n     (click)=\"closeSidebar()\"\n></div>\n\n<div class=\"evo-sidebar\" [ngClass]=\"{'evo-sidebar_active' : states.isVisible}\" >\n    <div class=\"evo-sidebar__header\">\n        <div class=\"evo-sidebar__title\">{{ title }}</div>\n\n        <div class=\"evo-sidebar__close\" (click)=\"sidebarService.close(id)\">\n            <svg class=\"evo-sidebar__close-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\">\n                <path fill=\"currentColor\" d=\"M14.9,12l8.6-8.6c0.8-0.8,0.8-2.1,0-2.9c-0.8-0.8-2.1-0.8-2.9,0L12,9.1L3.4,0.6\n                    c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9L9.1,12l-8.6,8.6c-0.8,0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0l8.6-8.6l8.6,8.6\n                    c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9L14.9,12z\"/>\n            </svg>\n        </div>\n    </div>\n\n\n    <div class=\"evo-sidebar__content\">\n        <ng-content select=\"[content]\"></ng-content>\n    </div>\n\n    <div class=\"evo-sidebar__footer\"><ng-content select=\"[footer]\"></ng-content></div> <!--\u0447\u0442\u043E\u0431\u044B :empty \u0440\u0430\u0431\u043E\u0442\u0430\u043B, \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438 evo-sidebar__footer \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0438\u0447\u0435\u0433\u043E, \u0434\u0430\u0436\u0435 \u043F\u0440\u043E\u0431\u0435\u043B\u0430-->\n</div>\n",
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
var EvoRadioGroupComponent = /** @class */ (function (_super) {
    __extends(EvoRadioGroupComponent, _super);
    function EvoRadioGroupComponent(formBuilder) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.disabled = false;
        _this.onChange = function (_) { };
        _this.onTouched = function () { };
        return _this;
    }
    Object.defineProperty(EvoRadioGroupComponent.prototype, "value", {
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
    /**
     * @return {?}
     */
    EvoRadioGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createFormGroup();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EvoRadioGroupComponent.prototype.writeValue = /**
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
    EvoRadioGroupComponent.prototype.registerOnChange = /**
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
    EvoRadioGroupComponent.prototype.registerOnTouched = /**
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
    EvoRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.disabled = state;
    };
    Object.defineProperty(EvoRadioGroupComponent.prototype, "optionArray", {
        /**
        * Геттер на возможные варианты отчета в формате массива
        * презентационного текста для радио группа
        */
        get: /**
         * Геттер на возможные варианты отчета в формате массива
         * презентационного текста для радио группа
         * @return {?}
         */
        function () {
            return this.generateOptionArray(this.options);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Генерирует из опций массив
     * @param {?} source объект с вариантами
     * @return {?}
     */
    EvoRadioGroupComponent.prototype.generateOptionArray = /**
     * Генерирует из опций массив
     * @param {?} source объект с вариантами
     * @return {?}
     */
    function (source) {
        var /** @type {?} */ array = [];
        for (var /** @type {?} */ key in source) {
            if (source.hasOwnProperty(key)) {
                array.push(source[key]);
            }
        }
        return array;
    };
    /**
     * Создание группы
     * @return {?}
     */
    EvoRadioGroupComponent.prototype.createFormGroup = /**
     * Создание группы
     * @return {?}
     */
    function () {
        this.formGroup = this.formBuilder.group({
            value: [this.value],
        });
    };
    /**
     * Обработчик на смену значения
     * @param {?} value значение
     * @return {?}
     */
    EvoRadioGroupComponent.prototype.onChangedValue = /**
     * Обработчик на смену значения
     * @param {?} value значение
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    EvoRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-radio-group',
                    template: "<div class=\"evo-radio-group\" [formGroup]=\"formGroup\">\n    <label class=\"evo-radio-group__radio\" *ngFor=\"let option of optionArray\">\n        <!-- \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0441\u0442\u0438\u043B\u0435\u0439 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0441\u0435\u0432\u0434\u043E\u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u0430 :checked -->\n        <input class=\"evo-radio-group__radio-control\" (ngModelChange) = \"onChangedValue($event)\" formControlName=\"value\" type=\"radio\" value={{option.value}}>\n        <div class=\"evo-radio-group__radio-view\">\n            <span class=\"evo-radio-group__radio-icon\"></span>\n            <span class=\"evo-radio-group__radio-value\">{{option.presentationText}}</span>\n        </div>\n    </label>\n</div>",
                    styles: [".evo-radio-group{display:flex}.evo-radio-group__radio{flex:1;margin-right:30px;cursor:pointer}.evo-radio-group__radio:last-child{margin-right:0}.evo-radio-group__radio-control{display:none}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view{background-color:rgba(68,138,255,.05);border-color:#448aff}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view .evo-radio-group__radio-icon:before{display:block}.evo-radio-group__radio-view{display:flex;padding:20px;border:1px solid #dbdbdb;border-radius:8px}.evo-radio-group__radio-icon{position:relative;display:inline-block;flex-shrink:0;width:20px;height:20px;margin-right:20px;background-color:#fff;border:1px solid #dedede;border-radius:50%}.evo-radio-group__radio-icon:before{position:absolute;top:50%;left:50%;display:none;box-sizing:border-box;width:10px;height:10px;content:'';margin-top:-5px;margin-left:-5px;background-color:#448aff;border:1px solid #2869d7;border-radius:50%}.evo-radio-group__radio-value{color:#000;font-size:16px}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return EvoRadioGroupComponent; }),
                            multi: true,
                        },
                    ],
                },] },
    ];
    /** @nocollapse */
    EvoRadioGroupComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    EvoRadioGroupComponent.propDecorators = {
        options: [{ type: Input }],
        _value: [{ type: Input, args: ['value',] }]
    };
    return EvoRadioGroupComponent;
}(EvoBaseControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EvoAutoCompleteTypes = {
    party: 'party',
};
var EvoAutoCompleteComponent = /** @class */ (function (_super) {
    __extends(EvoAutoCompleteComponent, _super);
    function EvoAutoCompleteComponent(http, elementRef) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.elementRef = elementRef;
        _this.disabled = false;
        _this.input = new FormControl();
        _this.suggestions = [];
        _this.valueAutoCompleted = false;
        _this.autoCompeteTypes = EvoAutoCompleteTypes;
        _this.onChange = function (value) { };
        _this.onTouched = function () { };
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.handleDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.path.indexOf(this.elementRef.nativeElement) === -1 && this.suggestions) {
            this.valueAutoCompleted = true;
            this.input.setValue('', {
                emitEvent: false,
                onlySelf: true,
            });
            this.suggestions = null;
            this.value = '';
        }
    };
    /**
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.input.valueChanges.subscribe(function (query) {
            if (_this.valueAutoCompleted) {
                _this.valueAutoCompleted = false;
                return;
            }
            _this.requestSuggestions(query);
        });
    };
    Object.defineProperty(EvoAutoCompleteComponent.prototype, "value", {
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
    /**
     * @param {?} suggestion
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.getSuggestionDataString = /**
     * @param {?} suggestion
     * @return {?}
     */
    function (suggestion) {
        var /** @type {?} */ result = null;
        if (suggestion && suggestion.data) {
            var /** @type {?} */ inn = suggestion.data.inn;
            var address = suggestion.data.address;
            if (inn) {
                result = inn + " " + (address ? address.value : '');
            }
        }
        return result;
    };
    /**
     * @param {?} event
     * @param {?} suggestion
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.handleSuggestionClick = /**
     * @param {?} event
     * @param {?} suggestion
     * @return {?}
     */
    function (event, suggestion) {
        this.valueAutoCompleted = true;
        this.input.setValue(suggestion.value, {
            emitEvent: false,
            onlySelf: true,
        });
        this.suggestions = null;
        this.value = suggestion;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            this.input.setValue('');
        }
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.registerOnChange = /**
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
    EvoAutoCompleteComponent.prototype.registerOnTouched = /**
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
    EvoAutoCompleteComponent.prototype.setDisabledState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.disabled = state;
        state ? this.input.disable({ onlySelf: true, emitEvent: false }) :
            this.input.enable({ onlySelf: true, emitEvent: false });
    };
    /**
     * @param {?} query
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.requestSuggestions = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        var /** @type {?} */ headers = new HttpHeaders()
            .set('Authorization', 'Token 6a62e779b984f0353e87931ebc384d2c736aafa9')
            .set('Content-Type', 'application/json');
        var /** @type {?} */ options = {
            headers: headers,
        };
        this.http
            .post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', { query: query, count: 4 }, options)
            .subscribe(function (response) {
            _this.suggestions = response.suggestions;
        });
    };
    EvoAutoCompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-auto-complete',
                    template: "<div class=\"evo-auto-complete\">\n    <div class=\"evo-auto-complete__input-wrapper\">\n        <evo-input (blur)=\"onTouched()\"\n                   [state]=\"currentState\"\n                   [formControl]=\"input\"></evo-input>\n    </div>\n    <div class=\"evo-auto-complete__suggestions\" *ngIf=\"suggestions && suggestions.length && !disabled\">\n        <ng-container *ngFor=\"let suggestion of suggestions\" >\n            <div class=\"evo-auto-complete__party\" *ngIf=\"getSuggestionDataString(suggestion)\" (click)=\"handleSuggestionClick($event, suggestion)\">\n                <p class=\"evo-auto-complete__text-line\" [attr.title]=\"suggestion.value\">{{ suggestion.value }}</p>\n                <p class=\"evo-auto-complete__text-line\" [attr.title]=\"getSuggestionDataString(suggestion)\">{{ getSuggestionDataString(suggestion) }}</p>\n            </div>\n        </ng-container>\n    </div>\n</div>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                    styles: [".evo-auto-complete{position:relative}.evo-auto-complete__input-wrapper{position:relative;z-index:2}.evo-auto-complete__suggestions{position:absolute;z-index:1;width:100%;overflow:hidden;background-color:#fff;border-radius:4px;box-shadow:0 0 12px 4px rgba(0,0,0,.2)}.evo-auto-complete__party{display:flex;flex-direction:column;justify-content:center;height:48px;padding:5px 20px;background-color:#fff;cursor:pointer}.evo-auto-complete__party:hover{color:#fff;background-color:#ff7800}.evo-auto-complete__text-line{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return EvoAutoCompleteComponent; }),
                            multi: true,
                        },
                    ],
                },] },
    ];
    /** @nocollapse */
    EvoAutoCompleteComponent.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ElementRef }
    ]; };
    EvoAutoCompleteComponent.propDecorators = {
        type: [{ type: Input }],
        handleDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return EvoAutoCompleteComponent;
}(EvoBaseControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvoControlLabelComponent = /** @class */ (function () {
    function EvoControlLabelComponent() {
    }
    EvoControlLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-control-label',
                    template: "<div class=\"evo-control-label\">\n    <label class=\"evo-control-label__text\">{{ label }}</label>\n    <ng-content></ng-content>\n</div>\n",
                    styles: [".evo-control-label{margin-bottom:20px}.evo-control-label__text{margin-bottom:11px;color:#9b9b9b;font-size:14px;line-height:16px}"],
                },] },
    ];
    EvoControlLabelComponent.propDecorators = {
        label: [{ type: Input }]
    };
    return EvoControlLabelComponent;
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
                    selector: '[evoUiClass]',
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
    EvoAutoCompleteComponent,
    EvoControlLabelComponent,
    EvoRadioGroupComponent,
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
            ],
        };
    };
    EvoUiKitModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TextMaskModule,
                        ReactiveFormsModule,
                    ],
                    declarations: __spread(bundle),
                    exports: __spread(bundle),
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

export { EvoSidebarService, EvoUiKitModule, EvoBaseControl as ɵc, EvoAutoCompleteComponent as ɵh, EvoBannerComponent as ɵf, EvoButtonComponent as ɵa, EvoCheckboxComponent as ɵb, EvoControlErrorComponent as ɵd, EvoControlLabelComponent as ɵi, EvoInputComponent as ɵe, EvoRadioGroupComponent as ɵj, EvoSidebarComponent as ɵg, EvoUiClassDirective as ɵk };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vU2VyaWFsaXphYmxlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuc2VydmljZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXJhZGlvLWdyb3VwL2V2by1yYWRpby1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWF1dG8tY29tcGxldGUvZXZvLWF1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jb250cm9sLWxhYmVsL2V2by1jb250cm9sLWxhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9ldm8tdWkta2l0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBFdm9CdXR0b25TaXplcyB7XG4gICAgc21hbGwgPSAnc21hbGwnLFxuICAgIGxhcmdlID0gJ2xhcmdlJyxcbn1cblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU3R5bGVzIHtcbiAgICBsaW5lZCA9ICdsaW5lZCcsXG4gICAgZGFya2JsdWUgPSAnZGFya2JsdWUnLFxuICAgIGRhcmtibHVlTGluZWQgPSAnZGFya2JsdWUtbGluZWQnLFxuICAgIGdyZWVuID0gJ2dyZWVuJyxcbiAgICBncmVlbmxpbmVkID0gJ2dyZWVuLWxpbmVkJyxcbiAgICBwdXJwbGUgPSAncHVycGxlJyxcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tYnV0dG9uLCBidXR0b25bZXZvLWJ1dHRvbl0nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1idXR0b25cIiBbZXZvVWlDbGFzc109XCJ0b3RhbENsYXNzZXNcIj5cbiAgICA8c3BhbiBbbmdTdHlsZV09XCJ0b3RhbFN0eWxlc1wiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgQC13ZWJraXQta2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX06aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MDtwYWRkaW5nOjA7dmVydGljYWwtYWxpZ246dG9wO2JhY2tncm91bmQ6MCAwO2JvcmRlcjowO291dGxpbmU6MH0uZXZvLWJ1dHRvbnttaW4td2lkdGg6MTAwcHg7aGVpZ2h0OjQ0cHg7cGFkZGluZzowIDMwcHg7Y29sb3I6I2ZmZjtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjE2cHg7Zm9udC1mYW1pbHk6TXVzZW9TYW5zQ3lybCxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjQ0cHg7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7YmFja2dyb3VuZDojZmY3ODAwO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MzBweDtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyxjb2xvciAuM3MsYm9yZGVyIC4zczstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmV2by1idXR0b246aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNmZjlkNDd9LmV2by1idXR0b246YWN0aXZlLC5ldm8tYnV0dG9uOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojY2M2MDAwO291dGxpbmU6MH0uZXZvLWJ1dHRvbjpkaXNhYmxlZCwuZXZvLWJ1dHRvbl9kaXNhYmxlZHtjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kOiNkNmQ2ZDYhaW1wb3J0YW50O2JvcmRlci1jb2xvcjojZDZkNmQ2IWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfS5ldm8tYnV0dG9uX2xpbmVke2NvbG9yOiNmZjc4MDA7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2ZmNzgwMH0uZXZvLWJ1dHRvbl9saW5lZDpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMH0uZXZvLWJ1dHRvbl9saW5lZDphY3RpdmUsLmV2by1idXR0b25fbGluZWQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNjYzYwMDA7Ym9yZGVyLWNvbG9yOiNjYzYwMDB9LmV2by1idXR0b25fZGFya2JsdWV7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izc1OTZhNX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZTphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMjgzMjM5fS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVke2NvbG9yOiM1NDZlN2E7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgIzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzk7Ym9yZGVyLWNvbG9yOiMyODMyMzl9LmV2by1idXR0b25fZ3JlZW57YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2EyY2Y2ZX0uZXZvLWJ1dHRvbl9ncmVlbjphY3RpdmUsLmV2by1idXR0b25fZ3JlZW46Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNmY5YzNifS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVke2NvbG9yOiM4YmMzNGE7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgIzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZ3JlZW4tbGluZWQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2I7Ym9yZGVyLWNvbG9yOiM2ZjljM2J9LmV2by1idXR0b25fcHVycGxle2JhY2tncm91bmQtY29sb3I6I2FiNGFjM30uZXZvLWJ1dHRvbl9wdXJwbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2M1OGU4fS5ldm8tYnV0dG9uX3B1cnBsZTphY3RpdmUsLmV2by1idXR0b25fcHVycGxlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzkzMzVhYn0uZXZvLWJ1dHRvbl9zbWFsbHttaW4td2lkdGg6NzVweDtoZWlnaHQ6MzBweDtwYWRkaW5nOjAgMjBweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDozMHB4fS5ldm8tYnV0dG9uX2xhcmdle21pbi13aWR0aDoxMjVweDtoZWlnaHQ6NjBweDtwYWRkaW5nOjAgNDBweDtmb250LXNpemU6MThweDtsaW5lLWhlaWdodDo2MHB4fS5ldm8tYnV0dG9uX2ljb257ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1yaWdodDoyMnB4O3BhZGRpbmctbGVmdDoyMnB4fS5ldm8tYnV0dG9uX2xvYWRpbmd7cG9zaXRpb246cmVsYXRpdmU7cG9pbnRlci1ldmVudHM6bm9uZX0uZXZvLWJ1dHRvbl9fZG90c3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbi10b3A6LTVweDttYXJnaW4tbGVmdDotMzBweH0uZXZvLWJ1dHRvbl9fZG90e2Zsb2F0OmxlZnQ7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDttYXJnaW46MCA1cHg7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuM3MgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC4zcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuNnMgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC42cyBpbmZpbml0ZSBmeH1gXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQnV0dG9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBjb2xvcjogRXZvQnV0dG9uU3R5bGVzO1xuICAgIEBJbnB1dCgpIHNpemU6IEV2b0J1dHRvblNpemVzO1xuICAgIEBJbnB1dCgpIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBASW5wdXQoKSBzZXQgbG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBnZXQgbG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdsb2FkaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsU3R5bGVzKCk6IHtbc3R5bGVLZXk6IHN0cmluZ106IGFueX0ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXN1bHRbJ3Zpc2liaWxpdHknXSA9ICdoaWRkZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBFdm9Db250cm9sU3RhdGVzIHtcbiAgICB2YWxpZCA9ICd2YWxpZCcsXG4gICAgaW52YWxpZCA9ICdpbnZhbGlkJyxcbn1cbiIsImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElFdm9Db250cm9sU3RhdGUgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElFdm9Db250cm9sRXJyb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcblxuZXhwb3J0IGNsYXNzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUpIGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sRGlyZWN0aXZlKSBmb3JtQ29udHJvbERpcmVjdGl2ZTogRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG4gIEBJbnB1dCgpIHN0YXRlOiBJRXZvQ29udHJvbFN0YXRlO1xuXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2w7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlICYmIHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHRlbXBsYXRlIGRyaXZlbiBmb3JtcyBhbGxvd2VkIHdpdGggRXZvVWkga2l0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGN1cnJlbnRTdGF0ZSgpOiBJRXZvQ29udHJvbFN0YXRlIHtcbiAgICBjb25zdCBkZWZhdWx0U3RhdGU6IElFdm9Db250cm9sU3RhdGUgPSB7XG4gICAgICB2YWxpZDogdGhpcy5jb250cm9sLmRpcnR5ICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC52YWxpZCxcbiAgICAgIGludmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wuaW52YWxpZCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdFN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGdldCBzaG93RXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IGA8bGFiZWwgY2xhc3M9XCJldm8tY2hlY2tib3hcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJldm8tY2hlY2tib3hfX2lucHV0XCJcbiAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgW2V2b1VpQ2xhc3NdPVwiY2hlY2tib3hDbGFzc1wiXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgICA8c3BhbiBjbGFzcz1cImV2by1jaGVja2JveF9fdGV4dFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuPC9sYWJlbD5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWNoZWNrYm94e21hcmdpbjowfS5ldm8tY2hlY2tib3hfX2lucHV0e2Rpc3BsYXk6bm9uZX0uZXZvLWNoZWNrYm94X190ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDoyNnB4O2NvbG9yOiMyMTIxMjE7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjJweDtsZWZ0OjA7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6M3B4fWlucHV0OmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7YmFja2dyb3VuZDp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDJTNGeG1sIHZlcnNpb24lM0QlMjIxLjAlMjIgZW5jb2RpbmclM0QlMjJ1dGYtOCUyMiUzRiUzRSUzQ3N2ZyB2ZXJzaW9uJTNEJTIyMS4xJTIyIGlkJTNEJTIyJUQwJUExJUQwJUJCJUQwJUJFJUQwJUI5XzElMjIgeG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIgeG1sbnMlM0F4bGluayUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhsaW5rJTIyIHglM0QlMjIwcHglMjIgeSUzRCUyMjBweCUyMiUwOSB3aWR0aCUzRCUyMjEwcHglMjIgaGVpZ2h0JTNEJTIyN3B4JTIyIHZpZXdCb3glM0QlMjIwIDAgMTAgNyUyMiBlbmFibGUtYmFja2dyb3VuZCUzRCUyMm5ldyAwIDAgMTAgNyUyMiB4bWwlM0FzcGFjZSUzRCUyMnByZXNlcnZlJTIyJTNFJTNDcGF0aCBpZCUzRCUyMnBhdGgwX2ZpbGwlMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiBkJTNEJTIyTTkuNyUyQzAuM2MwLjQlMkMwLjQlMkMwLjQlMkMxJTJDMCUyQzEuNGwtNSUyQzVDNC40JTJDNyUyQzMuOSUyQzcuMSUyQzMuNSUyQzYuOWMtMC4yJTJDMC0wLjMtMC4xLTAuNC0wLjNMMC4zJTJDMy44JTA5Yy0wLjQtMC40LTAuNC0xJTJDMC0xLjRjMC40LTAuNCUyQzEtMC40JTJDMS40JTJDMGwyLjIlMkMyLjJsNC4zLTQuM0M4LjYtMC4xJTJDOS4zLTAuMSUyQzkuNyUyQzAuM3olMjIlMkYlM0UlM0MlMkZzdmclM0VcIikgY2VudGVyIG5vLXJlcGVhdCAjNDQ4YWZmO2JvcmRlci1jb2xvcjojNDQ4YWZmfWlucHV0OmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrLmV2by1jaGVja2JveF9fdGV4dHtjdXJzb3I6ZGVmYXVsdH1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNn1pbnB1dDpkaXNhYmxlZDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHR7Y3Vyc29yOmRlZmF1bHR9aW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtvcGFjaXR5Oi41fWlucHV0LmV2by1jaGVja2JveF9pbnZhbGlkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JvcmRlci1jb2xvcjojZjIyfWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0NoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGJvb2xlYW47XG5cbiAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGNoZWNrYm94Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdpbnZhbGlkJzogdGhpcy5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXSxcbiAgICB9O1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFdm9Db250cm9sRXJyb3Ige1xuICAgIFtlcnJvcjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jb250cm9sLWVycm9yJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tZXJyb3JcIiAqbmdGb3I9XCJsZXQgZXJyb3JNc2cgb2YgZXJyb3JzTWFwOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgIDxzcGFuICpuZ0lmPVwic2hvd0Vycm9yKGkpXCI+e3sgZXJyb3JNc2cgfX08L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tZXJyb3J7bWFyZ2luLXRvcDoxMHB4O2NvbG9yOiNmMjI7Zm9udC1zaXplOjE0cHg7Zm9udC1zdHlsZTppdGFsaWN9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZXJyb3JzOiBhbnk7XG4gICAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG4gICAgQElucHV0KCkgc2hvd0NvdW50ID0gMTtcblxuICAgIHByaXZhdGUgZGVmYXVsdEVycm9yTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3IgPSB7XG4gICAgICAgIHJlcXVpcmVkOiAnw5DCl8OQwrDDkMK/w5DCvsOQwrvDkMK9w5DCuMORwoLDkMK1IMOQwr/DkMK+w5DCu8OQwrUnLFxuICAgICAgICBlbWFpbDogJ8OQwp3DkMK1w5DCv8ORwoDDkMKww5DCssOQwrjDkMK7w5HCjMOQwr3DkMK+IMORwoPDkMK6w5DCsMOQwrfDkMKww5DCvcOQwrAgw5DCv8OQwr7DkcKHw5HCgsOQwrAnLFxuICAgICAgICBwaG9uZTogJ8OQwpLDkMKyw5DCtcOQwrTDkMK4w5HCgsOQwrUgw5HCgsOQwrXDkMK7w5DCtcORwoTDkMK+w5DCvScsXG4gICAgfTtcblxuICAgIGdldCBlcnJvcnNNYXAoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0RXJyb3JNZXNzYWdlcyxcbiAgICAgICAgICAgIC4uLih0aGlzLmVycm9yc01lc3NhZ2VzIHx8IHt9KSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3JLZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMgfHwge30pO1xuICAgICAgICByZXR1cm4gZXJyb3JLZXlzLm1hcCgoa2V5KSA9PiBlcnJvck1lc3NhZ2VzW2tleV0pO1xuICAgIH1cblxuICAgIHNob3dFcnJvcihpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiArK2luZGV4IDw9IHRoaXMuc2hvd0NvdW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWlucHV0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0XCIgW2V2b1VpQ2xhc3NdPVwiaW5wdXRDbGFzc1wiPlxuICAgIDxsYWJlbCBjbGFzcz1cImV2by1pbnB1dF9fY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCAjaW5wdXRcbiAgICAgICAgICAgICAgICpuZ0lmPVwiIW1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgICAgICAqbmdJZj1cIm1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFt0ZXh0TWFza109XCJtYXNrXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0X19hZGRpdGlvbmFsXCJcbiAgICAgICAgICAgICAqbmdJZj1cImhhc0FkZGl0aW9uYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldm8taW5wdXRfX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAqbmdJZj1cInRvb2x0aXAgfHwgaGFzQ3VzdG9tVG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNob3dUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVG9vbHRpcENsaWNrKCRldmVudClcIj4/PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWN1c3RvbVRvb2x0aXBDaGVja2VkIHx8IHRvb2x0aXBTaG93blwiXG4gICAgICAgICAgICAgW2hpZGRlbl09XCIhY3VzdG9tVG9vbHRpcENoZWNrZWRcIlxuICAgICAgICAgICAgIChjbGljayk9XCJvblRvb2x0aXBDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzaG93VG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAjdG9vbHRpcENvbnRhaW5lclxuICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcic6IHRvb2x0aXB9XCI+XG4gICAgICAgICAgICB7eyB0b29sdGlwIH19XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9vbHRpcF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICBzdHlsZXM6IFtgLmV2by1pbnB1dHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtoZWlnaHQ6NDhweDtsaW5lLWhlaWdodDo0OHB4O3doaXRlLXNwYWNlOm5vd3JhcDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjRweDtvdXRsaW5lOjA7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcyxib3JkZXIgLjNzfS5ldm8taW5wdXRfX2NvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7Ym9yZGVyLXJhZGl1czo0cHg7Y3Vyc29yOnRleHR9LmV2by1pbnB1dF9mb2N1c2Vke2JvcmRlcjoxcHggc29saWQgIzU0NmU3YTtib3gtc2hhZG93OjAgMCAycHggMCAjNTQ2ZTdhIWltcG9ydGFudH0uZXZvLWlucHV0X2Rpc2FibGVke2NvbG9yOiM5YjliOWI7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudH0uZXZvLWlucHV0X2Rpc2FibGVkIC5ldm8taW5wdXRfX2NvbnRhaW5lcntjdXJzb3I6ZGVmYXVsdH0uZXZvLWlucHV0X3ZhbGlke2JvcmRlci1jb2xvcjojOGJjMzRhfS5ldm8taW5wdXRfaW52YWxpZHtib3JkZXItY29sb3I6I2YyMn0uZXZvLWlucHV0X19maWVsZHtmbGV4LWdyb3c6MTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MCAyMHB4O2NvbG9yOiMwMDA7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNnB4O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NHB4O291dGxpbmU6MH0uZXZvLWlucHV0X19maWVsZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWI7b3BhY2l0eToxfS5ldm8taW5wdXRfX2ZpZWxkOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOmRpc2FibGVke2NvbG9yOiM5YjliOWI7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudH0uZXZvLWlucHV0X19maWVsZDpub3QoOmxhc3QtY2hpbGQpe3BhZGRpbmctcmlnaHQ6MH0uZXZvLWlucHV0X190b29sdGlwey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O21hcmdpbjowIDEwcHg7Y29sb3I6IzU0NmU3YTtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE4cHg7Zm9udC1mYW1pbHk6T3BlblNhbnMsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2VjZWZmMTtib3JkZXItcmFkaXVzOjUwJTtjdXJzb3I6cG9pbnRlcn0uZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Y2FsYygxMDAlIC0gMnB4KTtsZWZ0OjA7ei1pbmRleDoxO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO3BhZGRpbmc6MTBweCAxMHB4IDEwcHggMjBweDtjb2xvcjojMjEyMTIxO2xpbmUtaGVpZ2h0Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3JtYWw7YmFja2dyb3VuZC1jb2xvcjojZmZmOGU2O2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCA0cHggMTJweCAwIHJnYmEoMCwwLDAsLjIpO2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVyW2hpZGRlbl17ZGlzcGxheTpub25lIWltcG9ydGFudH0uZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yMHB4O2xlZnQ6Y2FsYygxMDAlIC0gMzRweCk7Ym9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNmZmY4ZTY7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OicnfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmV2by1pbnB1dF9fdG9vbHRpcC1jb250YWluZXJ7bGVmdDpjYWxjKDUwJSAtIDIycHgpfS5ldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVyOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwcHg7bGVmdDpjYWxjKDUwJSAtIDEycHgpO2JvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjZmZmOGU2O2NvbnRlbnQ6Jyd9fWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0lucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0lucHV0Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgQElucHV0KCkgbWFzazogYW55O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRhaW5lcicpIHRvb2x0aXBFbGVtZW50O1xuXG4gIGN1c3RvbVRvb2x0aXBDaGVja2VkID0gZmFsc2U7XG4gIGhhc0N1c3RvbVRvb2x0aXAgPSBmYWxzZTtcbiAgdG9vbHRpcFNob3duID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrQ3VzdG9tVG9vbHRpcCgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgfHwgdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW5wdXRDbGFzcygpOiB7W2Nzc0NsYXNzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb2N1c2VkJzogdGhpcy5mb2N1c2VkLFxuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICd2YWxpZCc6IHRoaXMuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMudmFsaWRdLFxuICAgICAgJ2ludmFsaWQnOiB0aGlzLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdLFxuICAgIH07XG4gIH1cblxuICBnZXQgaGFzQWRkaXRpb25hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnRvb2x0aXAgfHwgdGhpcy5oYXNDdXN0b21Ub29sdGlwO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgfVxuXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoKTtcbiAgfVxuXG4gIG9uVG9vbHRpcENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaGlkZVRvb2x0aXAoKSB7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy50b29sdGlwU2hvd24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAyNSk7XG4gIH1cblxuICBzaG93VG9vbHRpcCgpIHtcbiAgICB0aGlzLnRvb2x0aXBTaG93biA9IHRydWU7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDdXN0b21Ub29sdGlwKCkge1xuICAgIHRoaXMuaGFzQ3VzdG9tVG9vbHRpcCA9IHRoaXMudG9vbHRpcEVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXBFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXBFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmN1c3RvbVRvb2x0aXBDaGVja2VkID0gdHJ1ZTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1NlcmlhbGl6YWJsZSc7XG5cbmV4cG9ydCBlbnVtIEV2b0Jhbm5lclR5cGVzIHtcbiAgbGFyZ2UgPSAnbGFyZ2UnLFxuICBzbWFsbCA9ICdzbWFsbCcsXG4gIGZ1bGxXaWR0aCA9ICdmdWxsLXdpZHRoJyxcbn1cblxuZXhwb3J0IGVudW0gRXZvQmFubmVyTG9jYXRpb25zIHtcbiAgbWFpbiA9ICdNYWluJyxcbiAgY2F0ZWdvcnkgPSAnQ2F0ZWdvcnknLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElFdm9CYW5uZXJBbmFseXRpY3Mge1xuICB1cmw6IHN0cmluZztcbiAgZGF0YToge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNyZWF0aXZlOiBzdHJpbmc7XG4gICAgcG9zaXRpb246IHN0cmluZztcbiAgICBkaW1lbnNpb243Pzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRXZvQmFubmVyIGV4dGVuZHMgU2VyaWFsaXphYmxlIHtcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICBiYW5uZXJQb3NpdGlvbk5hbWVzID0ge1xuICAgIFtFdm9CYW5uZXJMb2NhdGlvbnMubWFpbl06IFtcbiAgICAgICdtYWluJyxcbiAgICAgICd0b3AnLFxuICAgICAgJ2JvdHRvbScsXG4gICAgXSxcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLmNhdGVnb3J5XTogW1xuICAgICAgJ21haW4nLFxuICAgIF0sXG4gIH07XG4gIGJ1dHRvbjogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWJhbm5lcicsXG4gIHRlbXBsYXRlOiBgPGEgY2xhc3M9XCJldm8tYmFubmVyXCJcbiAgIHRhcmdldD1cIl9ibGFua1wiXG4gICBbYXR0ci5ocmVmXT1cImJhbm5lcj8udXJsXCJcbiAgIChjbGljayk9XCJvbkJhbm5lckNsaWNrKClcIlxuICAgW2V2b1VpQ2xhc3NdPVwidHlwZVwiXG4gICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBiYW5uZXI/LmJhY2tncm91bmR9XCI+XG4gICAgPGRpdiBjbGFzcz1cImV2by1iYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1iYW5uZXJfX3RpdGxlXCI+e3sgYmFubmVyPy50aXRsZSB9fTwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13aGl0ZSBwcm9tby1idG5cIlxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBiYW5uZXI/LmJhY2tncm91bmR9XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImJhbm5lcj8uYnV0dG9uXCI+e3sgYmFubmVyPy5idXR0b24gfX08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aW1nIGNsYXNzPVwiZXZvLWJhbm5lcl9faW1nXCJcbiAgICAgICAgIHNyYz1cInt7IGJhbm5lcj8uaW1hZ2UgfX1cIlxuICAgICAgICAgYWx0PVwie3sgYmFubmVyPy50aXRsZSB9fVwiPlxuPC9hPlxuYCxcbiAgc3R5bGVzOiBbYC5ldm8tYmFubmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjQzMHB4O3BhZGRpbmc6MTJweCAyMHB4O292ZXJmbG93OmhpZGRlbjtjb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NnB4O2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3N9LmV2by1iYW5uZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMCwwLDAsLjIpfS5ldm8tYmFubmVyX19jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0uZXZvLWJhbm5lcl9fY29udGVudCAuYnRue3BhZGRpbmc6N3B4IDMwcHh9LmV2by1iYW5uZXJfX2NvbnRlbnQgLmJ0bi13aGl0ZXtkaXNwbGF5OmlubGluZS1ibG9jaztjb2xvcjojZmY3ODAwO2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTZweDt0ZXh0LXRyYW5zZm9ybTpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjI0cHh9LmV2by1iYW5uZXJfX2NvbnRlbnQgLmJ0bi13aGl0ZTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2U1NTUyNn0uZXZvLWJhbm5lcl9fY29udGVudCAuYnRuLXdoaXRlOmhvdmVyOmJlZm9yZXtkaXNwbGF5Om5vbmV9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bntkaXNwbGF5OnRhYmxlLWNlbGw7bWluLXdpZHRoOjE1NnB4O2hlaWdodDo0MHB4O3BhZGRpbmc6MCAyMHB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dmVydGljYWwtYWxpZ246bWlkZGxlfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46aG92ZXJ7YmFja2dyb3VuZDojZmZmfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46YWN0aXZle2JveC1zaGFkb3c6bm9uZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuIHNwYW57Zm9udC1zaXplOjE4cHh9LmV2by1iYW5uZXJfX3RpdGxle21hcmdpbi1ib3R0b206MTBweDtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjMwcHg7Zm9udC1mYW1pbHk6TXVzZW9TYW5zQ3lybCxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjEuM30uZXZvLWJhbm5lcl9fZGVzY3JpcHRpb257bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1ib3R0b206MTBweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjN9LmV2by1iYW5uZXJfX2ltZ3twb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTowO3dpZHRoOjI5MHB4O2hlaWdodDoyOTBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoe3BhZGRpbmc6MjBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX190aXRsZXtsaW5lLWhlaWdodDozOHB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLWJhbm5lcntwYWRkaW5nOjMwcHggNDBweH0uZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjAlfS5ldm8tYmFubmVyX19kZXNjcmlwdGlvbnttYXgtd2lkdGg6MjUwcHh9LmV2by1iYW5uZXJfX2ltZ3t3aWR0aDo0MzBweDtoZWlnaHQ6NDMwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aHtoZWlnaHQ6MjQwcHg7cGFkZGluZzozMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjUwJX0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX190aXRsZXtmb250LXNpemU6MzZweDtsaW5lLWhlaWdodDo0NHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2ltZ3t3aWR0aDoyNDBweDtoZWlnaHQ6MjQwcHh9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmV2by1iYW5uZXJ7cGFkZGluZzozMHB4IDQwcHh9LmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYzJX0uZXZvLWJhbm5lcl9zbWFsbHtoZWlnaHQ6MjEwcHg7cGFkZGluZzoyMHB4fS5ldm8tYmFubmVyX3NtYWxsIC5ldm8tYmFubmVyX190aXRsZXttYXJnaW4tYm90dG9tOjIwcHg7Zm9udC1zaXplOjIwcHh9LmV2by1iYW5uZXJfc21hbGwgLnByb21vLWJ0bntoZWlnaHQ6MzJweH0uZXZvLWJhbm5lcl9zbWFsbCAuZXZvLWJhbm5lcl9faW1ne3dpZHRoOjIxMHB4O2hlaWdodDoyMTBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MyV9fWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6ICdXaW5kb3cnLCAgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9CYW5uZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBiYW5uZXI6IEV2b0Jhbm5lcjtcbiAgQElucHV0KCkgdHlwZTogRXZvQmFubmVyVHlwZXMgPSBFdm9CYW5uZXJUeXBlcy5zbWFsbDtcblxuICBAT3V0cHV0KCkgYmFubmVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnV2luZG93JykgcHJpdmF0ZSB3aW5kb3c6IGFueSxcbiAgKSB7XG4gIH1cblxuICBvbkJhbm5lckNsaWNrKCkge1xuICAgIHRoaXMuYmFubmVyQ2xpY2suZW1pdCh0aGlzLmJhbm5lcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBFdm9TaWRlYmFyVHlwZXMge1xuICAgIGJhc2tldCA9ICdiYXNrZXQnLFxuICAgIHBhcnRuZXJBdXRoID0gJ3BhcnRuZXJBdXRoJyxcbiAgICBwcm9tb0NvZGUgPSAncHJvbW9Db2RlJyxcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2b1NpZGViYXJTZXJ2aWNlIHtcbiAgICBpc1NpZGViYXJWaXNpYmxlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICAgIHByaXZhdGUgcmVnaXN0ZXJlZFNpZGViYXJzID0ge307XG5cbiAgICBkZXJlZ2lzdGVyKGlkOiBFdm9TaWRlYmFyVHlwZXMpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXTtcbiAgICB9XG5cbiAgICByZWdpc3RlcihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIGlmICghKGlkIGluIEV2b1NpZGViYXJUeXBlcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFNpZGViYXIuIFVua25vd24gJyR7aWR9JywgcGxlYXNlIGFkZCB0aGlzIGlkIGluIGVudW1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvcGVuKGlkOiBFdm9TaWRlYmFyVHlwZXMpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1NpZGViYXJWaXNpYmxlJC5uZXh0KHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzKTtcbiAgICB9XG5cbiAgICBjbG9zZShpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2lkZWJhclZpc2libGUkLm5leHQodGhpcy5yZWdpc3RlcmVkU2lkZWJhcnMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgYXMgb2JzZXJ2YWJsZUZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSAndHMta2V5Y29kZS1lbnVtJztcblxuaW1wb3J0IHsgRXZvU2lkZWJhclNlcnZpY2UsIEV2b1NpZGViYXJUeXBlcyB9IGZyb20gJy4vZXZvLXNpZGViYXIuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tc2lkZWJhcicsXG4gICAgc3R5bGVzOiBbYC5ldm8tc2lkZWJhcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjEyMCU7ei1pbmRleDozMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDAgMTJweCByZ2JhKDAsMCwwLC4yNSl9QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcntsZWZ0OjEwMCU7d2lkdGg6Njc0cHg7bWFyZ2luLWxlZnQ6NDBweDt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC41czt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzLC13ZWJraXQtdHJhbnNmb3JtIC41c319LmV2by1zaWRlYmFyX2FjdGl2ZXtsZWZ0OjB9LmV2by1zaWRlYmFyX19oZWFkZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtc2hyaW5rOjA7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDttYXJnaW46MCAxNXB4O3BhZGRpbmc6MjBweCAwIDhweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWNlZmYxfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2hlYWRlcntwYWRkaW5nLXRvcDozOHB4fX0uZXZvLXNpZGViYXJfX3RpdGxle2NvbG9yOiMzMzNmNDg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5Ok11c2VvU2Fuc0N5cmwsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDozMnB4fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfYWN0aXZle2xlZnQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC03MTRweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTcxNHB4KX0uZXZvLXNpZGViYXJfX2hlYWRlcnttYXJnaW46MCAzMHB4fS5ldm8tc2lkZWJhcl9fdGl0bGV7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6MzhweH19LmV2by1zaWRlYmFyX19jbG9zZXttYXJnaW46LTRweCAwIC0ycHggMjBweDtwYWRkaW5nOjhweDtjb2xvcjojNTQ2ZTdhO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246b3BhY2l0eSAuM3N9LmV2by1zaWRlYmFyX19jbG9zZTpob3ZlcntvcGFjaXR5Oi44fS5ldm8tc2lkZWJhcl9fY2xvc2Ugc3Zne3ZlcnRpY2FsLWFsaWduOnRvcH0uZXZvLXNpZGViYXJfX2NvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOjIwcHggMTVweCA0MHB4O292ZXJmbG93LXk6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19jb250ZW50e3BhZGRpbmc6NDBweCAxNXB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX19jbG9zZXttYXJnaW46MnB4IDAgMCAzMHB4fS5ldm8tc2lkZWJhcl9fY29udGVudHtwYWRkaW5nOjQwcHggMzBweH19LmV2by1zaWRlYmFyX19mb290ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtc2hyaW5rOjA7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MzBweCAxNXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMjUpfS5ldm8tc2lkZWJhcl9fZm9vdGVyOmVtcHR5e2Rpc3BsYXk6bm9uZX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19mb290ZXJ7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MThweCAxNXB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX19mb290ZXJ7cGFkZGluZzoxOHB4IDMwcHh9fS5ldm8tc2lkZWJhcl9fYnV0dG9uc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MzBweCAwIDEwcHh9LmV2by1zaWRlYmFyX19idXR0b25zX2JvcmRlcnttYXJnaW4tdG9wOjUwcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VjZWZmMX0uZXZvLXNpZGViYXJfX2J1dHRvbisuZXZvLXNpZGViYXJfX2J1dHRvbnttYXJnaW4tdG9wOjIwcHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9fYnV0dG9uc3tmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZy1ib3R0b206MH0uZXZvLXNpZGViYXJfX2J1dHRvbisuZXZvLXNpZGViYXJfX2J1dHRvbnttYXJnaW4tdG9wOjB9fWBdLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZhZGUtYmFja2dyb3VuZCBmYWRlLWJhY2tncm91bmRfb3Zlci1hbGxcIlxuICAgICAqbmdJZj1cInN0YXRlcy5pc1Zpc2libGVcIlxuICAgICAoY2xpY2spPVwiY2xvc2VTaWRlYmFyKClcIlxuPjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJcIiBbbmdDbGFzc109XCJ7J2V2by1zaWRlYmFyX2FjdGl2ZScgOiBzdGF0ZXMuaXNWaXNpYmxlfVwiID5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2hlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX3RpdGxlXCI+e3sgdGl0bGUgfX08L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2Nsb3NlXCIgKGNsaWNrKT1cInNpZGViYXJTZXJ2aWNlLmNsb3NlKGlkKVwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImV2by1zaWRlYmFyX19jbG9zZS1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQuOSwxMmw4LjYtOC42YzAuOC0wLjgsMC44LTIuMSwwLTIuOWMtMC44LTAuOC0yLjEtMC44LTIuOSwwTDEyLDkuMUwzLjQsMC42XG4gICAgICAgICAgICAgICAgICAgIGMtMC44LTAuOC0yLjEtMC44LTIuOSwwYy0wLjgsMC44LTAuOCwyLjEsMCwyLjlMOS4xLDEybC04LjYsOC42Yy0wLjgsMC44LTAuOCwyLjEsMCwyLjljMC44LDAuOCwyLjEsMC44LDIuOSwwbDguNi04LjZsOC42LDguNlxuICAgICAgICAgICAgICAgICAgICBjMC44LDAuOCwyLjEsMC44LDIuOSwwYzAuOC0wLjgsMC44LTIuMSwwLTIuOUwxNC45LDEyelwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fZm9vdGVyXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3Rlcl1cIj48L25nLWNvbnRlbnQ+PC9kaXY+IDwhLS3DkcKHw5HCgsOQwr7DkMKxw5HCiyA6ZW1wdHkgw5HCgMOQwrDDkMKxw5DCvsORwoLDkMKww5DCuywgw5DCvcOQwrUgw5DCtMOQwr7DkMK7w5DCtsOQwr3DkMK+IMOQwrHDkcKLw5HCgsORwowgw5DCssOQwr3DkcKDw5HCgsORwoDDkMK4IGV2by1zaWRlYmFyX19mb290ZXIgw5DCssOQwr7DkMK+w5DCscORwonDkMK1IMOQwr3DkMK4w5HCh8OQwrXDkMKzw5DCviwgw5DCtMOQwrDDkMK2w5DCtSDDkMK/w5HCgMOQwr7DkMKxw5DCtcOQwrvDkMKwLS0+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEV2b1NpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gICAgQElucHV0KCkgaWQ6IEV2b1NpZGViYXJUeXBlcztcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBrZXlVcFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHN0YXRlcyA9IHtcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHNpZGViYXJTZXJ2aWNlOiBFdm9TaWRlYmFyU2VydmljZSkge31cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmRlcmVnaXN0ZXIodGhpcy5pZCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UucmVnaXN0ZXIodGhpcy5pZCk7XG5cbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5pc1NpZGViYXJWaXNpYmxlJC5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkIGluIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5pc1Zpc2libGUgPSBwYXlsb2FkW3RoaXMuaWRdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlVG9LZXlFdmVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmtleVVwU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZVNpZGViYXIoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuY2xvc2UodGhpcy5pZCk7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVUb0tleUV2ZW50KCkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZUZyb21FdmVudChkb2N1bWVudC5ib2R5LCAna2V5dXAnKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5LkVzY2FwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuY2xvc2UodGhpcy5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuaW1wb3J0IHsgSU9wdGlvbnMgfSBmcm9tICcuL3R5cGluZ3Mvb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLXJhZGlvLWdyb3VwJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBcIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW9cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkFycmF5XCI+XG4gICAgICAgIDwhLS0gw5DCn8OQwrXDkcKAw5DCtcOQwrrDkMK7w5HCjsORwofDkMK1w5DCvcOQwrjDkMK1IMORwoHDkcKCw5DCuMOQwrvDkMK1w5DCuSDDkMKyw5HCi8OQwr/DkMK+w5DCu8OQwr3DkcKPw5DCtcORwoLDkcKBw5HCjyDDkcKBIMOQwr/DkMK+w5DCvMOQwr7DkcKJw5HCjMORwo4gw5DCv8ORwoHDkMK1w5DCssOQwrTDkMK+w5HCgcOQwrXDkMK7w5DCtcOQwrrDkcKCw5DCvsORwoDDkMKwIDpjaGVja2VkIC0tPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWNvbnRyb2xcIiAobmdNb2RlbENoYW5nZSkgPSBcIm9uQ2hhbmdlZFZhbHVlKCRldmVudClcIiBmb3JtQ29udHJvbE5hbWU9XCJ2YWx1ZVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXt7b3B0aW9uLnZhbHVlfX0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLXZpZXdcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwX19yYWRpby1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLXZhbHVlXCI+e3tvcHRpb24ucHJlc2VudGF0aW9uVGV4dH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgLmV2by1yYWRpby1ncm91cHtkaXNwbGF5OmZsZXh9LmV2by1yYWRpby1ncm91cF9fcmFkaW97ZmxleDoxO21hcmdpbi1yaWdodDozMHB4O2N1cnNvcjpwb2ludGVyfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tY29udHJvbHtkaXNwbGF5Om5vbmV9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tY29udHJvbDpjaGVja2VkKy5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLXZpZXd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDY4LDEzOCwyNTUsLjA1KTtib3JkZXItY29sb3I6IzQ0OGFmZn0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9sOmNoZWNrZWQrLmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlldyAuZXZvLXJhZGlvLWdyb3VwX19yYWRpby1pY29uOmJlZm9yZXtkaXNwbGF5OmJsb2NrfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLXZpZXd7ZGlzcGxheTpmbGV4O3BhZGRpbmc6MjBweDtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czo4cHh9LmV2by1yYWRpby1ncm91cF9fcmFkaW8taWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztmbGV4LXNocmluazowO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bWFyZ2luLXJpZ2h0OjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RlZGVkZTtib3JkZXItcmFkaXVzOjUwJX0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1pY29uOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO2Rpc3BsYXk6bm9uZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtjb250ZW50OicnO21hcmdpbi10b3A6LTVweDttYXJnaW4tbGVmdDotNXB4O2JhY2tncm91bmQtY29sb3I6IzQ0OGFmZjtib3JkZXI6MXB4IHNvbGlkICMyODY5ZDc7Ym9yZGVyLXJhZGl1czo1MCV9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmFsdWV7Y29sb3I6IzAwMDtmb250LXNpemU6MTZweH1gXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9SYWRpb0dyb3VwQ29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b1JhZGlvR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIG9wdGlvbnM6IElPcHRpb25zO1xuICAgIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU/OiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZm9ybUdyb3VwO1xuICAgIHByaXZhdGUgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Hcm91cCgpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDDkMKTw5DCtcORwoLDkcKCw5DCtcORwoAgw5DCvcOQwrAgw5DCssOQwr7DkMK3w5DCvMOQwr7DkMK2w5DCvcORwovDkMK1IMOQwrLDkMKww5HCgMOQwrjDkMKww5DCvcORwoLDkcKLIMOQwr7DkcKCw5HCh8OQwrXDkcKCw5DCsCDDkMKyIMORwoTDkMK+w5HCgMOQwrzDkMKww5HCgsOQwrUgw5DCvMOQwrDDkcKBw5HCgcOQwrjDkMKyw5DCsFxuICAgICogw5DCv8ORwoDDkMK1w5DCt8OQwrXDkMK9w5HCgsOQwrDDkcKGw5DCuMOQwr7DkMK9w5DCvcOQwr7DkMKzw5DCviDDkcKCw5DCtcOQwrrDkcKBw5HCgsOQwrAgw5DCtMOQwrvDkcKPIMORwoDDkMKww5DCtMOQwrjDkMK+IMOQwrPDkcKAw5HCg8OQwr/DkMK/w5DCsFxuICAgICovXG4gICAgZ2V0IG9wdGlvbkFycmF5KCk6IElPcHRpb25zW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZU9wdGlvbkFycmF5KHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDDkMKTw5DCtcOQwr3DkMK1w5HCgMOQwrjDkcKAw5HCg8OQwrXDkcKCIMOQwrjDkMK3IMOQwr7DkMK/w5HChsOQwrjDkMK5IMOQwrzDkMKww5HCgcORwoHDkMK4w5DCslxuICAgICogQHBhcmFtIHNvdXJjZSDDkMK+w5DCscORworDkMK1w5DCusORwoIgw5HCgSDDkMKyw5DCsMORwoDDkMK4w5DCsMOQwr3DkcKCw5DCsMOQwrzDkMK4XG4gICAgKi9cbiAgICBwcml2YXRlIGdlbmVyYXRlT3B0aW9uQXJyYXkoc291cmNlOiBJT3B0aW9ucyk6IElPcHRpb25zW10ge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDDkMKhw5DCvsOQwrfDkMK0w5DCsMOQwr3DkMK4w5DCtSDDkMKzw5HCgMORwoPDkMK/w5DCv8ORwotcbiAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRm9ybUdyb3VwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgdmFsdWU6IFsgdGhpcy52YWx1ZSBdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIMOQwp7DkMKxw5HCgMOQwrDDkMKxw5DCvsORwoLDkcKHw5DCuMOQwrogw5DCvcOQwrAgw5HCgcOQwrzDkMK1w5DCvcORwoMgw5DCt8OQwr3DkMKww5HCh8OQwrXDkMK9w5DCuMORwo9cbiAgICAqIEBwYXJhbSB2YWx1ZSDDkMK3w5DCvcOQwrDDkcKHw5DCtcOQwr3DkMK4w5DCtVxuICAgICovXG4gICAgcHVibGljIG9uQ2hhbmdlZFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuZXhwb3J0IGVudW0gRXZvQXV0b0NvbXBsZXRlVHlwZXMge1xuICAgIHBhcnR5ID0gJ3BhcnR5Jyxcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tYXV0by1jb21wbGV0ZScsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVfX2lucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGV2by1pbnB1dCAoYmx1cik9XCJvblRvdWNoZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgW3N0YXRlXT1cImN1cnJlbnRTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImlucHV0XCI+PC9ldm8taW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX19zdWdnZXN0aW9uc1wiICpuZ0lmPVwic3VnZ2VzdGlvbnMgJiYgc3VnZ2VzdGlvbnMubGVuZ3RoICYmICFkaXNhYmxlZFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWdnZXN0aW9uIG9mIHN1Z2dlc3Rpb25zXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX19wYXJ0eVwiICpuZ0lmPVwiZ2V0U3VnZ2VzdGlvbkRhdGFTdHJpbmcoc3VnZ2VzdGlvbilcIiAoY2xpY2spPVwiaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKCRldmVudCwgc3VnZ2VzdGlvbilcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX190ZXh0LWxpbmVcIiBbYXR0ci50aXRsZV09XCJzdWdnZXN0aW9uLnZhbHVlXCI+e3sgc3VnZ2VzdGlvbi52YWx1ZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX190ZXh0LWxpbmVcIiBbYXR0ci50aXRsZV09XCJnZXRTdWdnZXN0aW9uRGF0YVN0cmluZyhzdWdnZXN0aW9uKVwiPnt7IGdldFN1Z2dlc3Rpb25EYXRhU3RyaW5nKHN1Z2dlc3Rpb24pIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1hdXRvLWNvbXBsZXRle3Bvc2l0aW9uOnJlbGF0aXZlfS5ldm8tYXV0by1jb21wbGV0ZV9faW5wdXQtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LmV2by1hdXRvLWNvbXBsZXRlX19zdWdnZXN0aW9uc3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCAwIDEycHggNHB4IHJnYmEoMCwwLDAsLjIpfS5ldm8tYXV0by1jb21wbGV0ZV9fcGFydHl7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDo0OHB4O3BhZGRpbmc6NXB4IDIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyfS5ldm8tYXV0by1jb21wbGV0ZV9fcGFydHk6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4MDB9LmV2by1hdXRvLWNvbXBsZXRlX190ZXh0LWxpbmV7bWFyZ2luOjA7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0F1dG9Db21wbGV0ZUNvbXBvbmVudCksXG4gICAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG5dLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9BdXRvQ29tcGxldGVDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdHlwZTogRXZvQXV0b0NvbXBsZXRlVHlwZXM7XG4gICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpbnB1dDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICBzdWdnZXN0aW9uczogYW55W10gPSBbXTtcblxuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSB2YWx1ZUF1dG9Db21wbGV0ZWQgPSBmYWxzZTtcblxuICAgIHJlYWRvbmx5IGF1dG9Db21wZXRlVHlwZXMgPSBFdm9BdXRvQ29tcGxldGVUeXBlcztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyAnJGV2ZW50JyBdKVxuICAgIGhhbmRsZURvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSkge1xuICAgICAgaWYgKGV2ZW50LnBhdGguaW5kZXhPZih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkgPT09IC0xICYmIHRoaXMuc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgdGhpcy52YWx1ZUF1dG9Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlucHV0LnNldFZhbHVlKCcnLCB7XG4gICAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVBdXRvQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQXV0b0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0U3VnZ2VzdGlvbnMocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRTdWdnZXN0aW9uRGF0YVN0cmluZyhzdWdnZXN0aW9uOiBhbnkpOiBzdHJpbmcge1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgIGlmIChzdWdnZXN0aW9uICYmIHN1Z2dlc3Rpb24uZGF0YSkge1xuICAgICAgICBjb25zdCBpbm46IHN0cmluZyA9IHN1Z2dlc3Rpb24uZGF0YS5pbm47XG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gc3VnZ2VzdGlvbi5kYXRhO1xuXG4gICAgICAgIGlmIChpbm4pIHtcbiAgICAgICAgICByZXN1bHQgPSBgJHtpbm59ICR7YWRkcmVzcyA/IGFkZHJlc3MudmFsdWUgOiAnJ31gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKGV2ZW50OiBhbnksIHN1Z2dlc3Rpb246IGFueSkge1xuICAgICAgdGhpcy52YWx1ZUF1dG9Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbnB1dC5zZXRWYWx1ZShzdWdnZXN0aW9uLnZhbHVlLCB7XG4gICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICAgIG9ubHlTZWxmOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gbnVsbDtcbiAgICAgIHRoaXMudmFsdWUgPSBzdWdnZXN0aW9uO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLmlucHV0LnNldFZhbHVlKCcnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICAgIHN0YXRlID8gdGhpcy5pbnB1dC5kaXNhYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pIDpcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dC5lbmFibGUoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgLy8gIFRPRE8gQ3JlYXRlIGdlbmVyaWMgd2F5IHRvIGdldCBEYURhdGEgc3VnZ2VzdGlvbnMvYW55IGJhY2tlbmQgZGF0YSB0byBzaG93XG4gICAgcHJpdmF0ZSByZXF1ZXN0U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnVG9rZW4gNmE2MmU3NzliOTg0ZjAzNTNlODc5MzFlYmMzODRkMmM3MzZhYWZhOScpXG4gICAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5odHRwXG4gICAgICAgIC5wb3N0PGFueT4oXG4gICAgICAgICAgJ2h0dHBzOi8vc3VnZ2VzdGlvbnMuZGFkYXRhLnJ1L3N1Z2dlc3Rpb25zL2FwaS80XzEvcnMvc3VnZ2VzdC9wYXJ0eScsXG4gICAgICAgICAgeyBxdWVyeSwgY291bnQ6IDQgfSxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSByZXNwb25zZS5zdWdnZXN0aW9ucztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jb250cm9sLWxhYmVsJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tY29udHJvbC1sYWJlbFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImV2by1jb250cm9sLWxhYmVsX190ZXh0XCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1jb250cm9sLWxhYmVse21hcmdpbi1ib3R0b206MjBweH0uZXZvLWNvbnRyb2wtbGFiZWxfX3RleHR7bWFyZ2luLWJvdHRvbToxMXB4O2NvbG9yOiM5YjliOWI7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MTZweH1gXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbExhYmVsQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgSXRlcmFibGVEaWZmZXJzLCBLZXlWYWx1ZURpZmZlcnMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IGlzT2JqZWN0ID0gKGl0ZW0pID0+IGl0ZW0gIT0gbnVsbCAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCc7XG5jb25zdCBpc1N0cmluZyA9IChpdGVtKSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZyc7XG5jb25zdCBpc0FycmF5ID0gKGl0ZW0pID0+IEFycmF5LmlzQXJyYXkoaXRlbSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tldm9VaUNsYXNzXScsXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBOZ0NsYXNzIHtcbiAgQElucHV0KCdldm9VaUNsYXNzJylcbiAgc2V0IHNldHRlck9mQ2xhc3MoZGF0YTogYW55KSB7XG4gICAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBkYXRhLm1hcCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3RoaXMucHJlZml4fV8ke2NsYXNzTmFtZX1gKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBkYXRhID0gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlKChuZXdEYXRhOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIG5ld0RhdGFbYCR7dGhpcy5wcmVmaXh9XyR7a2V5fWBdID0gZGF0YVtrZXldO1xuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICAgIH0sIHt9KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKChteUNsYXNzKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtteUNsYXNzfWApXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSB0eXBlIG5vdCBhbGxvd2VkIScpO1xuICAgIH1cblxuICAgIHRoaXMubmdDbGFzcyA9IGRhdGE7XG4gIH1cblxuICBuZ0NsYXNzOiBhbnk7XG5cbiAgcHJpdmF0ZSBwcmVmaXg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcbiAgICAgICAgX25nRWw6IEVsZW1lbnRSZWYsIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoX2l0ZXJhYmxlRGlmZmVycywgX2tleVZhbHVlRGlmZmVycywgX25nRWwsIF9yZW5kZXJlcik7XG4gICAgdGhpcy5wcmVmaXggPSBfbmdFbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcblxuaW1wb3J0IHsgRXZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1idXR0b24vZXZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ2hlY2tib3hDb21wb25lbnQgIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jaGVja2JveC9ldm8tY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWlucHV0L2V2by1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvUmFkaW9Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tcmFkaW8tZ3JvdXAvZXZvLXJhZGlvLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9TaWRlYmFyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5zZXJ2aWNlJztcbmV4cG9ydCB7IEV2b1NpZGViYXJTZXJ2aWNlIH07XG5pbXBvcnQgeyBFdm9BdXRvQ29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWF1dG8tY29tcGxldGUvZXZvLWF1dG8tY29tcGxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY29udHJvbC1sYWJlbC9ldm8tY29udHJvbC1sYWJlbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFdm9VaUNsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V2by11aS1jbGFzcy5kaXJlY3RpdmUnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnkgPSBbXG4gIEV2b0J1dHRvbkNvbXBvbmVudCxcbiAgRXZvQ2hlY2tib3hDb21wb25lbnQsXG4gIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCxcbiAgRXZvSW5wdXRDb21wb25lbnQsXG4gIEV2b0Jhbm5lckNvbXBvbmVudCxcbiAgRXZvU2lkZWJhckNvbXBvbmVudCxcbiAgRXZvQXV0b0NvbXBsZXRlQ29tcG9uZW50LFxuICBFdm9Db250cm9sTGFiZWxDb21wb25lbnQsXG4gIEV2b1JhZGlvR3JvdXBDb21wb25lbnQsXG5dO1xuXG5jb25zdCBkaXJlY3RpdmVzOiBhbnkgPSBbXG4gIEV2b1VpQ2xhc3NEaXJlY3RpdmUsXG5dO1xuXG5jb25zdCBidW5kbGU6IGFueSA9IFtcbiAgLi4uY29tcG9uZW50cyxcbiAgLi4uZGlyZWN0aXZlcyxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uYnVuZGxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uYnVuZGxlLFxuICBdLFxuICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlLaXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV2b1VpS2l0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEV2b1NpZGViYXJTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG5cblxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwib2JzZXJ2YWJsZUZyb21FdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBcURJLDRCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO3lCQUhqQixLQUFLO3dCQUNOLEtBQUs7S0FFa0I7SUFsQjFDLHNCQUFhLHdDQUFROzs7O1FBb0JyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6Qjs7Ozs7UUF0QkQsVUFBc0IsS0FBYztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1NBQ0o7OztPQUFBO0lBQ0Qsc0JBQWEsdUNBQU87Ozs7UUFpQnBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3hCOzs7OztRQW5CRCxVQUFxQixLQUFjO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1NBQ0o7OztPQUFBO0lBZUQsc0JBQUksNENBQVk7Ozs7UUFBaEI7WUFDSSxxQkFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO1lBRTdCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtZQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFD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