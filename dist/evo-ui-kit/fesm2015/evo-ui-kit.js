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
                styles: [`.evo-radio-group{display:flex}.evo-radio-group__radio{flex:1;margin-right:30px;cursor:pointer}.evo-radio-group__radio:last-child{margin-right:0}.evo-radio-group__radio-control{display:none}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view{background-color:rgba(68,138,255,.05);border-color:#448aff}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view .evo-radio-group__radio-icon:before{display:block}.evo-radio-group__radio-view{display:flex;padding:20px;border:1px solid #dbdbdb;border-radius:8px}.evo-radio-group__radio-icon{position:relative;display:inline-block;flex-shrink:0;width:20px;height:20px;margin-right:20px;background-color:#fff;border:1px solid #dedede;border-radius:50%}.evo-radio-group__radio-icon:before{position:absolute;top:50%;left:50%;display:none;box-sizing:border-box;width:10px;height:10px;content:'';margin-top:-5px;margin-left:-5px;background-color:#448aff;border:1px solid #2869d7;border-radius:50%}.evo-radio-group__radio-value{color:#000;font-size:16px}`],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuc2VydmljZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLXJhZGlvLWdyb3VwL2V2by1yYWRpby1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWF1dG8tY29tcGxldGUvZXZvLWF1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1jb250cm9sLWxhYmVsL2V2by1jb250cm9sLWxhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9ldm8tdWkta2l0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBFdm9CdXR0b25TaXplcyB7XG4gICAgc21hbGwgPSAnc21hbGwnLFxuICAgIGxhcmdlID0gJ2xhcmdlJyxcbn1cblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU3R5bGVzIHtcbiAgICBsaW5lZCA9ICdsaW5lZCcsXG4gICAgZGFya2JsdWUgPSAnZGFya2JsdWUnLFxuICAgIGRhcmtibHVlTGluZWQgPSAnZGFya2JsdWUtbGluZWQnLFxuICAgIGdyZWVuID0gJ2dyZWVuJyxcbiAgICBncmVlbmxpbmVkID0gJ2dyZWVuLWxpbmVkJyxcbiAgICBwdXJwbGUgPSAncHVycGxlJyxcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tYnV0dG9uLCBidXR0b25bZXZvLWJ1dHRvbl0nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1idXR0b25cIiBbZXZvVWlDbGFzc109XCJ0b3RhbENsYXNzZXNcIj5cbiAgICA8c3BhbiBbbmdTdHlsZV09XCJ0b3RhbFN0eWxlc1wiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgQC13ZWJraXQta2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZ4ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX06aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MDtwYWRkaW5nOjA7dmVydGljYWwtYWxpZ246dG9wO2JhY2tncm91bmQ6MCAwO2JvcmRlcjowO291dGxpbmU6MH0uZXZvLWJ1dHRvbnttaW4td2lkdGg6MTAwcHg7aGVpZ2h0OjQ0cHg7cGFkZGluZzowIDMwcHg7Y29sb3I6I2ZmZjtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjE2cHg7Zm9udC1mYW1pbHk6TXVzZW9TYW5zQ3lybCxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjQ0cHg7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7YmFja2dyb3VuZDojZmY3ODAwO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MzBweDtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyxjb2xvciAuM3MsYm9yZGVyIC4zczstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmV2by1idXR0b246aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNmZjlkNDd9LmV2by1idXR0b246YWN0aXZlLC5ldm8tYnV0dG9uOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojY2M2MDAwO291dGxpbmU6MH0uZXZvLWJ1dHRvbjpkaXNhYmxlZCwuZXZvLWJ1dHRvbl9kaXNhYmxlZHtjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kOiNkNmQ2ZDYhaW1wb3J0YW50O2JvcmRlci1jb2xvcjojZDZkNmQ2IWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfS5ldm8tYnV0dG9uX2xpbmVke2NvbG9yOiNmZjc4MDA7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2ZmNzgwMH0uZXZvLWJ1dHRvbl9saW5lZDpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMH0uZXZvLWJ1dHRvbl9saW5lZDphY3RpdmUsLmV2by1idXR0b25fbGluZWQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNjYzYwMDA7Ym9yZGVyLWNvbG9yOiNjYzYwMDB9LmV2by1idXR0b25fZGFya2JsdWV7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izc1OTZhNX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZTphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMjgzMjM5fS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVke2NvbG9yOiM1NDZlN2E7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgIzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzk7Ym9yZGVyLWNvbG9yOiMyODMyMzl9LmV2by1idXR0b25fZ3JlZW57YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2EyY2Y2ZX0uZXZvLWJ1dHRvbl9ncmVlbjphY3RpdmUsLmV2by1idXR0b25fZ3JlZW46Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojNmY5YzNifS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVke2NvbG9yOiM4YmMzNGE7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgIzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDphY3RpdmUsLmV2by1idXR0b25fZ3JlZW4tbGluZWQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2I7Ym9yZGVyLWNvbG9yOiM2ZjljM2J9LmV2by1idXR0b25fcHVycGxle2JhY2tncm91bmQtY29sb3I6I2FiNGFjM30uZXZvLWJ1dHRvbl9wdXJwbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2M1OGU4fS5ldm8tYnV0dG9uX3B1cnBsZTphY3RpdmUsLmV2by1idXR0b25fcHVycGxlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzkzMzVhYn0uZXZvLWJ1dHRvbl9zbWFsbHttaW4td2lkdGg6NzVweDtoZWlnaHQ6MzBweDtwYWRkaW5nOjAgMjBweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDozMHB4fS5ldm8tYnV0dG9uX2xhcmdle21pbi13aWR0aDoxMjVweDtoZWlnaHQ6NjBweDtwYWRkaW5nOjAgNDBweDtmb250LXNpemU6MThweDtsaW5lLWhlaWdodDo2MHB4fS5ldm8tYnV0dG9uX2ljb257ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1yaWdodDoyMnB4O3BhZGRpbmctbGVmdDoyMnB4fS5ldm8tYnV0dG9uX2xvYWRpbmd7cG9zaXRpb246cmVsYXRpdmU7cG9pbnRlci1ldmVudHM6bm9uZX0uZXZvLWJ1dHRvbl9fZG90c3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbi10b3A6LTVweDttYXJnaW4tbGVmdDotMzBweH0uZXZvLWJ1dHRvbl9fZG90e2Zsb2F0OmxlZnQ7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDttYXJnaW46MCA1cHg7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuM3MgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC4zcyBpbmZpbml0ZSBmeH0uZXZvLWJ1dHRvbl9fZG90Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbjoxcyAuNnMgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIC42cyBpbmZpbml0ZSBmeH1gXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQnV0dG9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBjb2xvcjogRXZvQnV0dG9uU3R5bGVzO1xuICAgIEBJbnB1dCgpIHNpemU6IEV2b0J1dHRvblNpemVzO1xuICAgIEBJbnB1dCgpIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBASW5wdXQoKSBzZXQgbG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBnZXQgbG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdsb2FkaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsU3R5bGVzKCk6IHtbc3R5bGVLZXk6IHN0cmluZ106IGFueX0ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXN1bHRbJ3Zpc2liaWxpdHknXSA9ICdoaWRkZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBFdm9Db250cm9sU3RhdGVzIHtcbiAgICB2YWxpZCA9ICd2YWxpZCcsXG4gICAgaW52YWxpZCA9ICdpbnZhbGlkJyxcbn1cbiIsImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElFdm9Db250cm9sU3RhdGUgfSBmcm9tICcuL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElFdm9Db250cm9sRXJyb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcblxuZXhwb3J0IGNsYXNzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUpIGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sRGlyZWN0aXZlKSBmb3JtQ29udHJvbERpcmVjdGl2ZTogRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG4gIEBJbnB1dCgpIHN0YXRlOiBJRXZvQ29udHJvbFN0YXRlO1xuXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2w7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlICYmIHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHRlbXBsYXRlIGRyaXZlbiBmb3JtcyBhbGxvd2VkIHdpdGggRXZvVWkga2l0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGN1cnJlbnRTdGF0ZSgpOiBJRXZvQ29udHJvbFN0YXRlIHtcbiAgICBjb25zdCBkZWZhdWx0U3RhdGU6IElFdm9Db250cm9sU3RhdGUgPSB7XG4gICAgICB2YWxpZDogdGhpcy5jb250cm9sLmRpcnR5ICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC52YWxpZCxcbiAgICAgIGludmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wuaW52YWxpZCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdFN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGdldCBzaG93RXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IGA8bGFiZWwgY2xhc3M9XCJldm8tY2hlY2tib3hcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJldm8tY2hlY2tib3hfX2lucHV0XCJcbiAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgW2V2b1VpQ2xhc3NdPVwiY2hlY2tib3hDbGFzc1wiXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgICA8c3BhbiBjbGFzcz1cImV2by1jaGVja2JveF9fdGV4dFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuPC9sYWJlbD5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWNoZWNrYm94e21hcmdpbjowfS5ldm8tY2hlY2tib3hfX2lucHV0e2Rpc3BsYXk6bm9uZX0uZXZvLWNoZWNrYm94X190ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDoyNnB4O2NvbG9yOiMyMTIxMjE7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjJweDtsZWZ0OjA7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6M3B4fWlucHV0OmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7YmFja2dyb3VuZDp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDJTNGeG1sIHZlcnNpb24lM0QlMjIxLjAlMjIgZW5jb2RpbmclM0QlMjJ1dGYtOCUyMiUzRiUzRSUzQ3N2ZyB2ZXJzaW9uJTNEJTIyMS4xJTIyIGlkJTNEJTIyJUQwJUExJUQwJUJCJUQwJUJFJUQwJUI5XzElMjIgeG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIgeG1sbnMlM0F4bGluayUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhsaW5rJTIyIHglM0QlMjIwcHglMjIgeSUzRCUyMjBweCUyMiUwOSB3aWR0aCUzRCUyMjEwcHglMjIgaGVpZ2h0JTNEJTIyN3B4JTIyIHZpZXdCb3glM0QlMjIwIDAgMTAgNyUyMiBlbmFibGUtYmFja2dyb3VuZCUzRCUyMm5ldyAwIDAgMTAgNyUyMiB4bWwlM0FzcGFjZSUzRCUyMnByZXNlcnZlJTIyJTNFJTNDcGF0aCBpZCUzRCUyMnBhdGgwX2ZpbGwlMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiBkJTNEJTIyTTkuNyUyQzAuM2MwLjQlMkMwLjQlMkMwLjQlMkMxJTJDMCUyQzEuNGwtNSUyQzVDNC40JTJDNyUyQzMuOSUyQzcuMSUyQzMuNSUyQzYuOWMtMC4yJTJDMC0wLjMtMC4xLTAuNC0wLjNMMC4zJTJDMy44JTA5Yy0wLjQtMC40LTAuNC0xJTJDMC0xLjRjMC40LTAuNCUyQzEtMC40JTJDMS40JTJDMGwyLjIlMkMyLjJsNC4zLTQuM0M4LjYtMC4xJTJDOS4zLTAuMSUyQzkuNyUyQzAuM3olMjIlMkYlM0UlM0MlMkZzdmclM0VcIikgY2VudGVyIG5vLXJlcGVhdCAjNDQ4YWZmO2JvcmRlci1jb2xvcjojNDQ4YWZmfWlucHV0OmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrLmV2by1jaGVja2JveF9fdGV4dHtjdXJzb3I6ZGVmYXVsdH1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNn1pbnB1dDpkaXNhYmxlZDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHR7Y3Vyc29yOmRlZmF1bHR9aW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtvcGFjaXR5Oi41fWlucHV0LmV2by1jaGVja2JveF9pbnZhbGlkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JvcmRlci1jb2xvcjojZjIyfWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0NoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGJvb2xlYW47XG5cbiAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGNoZWNrYm94Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdpbnZhbGlkJzogdGhpcy5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy5pbnZhbGlkXSxcbiAgICB9O1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFdm9Db250cm9sRXJyb3Ige1xuICAgIFtlcnJvcjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1jb250cm9sLWVycm9yJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tZXJyb3JcIiAqbmdGb3I9XCJsZXQgZXJyb3JNc2cgb2YgZXJyb3JzTWFwOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgIDxzcGFuICpuZ0lmPVwic2hvd0Vycm9yKGkpXCI+e3sgZXJyb3JNc2cgfX08L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tZXJyb3J7bWFyZ2luLXRvcDoxMHB4O2NvbG9yOiNmMjI7Zm9udC1zaXplOjE0cHg7Zm9udC1zdHlsZTppdGFsaWN9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZXJyb3JzOiBhbnk7XG4gICAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG4gICAgQElucHV0KCkgc2hvd0NvdW50ID0gMTtcblxuICAgIHByaXZhdGUgZGVmYXVsdEVycm9yTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3IgPSB7XG4gICAgICAgIHJlcXVpcmVkOiAnw5DCl8OQwrDDkMK/w5DCvsOQwrvDkMK9w5DCuMORwoLDkMK1IMOQwr/DkMK+w5DCu8OQwrUnLFxuICAgICAgICBlbWFpbDogJ8OQwp3DkMK1w5DCv8ORwoDDkMKww5DCssOQwrjDkMK7w5HCjMOQwr3DkMK+IMORwoPDkMK6w5DCsMOQwrfDkMKww5DCvcOQwrAgw5DCv8OQwr7DkcKHw5HCgsOQwrAnLFxuICAgICAgICBwaG9uZTogJ8OQwpLDkMKyw5DCtcOQwrTDkMK4w5HCgsOQwrUgw5HCgsOQwrXDkMK7w5DCtcORwoTDkMK+w5DCvScsXG4gICAgfTtcblxuICAgIGdldCBlcnJvcnNNYXAoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0RXJyb3JNZXNzYWdlcyxcbiAgICAgICAgICAgIC4uLih0aGlzLmVycm9yc01lc3NhZ2VzIHx8IHt9KSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3JLZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMgfHwge30pO1xuICAgICAgICByZXR1cm4gZXJyb3JLZXlzLm1hcCgoa2V5KSA9PiBlcnJvck1lc3NhZ2VzW2tleV0pO1xuICAgIH1cblxuICAgIHNob3dFcnJvcihpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiArK2luZGV4IDw9IHRoaXMuc2hvd0NvdW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2b0NvbnRyb2xTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bSc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWlucHV0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0XCIgW2V2b1VpQ2xhc3NdPVwiaW5wdXRDbGFzc1wiPlxuICAgIDxsYWJlbCBjbGFzcz1cImV2by1pbnB1dF9fY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCAjaW5wdXRcbiAgICAgICAgICAgICAgICpuZ0lmPVwiIW1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgICAgICAqbmdJZj1cIm1hc2tcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJldm8taW5wdXRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgdHlwZT1cInt7IHR5cGUgfX1cIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgIFt0ZXh0TWFza109XCJtYXNrXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0X19hZGRpdGlvbmFsXCJcbiAgICAgICAgICAgICAqbmdJZj1cImhhc0FkZGl0aW9uYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldm8taW5wdXRfX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAqbmdJZj1cInRvb2x0aXAgfHwgaGFzQ3VzdG9tVG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNob3dUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVG9vbHRpcENsaWNrKCRldmVudClcIj4/PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWN1c3RvbVRvb2x0aXBDaGVja2VkIHx8IHRvb2x0aXBTaG93blwiXG4gICAgICAgICAgICAgW2hpZGRlbl09XCIhY3VzdG9tVG9vbHRpcENoZWNrZWRcIlxuICAgICAgICAgICAgIChjbGljayk9XCJvblRvb2x0aXBDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzaG93VG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJoaWRlVG9vbHRpcCgpXCJcbiAgICAgICAgICAgICAjdG9vbHRpcENvbnRhaW5lclxuICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcic6IHRvb2x0aXB9XCI+XG4gICAgICAgICAgICB7eyB0b29sdGlwIH19XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9vbHRpcF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICBzdHlsZXM6IFtgLmV2by1pbnB1dHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtoZWlnaHQ6NDhweDtsaW5lLWhlaWdodDo0OHB4O3doaXRlLXNwYWNlOm5vd3JhcDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjRweDtvdXRsaW5lOjA7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcyxib3JkZXIgLjNzfS5ldm8taW5wdXRfX2NvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7Ym9yZGVyLXJhZGl1czo0cHg7Y3Vyc29yOnRleHR9LmV2by1pbnB1dF9mb2N1c2Vke2JvcmRlcjoxcHggc29saWQgIzU0NmU3YTtib3gtc2hhZG93OjAgMCAycHggMCAjNTQ2ZTdhIWltcG9ydGFudH0uZXZvLWlucHV0X2Rpc2FibGVke2NvbG9yOiM5YjliOWI7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudH0uZXZvLWlucHV0X2Rpc2FibGVkIC5ldm8taW5wdXRfX2NvbnRhaW5lcntjdXJzb3I6ZGVmYXVsdH0uZXZvLWlucHV0X3ZhbGlke2JvcmRlci1jb2xvcjojOGJjMzRhfS5ldm8taW5wdXRfaW52YWxpZHtib3JkZXItY29sb3I6I2YyMn0uZXZvLWlucHV0X19maWVsZHtmbGV4LWdyb3c6MTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MCAyMHB4O2NvbG9yOiMwMDA7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNnB4O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NHB4O291dGxpbmU6MH0uZXZvLWlucHV0X19maWVsZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWI7b3BhY2l0eToxfS5ldm8taW5wdXRfX2ZpZWxkOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOmRpc2FibGVke2NvbG9yOiM5YjliOWI7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudH0uZXZvLWlucHV0X19maWVsZDpub3QoOmxhc3QtY2hpbGQpe3BhZGRpbmctcmlnaHQ6MH0uZXZvLWlucHV0X190b29sdGlwey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O21hcmdpbjowIDEwcHg7Y29sb3I6IzU0NmU3YTtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE4cHg7Zm9udC1mYW1pbHk6T3BlblNhbnMsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2VjZWZmMTtib3JkZXItcmFkaXVzOjUwJTtjdXJzb3I6cG9pbnRlcn0uZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Y2FsYygxMDAlIC0gMnB4KTtsZWZ0OjA7ei1pbmRleDoxO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO3BhZGRpbmc6MTBweCAxMHB4IDEwcHggMjBweDtjb2xvcjojMjEyMTIxO2xpbmUtaGVpZ2h0Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3JtYWw7YmFja2dyb3VuZC1jb2xvcjojZmZmOGU2O2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCA0cHggMTJweCAwIHJnYmEoMCwwLDAsLjIpO2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVyW2hpZGRlbl17ZGlzcGxheTpub25lIWltcG9ydGFudH0uZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yMHB4O2xlZnQ6Y2FsYygxMDAlIC0gMzRweCk7Ym9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNmZmY4ZTY7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OicnfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmV2by1pbnB1dF9fdG9vbHRpcC1jb250YWluZXJ7bGVmdDpjYWxjKDUwJSAtIDIycHgpfS5ldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVyOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwcHg7bGVmdDpjYWxjKDUwJSAtIDEycHgpO2JvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjZmZmOGU2O2NvbnRlbnQ6Jyd9fWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0lucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0lucHV0Q29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgQElucHV0KCkgbWFzazogYW55O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRhaW5lcicpIHRvb2x0aXBFbGVtZW50O1xuXG4gIGN1c3RvbVRvb2x0aXBDaGVja2VkID0gZmFsc2U7XG4gIGhhc0N1c3RvbVRvb2x0aXAgPSBmYWxzZTtcbiAgdG9vbHRpcFNob3duID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrQ3VzdG9tVG9vbHRpcCgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgfHwgdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW5wdXRDbGFzcygpOiB7W2Nzc0NsYXNzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb2N1c2VkJzogdGhpcy5mb2N1c2VkLFxuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICd2YWxpZCc6IHRoaXMuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMudmFsaWRdLFxuICAgICAgJ2ludmFsaWQnOiB0aGlzLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdLFxuICAgIH07XG4gIH1cblxuICBnZXQgaGFzQWRkaXRpb25hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnRvb2x0aXAgfHwgdGhpcy5oYXNDdXN0b21Ub29sdGlwO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgfVxuXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoKTtcbiAgfVxuXG4gIG9uVG9vbHRpcENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaGlkZVRvb2x0aXAoKSB7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy50b29sdGlwU2hvd24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAyNSk7XG4gIH1cblxuICBzaG93VG9vbHRpcCgpIHtcbiAgICB0aGlzLnRvb2x0aXBTaG93biA9IHRydWU7XG4gICAgdGhpcy50b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDdXN0b21Ub29sdGlwKCkge1xuICAgIHRoaXMuaGFzQ3VzdG9tVG9vbHRpcCA9IHRoaXMudG9vbHRpcEVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXBFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXBFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmN1c3RvbVRvb2x0aXBDaGVja2VkID0gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi9jb21tb24vU2VyaWFsaXphYmxlJztcblxuZXhwb3J0IGVudW0gRXZvQmFubmVyVHlwZXMge1xuICBsYXJnZSA9ICdsYXJnZScsXG4gIHNtYWxsID0gJ3NtYWxsJyxcbiAgZnVsbFdpZHRoID0gJ2Z1bGwtd2lkdGgnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CYW5uZXJMb2NhdGlvbnMge1xuICBtYWluID0gJ01haW4nLFxuICBjYXRlZ29yeSA9ICdDYXRlZ29yeScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2b0Jhbm5lckFuYWx5dGljcyB7XG4gIHVybDogc3RyaW5nO1xuICBkYXRhOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY3JlYXRpdmU6IHN0cmluZztcbiAgICBwb3NpdGlvbjogc3RyaW5nO1xuICAgIGRpbWVuc2lvbjc/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBFdm9CYW5uZXIgZXh0ZW5kcyBTZXJpYWxpemFibGUge1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGJhbm5lclBvc2l0aW9uTmFtZXMgPSB7XG4gICAgW0V2b0Jhbm5lckxvY2F0aW9ucy5tYWluXTogW1xuICAgICAgJ21haW4nLFxuICAgICAgJ3RvcCcsXG4gICAgICAnYm90dG9tJyxcbiAgICBdLFxuICAgIFtFdm9CYW5uZXJMb2NhdGlvbnMuY2F0ZWdvcnldOiBbXG4gICAgICAnbWFpbicsXG4gICAgXSxcbiAgfTtcbiAgYnV0dG9uOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldm8tYmFubmVyJyxcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cImV2by1iYW5uZXJcIlxuICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgIFthdHRyLmhyZWZdPVwiYmFubmVyPy51cmxcIlxuICAgKGNsaWNrKT1cIm9uQmFubmVyQ2xpY2soKVwiXG4gICBbZXZvVWlDbGFzc109XCJ0eXBlXCJcbiAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGJhbm5lcj8uYmFja2dyb3VuZH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLWJhbm5lcl9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWJhbm5lcl9fdGl0bGVcIj57eyBiYW5uZXI/LnRpdGxlIH19PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdoaXRlIHByb21vLWJ0blwiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGJhbm5lcj8uYmFja2dyb3VuZH1cIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYmFubmVyPy5idXR0b25cIj57eyBiYW5uZXI/LmJ1dHRvbiB9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxpbWcgY2xhc3M9XCJldm8tYmFubmVyX19pbWdcIlxuICAgICAgICAgc3JjPVwie3sgYmFubmVyPy5pbWFnZSB9fVwiXG4gICAgICAgICBhbHQ9XCJ7eyBiYW5uZXI/LnRpdGxlIH19XCI+XG48L2E+XG5gLFxuICBzdHlsZXM6IFtgLmV2by1iYW5uZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztoZWlnaHQ6NDMwcHg7cGFkZGluZzoxMnB4IDIwcHg7b3ZlcmZsb3c6aGlkZGVuO2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo2cHg7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zc30uZXZvLWJhbm5lcjpob3Zlcntib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMil9LmV2by1iYW5uZXJfX2NvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5ldm8tYmFubmVyX19jb250ZW50IC5idG57cGFkZGluZzo3cHggMzBweH0uZXZvLWJhbm5lcl9fY29udGVudCAuYnRuLXdoaXRle2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbG9yOiNmZjc4MDA7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNnB4O3RleHQtdHJhbnNmb3JtOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6MjRweH0uZXZvLWJhbm5lcl9fY29udGVudCAuYnRuLXdoaXRlOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZTU1NTI2fS5ldm8tYmFubmVyX19jb250ZW50IC5idG4td2hpdGU6aG92ZXI6YmVmb3Jle2Rpc3BsYXk6bm9uZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRue2Rpc3BsYXk6dGFibGUtY2VsbDttaW4td2lkdGg6MTU2cHg7aGVpZ2h0OjQwcHg7cGFkZGluZzowIDIwcHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bjphY3RpdmV7Ym94LXNoYWRvdzpub25lfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG4gc3Bhbntmb250LXNpemU6MThweH0uZXZvLWJhbm5lcl9fdGl0bGV7bWFyZ2luLWJvdHRvbToxMHB4O2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MzBweDtmb250LWZhbWlseTpNdXNlb1NhbnNDeXJsLEFyaWFsLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS4zfS5ldm8tYmFubmVyX19kZXNjcmlwdGlvbnttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWJvdHRvbToxMHB4O2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuM30uZXZvLWJhbm5lcl9faW1ne3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MjkwcHg7aGVpZ2h0OjI5MHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGh7cGFkZGluZzoyMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX3RpdGxle2xpbmUtaGVpZ2h0OjM4cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tYmFubmVye3BhZGRpbmc6MzBweCA0MHB4fS5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MCV9LmV2by1iYW5uZXJfX2Rlc2NyaXB0aW9ue21heC13aWR0aDoyNTBweH0uZXZvLWJhbm5lcl9faW1ne3dpZHRoOjQzMHB4O2hlaWdodDo0MzBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoe2hlaWdodDoyNDBweDtwYWRkaW5nOjMwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NTAlfS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtc2l6ZTozNnB4O2xpbmUtaGVpZ2h0OjQ0cHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9faW1ne3dpZHRoOjI0MHB4O2hlaWdodDoyNDBweH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZXZvLWJhbm5lcntwYWRkaW5nOjMwcHggNDBweH0uZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjMlfS5ldm8tYmFubmVyX3NtYWxse2hlaWdodDoyMTBweDtwYWRkaW5nOjIwcHh9LmV2by1iYW5uZXJfc21hbGwgLmV2by1iYW5uZXJfX3RpdGxle21hcmdpbi1ib3R0b206MjBweDtmb250LXNpemU6MjBweH0uZXZvLWJhbm5lcl9zbWFsbCAucHJvbW8tYnRue2hlaWdodDozMnB4fS5ldm8tYmFubmVyX3NtYWxsIC5ldm8tYmFubmVyX19pbWd7d2lkdGg6MjEwcHg7aGVpZ2h0OjIxMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYzJX19YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogJ1dpbmRvdycsICB1c2VWYWx1ZTogd2luZG93IH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0Jhbm5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJhbm5lcjogRXZvQmFubmVyO1xuICBASW5wdXQoKSB0eXBlOiBFdm9CYW5uZXJUeXBlcyA9IEV2b0Jhbm5lclR5cGVzLnNtYWxsO1xuXG4gIEBPdXRwdXQoKSBiYW5uZXJDbGljazogRXZlbnRFbWl0dGVyPEV2b0Jhbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2b0Jhbm5lcj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdXaW5kb3cnKSBwcml2YXRlIHdpbmRvdzogYW55LFxuICApIHtcbiAgfVxuXG4gIG9uQmFubmVyQ2xpY2soKSB7XG4gICAgdGhpcy5iYW5uZXJDbGljay5lbWl0KHRoaXMuYmFubmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIEV2b1NpZGViYXJUeXBlcyB7XG4gICAgYmFza2V0ID0gJ2Jhc2tldCcsXG4gICAgcGFydG5lckF1dGggPSAncGFydG5lckF1dGgnLFxuICAgIHByb21vQ29kZSA9ICdwcm9tb0NvZGUnLFxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXZvU2lkZWJhclNlcnZpY2Uge1xuICAgIGlzU2lkZWJhclZpc2libGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gICAgcHJpdmF0ZSByZWdpc3RlcmVkU2lkZWJhcnMgPSB7fTtcblxuICAgIGRlcmVnaXN0ZXIoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICBkZWxldGUgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGlkOiBFdm9TaWRlYmFyVHlwZXMpIHtcbiAgICAgICAgaWYgKCEoaWQgaW4gRXZvU2lkZWJhclR5cGVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU2lkZWJhci4gVW5rbm93biAnJHtpZH0nLCBwbGVhc2UgYWRkIHRoaXMgaWQgaW4gZW51bWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9wZW4oaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF0gPSB0cnVlO1xuICAgICAgICB0aGlzLmlzU2lkZWJhclZpc2libGUkLm5leHQodGhpcy5yZWdpc3RlcmVkU2lkZWJhcnMpO1xuICAgIH1cblxuICAgIGNsb3NlKGlkOiBFdm9TaWRlYmFyVHlwZXMpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTaWRlYmFyVmlzaWJsZSQubmV4dCh0aGlzLnJlZ2lzdGVyZWRTaWRlYmFycyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZyb21FdmVudCBhcyBvYnNlcnZhYmxlRnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICd0cy1rZXljb2RlLWVudW0nO1xuXG5pbXBvcnQgeyBFdm9TaWRlYmFyU2VydmljZSwgRXZvU2lkZWJhclR5cGVzIH0gZnJvbSAnLi9ldm8tc2lkZWJhci5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1zaWRlYmFyJyxcbiAgICBzdHlsZXM6IFtgLmV2by1zaWRlYmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MTIwJTt6LWluZGV4OjMwMDA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMCAxMnB4IHJnYmEoMCwwLDAsLjI1KX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFye2xlZnQ6MTAwJTt3aWR0aDo2NzRweDttYXJnaW4tbGVmdDo0MHB4O3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjVzO3RyYW5zaXRpb246dHJhbnNmb3JtIC41czt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXMsLXdlYmtpdC10cmFuc2Zvcm0gLjVzfX0uZXZvLXNpZGViYXJfYWN0aXZle2xlZnQ6MH0uZXZvLXNpZGViYXJfX2hlYWRlcntkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O21hcmdpbjowIDE1cHg7cGFkZGluZzoyMHB4IDAgOHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlY2VmZjF9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9faGVhZGVye3BhZGRpbmctdG9wOjM4cHh9fS5ldm8tc2lkZWJhcl9fdGl0bGV7Y29sb3I6IzMzM2Y0ODtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6TXVzZW9TYW5zQ3lybCxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjMycHh9QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcl9hY3RpdmV7bGVmdDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTcxNHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNzE0cHgpfS5ldm8tc2lkZWJhcl9faGVhZGVye21hcmdpbjowIDMwcHh9LmV2by1zaWRlYmFyX190aXRsZXtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4fX0uZXZvLXNpZGViYXJfX2Nsb3Nle21hcmdpbjotNHB4IDAgLTJweCAyMHB4O3BhZGRpbmc6OHB4O2NvbG9yOiM1NDZlN2E7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IC4zc30uZXZvLXNpZGViYXJfX2Nsb3NlOmhvdmVye29wYWNpdHk6Ljh9LmV2by1zaWRlYmFyX19jbG9zZSBzdmd7dmVydGljYWwtYWxpZ246dG9wfS5ldm8tc2lkZWJhcl9fY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MjBweCAxNXB4IDQwcHg7b3ZlcmZsb3cteTphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2NvbnRlbnR7cGFkZGluZzo0MHB4IDE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfX2Nsb3Nle21hcmdpbjoycHggMCAwIDMwcHh9LmV2by1zaWRlYmFyX19jb250ZW50e3BhZGRpbmc6NDBweCAzMHB4fX0uZXZvLXNpZGViYXJfX2Zvb3RlcntkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzozMHB4IDE1cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4yNSl9LmV2by1zaWRlYmFyX19mb290ZXI6ZW1wdHl7ZGlzcGxheTpub25lfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2Zvb3RlcntmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZzoxOHB4IDE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfX2Zvb3RlcntwYWRkaW5nOjE4cHggMzBweH19LmV2by1zaWRlYmFyX19idXR0b25ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzozMHB4IDAgMTBweH0uZXZvLXNpZGViYXJfX2J1dHRvbnNfYm9yZGVye21hcmdpbi10b3A6NTBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjZWNlZmYxfS5ldm8tc2lkZWJhcl9fYnV0dG9uKy5ldm8tc2lkZWJhcl9fYnV0dG9ue21hcmdpbi10b3A6MjBweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19idXR0b25ze2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nLWJvdHRvbTowfS5ldm8tc2lkZWJhcl9fYnV0dG9uKy5ldm8tc2lkZWJhcl9fYnV0dG9ue21hcmdpbi10b3A6MH19YF0sXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZmFkZS1iYWNrZ3JvdW5kIGZhZGUtYmFja2dyb3VuZF9vdmVyLWFsbFwiXG4gICAgICpuZ0lmPVwic3RhdGVzLmlzVmlzaWJsZVwiXG4gICAgIChjbGljayk9XCJjbG9zZVNpZGViYXIoKVwiXG4+PC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJldm8tc2lkZWJhclwiIFtuZ0NsYXNzXT1cInsnZXZvLXNpZGViYXJfYWN0aXZlJyA6IHN0YXRlcy5pc1Zpc2libGV9XCIgPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9faGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fY2xvc2VcIiAoY2xpY2spPVwic2lkZWJhclNlcnZpY2UuY2xvc2UoaWQpXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZXZvLXNpZGViYXJfX2Nsb3NlLWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNC45LDEybDguNi04LjZjMC44LTAuOCwwLjgtMi4xLDAtMi45Yy0wLjgtMC44LTIuMS0wLjgtMi45LDBMMTIsOS4xTDMuNCwwLjZcbiAgICAgICAgICAgICAgICAgICAgYy0wLjgtMC44LTIuMS0wLjgtMi45LDBjLTAuOCwwLjgtMC44LDIuMSwwLDIuOUw5LjEsMTJsLTguNiw4LjZjLTAuOCwwLjgtMC44LDIuMSwwLDIuOWMwLjgsMC44LDIuMSwwLjgsMi45LDBsOC42LTguNmw4LjYsOC42XG4gICAgICAgICAgICAgICAgICAgIGMwLjgsMC44LDIuMSwwLjgsMi45LDBjMC44LTAuOCwwLjgtMi4xLDAtMi45TDE0LjksMTJ6XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2NvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19mb290ZXJcIj48bmctY29udGVudCBzZWxlY3Q9XCJbZm9vdGVyXVwiPjwvbmctY29udGVudD48L2Rpdj4gPCEtLcORwofDkcKCw5DCvsOQwrHDkcKLIDplbXB0eSDDkcKAw5DCsMOQwrHDkMK+w5HCgsOQwrDDkMK7LCDDkMK9w5DCtSDDkMK0w5DCvsOQwrvDkMK2w5DCvcOQwr4gw5DCscORwovDkcKCw5HCjCDDkMKyw5DCvcORwoPDkcKCw5HCgMOQwrggZXZvLXNpZGViYXJfX2Zvb3RlciDDkMKyw5DCvsOQwr7DkMKxw5HCicOQwrUgw5DCvcOQwrjDkcKHw5DCtcOQwrPDkMK+LCDDkMK0w5DCsMOQwrbDkMK1IMOQwr/DkcKAw5DCvsOQwrHDkMK1w5DCu8OQwrAtLT5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgRXZvU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgICBASW5wdXQoKSBpZDogRXZvU2lkZWJhclR5cGVzO1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGtleVVwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgc3RhdGVzID0ge1xuICAgICAgICBpc1Zpc2libGU6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc2lkZWJhclNlcnZpY2U6IEV2b1NpZGViYXJTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuZGVyZWdpc3Rlcih0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5yZWdpc3Rlcih0aGlzLmlkKTtcblxuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmlzU2lkZWJhclZpc2libGUkLnN1YnNjcmliZSgocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaWQgaW4gcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzLmlzVmlzaWJsZSA9IHBheWxvYWRbdGhpcy5pZF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVUb0tleUV2ZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5VXBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlU2lkZWJhcigpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5jbG9zZSh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN1YnNjcmliZVRvS2V5RXZlbnQoKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlRnJvbUV2ZW50KGRvY3VtZW50LmJvZHksICdrZXl1cCcpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXkuRXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5jbG9zZSh0aGlzLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4vdHlwaW5ncy9vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tcmFkaW8tZ3JvdXAnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1yYWRpby1ncm91cFwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwX19yYWRpb1wiICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uQXJyYXlcIj5cbiAgICAgICAgPCEtLSDDkMKfw5DCtcORwoDDkMK1w5DCusOQwrvDkcKOw5HCh8OQwrXDkMK9w5DCuMOQwrUgw5HCgcORwoLDkMK4w5DCu8OQwrXDkMK5IMOQwrLDkcKLw5DCv8OQwr7DkMK7w5DCvcORwo/DkMK1w5HCgsORwoHDkcKPIMORwoEgw5DCv8OQwr7DkMK8w5DCvsORwonDkcKMw5HCjiDDkMK/w5HCgcOQwrXDkMKyw5DCtMOQwr7DkcKBw5DCtcOQwrvDkMK1w5DCusORwoLDkMK+w5HCgMOQwrAgOmNoZWNrZWQgLS0+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tY29udHJvbFwiIChuZ01vZGVsQ2hhbmdlKSA9IFwib25DaGFuZ2VkVmFsdWUoJGV2ZW50KVwiIGZvcm1Db250cm9sTmFtZT1cInZhbHVlXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e3tvcHRpb24udmFsdWV9fT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tdmFsdWVcIj57e29wdGlvbi5wcmVzZW50YXRpb25UZXh0fX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5gLFxuICAgIHN0eWxlczogW2AuZXZvLXJhZGlvLWdyb3Vwe2Rpc3BsYXk6ZmxleH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpb3tmbGV4OjE7bWFyZ2luLXJpZ2h0OjMwcHg7Y3Vyc29yOnBvaW50ZXJ9LmV2by1yYWRpby1ncm91cF9fcmFkaW86bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9se2Rpc3BsYXk6bm9uZX0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9sOmNoZWNrZWQrLmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjgsMTM4LDI1NSwuMDUpO2JvcmRlci1jb2xvcjojNDQ4YWZmfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWNvbnRyb2w6Y2hlY2tlZCsuZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3IC5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb246YmVmb3Jle2Rpc3BsYXk6YmxvY2t9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld3tkaXNwbGF5OmZsZXg7cGFkZGluZzoyMHB4O2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjhweH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZsZXgtc2hyaW5rOjA7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tcmlnaHQ6MjBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO2JvcmRlci1yYWRpdXM6NTAlfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb246YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7ZGlzcGxheTpub25lO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2NvbnRlbnQ6Jyc7bWFyZ2luLXRvcDotNXB4O21hcmdpbi1sZWZ0Oi01cHg7YmFja2dyb3VuZC1jb2xvcjojNDQ4YWZmO2JvcmRlcjoxcHggc29saWQgIzI4NjlkNztib3JkZXItcmFkaXVzOjUwJX0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby12YWx1ZXtjb2xvcjojMDAwO2ZvbnQtc2l6ZToxNnB4fWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b1JhZGlvR3JvdXBDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvUmFkaW9Hcm91cENvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gICAgQElucHV0KCkgb3B0aW9uczogSU9wdGlvbnM7XG4gICAgQElucHV0KCd2YWx1ZScpIF92YWx1ZT86IHN0cmluZztcblxuICAgIHB1YmxpYyBmb3JtR3JvdXA7XG4gICAgcHJpdmF0ZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybUdyb3VwKCk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIMOQwpPDkMK1w5HCgsORwoLDkMK1w5HCgCDDkMK9w5DCsCDDkMKyw5DCvsOQwrfDkMK8w5DCvsOQwrbDkMK9w5HCi8OQwrUgw5DCssOQwrDDkcKAw5DCuMOQwrDDkMK9w5HCgsORwosgw5DCvsORwoLDkcKHw5DCtcORwoLDkMKwIMOQwrIgw5HChMOQwr7DkcKAw5DCvMOQwrDDkcKCw5DCtSDDkMK8w5DCsMORwoHDkcKBw5DCuMOQwrLDkMKwXG4gICAgKiDDkMK/w5HCgMOQwrXDkMK3w5DCtcOQwr3DkcKCw5DCsMORwobDkMK4w5DCvsOQwr3DkMK9w5DCvsOQwrPDkMK+IMORwoLDkMK1w5DCusORwoHDkcKCw5DCsCDDkMK0w5DCu8ORwo8gw5HCgMOQwrDDkMK0w5DCuMOQwr4gw5DCs8ORwoDDkcKDw5DCv8OQwr/DkMKwXG4gICAgKi9cbiAgICBnZXQgb3B0aW9uQXJyYXkoKTogSU9wdGlvbnNbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlT3B0aW9uQXJyYXkodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIMOQwpPDkMK1w5DCvcOQwrXDkcKAw5DCuMORwoDDkcKDw5DCtcORwoIgw5DCuMOQwrcgw5DCvsOQwr/DkcKGw5DCuMOQwrkgw5DCvMOQwrDDkcKBw5HCgcOQwrjDkMKyXG4gICAgKiBAcGFyYW0gc291cmNlIMOQwr7DkMKxw5HCisOQwrXDkMK6w5HCgiDDkcKBIMOQwrLDkMKww5HCgMOQwrjDkMKww5DCvcORwoLDkMKww5DCvMOQwrhcbiAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVPcHRpb25BcnJheShzb3VyY2U6IElPcHRpb25zKTogSU9wdGlvbnNbXSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIMOQwqHDkMK+w5DCt8OQwrTDkMKww5DCvcOQwrjDkMK1IMOQwrPDkcKAw5HCg8OQwr/DkMK/w5HCi1xuICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVGb3JtR3JvdXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICB2YWx1ZTogWyB0aGlzLnZhbHVlIF0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogw5DCnsOQwrHDkcKAw5DCsMOQwrHDkMK+w5HCgsORwofDkMK4w5DCuiDDkMK9w5DCsCDDkcKBw5DCvMOQwrXDkMK9w5HCgyDDkMK3w5DCvcOQwrDDkcKHw5DCtcOQwr3DkMK4w5HCj1xuICAgICogQHBhcmFtIHZhbHVlIMOQwrfDkMK9w5DCsMORwofDkMK1w5DCvcOQwrjDkMK1XG4gICAgKi9cbiAgICBwdWJsaWMgb25DaGFuZ2VkVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5leHBvcnQgZW51bSBFdm9BdXRvQ29tcGxldGVUeXBlcyB7XG4gICAgcGFydHkgPSAncGFydHknLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1hdXRvLWNvbXBsZXRlJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZV9faW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8ZXZvLWlucHV0IChibHVyKT1cIm9uVG91Y2hlZCgpXCJcbiAgICAgICAgICAgICAgICAgICBbc3RhdGVdPVwiY3VycmVudFN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW5wdXRcIj48L2V2by1pbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVfX3N1Z2dlc3Rpb25zXCIgKm5nSWY9XCJzdWdnZXN0aW9ucyAmJiBzdWdnZXN0aW9ucy5sZW5ndGggJiYgIWRpc2FibGVkXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1Z2dlc3Rpb24gb2Ygc3VnZ2VzdGlvbnNcIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVfX3BhcnR5XCIgKm5nSWY9XCJnZXRTdWdnZXN0aW9uRGF0YVN0cmluZyhzdWdnZXN0aW9uKVwiIChjbGljayk9XCJoYW5kbGVTdWdnZXN0aW9uQ2xpY2soJGV2ZW50LCBzdWdnZXN0aW9uKVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVfX3RleHQtbGluZVwiIFthdHRyLnRpdGxlXT1cInN1Z2dlc3Rpb24udmFsdWVcIj57eyBzdWdnZXN0aW9uLnZhbHVlIH19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVfX3RleHQtbGluZVwiIFthdHRyLnRpdGxlXT1cImdldFN1Z2dlc3Rpb25EYXRhU3RyaW5nKHN1Z2dlc3Rpb24pXCI+e3sgZ2V0U3VnZ2VzdGlvbkRhdGFTdHJpbmcoc3VnZ2VzdGlvbikgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxldm8tY29udHJvbC1lcnJvciAqbmdJZj1cInNob3dFcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNdPVwiY29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvcnNNZXNzYWdlc109XCJlcnJvcnNNZXNzYWdlc1wiPjwvZXZvLWNvbnRyb2wtZXJyb3I+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWF1dG8tY29tcGxldGV7cG9zaXRpb246cmVsYXRpdmV9LmV2by1hdXRvLWNvbXBsZXRlX19pbnB1dC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0uZXZvLWF1dG8tY29tcGxldGVfX3N1Z2dlc3Rpb25ze3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzowIDAgMTJweCA0cHggcmdiYSgwLDAsMCwuMil9LmV2by1hdXRvLWNvbXBsZXRlX19wYXJ0eXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjQ4cHg7cGFkZGluZzo1cHggMjBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXJ9LmV2by1hdXRvLWNvbXBsZXRlX19wYXJ0eTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMH0uZXZvLWF1dG8tY29tcGxldGVfX3RleHQtbGluZXttYXJnaW46MDtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9YF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvQXV0b0NvbXBsZXRlQ29tcG9uZW50KSxcbiAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbl0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0F1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSB0eXBlOiBFdm9BdXRvQ29tcGxldGVUeXBlcztcbiAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlucHV0OiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgIHN1Z2dlc3Rpb25zOiBhbnlbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgICBwcml2YXRlIHZhbHVlQXV0b0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgcmVhZG9ubHkgYXV0b0NvbXBldGVUeXBlcyA9IEV2b0F1dG9Db21wbGV0ZVR5cGVzO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSAodmFsdWUpID0+IHt9O1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbICckZXZlbnQnIF0pXG4gICAgaGFuZGxlRG9jdW1lbnRDbGljayhldmVudDogYW55KSB7XG4gICAgICBpZiAoZXZlbnQucGF0aC5pbmRleE9mKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSA9PT0gLTEgJiYgdGhpcy5zdWdnZXN0aW9ucykge1xuICAgICAgICB0aGlzLnZhbHVlQXV0b0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0VmFsdWUoJycsIHtcbiAgICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgICAgIG9ubHlTZWxmOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgocXVlcnk6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGhpcy52YWx1ZUF1dG9Db21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBdXRvQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlcXVlc3RTdWdnZXN0aW9ucyhxdWVyeSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIGdldFN1Z2dlc3Rpb25EYXRhU3RyaW5nKHN1Z2dlc3Rpb246IGFueSk6IHN0cmluZyB7XG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgaWYgKHN1Z2dlc3Rpb24gJiYgc3VnZ2VzdGlvbi5kYXRhKSB7XG4gICAgICAgIGNvbnN0IGlubjogc3RyaW5nID0gc3VnZ2VzdGlvbi5kYXRhLmlubjtcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBzdWdnZXN0aW9uLmRhdGE7XG5cbiAgICAgICAgaWYgKGlubikge1xuICAgICAgICAgIHJlc3VsdCA9IGAke2lubn0gJHthZGRyZXNzID8gYWRkcmVzcy52YWx1ZSA6ICcnfWA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWdnZXN0aW9uQ2xpY2soZXZlbnQ6IGFueSwgc3VnZ2VzdGlvbjogYW55KSB7XG4gICAgICB0aGlzLnZhbHVlQXV0b0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmlucHV0LnNldFZhbHVlKHN1Z2dlc3Rpb24udmFsdWUsIHtcbiAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSBudWxsO1xuICAgICAgdGhpcy52YWx1ZSA9IHN1Z2dlc3Rpb247XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0VmFsdWUoJycpO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHN0YXRlO1xuICAgICAgc3RhdGUgPyB0aGlzLmlucHV0LmRpc2FibGUoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSkgOlxuICAgICAgICAgICAgICB0aGlzLmlucHV0LmVuYWJsZSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICAvLyAgVE9ETyBDcmVhdGUgZ2VuZXJpYyB3YXkgdG8gZ2V0IERhRGF0YSBzdWdnZXN0aW9ucy9hbnkgYmFja2VuZCBkYXRhIHRvIHNob3dcbiAgICBwcml2YXRlIHJlcXVlc3RTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nKSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsICdUb2tlbiA2YTYyZTc3OWI5ODRmMDM1M2U4NzkzMWViYzM4NGQyYzczNmFhZmE5JylcbiAgICAgICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnMsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmh0dHBcbiAgICAgICAgLnBvc3Q8YW55PihcbiAgICAgICAgICAnaHR0cHM6Ly9zdWdnZXN0aW9ucy5kYWRhdGEucnUvc3VnZ2VzdGlvbnMvYXBpLzRfMS9ycy9zdWdnZXN0L3BhcnR5JyxcbiAgICAgICAgICB7IHF1ZXJ5LCBjb3VudDogNCB9LFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IHJlc3BvbnNlLnN1Z2dlc3Rpb25zO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWNvbnRyb2wtbGFiZWwnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1jb250cm9sLWxhYmVsXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZXZvLWNvbnRyb2wtbGFiZWxfX3RleHRcIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2AuZXZvLWNvbnRyb2wtbGFiZWx7bWFyZ2luLWJvdHRvbToyMHB4fS5ldm8tY29udHJvbC1sYWJlbF9fdGV4dHttYXJnaW4tYm90dG9tOjExcHg7Y29sb3I6IzliOWI5Yjtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxNnB4fWBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9Db250cm9sTGFiZWxDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBJdGVyYWJsZURpZmZlcnMsIEtleVZhbHVlRGlmZmVycywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgaXNPYmplY3QgPSAoaXRlbSkgPT4gaXRlbSAhPSBudWxsICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JztcbmNvbnN0IGlzU3RyaW5nID0gKGl0ZW0pID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJztcbmNvbnN0IGlzQXJyYXkgPSAoaXRlbSkgPT4gQXJyYXkuaXNBcnJheShpdGVtKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2V2b1VpQ2xhc3NdJyxcbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlDbGFzc0RpcmVjdGl2ZSBleHRlbmRzIE5nQ2xhc3Mge1xuICBASW5wdXQoJ2V2b1VpQ2xhc3MnKVxuICBzZXQgc2V0dGVyT2ZDbGFzcyhkYXRhOiBhbnkpIHtcbiAgICBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IGRhdGEubWFwKChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7dGhpcy5wcmVmaXh9XyR7Y2xhc3NOYW1lfWApO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2UoKG5ld0RhdGE6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgbmV3RGF0YVtgJHt0aGlzLnByZWZpeH1fJHtrZXl9YF0gPSBkYXRhW2tleV07XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgICAgfSwge30pO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBkYXRhXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKG15Q2xhc3MpID0+IGAke3RoaXMucHJlZml4fV8ke215Q2xhc3N9YClcbiAgICAgICAgLmpvaW4oJyAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIHR5cGUgbm90IGFsbG93ZWQhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5uZ0NsYXNzID0gZGF0YTtcbiAgfVxuXG4gIG5nQ2xhc3M6IGFueTtcblxuICBwcml2YXRlIHByZWZpeDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKF9pdGVyYWJsZURpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycywgX2tleVZhbHVlRGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgICAgICBfbmdFbDogRWxlbWVudFJlZiwgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihfaXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzLCBfbmdFbCwgX3JlbmRlcmVyKTtcbiAgICB0aGlzLnByZWZpeCA9IF9uZ0VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0WzBdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuXG5pbXBvcnQgeyBFdm9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWJ1dHRvbi9ldm8tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9DaGVja2JveENvbXBvbmVudCAgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8taW5wdXQvZXZvLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9CYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWJhbm5lci9ldm8tYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9TaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1zaWRlYmFyL2V2by1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9SYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1yYWRpby1ncm91cC9ldm8tcmFkaW8tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b1NpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1zaWRlYmFyL2V2by1zaWRlYmFyLnNlcnZpY2UnO1xuZXhwb3J0IHsgRXZvU2lkZWJhclNlcnZpY2UgfTtcbmltcG9ydCB7IEV2b0F1dG9Db21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYXV0by1jb21wbGV0ZS9ldm8tYXV0by1jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ29udHJvbExhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jb250cm9sLWxhYmVsL2V2by1jb250cm9sLWxhYmVsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEV2b1VpQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IGFueSA9IFtcbiAgRXZvQnV0dG9uQ29tcG9uZW50LFxuICBFdm9DaGVja2JveENvbXBvbmVudCxcbiAgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50LFxuICBFdm9JbnB1dENvbXBvbmVudCxcbiAgRXZvQmFubmVyQ29tcG9uZW50LFxuICBFdm9TaWRlYmFyQ29tcG9uZW50LFxuICBFdm9BdXRvQ29tcGxldGVDb21wb25lbnQsXG4gIEV2b0NvbnRyb2xMYWJlbENvbXBvbmVudCxcbiAgRXZvUmFkaW9Hcm91cENvbXBvbmVudCxcbl07XG5cbmNvbnN0IGRpcmVjdGl2ZXM6IGFueSA9IFtcbiAgRXZvVWlDbGFzc0RpcmVjdGl2ZSxcbl07XG5cbmNvbnN0IGJ1bmRsZTogYW55ID0gW1xuICAuLi5jb21wb25lbnRzLFxuICAuLi5kaXJlY3RpdmVzLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5idW5kbGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5idW5kbGUsXG4gIF0sXG4gIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUtpdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRXZvVWlLaXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRXZvU2lkZWJhclNlcnZpY2UsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cblxuXG4iXSwibmFtZXMiOlsib2JzZXJ2YWJsZUZyb21FdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFxREksWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTt5QkFIakIsS0FBSzt3QkFDTixLQUFLO0tBRWtCOzs7OztJQWxCMUMsSUFBYSxRQUFRLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDN0M7S0FDSjs7Ozs7SUFDRCxJQUFhLE9BQU8sQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDN0M7S0FDSjs7OztJQU9ELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN6Qjs7OztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN4Qjs7OztJQUVELElBQUksWUFBWTtRQUNaLHVCQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFFN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsT0FBTyxPQUFPLENBQUM7S0FDbEI7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDWCx1QkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWxCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDbkM7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNqQjs7O1lBN0VKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Q0FVYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQyxxbEdBQXFsRyxDQUFDO2dCQUMvbEcsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7Ozs7WUEvQjRDLFVBQVU7OztvQkFpQ2xELEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQU9MLEtBQUs7Ozs7Ozs7OztXQ3pDRSxPQUFPO2FBQ0wsU0FBUzs7Ozs7OztBQ0Z2Qjs7OztJQWdCRSxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7U0FDN0M7YUFBTSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFO1lBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztTQUNsRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUNwRTtLQUNGOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsdUJBQU0sWUFBWSxHQUFxQjtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3ZFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87U0FDNUUsQ0FBQztRQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hEOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BEOzs7OEJBL0JBLFlBQVksU0FBQyxlQUFlO21DQUM1QixZQUFZLFNBQUMsb0JBQW9COzZCQUVqQyxLQUFLO29CQUNMLEtBQUs7Ozs7Ozs7QUNaUiwwQkE4QmtDLFNBQVEsY0FBYzs7O3dCQUUzQyxLQUFLO3dCQUdMLENBQUMsQ0FBQyxRQUFPO3lCQUNSLFNBQVE7Ozs7O0lBRXBCLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1NBQ3ZELENBQUM7S0FDSDs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNwQjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN2Qjs7O1lBOURGLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0NBYWI7Z0JBQ0csTUFBTSxFQUFFLENBQUMsNmhEQUE2aEQsQ0FBQztnQkFDdmlELFNBQVMsRUFBRTtvQkFDUDt3QkFDSSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sb0JBQW9CLENBQUM7d0JBQ25ELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7Ozs7Ozs7QUM3QkQ7O3lCQWtCeUIsQ0FBQztvQ0FFMkI7WUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixLQUFLLEVBQUUsMkJBQTJCO1lBQ2xDLEtBQUssRUFBRSxpQkFBaUI7U0FDM0I7Ozs7O0lBRUQsSUFBSSxTQUFTO1FBQ1QsdUJBQU0sYUFBYSxxQkFDWixJQUFJLENBQUMsb0JBQW9CLEdBQ3hCLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxFQUNoQyxDQUFDO1FBQ0YsdUJBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDckQ7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDbkIsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3BDOzs7WUEvQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7O0NBR2I7Z0JBQ0csTUFBTSxFQUFFLENBQUMseUVBQXlFLENBQUM7Z0JBQ25GLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOzs7cUJBRUksS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7Ozs7QUNsQlYsdUJBc0UrQixTQUFRLGNBQWM7Ozs7SUFvQm5ELFlBQW9CLGNBQWlDO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBRFUsbUJBQWMsR0FBZCxjQUFjLENBQW1CO29CQWZyQyxNQUFNO29CQUdjLElBQUksWUFBWSxFQUFPO29DQUtwQyxLQUFLO2dDQUNULEtBQUs7NEJBQ1QsS0FBSzt3QkFDVCxLQUFLO3VCQUNOLEtBQUs7d0NBQ29CLEtBQUs7d0JBTTdCLENBQUMsS0FBSyxRQUFPO3lCQUNaLFNBQVE7S0FIbkI7Ozs7SUFLRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDM0I7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBVTtRQUNsQixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUNsRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7U0FDdkQsQ0FBQztLQUNIOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDaEQ7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjtLQUNGOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbEI7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1FBRXJDLFVBQVUsQ0FBQztZQUNULElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMzQjtTQUNGLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDUjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0tBQ3ZDOzs7O0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYztZQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWE7WUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDOzs7O1lBMUtwQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0Q1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsNnBFQUE2cEUsQ0FBQztnQkFDdnFFLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0saUJBQWlCLENBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Ozs7WUFuRUMsaUJBQWlCOzs7d0JBcUVoQixLQUFLO21CQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSyxTQUFDLE9BQU87bUJBRWIsTUFBTTsyQkFFTixTQUFTLFNBQUMsT0FBTzs2QkFDakIsU0FBUyxTQUFDLGtCQUFrQjs7Ozs7Ozs7Ozs7O0FDakYvQjs7V0FLVSxPQUFPO1dBQ1AsT0FBTztlQUNILFlBQVk7O1dBK0RVLE1BQU07QUFHMUM7Ozs7SUFNRSxZQUM0QixNQUFXO1FBQVgsV0FBTSxHQUFOLE1BQU0sQ0FBSztvQkFMUCxjQUFjLENBQUMsS0FBSzsyQkFFSCxJQUFJLFlBQVksRUFBYTtLQUs3RTs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDcEM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztDQWdCWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQywrakVBQStqRSxDQUFDO2dCQUN6a0UsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRyxRQUFRLElBQVEsRUFBRTtpQkFDekM7YUFDRjs7Ozs0Q0FRSSxNQUFNLFNBQUMsUUFBUTs7O3FCQU5qQixLQUFLO21CQUNMLEtBQUs7MEJBRUwsTUFBTTs7Ozs7OztBQzdFVDs7WUFJYSxRQUFRO2lCQUNILGFBQWE7ZUFDZixXQUFXOzs7O2lDQUtILElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQztrQ0FDZCxFQUFFOzs7Ozs7SUFFL0IsVUFBVSxDQUFDLEVBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDOzs7OztJQUVELFFBQVEsQ0FBQyxFQUFtQjtRQUN4QixJQUFJLEVBQUUsRUFBRSxJQUFJLGVBQWUsQ0FBQyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsK0JBQStCLENBQUMsQ0FBQztZQUN0RSxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQ3ZDOzs7OztJQUVELElBQUksQ0FBQyxFQUFtQjtRQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQsS0FBSyxDQUFDLEVBQW1CO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUN4RDs7O1lBekJKLFVBQVU7Ozs7Ozs7QUNUWDs7OztJQWdESSxZQUFtQixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7dUJBUGIsSUFBSSxZQUFZLEVBQU87c0JBR3JEO1lBQ0wsU0FBUyxFQUFFLEtBQUs7U0FDbkI7S0FFdUQ7Ozs7SUFFeEQsV0FBVztRQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMzQzs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPO1lBQ3BELElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxPQUFPLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUM7WUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDdkQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUNqQztTQUNKLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBRU8sbUJBQW1CO1FBQ3ZCLE9BQU9BLFNBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFvQjtZQUM5RSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0osQ0FBQyxDQUFDOzs7O1lBMUVWLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsTUFBTSxFQUFFLENBQUMsZ3BFQUFncEUsQ0FBQztnQkFDMXBFLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXlCYjthQUNBOzs7O1lBaENRLGlCQUFpQjs7O2lCQWtDckIsS0FBSztvQkFDTCxLQUFLO3NCQUVMLE1BQU07Ozs7Ozs7QUN6Q1gsNEJBMEJvQyxTQUFRLGNBQWM7Ozs7SUFVdEQsWUFBb0IsV0FBd0I7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFEUSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTt3QkFMekIsS0FBSzt3QkFFYixDQUFDLENBQUMsUUFBTzt5QkFDUixTQUFRO0tBSW5COzs7O0lBRUQsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3RCOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDMUI7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDekI7Ozs7OztJQU1ELElBQUksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqRDs7Ozs7O0lBTU8sbUJBQW1CLENBQUMsTUFBZ0I7UUFDeEMsdUJBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLHVCQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDdEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1NBQ0o7UUFFRCxPQUFPLEtBQUssQ0FBQzs7Ozs7O0lBTVQsZUFBZTtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3BDLEtBQUssRUFBRSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUU7U0FDeEIsQ0FBQyxDQUFDOzs7Ozs7O0lBT0EsY0FBYyxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Ozs7WUF0RzFCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7OztPQVNQO2dCQUNILE1BQU0sRUFBRSxDQUFDLDYvQkFBNi9CLENBQUM7Z0JBQ3ZnQyxTQUFTLEVBQUU7b0JBQ1A7d0JBQ0ksT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxNQUFNLHNCQUFzQixDQUFDO3dCQUNyRCxLQUFLLEVBQUUsSUFBSTtxQkFDZDtpQkFDSjthQUNKOzs7O1lBeEJpRCxXQUFXOzs7c0JBMEJ4RCxLQUFLO3FCQUNMLEtBQUssU0FBQyxPQUFPOzs7Ozs7O0FDNUJsQjs7V0FNWSxPQUFPOzs4QkFpQ21CLFNBQVEsY0FBYzs7Ozs7SUFZeEQsWUFDVSxNQUNBO1FBRU4sS0FBSyxFQUFFLENBQUM7UUFIRixTQUFJLEdBQUosSUFBSTtRQUNKLGVBQVUsR0FBVixVQUFVO3dCQVhULEtBQUs7cUJBQ0ssSUFBSSxXQUFXLEVBQUU7MkJBQ2pCLEVBQUU7a0NBR00sS0FBSztnQ0FFTixvQkFBb0I7d0JBU3JDLENBQUMsS0FBSyxRQUFPO3lCQUNaLFNBQVE7S0FIbkI7Ozs7O0lBTUQsbUJBQW1CLENBQUMsS0FBVTtRQUM1QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtnQkFDdEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7S0FDRjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFhO1lBQzlDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBVTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCOzs7OztJQUVELHVCQUF1QixDQUFDLFVBQWU7UUFDckMscUJBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ2pDLHVCQUFNLEdBQUcsR0FBVyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN4QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztZQUVwQyxJQUFJLEdBQUcsRUFBRTtnQkFDUCxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDbkQ7U0FDRjtRQUVELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7Ozs7OztJQUVELHFCQUFxQixDQUFDLEtBQVUsRUFBRSxVQUFlO1FBQy9DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUNwQyxTQUFTLEVBQUUsS0FBSztZQUNoQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0tBQ3pCOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztLQUMvRDs7Ozs7SUFHTyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3RDLHVCQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUM5QixHQUFHLENBQUMsZUFBZSxFQUFFLGdEQUFnRCxDQUFDO2FBQ3RFLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyx1QkFBTSxPQUFPLEdBQUc7WUFDZCxPQUFPO1NBQ1IsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJO2FBQ04sSUFBSSxDQUNILG9FQUFvRSxFQUNwRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQ25CLE9BQU8sQ0FDUjthQUNBLFNBQVMsQ0FBQyxDQUFDLFFBQWE7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1NBQzNDLENBQUMsQ0FBQzs7OztZQXBKVixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQmI7Z0JBQ0csTUFBTSxFQUFFLENBQUMsc2tCQUFza0IsQ0FBQztnQkFDaGxCLFNBQVMsRUFBRTtvQkFDWDt3QkFDSSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sd0JBQXdCLENBQUM7d0JBQ3ZELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0E7Ozs7WUFwQ1EsVUFBVTtZQUZDLFVBQVU7OzttQkF5Q3pCLEtBQUs7a0NBb0JMLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7Ozs7OztBQzdEaEQ7OztZQUVDLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Q0FJYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQyxrSUFBa0ksQ0FBQzthQUMvSTs7O29CQUVJLEtBQUs7Ozs7Ozs7QUNaVixBQUdBLHVCQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQztBQUNwRSx1QkFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDO0FBQ3BELHVCQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUtiLFNBQVEsT0FBTzs7Ozs7OztJQTBCOUMsWUFBWSxnQkFBaUMsRUFBRSxnQkFBaUMsRUFDMUUsS0FBaUIsRUFBRSxTQUFvQjtRQUMzQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7Ozs7O0lBN0JELElBQ0ksYUFBYSxDQUFDLElBQVM7UUFDekIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFpQixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFO2FBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBWSxFQUFFLEdBQVc7Z0JBQ3hELE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sT0FBTyxDQUFDO2FBQ2hCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjthQUFNLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksR0FBRyxJQUFJO2lCQUNSLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLEVBQUUsQ0FBQztpQkFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ3JCOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBVHNDLGVBQWU7WUFBRSxlQUFlO1lBQW5ELFVBQVU7WUFBMkMsU0FBUzs7OzRCQVcvRSxLQUFLLFNBQUMsWUFBWTs7Ozs7OztBQ1hyQixBQW1CQSx1QkFBTSxVQUFVLEdBQVE7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixzQkFBc0I7Q0FDdkIsQ0FBQztBQUVGLHVCQUFNLFVBQVUsR0FBUTtJQUN0QixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGLHVCQUFNLE1BQU0sR0FBUTtJQUNsQixHQUFHLFVBQVU7SUFDYixHQUFHLFVBQVU7Q0FDZCxDQUFDO0FBaUJGOzs7O0lBQ0UsT0FBTyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO0tBQ0g7OztZQXZCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxjQUFjO29CQUNkLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsTUFBTTtpQkFDVjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxNQUFNO2lCQUNWO2dCQUNELE9BQU8sRUFBRSxDQUFFLHNCQUFzQixDQUFFO2FBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7In0=