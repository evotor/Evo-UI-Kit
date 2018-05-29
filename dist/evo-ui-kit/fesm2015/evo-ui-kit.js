import { Injectable, ContentChild, Input, Directive, ElementRef, IterableDiffers, KeyValueDiffers, Renderer2, Component, ChangeDetectionStrategy, EventEmitter, Inject, Output, forwardRef, ViewChild, NgModule, CUSTOM_ELEMENTS_SCHEMA, defineInjectable } from '@angular/core';
import { FormControlDirective, FormControlName, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoUiKitService {
    constructor() { }
}
EvoUiKitService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
EvoUiKitService.ctorParameters = () => [];
/** @nocollapse */ EvoUiKitService.ngInjectableDef = defineInjectable({ factory: function EvoUiKitService_Factory() { return new EvoUiKitService(); }, token: EvoUiKitService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoUiKitComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EvoUiKitComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-evo-ui-kit',
                template: `
    <p>
      evo-ui-kit works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
EvoUiKitComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoButtonComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.disabled = false;
        this._loading = false;
    }
    /**
     * @return {?}
     */
    get totalClasses() {
        const /** @type {?} */ classes = [];
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
    }
    /**
     * @return {?}
     */
    get totalStyles() {
        const /** @type {?} */ result = {};
        if (this._loading) {
            result['width'] = `${this.clientWidth}px`;
        }
        return result;
    }
    /**
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loading(value) {
        this.clientWidth = this.elRef.nativeElement.getBoundingClientRect().width;
        this._loading = value;
    }
}
EvoButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-button',
                template: `<div class="evo-button" [evoUiClass]="totalClasses" [ngStyle]="totalStyles">
    <span *ngIf="!loading">
        <ng-content></ng-content>
    </span>
    <span *ngIf="loading" class="evo-button__dots">
        <span class="evo-button__dot"></span>
        <span class="evo-button__dot"></span>
        <span class="evo-button__dot"></span>
    </span>
</div>
`,
                styles: [`@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}.evo-button{display:inline-block;padding:0 30px;height:44px;line-height:44px;vertical-align:middle;text-align:center;background-image:none;white-space:nowrap;font-family:museo,Arial,sans-serif;font-weight:700;font-size:16px;color:#fff;text-transform:uppercase;border-radius:30px;background-color:#ff7800;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s}.evo-button:hover{background-color:#ff9d47;color:#fff}.evo-button:active,.evo-button:focus{background-color:#cc6000;color:#fff;outline:0}.evo-button:disabled,.evo-button_disabled{background:#d6d6d6!important;border-color:#d6d6d6!important;color:#fff!important;cursor:not-allowed}.evo-button_lined{background-color:#fff;color:#ff7800;border:1px solid #ff7800}.evo-button_lined:hover{background-color:#ff7800;color:#fff}.evo-button_lined:active,.evo-button_lined:focus{background-color:#cc6000;color:#fff;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{background-color:#fff;color:#546e7a;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{background-color:#546e7a;color:#fff}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{background-color:#283239;color:#fff;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{background-color:#fff;color:#8bc34a;border:1px solid #8bc34a}.evo-button_green-lined:hover{background-color:#8bc34a;color:#fff}.evo-button_green-lined:active,.evo-button_green-lined:focus{background-color:#6f9c3b;color:#fff;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_full-width{width:100%;text-align:center}.evo-button_small{padding:0 20px;height:30px;line-height:30px;font-size:14px}.evo-button_large{padding:0 40px;height:60px;line-height:60px;font-size:18px}.evo-button_icon{padding-left:22px;padding-right:22px;display:inline-flex;align-items:center}.evo-button_loading{pointer-events:none;position:relative}.evo-button__dots{position:absolute;top:50%;left:50%;margin-left:-30px;margin-top:-5px}.evo-button__dot{width:10px;height:10px;border-radius:50%;float:left;background:currentColor;margin:0 5px;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
EvoButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
EvoButtonComponent.propDecorators = {
    color: [{ type: Input }],
    disabled: [{ type: Input }],
    size: [{ type: Input }],
    loading: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EvoControlStates = {
    valid: 'valid',
    invalid: 'invalid',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoControlStateManager {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoBaseControl {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
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
    }
    /**
     * @return {?}
     */
    get showErrors() {
        return this.stateManager.currentState[EvoControlStates.invalid];
    }
}
EvoBaseControl.propDecorators = {
    formControlName: [{ type: ContentChild, args: [FormControlName,] }],
    formControlDirective: [{ type: ContentChild, args: [FormControlDirective,] }],
    state: [{ type: Input }],
    errorsMessages: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoCheckboxComponent extends EvoBaseControl {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.onChange(value);
    }
    /**
     * @return {?}
     */
    get checkboxClass() {
        return {
            'invalid': this.stateManager.currentState[EvoControlStates.invalid]
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDisabledState(state) {
        this.disabled = state;
    }
}
EvoCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-checkbox',
                template: `<label class="evo-checkbox">
    <input class="evo-checkbox__input"
           type="checkbox"
           [evoUiClass]="checkboxClass"
           [disabled]="disabled"
           [(ngModel)]="value">
    <span class="evo-checkbox__text">
        <ng-content></ng-content>
    </span>
</label>
<evo-control-error *ngIf="showErrors"
                   [errors]="control.errors"
                   [errorsMessages]="errorsMessages"></evo-control-error>
`,
                styles: [`.evo-checkbox{margin:0}.evo-checkbox__input{display:none}.evo-checkbox__text{position:relative;display:inline-block;padding-left:26px;color:#212121;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-checkbox__text:before{content:'';position:absolute;top:2px;left:0;width:16px;height:16px;background-color:#fff;border:1px solid #dbdbdb;border-radius:3px}input:checked+.evo-checkbox__text:before{border-color:#448aff;background:url("data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg version%3D%221.1%22 id%3D%22%D0%A1%D0%BB%D0%BE%D0%B9_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2210px%22 height%3D%227px%22 viewBox%3D%220 0 10 7%22 enable-background%3D%22new 0 0 10 7%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath id%3D%22path0_fill%22 fill%3D%22%23FFFFFF%22 d%3D%22M9.7%2C0.3c0.4%2C0.4%2C0.4%2C1%2C0%2C1.4l-5%2C5C4.4%2C7%2C3.9%2C7.1%2C3.5%2C6.9c-0.2%2C0-0.3-0.1-0.4-0.3L0.3%2C3.8%09c-0.4-0.4-0.4-1%2C0-1.4c0.4-0.4%2C1-0.4%2C1.4%2C0l2.2%2C2.2l4.3-4.3C8.6-0.1%2C9.3-0.1%2C9.7%2C0.3z%22%2F%3E%3C%2Fsvg%3E") center no-repeat #448aff}input:disabled:not(:checked)+.evo-checkbox__text{cursor:default}input:disabled:not(:checked)+.evo-checkbox__text:before{background-color:#f6f6f6}input:disabled:checked+.evo-checkbox__text{cursor:default}input:disabled:checked+.evo-checkbox__text:before{opacity:.5}input.evo-checkbox_invalid+.evo-checkbox__text:before{border-color:#f22}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => EvoCheckboxComponent),
                        multi: true
                    }
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoControlErrorComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoInputComponent extends EvoBaseControl {
    constructor() {
        super();
        this.type = 'text';
        this.tooltipShown = false;
        this.disabled = false;
        this.focused = false;
        this.tooltipVisibilityTimeout = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.inputElement.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value || this._value) {
            this._value = value;
            this.onChange(value);
        }
    }
    /**
     * @return {?}
     */
    get inputClass() {
        return {
            'focused': this.focused,
            'disabled': this.disabled,
            'valid': this.stateManager.currentState[EvoControlStates.valid],
            'invalid': this.stateManager.currentState[EvoControlStates.invalid]
        };
    }
    /**
     * @return {?}
     */
    get hasAdditional() {
        return !!this.tooltip;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDisabledState(state) {
        this.disabled = state;
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (!this.focused) {
            this.focused = true;
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.focused = false;
        this.onTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTooltipClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @return {?}
     */
    hideTooltip() {
        this.tooltipVisibilityTimeout = true;
        setTimeout(() => {
            if (this.tooltipVisibilityTimeout) {
                this.tooltipShown = false;
            }
        }, 25);
    }
    /**
     * @return {?}
     */
    showTooltip() {
        this.tooltipShown = true;
        this.tooltipVisibilityTimeout = false;
    }
}
EvoInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-input',
                template: `<div class="evo-input" [evoUiClass]="inputClass">
    <label class="evo-input__container">
        <input #input
               *ngIf="!mask"
               class="evo-input__field"
               (focus)="onFocus()"
               (blur)="onBlur()"
               type="{{ type }}"
               placeholder="{{ placeholder }}"
               [(ngModel)]="value"
               [disabled]="disabled">
        <input #input
               *ngIf="mask"
               class="evo-input__field"
               (focus)="onFocus()"
               (blur)="onBlur()"
               type="{{ type }}"
               placeholder="{{ placeholder }}"
               [(ngModel)]="value"
               [textMask]="mask"
               [disabled]="disabled">
        <div class="evo-input__additional"
             *ngIf="hasAdditional">
            <div class="evo-input__tooltip"
                 *ngIf="tooltip"
                 (mouseenter)="showTooltip()"
                 (mouseleave)="hideTooltip()"
                 (click)="onTooltipClick($event)">?</div>
            <div *ngIf="tooltip && tooltipShown"
                 (click)="onTooltipClick($event)"
                 (mouseenter)="showTooltip()"
                 (mouseleave)="hideTooltip()"
                 class="evo-input__tooltip-label">{{ tooltip }}</div>
        </div>
    </label>
</div>
<evo-control-error *ngIf="showErrors"
                   [errors]="control.errors"
                   [errorsMessages]="errorsMessages"></evo-control-error>
`,
                styles: [`.evo-input{display:flex;width:100%;height:48px;line-height:48px;white-space:nowrap;background-color:#fff;background-image:none;border:1px solid #dbdbdb;border-radius:4px;transition:box-shadow .3s,border .3s;outline:0}.evo-input__container{display:flex;align-items:center;margin:0;width:100%;height:100%;border-radius:4px;cursor:text}.evo-input_focused{box-shadow:0 0 2px 0 #546e7a!important;border:1px solid #546e7a}.evo-input_disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input_disabled .evo-input__container{cursor:default}.evo-input_valid{border-color:#8bc34a}.evo-input_invalid{border-color:#f22}.evo-input__field{height:100%;border:none;margin:0;padding:0 20px;outline:0;font-size:16px;font-weight:400;color:#000;flex-grow:1;border-radius:4px;width:100%}.evo-input__field::-webkit-input-placeholder{color:#9b9b9b}.evo-input__field::-moz-placeholder{color:#9b9b9b;opacity:1}.evo-input__field:-ms-input-placeholder{color:#9b9b9b}.evo-input__field:disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input__field:not(:last-child){padding-right:0}.evo-input__tooltip{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0 10px;width:24px;height:24px;border-radius:50%;background:#eceff1;line-height:24px;text-align:center;font-family:"Open Sans",Arial,sans-serif;font-size:18px;font-weight:600;color:#546e7a;cursor:pointer}.evo-input__tooltip-label{position:absolute;width:100%;top:calc(100% - 2px);left:0;background-color:#fff8e6;z-index:1;border-radius:4px;padding:10px 10px 10px 20px;color:#212121;display:flex;box-shadow:0 4px 12px 0 rgba(0,0,0,.2);line-height:normal;white-space:normal;cursor:default}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(100% - 34px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute;pointer-events:none}@media (min-width:1200px){.evo-input__tooltip-label{left:calc(50% - 22px)}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(50% - 12px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute}}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => EvoInputComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
EvoInputComponent.ctorParameters = () => [];
EvoInputComponent.propDecorators = {
    autoFocus: [{ type: Input }],
    mask: [{ type: Input }],
    placeholder: [{ type: Input }],
    tooltip: [{ type: Input }],
    type: [{ type: Input }],
    _value: [{ type: Input, args: ['value',] }],
    inputElement: [{ type: ViewChild, args: ['input',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EvoBannerTypes = {
    large: 'large',
    small: 'small',
    fullWidth: 'full-width',
};
const ɵ0 = window;
class EvoBannerComponent {
    /**
     * @param {?} window
     */
    constructor(window) {
        this.window = window;
        this.type = EvoBannerTypes.small;
        this.bannerClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onBannerClick() {
        this.bannerClick.emit(this.banner);
    }
}
EvoBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-banner',
                template: `<a class="evo-banner"
   target="_blank"
   [attr.href]="banner?.url"
   (click)="onBannerClick()"
   [evoUiClass]="type"
   [ngStyle]="{'background-color': banner?.background}">
    <div class="evo-banner__content">
        <div class="evo-banner__title">{{ banner?.title }}</div>
        <button class="btn btn-white promo-btn"
                [ngStyle]="{'color': banner?.background}"
                *ngIf="banner?.button">{{ banner?.button }}</button>
    </div>
    <img class="evo-banner__img"
         src="{{ banner?.image }}"
         alt="{{ banner?.title }}">
</a>
`,
                styles: [`.evo-banner{display:block;position:relative;height:430px;padding:12px 20px;border-radius:6px;overflow:hidden;color:#fff;cursor:pointer;transition:box-shadow .3s}.evo-banner:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}.evo-banner__content{position:relative;z-index:2}.evo-banner__content .promo-btn{height:40px;padding:0 20px;min-width:156px;font-weight:600;font-size:14px;text-transform:uppercase;display:table-cell;vertical-align:middle}.evo-banner__content .promo-btn:hover{background:#fff}.evo-banner__content .promo-btn:active{box-shadow:none}.evo-banner__content .promo-btn span{font-size:18px}.evo-banner__title{font-family:museo,Arial,sans-serif;font-weight:700;line-height:1.3;font-size:30px;margin-bottom:10px}.evo-banner__description{font-size:14px;line-height:1.3;margin-top:20px;margin-bottom:10px}.evo-banner__img{position:absolute;bottom:0;right:0;width:290px;height:290px}.evo-banner_full-width{padding:20px}.evo-banner_full-width .evo-banner__title{line-height:38px}@media (min-width:768px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:60%}.evo-banner__description{max-width:250px}.evo-banner__img{width:430px;height:430px}.evo-banner_full-width{height:240px;padding:30px}.evo-banner_full-width .evo-banner__content{max-width:50%}.evo-banner_full-width .evo-banner__title{font-size:36px;line-height:44px}.evo-banner_full-width .evo-banner__img{height:240px;width:240px}}@media (min-width:1200px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:63%}.evo-banner_small{height:210px;padding:20px}.evo-banner_small .evo-banner__title{font-size:20px;margin-bottom:20px}.evo-banner_small .promo-btn{height:32px}.evo-banner_small .evo-banner__img{width:210px;height:210px}.evo-banner_full-width .evo-banner__content{max-width:63%}}`],
                providers: [
                    { provide: 'Window', useValue: ɵ0 }
                ],
            },] },
];
/** @nocollapse */
EvoBannerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['Window',] }] }
];
EvoBannerComponent.propDecorators = {
    banner: [{ type: Input }],
    type: [{ type: Input }],
    bannerClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ isObject = (item) => item != null && typeof item === 'object';
const /** @type {?} */ isString = (item) => typeof item === 'string';
const /** @type {?} */ isArray = (item) => Array.isArray(item);
class EvoUiClassDirective extends NgClass {
    /**
     * @param {?} _iterableDiffers
     * @param {?} _keyValueDiffers
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    constructor(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
        super(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer);
        this.prefix = _ngEl.nativeElement.classList[0];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set setterOfClass(data) {
        if (isArray(data)) {
            data = data.map((className) => `${this.prefix}_${className}`);
        }
        else if (isObject(data)) {
            data = Object.keys(data).reduce((newData, key) => {
                newData[`${this.prefix}_${key}`] = data[key];
                return newData;
            }, {});
        }
        else if (isString(data)) {
            data = data
                .split(' ')
                .map((myClass) => `${this.prefix}_${myClass}`)
                .join(' ');
        }
        else {
            throw new Error('Data type not allowed!');
        }
        this.ngClass = data;
    }
}
EvoUiClassDirective.decorators = [
    { type: Directive, args: [{
                selector: '[evoUiClass]'
            },] },
];
/** @nocollapse */
EvoUiClassDirective.ctorParameters = () => [
    { type: IterableDiffers },
    { type: KeyValueDiffers },
    { type: ElementRef },
    { type: Renderer2 }
];
EvoUiClassDirective.propDecorators = {
    setterOfClass: [{ type: Input, args: ['evoUiClass',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoHeaderComponent {
    constructor() {
        this.size = 'h1';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EvoHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-header',
                template: `<span class="header" [ngClass]="{
  'header_orange': color==='white',
  'header_h1': size==='h1',
  'header_h2': size==='h2',
  'header_h3': size==='h3',
  'header_h4': size==='h4'
}">
  <ng-content></ng-content>
</span>`,
                styles: [`.header{font-family:museo,Arial,sans-serif;font-weight:700;color:#333f48;display:block}.header_h1{font-size:30px;line-height:38px}@media (min-width:768px){.header_h1{font-size:36px;line-height:44px}}.header_h2{font-size:24px;line-height:32px}@media (min-width:768px){.header_h2{font-size:30px;line-height:38px}}.header_h3{font-size:18px;line-height:26px}@media (min-width:768px){.header_h3{font-size:24px;line-height:32px}}.header_h4{font-size:14px;line-height:22px}@media (min-width:768px){.header_h4{font-size:18px;line-height:26px}}.header_orange{color:#fff}`]
            },] },
];
/** @nocollapse */
EvoHeaderComponent.ctorParameters = () => [];
EvoHeaderComponent.propDecorators = {
    size: [{ type: Input }],
    color: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoCardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EvoCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-card',
                template: `<div class="evo-card__title">
  <ng-content select="evo-card--title"></ng-content>
</div>
<div class="evo-card__content">
  <ng-content select="evo-card--content"></ng-content>
</div>
<div class="evo-card___footer">
  <ng-content select="evo-card--footer"></ng-content>
</div>`,
                styles: [`:host{width:100%;padding:30px;overflow:auto;border-radius:6px;background:#fff;transition:box-shadow .3s;margin-right:30px}@media (min-width:992px){:host{width:calc(33% - 30px)}:host:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}}:host /deep/ .evo-card__title{font-family:museo,Arial,sans-serif;font-size:24px;line-height:1.2;margin-bottom:30px}:host /deep/ .evo-card__title img{height:30px}:host /deep/ .evo-card__content{margin-bottom:30px}`]
            },] },
];
/** @nocollapse */
EvoCardComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ components = [
    EvoButtonComponent,
    EvoCheckboxComponent,
    EvoControlErrorComponent,
    EvoInputComponent,
    EvoBannerComponent,
    EvoHeaderComponent,
    EvoCardComponent,
];
const /** @type {?} */ directives = [
    EvoUiClassDirective,
];
const /** @type {?} */ bundle = [
    ...components,
    ...directives
];
class EvoUiKitModule {
}
EvoUiKitModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    TextMaskModule,
                ],
                declarations: [
                    EvoUiKitComponent,
                    ...bundle,
                ],
                exports: [
                    EvoUiKitComponent,
                    ...bundle,
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { EvoUiKitService, EvoUiKitComponent, EvoUiKitModule, EvoBaseControl as ɵc, EvoBannerComponent as ɵf, EvoButtonComponent as ɵa, EvoCardComponent as ɵh, EvoCheckboxComponent as ɵb, EvoControlErrorComponent as ɵd, EvoHeaderComponent as ɵg, EvoInputComponent as ɵe, EvoUiClassDirective as ɵi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXZvLXVpLWtpdC9saWIvZXZvLXVpLWtpdC5zZXJ2aWNlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9ldm8tdWkta2l0LmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8taGVhZGVyL2V2by1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jYXJkL2V2by1jYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvZXZvLXVpLWtpdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUtpdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZXZvLXVpLWtpdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBldm8tdWkta2l0IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUtpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBFdm9CdXR0b25TaXplcyB7XG4gICAgZnVsbFdpZHRoID0gJ2Z1bGwtd2lkdGgnLFxuICAgIHNtYWxsID0gJ3NtYWxsJyxcbiAgICBsYXJnZSA9ICdsYXJnZScsXG59XG5cbmV4cG9ydCBlbnVtIEV2b0J1dHRvblN0eWxlcyB7XG4gICAgbGluZWQgPSAnbGluZWQnLFxuICAgIGRhcmtibHVlID0gJ2RhcmtibHVlJyxcbiAgICBkYXJrYmx1ZUxpbmVkID0gJ2RhcmtibHVlLWxpbmVkJyxcbiAgICBncmVlbiA9ICdncmVlbicsXG4gICAgZ3JlZW5saW5lZCA9ICdncmVlbi1saW5lZCcsXG4gICAgcHVycGxlID0gJ3B1cnBsZSdcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tYnV0dG9uXCIgW2V2b1VpQ2xhc3NdPVwidG90YWxDbGFzc2VzXCIgW25nU3R5bGVdPVwidG90YWxTdHlsZXNcIj5cbiAgICA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJldm8tYnV0dG9uX19kb3RzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2BALXdlYmtpdC1rZXlmcmFtZXMgZnh7NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZnh7NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fS5ldm8tYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MCAzMHB4O2hlaWdodDo0NHB4O2xpbmUtaGVpZ2h0OjQ0cHg7dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQtaW1hZ2U6bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6bXVzZW8sQXJpYWwsc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjE2cHg7Y29sb3I6I2ZmZjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyLXJhZGl1czozMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMDtib3JkZXI6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3MsY29sb3IgLjNzLGJvcmRlciAuM3N9LmV2by1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY5ZDQ3O2NvbG9yOiNmZmZ9LmV2by1idXR0b246YWN0aXZlLC5ldm8tYnV0dG9uOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2NjNjAwMDtjb2xvcjojZmZmO291dGxpbmU6MH0uZXZvLWJ1dHRvbjpkaXNhYmxlZCwuZXZvLWJ1dHRvbl9kaXNhYmxlZHtiYWNrZ3JvdW5kOiNkNmQ2ZDYhaW1wb3J0YW50O2JvcmRlci1jb2xvcjojZDZkNmQ2IWltcG9ydGFudDtjb2xvcjojZmZmIWltcG9ydGFudDtjdXJzb3I6bm90LWFsbG93ZWR9LmV2by1idXR0b25fbGluZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiNmZjc4MDA7Ym9yZGVyOjFweCBzb2xpZCAjZmY3ODAwfS5ldm8tYnV0dG9uX2xpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMDtjb2xvcjojZmZmfS5ldm8tYnV0dG9uX2xpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9saW5lZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjYzYwMDA7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2NjNjAwMH0uZXZvLWJ1dHRvbl9kYXJrYmx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiM1NDZlN2F9LmV2by1idXR0b25fZGFya2JsdWU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNzU5NmE1fS5ldm8tYnV0dG9uX2RhcmtibHVlOmFjdGl2ZSwuZXZvLWJ1dHRvbl9kYXJrYmx1ZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzl9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiM1NDZlN2E7Ym9yZGVyOjFweCBzb2xpZCAjNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzU0NmU3YTtjb2xvcjojZmZmfS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzk7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6IzI4MzIzOX0uZXZvLWJ1dHRvbl9ncmVlbntiYWNrZ3JvdW5kLWNvbG9yOiM4YmMzNGF9LmV2by1idXR0b25fZ3JlZW46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYTJjZjZlfS5ldm8tYnV0dG9uX2dyZWVuOmFjdGl2ZSwuZXZvLWJ1dHRvbl9ncmVlbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2J9LmV2by1idXR0b25fZ3JlZW4tbGluZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiM4YmMzNGE7Ym9yZGVyOjFweCBzb2xpZCAjOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzhiYzM0YTtjb2xvcjojZmZmfS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2I7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6IzZmOWMzYn0uZXZvLWJ1dHRvbl9wdXJwbGV7YmFja2dyb3VuZC1jb2xvcjojYWI0YWMzfS5ldm8tYnV0dG9uX3B1cnBsZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjYzU4ZTh9LmV2by1idXR0b25fcHVycGxlOmFjdGl2ZSwuZXZvLWJ1dHRvbl9wdXJwbGU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojOTMzNWFifS5ldm8tYnV0dG9uX2Z1bGwtd2lkdGh7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn0uZXZvLWJ1dHRvbl9zbWFsbHtwYWRkaW5nOjAgMjBweDtoZWlnaHQ6MzBweDtsaW5lLWhlaWdodDozMHB4O2ZvbnQtc2l6ZToxNHB4fS5ldm8tYnV0dG9uX2xhcmdle3BhZGRpbmc6MCA0MHB4O2hlaWdodDo2MHB4O2xpbmUtaGVpZ2h0OjYwcHg7Zm9udC1zaXplOjE4cHh9LmV2by1idXR0b25faWNvbntwYWRkaW5nLWxlZnQ6MjJweDtwYWRkaW5nLXJpZ2h0OjIycHg7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9LmV2by1idXR0b25fbG9hZGluZ3twb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOnJlbGF0aXZlfS5ldm8tYnV0dG9uX19kb3Rze3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTMwcHg7bWFyZ2luLXRvcDotNXB4fS5ldm8tYnV0dG9uX19kb3R7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjUwJTtmbG9hdDpsZWZ0O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO21hcmdpbjowIDVweDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC1hbmltYXRpb246MXMgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIGluZmluaXRlIGZ4fS5ldm8tYnV0dG9uX19kb3Q6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uOjFzIC4zcyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgLjNzIGluZmluaXRlIGZ4fS5ldm8tYnV0dG9uX19kb3Q6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uOjFzIC42cyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgLjZzIGluZmluaXRlIGZ4fWBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEV2b0J1dHRvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY29sb3I6IEV2b0J1dHRvblN0eWxlcztcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNpemU6IEV2b0J1dHRvblNpemVzO1xuXG4gICAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2xpZW50V2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcblxuICAgIH1cblxuICAgIGdldCB0b3RhbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBjbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBnZXQgdG90YWxTdHlsZXMoKToge1tzdHlsZUtleTogc3RyaW5nXTogYW55fSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXN1bHRbJ3dpZHRoJ10gPSBgJHt0aGlzLmNsaWVudFdpZHRofXB4YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuY2xpZW50V2lkdGggPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBFdm9Db250cm9sU3RhdGVzIHtcbiAgdmFsaWQgPSAndmFsaWQnLFxuICBpbnZhbGlkID0gJ2ludmFsaWQnLFxufVxuIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUV2b0NvbnRyb2xTdGF0ZSB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXIge1xuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBleHRyYVN0YXRlcz86IElFdm9Db250cm9sU3RhdGUpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRTdGF0ZSgpOiBJRXZvQ29udHJvbFN0YXRlIHtcbiAgICAvLyBUT0RPIG1lcmdlIGNvbmRpdGlvbnMgd2l0aCBleHRyYVN0YXRlc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkOiB0aGlzLmNvbnRyb2wuZGlydHkgJiYgdGhpcy5jb250cm9sLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sLnZhbGlkLFxuICAgICAgaW52YWxpZDogdGhpcy5jb250cm9sLmRpcnR5ICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC5pbnZhbGlkLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElFdm9Db250cm9sU3RhdGUgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlcic7XG5pbXBvcnQgeyBJRXZvQ29udHJvbEVycm9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5cbmV4cG9ydCBjbGFzcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWU7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xEaXJlY3RpdmUpIGZvcm1Db250cm9sRGlyZWN0aXZlOiBGb3JtQ29udHJvbERpcmVjdGl2ZTtcbiAgQElucHV0KCkgc3RhdGU6IElFdm9Db250cm9sU3RhdGU7XG4gIEBJbnB1dCgpIGVycm9yc01lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yO1xuXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgc3RhdGVNYW5hZ2VyOiBFdm9Db250cm9sU3RhdGVNYW5hZ2VyO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbE5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtQ29udHJvbE5hbWUuY29udHJvbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUgJiYgdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlLmNvbnRyb2w7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgdGhpcy5zdGF0ZU1hbmFnZXIgPSBuZXcgRXZvQ29udHJvbFN0YXRlTWFuYWdlcih0aGlzLmNvbnRyb2wsIHRoaXMuc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHRlbXBsYXRlIGRyaXZlbiBmb3JtcyBhbGxvd2VkIHdpdGggRXZvVWkga2l0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNob3dFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYDxsYWJlbCBjbGFzcz1cImV2by1jaGVja2JveFwiPlxuICAgIDxpbnB1dCBjbGFzcz1cImV2by1jaGVja2JveF9faW5wdXRcIlxuICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICBbZXZvVWlDbGFzc109XCJjaGVja2JveENsYXNzXCJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiZXZvLWNoZWNrYm94X190ZXh0XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG48L2xhYmVsPlxuPGV2by1jb250cm9sLWVycm9yICpuZ0lmPVwic2hvd0Vycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc01lc3NhZ2VzXT1cImVycm9yc01lc3NhZ2VzXCI+PC9ldm8tY29udHJvbC1lcnJvcj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tY2hlY2tib3h7bWFyZ2luOjB9LmV2by1jaGVja2JveF9faW5wdXR7ZGlzcGxheTpub25lfS5ldm8tY2hlY2tib3hfX3RleHR7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1sZWZ0OjI2cHg7Y29sb3I6IzIxMjEyMTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MnB4O2xlZnQ6MDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czozcHh9aW5wdXQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtib3JkZXItY29sb3I6IzQ0OGFmZjtiYWNrZ3JvdW5kOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0MlM0Z4bWwgdmVyc2lvbiUzRCUyMjEuMCUyMiBlbmNvZGluZyUzRCUyMnV0Zi04JTIyJTNGJTNFJTNDc3ZnIHZlcnNpb24lM0QlMjIxLjElMjIgaWQlM0QlMjIlRDAlQTElRDAlQkIlRDAlQkUlRDAlQjlfMSUyMiB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmslMjIgeCUzRCUyMjBweCUyMiB5JTNEJTIyMHB4JTIyJTA5IHdpZHRoJTNEJTIyMTBweCUyMiBoZWlnaHQlM0QlMjI3cHglMjIgdmlld0JveCUzRCUyMjAgMCAxMCA3JTIyIGVuYWJsZS1iYWNrZ3JvdW5kJTNEJTIybmV3IDAgMCAxMCA3JTIyIHhtbCUzQXNwYWNlJTNEJTIycHJlc2VydmUlMjIlM0UlM0NwYXRoIGlkJTNEJTIycGF0aDBfZmlsbCUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyIGQlM0QlMjJNOS43JTJDMC4zYzAuNCUyQzAuNCUyQzAuNCUyQzElMkMwJTJDMS40bC01JTJDNUM0LjQlMkM3JTJDMy45JTJDNy4xJTJDMy41JTJDNi45Yy0wLjIlMkMwLTAuMy0wLjEtMC40LTAuM0wwLjMlMkMzLjglMDljLTAuNC0wLjQtMC40LTElMkMwLTEuNGMwLjQtMC40JTJDMS0wLjQlMkMxLjQlMkMwbDIuMiUyQzIuMmw0LjMtNC4zQzguNi0wLjElMkM5LjMtMC4xJTJDOS43JTJDMC4zeiUyMiUyRiUzRSUzQyUyRnN2ZyUzRVwiKSBjZW50ZXIgbm8tcmVwZWF0ICM0NDhhZmZ9aW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSsuZXZvLWNoZWNrYm94X190ZXh0e2N1cnNvcjpkZWZhdWx0fWlucHV0OmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2fWlucHV0OmRpc2FibGVkOmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dHtjdXJzb3I6ZGVmYXVsdH1pbnB1dDpkaXNhYmxlZDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle29wYWNpdHk6LjV9aW5wdXQuZXZvLWNoZWNrYm94X2ludmFsaWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNmMjJ9YF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvQ2hlY2tib3hDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3ZhbHVlOiBib29sZWFuO1xuXG4gICAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNoZWNrYm94Q2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnaW52YWxpZCc6IHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFdm9Db250cm9sRXJyb3Ige1xuICAgIFtlcnJvcjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jb250cm9sLWVycm9yJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tZXJyb3JcIiAqbmdGb3I9XCJsZXQgZXJyb3JNc2cgb2YgZXJyb3JzTWFwOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgIDxzcGFuICpuZ0lmPVwic2hvd0Vycm9yKGkpXCI+e3sgZXJyb3JNc2cgfX08L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tZXJyb3J7Zm9udC1zaXplOjE0cHg7Y29sb3I6I2YyMjtmb250LXN0eWxlOml0YWxpYzttYXJnaW4tdG9wOjEwcHh9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBlcnJvcnM6IGFueTtcbiAgICBASW5wdXQoKSBlcnJvcnNNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvcjtcbiAgICBASW5wdXQoKSBzaG93Q291bnQgPSAxO1xuXG4gICAgcHJpdmF0ZSBkZWZhdWx0RXJyb3JNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvciA9IHtcbiAgICAgICAgcmVxdWlyZWQ6ICfDkMKXw5DCsMOQwr/DkMK+w5DCu8OQwr3DkMK4w5HCgsOQwrUgw5DCv8OQwr7DkMK7w5DCtScsXG4gICAgICAgIGVtYWlsOiAnw5DCncOQwrXDkMK/w5HCgMOQwrDDkMKyw5DCuMOQwrvDkcKMw5DCvcOQwr4gw5HCg8OQwrrDkMKww5DCt8OQwrDDkMK9w5DCsCDDkMK/w5DCvsORwofDkcKCw5DCsCcsXG4gICAgICAgIHBob25lOiAnw5DCksOQwrLDkMK1w5DCtMOQwrjDkcKCw5DCtSDDkcKCw5DCtcOQwrvDkMK1w5HChMOQwr7DkMK9JyxcbiAgICB9O1xuXG4gICAgZ2V0IGVycm9yc01hcCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmRlZmF1bHRFcnJvck1lc3NhZ2VzLFxuICAgICAgICAgICAgLi4uKHRoaXMuZXJyb3JzTWVzc2FnZXMgfHwge30pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgcmV0dXJuIGVycm9yS2V5cy5tYXAoKGtleSkgPT4gZXJyb3JNZXNzYWdlc1trZXldKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKytpbmRleCA8PSB0aGlzLnNob3dDb3VudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldm8taW5wdXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8taW5wdXRcIiBbZXZvVWlDbGFzc109XCJpbnB1dENsYXNzXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZXZvLWlucHV0X19jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0ICNpbnB1dFxuICAgICAgICAgICAgICAgKm5nSWY9XCIhbWFza1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImV2by1pbnB1dF9fZmllbGRcIlxuICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoKVwiXG4gICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXG4gICAgICAgICAgICAgICB0eXBlPVwie3sgdHlwZSB9fVwiXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxpbnB1dCAjaW5wdXRcbiAgICAgICAgICAgICAgICpuZ0lmPVwibWFza1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImV2by1pbnB1dF9fZmllbGRcIlxuICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoKVwiXG4gICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXG4gICAgICAgICAgICAgICB0eXBlPVwie3sgdHlwZSB9fVwiXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgW3RleHRNYXNrXT1cIm1hc2tcIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8taW5wdXRfX2FkZGl0aW9uYWxcIlxuICAgICAgICAgICAgICpuZ0lmPVwiaGFzQWRkaXRpb25hbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2by1pbnB1dF9fdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICpuZ0lmPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNob3dUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVG9vbHRpcENsaWNrKCRldmVudClcIj4/PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidG9vbHRpcCAmJiB0b29sdGlwU2hvd25cIlxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25Ub29sdGlwQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNob3dUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWxcIj57eyB0b29sdGlwIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICBzdHlsZXM6IFtgLmV2by1pbnB1dHtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtoZWlnaHQ6NDhweDtsaW5lLWhlaWdodDo0OHB4O3doaXRlLXNwYWNlOm5vd3JhcDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjRweDt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzLGJvcmRlciAuM3M7b3V0bGluZTowfS5ldm8taW5wdXRfX2NvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo0cHg7Y3Vyc29yOnRleHR9LmV2by1pbnB1dF9mb2N1c2Vke2JveC1zaGFkb3c6MCAwIDJweCAwICM1NDZlN2EhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgIzU0NmU3YX0uZXZvLWlucHV0X2Rpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNiFpbXBvcnRhbnQ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X2Rpc2FibGVkIC5ldm8taW5wdXRfX2NvbnRhaW5lcntjdXJzb3I6ZGVmYXVsdH0uZXZvLWlucHV0X3ZhbGlke2JvcmRlci1jb2xvcjojOGJjMzRhfS5ldm8taW5wdXRfaW52YWxpZHtib3JkZXItY29sb3I6I2YyMn0uZXZvLWlucHV0X19maWVsZHtoZWlnaHQ6MTAwJTtib3JkZXI6bm9uZTttYXJnaW46MDtwYWRkaW5nOjAgMjBweDtvdXRsaW5lOjA7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOiMwMDA7ZmxleC1ncm93OjE7Ym9yZGVyLXJhZGl1czo0cHg7d2lkdGg6MTAwJX0uZXZvLWlucHV0X19maWVsZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWI7b3BhY2l0eToxfS5ldm8taW5wdXRfX2ZpZWxkOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNiFpbXBvcnRhbnQ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X19maWVsZDpub3QoOmxhc3QtY2hpbGQpe3BhZGRpbmctcmlnaHQ6MH0uZXZvLWlucHV0X190b29sdGlwey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTttYXJnaW46MCAxMHB4O3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojZWNlZmYxO2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1mYW1pbHk6XCJPcGVuIFNhbnNcIixBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxOHB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjojNTQ2ZTdhO2N1cnNvcjpwb2ludGVyfS5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTt0b3A6Y2FsYygxMDAlIC0gMnB4KTtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjojZmZmOGU2O3otaW5kZXg6MTtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjEwcHggMTBweCAxMHB4IDIwcHg7Y29sb3I6IzIxMjEyMTtkaXNwbGF5OmZsZXg7Ym94LXNoYWRvdzowIDRweCAxMnB4IDAgcmdiYSgwLDAsMCwuMik7bGluZS1oZWlnaHQ6bm9ybWFsO3doaXRlLXNwYWNlOm5vcm1hbDtjdXJzb3I6ZGVmYXVsdH0uZXZvLWlucHV0X190b29sdGlwLWxhYmVsOmJlZm9yZXtjb250ZW50OicnO3RvcDotMjBweDtsZWZ0OmNhbGMoMTAwJSAtIDM0cHgpO2JvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjZmZmOGU2O3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmV9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZXZvLWlucHV0X190b29sdGlwLWxhYmVse2xlZnQ6Y2FsYyg1MCUgLSAyMnB4KX0uZXZvLWlucHV0X190b29sdGlwLWxhYmVsOmJlZm9yZXtjb250ZW50OicnO3RvcDotMjBweDtsZWZ0OmNhbGMoNTAlIC0gMTJweCk7Ym9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNmZmY4ZTY7cG9zaXRpb246YWJzb2x1dGV9fWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0lucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b0lucHV0Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgQElucHV0KCkgbWFzazogYW55O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0RWxlbWVudDtcblxuICBvbkNoYW5nZTtcbiAgb25Ub3VjaGVkO1xuXG4gIHB1YmxpYyB0b29sdGlwU2hvd24gPSBmYWxzZTtcblxuICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBmb2N1c2VkID0gZmFsc2U7XG4gIHByaXZhdGUgdG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSB8fCB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpbnB1dENsYXNzKCk6IHtbY3NzQ2xhc3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2ZvY3VzZWQnOiB0aGlzLmZvY3VzZWQsXG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgJ3ZhbGlkJzogdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMudmFsaWRdLFxuICAgICAgJ2ludmFsaWQnOiB0aGlzLnN0YXRlTWFuYWdlci5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXVxuICAgIH07XG4gIH1cblxuICBnZXQgaGFzQWRkaXRpb25hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnRvb2x0aXA7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gIH1cblxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgb25Ub29sdGlwQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBoaWRlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy50b29sdGlwU2hvd24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAyNSk7XG4gIH1cblxuICBzaG93VG9vbHRpcCgpIHtcbiAgICB0aGlzLnRvb2x0aXBTaG93biA9IHRydWU7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi9jb21tb24vU2VyaWFsaXphYmxlJztcblxuZXhwb3J0IGVudW0gRXZvQmFubmVyVHlwZXMge1xuICBsYXJnZSA9ICdsYXJnZScsXG4gIHNtYWxsID0gJ3NtYWxsJyxcbiAgZnVsbFdpZHRoID0gJ2Z1bGwtd2lkdGgnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CYW5uZXJMb2NhdGlvbnMge1xuICBtYWluID0gJ01haW4nLFxuICBjYXRlZ29yeSA9ICdDYXRlZ29yeSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRXZvQmFubmVyQW5hbHl0aWNzIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGRhdGE6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjcmVhdGl2ZTogc3RyaW5nO1xuICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgZGltZW5zaW9uNz86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEV2b0Jhbm5lciBleHRlbmRzIFNlcmlhbGl6YWJsZSB7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgYmFubmVyUG9zaXRpb25OYW1lcyA9IHtcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLm1haW5dOiBbXG4gICAgICAnbWFpbicsXG4gICAgICAndG9wJyxcbiAgICAgICdib3R0b20nXG4gICAgXSxcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLmNhdGVnb3J5XTogW1xuICAgICAgJ21haW4nXG4gICAgXVxuICB9O1xuICBidXR0b246IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1iYW5uZXInLFxuICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwiZXZvLWJhbm5lclwiXG4gICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgW2F0dHIuaHJlZl09XCJiYW5uZXI/LnVybFwiXG4gICAoY2xpY2spPVwib25CYW5uZXJDbGljaygpXCJcbiAgIFtldm9VaUNsYXNzXT1cInR5cGVcIlxuICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX190aXRsZVwiPnt7IGJhbm5lcj8udGl0bGUgfX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2hpdGUgcHJvbW8tYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJiYW5uZXI/LmJ1dHRvblwiPnt7IGJhbm5lcj8uYnV0dG9uIH19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGltZyBjbGFzcz1cImV2by1iYW5uZXJfX2ltZ1wiXG4gICAgICAgICBzcmM9XCJ7eyBiYW5uZXI/LmltYWdlIH19XCJcbiAgICAgICAgIGFsdD1cInt7IGJhbm5lcj8udGl0bGUgfX1cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2AuZXZvLWJhbm5lcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo0MzBweDtwYWRkaW5nOjEycHggMjBweDtib3JkZXItcmFkaXVzOjZweDtvdmVyZmxvdzpoaWRkZW47Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzfS5ldm8tYmFubmVyOmhvdmVye2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4yKX0uZXZvLWJhbm5lcl9fY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bntoZWlnaHQ6NDBweDtwYWRkaW5nOjAgMjBweDttaW4td2lkdGg6MTU2cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246bWlkZGxlfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46aG92ZXJ7YmFja2dyb3VuZDojZmZmfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46YWN0aXZle2JveC1zaGFkb3c6bm9uZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuIHNwYW57Zm9udC1zaXplOjE4cHh9LmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuMztmb250LXNpemU6MzBweDttYXJnaW4tYm90dG9tOjEwcHh9LmV2by1iYW5uZXJfX2Rlc2NyaXB0aW9ue2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuMzttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWJvdHRvbToxMHB4fS5ldm8tYmFubmVyX19pbWd7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7cmlnaHQ6MDt3aWR0aDoyOTBweDtoZWlnaHQ6MjkwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aHtwYWRkaW5nOjIwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7bGluZS1oZWlnaHQ6MzhweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1iYW5uZXJ7cGFkZGluZzozMHB4IDQwcHh9LmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYwJX0uZXZvLWJhbm5lcl9fZGVzY3JpcHRpb257bWF4LXdpZHRoOjI1MHB4fS5ldm8tYmFubmVyX19pbWd7d2lkdGg6NDMwcHg7aGVpZ2h0OjQzMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGh7aGVpZ2h0OjI0MHB4O3BhZGRpbmc6MzBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo1MCV9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1zaXplOjM2cHg7bGluZS1oZWlnaHQ6NDRweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19pbWd7aGVpZ2h0OjI0MHB4O3dpZHRoOjI0MHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5ldm8tYmFubmVye3BhZGRpbmc6MzBweCA0MHB4fS5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MyV9LmV2by1iYW5uZXJfc21hbGx7aGVpZ2h0OjIxMHB4O3BhZGRpbmc6MjBweH0uZXZvLWJhbm5lcl9zbWFsbCAuZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1zaXplOjIwcHg7bWFyZ2luLWJvdHRvbToyMHB4fS5ldm8tYmFubmVyX3NtYWxsIC5wcm9tby1idG57aGVpZ2h0OjMycHh9LmV2by1iYW5uZXJfc21hbGwgLmV2by1iYW5uZXJfX2ltZ3t3aWR0aDoyMTBweDtoZWlnaHQ6MjEwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjMlfX1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiAnV2luZG93JywgIHVzZVZhbHVlOiB3aW5kb3cgfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9CYW5uZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBiYW5uZXI6IEV2b0Jhbm5lcjtcbiAgQElucHV0KCkgdHlwZTogRXZvQmFubmVyVHlwZXMgPSBFdm9CYW5uZXJUeXBlcy5zbWFsbDtcblxuICBAT3V0cHV0KCkgYmFubmVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnV2luZG93JykgcHJpdmF0ZSB3aW5kb3c6IGFueSxcbiAgKSB7XG4gIH1cblxuICBvbkJhbm5lckNsaWNrKCkge1xuICAgIHRoaXMuYmFubmVyQ2xpY2suZW1pdCh0aGlzLmJhbm5lcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEl0ZXJhYmxlRGlmZmVycywgS2V5VmFsdWVEaWZmZXJzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBpc09iamVjdCA9IChpdGVtKSA9PiBpdGVtICE9IG51bGwgJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnO1xuY29uc3QgaXNTdHJpbmcgPSAoaXRlbSkgPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnO1xuY29uc3QgaXNBcnJheSA9IChpdGVtKSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZXZvVWlDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBOZ0NsYXNzIHtcbiAgQElucHV0KCdldm9VaUNsYXNzJylcbiAgc2V0IHNldHRlck9mQ2xhc3MoZGF0YTogYW55KSB7XG4gICAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBkYXRhLm1hcCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3RoaXMucHJlZml4fV8ke2NsYXNzTmFtZX1gKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBkYXRhID0gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlKChuZXdEYXRhOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIG5ld0RhdGFbYCR7dGhpcy5wcmVmaXh9XyR7a2V5fWBdID0gZGF0YVtrZXldO1xuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICAgIH0sIHt9KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKChteUNsYXNzKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtteUNsYXNzfWApXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSB0eXBlIG5vdCBhbGxvd2VkIScpO1xuICAgIH1cblxuICAgIHRoaXMubmdDbGFzcyA9IGRhdGE7XG4gIH1cblxuICBuZ0NsYXNzOiBhbnk7XG5cbiAgcHJpdmF0ZSBwcmVmaXg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcbiAgICAgICAgX25nRWw6IEVsZW1lbnRSZWYsIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoX2l0ZXJhYmxlRGlmZmVycywgX2tleVZhbHVlRGlmZmVycywgX25nRWwsIF9yZW5kZXJlcik7XG4gICAgdGhpcy5wcmVmaXggPSBfbmdFbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwiaGVhZGVyXCIgW25nQ2xhc3NdPVwie1xuICAnaGVhZGVyX29yYW5nZSc6IGNvbG9yPT09J3doaXRlJyxcbiAgJ2hlYWRlcl9oMSc6IHNpemU9PT0naDEnLFxuICAnaGVhZGVyX2gyJzogc2l6ZT09PSdoMicsXG4gICdoZWFkZXJfaDMnOiBzaXplPT09J2gzJyxcbiAgJ2hlYWRlcl9oNCc6IHNpemU9PT0naDQnXG59XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLmhlYWRlcntmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzMzZjQ4O2Rpc3BsYXk6YmxvY2t9LmhlYWRlcl9oMXtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuaGVhZGVyX2gxe2ZvbnQtc2l6ZTozNnB4O2xpbmUtaGVpZ2h0OjQ0cHh9fS5oZWFkZXJfaDJ7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MzJweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmhlYWRlcl9oMntmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4fX0uaGVhZGVyX2gze2ZvbnQtc2l6ZToxOHB4O2xpbmUtaGVpZ2h0OjI2cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5oZWFkZXJfaDN7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MzJweH19LmhlYWRlcl9oNHtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMnB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuaGVhZGVyX2g0e2ZvbnQtc2l6ZToxOHB4O2xpbmUtaGVpZ2h0OjI2cHh9fS5oZWFkZXJfb3Jhbmdle2NvbG9yOiNmZmZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzaXplOiAnaDEnIHwgJ2gyJyB8ICdoMycgfCAnaDQnID0gJ2gxJztcbiAgQElucHV0KCkgY29sb3I6ICd3aGl0ZScgfCAnYmxhY2snO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWNhcmQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tY2FyZF9fdGl0bGVcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZXZvLWNhcmQtLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZXZvLWNhcmRfX2NvbnRlbnRcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZXZvLWNhcmQtLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJldm8tY2FyZF9fX2Zvb3RlclwiPlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJldm8tY2FyZC0tZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCU7cGFkZGluZzozMHB4O292ZXJmbG93OmF1dG87Ym9yZGVyLXJhZGl1czo2cHg7YmFja2dyb3VuZDojZmZmO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3M7bWFyZ2luLXJpZ2h0OjMwcHh9QG1lZGlhIChtaW4td2lkdGg6OTkycHgpezpob3N0e3dpZHRoOmNhbGMoMzMlIC0gMzBweCl9Omhvc3Q6aG92ZXJ7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMCwwLDAsLjIpfX06aG9zdCAvZGVlcC8gLmV2by1jYXJkX190aXRsZXtmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyNHB4O2xpbmUtaGVpZ2h0OjEuMjttYXJnaW4tYm90dG9tOjMwcHh9Omhvc3QgL2RlZXAvIC5ldm8tY2FyZF9fdGl0bGUgaW1ne2hlaWdodDozMHB4fTpob3N0IC9kZWVwLyAuZXZvLWNhcmRfX2NvbnRlbnR7bWFyZ2luLWJvdHRvbTozMHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcblxuaW1wb3J0IHsgRXZvVWlLaXRDb21wb25lbnQgfSBmcm9tICcuL2V2by11aS1raXQuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NoZWNrYm94Q29tcG9uZW50ICB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY2hlY2tib3gvZXZvLWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0Jhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYmFubmVyL2V2by1iYW5uZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRXZvVWlDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IEV2b0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8taGVhZGVyL2V2by1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNhcmQvZXZvLWNhcmQuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50czogYW55ID0gW1xuICBFdm9CdXR0b25Db21wb25lbnQsXG4gIEV2b0NoZWNrYm94Q29tcG9uZW50LFxuICBFdm9Db250cm9sRXJyb3JDb21wb25lbnQsXG4gIEV2b0lucHV0Q29tcG9uZW50LFxuICBFdm9CYW5uZXJDb21wb25lbnQsXG4gIEV2b0hlYWRlckNvbXBvbmVudCxcbiAgRXZvQ2FyZENvbXBvbmVudCxcbl07XG5cbmNvbnN0IGRpcmVjdGl2ZXM6IGFueSA9IFtcbiAgRXZvVWlDbGFzc0RpcmVjdGl2ZSxcbl07XG5cbmNvbnN0IGJ1bmRsZTogYW55ID0gW1xuICAuLi5jb21wb25lbnRzLFxuICAuLi5kaXJlY3RpdmVzXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRleHRNYXNrTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFdm9VaUtpdENvbXBvbmVudCxcbiAgICAuLi5idW5kbGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFdm9VaUtpdENvbXBvbmVudCxcbiAgICAuLi5idW5kbGUsXG4gIF0sXG4gIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b1Vp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