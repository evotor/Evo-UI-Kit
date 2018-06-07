(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('tslib'), require('rxjs'), require('ts-keycode-enum'), require('@angular/common'), require('angular2-text-mask')) :
    typeof define === 'function' && define.amd ? define('evo-ui-kit', ['exports', '@angular/core', '@angular/forms', 'tslib', 'rxjs', 'ts-keycode-enum', '@angular/common', 'angular2-text-mask'], factory) :
    (factory((global['evo-ui-kit'] = {}),global.ng.core,global.ng.forms,global.tslib,null,null,global.ng.common,null));
}(this, (function (exports,core,forms,tslib_1,rxjs,tsKeycodeEnum,common,angular2TextMask) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EvoButtonComponent = (function () {
        function EvoButtonComponent(elRef) {
            this.elRef = elRef;
            this.disabled = false;
            this._loading = false;
        }
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
             */ function () {
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
             */ function () {
                return this._loading;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.clientWidth = this.elRef.nativeElement.getBoundingClientRect().width;
                this._loading = value;
            },
            enumerable: true,
            configurable: true
        });
        EvoButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'evo-button',
                        template: "<div class=\"evo-button\" [evoUiClass]=\"totalClasses\" [ngStyle]=\"totalStyles\">\n    <span *ngIf=\"!loading\">\n        <ng-content></ng-content>\n    </span>\n    <span *ngIf=\"loading\" class=\"evo-button__dots\">\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n    </span>\n</div>\n",
                        styles: ["@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}.evo-button{display:inline-block;box-sizing:border-box;padding:0 30px;height:44px;line-height:44px;vertical-align:middle;text-align:center;background-image:none;white-space:nowrap;font-family:museo,Arial,sans-serif;font-weight:700;font-size:16px;color:#fff;text-transform:uppercase;border-radius:30px;background-color:#ff7800;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s}.evo-button:hover{background-color:#ff9d47;color:#fff}.evo-button:active,.evo-button:focus{background-color:#cc6000;color:#fff;outline:0}.evo-button:disabled,.evo-button_disabled{background:#d6d6d6!important;border-color:#d6d6d6!important;color:#fff!important;cursor:not-allowed}.evo-button_lined{background-color:#fff;color:#ff7800;border:1px solid #ff7800}.evo-button_lined:hover{background-color:#ff7800;color:#fff}.evo-button_lined:active,.evo-button_lined:focus{background-color:#cc6000;color:#fff;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{background-color:#fff;color:#546e7a;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{background-color:#546e7a;color:#fff}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{background-color:#283239;color:#fff;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{background-color:#fff;color:#8bc34a;border:1px solid #8bc34a}.evo-button_green-lined:hover{background-color:#8bc34a;color:#fff}.evo-button_green-lined:active,.evo-button_green-lined:focus{background-color:#6f9c3b;color:#fff;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_full-width{width:100%;text-align:center}.evo-button_small{padding:0 20px;height:30px;line-height:30px;font-size:14px}.evo-button_large{padding:0 40px;height:60px;line-height:60px;font-size:18px}.evo-button_icon{padding-left:22px;padding-right:22px;display:inline-flex;align-items:center}.evo-button_loading{pointer-events:none;position:relative}.evo-button__dots{position:absolute;top:50%;left:50%;margin-left:-30px;margin-top:-5px}.evo-button__dot{width:10px;height:10px;border-radius:50%;float:left;background:currentColor;margin:0 5px;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
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
            disabled: [{ type: core.Input }],
            size: [{ type: core.Input }],
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
    var EvoControlStateManager = (function () {
        function EvoControlStateManager(control, extraStates) {
            this.control = control;
        }
        Object.defineProperty(EvoControlStateManager.prototype, "currentState", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function () {
                return this.stateManager.currentState[EvoControlStates.invalid];
            },
            enumerable: true,
            configurable: true
        });
        EvoBaseControl.propDecorators = {
            formControlName: [{ type: core.ContentChild, args: [forms.FormControlName,] }],
            formControlDirective: [{ type: core.ContentChild, args: [forms.FormControlDirective,] }],
            state: [{ type: core.Input }],
            errorsMessages: [{ type: core.Input }]
        };
        return EvoBaseControl;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EvoCheckboxComponent = (function (_super) {
        tslib_1.__extends(EvoCheckboxComponent, _super);
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
            { type: core.Component, args: [{
                        selector: 'evo-checkbox',
                        template: "<label class=\"evo-checkbox\">\n    <input class=\"evo-checkbox__input\"\n           type=\"checkbox\"\n           [evoUiClass]=\"checkboxClass\"\n           [disabled]=\"disabled\"\n           [(ngModel)]=\"value\">\n    <span class=\"evo-checkbox__text\">\n        <ng-content></ng-content>\n    </span>\n</label>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                        styles: [".evo-checkbox{margin:0}.evo-checkbox__input{display:none}.evo-checkbox__text{position:relative;display:inline-block;padding-left:26px;color:#212121;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-checkbox__text:before{content:'';position:absolute;top:2px;left:0;width:16px;height:16px;background-color:#fff;border:1px solid #dbdbdb;border-radius:3px}input:checked+.evo-checkbox__text:before{border-color:#448aff;background:url(/assets/evo-ui-kit/icons/checkbox-check.svg) center no-repeat #448aff}input:disabled:not(:checked)+.evo-checkbox__text{cursor:default}input:disabled:not(:checked)+.evo-checkbox__text:before{background-color:#f6f6f6}input:disabled:checked+.evo-checkbox__text{cursor:default}input:disabled:checked+.evo-checkbox__text:before{opacity:.5}input.evo-checkbox_invalid+.evo-checkbox__text:before{border-color:#f22}"],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return EvoCheckboxComponent; }),
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
            { type: core.Component, args: [{
                        selector: 'evo-control-error',
                        template: "<div class=\"evo-error\" *ngFor=\"let errorMsg of errorsMap; let i = index;\">\n    <span *ngIf=\"showError(i)\">{{ errorMsg }}</span>\n</div>\n",
                        styles: [".evo-error{font-size:14px;color:#f22;font-style:italic;margin-top:10px}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
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
        tslib_1.__extends(EvoInputComponent, _super);
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'evo-input',
                        template: "<div class=\"evo-input\" [evoUiClass]=\"inputClass\">\n    <label class=\"evo-input__container\">\n        <input #input\n               *ngIf=\"!mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [disabled]=\"disabled\">\n        <input #input\n               *ngIf=\"mask\"\n               class=\"evo-input__field\"\n               (focus)=\"onFocus()\"\n               (blur)=\"onBlur()\"\n               type=\"{{ type }}\"\n               placeholder=\"{{ placeholder }}\"\n               [(ngModel)]=\"value\"\n               [textMask]=\"mask\"\n               [disabled]=\"disabled\">\n        <div class=\"evo-input__additional\"\n             *ngIf=\"hasAdditional\">\n            <div class=\"evo-input__tooltip\"\n                 *ngIf=\"tooltip\"\n                 (mouseenter)=\"showTooltip()\"\n                 (mouseleave)=\"hideTooltip()\"\n                 (click)=\"onTooltipClick($event)\">?</div>\n            <div *ngIf=\"tooltip && tooltipShown\"\n                 (click)=\"onTooltipClick($event)\"\n                 (mouseenter)=\"showTooltip()\"\n                 (mouseleave)=\"hideTooltip()\"\n                 class=\"evo-input__tooltip-label\">{{ tooltip }}</div>\n        </div>\n    </label>\n</div>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                        styles: [".evo-input{display:flex;width:100%;height:48px;line-height:48px;white-space:nowrap;background-color:#fff;background-image:none;border:1px solid #dbdbdb;border-radius:4px;transition:box-shadow .3s,border .3s;outline:0}.evo-input__container{display:flex;align-items:center;margin:0;width:100%;height:100%;border-radius:4px;cursor:text}.evo-input_focused{box-shadow:0 0 2px 0 #546e7a!important;border:1px solid #546e7a}.evo-input_disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input_disabled .evo-input__container{cursor:default}.evo-input_valid{border-color:#8bc34a}.evo-input_invalid{border-color:#f22}.evo-input__field{height:100%;border:none;margin:0;padding:0 20px;outline:0;font-size:16px;font-weight:400;color:#000;flex-grow:1;border-radius:4px;width:100%}.evo-input__field::-webkit-input-placeholder{color:#9b9b9b}.evo-input__field::-moz-placeholder{color:#9b9b9b;opacity:1}.evo-input__field:-ms-input-placeholder{color:#9b9b9b}.evo-input__field:disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input__field:not(:last-child){padding-right:0}.evo-input__tooltip{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0 10px;width:24px;height:24px;border-radius:50%;background:#eceff1;line-height:24px;text-align:center;font-family:\"Open Sans\",Arial,sans-serif;font-size:18px;font-weight:600;color:#546e7a;cursor:pointer}.evo-input__tooltip-label{position:absolute;width:100%;top:calc(100% - 2px);left:0;background-color:#fff8e6;z-index:1;border-radius:4px;padding:10px 10px 10px 20px;color:#212121;display:flex;box-shadow:0 4px 12px 0 rgba(0,0,0,.2);line-height:normal;white-space:normal;cursor:default}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(100% - 34px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute;pointer-events:none}@media (min-width:1200px){.evo-input__tooltip-label{left:calc(50% - 22px)}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(50% - 12px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute}}"],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return EvoInputComponent; }),
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        EvoInputComponent.ctorParameters = function () { return []; };
        EvoInputComponent.propDecorators = {
            autoFocus: [{ type: core.Input }],
            mask: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            type: [{ type: core.Input }],
            _value: [{ type: core.Input, args: ['value',] }],
            inputElement: [{ type: core.ViewChild, args: ['input',] }]
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
        tslib_1.__extends(EvoBanner, _super);
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
                        styles: [".evo-banner{display:block;position:relative;height:430px;padding:12px 20px;border-radius:6px;overflow:hidden;color:#fff;cursor:pointer;transition:box-shadow .3s}.evo-banner:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}.evo-banner__content{position:relative;z-index:2}.evo-banner__content .promo-btn{height:40px;padding:0 20px;min-width:156px;font-weight:600;font-size:14px;text-transform:uppercase;display:table-cell;vertical-align:middle}.evo-banner__content .promo-btn:hover{background:#fff}.evo-banner__content .promo-btn:active{box-shadow:none}.evo-banner__content .promo-btn span{font-size:18px}.evo-banner__title{font-family:museo,Arial,sans-serif;font-weight:700;line-height:1.3;font-size:30px;margin-bottom:10px}.evo-banner__description{font-size:14px;line-height:1.3;margin-top:20px;margin-bottom:10px}.evo-banner__img{position:absolute;bottom:0;right:0;width:290px;height:290px}.evo-banner_full-width{padding:20px}.evo-banner_full-width .evo-banner__title{line-height:38px}@media (min-width:768px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:60%}.evo-banner__description{max-width:250px}.evo-banner__img{width:430px;height:430px}.evo-banner_full-width{height:240px;padding:30px}.evo-banner_full-width .evo-banner__content{max-width:50%}.evo-banner_full-width .evo-banner__title{font-size:36px;line-height:44px}.evo-banner_full-width .evo-banner__img{height:240px;width:240px}}@media (min-width:1200px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:63%}.evo-banner_small{height:210px;padding:20px}.evo-banner_small .evo-banner__title{font-size:20px;margin-bottom:20px}.evo-banner_small .promo-btn{height:32px}.evo-banner_small .evo-banner__img{width:210px;height:210px}.evo-banner_full-width .evo-banner__content{max-width:63%}}"],
                        providers: [
                            { provide: 'Window', useValue: ɵ0 }
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
                        styles: [".evo-sidebar{position:fixed;top:0;left:120%;bottom:0;z-index:3000;display:flex;flex-direction:column;width:100%;background-color:#fff;box-shadow:0 0 12px rgba(0,0,0,.25)}@media (min-width:992px){.evo-sidebar{left:100%;margin-left:40px;width:674px;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}}.evo-sidebar_active{left:0}.evo-sidebar__header{display:flex;justify-content:space-between;align-items:flex-start;flex-shrink:0;border-bottom:1px solid #eceff1;padding:20px 0 8px;margin:0 15px}@media (min-width:992px){.evo-sidebar_active{left:100%;-webkit-transform:translateX(-714px);transform:translateX(-714px)}.evo-sidebar__header{margin:0 30px}}.evo-sidebar__title{font-family:museo,Arial,sans-serif;font-size:30px;font-weight:700;color:#333f48}@media (min-width:768px){.evo-sidebar__header{padding-top:38px}.evo-sidebar__title{font-size:30px;padding:0}}.evo-sidebar__close{padding:8px;transition:opacity .3s;margin:2px -8px 0 30px;cursor:pointer}.evo-sidebar__close:hover{opacity:.8}.evo-sidebar__close-icon{width:24px;height:24px;color:#546e7a;background:url(/assets/evo-ui-kit/icons/close.svg)}.evo-sidebar__content{display:flex;flex-direction:column;flex-grow:1;padding:20px 15px 40px;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (min-width:768px){.evo-sidebar__content{padding:40px 15px}}@media (min-width:992px){.evo-sidebar__content{padding:40px 30px}}.evo-sidebar__footer{display:flex;flex-direction:column;flex-shrink:0;padding:30px 15px;box-shadow:0 4px 12px rgba(0,0,0,.25);background-color:#fff}.evo-sidebar__footer:empty{display:none}@media (min-width:768px){.evo-sidebar__footer{flex-direction:row;justify-content:space-between;padding:18px 15px}}@media (min-width:992px){.evo-sidebar__footer{padding:18px 30px}}.evo-sidebar__buttons{display:flex;flex-direction:column;padding:30px 0 10px}.evo-sidebar__buttons_border{border-top:1px solid #eceff1;margin-top:50px}.evo-sidebar__button+.evo-sidebar__button{margin-top:20px}@media (min-width:768px){.evo-sidebar__buttons{flex-direction:row;justify-content:space-between;padding-bottom:0}.evo-sidebar__button+.evo-sidebar__button{margin-top:0}}"],
                        template: "<div class=\"fade-background fade-background_over-all\"\n     *ngIf=\"states.isVisible\"\n     (click)=\"closeSidebar()\"\n></div>\n\n<div class=\"evo-sidebar\" [ngClass]=\"{'evo-sidebar_active' : states.isVisible}\" >\n    <div class=\"evo-sidebar__header\">\n        <div class=\"evo-sidebar__title\">{{ title }}</div>\n\n        <div class=\"evo-sidebar__close\" (click)=\"sidebarService.close(id)\">\n            <div class=\"evo-sidebar__close-icon\"></div>\n        </div>\n    </div>\n\n\n    <div class=\"evo-sidebar__content\">\n        <ng-content select=\"[content]\"></ng-content>\n    </div>\n\n    <div class=\"evo-sidebar__footer\"><ng-content select=\"[footer]\"></ng-content></div> <!--\u0447\u0442\u043E\u0431\u044B :empty \u0440\u0430\u0431\u043E\u0442\u0430\u043B, \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438 evo-sidebar__footer \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0438\u0447\u0435\u0433\u043E, \u0434\u0430\u0436\u0435 \u043F\u0440\u043E\u0431\u0435\u043B\u0430-->\n</div>\n",
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
    var /** @type {?} */ isObject = function (item) { return item != null && typeof item === 'object'; };
    var /** @type {?} */ isString = function (item) { return typeof item === 'string'; };
    var /** @type {?} */ isArray = function (item) { return Array.isArray(item); };
    var EvoUiClassDirective = (function (_super) {
        tslib_1.__extends(EvoUiClassDirective, _super);
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
                        selector: '[evoUiClass]'
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
    ];
    var /** @type {?} */ directives = [
        EvoUiClassDirective,
    ];
    var /** @type {?} */ bundle = tslib_1.__spread(components, directives);
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
                    ]
                };
            };
        EvoUiKitModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular2TextMask.TextMaskModule,
                        ],
                        declarations: tslib_1.__spread(bundle),
                        exports: tslib_1.__spread(bundle),
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
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
    exports.ɵf = EvoBannerComponent;
    exports.ɵa = EvoButtonComponent;
    exports.ɵb = EvoCheckboxComponent;
    exports.ɵd = EvoControlErrorComponent;
    exports.ɵe = EvoInputComponent;
    exports.ɵg = EvoSidebarComponent;
    exports.ɵh = EvoUiClassDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWJ1dHRvbi9ldm8tYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0udHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jaGVja2JveC9ldm8tY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8taW5wdXQvZXZvLWlucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL1NlcmlhbGl6YWJsZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYmFubmVyL2V2by1iYW5uZXIuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1zaWRlYmFyL2V2by1zaWRlYmFyLnNlcnZpY2UudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9kaXJlY3RpdmVzL2V2by11aS1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL2V2by11aS1raXQvbGliL2V2by11aS1raXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIEV2b0J1dHRvblNpemVzIHtcbiAgICBmdWxsV2lkdGggPSAnZnVsbC13aWR0aCcsXG4gICAgc21hbGwgPSAnc21hbGwnLFxuICAgIGxhcmdlID0gJ2xhcmdlJyxcbn1cblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU3R5bGVzIHtcbiAgICBsaW5lZCA9ICdsaW5lZCcsXG4gICAgZGFya2JsdWUgPSAnZGFya2JsdWUnLFxuICAgIGRhcmtibHVlTGluZWQgPSAnZGFya2JsdWUtbGluZWQnLFxuICAgIGdyZWVuID0gJ2dyZWVuJyxcbiAgICBncmVlbmxpbmVkID0gJ2dyZWVuLWxpbmVkJyxcbiAgICBwdXJwbGUgPSAncHVycGxlJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1idXR0b25cIiBbZXZvVWlDbGFzc109XCJ0b3RhbENsYXNzZXNcIiBbbmdTdHlsZV09XCJ0b3RhbFN0eWxlc1wiPlxuICAgIDxzcGFuICpuZ0lmPVwiIWxvYWRpbmdcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cImV2by1idXR0b25fX2RvdHNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYEAtd2Via2l0LWtleWZyYW1lcyBmeHs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19QGtleWZyYW1lcyBmeHs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19LmV2by1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MCAzMHB4O2hlaWdodDo0NHB4O2xpbmUtaGVpZ2h0OjQ0cHg7dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQtaW1hZ2U6bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6bXVzZW8sQXJpYWwsc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjE2cHg7Y29sb3I6I2ZmZjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyLXJhZGl1czozMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMDtib3JkZXI6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3MsY29sb3IgLjNzLGJvcmRlciAuM3N9LmV2by1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY5ZDQ3O2NvbG9yOiNmZmZ9LmV2by1idXR0b246YWN0aXZlLC5ldm8tYnV0dG9uOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2NjNjAwMDtjb2xvcjojZmZmO291dGxpbmU6MH0uZXZvLWJ1dHRvbjpkaXNhYmxlZCwuZXZvLWJ1dHRvbl9kaXNhYmxlZHtiYWNrZ3JvdW5kOiNkNmQ2ZDYhaW1wb3J0YW50O2JvcmRlci1jb2xvcjojZDZkNmQ2IWltcG9ydGFudDtjb2xvcjojZmZmIWltcG9ydGFudDtjdXJzb3I6bm90LWFsbG93ZWR9LmV2by1idXR0b25fbGluZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiNmZjc4MDA7Ym9yZGVyOjFweCBzb2xpZCAjZmY3ODAwfS5ldm8tYnV0dG9uX2xpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMDtjb2xvcjojZmZmfS5ldm8tYnV0dG9uX2xpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9saW5lZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjYzYwMDA7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2NjNjAwMH0uZXZvLWJ1dHRvbl9kYXJrYmx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiM1NDZlN2F9LmV2by1idXR0b25fZGFya2JsdWU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNzU5NmE1fS5ldm8tYnV0dG9uX2RhcmtibHVlOmFjdGl2ZSwuZXZvLWJ1dHRvbl9kYXJrYmx1ZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzl9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiM1NDZlN2E7Ym9yZGVyOjFweCBzb2xpZCAjNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzU0NmU3YTtjb2xvcjojZmZmfS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzk7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6IzI4MzIzOX0uZXZvLWJ1dHRvbl9ncmVlbntiYWNrZ3JvdW5kLWNvbG9yOiM4YmMzNGF9LmV2by1idXR0b25fZ3JlZW46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYTJjZjZlfS5ldm8tYnV0dG9uX2dyZWVuOmFjdGl2ZSwuZXZvLWJ1dHRvbl9ncmVlbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2J9LmV2by1idXR0b25fZ3JlZW4tbGluZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiM4YmMzNGE7Ym9yZGVyOjFweCBzb2xpZCAjOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzhiYzM0YTtjb2xvcjojZmZmfS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2I7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6IzZmOWMzYn0uZXZvLWJ1dHRvbl9wdXJwbGV7YmFja2dyb3VuZC1jb2xvcjojYWI0YWMzfS5ldm8tYnV0dG9uX3B1cnBsZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjYzU4ZTh9LmV2by1idXR0b25fcHVycGxlOmFjdGl2ZSwuZXZvLWJ1dHRvbl9wdXJwbGU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojOTMzNWFifS5ldm8tYnV0dG9uX2Z1bGwtd2lkdGh7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn0uZXZvLWJ1dHRvbl9zbWFsbHtwYWRkaW5nOjAgMjBweDtoZWlnaHQ6MzBweDtsaW5lLWhlaWdodDozMHB4O2ZvbnQtc2l6ZToxNHB4fS5ldm8tYnV0dG9uX2xhcmdle3BhZGRpbmc6MCA0MHB4O2hlaWdodDo2MHB4O2xpbmUtaGVpZ2h0OjYwcHg7Zm9udC1zaXplOjE4cHh9LmV2by1idXR0b25faWNvbntwYWRkaW5nLWxlZnQ6MjJweDtwYWRkaW5nLXJpZ2h0OjIycHg7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9LmV2by1idXR0b25fbG9hZGluZ3twb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOnJlbGF0aXZlfS5ldm8tYnV0dG9uX19kb3Rze3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTMwcHg7bWFyZ2luLXRvcDotNXB4fS5ldm8tYnV0dG9uX19kb3R7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjUwJTtmbG9hdDpsZWZ0O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO21hcmdpbjowIDVweDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC1hbmltYXRpb246MXMgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIGluZmluaXRlIGZ4fS5ldm8tYnV0dG9uX19kb3Q6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uOjFzIC4zcyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgLjNzIGluZmluaXRlIGZ4fS5ldm8tYnV0dG9uX19kb3Q6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uOjFzIC42cyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgLjZzIGluZmluaXRlIGZ4fWBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEV2b0J1dHRvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY29sb3I6IEV2b0J1dHRvblN0eWxlcztcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNpemU6IEV2b0J1dHRvblNpemVzO1xuXG4gICAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2xpZW50V2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcblxuICAgIH1cblxuICAgIGdldCB0b3RhbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBjbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBnZXQgdG90YWxTdHlsZXMoKToge1tzdHlsZUtleTogc3RyaW5nXTogYW55fSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXN1bHRbJ3dpZHRoJ10gPSBgJHt0aGlzLmNsaWVudFdpZHRofXB4YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuY2xpZW50V2lkdGggPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBFdm9Db250cm9sU3RhdGVzIHtcbiAgdmFsaWQgPSAndmFsaWQnLFxuICBpbnZhbGlkID0gJ2ludmFsaWQnLFxufVxuIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUV2b0NvbnRyb2xTdGF0ZSB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXIge1xuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBleHRyYVN0YXRlcz86IElFdm9Db250cm9sU3RhdGUpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRTdGF0ZSgpOiBJRXZvQ29udHJvbFN0YXRlIHtcbiAgICAvLyBUT0RPIG1lcmdlIGNvbmRpdGlvbnMgd2l0aCBleHRyYVN0YXRlc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkOiB0aGlzLmNvbnRyb2wuZGlydHkgJiYgdGhpcy5jb250cm9sLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sLnZhbGlkLFxuICAgICAgaW52YWxpZDogdGhpcy5jb250cm9sLmRpcnR5ICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC5pbnZhbGlkLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElFdm9Db250cm9sU3RhdGUgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlcic7XG5pbXBvcnQgeyBJRXZvQ29udHJvbEVycm9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5cbmV4cG9ydCBjbGFzcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWU7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xEaXJlY3RpdmUpIGZvcm1Db250cm9sRGlyZWN0aXZlOiBGb3JtQ29udHJvbERpcmVjdGl2ZTtcbiAgQElucHV0KCkgc3RhdGU6IElFdm9Db250cm9sU3RhdGU7XG4gIEBJbnB1dCgpIGVycm9yc01lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yO1xuXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgc3RhdGVNYW5hZ2VyOiBFdm9Db250cm9sU3RhdGVNYW5hZ2VyO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbE5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtQ29udHJvbE5hbWUuY29udHJvbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUgJiYgdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlLmNvbnRyb2w7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgdGhpcy5zdGF0ZU1hbmFnZXIgPSBuZXcgRXZvQ29udHJvbFN0YXRlTWFuYWdlcih0aGlzLmNvbnRyb2wsIHRoaXMuc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHRlbXBsYXRlIGRyaXZlbiBmb3JtcyBhbGxvd2VkIHdpdGggRXZvVWkga2l0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNob3dFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYDxsYWJlbCBjbGFzcz1cImV2by1jaGVja2JveFwiPlxuICAgIDxpbnB1dCBjbGFzcz1cImV2by1jaGVja2JveF9faW5wdXRcIlxuICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICBbZXZvVWlDbGFzc109XCJjaGVja2JveENsYXNzXCJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiZXZvLWNoZWNrYm94X190ZXh0XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG48L2xhYmVsPlxuPGV2by1jb250cm9sLWVycm9yICpuZ0lmPVwic2hvd0Vycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc01lc3NhZ2VzXT1cImVycm9yc01lc3NhZ2VzXCI+PC9ldm8tY29udHJvbC1lcnJvcj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tY2hlY2tib3h7bWFyZ2luOjB9LmV2by1jaGVja2JveF9faW5wdXR7ZGlzcGxheTpub25lfS5ldm8tY2hlY2tib3hfX3RleHR7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1sZWZ0OjI2cHg7Y29sb3I6IzIxMjEyMTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MnB4O2xlZnQ6MDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czozcHh9aW5wdXQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtib3JkZXItY29sb3I6IzQ0OGFmZjtiYWNrZ3JvdW5kOnVybCgvYXNzZXRzL2V2by11aS1raXQvaWNvbnMvY2hlY2tib3gtY2hlY2suc3ZnKSBjZW50ZXIgbm8tcmVwZWF0ICM0NDhhZmZ9aW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSsuZXZvLWNoZWNrYm94X190ZXh0e2N1cnNvcjpkZWZhdWx0fWlucHV0OmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2fWlucHV0OmRpc2FibGVkOmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dHtjdXJzb3I6ZGVmYXVsdH1pbnB1dDpkaXNhYmxlZDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle29wYWNpdHk6LjV9aW5wdXQuZXZvLWNoZWNrYm94X2ludmFsaWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNmMjJ9YF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvQ2hlY2tib3hDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3ZhbHVlOiBib29sZWFuO1xuXG4gICAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNoZWNrYm94Q2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnaW52YWxpZCc6IHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFdm9Db250cm9sRXJyb3Ige1xuICAgIFtlcnJvcjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jb250cm9sLWVycm9yJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tZXJyb3JcIiAqbmdGb3I9XCJsZXQgZXJyb3JNc2cgb2YgZXJyb3JzTWFwOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgIDxzcGFuICpuZ0lmPVwic2hvd0Vycm9yKGkpXCI+e3sgZXJyb3JNc2cgfX08L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tZXJyb3J7Zm9udC1zaXplOjE0cHg7Y29sb3I6I2YyMjtmb250LXN0eWxlOml0YWxpYzttYXJnaW4tdG9wOjEwcHh9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBlcnJvcnM6IGFueTtcbiAgICBASW5wdXQoKSBlcnJvcnNNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvcjtcbiAgICBASW5wdXQoKSBzaG93Q291bnQgPSAxO1xuXG4gICAgcHJpdmF0ZSBkZWZhdWx0RXJyb3JNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvciA9IHtcbiAgICAgICAgcmVxdWlyZWQ6ICfDkMKXw5DCsMOQwr/DkMK+w5DCu8OQwr3DkMK4w5HCgsOQwrUgw5DCv8OQwr7DkMK7w5DCtScsXG4gICAgICAgIGVtYWlsOiAnw5DCncOQwrXDkMK/w5HCgMOQwrDDkMKyw5DCuMOQwrvDkcKMw5DCvcOQwr4gw5HCg8OQwrrDkMKww5DCt8OQwrDDkMK9w5DCsCDDkMK/w5DCvsORwofDkcKCw5DCsCcsXG4gICAgICAgIHBob25lOiAnw5DCksOQwrLDkMK1w5DCtMOQwrjDkcKCw5DCtSDDkcKCw5DCtcOQwrvDkMK1w5HChMOQwr7DkMK9JyxcbiAgICB9O1xuXG4gICAgZ2V0IGVycm9yc01hcCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmRlZmF1bHRFcnJvck1lc3NhZ2VzLFxuICAgICAgICAgICAgLi4uKHRoaXMuZXJyb3JzTWVzc2FnZXMgfHwge30pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgcmV0dXJuIGVycm9yS2V5cy5tYXAoKGtleSkgPT4gZXJyb3JNZXNzYWdlc1trZXldKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKytpbmRleCA8PSB0aGlzLnNob3dDb3VudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldm8taW5wdXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8taW5wdXRcIiBbZXZvVWlDbGFzc109XCJpbnB1dENsYXNzXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZXZvLWlucHV0X19jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0ICNpbnB1dFxuICAgICAgICAgICAgICAgKm5nSWY9XCIhbWFza1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImV2by1pbnB1dF9fZmllbGRcIlxuICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoKVwiXG4gICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXG4gICAgICAgICAgICAgICB0eXBlPVwie3sgdHlwZSB9fVwiXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxpbnB1dCAjaW5wdXRcbiAgICAgICAgICAgICAgICpuZ0lmPVwibWFza1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImV2by1pbnB1dF9fZmllbGRcIlxuICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoKVwiXG4gICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXG4gICAgICAgICAgICAgICB0eXBlPVwie3sgdHlwZSB9fVwiXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgW3RleHRNYXNrXT1cIm1hc2tcIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8taW5wdXRfX2FkZGl0aW9uYWxcIlxuICAgICAgICAgICAgICpuZ0lmPVwiaGFzQWRkaXRpb25hbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2by1pbnB1dF9fdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICpuZ0lmPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNob3dUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVG9vbHRpcENsaWNrKCRldmVudClcIj4/PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidG9vbHRpcCAmJiB0b29sdGlwU2hvd25cIlxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25Ub29sdGlwQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNob3dUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWxcIj57eyB0b29sdGlwIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICBzdHlsZXM6IFtgLmV2by1pbnB1dHtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtoZWlnaHQ6NDhweDtsaW5lLWhlaWdodDo0OHB4O3doaXRlLXNwYWNlOm5vd3JhcDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjRweDt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzLGJvcmRlciAuM3M7b3V0bGluZTowfS5ldm8taW5wdXRfX2NvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo0cHg7Y3Vyc29yOnRleHR9LmV2by1pbnB1dF9mb2N1c2Vke2JveC1zaGFkb3c6MCAwIDJweCAwICM1NDZlN2EhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgIzU0NmU3YX0uZXZvLWlucHV0X2Rpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNiFpbXBvcnRhbnQ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X2Rpc2FibGVkIC5ldm8taW5wdXRfX2NvbnRhaW5lcntjdXJzb3I6ZGVmYXVsdH0uZXZvLWlucHV0X3ZhbGlke2JvcmRlci1jb2xvcjojOGJjMzRhfS5ldm8taW5wdXRfaW52YWxpZHtib3JkZXItY29sb3I6I2YyMn0uZXZvLWlucHV0X19maWVsZHtoZWlnaHQ6MTAwJTtib3JkZXI6bm9uZTttYXJnaW46MDtwYWRkaW5nOjAgMjBweDtvdXRsaW5lOjA7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOiMwMDA7ZmxleC1ncm93OjE7Ym9yZGVyLXJhZGl1czo0cHg7d2lkdGg6MTAwJX0uZXZvLWlucHV0X19maWVsZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWI7b3BhY2l0eToxfS5ldm8taW5wdXRfX2ZpZWxkOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNiFpbXBvcnRhbnQ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X19maWVsZDpub3QoOmxhc3QtY2hpbGQpe3BhZGRpbmctcmlnaHQ6MH0uZXZvLWlucHV0X190b29sdGlwey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTttYXJnaW46MCAxMHB4O3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojZWNlZmYxO2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1mYW1pbHk6XCJPcGVuIFNhbnNcIixBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxOHB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjojNTQ2ZTdhO2N1cnNvcjpwb2ludGVyfS5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTt0b3A6Y2FsYygxMDAlIC0gMnB4KTtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjojZmZmOGU2O3otaW5kZXg6MTtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjEwcHggMTBweCAxMHB4IDIwcHg7Y29sb3I6IzIxMjEyMTtkaXNwbGF5OmZsZXg7Ym94LXNoYWRvdzowIDRweCAxMnB4IDAgcmdiYSgwLDAsMCwuMik7bGluZS1oZWlnaHQ6bm9ybWFsO3doaXRlLXNwYWNlOm5vcm1hbDtjdXJzb3I6ZGVmYXVsdH0uZXZvLWlucHV0X190b29sdGlwLWxhYmVsOmJlZm9yZXtjb250ZW50OicnO3RvcDotMjBweDtsZWZ0OmNhbGMoMTAwJSAtIDM0cHgpO2JvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjZmZmOGU2O3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmV9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZXZvLWlucHV0X190b29sdGlwLWxhYmVse2xlZnQ6Y2FsYyg1MCUgLSAyMnB4KX0uZXZvLWlucHV0X190b29sdGlwLWxhYmVsOmJlZm9yZXtjb250ZW50OicnO3RvcDotMjBweDtsZWZ0OmNhbGMoNTAlIC0gMTJweCk7Ym9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNmZmY4ZTY7cG9zaXRpb246YWJzb2x1dGV9fWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0lucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b0lucHV0Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgQElucHV0KCkgbWFzazogYW55O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0RWxlbWVudDtcblxuICBvbkNoYW5nZTtcbiAgb25Ub3VjaGVkO1xuXG4gIHB1YmxpYyB0b29sdGlwU2hvd24gPSBmYWxzZTtcblxuICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBmb2N1c2VkID0gZmFsc2U7XG4gIHByaXZhdGUgdG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSB8fCB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpbnB1dENsYXNzKCk6IHtbY3NzQ2xhc3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2ZvY3VzZWQnOiB0aGlzLmZvY3VzZWQsXG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgJ3ZhbGlkJzogdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMudmFsaWRdLFxuICAgICAgJ2ludmFsaWQnOiB0aGlzLnN0YXRlTWFuYWdlci5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXVxuICAgIH07XG4gIH1cblxuICBnZXQgaGFzQWRkaXRpb25hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnRvb2x0aXA7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gIH1cblxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgb25Ub29sdGlwQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBoaWRlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy50b29sdGlwU2hvd24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAyNSk7XG4gIH1cblxuICBzaG93VG9vbHRpcCgpIHtcbiAgICB0aGlzLnRvb2x0aXBTaG93biA9IHRydWU7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1NlcmlhbGl6YWJsZSc7XG5cbmV4cG9ydCBlbnVtIEV2b0Jhbm5lclR5cGVzIHtcbiAgbGFyZ2UgPSAnbGFyZ2UnLFxuICBzbWFsbCA9ICdzbWFsbCcsXG4gIGZ1bGxXaWR0aCA9ICdmdWxsLXdpZHRoJyxcbn1cblxuZXhwb3J0IGVudW0gRXZvQmFubmVyTG9jYXRpb25zIHtcbiAgbWFpbiA9ICdNYWluJyxcbiAgY2F0ZWdvcnkgPSAnQ2F0ZWdvcnknXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2b0Jhbm5lckFuYWx5dGljcyB7XG4gIHVybDogc3RyaW5nO1xuICBkYXRhOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY3JlYXRpdmU6IHN0cmluZztcbiAgICBwb3NpdGlvbjogc3RyaW5nO1xuICAgIGRpbWVuc2lvbjc/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBFdm9CYW5uZXIgZXh0ZW5kcyBTZXJpYWxpemFibGUge1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGJhbm5lclBvc2l0aW9uTmFtZXMgPSB7XG4gICAgW0V2b0Jhbm5lckxvY2F0aW9ucy5tYWluXTogW1xuICAgICAgJ21haW4nLFxuICAgICAgJ3RvcCcsXG4gICAgICAnYm90dG9tJ1xuICAgIF0sXG4gICAgW0V2b0Jhbm5lckxvY2F0aW9ucy5jYXRlZ29yeV06IFtcbiAgICAgICdtYWluJ1xuICAgIF1cbiAgfTtcbiAgYnV0dG9uOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldm8tYmFubmVyJyxcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cImV2by1iYW5uZXJcIlxuICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgIFthdHRyLmhyZWZdPVwiYmFubmVyPy51cmxcIlxuICAgKGNsaWNrKT1cIm9uQmFubmVyQ2xpY2soKVwiXG4gICBbZXZvVWlDbGFzc109XCJ0eXBlXCJcbiAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGJhbm5lcj8uYmFja2dyb3VuZH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLWJhbm5lcl9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWJhbm5lcl9fdGl0bGVcIj57eyBiYW5uZXI/LnRpdGxlIH19PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdoaXRlIHByb21vLWJ0blwiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGJhbm5lcj8uYmFja2dyb3VuZH1cIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYmFubmVyPy5idXR0b25cIj57eyBiYW5uZXI/LmJ1dHRvbiB9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxpbWcgY2xhc3M9XCJldm8tYmFubmVyX19pbWdcIlxuICAgICAgICAgc3JjPVwie3sgYmFubmVyPy5pbWFnZSB9fVwiXG4gICAgICAgICBhbHQ9XCJ7eyBiYW5uZXI/LnRpdGxlIH19XCI+XG48L2E+XG5gLFxuICBzdHlsZXM6IFtgLmV2by1iYW5uZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6NDMwcHg7cGFkZGluZzoxMnB4IDIwcHg7Ym9yZGVyLXJhZGl1czo2cHg7b3ZlcmZsb3c6aGlkZGVuO2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zc30uZXZvLWJhbm5lcjpob3Zlcntib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMil9LmV2by1iYW5uZXJfX2NvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG57aGVpZ2h0OjQwcHg7cGFkZGluZzowIDIwcHg7bWluLXdpZHRoOjE1NnB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7ZGlzcGxheTp0YWJsZS1jZWxsO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuOmhvdmVye2JhY2tncm91bmQ6I2ZmZn0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuOmFjdGl2ZXtib3gtc2hhZG93Om5vbmV9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0biBzcGFue2ZvbnQtc2l6ZToxOHB4fS5ldm8tYmFubmVyX190aXRsZXtmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxLjM7Zm9udC1zaXplOjMwcHg7bWFyZ2luLWJvdHRvbToxMHB4fS5ldm8tYmFubmVyX19kZXNjcmlwdGlvbntmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjM7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1ib3R0b206MTBweH0uZXZvLWJhbm5lcl9faW1ne3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjA7d2lkdGg6MjkwcHg7aGVpZ2h0OjI5MHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGh7cGFkZGluZzoyMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX3RpdGxle2xpbmUtaGVpZ2h0OjM4cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tYmFubmVye3BhZGRpbmc6MzBweCA0MHB4fS5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MCV9LmV2by1iYW5uZXJfX2Rlc2NyaXB0aW9ue21heC13aWR0aDoyNTBweH0uZXZvLWJhbm5lcl9faW1ne3dpZHRoOjQzMHB4O2hlaWdodDo0MzBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoe2hlaWdodDoyNDBweDtwYWRkaW5nOjMwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NTAlfS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtc2l6ZTozNnB4O2xpbmUtaGVpZ2h0OjQ0cHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9faW1ne2hlaWdodDoyNDBweDt3aWR0aDoyNDBweH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZXZvLWJhbm5lcntwYWRkaW5nOjMwcHggNDBweH0uZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjMlfS5ldm8tYmFubmVyX3NtYWxse2hlaWdodDoyMTBweDtwYWRkaW5nOjIwcHh9LmV2by1iYW5uZXJfc21hbGwgLmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtc2l6ZToyMHB4O21hcmdpbi1ib3R0b206MjBweH0uZXZvLWJhbm5lcl9zbWFsbCAucHJvbW8tYnRue2hlaWdodDozMnB4fS5ldm8tYmFubmVyX3NtYWxsIC5ldm8tYmFubmVyX19pbWd7d2lkdGg6MjEwcHg7aGVpZ2h0OjIxMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYzJX19YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogJ1dpbmRvdycsICB1c2VWYWx1ZTogd2luZG93IH1cbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQmFubmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYmFubmVyOiBFdm9CYW5uZXI7XG4gIEBJbnB1dCgpIHR5cGU6IEV2b0Jhbm5lclR5cGVzID0gRXZvQmFubmVyVHlwZXMuc21hbGw7XG5cbiAgQE91dHB1dCgpIGJhbm5lckNsaWNrOiBFdmVudEVtaXR0ZXI8RXZvQmFubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZvQmFubmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ1dpbmRvdycpIHByaXZhdGUgd2luZG93OiBhbnksXG4gICkge1xuICB9XG5cbiAgb25CYW5uZXJDbGljaygpIHtcbiAgICB0aGlzLmJhbm5lckNsaWNrLmVtaXQodGhpcy5iYW5uZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gRXZvU2lkZWJhclR5cGVzIHtcbiAgICBiYXNrZXQgPSAnYmFza2V0JyxcbiAgICBwYXJ0bmVyQXV0aCA9ICdwYXJ0bmVyQXV0aCcsXG4gICAgcHJvbW9Db2RlID0gJ3Byb21vQ29kZScsXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdm9TaWRlYmFyU2VydmljZSB7XG4gICAgaXNTaWRlYmFyVmlzaWJsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRTaWRlYmFycyA9IHt9O1xuXG4gICAgZGVyZWdpc3RlcihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICBpZiAoIShpZCBpbiBFdm9TaWRlYmFyVHlwZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTaWRlYmFyLiBVbmtub3duICcke2lkfScsIHBsZWFzZSBhZGQgdGhpcyBpZCBpbiBlbnVtYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlbihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNTaWRlYmFyVmlzaWJsZSQubmV4dCh0aGlzLnJlZ2lzdGVyZWRTaWRlYmFycyk7XG4gICAgfVxuXG4gICAgY2xvc2UoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NpZGViYXJWaXNpYmxlJC5uZXh0KHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IGFzIG9ic2VydmFibGVGcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEtleSB9IGZyb20gJ3RzLWtleWNvZGUtZW51bSc7XG5cbmltcG9ydCB7IEV2b1NpZGViYXJTZXJ2aWNlLCBFdm9TaWRlYmFyVHlwZXMgfSBmcm9tICcuL2V2by1zaWRlYmFyLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLXNpZGViYXInLFxuICAgIHN0eWxlczogW2AuZXZvLXNpZGViYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDoxMjAlO2JvdHRvbTowO3otaW5kZXg6MzAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaGFkb3c6MCAwIDEycHggcmdiYSgwLDAsMCwuMjUpfUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJ7bGVmdDoxMDAlO21hcmdpbi1sZWZ0OjQwcHg7d2lkdGg6Njc0cHg7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuNXM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzO3RyYW5zaXRpb246dHJhbnNmb3JtIC41cywtd2Via2l0LXRyYW5zZm9ybSAuNXN9fS5ldm8tc2lkZWJhcl9hY3RpdmV7bGVmdDowfS5ldm8tc2lkZWJhcl9faGVhZGVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2ZsZXgtc2hyaW5rOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VjZWZmMTtwYWRkaW5nOjIwcHggMCA4cHg7bWFyZ2luOjAgMTVweH1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX2FjdGl2ZXtsZWZ0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNzE0cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC03MTRweCl9LmV2by1zaWRlYmFyX19oZWFkZXJ7bWFyZ2luOjAgMzBweH19LmV2by1zaWRlYmFyX190aXRsZXtmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzMzZjQ4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2hlYWRlcntwYWRkaW5nLXRvcDozOHB4fS5ldm8tc2lkZWJhcl9fdGl0bGV7Zm9udC1zaXplOjMwcHg7cGFkZGluZzowfX0uZXZvLXNpZGViYXJfX2Nsb3Nle3BhZGRpbmc6OHB4O3RyYW5zaXRpb246b3BhY2l0eSAuM3M7bWFyZ2luOjJweCAtOHB4IDAgMzBweDtjdXJzb3I6cG9pbnRlcn0uZXZvLXNpZGViYXJfX2Nsb3NlOmhvdmVye29wYWNpdHk6Ljh9LmV2by1zaWRlYmFyX19jbG9zZS1pY29ue3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7Y29sb3I6IzU0NmU3YTtiYWNrZ3JvdW5kOnVybCgvYXNzZXRzL2V2by11aS1raXQvaWNvbnMvY2xvc2Uuc3ZnKX0uZXZvLXNpZGViYXJfX2NvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWdyb3c6MTtwYWRkaW5nOjIwcHggMTVweCA0MHB4O292ZXJmbG93LXk6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19jb250ZW50e3BhZGRpbmc6NDBweCAxNXB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX19jb250ZW50e3BhZGRpbmc6NDBweCAzMHB4fX0uZXZvLXNpZGViYXJfX2Zvb3RlcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtc2hyaW5rOjA7cGFkZGluZzozMHB4IDE1cHg7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmV2by1zaWRlYmFyX19mb290ZXI6ZW1wdHl7ZGlzcGxheTpub25lfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2Zvb3RlcntmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZzoxOHB4IDE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfX2Zvb3RlcntwYWRkaW5nOjE4cHggMzBweH19LmV2by1zaWRlYmFyX19idXR0b25ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzozMHB4IDAgMTBweH0uZXZvLXNpZGViYXJfX2J1dHRvbnNfYm9yZGVye2JvcmRlci10b3A6MXB4IHNvbGlkICNlY2VmZjE7bWFyZ2luLXRvcDo1MHB4fS5ldm8tc2lkZWJhcl9fYnV0dG9uKy5ldm8tc2lkZWJhcl9fYnV0dG9ue21hcmdpbi10b3A6MjBweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19idXR0b25ze2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nLWJvdHRvbTowfS5ldm8tc2lkZWJhcl9fYnV0dG9uKy5ldm8tc2lkZWJhcl9fYnV0dG9ue21hcmdpbi10b3A6MH19YF0sXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZmFkZS1iYWNrZ3JvdW5kIGZhZGUtYmFja2dyb3VuZF9vdmVyLWFsbFwiXG4gICAgICpuZ0lmPVwic3RhdGVzLmlzVmlzaWJsZVwiXG4gICAgIChjbGljayk9XCJjbG9zZVNpZGViYXIoKVwiXG4+PC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJldm8tc2lkZWJhclwiIFtuZ0NsYXNzXT1cInsnZXZvLXNpZGViYXJfYWN0aXZlJyA6IHN0YXRlcy5pc1Zpc2libGV9XCIgPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9faGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fY2xvc2VcIiAoY2xpY2spPVwic2lkZWJhclNlcnZpY2UuY2xvc2UoaWQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2Nsb3NlLWljb25cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2Zvb3RlclwiPjxuZy1jb250ZW50IHNlbGVjdD1cIltmb290ZXJdXCI+PC9uZy1jb250ZW50PjwvZGl2PiA8IS0tw5HCh8ORwoLDkMK+w5DCscORwosgOmVtcHR5IMORwoDDkMKww5DCscOQwr7DkcKCw5DCsMOQwrssIMOQwr3DkMK1IMOQwrTDkMK+w5DCu8OQwrbDkMK9w5DCviDDkMKxw5HCi8ORwoLDkcKMIMOQwrLDkMK9w5HCg8ORwoLDkcKAw5DCuCBldm8tc2lkZWJhcl9fZm9vdGVyIMOQwrLDkMK+w5DCvsOQwrHDkcKJw5DCtSDDkMK9w5DCuMORwofDkMK1w5DCs8OQwr4sIMOQwrTDkMKww5DCtsOQwrUgw5DCv8ORwoDDkMK+w5DCscOQwrXDkMK7w5DCsC0tPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9TaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAgIEBJbnB1dCgpIGlkOiBFdm9TaWRlYmFyVHlwZXM7XG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAga2V5VXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBzdGF0ZXMgPSB7XG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzaWRlYmFyU2VydmljZTogRXZvU2lkZWJhclNlcnZpY2UpIHt9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5kZXJlZ2lzdGVyKHRoaXMuaWQpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuaWQpO1xuXG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuaXNTaWRlYmFyVmlzaWJsZSQuc3Vic2NyaWJlKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pZCBpbiBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMuaXNWaXNpYmxlID0gcGF5bG9hZFt0aGlzLmlkXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVzLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVRvS2V5RXZlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlVcFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VTaWRlYmFyKCkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmNsb3NlKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9LZXlFdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVGcm9tRXZlbnQoZG9jdW1lbnQuYm9keSwgJ2tleXVwJykuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleS5Fc2NhcGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmNsb3NlKHRoaXMuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBJdGVyYWJsZURpZmZlcnMsIEtleVZhbHVlRGlmZmVycywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgaXNPYmplY3QgPSAoaXRlbSkgPT4gaXRlbSAhPSBudWxsICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JztcbmNvbnN0IGlzU3RyaW5nID0gKGl0ZW0pID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJztcbmNvbnN0IGlzQXJyYXkgPSAoaXRlbSkgPT4gQXJyYXkuaXNBcnJheShpdGVtKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2V2b1VpQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUNsYXNzRGlyZWN0aXZlIGV4dGVuZHMgTmdDbGFzcyB7XG4gIEBJbnB1dCgnZXZvVWlDbGFzcycpXG4gIHNldCBzZXR0ZXJPZkNsYXNzKGRhdGE6IGFueSkge1xuICAgIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YS5tYXAoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtjbGFzc05hbWV9YCk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgZGF0YSA9IE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZSgobmV3RGF0YTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBuZXdEYXRhW2Ake3RoaXMucHJlZml4fV8ke2tleX1gXSA9IGRhdGFba2V5XTtcbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgICB9LCB7fSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhkYXRhKSkge1xuICAgICAgZGF0YSA9IGRhdGFcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgobXlDbGFzcykgPT4gYCR7dGhpcy5wcmVmaXh9XyR7bXlDbGFzc31gKVxuICAgICAgICAuam9pbignICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgdHlwZSBub3QgYWxsb3dlZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLm5nQ2xhc3MgPSBkYXRhO1xuICB9XG5cbiAgbmdDbGFzczogYW55O1xuXG4gIHByaXZhdGUgcHJlZml4OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgICAgIF9uZ0VsOiBFbGVtZW50UmVmLCBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKF9pdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnMsIF9uZ0VsLCBfcmVuZGVyZXIpO1xuICAgIHRoaXMucHJlZml4ID0gX25nRWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RbMF07XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5cbmltcG9ydCB7IEV2b0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NoZWNrYm94Q29tcG9uZW50ICB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY2hlY2tib3gvZXZvLWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0Jhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYmFubmVyL2V2by1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b1NpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b1NpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1zaWRlYmFyL2V2by1zaWRlYmFyLnNlcnZpY2UnO1xuZXhwb3J0IHsgRXZvU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuc2VydmljZSc7XG5cbmltcG9ydCB7IEV2b1VpQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IGFueSA9IFtcbiAgRXZvQnV0dG9uQ29tcG9uZW50LFxuICBFdm9DaGVja2JveENvbXBvbmVudCxcbiAgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50LFxuICBFdm9JbnB1dENvbXBvbmVudCxcbiAgRXZvQmFubmVyQ29tcG9uZW50LFxuICBFdm9TaWRlYmFyQ29tcG9uZW50LFxuXTtcblxuY29uc3QgZGlyZWN0aXZlczogYW55ID0gW1xuICBFdm9VaUNsYXNzRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgYnVuZGxlOiBhbnkgPSBbXG4gIC4uLmNvbXBvbmVudHMsXG4gIC4uLmRpcmVjdGl2ZXNcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlLaXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV2b1VpS2l0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEV2b1NpZGViYXJTZXJ2aWNlLFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuXG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJDb250ZW50Q2hpbGQiLCJGb3JtQ29udHJvbE5hbWUiLCJGb3JtQ29udHJvbERpcmVjdGl2ZSIsInRzbGliXzEuX19leHRlbmRzIiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiVmlld0NoaWxkIiwiRXZlbnRFbWl0dGVyIiwiSW5qZWN0IiwiT3V0cHV0IiwiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIm9ic2VydmFibGVGcm9tRXZlbnQiLCJLZXkiLCJEaXJlY3RpdmUiLCJJdGVyYWJsZURpZmZlcnMiLCJLZXlWYWx1ZURpZmZlcnMiLCJSZW5kZXJlcjIiLCJOZ0NsYXNzIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlRleHRNYXNrTW9kdWxlIiwiQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBeUNJLDRCQUFvQixLQUFpQjtZQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZOzRCQU5qQixLQUFLOzRCQUdOLEtBQUs7U0FLdkI7UUFFRCxzQkFBSSw0Q0FBWTs7O2dCQUFoQjtnQkFDSSxxQkFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO2dCQUU3QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxD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