(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('tslib'), require('@angular/common'), require('angular2-text-mask')) :
    typeof define === 'function' && define.amd ? define('evo-ui-kit', ['exports', '@angular/core', '@angular/forms', 'tslib', '@angular/common', 'angular2-text-mask'], factory) :
    (factory((global['evo-ui-kit'] = {}),global.ng.core,global.ng.forms,global.tslib,global.ng.common,null));
}(this, (function (exports,core,forms,tslib_1,common,angular2TextMask) { 'use strict';

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
                        styles: ["@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}.evo-button{display:inline-block;padding:0 30px;height:44px;line-height:44px;vertical-align:middle;text-align:center;background-image:none;white-space:nowrap;font-family:museo,Arial,sans-serif;font-weight:700;font-size:16px;color:#fff;text-transform:uppercase;border-radius:30px;background-color:#ff7800;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s}.evo-button:hover{background-color:#ff9d47;color:#fff}.evo-button:active,.evo-button:focus{background-color:#cc6000;color:#fff;outline:0}.evo-button:disabled,.evo-button_disabled{background:#d6d6d6!important;border-color:#d6d6d6!important;color:#fff!important;cursor:not-allowed}.evo-button_lined{background-color:#fff;color:#ff7800;border:1px solid #ff7800}.evo-button_lined:hover{background-color:#ff7800;color:#fff}.evo-button_lined:active,.evo-button_lined:focus{background-color:#cc6000;color:#fff;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{background-color:#fff;color:#546e7a;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{background-color:#546e7a;color:#fff}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{background-color:#283239;color:#fff;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{background-color:#fff;color:#8bc34a;border:1px solid #8bc34a}.evo-button_green-lined:hover{background-color:#8bc34a;color:#fff}.evo-button_green-lined:active,.evo-button_green-lined:focus{background-color:#6f9c3b;color:#fff;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_full-width{width:100%;text-align:center}.evo-button_small{padding:0 20px;height:30px;line-height:30px;font-size:14px}.evo-button_large{padding:0 40px;height:60px;line-height:60px;font-size:18px}.evo-button_icon{padding-left:22px;padding-right:22px;display:inline-flex;align-items:center}.evo-button_loading{pointer-events:none;position:relative}.evo-button__dots{position:absolute;top:50%;left:50%;margin-left:-30px;margin-top:-5px}.evo-button__dot{width:10px;height:10px;border-radius:50%;float:left;background:currentColor;margin:0 5px;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}"],
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
    ];
    var /** @type {?} */ directives = [
        EvoUiClassDirective,
    ];
    var /** @type {?} */ bundle = tslib_1.__spread(components, directives);
    var EvoUiKitModule = (function () {
        function EvoUiKitModule() {
        }
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

    exports.EvoUiKitModule = EvoUiKitModule;
    exports.ɵc = EvoBaseControl;
    exports.ɵf = EvoBannerComponent;
    exports.ɵa = EvoButtonComponent;
    exports.ɵb = EvoCheckboxComponent;
    exports.ɵd = EvoControlErrorComponent;
    exports.ɵe = EvoInputComponent;
    exports.ɵg = EvoUiClassDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWJ1dHRvbi9ldm8tYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0udHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jaGVja2JveC9ldm8tY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8taW5wdXQvZXZvLWlucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL1NlcmlhbGl6YWJsZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYmFubmVyL2V2by1iYW5uZXIuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9kaXJlY3RpdmVzL2V2by11aS1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL2V2by11aS1raXQvbGliL2V2by11aS1raXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIEV2b0J1dHRvblNpemVzIHtcbiAgICBmdWxsV2lkdGggPSAnZnVsbC13aWR0aCcsXG4gICAgc21hbGwgPSAnc21hbGwnLFxuICAgIGxhcmdlID0gJ2xhcmdlJyxcbn1cblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU3R5bGVzIHtcbiAgICBsaW5lZCA9ICdsaW5lZCcsXG4gICAgZGFya2JsdWUgPSAnZGFya2JsdWUnLFxuICAgIGRhcmtibHVlTGluZWQgPSAnZGFya2JsdWUtbGluZWQnLFxuICAgIGdyZWVuID0gJ2dyZWVuJyxcbiAgICBncmVlbmxpbmVkID0gJ2dyZWVuLWxpbmVkJyxcbiAgICBwdXJwbGUgPSAncHVycGxlJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1idXR0b25cIiBbZXZvVWlDbGFzc109XCJ0b3RhbENsYXNzZXNcIiBbbmdTdHlsZV09XCJ0b3RhbFN0eWxlc1wiPlxuICAgIDxzcGFuICpuZ0lmPVwiIWxvYWRpbmdcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cImV2by1idXR0b25fX2RvdHNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYEAtd2Via2l0LWtleWZyYW1lcyBmeHs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19QGtleWZyYW1lcyBmeHs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19LmV2by1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowIDMwcHg7aGVpZ2h0OjQ0cHg7bGluZS1oZWlnaHQ6NDRweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1pbWFnZTpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MTZweDtjb2xvcjojZmZmO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItcmFkaXVzOjMwcHg7YmFja2dyb3VuZC1jb2xvcjojZmY3ODAwO2JvcmRlcjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyxjb2xvciAuM3MsYm9yZGVyIC4zc30uZXZvLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjlkNDc7Y29sb3I6I2ZmZn0uZXZvLWJ1dHRvbjphY3RpdmUsLmV2by1idXR0b246Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojY2M2MDAwO2NvbG9yOiNmZmY7b3V0bGluZTowfS5ldm8tYnV0dG9uOmRpc2FibGVkLC5ldm8tYnV0dG9uX2Rpc2FibGVke2JhY2tncm91bmQ6I2Q2ZDZkNiFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOiNkNmQ2ZDYhaW1wb3J0YW50O2NvbG9yOiNmZmYhaW1wb3J0YW50O2N1cnNvcjpub3QtYWxsb3dlZH0uZXZvLWJ1dHRvbl9saW5lZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6I2ZmNzgwMDtib3JkZXI6MXB4IHNvbGlkICNmZjc4MDB9LmV2by1idXR0b25fbGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY3ODAwO2NvbG9yOiNmZmZ9LmV2by1idXR0b25fbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2xpbmVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2NjNjAwMDtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojY2M2MDAwfS5ldm8tYnV0dG9uX2RhcmtibHVle2JhY2tncm91bmQtY29sb3I6IzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM3NTk2YTV9LmV2by1idXR0b25fZGFya2JsdWU6YWN0aXZlLC5ldm8tYnV0dG9uX2RhcmtibHVlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzI4MzIzOX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzU0NmU3YTtib3JkZXI6MXB4IHNvbGlkICM1NDZlN2F9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhO2NvbG9yOiNmZmZ9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzI4MzIzOTtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojMjgzMjM5fS5ldm8tYnV0dG9uX2dyZWVue2JhY2tncm91bmQtY29sb3I6IzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNhMmNmNmV9LmV2by1idXR0b25fZ3JlZW46YWN0aXZlLC5ldm8tYnV0dG9uX2dyZWVuOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzZmOWMzYn0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzhiYzM0YTtib3JkZXI6MXB4IHNvbGlkICM4YmMzNGF9LmV2by1idXR0b25fZ3JlZW4tbGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhO2NvbG9yOiNmZmZ9LmV2by1idXR0b25fZ3JlZW4tbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzZmOWMzYjtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojNmY5YzNifS5ldm8tYnV0dG9uX3B1cnBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNhYjRhYzN9LmV2by1idXR0b25fcHVycGxlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2NjNThlOH0uZXZvLWJ1dHRvbl9wdXJwbGU6YWN0aXZlLC5ldm8tYnV0dG9uX3B1cnBsZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM5MzM1YWJ9LmV2by1idXR0b25fZnVsbC13aWR0aHt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyfS5ldm8tYnV0dG9uX3NtYWxse3BhZGRpbmc6MCAyMHB4O2hlaWdodDozMHB4O2xpbmUtaGVpZ2h0OjMwcHg7Zm9udC1zaXplOjE0cHh9LmV2by1idXR0b25fbGFyZ2V7cGFkZGluZzowIDQwcHg7aGVpZ2h0OjYwcHg7bGluZS1oZWlnaHQ6NjBweDtmb250LXNpemU6MThweH0uZXZvLWJ1dHRvbl9pY29ue3BhZGRpbmctbGVmdDoyMnB4O3BhZGRpbmctcmlnaHQ6MjJweDtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uZXZvLWJ1dHRvbl9sb2FkaW5ne3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246cmVsYXRpdmV9LmV2by1idXR0b25fX2RvdHN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW4tbGVmdDotMzBweDttYXJnaW4tdG9wOi01cHh9LmV2by1idXR0b25fX2RvdHt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2JvcmRlci1yYWRpdXM6NTAlO2Zsb2F0OmxlZnQ7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7bWFyZ2luOjAgNXB4Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LWFuaW1hdGlvbjoxcyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgaW5maW5pdGUgZnh9LmV2by1idXR0b25fX2RvdDpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb246MXMgLjNzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyAuM3MgaW5maW5pdGUgZnh9LmV2by1idXR0b25fX2RvdDpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb246MXMgLjZzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyAuNnMgaW5maW5pdGUgZnh9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRXZvQnV0dG9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBjb2xvcjogRXZvQnV0dG9uU3R5bGVzO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2l6ZTogRXZvQnV0dG9uU2l6ZXM7XG5cbiAgICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjbGllbnRXaWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xuXG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmcpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnbG9hZGluZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGdldCB0b3RhbFN0eWxlcygpOiB7W3N0eWxlS2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJlc3VsdFsnd2lkdGgnXSA9IGAke3RoaXMuY2xpZW50V2lkdGh9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jbGllbnRXaWR0aCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIEV2b0NvbnRyb2xTdGF0ZXMge1xuICB2YWxpZCA9ICd2YWxpZCcsXG4gIGludmFsaWQgPSAnaW52YWxpZCcsXG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJRXZvQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbFN0YXRlTWFuYWdlciB7XG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBjb25zdHJ1Y3Rvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGV4dHJhU3RhdGVzPzogSUV2b0NvbnRyb2xTdGF0ZSkge1xuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gIH1cblxuICBnZXQgY3VycmVudFN0YXRlKCk6IElFdm9Db250cm9sU3RhdGUge1xuICAgIC8vIFRPRE8gbWVyZ2UgY29uZGl0aW9ucyB3aXRoIGV4dHJhU3RhdGVzXG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wudmFsaWQsXG4gICAgICBpbnZhbGlkOiB0aGlzLmNvbnRyb2wuZGlydHkgJiYgdGhpcy5jb250cm9sLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sLmludmFsaWQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUV2b0NvbnRyb2xTdGF0ZSB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlTWFuYWdlciB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyJztcbmltcG9ydCB7IElFdm9Db250cm9sRXJyb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcblxuZXhwb3J0IGNsYXNzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lKSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZTtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbERpcmVjdGl2ZSkgZm9ybUNvbnRyb2xEaXJlY3RpdmU6IEZvcm1Db250cm9sRGlyZWN0aXZlO1xuICBASW5wdXQoKSBzdGF0ZTogSUV2b0NvbnRyb2xTdGF0ZTtcbiAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG5cbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuICBzdGF0ZU1hbmFnZXI6IEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXI7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZSAmJiB0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICB0aGlzLnN0YXRlTWFuYWdlciA9IG5ldyBFdm9Db250cm9sU3RhdGVNYW5hZ2VyKHRoaXMuY29udHJvbCwgdGhpcy5zdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdGVtcGxhdGUgZHJpdmVuIGZvcm1zIGFsbG93ZWQgd2l0aCBFdm9VaSBraXQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0nO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgPGxhYmVsIGNsYXNzPVwiZXZvLWNoZWNrYm94XCI+XG4gICAgPGlucHV0IGNsYXNzPVwiZXZvLWNoZWNrYm94X19pbnB1dFwiXG4gICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgIFtldm9VaUNsYXNzXT1cImNoZWNrYm94Q2xhc3NcIlxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJldm8tY2hlY2tib3hfX3RleHRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbjwvbGFiZWw+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1jaGVja2JveHttYXJnaW46MH0uZXZvLWNoZWNrYm94X19pbnB1dHtkaXNwbGF5Om5vbmV9LmV2by1jaGVja2JveF9fdGV4dHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLWxlZnQ6MjZweDtjb2xvcjojMjEyMTIxO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoycHg7bGVmdDowO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjNweH1pbnB1dDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JvcmRlci1jb2xvcjojNDQ4YWZmO2JhY2tncm91bmQ6dXJsKC9hc3NldHMvZXZvLXVpLWtpdC9pY29ucy9jaGVja2JveC1jaGVjay5zdmcpIGNlbnRlciBuby1yZXBlYXQgIzQ0OGFmZn1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpKy5ldm8tY2hlY2tib3hfX3RleHR7Y3Vyc29yOmRlZmF1bHR9aW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjZ9aW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0e2N1cnNvcjpkZWZhdWx0fWlucHV0OmRpc2FibGVkOmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7b3BhY2l0eTouNX1pbnB1dC5ldm8tY2hlY2tib3hfaW52YWxpZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtib3JkZXItY29sb3I6I2YyMn1gXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9DaGVja2JveENvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9DaGVja2JveENvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IGJvb2xlYW47XG5cbiAgICBvbkNoYW5nZSA9IChfKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgY2hlY2tib3hDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdpbnZhbGlkJzogdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2b0NvbnRyb2xFcnJvciB7XG4gICAgW2Vycm9yOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWNvbnRyb2wtZXJyb3InLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1lcnJvclwiICpuZ0Zvcj1cImxldCBlcnJvck1zZyBvZiBlcnJvcnNNYXA7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgPHNwYW4gKm5nSWY9XCJzaG93RXJyb3IoaSlcIj57eyBlcnJvck1zZyB9fTwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1lcnJvcntmb250LXNpemU6MTRweDtjb2xvcjojZjIyO2ZvbnQtc3R5bGU6aXRhbGljO21hcmdpbi10b3A6MTBweH1gXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFdm9Db250cm9sRXJyb3JDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGVycm9yczogYW55O1xuICAgIEBJbnB1dCgpIGVycm9yc01lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yO1xuICAgIEBJbnB1dCgpIHNob3dDb3VudCA9IDE7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRFcnJvck1lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yID0ge1xuICAgICAgICByZXF1aXJlZDogJ8OQwpfDkMKww5DCv8OQwr7DkMK7w5DCvcOQwrjDkcKCw5DCtSDDkMK/w5DCvsOQwrvDkMK1JyxcbiAgICAgICAgZW1haWw6ICfDkMKdw5DCtcOQwr/DkcKAw5DCsMOQwrLDkMK4w5DCu8ORwozDkMK9w5DCviDDkcKDw5DCusOQwrDDkMK3w5DCsMOQwr3DkMKwIMOQwr/DkMK+w5HCh8ORwoLDkMKwJyxcbiAgICAgICAgcGhvbmU6ICfDkMKSw5DCssOQwrXDkMK0w5DCuMORwoLDkMK1IMORwoLDkMK1w5DCu8OQwrXDkcKEw5DCvsOQwr0nLFxuICAgIH07XG5cbiAgICBnZXQgZXJyb3JzTWFwKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEVycm9yTWVzc2FnZXMsXG4gICAgICAgICAgICAuLi4odGhpcy5lcnJvcnNNZXNzYWdlcyB8fCB7fSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3JLZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICByZXR1cm4gZXJyb3JLZXlzLm1hcCgoa2V5KSA9PiBlcnJvck1lc3NhZ2VzW2tleV0pO1xuICAgIH1cblxuICAgIHNob3dFcnJvcihpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiArK2luZGV4IDw9IHRoaXMuc2hvd0NvdW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0nO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1pbnB1dFwiIFtldm9VaUNsYXNzXT1cImlucHV0Q2xhc3NcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJldm8taW5wdXRfX2NvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgICAgICAqbmdJZj1cIiFtYXNrXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X19maWVsZFwiXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ7eyB0eXBlIH19XCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgcGxhY2Vob2xkZXIgfX1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGlucHV0ICNpbnB1dFxuICAgICAgICAgICAgICAgKm5nSWY9XCJtYXNrXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X19maWVsZFwiXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ7eyB0eXBlIH19XCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgcGxhY2Vob2xkZXIgfX1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICBbdGV4dE1hc2tdPVwibWFza1wiXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1pbnB1dF9fYWRkaXRpb25hbFwiXG4gICAgICAgICAgICAgKm5nSWY9XCJoYXNBZGRpdGlvbmFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0X190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2hvd1Rvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhpZGVUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25Ub29sdGlwQ2xpY2soJGV2ZW50KVwiPj88L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0b29sdGlwICYmIHRvb2x0aXBTaG93blwiXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJvblRvb2x0aXBDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2hvd1Rvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhpZGVUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbFwiPnt7IHRvb2x0aXAgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbjwvZGl2PlxuPGV2by1jb250cm9sLWVycm9yICpuZ0lmPVwic2hvd0Vycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc01lc3NhZ2VzXT1cImVycm9yc01lc3NhZ2VzXCI+PC9ldm8tY29udHJvbC1lcnJvcj5cbmAsXG4gIHN0eWxlczogW2AuZXZvLWlucHV0e2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2hlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjQ4cHg7d2hpdGUtc3BhY2U6bm93cmFwO2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3MsYm9yZGVyIC4zcztvdXRsaW5lOjB9LmV2by1pbnB1dF9fY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjRweDtjdXJzb3I6dGV4dH0uZXZvLWlucHV0X2ZvY3VzZWR7Ym94LXNoYWRvdzowIDAgMnB4IDAgIzU0NmU3YSFpbXBvcnRhbnQ7Ym9yZGVyOjFweCBzb2xpZCAjNTQ2ZTdhfS5ldm8taW5wdXRfZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudDtjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfZGlzYWJsZWQgLmV2by1pbnB1dF9fY29udGFpbmVye2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfdmFsaWR7Ym9yZGVyLWNvbG9yOiM4YmMzNGF9LmV2by1pbnB1dF9pbnZhbGlke2JvcmRlci1jb2xvcjojZjIyfS5ldm8taW5wdXRfX2ZpZWxke2hlaWdodDoxMDAlO2JvcmRlcjpub25lO21hcmdpbjowO3BhZGRpbmc6MCAyMHB4O291dGxpbmU6MDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDA7Y29sb3I6IzAwMDtmbGV4LWdyb3c6MTtib3JkZXItcmFkaXVzOjRweDt3aWR0aDoxMDAlfS5ldm8taW5wdXRfX2ZpZWxkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5YjtvcGFjaXR5OjF9LmV2by1pbnB1dF9fZmllbGQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudDtjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOm5vdCg6bGFzdC1jaGlsZCl7cGFkZGluZy1yaWdodDowfS5ldm8taW5wdXRfX3Rvb2x0aXB7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO21hcmdpbjowIDEwcHg7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNlY2VmZjE7bGluZS1oZWlnaHQ6MjRweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LWZhbWlseTpcIk9wZW4gU2Fuc1wiLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiM1NDZlN2E7Y3Vyc29yOnBvaW50ZXJ9LmV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO3RvcDpjYWxjKDEwMCUgLSAycHgpO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY4ZTY7ei1pbmRleDoxO2JvcmRlci1yYWRpdXM6NHB4O3BhZGRpbmc6MTBweCAxMHB4IDEwcHggMjBweDtjb2xvcjojMjEyMTIxO2Rpc3BsYXk6ZmxleDtib3gtc2hhZG93OjAgNHB4IDEycHggMCByZ2JhKDAsMCwwLC4yKTtsaW5lLWhlaWdodDpub3JtYWw7d2hpdGUtc3BhY2U6bm9ybWFsO2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWw6YmVmb3Jle2NvbnRlbnQ6Jyc7dG9wOi0yMHB4O2xlZnQ6Y2FsYygxMDAlIC0gMzRweCk7Ym9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNmZmY4ZTY7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWx7bGVmdDpjYWxjKDUwJSAtIDIycHgpfS5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWw6YmVmb3Jle2NvbnRlbnQ6Jyc7dG9wOi0yMHB4O2xlZnQ6Y2FsYyg1MCUgLSAxMnB4KTtib3JkZXI6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2ZmZjhlNjtwb3NpdGlvbjphYnNvbHV0ZX19YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBASW5wdXQoKSBtYXNrOiBhbnk7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCd2YWx1ZScpIF92YWx1ZTogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXRFbGVtZW50O1xuXG4gIG9uQ2hhbmdlO1xuICBvblRvdWNoZWQ7XG5cbiAgcHVibGljIHRvb2x0aXBTaG93biA9IGZhbHNlO1xuXG4gIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIGZvY3VzZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlIHx8IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlucHV0Q2xhc3MoKToge1tjc3NDbGFzczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIHJldHVybiB7XG4gICAgICAnZm9jdXNlZCc6IHRoaXMuZm9jdXNlZCxcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAndmFsaWQnOiB0aGlzLnN0YXRlTWFuYWdlci5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy52YWxpZF0sXG4gICAgICAnaW52YWxpZCc6IHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdXG4gICAgfTtcbiAgfVxuXG4gIGdldCBoYXNBZGRpdGlvbmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudG9vbHRpcDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgfVxuXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICBvblRvb2x0aXBDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGhpZGVUb29sdGlwKCkge1xuICAgIHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCkge1xuICAgICAgICB0aGlzLnRvb2x0aXBTaG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIDI1KTtcbiAgfVxuXG4gIHNob3dUb29sdGlwKCkge1xuICAgIHRoaXMudG9vbHRpcFNob3duID0gdHJ1ZTtcbiAgICB0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi9jb21tb24vU2VyaWFsaXphYmxlJztcblxuZXhwb3J0IGVudW0gRXZvQmFubmVyVHlwZXMge1xuICBsYXJnZSA9ICdsYXJnZScsXG4gIHNtYWxsID0gJ3NtYWxsJyxcbiAgZnVsbFdpZHRoID0gJ2Z1bGwtd2lkdGgnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CYW5uZXJMb2NhdGlvbnMge1xuICBtYWluID0gJ01haW4nLFxuICBjYXRlZ29yeSA9ICdDYXRlZ29yeSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRXZvQmFubmVyQW5hbHl0aWNzIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGRhdGE6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjcmVhdGl2ZTogc3RyaW5nO1xuICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgZGltZW5zaW9uNz86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEV2b0Jhbm5lciBleHRlbmRzIFNlcmlhbGl6YWJsZSB7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgYmFubmVyUG9zaXRpb25OYW1lcyA9IHtcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLm1haW5dOiBbXG4gICAgICAnbWFpbicsXG4gICAgICAndG9wJyxcbiAgICAgICdib3R0b20nXG4gICAgXSxcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLmNhdGVnb3J5XTogW1xuICAgICAgJ21haW4nXG4gICAgXVxuICB9O1xuICBidXR0b246IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1iYW5uZXInLFxuICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwiZXZvLWJhbm5lclwiXG4gICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgW2F0dHIuaHJlZl09XCJiYW5uZXI/LnVybFwiXG4gICAoY2xpY2spPVwib25CYW5uZXJDbGljaygpXCJcbiAgIFtldm9VaUNsYXNzXT1cInR5cGVcIlxuICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX190aXRsZVwiPnt7IGJhbm5lcj8udGl0bGUgfX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2hpdGUgcHJvbW8tYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJiYW5uZXI/LmJ1dHRvblwiPnt7IGJhbm5lcj8uYnV0dG9uIH19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGltZyBjbGFzcz1cImV2by1iYW5uZXJfX2ltZ1wiXG4gICAgICAgICBzcmM9XCJ7eyBiYW5uZXI/LmltYWdlIH19XCJcbiAgICAgICAgIGFsdD1cInt7IGJhbm5lcj8udGl0bGUgfX1cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2AuZXZvLWJhbm5lcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo0MzBweDtwYWRkaW5nOjEycHggMjBweDtib3JkZXItcmFkaXVzOjZweDtvdmVyZmxvdzpoaWRkZW47Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzfS5ldm8tYmFubmVyOmhvdmVye2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4yKX0uZXZvLWJhbm5lcl9fY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bntoZWlnaHQ6NDBweDtwYWRkaW5nOjAgMjBweDttaW4td2lkdGg6MTU2cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246bWlkZGxlfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46aG92ZXJ7YmFja2dyb3VuZDojZmZmfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46YWN0aXZle2JveC1zaGFkb3c6bm9uZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuIHNwYW57Zm9udC1zaXplOjE4cHh9LmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuMztmb250LXNpemU6MzBweDttYXJnaW4tYm90dG9tOjEwcHh9LmV2by1iYW5uZXJfX2Rlc2NyaXB0aW9ue2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuMzttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWJvdHRvbToxMHB4fS5ldm8tYmFubmVyX19pbWd7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7cmlnaHQ6MDt3aWR0aDoyOTBweDtoZWlnaHQ6MjkwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aHtwYWRkaW5nOjIwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7bGluZS1oZWlnaHQ6MzhweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1iYW5uZXJ7cGFkZGluZzozMHB4IDQwcHh9LmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYwJX0uZXZvLWJhbm5lcl9fZGVzY3JpcHRpb257bWF4LXdpZHRoOjI1MHB4fS5ldm8tYmFubmVyX19pbWd7d2lkdGg6NDMwcHg7aGVpZ2h0OjQzMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGh7aGVpZ2h0OjI0MHB4O3BhZGRpbmc6MzBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo1MCV9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1zaXplOjM2cHg7bGluZS1oZWlnaHQ6NDRweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19pbWd7aGVpZ2h0OjI0MHB4O3dpZHRoOjI0MHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5ldm8tYmFubmVye3BhZGRpbmc6MzBweCA0MHB4fS5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MyV9LmV2by1iYW5uZXJfc21hbGx7aGVpZ2h0OjIxMHB4O3BhZGRpbmc6MjBweH0uZXZvLWJhbm5lcl9zbWFsbCAuZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1zaXplOjIwcHg7bWFyZ2luLWJvdHRvbToyMHB4fS5ldm8tYmFubmVyX3NtYWxsIC5wcm9tby1idG57aGVpZ2h0OjMycHh9LmV2by1iYW5uZXJfc21hbGwgLmV2by1iYW5uZXJfX2ltZ3t3aWR0aDoyMTBweDtoZWlnaHQ6MjEwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjMlfX1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiAnV2luZG93JywgIHVzZVZhbHVlOiB3aW5kb3cgfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9CYW5uZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBiYW5uZXI6IEV2b0Jhbm5lcjtcbiAgQElucHV0KCkgdHlwZTogRXZvQmFubmVyVHlwZXMgPSBFdm9CYW5uZXJUeXBlcy5zbWFsbDtcblxuICBAT3V0cHV0KCkgYmFubmVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnV2luZG93JykgcHJpdmF0ZSB3aW5kb3c6IGFueSxcbiAgKSB7XG4gIH1cblxuICBvbkJhbm5lckNsaWNrKCkge1xuICAgIHRoaXMuYmFubmVyQ2xpY2suZW1pdCh0aGlzLmJhbm5lcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEl0ZXJhYmxlRGlmZmVycywgS2V5VmFsdWVEaWZmZXJzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBpc09iamVjdCA9IChpdGVtKSA9PiBpdGVtICE9IG51bGwgJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnO1xuY29uc3QgaXNTdHJpbmcgPSAoaXRlbSkgPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnO1xuY29uc3QgaXNBcnJheSA9IChpdGVtKSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZXZvVWlDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBOZ0NsYXNzIHtcbiAgQElucHV0KCdldm9VaUNsYXNzJylcbiAgc2V0IHNldHRlck9mQ2xhc3MoZGF0YTogYW55KSB7XG4gICAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBkYXRhLm1hcCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3RoaXMucHJlZml4fV8ke2NsYXNzTmFtZX1gKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBkYXRhID0gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlKChuZXdEYXRhOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIG5ld0RhdGFbYCR7dGhpcy5wcmVmaXh9XyR7a2V5fWBdID0gZGF0YVtrZXldO1xuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICAgIH0sIHt9KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKChteUNsYXNzKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtteUNsYXNzfWApXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSB0eXBlIG5vdCBhbGxvd2VkIScpO1xuICAgIH1cblxuICAgIHRoaXMubmdDbGFzcyA9IGRhdGE7XG4gIH1cblxuICBuZ0NsYXNzOiBhbnk7XG5cbiAgcHJpdmF0ZSBwcmVmaXg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcbiAgICAgICAgX25nRWw6IEVsZW1lbnRSZWYsIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoX2l0ZXJhYmxlRGlmZmVycywgX2tleVZhbHVlRGlmZmVycywgX25nRWwsIF9yZW5kZXJlcik7XG4gICAgdGhpcy5wcmVmaXggPSBfbmdFbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcblxuaW1wb3J0IHsgRXZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1idXR0b24vZXZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ2hlY2tib3hDb21wb25lbnQgIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jaGVja2JveC9ldm8tY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWlucHV0L2V2by1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFdm9VaUNsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V2by11aS1jbGFzcy5kaXJlY3RpdmUnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnkgPSBbXG4gIEV2b0J1dHRvbkNvbXBvbmVudCxcbiAgRXZvQ2hlY2tib3hDb21wb25lbnQsXG4gIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCxcbiAgRXZvSW5wdXRDb21wb25lbnQsXG4gIEV2b0Jhbm5lckNvbXBvbmVudCxcbl07XG5cbmNvbnN0IGRpcmVjdGl2ZXM6IGFueSA9IFtcbiAgRXZvVWlDbGFzc0RpcmVjdGl2ZSxcbl07XG5cbmNvbnN0IGJ1bmRsZTogYW55ID0gW1xuICAuLi5jb21wb25lbnRzLFxuICAuLi5kaXJlY3RpdmVzXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRleHRNYXNrTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5idW5kbGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5idW5kbGUsXG4gIF0sXG4gIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpS2l0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIklucHV0IiwiQ29udGVudENoaWxkIiwiRm9ybUNvbnRyb2xOYW1lIiwiRm9ybUNvbnRyb2xEaXJlY3RpdmUiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIlZpZXdDaGlsZCIsIkV2ZW50RW1pdHRlciIsIkluamVjdCIsIk91dHB1dCIsIkRpcmVjdGl2ZSIsIkl0ZXJhYmxlRGlmZmVycyIsIktleVZhbHVlRGlmZmVycyIsIlJlbmRlcmVyMiIsIk5nQ2xhc3MiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiVGV4dE1hc2tNb2R1bGUiLCJDVVNUT01fRUxFTUVOVFNfU0NIRU1BIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUF5Q0ksNEJBQW9CLEtBQWlCO1lBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7NEJBTmpCLEtBQUs7NEJBR04sS0FBSztTQUt2QjtRQUVELHNCQUFJLDRDQUFZOzs7Z0JBQWhCO2dCQUNJLHFCQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7Z0JBRTdCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDM0I7Z0JBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1QjtnQkFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDM0I7Z0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzVCO2dCQUVELE9B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