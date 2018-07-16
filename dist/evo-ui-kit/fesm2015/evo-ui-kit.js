import { ChangeDetectionStrategy, Component, ElementRef, Input, ContentChild, forwardRef, ChangeDetectorRef, EventEmitter, Output, ViewChild, Inject, Injectable, HostListener, Directive, IterableDiffers, KeyValueDiffers, Renderer2, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControlDirective, FormControlName, NG_VALUE_ACCESSOR, FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { Key } from 'ts-keycode-enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgClass, CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

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
        this._disabled = false;
        this._loading = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
        if (!this.loading) {
            this.elRef.nativeElement.disabled = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loading(value) {
        this._loading = value;
        if (!this.disabled) {
            this.elRef.nativeElement.disabled = value;
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    get loading() {
        return this._loading;
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
        if (this.loading) {
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
        if (this.loading) {
            result['visibility'] = 'hidden';
        }
        return result;
    }
}
EvoButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-button, button[evo-button]',
                template: `<div class="evo-button" [evoUiClass]="totalClasses">
    <span [ngStyle]="totalStyles">
        <ng-content></ng-content>
    </span>
    <span *ngIf="loading" class="evo-button__dots">
        <span class="evo-button__dot"></span>
        <span class="evo-button__dot"></span>
        <span class="evo-button__dot"></span>
    </span>
</div>
`,
                styles: [`@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}:host{display:inline-block;margin:0;padding:0;vertical-align:top;background:0 0;border:0;outline:0}.evo-button{min-width:100px;height:44px;padding:0 30px;color:#fff;font-weight:700;font-size:16px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:44px;white-space:nowrap;text-align:center;text-transform:uppercase;vertical-align:middle;background:#ff7800;border:none;border-radius:30px;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-button:hover{color:#fff;background-color:#ff9d47}.evo-button:active,.evo-button:focus{color:#fff;background-color:#cc6000;outline:0}.evo-button:disabled,.evo-button_disabled{color:#fff!important;background:#d6d6d6!important;border-color:#d6d6d6!important;pointer-events:none}.evo-button_lined{color:#ff7800;background-color:#fff;border:1px solid #ff7800}.evo-button_lined:hover{color:#fff;background-color:#ff7800}.evo-button_lined:active,.evo-button_lined:focus{color:#fff;background-color:#cc6000;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{color:#546e7a;background-color:#fff;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{color:#fff;background-color:#546e7a}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{color:#fff;background-color:#283239;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{color:#8bc34a;background-color:#fff;border:1px solid #8bc34a}.evo-button_green-lined:hover{color:#fff;background-color:#8bc34a}.evo-button_green-lined:active,.evo-button_green-lined:focus{color:#fff;background-color:#6f9c3b;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_small{min-width:75px;height:30px;padding:0 20px;font-size:14px;line-height:30px}.evo-button_large{min-width:125px;height:60px;padding:0 40px;font-size:18px;line-height:60px}.evo-button_icon{display:inline-flex;align-items:center;padding-right:22px;padding-left:22px}.evo-button_loading{position:relative;pointer-events:none}.evo-button__dots{position:absolute;top:50%;left:50%;margin-top:-5px;margin-left:-30px}.evo-button__dot{float:left;width:10px;height:10px;margin:0 5px;background:currentColor;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
EvoButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
EvoButtonComponent.propDecorators = {
    color: [{ type: Input }],
    size: [{ type: Input }],
    disabled: [{ type: Input }],
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
        if (!this.control) {
            throw new Error('No template driven forms allowed with EvoUi kit');
        }
    }
    /**
     * @return {?}
     */
    get currentState() {
        const /** @type {?} */ defaultState = {
            valid: this.control.dirty && this.control.touched && this.control.valid,
            invalid: this.control.dirty && this.control.touched && this.control.invalid,
        };
        return Object.assign(defaultState, this.state);
    }
    /**
     * @return {?}
     */
    get showErrors() {
        return this.currentState[EvoControlStates.invalid];
    }
}
EvoBaseControl.propDecorators = {
    formControlName: [{ type: ContentChild, args: [FormControlName,] }],
    formControlDirective: [{ type: ContentChild, args: [FormControlDirective,] }],
    errorsMessages: [{ type: Input }],
    state: [{ type: Input }]
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
            'invalid': this.currentState[EvoControlStates.invalid],
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
                styles: [`.evo-checkbox{margin:0}.evo-checkbox__input{display:none}.evo-checkbox__text{position:relative;display:inline-block;padding-left:26px;color:#212121;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-checkbox__text:before{content:'';position:absolute;top:2px;left:0;width:16px;height:16px;background-color:#fff;border:1px solid #dbdbdb;border-radius:3px}input:checked+.evo-checkbox__text:before{background:url("data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg version%3D%221.1%22 id%3D%22%D0%A1%D0%BB%D0%BE%D0%B9_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2210px%22 height%3D%227px%22 viewBox%3D%220 0 10 7%22 enable-background%3D%22new 0 0 10 7%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath id%3D%22path0_fill%22 fill%3D%22%23FFFFFF%22 d%3D%22M9.7%2C0.3c0.4%2C0.4%2C0.4%2C1%2C0%2C1.4l-5%2C5C4.4%2C7%2C3.9%2C7.1%2C3.5%2C6.9c-0.2%2C0-0.3-0.1-0.4-0.3L0.3%2C3.8%09c-0.4-0.4-0.4-1%2C0-1.4c0.4-0.4%2C1-0.4%2C1.4%2C0l2.2%2C2.2l4.3-4.3C8.6-0.1%2C9.3-0.1%2C9.7%2C0.3z%22%2F%3E%3C%2Fsvg%3E") center no-repeat #448aff;border-color:#448aff}input:disabled:not(:checked)+.evo-checkbox__text{cursor:default}input:disabled:not(:checked)+.evo-checkbox__text:before{background-color:#f6f6f6}input:disabled:checked+.evo-checkbox__text{cursor:default}input:disabled:checked+.evo-checkbox__text:before{opacity:.5}input.evo-checkbox_invalid+.evo-checkbox__text:before{border-color:#f22}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => EvoCheckboxComponent),
                        multi: true,
                    },
                ],
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
        const /** @type {?} */ errorKeys = Object.keys(this.errors || {});
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
                styles: [`.evo-error{margin-top:10px;color:#f22;font-size:14px;font-style:italic}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
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
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        super();
        this.changeDetector = changeDetector;
        this.type = 'text';
        this.blur = new EventEmitter();
        this.customTooltipChecked = false;
        this.hasCustomTooltip = false;
        this.tooltipShown = false;
        this.disabled = false;
        this.focused = false;
        this.tooltipVisibilityTimeout = false;
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.inputElement.nativeElement.focus();
        }
        this.checkCustomTooltip();
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
            'valid': this.currentState[EvoControlStates.valid],
            'invalid': this.currentState[EvoControlStates.invalid],
        };
    }
    /**
     * @return {?}
     */
    get hasAdditional() {
        return !!this.tooltip || this.hasCustomTooltip;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this._value) {
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
        this.blur.emit();
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
    /**
     * @return {?}
     */
    checkCustomTooltip() {
        this.hasCustomTooltip = this.tooltipElement &&
            this.tooltipElement.nativeElement &&
            this.tooltipElement.nativeElement.children.length > 0;
        this.changeDetector.detectChanges();
        this.customTooltipChecked = true;
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
                 *ngIf="tooltip || hasCustomTooltip"
                 (mouseenter)="showTooltip()"
                 (mouseleave)="hideTooltip()"
                 (click)="onTooltipClick($event)">?</div>
        </div>
        <div *ngIf="!customTooltipChecked || tooltipShown"
             [hidden]="!customTooltipChecked"
             (click)="onTooltipClick($event)"
             (mouseenter)="showTooltip()"
             (mouseleave)="hideTooltip()"
             #tooltipContainer
             [ngClass]="{'evo-input__tooltip-container': tooltip}">
            {{ tooltip }}
            <ng-content select="[tooltip]"></ng-content>
        </div>
    </label>
</div>
<evo-control-error *ngIf="showErrors"
                   [errors]="control.errors"
                   [errorsMessages]="errorsMessages"></evo-control-error>
`,
                styles: [`.evo-input{position:relative;display:flex;width:100%;height:48px;line-height:48px;white-space:nowrap;background-color:#fff;background-image:none;border:1px solid #dbdbdb;border-radius:4px;outline:0;transition:box-shadow .3s,border .3s}.evo-input__container{display:flex;align-items:center;width:100%;height:100%;margin:0;border-radius:4px;cursor:text}.evo-input_focused{border:1px solid #546e7a;box-shadow:0 0 2px 0 #546e7a!important}.evo-input_disabled{color:#9b9b9b;background-color:#f6f6f6!important}.evo-input_disabled .evo-input__container{cursor:default}.evo-input_valid{border-color:#8bc34a}.evo-input_invalid{border-color:#f22}.evo-input__field{flex-grow:1;width:100%;height:100%;margin:0;padding:0 20px;color:#000;font-weight:400;font-size:16px;border:none;border-radius:4px;outline:0}.evo-input__field::-webkit-input-placeholder{color:#9b9b9b}.evo-input__field::-moz-placeholder{color:#9b9b9b;opacity:1}.evo-input__field:-ms-input-placeholder{color:#9b9b9b}.evo-input__field:disabled{color:#9b9b9b;background-color:#f6f6f6!important}.evo-input__field:not(:last-child){padding-right:0}.evo-input__tooltip{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:24px;height:24px;margin:0 10px;color:#546e7a;font-weight:600;font-size:18px;font-family:OpenSans,Arial,sans-serif;line-height:24px;text-align:center;background:#eceff1;border-radius:50%;cursor:pointer}.evo-input__tooltip-container{position:absolute;top:calc(100% - 2px);left:0;z-index:1;display:flex;width:100%;padding:10px 10px 10px 20px;color:#212121;line-height:normal;white-space:normal;background-color:#fff8e6;border-radius:4px;box-shadow:0 4px 12px 0 rgba(0,0,0,.2);cursor:default}.evo-input__tooltip-container[hidden]{display:none!important}.evo-input__tooltip-container:before{position:absolute;top:-20px;left:calc(100% - 34px);border:10px solid transparent;border-bottom:10px solid #fff8e6;pointer-events:none;content:''}@media (min-width:1200px){.evo-input__tooltip-container{left:calc(50% - 22px)}.evo-input__tooltip-container:before{position:absolute;top:-20px;left:calc(50% - 12px);border:10px solid transparent;border-bottom:10px solid #fff8e6;content:''}}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => EvoInputComponent),
                        multi: true,
                    },
                ],
            },] },
];
/** @nocollapse */
EvoInputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
                styles: [`.evo-banner{position:relative;display:block;height:430px;padding:12px 20px;overflow:hidden;color:#fff;border-radius:6px;cursor:pointer;transition:box-shadow .3s}.evo-banner:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}.evo-banner__content{position:relative;z-index:2}.evo-banner__content .btn{padding:7px 30px}.evo-banner__content .btn-white{display:inline-block;color:#ff7800;font-weight:600;font-size:16px;text-transform:none;background-color:#fff;border-radius:24px}.evo-banner__content .btn-white:hover{color:#fff;background-color:#e55526}.evo-banner__content .btn-white:hover:before{display:none}.evo-banner__content .promo-btn{display:table-cell;min-width:156px;height:40px;padding:0 20px;font-weight:600;font-size:14px;text-transform:uppercase;vertical-align:middle}.evo-banner__content .promo-btn:hover{background:#fff}.evo-banner__content .promo-btn:active{box-shadow:none}.evo-banner__content .promo-btn span{font-size:18px}.evo-banner__title{margin-bottom:10px;font-weight:700;font-size:30px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:1.3}.evo-banner__description{margin-top:20px;margin-bottom:10px;font-size:14px;line-height:1.3}.evo-banner__img{position:absolute;right:0;bottom:0;width:290px;height:290px}.evo-banner_full-width{padding:20px}.evo-banner_full-width .evo-banner__title{line-height:38px}@media (min-width:768px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:60%}.evo-banner__description{max-width:250px}.evo-banner__img{width:430px;height:430px}.evo-banner_full-width{height:240px;padding:30px}.evo-banner_full-width .evo-banner__content{max-width:50%}.evo-banner_full-width .evo-banner__title{font-size:36px;line-height:44px}.evo-banner_full-width .evo-banner__img{width:240px;height:240px}}@media (min-width:1200px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:63%}.evo-banner_small{height:210px;padding:20px}.evo-banner_small .evo-banner__title{margin-bottom:20px;font-size:20px}.evo-banner_small .promo-btn{height:32px}.evo-banner_small .evo-banner__img{width:210px;height:210px}.evo-banner_full-width .evo-banner__content{max-width:63%}}`],
                providers: [
                    { provide: 'Window', useValue: ɵ0 },
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
/** @enum {string} */
const EvoSidebarTypes = {
    basket: 'basket',
    partnerAuth: 'partnerAuth',
    promoCode: 'promoCode',
};
class EvoSidebarService {
    constructor() {
        this.isSidebarVisible$ = new BehaviorSubject({});
        this.registeredSidebars = {};
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deregister(id) {
        delete this.registeredSidebars[id];
    }
    /**
     * @param {?} id
     * @return {?}
     */
    register(id) {
        if (!(id in EvoSidebarTypes)) {
            console.error(`Sidebar. Unknown '${id}', please add this id in enum`);
            return;
        }
        this.registeredSidebars[id] = false;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    open(id) {
        this.registeredSidebars[id] = true;
        this.isSidebarVisible$.next(this.registeredSidebars);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    close(id) {
        this.registeredSidebars[id] = false;
        this.isSidebarVisible$.next(this.registeredSidebars);
    }
}
EvoSidebarService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoSidebarComponent {
    /**
     * @param {?} sidebarService
     */
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.onClose = new EventEmitter();
        this.states = {
            isVisible: false,
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sidebarService.deregister(this.id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sidebarService.register(this.id);
        this.sidebarService.isSidebarVisible$.subscribe((payload) => {
            if (this.id in payload) {
                this.states.isVisible = payload[this.id];
            }
            if (this.states.isVisible) {
                this.keyUpSubscription = this.subscribeToKeyEvent();
            }
            else if (this.keyUpSubscription) {
                this.keyUpSubscription.unsubscribe();
                this.keyUpSubscription = null;
            }
        });
    }
    /**
     * @return {?}
     */
    closeSidebar() {
        this.sidebarService.close(this.id);
        this.onClose.emit();
    }
    /**
     * @return {?}
     */
    subscribeToKeyEvent() {
        return fromEvent(document.body, 'keyup').subscribe((event) => {
            if (event.keyCode === Key.Escape) {
                this.sidebarService.close(this.id);
            }
        });
    }
}
EvoSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-sidebar',
                styles: [`.evo-sidebar{position:fixed;top:0;bottom:0;left:120%;z-index:3000;display:flex;flex-direction:column;width:100%;background-color:#fff;box-shadow:0 0 12px rgba(0,0,0,.25)}@media (min-width:992px){.evo-sidebar{left:100%;width:674px;margin-left:40px;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}}.evo-sidebar_active{left:0}.evo-sidebar__header{display:flex;flex-shrink:0;justify-content:space-between;align-items:flex-start;margin:0 15px;padding:20px 0 8px;border-bottom:1px solid #eceff1}@media (min-width:768px){.evo-sidebar__header{padding-top:38px}}.evo-sidebar__title{color:#333f48;font-weight:700;font-size:24px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:32px}@media (min-width:992px){.evo-sidebar_active{left:100%;-webkit-transform:translateX(-714px);transform:translateX(-714px)}.evo-sidebar__header{margin:0 30px}.evo-sidebar__title{font-size:30px;line-height:38px}}.evo-sidebar__close{margin:-4px 0 -2px 20px;padding:8px;color:#546e7a;cursor:pointer;transition:opacity .3s}.evo-sidebar__close:hover{opacity:.8}.evo-sidebar__close svg{vertical-align:top}.evo-sidebar__content{display:flex;flex-grow:1;flex-direction:column;padding:20px 15px 40px;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (min-width:768px){.evo-sidebar__content{padding:40px 15px}}@media (min-width:992px){.evo-sidebar__close{margin:2px 0 0 30px}.evo-sidebar__content{padding:40px 30px}}.evo-sidebar__footer{display:flex;flex-shrink:0;flex-direction:column;padding:30px 15px;background-color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.25)}.evo-sidebar__footer:empty{display:none}@media (min-width:768px){.evo-sidebar__footer{flex-direction:row;justify-content:space-between;padding:18px 15px}}@media (min-width:992px){.evo-sidebar__footer{padding:18px 30px}}.evo-sidebar__buttons{display:flex;flex-direction:column;padding:30px 0 10px}.evo-sidebar__buttons_border{margin-top:50px;border-top:1px solid #eceff1}.evo-sidebar__button+.evo-sidebar__button{margin-top:20px}@media (min-width:768px){.evo-sidebar__buttons{flex-direction:row;justify-content:space-between;padding-bottom:0}.evo-sidebar__button+.evo-sidebar__button{margin-top:0}}`],
                template: `<div class="fade-background fade-background_over-all"
     *ngIf="states.isVisible"
     (click)="closeSidebar()"
></div>

<div class="evo-sidebar" [ngClass]="{'evo-sidebar_active' : states.isVisible}" >
    <div class="evo-sidebar__header">
        <div class="evo-sidebar__title">{{ title }}</div>

        <div class="evo-sidebar__close" (click)="sidebarService.close(id)">
            <svg class="evo-sidebar__close-icon" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14.9,12l8.6-8.6c0.8-0.8,0.8-2.1,0-2.9c-0.8-0.8-2.1-0.8-2.9,0L12,9.1L3.4,0.6
                    c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9L9.1,12l-8.6,8.6c-0.8,0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0l8.6-8.6l8.6,8.6
                    c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9L14.9,12z"/>
            </svg>
        </div>
    </div>


    <div class="evo-sidebar__content">
        <ng-content select="[content]"></ng-content>
    </div>

    <div class="evo-sidebar__footer"><ng-content select="[footer]"></ng-content></div> <!--чтобы :empty работал, не должно быть внутри evo-sidebar__footer вообще ничего, даже пробела-->
</div>
`,
            },] },
];
/** @nocollapse */
EvoSidebarComponent.ctorParameters = () => [
    { type: EvoSidebarService }
];
EvoSidebarComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    onClose: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoRadioGroupComponent extends EvoBaseControl {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        super();
        this.formBuilder = formBuilder;
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
    ngOnInit() {
        this.createFormGroup();
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
    /**
     * Геттер на возможные варианты отчета в формате массива
     * презентационного текста для радио группа
     * @return {?}
     */
    get optionArray() {
        return this.generateOptionArray(this.options);
    }
    /**
     * Генерирует из опций массив
     * @param {?} source объект с вариантами
     * @return {?}
     */
    generateOptionArray(source) {
        const /** @type {?} */ array = [];
        for (const /** @type {?} */ key in source) {
            if (source.hasOwnProperty(key)) {
                array.push(source[key]);
            }
        }
        return array;
    }
    /**
     * Создание группы
     * @return {?}
     */
    createFormGroup() {
        this.formGroup = this.formBuilder.group({
            value: [this.value],
        });
    }
    /**
     * Обработчик на смену значения
     * @param {?} value значение
     * @return {?}
     */
    onChangedValue(value) {
        this.value = value;
    }
}
EvoRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-radio-group',
                template: `<div class="evo-radio-group" [formGroup]="formGroup">
    <label class="evo-radio-group__radio" *ngFor="let option of optionArray">
        <!-- Переключение стилей выполняется с помощью псевдоселектора :checked -->
        <input class="evo-radio-group__radio-control" (ngModelChange) = "onChangedValue($event)" formControlName="value" type="radio" value={{option.value}}>
        <div class="evo-radio-group__radio-view">
            <span class="evo-radio-group__radio-icon"></span>
            <span class="evo-radio-group__radio-value">{{option.presentationText}}</span>
        </div>
    </label>
</div>`,
                styles: [`.evo-radio-group{display:flex}.evo-radio-group__radio{flex:1;margin-right:30px;cursor:pointer}.evo-radio-group__radio:last-child{margin-right:0}.evo-radio-group__radio-control{display:none}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view{background-color:rgba(68,138,255,.05);border-color:#448aff}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view .evo-radio-group__radio-icon:before{display:block}.evo-radio-group__radio-view{display:flex;padding:20px;border:1px solid #dbdbdb;border-radius:8px}.evo-radio-group__radio-icon{position:relative;display:inline-block;flex-shrink:0;width:20px;height:20px;margin-right:20px;background-color:#fff;border:1px solid #dedede;border-radius:50%}.evo-radio-group__radio-icon:before{position:absolute;top:50%;left:50%;display:none;width:10px;height:10px;content:'';margin-top:-5px;margin-left:-5px;background-color:#448aff;border:1px solid #2869d7;border-radius:50%}.evo-radio-group__radio-value{color:#000;font-size:16px}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => EvoRadioGroupComponent),
                        multi: true,
                    },
                ],
            },] },
];
/** @nocollapse */
EvoRadioGroupComponent.ctorParameters = () => [
    { type: FormBuilder }
];
EvoRadioGroupComponent.propDecorators = {
    options: [{ type: Input }],
    _value: [{ type: Input, args: ['value',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EvoAutoCompleteTypes = {
    party: 'party',
};
class EvoAutoCompleteComponent extends EvoBaseControl {
    /**
     * @param {?} http
     * @param {?} elementRef
     */
    constructor(http, elementRef) {
        super();
        this.http = http;
        this.elementRef = elementRef;
        this.disabled = false;
        this.input = new FormControl();
        this.suggestions = [];
        this.valueAutoCompleted = false;
        this.autoCompeteTypes = EvoAutoCompleteTypes;
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleDocumentClick(event) {
        if (event.path.indexOf(this.elementRef.nativeElement) === -1 && this.suggestions) {
            this.valueAutoCompleted = true;
            this.input.setValue('', {
                emitEvent: false,
                onlySelf: true,
            });
            this.suggestions = null;
            this.value = '';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.input.valueChanges.subscribe((query) => {
            if (this.valueAutoCompleted) {
                this.valueAutoCompleted = false;
                return;
            }
            this.requestSuggestions(query);
        });
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
     * @param {?} suggestion
     * @return {?}
     */
    getSuggestionDataString(suggestion) {
        let /** @type {?} */ result = null;
        if (suggestion && suggestion.data) {
            const /** @type {?} */ inn = suggestion.data.inn;
            const { address } = suggestion.data;
            if (inn) {
                result = `${inn} ${address ? address.value : ''}`;
            }
        }
        return result;
    }
    /**
     * @param {?} event
     * @param {?} suggestion
     * @return {?}
     */
    handleSuggestionClick(event, suggestion) {
        this.valueAutoCompleted = true;
        this.input.setValue(suggestion.value, {
            emitEvent: false,
            onlySelf: true,
        });
        this.suggestions = null;
        this.value = suggestion;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!value) {
            this.input.setValue('');
        }
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
        state ? this.input.disable({ onlySelf: true, emitEvent: false }) :
            this.input.enable({ onlySelf: true, emitEvent: false });
    }
    /**
     * @param {?} query
     * @return {?}
     */
    requestSuggestions(query) {
        const /** @type {?} */ headers = new HttpHeaders()
            .set('Authorization', 'Token 6a62e779b984f0353e87931ebc384d2c736aafa9')
            .set('Content-Type', 'application/json');
        const /** @type {?} */ options = {
            headers,
        };
        this.http
            .post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', { query, count: 4 }, options)
            .subscribe((response) => {
            this.suggestions = response.suggestions;
        });
    }
}
EvoAutoCompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-auto-complete',
                template: `<div class="evo-auto-complete">
    <div class="evo-auto-complete__input-wrapper">
        <evo-input (blur)="onTouched()"
                   [state]="currentState"
                   [formControl]="input"></evo-input>
    </div>
    <div class="evo-auto-complete__suggestions" *ngIf="suggestions && suggestions.length && !disabled">
        <ng-container *ngFor="let suggestion of suggestions" >
            <div class="evo-auto-complete__party" *ngIf="getSuggestionDataString(suggestion)" (click)="handleSuggestionClick($event, suggestion)">
                <p class="evo-auto-complete__text-line" [attr.title]="suggestion.value">{{ suggestion.value }}</p>
                <p class="evo-auto-complete__text-line" [attr.title]="getSuggestionDataString(suggestion)">{{ getSuggestionDataString(suggestion) }}</p>
            </div>
        </ng-container>
    </div>
</div>
<evo-control-error *ngIf="showErrors"
                   [errors]="control.errors"
                   [errorsMessages]="errorsMessages"></evo-control-error>
`,
                styles: [`.evo-auto-complete{position:relative}.evo-auto-complete__input-wrapper{position:relative;z-index:2}.evo-auto-complete__suggestions{position:absolute;z-index:1;width:100%;overflow:hidden;background-color:#fff;border-radius:4px;box-shadow:0 0 12px 4px rgba(0,0,0,.2)}.evo-auto-complete__party{display:flex;flex-direction:column;justify-content:center;height:48px;padding:5px 20px;background-color:#fff;cursor:pointer}.evo-auto-complete__party:hover{color:#fff;background-color:#ff7800}.evo-auto-complete__text-line{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => EvoAutoCompleteComponent),
                        multi: true,
                    },
                ],
            },] },
];
/** @nocollapse */
EvoAutoCompleteComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ElementRef }
];
EvoAutoCompleteComponent.propDecorators = {
    type: [{ type: Input }],
    handleDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoControlLabelComponent {
}
EvoControlLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-control-label',
                template: `<div class="evo-control-label">
    <label class="evo-control-label__text">{{ label }}</label>
    <ng-content></ng-content>
</div>
`,
                styles: [`.evo-control-label{margin-bottom:20px}.evo-control-label__text{margin-bottom:11px;color:#9b9b9b;font-size:14px;line-height:16px}`],
            },] },
];
EvoControlLabelComponent.propDecorators = {
    label: [{ type: Input }]
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
                selector: '[evoUiClass]',
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
const /** @type {?} */ components = [
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
const /** @type {?} */ directives = [
    EvoUiClassDirective,
];
const /** @type {?} */ bundle = [
    ...components,
    ...directives,
];
class EvoUiKitModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: EvoUiKitModule,
            providers: [
                EvoSidebarService,
            ],
        };
    }
}
EvoUiKitModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    TextMaskModule,
                    ReactiveFormsModule,
                ],
                declarations: [
                    ...bundle,
                ],
                exports: [
                    ...bundle,
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

export { EvoSidebarService, EvoUiKitModule, EvoBaseControl as ɵc, EvoAutoCompleteComponent as ɵh, EvoBannerComponent as ɵf, EvoButtonComponent as ɵa, EvoCheckboxComponent as ɵb, EvoControlErrorComponent as ɵd, EvoControlLabelComponent as ɵi, EvoInputComponent as ɵe, EvoRadioGroupComponent as ɵj, EvoSidebarComponent as ɵg, EvoUiClassDirective as ɵk };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuc2VydmljZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXJhZGlvLWdyb3VwL2V2by1yYWRpby1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWF1dG8tY29tcGxldGUvZXZvLWF1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jb250cm9sLWxhYmVsL2V2by1jb250cm9sLWxhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9ldm8tdWkta2l0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBFdm9CdXR0b25TaXplcyB7XG4gICAgc21hbGwgPSAnc21hbGwnLFxuICAgIGxhcmdlID0gJ2xhcmdlJyxcbn1cblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU3R5bGVzIHtcbiAgICBsaW5lZCA9ICdsaW5lZCcsXG4gICAgZGFya2JsdWUgPSAnZGFya2JsdWUnLFxuICAgIGRhcmtibHVlTGluZWQgPSAnZGFya2JsdWUtbGluZWQnLFxuICAgIGdyZWVuID0gJ2dyZWVuJyxcbiAgICBncmVlbmxpbmVkID0gJ2dyZWVuLWxpbmVkJyxcbiAgICBwdXJwbGUgPSAncHVycGxlJyxcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tYnV0dG9uLCBidXR0b25bZXZvLWJ1dHRvbl0nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1idXR0b25cIiBbZXZvVWlDbGFzc109XCJ0b3RhbENsYXNzZXNcIj5cbiAgICA8c3BhbiBbbmdTdHlsZV09XCJ0b3RhbFN0eWxlc1wiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgQC13ZWJraXQta2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX06aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MDtwYWRkaW5nOjA7dmVydGljYWwtYWxpZ246dG9wO2JhY2tncm91bmQ6MCAwO2JvcmRlcjowO291dGxpbmU6MH0uZXZvLWJ1dHRvbnttaW4td2lkdGg6MTAwcHg7aGVpZ2h0OjQ0cHg7cGFkZGluZzowIDMwcHg7Y29sb3I6I2ZmZjtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjE2cHg7Zm9udC1mYW1pbHk6TXVzZW9TYW5zQ3lybCxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjQ0cHg7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7YmFja2dyb3VuZDojZmY3ODAwO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MzBweDtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyxjb2xvciAuM3MsYm9yZGVyIC4zczstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmV2by1idXR0b246aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNmZjlkNDd9LmV2by1idXR0b246YWN0aXZlLC5ldm8tYnV0dG9uOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojY2M2MDAwO291dGxpbmU6MH0uZXZvLWJ1dHRvbjpkaXNhYmxlZCwuZXZvLWJ1dHRvbl9kaXNhYmxlZHtjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kOiNkNmQ2ZDYhaW1wb3J0YW50O2JvcmRlci1jb2xvcjojZDZkNmQ2IWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfS5ldm8tYnV0dG9uX2xpbmVke2NvbG9yOiNmZjc4MDA7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2ZmNzgwMH0uZXZvLWJ1dHRvbl9saW5lZDpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMH0uZXZvLWJ1dHRvbl9saW5lZDphY3RpdmUsLmV2by1idXR0b25fbGluZWQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNjYzYwMDA7Ym9yZGVyLWNvbG9yOiNjYzYwMDB9LmV2by1idXR0b25fZGFya2JsdWV7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izc1OTZhNX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZTphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMjgzMjM5fS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVke2NvbG9yOiM1NDZlN2E7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgIzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzk7Ym9yZGVyLWNvbG9yOiMyODMyMzl9LmV2by1idXR0b25fZ3JlZW57YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2EyY2Y2ZX0uZXZvLWJ1dHRvbl9ncmVlbjphY3RpdmUsLmV2by1idXR0b25fZ3JlZW46Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNmY5YzNifS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVke2NvbG9yOiM4YmMzNGE7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgIzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZ3JlZW4tbGluZWQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2I7Ym9yZGVyLWNvbG9yOiM2ZjljM2J9LmV2by1idXR0b25fcHVycGxle2JhY2tncm91bmQtY29sb3I6I2FiNGFjM30uZXZvLWJ1dHRvbl9wdXJwbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2M1OGU4fS5ldm8tYnV0dG9uX3B1cnBsZTphY3RpdmUsLmV2by1idXR0b25fcHVycGxlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzkzMzVhYn0uZXZvLWJ1dHRvbl9zbWFsbHttaW4td2lkdGg6NzVweDtoZWlnaHQ6MzBweDtwYWRkaW5nOjAgMjBweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDozMHB4fS5ldm8tYnV0dG9uX2xhcmdle21pbi13aWR0aDoxMjVweDtoZWlnaHQ6NjBweDtwYWRkaW5nOjAgNDBweDtmb250LXNpemU6MThweDtsaW5lLWhlaWdodDo2MHB4fS5ldm8tYnV0dG9uX2ljb257ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1yaWdodDoyMnB4O3BhZGRpbmctbGVmdDoyMnB4fS5ldm8tYnV0dG9uX2xvYWRpbmd7cG9zaXRpb246cmVsYXRpdmU7cG9pbnRlci1ldmVudHM6bm9uZX0uZXZvLWJ1dHRvbl9fZG90c3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbi10b3A6LTVweDttYXJnaW4tbGVmdDotMzBweH0uZXZvLWJ1dHRvbl9fZG90e2Zsb2F0OmxlZnQ7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDttYXJnaW46MCA1cHg7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuM3MgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC4zcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuNnMgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC42cyBpbmZpbml0ZSBmeH1gXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQnV0dG9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBjb2xvcjogRXZvQnV0dG9uU3R5bGVzO1xuICAgIEBJbnB1dCgpIHNpemU6IEV2b0J1dHRvblNpemVzO1xuICAgIEBJbnB1dCgpIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBASW5wdXQoKSBzZXQgbG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBnZXQgbG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdsb2FkaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsU3R5bGVzKCk6IHtbc3R5bGVLZXk6IHN0cmluZ106IGFueX0ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXN1bHRbJ3Zpc2liaWxpdHknXSA9ICdoaWRkZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBFdm9Db250cm9sU3RhdGVzIHtcbiAgICB2YWxpZCA9ICd2YWxpZCcsXG4gICAgaW52YWxpZCA9ICdpbnZhbGlkJyxcbn1cbiIsImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElFdm9Db250cm9sU3RhdGUgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElFdm9Db250cm9sRXJyb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcblxuZXhwb3J0IGNsYXNzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUpIGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sRGlyZWN0aXZlKSBmb3JtQ29udHJvbERpcmVjdGl2ZTogRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG4gIEBJbnB1dCgpIHN0YXRlOiBJRXZvQ29udHJvbFN0YXRlO1xuXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2w7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlICYmIHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHRlbXBsYXRlIGRyaXZlbiBmb3JtcyBhbGxvd2VkIHdpdGggRXZvVWkga2l0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGN1cnJlbnRTdGF0ZSgpOiBJRXZvQ29udHJvbFN0YXRlIHtcbiAgICBjb25zdCBkZWZhdWx0U3RhdGU6IElFdm9Db250cm9sU3RhdGUgPSB7XG4gICAgICB2YWxpZDogdGhpcy5jb250cm9sLmRpcnR5ICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC52YWxpZCxcbiAgICAgIGludmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wuaW52YWxpZCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdFN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGdldCBzaG93RXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IGA8bGFiZWwgY2xhc3M9XCJldm8tY2hlY2tib3hcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJldm8tY2hlY2tib3hfX2lucHV0XCJcbiAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgW2V2b1VpQ2xhc3NdPVwiY2hlY2tib3hDbGFzc1wiXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgICA8c3BhbiBjbGFzcz1cImV2by1jaGVja2JveF9fdGV4dFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuPC9sYWJlbD5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWNoZWNrYm94e21hcmdpbjowfS5ldm8tY2hlY2tib3hfX2lucHV0e2Rpc3BsYXk6bm9uZX0uZXZvLWNoZWNrYm94X190ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDoyNnB4O2NvbG9yOiMyMTIxMjE7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjJweDtsZWZ0OjA7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6M3B4fWlucHV0OmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7YmFja2dyb3VuZDp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDJTNGeG1sIHZlcnNpb24lM0QlMjIxLjAlMjIgZW5jb2RpbmclM0QlMjJ1dGYtOCUyMiUzRiUzRSUzQ3N2ZyB2ZXJzaW9uJTNEJTIyMS4xJTIyIGlkJTNEJTIyJUQwJUExJUQwJUJCJUQwJUJFJUQwJUI5XzElMjIgeG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIgeG1sbnMlM0F4bGluayUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhsaW5rJTIyIHglM0QlMjIwcHglMjIgeSUzRCUyMjBweCUyMiUwOSB3aWR0aCUzRCUyMjEwcHglMjIgaGVpZ2h0JTNEJTIyN3B4JTIyIHZpZXdCb3glM0QlMjIwIDAgMTAgNyUyMiBlbmFibGUtYmFja2dyb3VuZCUzRCUyMm5ldyAwIDAgMTAgNyUyMiB4bWwlM0FzcGFjZSUzRCUyMnByZXNlcnZlJTIyJTNFJTNDcGF0aCBpZCUzRCUyMnBhdGgwX2ZpbGwlMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiBkJTNEJTIyTTkuNyUyQzAuM2MwLjQlMkMwLjQlMkMwLjQlMkMxJTJDMCUyQzEuNGwtNSUyQzVDNC40JTJDNyUyQzMuOSUyQzcuMSUyQzMuNSUyQzYuOWMtMC4yJTJDMC0wLjMtMC4xLTAuNC0wLjNMMC4zJTJDMy44JTA5Yy0wLjQtMC40LTAuNC0xJTJDMC0xLjRjMC40LTAuNCUyQzEtMC40JTJDMS40JTJDMGwyLjIlMkMyLjJsNC4zLTQuM0M4LjYtMC4xJTJDOS4zLTAuMSUyQzkuNyUyQzAuM3olMjIlMkYlM0UlM0MlMkZzdmclM0VcIikgY2VudGVyIG5vLXJlcGVhdCAjNDQ4YWZmO2JvcmRlci1jb2xvcjojNDQ4YWZmfWlucHV0OmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrLmV2by1jaGVja2JveF9fdGV4dHtjdXJzb3I6ZGVmYXVsdH1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNn1pbnB1dDpkaXNhYmxlZDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHR7Y3Vyc29yOmRlZmF1bHR9aW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtvcGFjaXR5Oi41fWlucHV0LmV2by1jaGVja2JveF9pbnZhbGlkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JvcmRlci1jb2xvcjojZjIyfWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0NoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGJvb2xlYW47XG5cbiAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGNoZWNrYm94Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdpbnZhbGlkJzogdGhpcy5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXSxcbiAgICB9O1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFdm9Db250cm9sRXJyb3Ige1xuICAgIFtlcnJvcjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jb250cm9sLWVycm9yJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tZXJyb3JcIiAqbmdGb3I9XCJsZXQgZXJyb3JNc2cgb2YgZXJyb3JzTWFwOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgIDxzcGFuICpuZ0lmPVwic2hvd0Vycm9yKGkpXCI+e3sgZXJyb3JNc2cgfX08L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tZXJyb3J7bWFyZ2luLXRvcDoxMHB4O2NvbG9yOiNmMjI7Zm9udC1zaXplOjE0cHg7Zm9udC1zdHlsZTppdGFsaWN9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZXJyb3JzOiBhbnk7XG4gICAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG4gICAgQElucHV0KCkgc2hvd0NvdW50ID0gMTtcblxuICAgIHByaXZhdGUgZGVmYXVsdEVycm9yTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3IgPSB7XG4gICAgICAgIHJlcXVpcmVkOiAnw5DCl8OQwrDDkMK/w5DCvsOQwrvDkMK9w5DCuMORwoLDkMK1IMOQwr/DkMK+w5DCu8OQwrUnLFxuICAgICAgICBlbWFpbDogJ8OQwp3DkMK1w5DCv8ORwoDDkMKww5DCssOQwrjDkMK7w5HCjMOQwr3DkMK+IMORwoPDkMK6w5DCsMOQwrfDkMKww5DCvcOQwrAgw5DCv8OQwr7DkcKHw5HCgsOQwrAnLFxuICAgICAgICBwaG9uZTogJ8OQwpLDkMKyw5DCtcOQwrTDkMK4w5HCgsOQwrUgw5HCgsOQwrXDkMK7w5DCtcORwoTDkMK+w5DCvScsXG4gICAgfTtcblxuICAgIGdldCBlcnJvcnNNYXAoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0RXJyb3JNZXNzYWdlcyxcbiAgICAgICAgICAgIC4uLih0aGlzLmVycm9yc01lc3NhZ2VzIHx8IHt9KSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3JLZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMgfHwge30pO1xuICAgICAgICByZXR1cm4gZXJyb3JLZXlzLm1hcCgoa2V5KSA9PiBlcnJvck1lc3NhZ2VzW2tleV0pO1xuICAgIH1cblxuICAgIHNob3dFcnJvcihpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiArK2luZGV4IDw9IHRoaXMuc2hvd0NvdW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWlucHV0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0XCIgW2V2b1VpQ2xhc3NdPVwiaW5wdXRDbGFzc1wiPlxuICAgIDxsYWJlbCBjbGFzcz1cImV2by1pbnB1dF9fY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCAjaW5wdXRcbiAgICAgICAgICAgICAgICpuZ0lmPVwiIW1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgICAgICAqbmdJZj1cIm1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFt0ZXh0TWFza109XCJtYXNrXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0X19hZGRpdGlvbmFsXCJcbiAgICAgICAgICAgICAqbmdJZj1cImhhc0FkZGl0aW9uYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldm8taW5wdXRfX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAqbmdJZj1cInRvb2x0aXAgfHwgaGFzQ3VzdG9tVG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNob3dUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVG9vbHRpcENsaWNrKCRldmVudClcIj4/PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWN1c3RvbVRvb2x0aXBDaGVja2VkIHx8IHRvb2x0aXBTaG93blwiXG4gICAgICAgICAgICAgW2hpZGRlbl09XCIhY3VzdG9tVG9vbHRpcENoZWNrZWRcIlxuICAgICAgICAgICAgIChjbGljayk9XCJvblRvb2x0aXBDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzaG93VG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAjdG9vbHRpcENvbnRhaW5lclxuICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcic6IHRvb2x0aXB9XCI+XG4gICAgICAgICAgICB7eyB0b29sdGlwIH19XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9vbHRpcF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICBzdHlsZXM6IFtgLmV2by1pbnB1dHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtoZWlnaHQ6NDhweDtsaW5lLWhlaWdodDo0OHB4O3doaXRlLXNwYWNlOm5vd3JhcDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjRweDtvdXRsaW5lOjA7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcyxib3JkZXIgLjNzfS5ldm8taW5wdXRfX2NvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7Ym9yZGVyLXJhZGl1czo0cHg7Y3Vyc29yOnRleHR9LmV2by1pbnB1dF9mb2N1c2Vke2JvcmRlcjoxcHggc29saWQgIzU0NmU3YTtib3gtc2hhZG93OjAgMCAycHggMCAjNTQ2ZTdhIWltcG9ydGFudH0uZXZvLWlucHV0X2Rpc2FibGVke2NvbG9yOiM5YjliOWI7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudH0uZXZvLWlucHV0X2Rpc2FibGVkIC5ldm8taW5wdXRfX2NvbnRhaW5lcntjdXJzb3I6ZGVmYXVsdH0uZXZvLWlucHV0X3ZhbGlke2JvcmRlci1jb2xvcjojOGJjMzRhfS5ldm8taW5wdXRfaW52YWxpZHtib3JkZXItY29sb3I6I2YyMn0uZXZvLWlucHV0X19maWVsZHtmbGV4LWdyb3c6MTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MCAyMHB4O2NvbG9yOiMwMDA7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNnB4O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NHB4O291dGxpbmU6MH0uZXZvLWlucHV0X19maWVsZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWI7b3BhY2l0eToxfS5ldm8taW5wdXRfX2ZpZWxkOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOmRpc2FibGVke2NvbG9yOiM5YjliOWI7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudH0uZXZvLWlucHV0X19maWVsZDpub3QoOmxhc3QtY2hpbGQpe3BhZGRpbmctcmlnaHQ6MH0uZXZvLWlucHV0X190b29sdGlwey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O21hcmdpbjowIDEwcHg7Y29sb3I6IzU0NmU3YTtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE4cHg7Zm9udC1mYW1pbHk6T3BlblNhbnMsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2VjZWZmMTtib3JkZXItcmFkaXVzOjUwJTtjdXJzb3I6cG9pbnRlcn0uZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Y2FsYygxMDAlIC0gMnB4KTtsZWZ0OjA7ei1pbmRleDoxO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO3BhZGRpbmc6MTBweCAxMHB4IDEwcHggMjBweDtjb2xvcjojMjEyMTIxO2xpbmUtaGVpZ2h0Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3JtYWw7YmFja2dyb3VuZC1jb2xvcjojZmZmOGU2O2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCA0cHggMTJweCAwIHJnYmEoMCwwLDAsLjIpO2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVyW2hpZGRlbl17ZGlzcGxheTpub25lIWltcG9ydGFudH0uZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yMHB4O2xlZnQ6Y2FsYygxMDAlIC0gMzRweCk7Ym9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNmZmY4ZTY7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OicnfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmV2by1pbnB1dF9fdG9vbHRpcC1jb250YWluZXJ7bGVmdDpjYWxjKDUwJSAtIDIycHgpfS5ldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVyOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwcHg7bGVmdDpjYWxjKDUwJSAtIDEycHgpO2JvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjZmZmOGU2O2NvbnRlbnQ6Jyd9fWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0lucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0lucHV0Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgQElucHV0KCkgbWFzazogYW55O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRhaW5lcicpIHRvb2x0aXBFbGVtZW50O1xuXG4gIGN1c3RvbVRvb2x0aXBDaGVja2VkID0gZmFsc2U7XG4gIGhhc0N1c3RvbVRvb2x0aXAgPSBmYWxzZTtcbiAgdG9vbHRpcFNob3duID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrQ3VzdG9tVG9vbHRpcCgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgfHwgdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW5wdXRDbGFzcygpOiB7W2Nzc0NsYXNzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb2N1c2VkJzogdGhpcy5mb2N1c2VkLFxuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICd2YWxpZCc6IHRoaXMuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMudmFsaWRdLFxuICAgICAgJ2ludmFsaWQnOiB0aGlzLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdLFxuICAgIH07XG4gIH1cblxuICBnZXQgaGFzQWRkaXRpb25hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnRvb2x0aXAgfHwgdGhpcy5oYXNDdXN0b21Ub29sdGlwO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgfVxuXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoKTtcbiAgfVxuXG4gIG9uVG9vbHRpcENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaGlkZVRvb2x0aXAoKSB7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy50b29sdGlwU2hvd24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAyNSk7XG4gIH1cblxuICBzaG93VG9vbHRpcCgpIHtcbiAgICB0aGlzLnRvb2x0aXBTaG93biA9IHRydWU7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDdXN0b21Ub29sdGlwKCkge1xuICAgIHRoaXMuaGFzQ3VzdG9tVG9vbHRpcCA9IHRoaXMudG9vbHRpcEVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXBFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXBFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmN1c3RvbVRvb2x0aXBDaGVja2VkID0gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi9jb21tb24vU2VyaWFsaXphYmxlJztcblxuZXhwb3J0IGVudW0gRXZvQmFubmVyVHlwZXMge1xuICBsYXJnZSA9ICdsYXJnZScsXG4gIHNtYWxsID0gJ3NtYWxsJyxcbiAgZnVsbFdpZHRoID0gJ2Z1bGwtd2lkdGgnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CYW5uZXJMb2NhdGlvbnMge1xuICBtYWluID0gJ01haW4nLFxuICBjYXRlZ29yeSA9ICdDYXRlZ29yeScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2b0Jhbm5lckFuYWx5dGljcyB7XG4gIHVybDogc3RyaW5nO1xuICBkYXRhOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY3JlYXRpdmU6IHN0cmluZztcbiAgICBwb3NpdGlvbjogc3RyaW5nO1xuICAgIGRpbWVuc2lvbjc/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBFdm9CYW5uZXIgZXh0ZW5kcyBTZXJpYWxpemFibGUge1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGJhbm5lclBvc2l0aW9uTmFtZXMgPSB7XG4gICAgW0V2b0Jhbm5lckxvY2F0aW9ucy5tYWluXTogW1xuICAgICAgJ21haW4nLFxuICAgICAgJ3RvcCcsXG4gICAgICAnYm90dG9tJyxcbiAgICBdLFxuICAgIFtFdm9CYW5uZXJMb2NhdGlvbnMuY2F0ZWdvcnldOiBbXG4gICAgICAnbWFpbicsXG4gICAgXSxcbiAgfTtcbiAgYnV0dG9uOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldm8tYmFubmVyJyxcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cImV2by1iYW5uZXJcIlxuICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgIFthdHRyLmhyZWZdPVwiYmFubmVyPy51cmxcIlxuICAgKGNsaWNrKT1cIm9uQmFubmVyQ2xpY2soKVwiXG4gICBbZXZvVWlDbGFzc109XCJ0eXBlXCJcbiAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGJhbm5lcj8uYmFja2dyb3VuZH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLWJhbm5lcl9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWJhbm5lcl9fdGl0bGVcIj57eyBiYW5uZXI/LnRpdGxlIH19PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdoaXRlIHByb21vLWJ0blwiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGJhbm5lcj8uYmFja2dyb3VuZH1cIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYmFubmVyPy5idXR0b25cIj57eyBiYW5uZXI/LmJ1dHRvbiB9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxpbWcgY2xhc3M9XCJldm8tYmFubmVyX19pbWdcIlxuICAgICAgICAgc3JjPVwie3sgYmFubmVyPy5pbWFnZSB9fVwiXG4gICAgICAgICBhbHQ9XCJ7eyBiYW5uZXI/LnRpdGxlIH19XCI+XG48L2E+XG5gLFxuICBzdHlsZXM6IFtgLmV2by1iYW5uZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztoZWlnaHQ6NDMwcHg7cGFkZGluZzoxMnB4IDIwcHg7b3ZlcmZsb3c6aGlkZGVuO2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo2cHg7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zc30uZXZvLWJhbm5lcjpob3Zlcntib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMil9LmV2by1iYW5uZXJfX2NvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5ldm8tYmFubmVyX19jb250ZW50IC5idG57cGFkZGluZzo3cHggMzBweH0uZXZvLWJhbm5lcl9fY29udGVudCAuYnRuLXdoaXRle2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbG9yOiNmZjc4MDA7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNnB4O3RleHQtdHJhbnNmb3JtOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6MjRweH0uZXZvLWJhbm5lcl9fY29udGVudCAuYnRuLXdoaXRlOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZTU1NTI2fS5ldm8tYmFubmVyX19jb250ZW50IC5idG4td2hpdGU6aG92ZXI6YmVmb3Jle2Rpc3BsYXk6bm9uZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRue2Rpc3BsYXk6dGFibGUtY2VsbDttaW4td2lkdGg6MTU2cHg7aGVpZ2h0OjQwcHg7cGFkZGluZzowIDIwcHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bjphY3RpdmV7Ym94LXNoYWRvdzpub25lfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG4gc3Bhbntmb250LXNpemU6MThweH0uZXZvLWJhbm5lcl9fdGl0bGV7bWFyZ2luLWJvdHRvbToxMHB4O2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MzBweDtmb250LWZhbWlseTpNdXNlb1NhbnNDeXJsLEFyaWFsLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS4zfS5ldm8tYmFubmVyX19kZXNjcmlwdGlvbnttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWJvdHRvbToxMHB4O2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuM30uZXZvLWJhbm5lcl9faW1ne3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MjkwcHg7aGVpZ2h0OjI5MHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGh7cGFkZGluZzoyMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX3RpdGxle2xpbmUtaGVpZ2h0OjM4cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tYmFubmVye3BhZGRpbmc6MzBweCA0MHB4fS5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MCV9LmV2by1iYW5uZXJfX2Rlc2NyaXB0aW9ue21heC13aWR0aDoyNTBweH0uZXZvLWJhbm5lcl9faW1ne3dpZHRoOjQzMHB4O2hlaWdodDo0MzBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoe2hlaWdodDoyNDBweDtwYWRkaW5nOjMwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NTAlfS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtc2l6ZTozNnB4O2xpbmUtaGVpZ2h0OjQ0cHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9faW1ne3dpZHRoOjI0MHB4O2hlaWdodDoyNDBweH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZXZvLWJhbm5lcntwYWRkaW5nOjMwcHggNDBweH0uZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjMlfS5ldm8tYmFubmVyX3NtYWxse2hlaWdodDoyMTBweDtwYWRkaW5nOjIwcHh9LmV2by1iYW5uZXJfc21hbGwgLmV2by1iYW5uZXJfX3RpdGxle21hcmdpbi1ib3R0b206MjBweDtmb250LXNpemU6MjBweH0uZXZvLWJhbm5lcl9zbWFsbCAucHJvbW8tYnRue2hlaWdodDozMnB4fS5ldm8tYmFubmVyX3NtYWxsIC5ldm8tYmFubmVyX19pbWd7d2lkdGg6MjEwcHg7aGVpZ2h0OjIxMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYzJX19YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogJ1dpbmRvdycsICB1c2VWYWx1ZTogd2luZG93IH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0Jhbm5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJhbm5lcjogRXZvQmFubmVyO1xuICBASW5wdXQoKSB0eXBlOiBFdm9CYW5uZXJUeXBlcyA9IEV2b0Jhbm5lclR5cGVzLnNtYWxsO1xuXG4gIEBPdXRwdXQoKSBiYW5uZXJDbGljazogRXZlbnRFbWl0dGVyPEV2b0Jhbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2b0Jhbm5lcj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdXaW5kb3cnKSBwcml2YXRlIHdpbmRvdzogYW55LFxuICApIHtcbiAgfVxuXG4gIG9uQmFubmVyQ2xpY2soKSB7XG4gICAgdGhpcy5iYW5uZXJDbGljay5lbWl0KHRoaXMuYmFubmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIEV2b1NpZGViYXJUeXBlcyB7XG4gICAgYmFza2V0ID0gJ2Jhc2tldCcsXG4gICAgcGFydG5lckF1dGggPSAncGFydG5lckF1dGgnLFxuICAgIHByb21vQ29kZSA9ICdwcm9tb0NvZGUnLFxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXZvU2lkZWJhclNlcnZpY2Uge1xuICAgIGlzU2lkZWJhclZpc2libGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gICAgcHJpdmF0ZSByZWdpc3RlcmVkU2lkZWJhcnMgPSB7fTtcblxuICAgIGRlcmVnaXN0ZXIoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICBkZWxldGUgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGlkOiBFdm9TaWRlYmFyVHlwZXMpIHtcbiAgICAgICAgaWYgKCEoaWQgaW4gRXZvU2lkZWJhclR5cGVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU2lkZWJhci4gVW5rbm93biAnJHtpZH0nLCBwbGVhc2UgYWRkIHRoaXMgaWQgaW4gZW51bWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9wZW4oaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF0gPSB0cnVlO1xuICAgICAgICB0aGlzLmlzU2lkZWJhclZpc2libGUkLm5leHQodGhpcy5yZWdpc3RlcmVkU2lkZWJhcnMpO1xuICAgIH1cblxuICAgIGNsb3NlKGlkOiBFdm9TaWRlYmFyVHlwZXMpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTaWRlYmFyVmlzaWJsZSQubmV4dCh0aGlzLnJlZ2lzdGVyZWRTaWRlYmFycyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZyb21FdmVudCBhcyBvYnNlcnZhYmxlRnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICd0cy1rZXljb2RlLWVudW0nO1xuXG5pbXBvcnQgeyBFdm9TaWRlYmFyU2VydmljZSwgRXZvU2lkZWJhclR5cGVzIH0gZnJvbSAnLi9ldm8tc2lkZWJhci5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1zaWRlYmFyJyxcbiAgICBzdHlsZXM6IFtgLmV2by1zaWRlYmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MTIwJTt6LWluZGV4OjMwMDA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMCAxMnB4IHJnYmEoMCwwLDAsLjI1KX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFye2xlZnQ6MTAwJTt3aWR0aDo2NzRweDttYXJnaW4tbGVmdDo0MHB4O3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjVzO3RyYW5zaXRpb246dHJhbnNmb3JtIC41czt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXMsLXdlYmtpdC10cmFuc2Zvcm0gLjVzfX0uZXZvLXNpZGViYXJfYWN0aXZle2xlZnQ6MH0uZXZvLXNpZGViYXJfX2hlYWRlcntkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O21hcmdpbjowIDE1cHg7cGFkZGluZzoyMHB4IDAgOHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlY2VmZjF9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9faGVhZGVye3BhZGRpbmctdG9wOjM4cHh9fS5ldm8tc2lkZWJhcl9fdGl0bGV7Y29sb3I6IzMzM2Y0ODtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6TXVzZW9TYW5zQ3lybCxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjMycHh9QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcl9hY3RpdmV7bGVmdDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTcxNHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNzE0cHgpfS5ldm8tc2lkZWJhcl9faGVhZGVye21hcmdpbjowIDMwcHh9LmV2by1zaWRlYmFyX190aXRsZXtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4fX0uZXZvLXNpZGViYXJfX2Nsb3Nle21hcmdpbjotNHB4IDAgLTJweCAyMHB4O3BhZGRpbmc6OHB4O2NvbG9yOiM1NDZlN2E7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IC4zc30uZXZvLXNpZGViYXJfX2Nsb3NlOmhvdmVye29wYWNpdHk6Ljh9LmV2by1zaWRlYmFyX19jbG9zZSBzdmd7dmVydGljYWwtYWxpZ246dG9wfS5ldm8tc2lkZWJhcl9fY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MjBweCAxNXB4IDQwcHg7b3ZlcmZsb3cteTphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2NvbnRlbnR7cGFkZGluZzo0MHB4IDE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfX2Nsb3Nle21hcmdpbjoycHggMCAwIDMwcHh9LmV2by1zaWRlYmFyX19jb250ZW50e3BhZGRpbmc6NDBweCAzMHB4fX0uZXZvLXNpZGViYXJfX2Zvb3RlcntkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzozMHB4IDE1cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4yNSl9LmV2by1zaWRlYmFyX19mb290ZXI6ZW1wdHl7ZGlzcGxheTpub25lfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2Zvb3RlcntmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZzoxOHB4IDE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfX2Zvb3RlcntwYWRkaW5nOjE4cHggMzBweH19LmV2by1zaWRlYmFyX19idXR0b25ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzozMHB4IDAgMTBweH0uZXZvLXNpZGViYXJfX2J1dHRvbnNfYm9yZGVye21hcmdpbi10b3A6NTBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjZWNlZmYxfS5ldm8tc2lkZWJhcl9fYnV0dG9uKy5ldm8tc2lkZWJhcl9fYnV0dG9ue21hcmdpbi10b3A6MjBweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19idXR0b25ze2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nLWJvdHRvbTowfS5ldm8tc2lkZWJhcl9fYnV0dG9uKy5ldm8tc2lkZWJhcl9fYnV0dG9ue21hcmdpbi10b3A6MH19YF0sXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZmFkZS1iYWNrZ3JvdW5kIGZhZGUtYmFja2dyb3VuZF9vdmVyLWFsbFwiXG4gICAgICpuZ0lmPVwic3RhdGVzLmlzVmlzaWJsZVwiXG4gICAgIChjbGljayk9XCJjbG9zZVNpZGViYXIoKVwiXG4+PC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJldm8tc2lkZWJhclwiIFtuZ0NsYXNzXT1cInsnZXZvLXNpZGViYXJfYWN0aXZlJyA6IHN0YXRlcy5pc1Zpc2libGV9XCIgPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9faGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fY2xvc2VcIiAoY2xpY2spPVwic2lkZWJhclNlcnZpY2UuY2xvc2UoaWQpXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZXZvLXNpZGViYXJfX2Nsb3NlLWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNC45LDEybDguNi04LjZjMC44LTAuOCwwLjgtMi4xLDAtMi45Yy0wLjgtMC44LTIuMS0wLjgtMi45LDBMMTIsOS4xTDMuNCwwLjZcbiAgICAgICAgICAgICAgICAgICAgYy0wLjgtMC44LTIuMS0wLjgtMi45LDBjLTAuOCwwLjgtMC44LDIuMSwwLDIuOUw5LjEsMTJsLTguNiw4LjZjLTAuOCwwLjgtMC44LDIuMSwwLDIuOWMwLjgsMC44LDIuMSwwLjgsMi45LDBsOC42LTguNmw4LjYsOC42XG4gICAgICAgICAgICAgICAgICAgIGMwLjgsMC44LDIuMSwwLjgsMi45LDBjMC44LTAuOCwwLjgtMi4xLDAtMi45TDE0LjksMTJ6XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2NvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19mb290ZXJcIj48bmctY29udGVudCBzZWxlY3Q9XCJbZm9vdGVyXVwiPjwvbmctY29udGVudD48L2Rpdj4gPCEtLcORwofDkcKCw5DCvsOQwrHDkcKLIDplbXB0eSDDkcKAw5DCsMOQwrHDkMK+w5HCgsOQwrDDkMK7LCDDkMK9w5DCtSDDkMK0w5DCvsOQwrvDkMK2w5DCvcOQwr4gw5DCscORwovDkcKCw5HCjCDDkMKyw5DCvcORwoPDkcKCw5HCgMOQwrggZXZvLXNpZGViYXJfX2Zvb3RlciDDkMKyw5DCvsOQwr7DkMKxw5HCicOQwrUgw5DCvcOQwrjDkcKHw5DCtcOQwrPDkMK+LCDDkMK0w5DCsMOQwrbDkMK1IMOQwr/DkcKAw5DCvsOQwrHDkMK1w5DCu8OQwrAtLT5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgRXZvU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgICBASW5wdXQoKSBpZDogRXZvU2lkZWJhclR5cGVzO1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGtleVVwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgc3RhdGVzID0ge1xuICAgICAgICBpc1Zpc2libGU6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc2lkZWJhclNlcnZpY2U6IEV2b1NpZGViYXJTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuZGVyZWdpc3Rlcih0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5yZWdpc3Rlcih0aGlzLmlkKTtcblxuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmlzU2lkZWJhclZpc2libGUkLnN1YnNjcmliZSgocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaWQgaW4gcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzLmlzVmlzaWJsZSA9IHBheWxvYWRbdGhpcy5pZF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVUb0tleUV2ZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5VXBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlU2lkZWJhcigpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5jbG9zZSh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN1YnNjcmliZVRvS2V5RXZlbnQoKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlRnJvbUV2ZW50KGRvY3VtZW50LmJvZHksICdrZXl1cCcpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXkuRXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5jbG9zZSh0aGlzLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4vdHlwaW5ncy9vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tcmFkaW8tZ3JvdXAnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1yYWRpby1ncm91cFwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwX19yYWRpb1wiICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uQXJyYXlcIj5cbiAgICAgICAgPCEtLSDDkMKfw5DCtcORwoDDkMK1w5DCusOQwrvDkcKOw5HCh8OQwrXDkMK9w5DCuMOQwrUgw5HCgcORwoLDkMK4w5DCu8OQwrXDkMK5IMOQwrLDkcKLw5DCv8OQwr7DkMK7w5DCvcORwo/DkMK1w5HCgsORwoHDkcKPIMORwoEgw5DCv8OQwr7DkMK8w5DCvsORwonDkcKMw5HCjiDDkMK/w5HCgcOQwrXDkMKyw5DCtMOQwr7DkcKBw5DCtcOQwrvDkMK1w5DCusORwoLDkMK+w5HCgMOQwrAgOmNoZWNrZWQgLS0+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tY29udHJvbFwiIChuZ01vZGVsQ2hhbmdlKSA9IFwib25DaGFuZ2VkVmFsdWUoJGV2ZW50KVwiIGZvcm1Db250cm9sTmFtZT1cInZhbHVlXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e3tvcHRpb24udmFsdWV9fT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tdmFsdWVcIj57e29wdGlvbi5wcmVzZW50YXRpb25UZXh0fX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5gLFxuICAgIHN0eWxlczogW2AuZXZvLXJhZGlvLWdyb3Vwe2Rpc3BsYXk6ZmxleH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpb3tmbGV4OjE7bWFyZ2luLXJpZ2h0OjMwcHg7Y3Vyc29yOnBvaW50ZXJ9LmV2by1yYWRpby1ncm91cF9fcmFkaW86bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9se2Rpc3BsYXk6bm9uZX0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9sOmNoZWNrZWQrLmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjgsMTM4LDI1NSwuMDUpO2JvcmRlci1jb2xvcjojNDQ4YWZmfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWNvbnRyb2w6Y2hlY2tlZCsuZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3IC5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb246YmVmb3Jle2Rpc3BsYXk6YmxvY2t9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld3tkaXNwbGF5OmZsZXg7cGFkZGluZzoyMHB4O2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjhweH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZsZXgtc2hyaW5rOjA7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tcmlnaHQ6MjBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO2JvcmRlci1yYWRpdXM6NTAlfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb246YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7ZGlzcGxheTpub25lO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Y29udGVudDonJzttYXJnaW4tdG9wOi01cHg7bWFyZ2luLWxlZnQ6LTVweDtiYWNrZ3JvdW5kLWNvbG9yOiM0NDhhZmY7Ym9yZGVyOjFweCBzb2xpZCAjMjg2OWQ3O2JvcmRlci1yYWRpdXM6NTAlfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLXZhbHVle2NvbG9yOiMwMDA7Zm9udC1zaXplOjE2cHh9YF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvUmFkaW9Hcm91cENvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9SYWRpb0dyb3VwQ29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgICBASW5wdXQoKSBvcHRpb25zOiBJT3B0aW9ucztcbiAgICBASW5wdXQoJ3ZhbHVlJykgX3ZhbHVlPzogc3RyaW5nO1xuXG4gICAgcHVibGljIGZvcm1Hcm91cDtcbiAgICBwcml2YXRlIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICBvbkNoYW5nZSA9IChfKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtR3JvdXAoKTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogw5DCk8OQwrXDkcKCw5HCgsOQwrXDkcKAIMOQwr3DkMKwIMOQwrLDkMK+w5DCt8OQwrzDkMK+w5DCtsOQwr3DkcKLw5DCtSDDkMKyw5DCsMORwoDDkMK4w5DCsMOQwr3DkcKCw5HCiyDDkMK+w5HCgsORwofDkMK1w5HCgsOQwrAgw5DCsiDDkcKEw5DCvsORwoDDkMK8w5DCsMORwoLDkMK1IMOQwrzDkMKww5HCgcORwoHDkMK4w5DCssOQwrBcbiAgICAqIMOQwr/DkcKAw5DCtcOQwrfDkMK1w5DCvcORwoLDkMKww5HChsOQwrjDkMK+w5DCvcOQwr3DkMK+w5DCs8OQwr4gw5HCgsOQwrXDkMK6w5HCgcORwoLDkMKwIMOQwrTDkMK7w5HCjyDDkcKAw5DCsMOQwrTDkMK4w5DCviDDkMKzw5HCgMORwoPDkMK/w5DCv8OQwrBcbiAgICAqL1xuICAgIGdldCBvcHRpb25BcnJheSgpOiBJT3B0aW9uc1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVPcHRpb25BcnJheSh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogw5DCk8OQwrXDkMK9w5DCtcORwoDDkMK4w5HCgMORwoPDkMK1w5HCgiDDkMK4w5DCtyDDkMK+w5DCv8ORwobDkMK4w5DCuSDDkMK8w5DCsMORwoHDkcKBw5DCuMOQwrJcbiAgICAqIEBwYXJhbSBzb3VyY2Ugw5DCvsOQwrHDkcKKw5DCtcOQwrrDkcKCIMORwoEgw5DCssOQwrDDkcKAw5DCuMOQwrDDkMK9w5HCgsOQwrDDkMK8w5DCuFxuICAgICovXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZU9wdGlvbkFycmF5KHNvdXJjZTogSU9wdGlvbnMpOiBJT3B0aW9uc1tdIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goc291cmNlW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogw5DCocOQwr7DkMK3w5DCtMOQwrDDkMK9w5DCuMOQwrUgw5DCs8ORwoDDkcKDw5DCv8OQwr/DkcKLXG4gICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZUZvcm1Hcm91cCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIHZhbHVlOiBbIHRoaXMudmFsdWUgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDDkMKew5DCscORwoDDkMKww5DCscOQwr7DkcKCw5HCh8OQwrjDkMK6IMOQwr3DkMKwIMORwoHDkMK8w5DCtcOQwr3DkcKDIMOQwrfDkMK9w5DCsMORwofDkMK1w5DCvcOQwrjDkcKPXG4gICAgKiBAcGFyYW0gdmFsdWUgw5DCt8OQwr3DkMKww5HCh8OQwrXDkMK9w5DCuMOQwrVcbiAgICAqL1xuICAgIHB1YmxpYyBvbkNoYW5nZWRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5cbmV4cG9ydCBlbnVtIEV2b0F1dG9Db21wbGV0ZVR5cGVzIHtcbiAgICBwYXJ0eSA9ICdwYXJ0eScsXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWF1dG8tY29tcGxldGUnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlXCI+XG4gICAgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX19pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxldm8taW5wdXQgKGJsdXIpPVwib25Ub3VjaGVkKClcIlxuICAgICAgICAgICAgICAgICAgIFtzdGF0ZV09XCJjdXJyZW50U3RhdGVcIlxuICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJpbnB1dFwiPjwvZXZvLWlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZV9fc3VnZ2VzdGlvbnNcIiAqbmdJZj1cInN1Z2dlc3Rpb25zICYmIHN1Z2dlc3Rpb25zLmxlbmd0aCAmJiAhZGlzYWJsZWRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdGlvbiBvZiBzdWdnZXN0aW9uc1wiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZV9fcGFydHlcIiAqbmdJZj1cImdldFN1Z2dlc3Rpb25EYXRhU3RyaW5nKHN1Z2dlc3Rpb24pXCIgKGNsaWNrKT1cImhhbmRsZVN1Z2dlc3Rpb25DbGljaygkZXZlbnQsIHN1Z2dlc3Rpb24pXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZV9fdGV4dC1saW5lXCIgW2F0dHIudGl0bGVdPVwic3VnZ2VzdGlvbi52YWx1ZVwiPnt7IHN1Z2dlc3Rpb24udmFsdWUgfX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZV9fdGV4dC1saW5lXCIgW2F0dHIudGl0bGVdPVwiZ2V0U3VnZ2VzdGlvbkRhdGFTdHJpbmcoc3VnZ2VzdGlvbilcIj57eyBnZXRTdWdnZXN0aW9uRGF0YVN0cmluZyhzdWdnZXN0aW9uKSB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGV2by1jb250cm9sLWVycm9yICpuZ0lmPVwic2hvd0Vycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc01lc3NhZ2VzXT1cImVycm9yc01lc3NhZ2VzXCI+PC9ldm8tY29udHJvbC1lcnJvcj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tYXV0by1jb21wbGV0ZXtwb3NpdGlvbjpyZWxhdGl2ZX0uZXZvLWF1dG8tY29tcGxldGVfX2lucHV0LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5ldm8tYXV0by1jb21wbGV0ZV9fc3VnZ2VzdGlvbnN7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OjAgMCAxMnB4IDRweCByZ2JhKDAsMCwwLC4yKX0uZXZvLWF1dG8tY29tcGxldGVfX3BhcnR5e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6NDhweDtwYWRkaW5nOjVweCAyMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcn0uZXZvLWF1dG8tY29tcGxldGVfX3BhcnR5OmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZmY3ODAwfS5ldm8tYXV0by1jb21wbGV0ZV9fdGV4dC1saW5le21hcmdpbjowO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpc31gXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9BdXRvQ29tcGxldGVDb21wb25lbnQpLFxuICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQXV0b0NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHR5cGU6IEV2b0F1dG9Db21wbGV0ZVR5cGVzO1xuICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgaW5wdXQ6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgc3VnZ2VzdGlvbnM6IGFueVtdID0gW107XG5cbiAgICBwcml2YXRlIF92YWx1ZTogYW55O1xuICAgIHByaXZhdGUgdmFsdWVBdXRvQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgICByZWFkb25seSBhdXRvQ29tcGV0ZVR5cGVzID0gRXZvQXV0b0NvbXBsZXRlVHlwZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsgJyRldmVudCcgXSlcbiAgICBoYW5kbGVEb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICAgIGlmIChldmVudC5wYXRoLmluZGV4T2YodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpID09PSAtMSAmJiB0aGlzLnN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIHRoaXMudmFsdWVBdXRvQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRWYWx1ZSgnJywge1xuICAgICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChxdWVyeTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlQXV0b0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZUF1dG9Db21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVxdWVzdFN1Z2dlc3Rpb25zKHF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0U3VnZ2VzdGlvbkRhdGFTdHJpbmcoc3VnZ2VzdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgICBpZiAoc3VnZ2VzdGlvbiAmJiBzdWdnZXN0aW9uLmRhdGEpIHtcbiAgICAgICAgY29uc3QgaW5uOiBzdHJpbmcgPSBzdWdnZXN0aW9uLmRhdGEuaW5uO1xuICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHN1Z2dlc3Rpb24uZGF0YTtcblxuICAgICAgICBpZiAoaW5uKSB7XG4gICAgICAgICAgcmVzdWx0ID0gYCR7aW5ufSAke2FkZHJlc3MgPyBhZGRyZXNzLnZhbHVlIDogJyd9YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGhhbmRsZVN1Z2dlc3Rpb25DbGljayhldmVudDogYW55LCBzdWdnZXN0aW9uOiBhbnkpIHtcbiAgICAgIHRoaXMudmFsdWVBdXRvQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5wdXQuc2V0VmFsdWUoc3VnZ2VzdGlvbi52YWx1ZSwge1xuICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IG51bGw7XG4gICAgICB0aGlzLnZhbHVlID0gc3VnZ2VzdGlvbjtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRWYWx1ZSgnJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gICAgICBzdGF0ZSA/IHRoaXMuaW5wdXQuZGlzYWJsZSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KSA6XG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQuZW5hYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIH1cblxuICAgIC8vICBUT0RPIENyZWF0ZSBnZW5lcmljIHdheSB0byBnZXQgRGFEYXRhIHN1Z2dlc3Rpb25zL2FueSBiYWNrZW5kIGRhdGEgdG8gc2hvd1xuICAgIHByaXZhdGUgcmVxdWVzdFN1Z2dlc3Rpb25zKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ1Rva2VuIDZhNjJlNzc5Yjk4NGYwMzUzZTg3OTMxZWJjMzg0ZDJjNzM2YWFmYTknKVxuICAgICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuaHR0cFxuICAgICAgICAucG9zdDxhbnk+KFxuICAgICAgICAgICdodHRwczovL3N1Z2dlc3Rpb25zLmRhZGF0YS5ydS9zdWdnZXN0aW9ucy9hcGkvNF8xL3JzL3N1Z2dlc3QvcGFydHknLFxuICAgICAgICAgIHsgcXVlcnksIGNvdW50OiA0IH0sXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gcmVzcG9uc2Uuc3VnZ2VzdGlvbnM7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tY29udHJvbC1sYWJlbCcsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWNvbnRyb2wtbGFiZWxcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJldm8tY29udHJvbC1sYWJlbF9fdGV4dFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tY29udHJvbC1sYWJlbHttYXJnaW4tYm90dG9tOjIwcHh9LmV2by1jb250cm9sLWxhYmVsX190ZXh0e21hcmdpbi1ib3R0b206MTFweDtjb2xvcjojOWI5YjliO2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjE2cHh9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xMYWJlbENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEl0ZXJhYmxlRGlmZmVycywgS2V5VmFsdWVEaWZmZXJzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBpc09iamVjdCA9IChpdGVtKSA9PiBpdGVtICE9IG51bGwgJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnO1xuY29uc3QgaXNTdHJpbmcgPSAoaXRlbSkgPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnO1xuY29uc3QgaXNBcnJheSA9IChpdGVtKSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZXZvVWlDbGFzc10nLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUNsYXNzRGlyZWN0aXZlIGV4dGVuZHMgTmdDbGFzcyB7XG4gIEBJbnB1dCgnZXZvVWlDbGFzcycpXG4gIHNldCBzZXR0ZXJPZkNsYXNzKGRhdGE6IGFueSkge1xuICAgIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhID0gZGF0YS5tYXAoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHt0aGlzLnByZWZpeH1fJHtjbGFzc05hbWV9YCk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgZGF0YSA9IE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZSgobmV3RGF0YTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBuZXdEYXRhW2Ake3RoaXMucHJlZml4fV8ke2tleX1gXSA9IGRhdGFba2V5XTtcbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgICB9LCB7fSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhkYXRhKSkge1xuICAgICAgZGF0YSA9IGRhdGFcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgobXlDbGFzcykgPT4gYCR7dGhpcy5wcmVmaXh9XyR7bXlDbGFzc31gKVxuICAgICAgICAuam9pbignICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgdHlwZSBub3QgYWxsb3dlZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLm5nQ2xhc3MgPSBkYXRhO1xuICB9XG5cbiAgbmdDbGFzczogYW55O1xuXG4gIHByaXZhdGUgcHJlZml4OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgICAgIF9uZ0VsOiBFbGVtZW50UmVmLCBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKF9pdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnMsIF9uZ0VsLCBfcmVuZGVyZXIpO1xuICAgIHRoaXMucHJlZml4ID0gX25nRWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RbMF07XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5cbmltcG9ydCB7IEV2b0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NoZWNrYm94Q29tcG9uZW50ICB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY2hlY2tib3gvZXZvLWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0Jhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYmFubmVyL2V2by1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b1NpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b1JhZGlvR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLXJhZGlvLWdyb3VwL2V2by1yYWRpby1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuc2VydmljZSc7XG5leHBvcnQgeyBFdm9TaWRlYmFyU2VydmljZSB9O1xuaW1wb3J0IHsgRXZvQXV0b0NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1hdXRvLWNvbXBsZXRlL2V2by1hdXRvLWNvbXBsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtbGFiZWwvZXZvLWNvbnRyb2wtbGFiZWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRXZvVWlDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlJztcblxuY29uc3QgY29tcG9uZW50czogYW55ID0gW1xuICBFdm9CdXR0b25Db21wb25lbnQsXG4gIEV2b0NoZWNrYm94Q29tcG9uZW50LFxuICBFdm9Db250cm9sRXJyb3JDb21wb25lbnQsXG4gIEV2b0lucHV0Q29tcG9uZW50LFxuICBFdm9CYW5uZXJDb21wb25lbnQsXG4gIEV2b1NpZGViYXJDb21wb25lbnQsXG4gIEV2b0F1dG9Db21wbGV0ZUNvbXBvbmVudCxcbiAgRXZvQ29udHJvbExhYmVsQ29tcG9uZW50LFxuICBFdm9SYWRpb0dyb3VwQ29tcG9uZW50LFxuXTtcblxuY29uc3QgZGlyZWN0aXZlczogYW55ID0gW1xuICBFdm9VaUNsYXNzRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgYnVuZGxlOiBhbnkgPSBbXG4gIC4uLmNvbXBvbmVudHMsXG4gIC4uLmRpcmVjdGl2ZXMsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRleHRNYXNrTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpS2l0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBFdm9VaUtpdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBFdm9TaWRlYmFyU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuXG5cbiJdLCJuYW1lcyI6WyJvYnNlcnZhYmxlRnJvbUV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztJQXFE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