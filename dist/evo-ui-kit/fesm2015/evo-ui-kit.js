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
class EvoListComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EvoListComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-list',
                template: `<ng-content select="li"></ng-content>`,
                styles: [`:host /deep/{display:flex;flex-direction:column;justify-content:center;list-style-type:none}:host /deep/ li{margin-bottom:20px}:host /deep/ li:last-child{margin-bottom:0}:host /deep/ li::before{content:'\\2022';color:#ff7800;display:inline-block;width:1em}`]
            },] },
];
/** @nocollapse */
EvoListComponent.ctorParameters = () => [];

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
    EvoListComponent,
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

export { EvoUiKitService, EvoUiKitComponent, EvoUiKitModule, EvoBaseControl as ɵc, EvoBannerComponent as ɵf, EvoButtonComponent as ɵa, EvoCardComponent as ɵh, EvoCheckboxComponent as ɵb, EvoControlErrorComponent as ɵd, EvoHeaderComponent as ɵg, EvoInputComponent as ɵe, EvoListComponent as ɵi, EvoUiClassDirective as ɵj };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXZvLXVpLWtpdC9saWIvZXZvLXVpLWtpdC5zZXJ2aWNlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9ldm8tdWkta2l0LmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8taGVhZGVyL2V2by1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jYXJkL2V2by1jYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tbGlzdC9ldm8tbGlzdC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2V2by11aS1raXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlLaXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWV2by11aS1raXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgZXZvLXVpLWtpdCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlLaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU2l6ZXMge1xuICAgIGZ1bGxXaWR0aCA9ICdmdWxsLXdpZHRoJyxcbiAgICBzbWFsbCA9ICdzbWFsbCcsXG4gICAgbGFyZ2UgPSAnbGFyZ2UnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CdXR0b25TdHlsZXMge1xuICAgIGxpbmVkID0gJ2xpbmVkJyxcbiAgICBkYXJrYmx1ZSA9ICdkYXJrYmx1ZScsXG4gICAgZGFya2JsdWVMaW5lZCA9ICdkYXJrYmx1ZS1saW5lZCcsXG4gICAgZ3JlZW4gPSAnZ3JlZW4nLFxuICAgIGdyZWVubGluZWQgPSAnZ3JlZW4tbGluZWQnLFxuICAgIHB1cnBsZSA9ICdwdXJwbGUnXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWJ1dHRvblwiIFtldm9VaUNsYXNzXT1cInRvdGFsQ2xhc3Nlc1wiIFtuZ1N0eWxlXT1cInRvdGFsU3R5bGVzXCI+XG4gICAgPHNwYW4gKm5nSWY9XCIhbG9hZGluZ1wiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgQC13ZWJraXQta2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX0uZXZvLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjAgMzBweDtoZWlnaHQ6NDRweDtsaW5lLWhlaWdodDo0NHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxNnB4O2NvbG9yOiNmZmY7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1yYWRpdXM6MzBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4MDA7Ym9yZGVyOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzLGNvbG9yIC4zcyxib3JkZXIgLjNzfS5ldm8tYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmOWQ0Nztjb2xvcjojZmZmfS5ldm8tYnV0dG9uOmFjdGl2ZSwuZXZvLWJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjYzYwMDA7Y29sb3I6I2ZmZjtvdXRsaW5lOjB9LmV2by1idXR0b246ZGlzYWJsZWQsLmV2by1idXR0b25fZGlzYWJsZWR7YmFja2dyb3VuZDojZDZkNmQ2IWltcG9ydGFudDtib3JkZXItY29sb3I6I2Q2ZDZkNiFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7Y3Vyc29yOm5vdC1hbGxvd2VkfS5ldm8tYnV0dG9uX2xpbmVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojZmY3ODAwO2JvcmRlcjoxcHggc29saWQgI2ZmNzgwMH0uZXZvLWJ1dHRvbl9saW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4MDA7Y29sb3I6I2ZmZn0uZXZvLWJ1dHRvbl9saW5lZDphY3RpdmUsLmV2by1idXR0b25fbGluZWQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojY2M2MDAwO2NvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNjYzYwMDB9LmV2by1idXR0b25fZGFya2JsdWV7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izc1OTZhNX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZTphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMjgzMjM5fS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojNTQ2ZTdhO2JvcmRlcjoxcHggc29saWQgIzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM1NDZlN2E7Y29sb3I6I2ZmZn0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMjgzMjM5O2NvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiMyODMyMzl9LmV2by1idXR0b25fZ3JlZW57YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2EyY2Y2ZX0uZXZvLWJ1dHRvbl9ncmVlbjphY3RpdmUsLmV2by1idXR0b25fZ3JlZW46Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNmY5YzNifS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojOGJjMzRhO2JvcmRlcjoxcHggc29saWQgIzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM4YmMzNGE7Y29sb3I6I2ZmZn0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZ3JlZW4tbGluZWQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNmY5YzNiO2NvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiM2ZjljM2J9LmV2by1idXR0b25fcHVycGxle2JhY2tncm91bmQtY29sb3I6I2FiNGFjM30uZXZvLWJ1dHRvbl9wdXJwbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2M1OGU4fS5ldm8tYnV0dG9uX3B1cnBsZTphY3RpdmUsLmV2by1idXR0b25fcHVycGxlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzkzMzVhYn0uZXZvLWJ1dHRvbl9mdWxsLXdpZHRoe3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9LmV2by1idXR0b25fc21hbGx7cGFkZGluZzowIDIwcHg7aGVpZ2h0OjMwcHg7bGluZS1oZWlnaHQ6MzBweDtmb250LXNpemU6MTRweH0uZXZvLWJ1dHRvbl9sYXJnZXtwYWRkaW5nOjAgNDBweDtoZWlnaHQ6NjBweDtsaW5lLWhlaWdodDo2MHB4O2ZvbnQtc2l6ZToxOHB4fS5ldm8tYnV0dG9uX2ljb257cGFkZGluZy1sZWZ0OjIycHg7cGFkZGluZy1yaWdodDoyMnB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5ldm8tYnV0dG9uX2xvYWRpbmd7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZX0uZXZvLWJ1dHRvbl9fZG90c3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0zMHB4O21hcmdpbi10b3A6LTVweH0uZXZvLWJ1dHRvbl9fZG90e3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czo1MCU7ZmxvYXQ6bGVmdDtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjttYXJnaW46MCA1cHg7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuM3MgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC4zcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuNnMgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC42cyBpbmZpbml0ZSBmeH1gXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFdm9CdXR0b25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGNvbG9yOiBFdm9CdXR0b25TdHlsZXM7XG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzaXplOiBFdm9CdXR0b25TaXplcztcblxuICAgIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIGNsaWVudFdpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgICB9XG5cbiAgICBnZXQgdG90YWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbG9hZGluZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdsb2FkaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsU3R5bGVzKCk6IHtbc3R5bGVLZXk6IHN0cmluZ106IGFueX0ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5fbG9hZGluZykge1xuICAgICAgICAgICAgcmVzdWx0Wyd3aWR0aCddID0gYCR7dGhpcy5jbGllbnRXaWR0aH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgbG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNsaWVudFdpZHRoID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gRXZvQ29udHJvbFN0YXRlcyB7XG4gIHZhbGlkID0gJ3ZhbGlkJyxcbiAgaW52YWxpZCA9ICdpbnZhbGlkJyxcbn1cbiIsImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElFdm9Db250cm9sU3RhdGUgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBFdm9Db250cm9sU3RhdGVNYW5hZ2VyIHtcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgZXh0cmFTdGF0ZXM/OiBJRXZvQ29udHJvbFN0YXRlKSB7XG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgfVxuXG4gIGdldCBjdXJyZW50U3RhdGUoKTogSUV2b0NvbnRyb2xTdGF0ZSB7XG4gICAgLy8gVE9ETyBtZXJnZSBjb25kaXRpb25zIHdpdGggZXh0cmFTdGF0ZXNcblxuICAgIHJldHVybiB7XG4gICAgICB2YWxpZDogdGhpcy5jb250cm9sLmRpcnR5ICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC52YWxpZCxcbiAgICAgIGludmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wuaW52YWxpZCxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJRXZvQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXInO1xuaW1wb3J0IHsgSUV2b0NvbnRyb2xFcnJvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0nO1xuXG5leHBvcnQgY2xhc3MgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUpIGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sRGlyZWN0aXZlKSBmb3JtQ29udHJvbERpcmVjdGl2ZTogRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG4gIEBJbnB1dCgpIHN0YXRlOiBJRXZvQ29udHJvbFN0YXRlO1xuICBASW5wdXQoKSBlcnJvcnNNZXNzYWdlczogSUV2b0NvbnRyb2xFcnJvcjtcblxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gIHN0YXRlTWFuYWdlcjogRXZvQ29udHJvbFN0YXRlTWFuYWdlcjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2w7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlICYmIHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuc3RhdGVNYW5hZ2VyID0gbmV3IEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXIodGhpcy5jb250cm9sLCB0aGlzLnN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB0ZW1wbGF0ZSBkcml2ZW4gZm9ybXMgYWxsb3dlZCB3aXRoIEV2b1VpIGtpdCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaG93RXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlTWFuYWdlci5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IGA8bGFiZWwgY2xhc3M9XCJldm8tY2hlY2tib3hcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJldm8tY2hlY2tib3hfX2lucHV0XCJcbiAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgW2V2b1VpQ2xhc3NdPVwiY2hlY2tib3hDbGFzc1wiXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgICA8c3BhbiBjbGFzcz1cImV2by1jaGVja2JveF9fdGV4dFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuPC9sYWJlbD5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWNoZWNrYm94e21hcmdpbjowfS5ldm8tY2hlY2tib3hfX2lucHV0e2Rpc3BsYXk6bm9uZX0uZXZvLWNoZWNrYm94X190ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDoyNnB4O2NvbG9yOiMyMTIxMjE7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjJweDtsZWZ0OjA7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6M3B4fWlucHV0OmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7Ym9yZGVyLWNvbG9yOiM0NDhhZmY7YmFja2dyb3VuZDp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDJTNGeG1sIHZlcnNpb24lM0QlMjIxLjAlMjIgZW5jb2RpbmclM0QlMjJ1dGYtOCUyMiUzRiUzRSUzQ3N2ZyB2ZXJzaW9uJTNEJTIyMS4xJTIyIGlkJTNEJTIyJUQwJUExJUQwJUJCJUQwJUJFJUQwJUI5XzElMjIgeG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIgeG1sbnMlM0F4bGluayUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhsaW5rJTIyIHglM0QlMjIwcHglMjIgeSUzRCUyMjBweCUyMiUwOSB3aWR0aCUzRCUyMjEwcHglMjIgaGVpZ2h0JTNEJTIyN3B4JTIyIHZpZXdCb3glM0QlMjIwIDAgMTAgNyUyMiBlbmFibGUtYmFja2dyb3VuZCUzRCUyMm5ldyAwIDAgMTAgNyUyMiB4bWwlM0FzcGFjZSUzRCUyMnByZXNlcnZlJTIyJTNFJTNDcGF0aCBpZCUzRCUyMnBhdGgwX2ZpbGwlMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiBkJTNEJTIyTTkuNyUyQzAuM2MwLjQlMkMwLjQlMkMwLjQlMkMxJTJDMCUyQzEuNGwtNSUyQzVDNC40JTJDNyUyQzMuOSUyQzcuMSUyQzMuNSUyQzYuOWMtMC4yJTJDMC0wLjMtMC4xLTAuNC0wLjNMMC4zJTJDMy44JTA5Yy0wLjQtMC40LTAuNC0xJTJDMC0xLjRjMC40LTAuNCUyQzEtMC40JTJDMS40JTJDMGwyLjIlMkMyLjJsNC4zLTQuM0M4LjYtMC4xJTJDOS4zLTAuMSUyQzkuNyUyQzAuM3olMjIlMkYlM0UlM0MlMkZzdmclM0VcIikgY2VudGVyIG5vLXJlcGVhdCAjNDQ4YWZmfWlucHV0OmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrLmV2by1jaGVja2JveF9fdGV4dHtjdXJzb3I6ZGVmYXVsdH1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNn1pbnB1dDpkaXNhYmxlZDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHR7Y3Vyc29yOmRlZmF1bHR9aW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtvcGFjaXR5Oi41fWlucHV0LmV2by1jaGVja2JveF9pbnZhbGlkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JvcmRlci1jb2xvcjojZjIyfWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0NoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF92YWx1ZTogYm9vbGVhbjtcblxuICAgIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgZ2V0IHZhbHVlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBjaGVja2JveENsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2ludmFsaWQnOiB0aGlzLnN0YXRlTWFuYWdlci5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHN0YXRlO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRXZvQ29udHJvbEVycm9yIHtcbiAgICBbZXJyb3I6IHN0cmluZ106IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tY29udHJvbC1lcnJvcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWVycm9yXCIgKm5nRm9yPVwibGV0IGVycm9yTXNnIG9mIGVycm9yc01hcDsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICA8c3BhbiAqbmdJZj1cInNob3dFcnJvcihpKVwiPnt7IGVycm9yTXNnIH19PC9zcGFuPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWVycm9ye2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiNmMjI7Zm9udC1zdHlsZTppdGFsaWM7bWFyZ2luLXRvcDoxMHB4fWBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZXJyb3JzOiBhbnk7XG4gICAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG4gICAgQElucHV0KCkgc2hvd0NvdW50ID0gMTtcblxuICAgIHByaXZhdGUgZGVmYXVsdEVycm9yTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3IgPSB7XG4gICAgICAgIHJlcXVpcmVkOiAnw5DCl8OQwrDDkMK/w5DCvsOQwrvDkMK9w5DCuMORwoLDkMK1IMOQwr/DkMK+w5DCu8OQwrUnLFxuICAgICAgICBlbWFpbDogJ8OQwp3DkMK1w5DCv8ORwoDDkMKww5DCssOQwrjDkMK7w5HCjMOQwr3DkMK+IMORwoPDkMK6w5DCsMOQwrfDkMKww5DCvcOQwrAgw5DCv8OQwr7DkcKHw5HCgsOQwrAnLFxuICAgICAgICBwaG9uZTogJ8OQwpLDkMKyw5DCtcOQwrTDkMK4w5HCgsOQwrUgw5HCgsOQwrXDkMK7w5DCtcORwoTDkMK+w5DCvScsXG4gICAgfTtcblxuICAgIGdldCBlcnJvcnNNYXAoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0RXJyb3JNZXNzYWdlcyxcbiAgICAgICAgICAgIC4uLih0aGlzLmVycm9yc01lc3NhZ2VzIHx8IHt9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvcktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgIHJldHVybiBlcnJvcktleXMubWFwKChrZXkpID0+IGVycm9yTWVzc2FnZXNba2V5XSk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICsraW5kZXggPD0gdGhpcy5zaG93Q291bnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWlucHV0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0XCIgW2V2b1VpQ2xhc3NdPVwiaW5wdXRDbGFzc1wiPlxuICAgIDxsYWJlbCBjbGFzcz1cImV2by1pbnB1dF9fY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCAjaW5wdXRcbiAgICAgICAgICAgICAgICpuZ0lmPVwiIW1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgICAgICAqbmdJZj1cIm1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFt0ZXh0TWFza109XCJtYXNrXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0X19hZGRpdGlvbmFsXCJcbiAgICAgICAgICAgICAqbmdJZj1cImhhc0FkZGl0aW9uYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldm8taW5wdXRfX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAqbmdJZj1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzaG93VG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaGlkZVRvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJvblRvb2x0aXBDbGljaygkZXZlbnQpXCI+PzwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRvb2x0aXAgJiYgdG9vbHRpcFNob3duXCJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVG9vbHRpcENsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzaG93VG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaGlkZVRvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X190b29sdGlwLWxhYmVsXCI+e3sgdG9vbHRpcCB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgc3R5bGVzOiBbYC5ldm8taW5wdXR7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDt3aGl0ZS1zcGFjZTpub3dyYXA7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czo0cHg7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcyxib3JkZXIgLjNzO291dGxpbmU6MH0uZXZvLWlucHV0X19jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlci1yYWRpdXM6NHB4O2N1cnNvcjp0ZXh0fS5ldm8taW5wdXRfZm9jdXNlZHtib3gtc2hhZG93OjAgMCAycHggMCAjNTQ2ZTdhIWltcG9ydGFudDtib3JkZXI6MXB4IHNvbGlkICM1NDZlN2F9LmV2by1pbnB1dF9kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjYhaW1wb3J0YW50O2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9kaXNhYmxlZCAuZXZvLWlucHV0X19jb250YWluZXJ7Y3Vyc29yOmRlZmF1bHR9LmV2by1pbnB1dF92YWxpZHtib3JkZXItY29sb3I6IzhiYzM0YX0uZXZvLWlucHV0X2ludmFsaWR7Ym9yZGVyLWNvbG9yOiNmMjJ9LmV2by1pbnB1dF9fZmllbGR7aGVpZ2h0OjEwMCU7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowIDIwcHg7b3V0bGluZTowO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjojMDAwO2ZsZXgtZ3JvdzoxO2JvcmRlci1yYWRpdXM6NHB4O3dpZHRoOjEwMCV9LmV2by1pbnB1dF9fZmllbGQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X19maWVsZDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjliO29wYWNpdHk6MX0uZXZvLWlucHV0X19maWVsZDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5Yn0uZXZvLWlucHV0X19maWVsZDpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjYhaW1wb3J0YW50O2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6bm90KDpsYXN0LWNoaWxkKXtwYWRkaW5nLXJpZ2h0OjB9LmV2by1pbnB1dF9fdG9vbHRpcHstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7bWFyZ2luOjAgMTBweDt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6I2VjZWZmMTtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtZmFtaWx5OlwiT3BlbiBTYW5zXCIsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MThweDtmb250LXdlaWdodDo2MDA7Y29sb3I6IzU0NmU3YTtjdXJzb3I6cG9pbnRlcn0uZXZvLWlucHV0X190b29sdGlwLWxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7dG9wOmNhbGMoMTAwJSAtIDJweCk7bGVmdDowO2JhY2tncm91bmQtY29sb3I6I2ZmZjhlNjt6LWluZGV4OjE7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzoxMHB4IDEwcHggMTBweCAyMHB4O2NvbG9yOiMyMTIxMjE7ZGlzcGxheTpmbGV4O2JveC1zaGFkb3c6MCA0cHggMTJweCAwIHJnYmEoMCwwLDAsLjIpO2xpbmUtaGVpZ2h0Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3JtYWw7Y3Vyc29yOmRlZmF1bHR9LmV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbDpiZWZvcmV7Y29udGVudDonJzt0b3A6LTIwcHg7bGVmdDpjYWxjKDEwMCUgLSAzNHB4KTtib3JkZXI6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2ZmZjhlNjtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbHtsZWZ0OmNhbGMoNTAlIC0gMjJweCl9LmV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbDpiZWZvcmV7Y29udGVudDonJzt0b3A6LTIwcHg7bGVmdDpjYWxjKDUwJSAtIDEycHgpO2JvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjZmZmOGU2O3Bvc2l0aW9uOmFic29sdXRlfX1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9JbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9JbnB1dENvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBhdXRvRm9jdXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1hc2s6IGFueTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICBASW5wdXQoJ3ZhbHVlJykgX3ZhbHVlOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dEVsZW1lbnQ7XG5cbiAgb25DaGFuZ2U7XG4gIG9uVG91Y2hlZDtcblxuICBwdWJsaWMgdG9vbHRpcFNob3duID0gZmFsc2U7XG5cbiAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZm9jdXNlZCA9IGZhbHNlO1xuICBwcml2YXRlIHRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgfHwgdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW5wdXRDbGFzcygpOiB7W2Nzc0NsYXNzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb2N1c2VkJzogdGhpcy5mb2N1c2VkLFxuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICd2YWxpZCc6IHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLnZhbGlkXSxcbiAgICAgICdpbnZhbGlkJzogdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF1cbiAgICB9O1xuICB9XG5cbiAgZ2V0IGhhc0FkZGl0aW9uYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy50b29sdGlwO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHN0YXRlO1xuICB9XG5cbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIG9uVG9vbHRpcENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaGlkZVRvb2x0aXAoKSB7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFNob3duID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgMjUpO1xuICB9XG5cbiAgc2hvd1Rvb2x0aXAoKSB7XG4gICAgdGhpcy50b29sdGlwU2hvd24gPSB0cnVlO1xuICAgIHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1NlcmlhbGl6YWJsZSc7XG5cbmV4cG9ydCBlbnVtIEV2b0Jhbm5lclR5cGVzIHtcbiAgbGFyZ2UgPSAnbGFyZ2UnLFxuICBzbWFsbCA9ICdzbWFsbCcsXG4gIGZ1bGxXaWR0aCA9ICdmdWxsLXdpZHRoJyxcbn1cblxuZXhwb3J0IGVudW0gRXZvQmFubmVyTG9jYXRpb25zIHtcbiAgbWFpbiA9ICdNYWluJyxcbiAgY2F0ZWdvcnkgPSAnQ2F0ZWdvcnknXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2b0Jhbm5lckFuYWx5dGljcyB7XG4gIHVybDogc3RyaW5nO1xuICBkYXRhOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY3JlYXRpdmU6IHN0cmluZztcbiAgICBwb3NpdGlvbjogc3RyaW5nO1xuICAgIGRpbWVuc2lvbjc/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBFdm9CYW5uZXIgZXh0ZW5kcyBTZXJpYWxpemFibGUge1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGJhbm5lclBvc2l0aW9uTmFtZXMgPSB7XG4gICAgW0V2b0Jhbm5lckxvY2F0aW9ucy5tYWluXTogW1xuICAgICAgJ21haW4nLFxuICAgICAgJ3RvcCcsXG4gICAgICAnYm90dG9tJ1xuICAgIF0sXG4gICAgW0V2b0Jhbm5lckxvY2F0aW9ucy5jYXRlZ29yeV06IFtcbiAgICAgICdtYWluJ1xuICAgIF1cbiAgfTtcbiAgYnV0dG9uOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldm8tYmFubmVyJyxcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cImV2by1iYW5uZXJcIlxuICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgIFthdHRyLmhyZWZdPVwiYmFubmVyPy51cmxcIlxuICAgKGNsaWNrKT1cIm9uQmFubmVyQ2xpY2soKVwiXG4gICBbZXZvVWlDbGFzc109XCJ0eXBlXCJcbiAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGJhbm5lcj8uYmFja2dyb3VuZH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLWJhbm5lcl9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWJhbm5lcl9fdGl0bGVcIj57eyBiYW5uZXI/LnRpdGxlIH19PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdoaXRlIHByb21vLWJ0blwiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGJhbm5lcj8uYmFja2dyb3VuZH1cIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYmFubmVyPy5idXR0b25cIj57eyBiYW5uZXI/LmJ1dHRvbiB9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxpbWcgY2xhc3M9XCJldm8tYmFubmVyX19pbWdcIlxuICAgICAgICAgc3JjPVwie3sgYmFubmVyPy5pbWFnZSB9fVwiXG4gICAgICAgICBhbHQ9XCJ7eyBiYW5uZXI/LnRpdGxlIH19XCI+XG48L2E+XG5gLFxuICBzdHlsZXM6IFtgLmV2by1iYW5uZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6NDMwcHg7cGFkZGluZzoxMnB4IDIwcHg7Ym9yZGVyLXJhZGl1czo2cHg7b3ZlcmZsb3c6aGlkZGVuO2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zc30uZXZvLWJhbm5lcjpob3Zlcntib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMil9LmV2by1iYW5uZXJfX2NvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG57aGVpZ2h0OjQwcHg7cGFkZGluZzowIDIwcHg7bWluLXdpZHRoOjE1NnB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7ZGlzcGxheTp0YWJsZS1jZWxsO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuOmhvdmVye2JhY2tncm91bmQ6I2ZmZn0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuOmFjdGl2ZXtib3gtc2hhZG93Om5vbmV9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0biBzcGFue2ZvbnQtc2l6ZToxOHB4fS5ldm8tYmFubmVyX190aXRsZXtmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxLjM7Zm9udC1zaXplOjMwcHg7bWFyZ2luLWJvdHRvbToxMHB4fS5ldm8tYmFubmVyX19kZXNjcmlwdGlvbntmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjM7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1ib3R0b206MTBweH0uZXZvLWJhbm5lcl9faW1ne3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjA7d2lkdGg6MjkwcHg7aGVpZ2h0OjI5MHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGh7cGFkZGluZzoyMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX3RpdGxle2xpbmUtaGVpZ2h0OjM4cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tYmFubmVye3BhZGRpbmc6MzBweCA0MHB4fS5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MCV9LmV2by1iYW5uZXJfX2Rlc2NyaXB0aW9ue21heC13aWR0aDoyNTBweH0uZXZvLWJhbm5lcl9faW1ne3dpZHRoOjQzMHB4O2hlaWdodDo0MzBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoe2hlaWdodDoyNDBweDtwYWRkaW5nOjMwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NTAlfS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtc2l6ZTozNnB4O2xpbmUtaGVpZ2h0OjQ0cHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9faW1ne2hlaWdodDoyNDBweDt3aWR0aDoyNDBweH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZXZvLWJhbm5lcntwYWRkaW5nOjMwcHggNDBweH0uZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjMlfS5ldm8tYmFubmVyX3NtYWxse2hlaWdodDoyMTBweDtwYWRkaW5nOjIwcHh9LmV2by1iYW5uZXJfc21hbGwgLmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtc2l6ZToyMHB4O21hcmdpbi1ib3R0b206MjBweH0uZXZvLWJhbm5lcl9zbWFsbCAucHJvbW8tYnRue2hlaWdodDozMnB4fS5ldm8tYmFubmVyX3NtYWxsIC5ldm8tYmFubmVyX19pbWd7d2lkdGg6MjEwcHg7aGVpZ2h0OjIxMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYzJX19YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogJ1dpbmRvdycsICB1c2VWYWx1ZTogd2luZG93IH1cbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQmFubmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYmFubmVyOiBFdm9CYW5uZXI7XG4gIEBJbnB1dCgpIHR5cGU6IEV2b0Jhbm5lclR5cGVzID0gRXZvQmFubmVyVHlwZXMuc21hbGw7XG5cbiAgQE91dHB1dCgpIGJhbm5lckNsaWNrOiBFdmVudEVtaXR0ZXI8RXZvQmFubmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZvQmFubmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ1dpbmRvdycpIHByaXZhdGUgd2luZG93OiBhbnksXG4gICkge1xuICB9XG5cbiAgb25CYW5uZXJDbGljaygpIHtcbiAgICB0aGlzLmJhbm5lckNsaWNrLmVtaXQodGhpcy5iYW5uZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBJdGVyYWJsZURpZmZlcnMsIEtleVZhbHVlRGlmZmVycywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgaXNPYmplY3QgPSAoaXRlbSkgPT4gaXRlbSAhPSBudWxsICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JztcbmNvbnN0IGlzU3RyaW5nID0gKGl0ZW0pID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJztcbmNvbnN0IGlzQXJyYXkgPSAoaXRlbSkgPT4gQXJyYXkuaXNBcnJheShpdGVtKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2V2b1VpQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUNsYXNzRGlyZWN0aXZlIGV4dGVuZHMgTmdDbGFzcyB7XG4gIEBJbnB1dCgnZXZvVWlDbGFzcycpXG4gIHNldCBzZXR0ZXJPZkNsYXNzKGRhdGE6IGFueSkge1xuICAgIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YS5tYXAoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtjbGFzc05hbWV9YCk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgZGF0YSA9IE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZSgobmV3RGF0YTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBuZXdEYXRhW2Ake3RoaXMucHJlZml4fV8ke2tleX1gXSA9IGRhdGFba2V5XTtcbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgICB9LCB7fSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhkYXRhKSkge1xuICAgICAgZGF0YSA9IGRhdGFcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgobXlDbGFzcykgPT4gYCR7dGhpcy5wcmVmaXh9XyR7bXlDbGFzc31gKVxuICAgICAgICAuam9pbignICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgdHlwZSBub3QgYWxsb3dlZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLm5nQ2xhc3MgPSBkYXRhO1xuICB9XG5cbiAgbmdDbGFzczogYW55O1xuXG4gIHByaXZhdGUgcHJlZml4OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgICAgIF9uZ0VsOiBFbGVtZW50UmVmLCBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKF9pdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnMsIF9uZ0VsLCBfcmVuZGVyZXIpO1xuICAgIHRoaXMucHJlZml4ID0gX25nRWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RbMF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldm8taGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImhlYWRlclwiIFtuZ0NsYXNzXT1cIntcbiAgJ2hlYWRlcl9vcmFuZ2UnOiBjb2xvcj09PSd3aGl0ZScsXG4gICdoZWFkZXJfaDEnOiBzaXplPT09J2gxJyxcbiAgJ2hlYWRlcl9oMic6IHNpemU9PT0naDInLFxuICAnaGVhZGVyX2gzJzogc2l6ZT09PSdoMycsXG4gICdoZWFkZXJfaDQnOiBzaXplPT09J2g0J1xufVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L3NwYW4+YCxcbiAgc3R5bGVzOiBbYC5oZWFkZXJ7Zm9udC1mYW1pbHk6bXVzZW8sQXJpYWwsc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7Y29sb3I6IzMzM2Y0ODtkaXNwbGF5OmJsb2NrfS5oZWFkZXJfaDF7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6MzhweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmhlYWRlcl9oMXtmb250LXNpemU6MzZweDtsaW5lLWhlaWdodDo0NHB4fX0uaGVhZGVyX2gye2ZvbnQtc2l6ZToyNHB4O2xpbmUtaGVpZ2h0OjMycHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5oZWFkZXJfaDJ7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6MzhweH19LmhlYWRlcl9oM3tmb250LXNpemU6MThweDtsaW5lLWhlaWdodDoyNnB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuaGVhZGVyX2gze2ZvbnQtc2l6ZToyNHB4O2xpbmUtaGVpZ2h0OjMycHh9fS5oZWFkZXJfaDR7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjJweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmhlYWRlcl9oNHtmb250LXNpemU6MThweDtsaW5lLWhlaWdodDoyNnB4fX0uaGVhZGVyX29yYW5nZXtjb2xvcjojZmZmfWBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2l6ZTogJ2gxJyB8ICdoMicgfCAnaDMnIHwgJ2g0JyA9ICdoMSc7XG4gIEBJbnB1dCgpIGNvbG9yOiAnd2hpdGUnIHwgJ2JsYWNrJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1jYXJkJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWNhcmRfX3RpdGxlXCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImV2by1jYXJkLS10aXRsZVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImV2by1jYXJkX19jb250ZW50XCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImV2by1jYXJkLS1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZXZvLWNhcmRfX19mb290ZXJcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZXZvLWNhcmQtLWZvb3RlclwiPjwvbmctY29udGVudD5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO3BhZGRpbmc6MzBweDtvdmVyZmxvdzphdXRvO2JvcmRlci1yYWRpdXM6NnB4O2JhY2tncm91bmQ6I2ZmZjt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzO21hcmdpbi1yaWdodDozMHB4fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXs6aG9zdHt3aWR0aDpjYWxjKDMzJSAtIDMwcHgpfTpob3N0OmhvdmVye2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4yKX19Omhvc3QgL2RlZXAvIC5ldm8tY2FyZF9fdGl0bGV7Zm9udC1mYW1pbHk6bXVzZW8sQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDoxLjI7bWFyZ2luLWJvdHRvbTozMHB4fTpob3N0IC9kZWVwLyAuZXZvLWNhcmRfX3RpdGxlIGltZ3toZWlnaHQ6MzBweH06aG9zdCAvZGVlcC8gLmV2by1jYXJkX19jb250ZW50e21hcmdpbi1ib3R0b206MzBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9DYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1saXN0JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJsaVwiPjwvbmctY29udGVudD5gLFxuICBzdHlsZXM6IFtgOmhvc3QgL2RlZXAve2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjtsaXN0LXN0eWxlLXR5cGU6bm9uZX06aG9zdCAvZGVlcC8gbGl7bWFyZ2luLWJvdHRvbToyMHB4fTpob3N0IC9kZWVwLyBsaTpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH06aG9zdCAvZGVlcC8gbGk6OmJlZm9yZXtjb250ZW50OidcXFxcMjAyMic7Y29sb3I6I2ZmNzgwMDtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxZW19YF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuXG5pbXBvcnQgeyBFdm9VaUtpdENvbXBvbmVudCB9IGZyb20gJy4vZXZvLXVpLWtpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1idXR0b24vZXZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ2hlY2tib3hDb21wb25lbnQgIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jaGVja2JveC9ldm8tY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWlucHV0L2V2by1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFdm9VaUNsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V2by11aS1jbGFzcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXZvSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1oZWFkZXIvZXZvLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY2FyZC9ldm8tY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tbGlzdC9ldm8tbGlzdC5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnkgPSBbXG4gIEV2b0J1dHRvbkNvbXBvbmVudCxcbiAgRXZvQ2hlY2tib3hDb21wb25lbnQsXG4gIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCxcbiAgRXZvSW5wdXRDb21wb25lbnQsXG4gIEV2b0Jhbm5lckNvbXBvbmVudCxcbiAgRXZvSGVhZGVyQ29tcG9uZW50LFxuICBFdm9DYXJkQ29tcG9uZW50LFxuICBFdm9MaXN0Q29tcG9uZW50LFxuXTtcblxuY29uc3QgZGlyZWN0aXZlczogYW55ID0gW1xuICBFdm9VaUNsYXNzRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgYnVuZGxlOiBhbnkgPSBbXG4gIC4uLmNvbXBvbmVudHMsXG4gIC4uLmRpcmVjdGl2ZXNcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEV2b1VpS2l0Q29tcG9uZW50LFxuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEV2b1VpS2l0Q29tcG9uZW50LFxuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlLaXRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNKRDtJQWFFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixR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