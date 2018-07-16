(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('ts-keycode-enum'), require('@angular/common/http'), require('@angular/common'), require('angular2-text-mask')) :
    typeof define === 'function' && define.amd ? define('evo-ui-kit', ['exports', '@angular/core', '@angular/forms', 'rxjs', 'ts-keycode-enum', '@angular/common/http', '@angular/common', 'angular2-text-mask'], factory) :
    (factory((global['evo-ui-kit'] = {}),global.ng.core,global.ng.forms,global.rxjs,null,global.ng.common.http,global.ng.common,null));
}(this, (function (exports,core,forms,rxjs,tsKeycodeEnum,http,common,angular2TextMask) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EvoButtonComponent = (function () {
        function EvoButtonComponent(elRef) {
            this.elRef = elRef;
            this._disabled = false;
            this._loading = false;
        }
        Object.defineProperty(EvoButtonComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._loading;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'evo-button, button[evo-button]',
                        template: "<div class=\"evo-button\" [evoUiClass]=\"totalClasses\">\n    <span [ngStyle]=\"totalStyles\">\n        <ng-content></ng-content>\n    </span>\n    <span *ngIf=\"loading\" class=\"evo-button__dots\">\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n    </span>\n</div>\n",
                        styles: ["@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}:host{display:inline-block;margin:0;padding:0;vertical-align:top;background:0 0;border:0;outline:0}.evo-button{min-width:100px;height:44px;padding:0 30px;color:#fff;font-weight:700;font-size:16px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:44px;white-space:nowrap;text-align:center;text-transform:uppercase;vertical-align:middle;background:#ff7800;border:none;border-radius:30px;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-button:hover{color:#fff;background-color:#ff9d47}.evo-button:active,.evo-button:focus{color:#fff;background-color:#cc6000;outline:0}.evo-button:disabled,.evo-button_disabled{color:#fff!important;background:#d6d6d6!important;border-color:#d6d6d6!important;pointer-events:none}.evo-button_lined{color:#ff7800;background-color:#fff;border:1px solid #ff7800}.evo-button_lined:hover{color:#fff;background-color:#ff7800}.evo-button_lined:active,.evo-button_lined:focus{color:#fff;background-color:#cc6000;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{color:#546e7a;background-color:#fff;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{color:#fff;background-color:#546e7a}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{color:#fff;background-color:#283239;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{color:#8bc34a;background-color:#fff;border:1px solid #8bc34a}.evo-button_green-lined:hover{color:#fff;background-color:#8bc34a}.evo-button_green-lined:active,.evo-button_green-lined:focus{color:#fff;background-color:#6f9c3b;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_small{min-width:75px;height:30px;padding:0 20px;font-size:14px;line-height:30px}.evo-button_large{min-width:125px;height:60px;padding:0 40px;font-size:18px;line-height:60px}.evo-button_icon{display:inline-flex;align-items:center;padding-right:22px;padding-left:22px}.evo-button_loading{position:relative;pointer-events:none}.evo-button__dots{position:absolute;top:50%;left:50%;margin-top:-5px;margin-left:-30px}.evo-button__dot{float:left;width:10px;height:10px;margin:0 5px;background:currentColor;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        EvoButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        EvoButtonComponent.propDecorators = {
            color: [{ type: core.Input }],
            size: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            loading: [{ type: core.Input }]
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
    var EvoBaseControl = (function () {
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
             */ function () {
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
             */ function () {
                return this.currentState[EvoControlStates.invalid];
            },
            enumerable: true,
            configurable: true
        });
        EvoBaseControl.propDecorators = {
            formControlName: [{ type: core.ContentChild, args: [forms.FormControlName,] }],
            formControlDirective: [{ type: core.ContentChild, args: [forms.FormControlDirective,] }],
            errorsMessages: [{ type: core.Input }],
            state: [{ type: core.Input }]
        };
        return EvoBaseControl;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EvoCheckboxComponent = (function (_super) {
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
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._value = value;
                this.onChange(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EvoCheckboxComponent.prototype, "checkboxClass", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'evo-checkbox',
                        template: "<label class=\"evo-checkbox\">\n    <input class=\"evo-checkbox__input\"\n           type=\"checkbox\"\n           [evoUiClass]=\"checkboxClass\"\n           [disabled]=\"disabled\"\n           [(ngModel)]=\"value\">\n    <span class=\"evo-checkbox__text\">\n        <ng-content></ng-content>\n    </span>\n</label>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                        styles: [".evo-checkbox{margin:0}.evo-checkbox__input{display:none}.evo-checkbox__text{position:relative;display:inline-block;padding-left:26px;color:#212121;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-checkbox__text:before{content:'';position:absolute;top:2px;left:0;width:16px;height:16px;background-color:#fff;border:1px solid #dbdbdb;border-radius:3px}input:checked+.evo-checkbox__text:before{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg version%3D%221.1%22 id%3D%22%D0%A1%D0%BB%D0%BE%D0%B9_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2210px%22 height%3D%227px%22 viewBox%3D%220 0 10 7%22 enable-background%3D%22new 0 0 10 7%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath id%3D%22path0_fill%22 fill%3D%22%23FFFFFF%22 d%3D%22M9.7%2C0.3c0.4%2C0.4%2C0.4%2C1%2C0%2C1.4l-5%2C5C4.4%2C7%2C3.9%2C7.1%2C3.5%2C6.9c-0.2%2C0-0.3-0.1-0.4-0.3L0.3%2C3.8%09c-0.4-0.4-0.4-1%2C0-1.4c0.4-0.4%2C1-0.4%2C1.4%2C0l2.2%2C2.2l4.3-4.3C8.6-0.1%2C9.3-0.1%2C9.7%2C0.3z%22%2F%3E%3C%2Fsvg%3E\") center no-repeat #448aff;border-color:#448aff}input:disabled:not(:checked)+.evo-checkbox__text{cursor:default}input:disabled:not(:checked)+.evo-checkbox__text:before{background-color:#f6f6f6}input:disabled:checked+.evo-checkbox__text{cursor:default}input:disabled:checked+.evo-checkbox__text:before{opacity:.5}input.evo-checkbox_invalid+.evo-checkbox__text:before{border-color:#f22}"],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return EvoCheckboxComponent; }),
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
    var EvoControlErrorComponent = (function () {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'evo-control-error',
                        template: "<div class=\"evo-error\" *ngFor=\"let errorMsg of errorsMap; let i = index;\">\n    <span *ngIf=\"showError(i)\">{{ errorMsg }}</span>\n</div>\n",
                        styles: [".evo-error{margin-top:10px;color:#f22;font-size:14px;font-style:italic}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        EvoControlErrorComponent.propDecorators = {
            errors: [{ type: core.Input }],
            errorsMessages: [{ type: core.Input }],
            showCount: [{ type: core.Input }]
        };
        return EvoControlErrorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EvoInputComponent = (function (_super) {
        __extends(EvoInputComponent, _super);
        function EvoInputComponent(changeDetector) {
            var _this = _super.call(this) || this;
            _this.changeDetector = changeDetector;
            _this.type = 'text';
            _this.blur = new core.EventEmitter();
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
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'evo-input',
                        template: "<div class=\"evo-input\" [evoUiClass]=\"inputClass\">\n    <label class=\"evo-input__container\">\n        <input #input\n               *ngIf=\"!mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [disabled]=\"disabled\">\n        <input #input\n               *ngIf=\"mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [textMask]=\"mask\"\n               [disabled]=\"disabled\">\n        <div class=\"evo-input__additional\"\n             *ngIf=\"hasAdditional\">\n            <div class=\"evo-input__tooltip\"\n                 *ngIf=\"tooltip || hasCustomTooltip\"\n                 (mouseenter)=\"showTooltip()\"\n                 (mouseleave)=\"hideTooltip()\"\n                 (click)=\"onTooltipClick($event)\">?</div>\n        </div>\n        <div *ngIf=\"!customTooltipChecked || tooltipShown\"\n             [hidden]=\"!customTooltipChecked\"\n             (click)=\"onTooltipClick($event)\"\n             (mouseenter)=\"showTooltip()\"\n             (mouseleave)=\"hideTooltip()\"\n             #tooltipContainer\n             [ngClass]=\"{'evo-input__tooltip-container': tooltip}\">\n            {{ tooltip }}\n            <ng-content select=\"[tooltip]\"></ng-content>\n        </div>\n    </label>\n</div>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                        styles: [".evo-input{position:relative;display:flex;width:100%;height:48px;line-height:48px;white-space:nowrap;background-color:#fff;background-image:none;border:1px solid #dbdbdb;border-radius:4px;outline:0;transition:box-shadow .3s,border .3s}.evo-input__container{display:flex;align-items:center;width:100%;height:100%;margin:0;border-radius:4px;cursor:text}.evo-input_focused{border:1px solid #546e7a;box-shadow:0 0 2px 0 #546e7a!important}.evo-input_disabled{color:#9b9b9b;background-color:#f6f6f6!important}.evo-input_disabled .evo-input__container{cursor:default}.evo-input_valid{border-color:#8bc34a}.evo-input_invalid{border-color:#f22}.evo-input__field{flex-grow:1;width:100%;height:100%;margin:0;padding:0 20px;color:#000;font-weight:400;font-size:16px;border:none;border-radius:4px;outline:0}.evo-input__field::-webkit-input-placeholder{color:#9b9b9b}.evo-input__field::-moz-placeholder{color:#9b9b9b;opacity:1}.evo-input__field:-ms-input-placeholder{color:#9b9b9b}.evo-input__field:disabled{color:#9b9b9b;background-color:#f6f6f6!important}.evo-input__field:not(:last-child){padding-right:0}.evo-input__tooltip{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:24px;height:24px;margin:0 10px;color:#546e7a;font-weight:600;font-size:18px;font-family:OpenSans,Arial,sans-serif;line-height:24px;text-align:center;background:#eceff1;border-radius:50%;cursor:pointer}.evo-input__tooltip-container{position:absolute;top:calc(100% - 2px);left:0;z-index:1;display:flex;width:100%;padding:10px 10px 10px 20px;color:#212121;line-height:normal;white-space:normal;background-color:#fff8e6;border-radius:4px;box-shadow:0 4px 12px 0 rgba(0,0,0,.2);cursor:default}.evo-input__tooltip-container[hidden]{display:none!important}.evo-input__tooltip-container:before{position:absolute;top:-20px;left:calc(100% - 34px);border:10px solid transparent;border-bottom:10px solid #fff8e6;pointer-events:none;content:''}@media (min-width:1200px){.evo-input__tooltip-container{left:calc(50% - 22px)}.evo-input__tooltip-container:before{position:absolute;top:-20px;left:calc(50% - 12px);border:10px solid transparent;border-bottom:10px solid #fff8e6;content:''}}"],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return EvoInputComponent; }),
                                multi: true,
                            },
                        ],
                    },] },
        ];
        /** @nocollapse */
        EvoInputComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        EvoInputComponent.propDecorators = {
            autoFocus: [{ type: core.Input }],
            mask: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            type: [{ type: core.Input }],
            _value: [{ type: core.Input, args: ['value',] }],
            blur: [{ type: core.Output }],
            inputElement: [{ type: core.ViewChild, args: ['input',] }],
            tooltipElement: [{ type: core.ViewChild, args: ['tooltipContainer',] }]
        };
        return EvoInputComponent;
    }(EvoBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Serializable = (function () {
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
    var EvoBanner = (function (_super) {
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
    var EvoBannerComponent = (function () {
        function EvoBannerComponent(window) {
            this.window = window;
            this.type = EvoBannerTypes.small;
            this.bannerClick = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'evo-banner',
                        template: "<a class=\"evo-banner\"\n   target=\"_blank\"\n   [attr.href]=\"banner?.url\"\n   (click)=\"onBannerClick()\"\n   [evoUiClass]=\"type\"\n   [ngStyle]=\"{'background-color': banner?.background}\">\n    <div class=\"evo-banner__content\">\n        <div class=\"evo-banner__title\">{{ banner?.title }}</div>\n        <button class=\"btn btn-white promo-btn\"\n                [ngStyle]=\"{'color': banner?.background}\"\n                *ngIf=\"banner?.button\">{{ banner?.button }}</button>\n    </div>\n    <img class=\"evo-banner__img\"\n         src=\"{{ banner?.image }}\"\n         alt=\"{{ banner?.title }}\">\n</a>\n",
                        styles: [".evo-banner{position:relative;display:block;height:430px;padding:12px 20px;overflow:hidden;color:#fff;border-radius:6px;cursor:pointer;transition:box-shadow .3s}.evo-banner:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}.evo-banner__content{position:relative;z-index:2}.evo-banner__content .btn{padding:7px 30px}.evo-banner__content .btn-white{display:inline-block;color:#ff7800;font-weight:600;font-size:16px;text-transform:none;background-color:#fff;border-radius:24px}.evo-banner__content .btn-white:hover{color:#fff;background-color:#e55526}.evo-banner__content .btn-white:hover:before{display:none}.evo-banner__content .promo-btn{display:table-cell;min-width:156px;height:40px;padding:0 20px;font-weight:600;font-size:14px;text-transform:uppercase;vertical-align:middle}.evo-banner__content .promo-btn:hover{background:#fff}.evo-banner__content .promo-btn:active{box-shadow:none}.evo-banner__content .promo-btn span{font-size:18px}.evo-banner__title{margin-bottom:10px;font-weight:700;font-size:30px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:1.3}.evo-banner__description{margin-top:20px;margin-bottom:10px;font-size:14px;line-height:1.3}.evo-banner__img{position:absolute;right:0;bottom:0;width:290px;height:290px}.evo-banner_full-width{padding:20px}.evo-banner_full-width .evo-banner__title{line-height:38px}@media (min-width:768px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:60%}.evo-banner__description{max-width:250px}.evo-banner__img{width:430px;height:430px}.evo-banner_full-width{height:240px;padding:30px}.evo-banner_full-width .evo-banner__content{max-width:50%}.evo-banner_full-width .evo-banner__title{font-size:36px;line-height:44px}.evo-banner_full-width .evo-banner__img{width:240px;height:240px}}@media (min-width:1200px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:63%}.evo-banner_small{height:210px;padding:20px}.evo-banner_small .evo-banner__title{margin-bottom:20px;font-size:20px}.evo-banner_small .promo-btn{height:32px}.evo-banner_small .evo-banner__img{width:210px;height:210px}.evo-banner_full-width .evo-banner__content{max-width:63%}}"],
                        providers: [
                            { provide: 'Window', useValue: ɵ0 },
                        ],
                    },] },
        ];
        /** @nocollapse */
        EvoBannerComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: ['Window',] }] }
            ];
        };
        EvoBannerComponent.propDecorators = {
            banner: [{ type: core.Input }],
            type: [{ type: core.Input }],
            bannerClick: [{ type: core.Output }]
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
    var EvoSidebarService = (function () {
        function EvoSidebarService() {
            this.isSidebarVisible$ = new rxjs.BehaviorSubject({});
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
            { type: core.Injectable },
        ];
        return EvoSidebarService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EvoSidebarComponent = (function () {
        function EvoSidebarComponent(sidebarService) {
            this.sidebarService = sidebarService;
            this.onClose = new core.EventEmitter();
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
                return rxjs.fromEvent(document.body, 'keyup').subscribe(function (event) {
                    if (event.keyCode === tsKeycodeEnum.Key.Escape) {
                        _this.sidebarService.close(_this.id);
                    }
                });
            };
        EvoSidebarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'evo-sidebar',
                        styles: [".evo-sidebar{position:fixed;top:0;bottom:0;left:120%;z-index:3000;display:flex;flex-direction:column;width:100%;background-color:#fff;box-shadow:0 0 12px rgba(0,0,0,.25)}@media (min-width:992px){.evo-sidebar{left:100%;width:674px;margin-left:40px;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}}.evo-sidebar_active{left:0}.evo-sidebar__header{display:flex;flex-shrink:0;justify-content:space-between;align-items:flex-start;margin:0 15px;padding:20px 0 8px;border-bottom:1px solid #eceff1}@media (min-width:768px){.evo-sidebar__header{padding-top:38px}}.evo-sidebar__title{color:#333f48;font-weight:700;font-size:24px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:32px}@media (min-width:992px){.evo-sidebar_active{left:100%;-webkit-transform:translateX(-714px);transform:translateX(-714px)}.evo-sidebar__header{margin:0 30px}.evo-sidebar__title{font-size:30px;line-height:38px}}.evo-sidebar__close{margin:-4px 0 -2px 20px;padding:8px;color:#546e7a;cursor:pointer;transition:opacity .3s}.evo-sidebar__close:hover{opacity:.8}.evo-sidebar__close svg{vertical-align:top}.evo-sidebar__content{display:flex;flex-grow:1;flex-direction:column;padding:20px 15px 40px;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (min-width:768px){.evo-sidebar__content{padding:40px 15px}}@media (min-width:992px){.evo-sidebar__close{margin:2px 0 0 30px}.evo-sidebar__content{padding:40px 30px}}.evo-sidebar__footer{display:flex;flex-shrink:0;flex-direction:column;padding:30px 15px;background-color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.25)}.evo-sidebar__footer:empty{display:none}@media (min-width:768px){.evo-sidebar__footer{flex-direction:row;justify-content:space-between;padding:18px 15px}}@media (min-width:992px){.evo-sidebar__footer{padding:18px 30px}}.evo-sidebar__buttons{display:flex;flex-direction:column;padding:30px 0 10px}.evo-sidebar__buttons_border{margin-top:50px;border-top:1px solid #eceff1}.evo-sidebar__button+.evo-sidebar__button{margin-top:20px}@media (min-width:768px){.evo-sidebar__buttons{flex-direction:row;justify-content:space-between;padding-bottom:0}.evo-sidebar__button+.evo-sidebar__button{margin-top:0}}"],
                        template: "<div class=\"fade-background fade-background_over-all\"\n     *ngIf=\"states.isVisible\"\n     (click)=\"closeSidebar()\"\n></div>\n\n<div class=\"evo-sidebar\" [ngClass]=\"{'evo-sidebar_active' : states.isVisible}\" >\n    <div class=\"evo-sidebar__header\">\n        <div class=\"evo-sidebar__title\">{{ title }}</div>\n\n        <div class=\"evo-sidebar__close\" (click)=\"sidebarService.close(id)\">\n            <svg class=\"evo-sidebar__close-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\">\n                <path fill=\"currentColor\" d=\"M14.9,12l8.6-8.6c0.8-0.8,0.8-2.1,0-2.9c-0.8-0.8-2.1-0.8-2.9,0L12,9.1L3.4,0.6\n                    c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9L9.1,12l-8.6,8.6c-0.8,0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0l8.6-8.6l8.6,8.6\n                    c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9L14.9,12z\"/>\n            </svg>\n        </div>\n    </div>\n\n\n    <div class=\"evo-sidebar__content\">\n        <ng-content select=\"[content]\"></ng-content>\n    </div>\n\n    <div class=\"evo-sidebar__footer\"><ng-content select=\"[footer]\"></ng-content></div> <!--\u0447\u0442\u043E\u0431\u044B :empty \u0440\u0430\u0431\u043E\u0442\u0430\u043B, \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438 evo-sidebar__footer \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0438\u0447\u0435\u0433\u043E, \u0434\u0430\u0436\u0435 \u043F\u0440\u043E\u0431\u0435\u043B\u0430-->\n</div>\n",
                    },] },
        ];
        /** @nocollapse */
        EvoSidebarComponent.ctorParameters = function () {
            return [
                { type: EvoSidebarService }
            ];
        };
        EvoSidebarComponent.propDecorators = {
            id: [{ type: core.Input }],
            title: [{ type: core.Input }],
            onClose: [{ type: core.Output }]
        };
        return EvoSidebarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EvoRadioGroupComponent = (function (_super) {
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
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'evo-radio-group',
                        template: "<div class=\"evo-radio-group\" [formGroup]=\"formGroup\">\n    <label class=\"evo-radio-group__radio\" *ngFor=\"let option of optionArray\">\n        <!-- \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0441\u0442\u0438\u043B\u0435\u0439 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0441\u0435\u0432\u0434\u043E\u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u0430 :checked -->\n        <input class=\"evo-radio-group__radio-control\" (ngModelChange) = \"onChangedValue($event)\" formControlName=\"value\" type=\"radio\" value={{option.value}}>\n        <div class=\"evo-radio-group__radio-view\">\n            <span class=\"evo-radio-group__radio-icon\"></span>\n            <span class=\"evo-radio-group__radio-value\">{{option.presentationText}}</span>\n        </div>\n    </label>\n</div>",
                        styles: [".evo-radio-group{display:flex}.evo-radio-group__radio{flex:1;margin-right:30px;cursor:pointer}.evo-radio-group__radio:last-child{margin-right:0}.evo-radio-group__radio-control{display:none}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view{background-color:rgba(68,138,255,.05);border-color:#448aff}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view .evo-radio-group__radio-icon:before{display:block}.evo-radio-group__radio-view{display:flex;padding:20px;border:1px solid #dbdbdb;border-radius:8px}.evo-radio-group__radio-icon{position:relative;display:inline-block;flex-shrink:0;width:20px;height:20px;margin-right:20px;background-color:#fff;border:1px solid #dedede;border-radius:50%}.evo-radio-group__radio-icon:before{position:absolute;top:50%;left:50%;display:none;width:10px;height:10px;content:'';margin-top:-5px;margin-left:-5px;background-color:#448aff;border:1px solid #2869d7;border-radius:50%}.evo-radio-group__radio-value{color:#000;font-size:16px}"],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return EvoRadioGroupComponent; }),
                                multi: true,
                            },
                        ],
                    },] },
        ];
        /** @nocollapse */
        EvoRadioGroupComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        EvoRadioGroupComponent.propDecorators = {
            options: [{ type: core.Input }],
            _value: [{ type: core.Input, args: ['value',] }]
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
    var EvoAutoCompleteComponent = (function (_super) {
        __extends(EvoAutoCompleteComponent, _super);
        function EvoAutoCompleteComponent(http$$1, elementRef) {
            var _this = _super.call(this) || this;
            _this.http = http$$1;
            _this.elementRef = elementRef;
            _this.disabled = false;
            _this.input = new forms.FormControl();
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
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                var /** @type {?} */ headers = new http.HttpHeaders()
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
            { type: core.Component, args: [{
                        selector: 'evo-auto-complete',
                        template: "<div class=\"evo-auto-complete\">\n    <div class=\"evo-auto-complete__input-wrapper\">\n        <evo-input (blur)=\"onTouched()\"\n                   [state]=\"currentState\"\n                   [formControl]=\"input\"></evo-input>\n    </div>\n    <div class=\"evo-auto-complete__suggestions\" *ngIf=\"suggestions && suggestions.length && !disabled\">\n        <ng-container *ngFor=\"let suggestion of suggestions\" >\n            <div class=\"evo-auto-complete__party\" *ngIf=\"getSuggestionDataString(suggestion)\" (click)=\"handleSuggestionClick($event, suggestion)\">\n                <p class=\"evo-auto-complete__text-line\" [attr.title]=\"suggestion.value\">{{ suggestion.value }}</p>\n                <p class=\"evo-auto-complete__text-line\" [attr.title]=\"getSuggestionDataString(suggestion)\">{{ getSuggestionDataString(suggestion) }}</p>\n            </div>\n        </ng-container>\n    </div>\n</div>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                        styles: [".evo-auto-complete{position:relative}.evo-auto-complete__input-wrapper{position:relative;z-index:2}.evo-auto-complete__suggestions{position:absolute;z-index:1;width:100%;overflow:hidden;background-color:#fff;border-radius:4px;box-shadow:0 0 12px 4px rgba(0,0,0,.2)}.evo-auto-complete__party{display:flex;flex-direction:column;justify-content:center;height:48px;padding:5px 20px;background-color:#fff;cursor:pointer}.evo-auto-complete__party:hover{color:#fff;background-color:#ff7800}.evo-auto-complete__text-line{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return EvoAutoCompleteComponent; }),
                                multi: true,
                            },
                        ],
                    },] },
        ];
        /** @nocollapse */
        EvoAutoCompleteComponent.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: core.ElementRef }
            ];
        };
        EvoAutoCompleteComponent.propDecorators = {
            type: [{ type: core.Input }],
            handleDocumentClick: [{ type: core.HostListener, args: ['document:click', ['$event'],] }]
        };
        return EvoAutoCompleteComponent;
    }(EvoBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EvoControlLabelComponent = (function () {
        function EvoControlLabelComponent() {
        }
        EvoControlLabelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'evo-control-label',
                        template: "<div class=\"evo-control-label\">\n    <label class=\"evo-control-label__text\">{{ label }}</label>\n    <ng-content></ng-content>\n</div>\n",
                        styles: [".evo-control-label{margin-bottom:20px}.evo-control-label__text{margin-bottom:11px;color:#9b9b9b;font-size:14px;line-height:16px}"],
                    },] },
        ];
        EvoControlLabelComponent.propDecorators = {
            label: [{ type: core.Input }]
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
    var EvoUiClassDirective = (function (_super) {
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
             */ function (data) {
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
            { type: core.Directive, args: [{
                        selector: '[evoUiClass]',
                    },] },
        ];
        /** @nocollapse */
        EvoUiClassDirective.ctorParameters = function () {
            return [
                { type: core.IterableDiffers },
                { type: core.KeyValueDiffers },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        EvoUiClassDirective.propDecorators = {
            setterOfClass: [{ type: core.Input, args: ['evoUiClass',] }]
        };
        return EvoUiClassDirective;
    }(common.NgClass));

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
    var EvoUiKitModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular2TextMask.TextMaskModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: __spread(bundle),
                        exports: __spread(bundle),
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
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

    exports.EvoSidebarService = EvoSidebarService;
    exports.EvoUiKitModule = EvoUiKitModule;
    exports.ɵc = EvoBaseControl;
    exports.ɵh = EvoAutoCompleteComponent;
    exports.ɵf = EvoBannerComponent;
    exports.ɵa = EvoButtonComponent;
    exports.ɵb = EvoCheckboxComponent;
    exports.ɵd = EvoControlErrorComponent;
    exports.ɵi = EvoControlLabelComponent;
    exports.ɵe = EvoInputComponent;
    exports.ɵj = EvoRadioGroupComponent;
    exports.ɵg = EvoSidebarComponent;
    exports.ɵk = EvoUiClassDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vU2VyaWFsaXphYmxlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuc2VydmljZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXJhZGlvLWdyb3VwL2V2by1yYWRpby1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWF1dG8tY29tcGxldGUvZXZvLWF1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jb250cm9sLWxhYmVsL2V2by1jb250cm9sLWxhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9ldm8tdWkta2l0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU2l6ZXMge1xuICAgIHNtYWxsID0gJ3NtYWxsJyxcbiAgICBsYXJnZSA9ICdsYXJnZScsXG59XG5cbmV4cG9ydCBlbnVtIEV2b0J1dHRvblN0eWxlcyB7XG4gICAgbGluZWQgPSAnbGluZWQnLFxuICAgIGRhcmtibHVlID0gJ2RhcmtibHVlJyxcbiAgICBkYXJrYmx1ZUxpbmVkID0gJ2RhcmtibHVlLWxpbmVkJyxcbiAgICBncmVlbiA9ICdncmVlbicsXG4gICAgZ3JlZW5saW5lZCA9ICdncmVlbi1saW5lZCcsXG4gICAgcHVycGxlID0gJ3B1cnBsZScsXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWJ1dHRvbiwgYnV0dG9uW2V2by1idXR0b25dJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tYnV0dG9uXCIgW2V2b1VpQ2xhc3NdPVwidG90YWxDbGFzc2VzXCI+XG4gICAgPHNwYW4gW25nU3R5bGVdPVwidG90YWxTdHlsZXNcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cImV2by1idXR0b25fX2RvdHNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYEAtd2Via2l0LWtleWZyYW1lcyBmeHs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19QGtleWZyYW1lcyBmeHs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjA7cGFkZGluZzowO3ZlcnRpY2FsLWFsaWduOnRvcDtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MDtvdXRsaW5lOjB9LmV2by1idXR0b257bWluLXdpZHRoOjEwMHB4O2hlaWdodDo0NHB4O3BhZGRpbmc6MCAzMHB4O2NvbG9yOiNmZmY7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtZmFtaWx5Ok11c2VvU2Fuc0N5cmwsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDo0NHB4O3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dmVydGljYWwtYWxpZ246bWlkZGxlO2JhY2tncm91bmQ6I2ZmNzgwMDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjMwcHg7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3MsY29sb3IgLjNzLGJvcmRlciAuM3M7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5ldm8tYnV0dG9uOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZmY5ZDQ3fS5ldm8tYnV0dG9uOmFjdGl2ZSwuZXZvLWJ1dHRvbjpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2NjNjAwMDtvdXRsaW5lOjB9LmV2by1idXR0b246ZGlzYWJsZWQsLmV2by1idXR0b25fZGlzYWJsZWR7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZDojZDZkNmQ2IWltcG9ydGFudDtib3JkZXItY29sb3I6I2Q2ZDZkNiFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX0uZXZvLWJ1dHRvbl9saW5lZHtjb2xvcjojZmY3ODAwO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNmZjc4MDB9LmV2by1idXR0b25fbGluZWQ6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4MDB9LmV2by1idXR0b25fbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2xpbmVkOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojY2M2MDAwO2JvcmRlci1jb2xvcjojY2M2MDAwfS5ldm8tYnV0dG9uX2RhcmtibHVle2JhY2tncm91bmQtY29sb3I6IzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM3NTk2YTV9LmV2by1idXR0b25fZGFya2JsdWU6YWN0aXZlLC5ldm8tYnV0dG9uX2RhcmtibHVlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzI4MzIzOX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZHtjb2xvcjojNTQ2ZTdhO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICM1NDZlN2F9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1NDZlN2F9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjgzMjM5O2JvcmRlci1jb2xvcjojMjgzMjM5fS5ldm8tYnV0dG9uX2dyZWVue2JhY2tncm91bmQtY29sb3I6IzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNhMmNmNmV9LmV2by1idXR0b25fZ3JlZW46YWN0aXZlLC5ldm8tYnV0dG9uX2dyZWVuOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzZmOWMzYn0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZHtjb2xvcjojOGJjMzRhO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICM4YmMzNGF9LmV2by1idXR0b25fZ3JlZW4tbGluZWQ6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM4YmMzNGF9LmV2by1idXR0b25fZ3JlZW4tbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNmY5YzNiO2JvcmRlci1jb2xvcjojNmY5YzNifS5ldm8tYnV0dG9uX3B1cnBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNhYjRhYzN9LmV2by1idXR0b25fcHVycGxlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2NjNThlOH0uZXZvLWJ1dHRvbl9wdXJwbGU6YWN0aXZlLC5ldm8tYnV0dG9uX3B1cnBsZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM5MzM1YWJ9LmV2by1idXR0b25fc21hbGx7bWluLXdpZHRoOjc1cHg7aGVpZ2h0OjMwcHg7cGFkZGluZzowIDIwcHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MzBweH0uZXZvLWJ1dHRvbl9sYXJnZXttaW4td2lkdGg6MTI1cHg7aGVpZ2h0OjYwcHg7cGFkZGluZzowIDQwcHg7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6NjBweH0uZXZvLWJ1dHRvbl9pY29ue2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MjJweH0uZXZvLWJ1dHRvbl9sb2FkaW5ne3Bvc2l0aW9uOnJlbGF0aXZlO3BvaW50ZXItZXZlbnRzOm5vbmV9LmV2by1idXR0b25fX2RvdHN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW4tdG9wOi01cHg7bWFyZ2luLWxlZnQ6LTMwcHh9LmV2by1idXR0b25fX2RvdHtmbG9hdDpsZWZ0O3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7bWFyZ2luOjAgNXB4O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO2JvcmRlci1yYWRpdXM6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LWFuaW1hdGlvbjoxcyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgaW5maW5pdGUgZnh9LmV2by1idXR0b25fX2RvdDpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb246MXMgLjNzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyAuM3MgaW5maW5pdGUgZnh9LmV2by1idXR0b25fX2RvdDpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb246MXMgLjZzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyAuNnMgaW5maW5pdGUgZnh9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEV2b0J1dHRvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY29sb3I6IEV2b0J1dHRvblN0eWxlcztcbiAgICBASW5wdXQoKSBzaXplOiBFdm9CdXR0b25TaXplcztcbiAgICBASW5wdXQoKSBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIXRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQElucHV0KCkgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICAgIH1cblxuICAgIGdldCB0b3RhbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBjbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnbG9hZGluZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGdldCB0b3RhbFN0eWxlcygpOiB7W3N0eWxlS2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgcmVzdWx0Wyd2aXNpYmlsaXR5J10gPSAnaGlkZGVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gRXZvQ29udHJvbFN0YXRlcyB7XG4gICAgdmFsaWQgPSAndmFsaWQnLFxuICAgIGludmFsaWQgPSAnaW52YWxpZCcsXG59XG4iLCJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJRXZvQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJRXZvQ29udHJvbEVycm9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5cbmV4cG9ydCBjbGFzcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lKSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZTtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbERpcmVjdGl2ZSkgZm9ybUNvbnRyb2xEaXJlY3RpdmU6IEZvcm1Db250cm9sRGlyZWN0aXZlO1xuXG4gIEBJbnB1dCgpIGVycm9yc01lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yO1xuICBASW5wdXQoKSBzdGF0ZTogSUV2b0NvbnRyb2xTdGF0ZTtcblxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZSAmJiB0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY29udHJvbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB0ZW1wbGF0ZSBkcml2ZW4gZm9ybXMgYWxsb3dlZCB3aXRoIEV2b1VpIGtpdCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjdXJyZW50U3RhdGUoKTogSUV2b0NvbnRyb2xTdGF0ZSB7XG4gICAgY29uc3QgZGVmYXVsdFN0YXRlOiBJRXZvQ29udHJvbFN0YXRlID0ge1xuICAgICAgdmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wudmFsaWQsXG4gICAgICBpbnZhbGlkOiB0aGlzLmNvbnRyb2wuZGlydHkgJiYgdGhpcy5jb250cm9sLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sLmludmFsaWQsXG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZmF1bHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBnZXQgc2hvd0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgPGxhYmVsIGNsYXNzPVwiZXZvLWNoZWNrYm94XCI+XG4gICAgPGlucHV0IGNsYXNzPVwiZXZvLWNoZWNrYm94X19pbnB1dFwiXG4gICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgIFtldm9VaUNsYXNzXT1cImNoZWNrYm94Q2xhc3NcIlxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJldm8tY2hlY2tib3hfX3RleHRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbjwvbGFiZWw+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1jaGVja2JveHttYXJnaW46MH0uZXZvLWNoZWNrYm94X19pbnB1dHtkaXNwbGF5Om5vbmV9LmV2by1jaGVja2JveF9fdGV4dHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLWxlZnQ6MjZweDtjb2xvcjojMjEyMTIxO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoycHg7bGVmdDowO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjNweH1pbnB1dDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JhY2tncm91bmQ6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQyUzRnhtbCB2ZXJzaW9uJTNEJTIyMS4wJTIyIGVuY29kaW5nJTNEJTIydXRmLTglMjIlM0YlM0UlM0NzdmcgdmVyc2lvbiUzRCUyMjEuMSUyMiBpZCUzRCUyMiVEMCVBMSVEMCVCQiVEMCVCRSVEMCVCOV8xJTIyIHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyIHhtbG5zJTNBeGxpbmslM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGluayUyMiB4JTNEJTIyMHB4JTIyIHklM0QlMjIwcHglMjIlMDkgd2lkdGglM0QlMjIxMHB4JTIyIGhlaWdodCUzRCUyMjdweCUyMiB2aWV3Qm94JTNEJTIyMCAwIDEwIDclMjIgZW5hYmxlLWJhY2tncm91bmQlM0QlMjJuZXcgMCAwIDEwIDclMjIgeG1sJTNBc3BhY2UlM0QlMjJwcmVzZXJ2ZSUyMiUzRSUzQ3BhdGggaWQlM0QlMjJwYXRoMF9maWxsJTIyIGZpbGwlM0QlMjIlMjNGRkZGRkYlMjIgZCUzRCUyMk05LjclMkMwLjNjMC40JTJDMC40JTJDMC40JTJDMSUyQzAlMkMxLjRsLTUlMkM1QzQuNCUyQzclMkMzLjklMkM3LjElMkMzLjUlMkM2LjljLTAuMiUyQzAtMC4zLTAuMS0wLjQtMC4zTDAuMyUyQzMuOCUwOWMtMC40LTAuNC0wLjQtMSUyQzAtMS40YzAuNC0wLjQlMkMxLTAuNCUyQzEuNCUyQzBsMi4yJTJDMi4ybDQuMy00LjNDOC42LTAuMSUyQzkuMy0wLjElMkM5LjclMkMwLjN6JTIyJTJGJTNFJTNDJTJGc3ZnJTNFXCIpIGNlbnRlciBuby1yZXBlYXQgIzQ0OGFmZjtib3JkZXItY29sb3I6IzQ0OGFmZn1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpKy5ldm8tY2hlY2tib3hfX3RleHR7Y3Vyc29yOmRlZmF1bHR9aW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjZ9aW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0e2N1cnNvcjpkZWZhdWx0fWlucHV0OmRpc2FibGVkOmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7b3BhY2l0eTouNX1pbnB1dC5ldm8tY2hlY2tib3hfaW52YWxpZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtib3JkZXItY29sb3I6I2YyMn1gXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9DaGVja2JveENvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9DaGVja2JveENvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlOiBib29sZWFuO1xuXG4gIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBjaGVja2JveENsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnaW52YWxpZCc6IHRoaXMuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF0sXG4gICAgfTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRXZvQ29udHJvbEVycm9yIHtcbiAgICBbZXJyb3I6IHN0cmluZ106IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tY29udHJvbC1lcnJvcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWVycm9yXCIgKm5nRm9yPVwibGV0IGVycm9yTXNnIG9mIGVycm9yc01hcDsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICA8c3BhbiAqbmdJZj1cInNob3dFcnJvcihpKVwiPnt7IGVycm9yTXNnIH19PC9zcGFuPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWVycm9ye21hcmdpbi10b3A6MTBweDtjb2xvcjojZjIyO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtc3R5bGU6aXRhbGljfWBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9Db250cm9sRXJyb3JDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGVycm9yczogYW55O1xuICAgIEBJbnB1dCgpIGVycm9yc01lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yO1xuICAgIEBJbnB1dCgpIHNob3dDb3VudCA9IDE7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRFcnJvck1lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yID0ge1xuICAgICAgICByZXF1aXJlZDogJ8OQwpfDkMKww5DCv8OQwr7DkMK7w5DCvcOQwrjDkcKCw5DCtSDDkMK/w5DCvsOQwrvDkMK1JyxcbiAgICAgICAgZW1haWw6ICfDkMKdw5DCtcOQwr/DkcKAw5DCsMOQwrLDkMK4w5DCu8ORwozDkMK9w5DCviDDkcKDw5DCusOQwrDDkMK3w5DCsMOQwr3DkMKwIMOQwr/DkMK+w5HCh8ORwoLDkMKwJyxcbiAgICAgICAgcGhvbmU6ICfDkMKSw5DCssOQwrXDkMK0w5DCuMORwoLDkMK1IMORwoLDkMK1w5DCu8OQwrXDkcKEw5DCvsOQwr0nLFxuICAgIH07XG5cbiAgICBnZXQgZXJyb3JzTWFwKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEVycm9yTWVzc2FnZXMsXG4gICAgICAgICAgICAuLi4odGhpcy5lcnJvcnNNZXNzYWdlcyB8fCB7fSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzIHx8IHt9KTtcbiAgICAgICAgcmV0dXJuIGVycm9yS2V5cy5tYXAoKGtleSkgPT4gZXJyb3JNZXNzYWdlc1trZXldKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKytpbmRleCA8PSB0aGlzLnNob3dDb3VudDtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0nO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1pbnB1dFwiIFtldm9VaUNsYXNzXT1cImlucHV0Q2xhc3NcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJldm8taW5wdXRfX2NvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgICAgICAqbmdJZj1cIiFtYXNrXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X19maWVsZFwiXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ7eyB0eXBlIH19XCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgcGxhY2Vob2xkZXIgfX1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGlucHV0ICNpbnB1dFxuICAgICAgICAgICAgICAgKm5nSWY9XCJtYXNrXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X19maWVsZFwiXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ7eyB0eXBlIH19XCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgcGxhY2Vob2xkZXIgfX1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICBbdGV4dE1hc2tdPVwibWFza1wiXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1pbnB1dF9fYWRkaXRpb25hbFwiXG4gICAgICAgICAgICAgKm5nSWY9XCJoYXNBZGRpdGlvbmFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0X190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0b29sdGlwIHx8IGhhc0N1c3RvbVRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzaG93VG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaGlkZVRvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJvblRvb2x0aXBDbGljaygkZXZlbnQpXCI+PzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFjdXN0b21Ub29sdGlwQ2hlY2tlZCB8fCB0b29sdGlwU2hvd25cIlxuICAgICAgICAgICAgIFtoaWRkZW5dPVwiIWN1c3RvbVRvb2x0aXBDaGVja2VkXCJcbiAgICAgICAgICAgICAoY2xpY2spPVwib25Ub29sdGlwQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2hvd1Rvb2x0aXAoKVwiXG4gICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaGlkZVRvb2x0aXAoKVwiXG4gICAgICAgICAgICAgI3Rvb2x0aXBDb250YWluZXJcbiAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2V2by1pbnB1dF9fdG9vbHRpcC1jb250YWluZXInOiB0b29sdGlwfVwiPlxuICAgICAgICAgICAge3sgdG9vbHRpcCB9fVxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Rvb2x0aXBdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgc3R5bGVzOiBbYC5ldm8taW5wdXR7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDt3aGl0ZS1zcGFjZTpub3dyYXA7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czo0cHg7b3V0bGluZTowO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3MsYm9yZGVyIC4zc30uZXZvLWlucHV0X19jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO2JvcmRlci1yYWRpdXM6NHB4O2N1cnNvcjp0ZXh0fS5ldm8taW5wdXRfZm9jdXNlZHtib3JkZXI6MXB4IHNvbGlkICM1NDZlN2E7Ym94LXNoYWRvdzowIDAgMnB4IDAgIzU0NmU3YSFpbXBvcnRhbnR9LmV2by1pbnB1dF9kaXNhYmxlZHtjb2xvcjojOWI5YjliO2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNiFpbXBvcnRhbnR9LmV2by1pbnB1dF9kaXNhYmxlZCAuZXZvLWlucHV0X19jb250YWluZXJ7Y3Vyc29yOmRlZmF1bHR9LmV2by1pbnB1dF92YWxpZHtib3JkZXItY29sb3I6IzhiYzM0YX0uZXZvLWlucHV0X2ludmFsaWR7Ym9yZGVyLWNvbG9yOiNmMjJ9LmV2by1pbnB1dF9fZmllbGR7ZmxleC1ncm93OjE7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjAgMjBweDtjb2xvcjojMDAwO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTZweDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjRweDtvdXRsaW5lOjB9LmV2by1pbnB1dF9fZmllbGQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X19maWVsZDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjliO29wYWNpdHk6MX0uZXZvLWlucHV0X19maWVsZDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X19maWVsZDpkaXNhYmxlZHtjb2xvcjojOWI5YjliO2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNiFpbXBvcnRhbnR9LmV2by1pbnB1dF9fZmllbGQ6bm90KDpsYXN0LWNoaWxkKXtwYWRkaW5nLXJpZ2h0OjB9LmV2by1pbnB1dF9fdG9vbHRpcHstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW46MCAxMHB4O2NvbG9yOiM1NDZlN2E7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxOHB4O2ZvbnQtZmFtaWx5Ok9wZW5TYW5zLEFyaWFsLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MjRweDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiNlY2VmZjE7Ym9yZGVyLXJhZGl1czo1MCU7Y3Vyc29yOnBvaW50ZXJ9LmV2by1pbnB1dF9fdG9vbHRpcC1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOmNhbGMoMTAwJSAtIDJweCk7bGVmdDowO3otaW5kZXg6MTtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtwYWRkaW5nOjEwcHggMTBweCAxMHB4IDIwcHg7Y29sb3I6IzIxMjEyMTtsaW5lLWhlaWdodDpub3JtYWw7d2hpdGUtc3BhY2U6bm9ybWFsO2JhY2tncm91bmQtY29sb3I6I2ZmZjhlNjtib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OjAgNHB4IDEycHggMCByZ2JhKDAsMCwwLC4yKTtjdXJzb3I6ZGVmYXVsdH0uZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcltoaWRkZW5de2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmV2by1pbnB1dF9fdG9vbHRpcC1jb250YWluZXI6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjBweDtsZWZ0OmNhbGMoMTAwJSAtIDM0cHgpO2JvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjZmZmOGU2O3BvaW50ZXItZXZlbnRzOm5vbmU7Y29udGVudDonJ31AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5ldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVye2xlZnQ6Y2FsYyg1MCUgLSAyMnB4KX0uZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yMHB4O2xlZnQ6Y2FsYyg1MCUgLSAxMnB4KTtib3JkZXI6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2ZmZjhlNjtjb250ZW50OicnfX1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9JbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9JbnB1dENvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBhdXRvRm9jdXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1hc2s6IGFueTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICBASW5wdXQoJ3ZhbHVlJykgX3ZhbHVlOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dEVsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBDb250YWluZXInKSB0b29sdGlwRWxlbWVudDtcblxuICBjdXN0b21Ub29sdGlwQ2hlY2tlZCA9IGZhbHNlO1xuICBoYXNDdXN0b21Ub29sdGlwID0gZmFsc2U7XG4gIHRvb2x0aXBTaG93biA9IGZhbHNlO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIHByaXZhdGUgdG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAodmFsdWUpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0N1c3RvbVRvb2x0aXAoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlIHx8IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlucHV0Q2xhc3MoKToge1tjc3NDbGFzczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIHJldHVybiB7XG4gICAgICAnZm9jdXNlZCc6IHRoaXMuZm9jdXNlZCxcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAndmFsaWQnOiB0aGlzLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLnZhbGlkXSxcbiAgICAgICdpbnZhbGlkJzogdGhpcy5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGhhc0FkZGl0aW9uYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy50b29sdGlwIHx8IHRoaXMuaGFzQ3VzdG9tVG9vbHRpcDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gIH1cblxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KCk7XG4gIH1cblxuICBvblRvb2x0aXBDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGhpZGVUb29sdGlwKCkge1xuICAgIHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFNob3duID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgMjUpO1xuICB9XG5cbiAgc2hvd1Rvb2x0aXAoKSB7XG4gICAgdGhpcy50b29sdGlwU2hvd24gPSB0cnVlO1xuICAgIHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ3VzdG9tVG9vbHRpcCgpIHtcbiAgICB0aGlzLmhhc0N1c3RvbVRvb2x0aXAgPSB0aGlzLnRvb2x0aXBFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgdGhpcy50b29sdGlwRWxlbWVudC5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgdGhpcy50b29sdGlwRWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5jdXN0b21Ub29sdGlwQ2hlY2tlZCA9IHRydWU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9TZXJpYWxpemFibGUnO1xuXG5leHBvcnQgZW51bSBFdm9CYW5uZXJUeXBlcyB7XG4gIGxhcmdlID0gJ2xhcmdlJyxcbiAgc21hbGwgPSAnc21hbGwnLFxuICBmdWxsV2lkdGggPSAnZnVsbC13aWR0aCcsXG59XG5cbmV4cG9ydCBlbnVtIEV2b0Jhbm5lckxvY2F0aW9ucyB7XG4gIG1haW4gPSAnTWFpbicsXG4gIGNhdGVnb3J5ID0gJ0NhdGVnb3J5Jyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRXZvQmFubmVyQW5hbHl0aWNzIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGRhdGE6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjcmVhdGl2ZTogc3RyaW5nO1xuICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgZGltZW5zaW9uNz86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEV2b0Jhbm5lciBleHRlbmRzIFNlcmlhbGl6YWJsZSB7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgYmFubmVyUG9zaXRpb25OYW1lcyA9IHtcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLm1haW5dOiBbXG4gICAgICAnbWFpbicsXG4gICAgICAndG9wJyxcbiAgICAgICdib3R0b20nLFxuICAgIF0sXG4gICAgW0V2b0Jhbm5lckxvY2F0aW9ucy5jYXRlZ29yeV06IFtcbiAgICAgICdtYWluJyxcbiAgICBdLFxuICB9O1xuICBidXR0b246IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1iYW5uZXInLFxuICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwiZXZvLWJhbm5lclwiXG4gICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgW2F0dHIuaHJlZl09XCJiYW5uZXI/LnVybFwiXG4gICAoY2xpY2spPVwib25CYW5uZXJDbGljaygpXCJcbiAgIFtldm9VaUNsYXNzXT1cInR5cGVcIlxuICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX190aXRsZVwiPnt7IGJhbm5lcj8udGl0bGUgfX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2hpdGUgcHJvbW8tYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJiYW5uZXI/LmJ1dHRvblwiPnt7IGJhbm5lcj8uYnV0dG9uIH19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGltZyBjbGFzcz1cImV2by1iYW5uZXJfX2ltZ1wiXG4gICAgICAgICBzcmM9XCJ7eyBiYW5uZXI/LmltYWdlIH19XCJcbiAgICAgICAgIGFsdD1cInt7IGJhbm5lcj8udGl0bGUgfX1cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2AuZXZvLWJhbm5lcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2hlaWdodDo0MzBweDtwYWRkaW5nOjEycHggMjBweDtvdmVyZmxvdzpoaWRkZW47Y29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjZweDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzfS5ldm8tYmFubmVyOmhvdmVye2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4yKX0uZXZvLWJhbm5lcl9fY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLmJ0bntwYWRkaW5nOjdweCAzMHB4fS5ldm8tYmFubmVyX19jb250ZW50IC5idG4td2hpdGV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y29sb3I6I2ZmNzgwMDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE2cHg7dGV4dC10cmFuc2Zvcm06bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoyNHB4fS5ldm8tYmFubmVyX19jb250ZW50IC5idG4td2hpdGU6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNlNTU1MjZ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLmJ0bi13aGl0ZTpob3ZlcjpiZWZvcmV7ZGlzcGxheTpub25lfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG57ZGlzcGxheTp0YWJsZS1jZWxsO21pbi13aWR0aDoxNTZweDtoZWlnaHQ6NDBweDtwYWRkaW5nOjAgMjBweDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuOmhvdmVye2JhY2tncm91bmQ6I2ZmZn0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuOmFjdGl2ZXtib3gtc2hhZG93Om5vbmV9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0biBzcGFue2ZvbnQtc2l6ZToxOHB4fS5ldm8tYmFubmVyX190aXRsZXttYXJnaW4tYm90dG9tOjEwcHg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZTozMHB4O2ZvbnQtZmFtaWx5Ok11c2VvU2Fuc0N5cmwsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjN9LmV2by1iYW5uZXJfX2Rlc2NyaXB0aW9ue21hcmdpbi10b3A6MjBweDttYXJnaW4tYm90dG9tOjEwcHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS4zfS5ldm8tYmFubmVyX19pbWd7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MDt3aWR0aDoyOTBweDtoZWlnaHQ6MjkwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aHtwYWRkaW5nOjIwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7bGluZS1oZWlnaHQ6MzhweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1iYW5uZXJ7cGFkZGluZzozMHB4IDQwcHh9LmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYwJX0uZXZvLWJhbm5lcl9fZGVzY3JpcHRpb257bWF4LXdpZHRoOjI1MHB4fS5ldm8tYmFubmVyX19pbWd7d2lkdGg6NDMwcHg7aGVpZ2h0OjQzMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGh7aGVpZ2h0OjI0MHB4O3BhZGRpbmc6MzBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo1MCV9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1zaXplOjM2cHg7bGluZS1oZWlnaHQ6NDRweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19pbWd7d2lkdGg6MjQwcHg7aGVpZ2h0OjI0MHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5ldm8tYmFubmVye3BhZGRpbmc6MzBweCA0MHB4fS5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MyV9LmV2by1iYW5uZXJfc21hbGx7aGVpZ2h0OjIxMHB4O3BhZGRpbmc6MjBweH0uZXZvLWJhbm5lcl9zbWFsbCAuZXZvLWJhbm5lcl9fdGl0bGV7bWFyZ2luLWJvdHRvbToyMHB4O2ZvbnQtc2l6ZToyMHB4fS5ldm8tYmFubmVyX3NtYWxsIC5wcm9tby1idG57aGVpZ2h0OjMycHh9LmV2by1iYW5uZXJfc21hbGwgLmV2by1iYW5uZXJfX2ltZ3t3aWR0aDoyMTBweDtoZWlnaHQ6MjEwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjMlfX1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiAnV2luZG93JywgIHVzZVZhbHVlOiB3aW5kb3cgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQmFubmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYmFubmVyOiBFdm9CYW5uZXI7XG4gIEBJbnB1dCgpIHR5cGU6IEV2b0Jhbm5lclR5cGVzID0gRXZvQmFubmVyVHlwZXMuc21hbGw7XG5cbiAgQE91dHB1dCgpIGJhbm5lckNsaWNrOiBFdmVudEVtaXR0ZXI8RXZvQmFubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZvQmFubmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ1dpbmRvdycpIHByaXZhdGUgd2luZG93OiBhbnksXG4gICkge1xuICB9XG5cbiAgb25CYW5uZXJDbGljaygpIHtcbiAgICB0aGlzLmJhbm5lckNsaWNrLmVtaXQodGhpcy5iYW5uZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gRXZvU2lkZWJhclR5cGVzIHtcbiAgICBiYXNrZXQgPSAnYmFza2V0JyxcbiAgICBwYXJ0bmVyQXV0aCA9ICdwYXJ0bmVyQXV0aCcsXG4gICAgcHJvbW9Db2RlID0gJ3Byb21vQ29kZScsXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdm9TaWRlYmFyU2VydmljZSB7XG4gICAgaXNTaWRlYmFyVmlzaWJsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRTaWRlYmFycyA9IHt9O1xuXG4gICAgZGVyZWdpc3RlcihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICBpZiAoIShpZCBpbiBFdm9TaWRlYmFyVHlwZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTaWRlYmFyLiBVbmtub3duICcke2lkfScsIHBsZWFzZSBhZGQgdGhpcyBpZCBpbiBlbnVtYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlbihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNTaWRlYmFyVmlzaWJsZSQubmV4dCh0aGlzLnJlZ2lzdGVyZWRTaWRlYmFycyk7XG4gICAgfVxuXG4gICAgY2xvc2UoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NpZGViYXJWaXNpYmxlJC5uZXh0KHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IGFzIG9ic2VydmFibGVGcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEtleSB9IGZyb20gJ3RzLWtleWNvZGUtZW51bSc7XG5cbmltcG9ydCB7IEV2b1NpZGViYXJTZXJ2aWNlLCBFdm9TaWRlYmFyVHlwZXMgfSBmcm9tICcuL2V2by1zaWRlYmFyLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLXNpZGViYXInLFxuICAgIHN0eWxlczogW2AuZXZvLXNpZGViYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDoxMjAlO3otaW5kZXg6MzAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaGFkb3c6MCAwIDEycHggcmdiYSgwLDAsMCwuMjUpfUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJ7bGVmdDoxMDAlO3dpZHRoOjY3NHB4O21hcmdpbi1sZWZ0OjQwcHg7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuNXM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzO3RyYW5zaXRpb246dHJhbnNmb3JtIC41cywtd2Via2l0LXRyYW5zZm9ybSAuNXN9fS5ldm8tc2lkZWJhcl9hY3RpdmV7bGVmdDowfS5ldm8tc2lkZWJhcl9faGVhZGVye2Rpc3BsYXk6ZmxleDtmbGV4LXNocmluazowO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7bWFyZ2luOjAgMTVweDtwYWRkaW5nOjIwcHggMCA4cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VjZWZmMX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19oZWFkZXJ7cGFkZGluZy10b3A6MzhweH19LmV2by1zaWRlYmFyX190aXRsZXtjb2xvcjojMzMzZjQ4O2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MjRweDtmb250LWZhbWlseTpNdXNlb1NhbnNDeXJsLEFyaWFsLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MzJweH1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX2FjdGl2ZXtsZWZ0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNzE0cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC03MTRweCl9LmV2by1zaWRlYmFyX19oZWFkZXJ7bWFyZ2luOjAgMzBweH0uZXZvLXNpZGViYXJfX3RpdGxle2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjM4cHh9fS5ldm8tc2lkZWJhcl9fY2xvc2V7bWFyZ2luOi00cHggMCAtMnB4IDIwcHg7cGFkZGluZzo4cHg7Y29sb3I6IzU0NmU3YTtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzfS5ldm8tc2lkZWJhcl9fY2xvc2U6aG92ZXJ7b3BhY2l0eTouOH0uZXZvLXNpZGViYXJfX2Nsb3NlIHN2Z3t2ZXJ0aWNhbC1hbGlnbjp0b3B9LmV2by1zaWRlYmFyX19jb250ZW50e2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzoyMHB4IDE1cHggNDBweDtvdmVyZmxvdy15OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9fY29udGVudHtwYWRkaW5nOjQwcHggMTVweH19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcl9fY2xvc2V7bWFyZ2luOjJweCAwIDAgMzBweH0uZXZvLXNpZGViYXJfX2NvbnRlbnR7cGFkZGluZzo0MHB4IDMwcHh9fS5ldm8tc2lkZWJhcl9fZm9vdGVye2Rpc3BsYXk6ZmxleDtmbGV4LXNocmluazowO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOjMwcHggMTVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMCwwLDAsLjI1KX0uZXZvLXNpZGViYXJfX2Zvb3RlcjplbXB0eXtkaXNwbGF5Om5vbmV9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9fZm9vdGVye2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nOjE4cHggMTVweH19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcl9fZm9vdGVye3BhZGRpbmc6MThweCAzMHB4fX0uZXZvLXNpZGViYXJfX2J1dHRvbnN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOjMwcHggMCAxMHB4fS5ldm8tc2lkZWJhcl9fYnV0dG9uc19ib3JkZXJ7bWFyZ2luLXRvcDo1MHB4O2JvcmRlci10b3A6MXB4IHNvbGlkICNlY2VmZjF9LmV2by1zaWRlYmFyX19idXR0b24rLmV2by1zaWRlYmFyX19idXR0b257bWFyZ2luLXRvcDoyMHB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2J1dHRvbnN7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmctYm90dG9tOjB9LmV2by1zaWRlYmFyX19idXR0b24rLmV2by1zaWRlYmFyX19idXR0b257bWFyZ2luLXRvcDowfX1gXSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmYWRlLWJhY2tncm91bmQgZmFkZS1iYWNrZ3JvdW5kX292ZXItYWxsXCJcbiAgICAgKm5nSWY9XCJzdGF0ZXMuaXNWaXNpYmxlXCJcbiAgICAgKGNsaWNrKT1cImNsb3NlU2lkZWJhcigpXCJcbj48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyXCIgW25nQ2xhc3NdPVwieydldm8tc2lkZWJhcl9hY3RpdmUnIDogc3RhdGVzLmlzVmlzaWJsZX1cIiA+XG4gICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX190aXRsZVwiPnt7IHRpdGxlIH19PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19jbG9zZVwiIChjbGljayk9XCJzaWRlYmFyU2VydmljZS5jbG9zZShpZClcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJldm8tc2lkZWJhcl9fY2xvc2UtaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE0LjksMTJsOC42LTguNmMwLjgtMC44LDAuOC0yLjEsMC0yLjljLTAuOC0wLjgtMi4xLTAuOC0yLjksMEwxMiw5LjFMMy40LDAuNlxuICAgICAgICAgICAgICAgICAgICBjLTAuOC0wLjgtMi4xLTAuOC0yLjksMGMtMC44LDAuOC0wLjgsMi4xLDAsMi45TDkuMSwxMmwtOC42LDguNmMtMC44LDAuOC0wLjgsMi4xLDAsMi45YzAuOCwwLjgsMi4xLDAuOCwyLjksMGw4LjYtOC42bDguNiw4LjZcbiAgICAgICAgICAgICAgICAgICAgYzAuOCwwLjgsMi4xLDAuOCwyLjksMGMwLjgtMC44LDAuOC0yLjEsMC0yLjlMMTQuOSwxMnpcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2Zvb3RlclwiPjxuZy1jb250ZW50IHNlbGVjdD1cIltmb290ZXJdXCI+PC9uZy1jb250ZW50PjwvZGl2PiA8IS0tw5HCh8ORwoLDkMK+w5DCscORwosgOmVtcHR5IMORwoDDkMKww5DCscOQwr7DkcKCw5DCsMOQwrssIMOQwr3DkMK1IMOQwrTDkMK+w5DCu8OQwrbDkMK9w5DCviDDkMKxw5HCi8ORwoLDkcKMIMOQwrLDkMK9w5HCg8ORwoLDkcKAw5DCuCBldm8tc2lkZWJhcl9fZm9vdGVyIMOQwrLDkMK+w5DCvsOQwrHDkcKJw5DCtSDDkMK9w5DCuMORwofDkMK1w5DCs8OQwr4sIMOQwrTDkMKww5DCtsOQwrUgw5DCv8ORwoDDkMK+w5DCscOQwrXDkMK7w5DCsC0tPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9TaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAgIEBJbnB1dCgpIGlkOiBFdm9TaWRlYmFyVHlwZXM7XG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAga2V5VXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBzdGF0ZXMgPSB7XG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzaWRlYmFyU2VydmljZTogRXZvU2lkZWJhclNlcnZpY2UpIHt9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5kZXJlZ2lzdGVyKHRoaXMuaWQpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuaWQpO1xuXG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuaXNTaWRlYmFyVmlzaWJsZSQuc3Vic2NyaWJlKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pZCBpbiBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMuaXNWaXNpYmxlID0gcGF5bG9hZFt0aGlzLmlkXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVzLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVRvS2V5RXZlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlVcFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VTaWRlYmFyKCkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmNsb3NlKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9LZXlFdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVGcm9tRXZlbnQoZG9jdW1lbnQuYm9keSwgJ2tleXVwJykuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleS5Fc2NhcGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmNsb3NlKHRoaXMuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcbmltcG9ydCB7IElPcHRpb25zIH0gZnJvbSAnLi90eXBpbmdzL29wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1yYWRpby1ncm91cCcsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25BcnJheVwiPlxuICAgICAgICA8IS0tIMOQwp/DkMK1w5HCgMOQwrXDkMK6w5DCu8ORwo7DkcKHw5DCtcOQwr3DkMK4w5DCtSDDkcKBw5HCgsOQwrjDkMK7w5DCtcOQwrkgw5DCssORwovDkMK/w5DCvsOQwrvDkMK9w5HCj8OQwrXDkcKCw5HCgcORwo8gw5HCgSDDkMK/w5DCvsOQwrzDkMK+w5HCicORwozDkcKOIMOQwr/DkcKBw5DCtcOQwrLDkMK0w5DCvsORwoHDkMK1w5DCu8OQwrXDkMK6w5HCgsOQwr7DkcKAw5DCsCA6Y2hlY2tlZCAtLT5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9sXCIgKG5nTW9kZWxDaGFuZ2UpID0gXCJvbkNoYW5nZWRWYWx1ZSgkZXZlbnQpXCIgZm9ybUNvbnRyb2xOYW1lPVwidmFsdWVcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17e29wdGlvbi52YWx1ZX19PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8taWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwX19yYWRpby12YWx1ZVwiPnt7b3B0aW9uLnByZXNlbnRhdGlvblRleHR9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbjwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tcmFkaW8tZ3JvdXB7ZGlzcGxheTpmbGV4fS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlve2ZsZXg6MTttYXJnaW4tcmlnaHQ6MzBweDtjdXJzb3I6cG9pbnRlcn0uZXZvLXJhZGlvLWdyb3VwX19yYWRpbzpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWNvbnRyb2x7ZGlzcGxheTpub25lfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWNvbnRyb2w6Y2hlY2tlZCsuZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3e2JhY2tncm91bmQtY29sb3I6cmdiYSg2OCwxMzgsMjU1LC4wNSk7Ym9yZGVyLWNvbG9yOiM0NDhhZmZ9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tY29udHJvbDpjaGVja2VkKy5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLXZpZXcgLmV2by1yYWRpby1ncm91cF9fcmFkaW8taWNvbjpiZWZvcmV7ZGlzcGxheTpibG9ja30uZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3e2Rpc3BsYXk6ZmxleDtwYWRkaW5nOjIwcHg7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6OHB4fS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb257cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxleC1zaHJpbms6MDt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O21hcmdpbi1yaWdodDoyMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkZWRlZGU7Ym9yZGVyLXJhZGl1czo1MCV9LmV2by1yYWRpby1ncm91cF9fcmFkaW8taWNvbjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTtkaXNwbGF5Om5vbmU7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtjb250ZW50OicnO21hcmdpbi10b3A6LTVweDttYXJnaW4tbGVmdDotNXB4O2JhY2tncm91bmQtY29sb3I6IzQ0OGFmZjtib3JkZXI6MXB4IHNvbGlkICMyODY5ZDc7Ym9yZGVyLXJhZGl1czo1MCV9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmFsdWV7Y29sb3I6IzAwMDtmb250LXNpemU6MTZweH1gXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9SYWRpb0dyb3VwQ29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b1JhZGlvR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIG9wdGlvbnM6IElPcHRpb25zO1xuICAgIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU/OiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZm9ybUdyb3VwO1xuICAgIHByaXZhdGUgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Hcm91cCgpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDDkMKTw5DCtcORwoLDkcKCw5DCtcORwoAgw5DCvcOQwrAgw5DCssOQwr7DkMK3w5DCvMOQwr7DkMK2w5DCvcORwovDkMK1IMOQwrLDkMKww5HCgMOQwrjDkMKww5DCvcORwoLDkcKLIMOQwr7DkcKCw5HCh8OQwrXDkcKCw5DCsCDDkMKyIMORwoTDkMK+w5HCgMOQwrzDkMKww5HCgsOQwrUgw5DCvMOQwrDDkcKBw5HCgcOQwrjDkMKyw5DCsFxuICAgICogw5DCv8ORwoDDkMK1w5DCt8OQwrXDkMK9w5HCgsOQwrDDkcKGw5DCuMOQwr7DkMK9w5DCvcOQwr7DkMKzw5DCviDDkcKCw5DCtcOQwrrDkcKBw5HCgsOQwrAgw5DCtMOQwrvDkcKPIMORwoDDkMKww5DCtMOQwrjDkMK+IMOQwrPDkcKAw5HCg8OQwr/DkMK/w5DCsFxuICAgICovXG4gICAgZ2V0IG9wdGlvbkFycmF5KCk6IElPcHRpb25zW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZU9wdGlvbkFycmF5KHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDDkMKTw5DCtcOQwr3DkMK1w5HCgMOQwrjDkcKAw5HCg8OQwrXDkcKCIMOQwrjDkMK3IMOQwr7DkMK/w5HChsOQwrjDkMK5IMOQwrzDkMKww5HCgcORwoHDkMK4w5DCslxuICAgICogQHBhcmFtIHNvdXJjZSDDkMK+w5DCscORworDkMK1w5DCusORwoIgw5HCgSDDkMKyw5DCsMORwoDDkMK4w5DCsMOQwr3DkcKCw5DCsMOQwrzDkMK4XG4gICAgKi9cbiAgICBwcml2YXRlIGdlbmVyYXRlT3B0aW9uQXJyYXkoc291cmNlOiBJT3B0aW9ucyk6IElPcHRpb25zW10ge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDDkMKhw5DCvsOQwrfDkMK0w5DCsMOQwr3DkMK4w5DCtSDDkMKzw5HCgMORwoPDkMK/w5DCv8ORwotcbiAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRm9ybUdyb3VwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgdmFsdWU6IFsgdGhpcy52YWx1ZSBdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIMOQwp7DkMKxw5HCgMOQwrDDkMKxw5DCvsORwoLDkcKHw5DCuMOQwrogw5DCvcOQwrAgw5HCgcOQwrzDkMK1w5DCvcORwoMgw5DCt8OQwr3DkMKww5HCh8OQwrXDkMK9w5DCuMORwo9cbiAgICAqIEBwYXJhbSB2YWx1ZSDDkMK3w5DCvcOQwrDDkcKHw5DCtcOQwr3DkMK4w5DCtVxuICAgICovXG4gICAgcHVibGljIG9uQ2hhbmdlZFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuZXhwb3J0IGVudW0gRXZvQXV0b0NvbXBsZXRlVHlwZXMge1xuICAgIHBhcnR5ID0gJ3BhcnR5Jyxcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tYXV0by1jb21wbGV0ZScsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVfX2lucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGV2by1pbnB1dCAoYmx1cik9XCJvblRvdWNoZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgW3N0YXRlXT1cImN1cnJlbnRTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImlucHV0XCI+PC9ldm8taW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX19zdWdnZXN0aW9uc1wiICpuZ0lmPVwic3VnZ2VzdGlvbnMgJiYgc3VnZ2VzdGlvbnMubGVuZ3RoICYmICFkaXNhYmxlZFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWdnZXN0aW9uIG9mIHN1Z2dlc3Rpb25zXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX19wYXJ0eVwiICpuZ0lmPVwiZ2V0U3VnZ2VzdGlvbkRhdGFTdHJpbmcoc3VnZ2VzdGlvbilcIiAoY2xpY2spPVwiaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKCRldmVudCwgc3VnZ2VzdGlvbilcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX190ZXh0LWxpbmVcIiBbYXR0ci50aXRsZV09XCJzdWdnZXN0aW9uLnZhbHVlXCI+e3sgc3VnZ2VzdGlvbi52YWx1ZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX190ZXh0LWxpbmVcIiBbYXR0ci50aXRsZV09XCJnZXRTdWdnZXN0aW9uRGF0YVN0cmluZyhzdWdnZXN0aW9uKVwiPnt7IGdldFN1Z2dlc3Rpb25EYXRhU3RyaW5nKHN1Z2dlc3Rpb24pIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1hdXRvLWNvbXBsZXRle3Bvc2l0aW9uOnJlbGF0aXZlfS5ldm8tYXV0by1jb21wbGV0ZV9faW5wdXQtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LmV2by1hdXRvLWNvbXBsZXRlX19zdWdnZXN0aW9uc3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCAwIDEycHggNHB4IHJnYmEoMCwwLDAsLjIpfS5ldm8tYXV0by1jb21wbGV0ZV9fcGFydHl7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDo0OHB4O3BhZGRpbmc6NXB4IDIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyfS5ldm8tYXV0by1jb21wbGV0ZV9fcGFydHk6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4MDB9LmV2by1hdXRvLWNvbXBsZXRlX190ZXh0LWxpbmV7bWFyZ2luOjA7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0F1dG9Db21wbGV0ZUNvbXBvbmVudCksXG4gICAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG5dLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9BdXRvQ29tcGxldGVDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdHlwZTogRXZvQXV0b0NvbXBsZXRlVHlwZXM7XG4gICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpbnB1dDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICBzdWdnZXN0aW9uczogYW55W10gPSBbXTtcblxuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSB2YWx1ZUF1dG9Db21wbGV0ZWQgPSBmYWxzZTtcblxuICAgIHJlYWRvbmx5IGF1dG9Db21wZXRlVHlwZXMgPSBFdm9BdXRvQ29tcGxldGVUeXBlcztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyAnJGV2ZW50JyBdKVxuICAgIGhhbmRsZURvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSkge1xuICAgICAgaWYgKGV2ZW50LnBhdGguaW5kZXhPZih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkgPT09IC0xICYmIHRoaXMuc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgdGhpcy52YWx1ZUF1dG9Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlucHV0LnNldFZhbHVlKCcnLCB7XG4gICAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVBdXRvQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQXV0b0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0U3VnZ2VzdGlvbnMocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRTdWdnZXN0aW9uRGF0YVN0cmluZyhzdWdnZXN0aW9uOiBhbnkpOiBzdHJpbmcge1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgIGlmIChzdWdnZXN0aW9uICYmIHN1Z2dlc3Rpb24uZGF0YSkge1xuICAgICAgICBjb25zdCBpbm46IHN0cmluZyA9IHN1Z2dlc3Rpb24uZGF0YS5pbm47XG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gc3VnZ2VzdGlvbi5kYXRhO1xuXG4gICAgICAgIGlmIChpbm4pIHtcbiAgICAgICAgICByZXN1bHQgPSBgJHtpbm59ICR7YWRkcmVzcyA/IGFkZHJlc3MudmFsdWUgOiAnJ31gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKGV2ZW50OiBhbnksIHN1Z2dlc3Rpb246IGFueSkge1xuICAgICAgdGhpcy52YWx1ZUF1dG9Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbnB1dC5zZXRWYWx1ZShzdWdnZXN0aW9uLnZhbHVlLCB7XG4gICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICAgIG9ubHlTZWxmOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gbnVsbDtcbiAgICAgIHRoaXMudmFsdWUgPSBzdWdnZXN0aW9uO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLmlucHV0LnNldFZhbHVlKCcnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICAgIHN0YXRlID8gdGhpcy5pbnB1dC5kaXNhYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pIDpcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dC5lbmFibGUoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgLy8gIFRPRE8gQ3JlYXRlIGdlbmVyaWMgd2F5IHRvIGdldCBEYURhdGEgc3VnZ2VzdGlvbnMvYW55IGJhY2tlbmQgZGF0YSB0byBzaG93XG4gICAgcHJpdmF0ZSByZXF1ZXN0U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnVG9rZW4gNmE2MmU3NzliOTg0ZjAzNTNlODc5MzFlYmMzODRkMmM3MzZhYWZhOScpXG4gICAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5odHRwXG4gICAgICAgIC5wb3N0PGFueT4oXG4gICAgICAgICAgJ2h0dHBzOi8vc3VnZ2VzdGlvbnMuZGFkYXRhLnJ1L3N1Z2dlc3Rpb25zL2FwaS80XzEvcnMvc3VnZ2VzdC9wYXJ0eScsXG4gICAgICAgICAgeyBxdWVyeSwgY291bnQ6IDQgfSxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSByZXNwb25zZS5zdWdnZXN0aW9ucztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jb250cm9sLWxhYmVsJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tY29udHJvbC1sYWJlbFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImV2by1jb250cm9sLWxhYmVsX190ZXh0XCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1jb250cm9sLWxhYmVse21hcmdpbi1ib3R0b206MjBweH0uZXZvLWNvbnRyb2wtbGFiZWxfX3RleHR7bWFyZ2luLWJvdHRvbToxMXB4O2NvbG9yOiM5YjliOWI7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MTZweH1gXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbExhYmVsQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgSXRlcmFibGVEaWZmZXJzLCBLZXlWYWx1ZURpZmZlcnMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IGlzT2JqZWN0ID0gKGl0ZW0pID0+IGl0ZW0gIT0gbnVsbCAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCc7XG5jb25zdCBpc1N0cmluZyA9IChpdGVtKSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZyc7XG5jb25zdCBpc0FycmF5ID0gKGl0ZW0pID0+IEFycmF5LmlzQXJyYXkoaXRlbSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tldm9VaUNsYXNzXScsXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBOZ0NsYXNzIHtcbiAgQElucHV0KCdldm9VaUNsYXNzJylcbiAgc2V0IHNldHRlck9mQ2xhc3MoZGF0YTogYW55KSB7XG4gICAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBkYXRhLm1hcCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3RoaXMucHJlZml4fV8ke2NsYXNzTmFtZX1gKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBkYXRhID0gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlKChuZXdEYXRhOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIG5ld0RhdGFbYCR7dGhpcy5wcmVmaXh9XyR7a2V5fWBdID0gZGF0YVtrZXldO1xuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICAgIH0sIHt9KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKChteUNsYXNzKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtteUNsYXNzfWApXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSB0eXBlIG5vdCBhbGxvd2VkIScpO1xuICAgIH1cblxuICAgIHRoaXMubmdDbGFzcyA9IGRhdGE7XG4gIH1cblxuICBuZ0NsYXNzOiBhbnk7XG5cbiAgcHJpdmF0ZSBwcmVmaXg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcbiAgICAgICAgX25nRWw6IEVsZW1lbnRSZWYsIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoX2l0ZXJhYmxlRGlmZmVycywgX2tleVZhbHVlRGlmZmVycywgX25nRWwsIF9yZW5kZXJlcik7XG4gICAgdGhpcy5wcmVmaXggPSBfbmdFbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcblxuaW1wb3J0IHsgRXZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1idXR0b24vZXZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ2hlY2tib3hDb21wb25lbnQgIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jaGVja2JveC9ldm8tY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWlucHV0L2V2by1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvUmFkaW9Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tcmFkaW8tZ3JvdXAvZXZvLXJhZGlvLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9TaWRlYmFyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5zZXJ2aWNlJztcbmV4cG9ydCB7IEV2b1NpZGViYXJTZXJ2aWNlIH07XG5pbXBvcnQgeyBFdm9BdXRvQ29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWF1dG8tY29tcGxldGUvZXZvLWF1dG8tY29tcGxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY29udHJvbC1sYWJlbC9ldm8tY29udHJvbC1sYWJlbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFdm9VaUNsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V2by11aS1jbGFzcy5kaXJlY3RpdmUnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnkgPSBbXG4gIEV2b0J1dHRvbkNvbXBvbmVudCxcbiAgRXZvQ2hlY2tib3hDb21wb25lbnQsXG4gIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCxcbiAgRXZvSW5wdXRDb21wb25lbnQsXG4gIEV2b0Jhbm5lckNvbXBvbmVudCxcbiAgRXZvU2lkZWJhckNvbXBvbmVudCxcbiAgRXZvQXV0b0NvbXBsZXRlQ29tcG9uZW50LFxuICBFdm9Db250cm9sTGFiZWxDb21wb25lbnQsXG4gIEV2b1JhZGlvR3JvdXBDb21wb25lbnQsXG5dO1xuXG5jb25zdCBkaXJlY3RpdmVzOiBhbnkgPSBbXG4gIEV2b1VpQ2xhc3NEaXJlY3RpdmUsXG5dO1xuXG5jb25zdCBidW5kbGU6IGFueSA9IFtcbiAgLi4uY29tcG9uZW50cyxcbiAgLi4uZGlyZWN0aXZlcyxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uYnVuZGxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uYnVuZGxlLFxuICBdLFxuICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlLaXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV2b1VpS2l0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEV2b1NpZGViYXJTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG5cblxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIklucHV0IiwiQ29udGVudENoaWxkIiwiRm9ybUNvbnRyb2xOYW1lIiwiRm9ybUNvbnRyb2xEaXJlY3RpdmUiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIkV2ZW50RW1pdHRlciIsIkNoYW5nZURldGVjdG9yUmVmIiwiT3V0cHV0IiwiVmlld0NoaWxkIiwiSW5qZWN0IiwiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIm9ic2VydmFibGVGcm9tRXZlbnQiLCJLZXkiLCJGb3JtQnVpbGRlciIsImh0dHAiLCJGb3JtQ29udHJvbCIsIkh0dHBIZWFkZXJzIiwiSHR0cENsaWVudCIsIkhvc3RMaXN0ZW5lciIsIkRpcmVjdGl2ZSIsIkl0ZXJhYmxlRGlmZmVycyIsIktleVZhbHVlRGlmZmVycyIsIlJlbmRlcmVyMiIsIk5nQ2xhc3MiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiVGV4dE1hc2tNb2R1bGUiLCJSZWFjdGl2ZUZvcm1z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