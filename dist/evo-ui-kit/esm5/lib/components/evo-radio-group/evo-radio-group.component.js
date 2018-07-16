/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
var EvoRadioGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EvoRadioGroupComponent, _super);
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
                    styles: [".evo-radio-group{display:flex}.evo-radio-group__radio{flex:1;margin-right:30px;cursor:pointer}.evo-radio-group__radio:last-child{margin-right:0}.evo-radio-group__radio-control{display:none}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view{background-color:rgba(68,138,255,.05);border-color:#448aff}.evo-radio-group__radio-control:checked+.evo-radio-group__radio-view .evo-radio-group__radio-icon:before{display:block}.evo-radio-group__radio-view{display:flex;padding:20px;border:1px solid #dbdbdb;border-radius:8px}.evo-radio-group__radio-icon{position:relative;display:inline-block;flex-shrink:0;width:20px;height:20px;margin-right:20px;background-color:#fff;border:1px solid #dedede;border-radius:50%}.evo-radio-group__radio-icon:before{position:absolute;top:50%;left:50%;display:none;width:10px;height:10px;content:'';margin-top:-5px;margin-left:-5px;background-color:#448aff;border:1px solid #2869d7;border-radius:50%}.evo-radio-group__radio-value{color:#000;font-size:16px}"],
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
export { EvoRadioGroupComponent };
function EvoRadioGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoRadioGroupComponent.prototype.options;
    /** @type {?} */
    EvoRadioGroupComponent.prototype._value;
    /** @type {?} */
    EvoRadioGroupComponent.prototype.formGroup;
    /** @type {?} */
    EvoRadioGroupComponent.prototype.disabled;
    /** @type {?} */
    EvoRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    EvoRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    EvoRadioGroupComponent.prototype.formBuilder;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ldm8tcmFkaW8tZ3JvdXAvZXZvLXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLFdBQVcsRUFBMEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBd0JuQixrREFBYztJQVV0RCxnQ0FBb0IsV0FBd0I7UUFBNUMsWUFDSSxpQkFBTyxTQUNWO1FBRm1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhO3lCQUx6QixLQUFLO3lCQUViLFVBQUMsQ0FBQyxLQUFPOzBCQUNSLGVBQVE7O0tBSW5CO0lBRUQsc0JBQUkseUNBQUs7Ozs7UUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCOzs7OztRQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCOzs7T0FMQTs7OztJQU9ELHlDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFFRCwyQ0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCxpREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxrREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxpREFBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBYztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN6QjtJQU1ELHNCQUFJLCtDQUFXO1FBSmY7OztVQUdFOzs7Ozs7UUFDRjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pEOzs7T0FBQTs7Ozs7O0lBTU8sb0RBQW1COzs7OztjQUFDLE1BQWdCO1FBQ3hDLHFCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFakIsR0FBRyxDQUFDLENBQUMscUJBQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDM0I7U0FDSjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7OztJQU1ULGdEQUFlOzs7OztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3BDLEtBQUssRUFBRSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUU7U0FDeEIsQ0FBQyxDQUFDOzs7Ozs7O0lBT0EsK0NBQWM7Ozs7O2NBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7O2dCQXRHMUIsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSx1NEJBU1A7b0JBQ0gsTUFBTSxFQUFFLENBQUMsdStCQUF1K0IsQ0FBQztvQkFDai9CLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQzs0QkFDckQsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7cUJBQ0o7aUJBQ0o7Ozs7Z0JBeEJpRCxXQUFXOzs7MEJBMEJ4RCxLQUFLO3lCQUNMLEtBQUssU0FBQyxPQUFPOztpQ0E1QmxCO0VBMEI0QyxjQUFjO1NBQTdDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuaW1wb3J0IHsgSU9wdGlvbnMgfSBmcm9tICcuL3R5cGluZ3Mvb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLXJhZGlvLWdyb3VwJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBcIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW9cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkFycmF5XCI+XG4gICAgICAgIDwhLS0g0J/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INGB0YLQuNC70LXQuSDQstGL0L/QvtC70L3Rj9C10YLRgdGPINGBINC/0L7QvNC+0YnRjNGOINC/0YHQtdCy0LTQvtGB0LXQu9C10LrRgtC+0YDQsCA6Y2hlY2tlZCAtLT5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9sXCIgKG5nTW9kZWxDaGFuZ2UpID0gXCJvbkNoYW5nZWRWYWx1ZSgkZXZlbnQpXCIgZm9ybUNvbnRyb2xOYW1lPVwidmFsdWVcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17e29wdGlvbi52YWx1ZX19PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8taWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwX19yYWRpby12YWx1ZVwiPnt7b3B0aW9uLnByZXNlbnRhdGlvblRleHR9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbjwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tcmFkaW8tZ3JvdXB7ZGlzcGxheTpmbGV4fS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlve2ZsZXg6MTttYXJnaW4tcmlnaHQ6MzBweDtjdXJzb3I6cG9pbnRlcn0uZXZvLXJhZGlvLWdyb3VwX19yYWRpbzpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWNvbnRyb2x7ZGlzcGxheTpub25lfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWNvbnRyb2w6Y2hlY2tlZCsuZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3e2JhY2tncm91bmQtY29sb3I6cmdiYSg2OCwxMzgsMjU1LC4wNSk7Ym9yZGVyLWNvbG9yOiM0NDhhZmZ9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tY29udHJvbDpjaGVja2VkKy5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLXZpZXcgLmV2by1yYWRpby1ncm91cF9fcmFkaW8taWNvbjpiZWZvcmV7ZGlzcGxheTpibG9ja30uZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3e2Rpc3BsYXk6ZmxleDtwYWRkaW5nOjIwcHg7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6OHB4fS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb257cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxleC1zaHJpbms6MDt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O21hcmdpbi1yaWdodDoyMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkZWRlZGU7Ym9yZGVyLXJhZGl1czo1MCV9LmV2by1yYWRpby1ncm91cF9fcmFkaW8taWNvbjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTtkaXNwbGF5Om5vbmU7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtjb250ZW50OicnO21hcmdpbi10b3A6LTVweDttYXJnaW4tbGVmdDotNXB4O2JhY2tncm91bmQtY29sb3I6IzQ0OGFmZjtib3JkZXI6MXB4IHNvbGlkICMyODY5ZDc7Ym9yZGVyLXJhZGl1czo1MCV9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmFsdWV7Y29sb3I6IzAwMDtmb250LXNpemU6MTZweH1gXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9SYWRpb0dyb3VwQ29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b1JhZGlvR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIG9wdGlvbnM6IElPcHRpb25zO1xuICAgIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU/OiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZm9ybUdyb3VwO1xuICAgIHByaXZhdGUgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Hcm91cCgpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDQk9C10YLRgtC10YAg0L3QsCDQstC+0LfQvNC+0LbQvdGL0LUg0LLQsNGA0LjQsNC90YLRiyDQvtGC0YfQtdGC0LAg0LIg0YTQvtGA0LzQsNGC0LUg0LzQsNGB0YHQuNCy0LBcbiAgICAqINC/0YDQtdC30LXQvdGC0LDRhtC40L7QvdC90L7Qs9C+INGC0LXQutGB0YLQsCDQtNC70Y8g0YDQsNC00LjQviDQs9GA0YPQv9C/0LBcbiAgICAqL1xuICAgIGdldCBvcHRpb25BcnJheSgpOiBJT3B0aW9uc1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVPcHRpb25BcnJheSh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICog0JPQtdC90LXRgNC40YDRg9C10YIg0LjQtyDQvtC/0YbQuNC5INC80LDRgdGB0LjQslxuICAgICogQHBhcmFtIHNvdXJjZSDQvtCx0YrQtdC60YIg0YEg0LLQsNGA0LjQsNC90YLQsNC80LhcbiAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVPcHRpb25BcnJheShzb3VyY2U6IElPcHRpb25zKTogSU9wdGlvbnNbXSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqINCh0L7Qt9C00LDQvdC40LUg0LPRgNGD0L/Qv9GLXG4gICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZUZvcm1Hcm91cCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIHZhbHVlOiBbIHRoaXMudmFsdWUgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDQvdCwINGB0LzQtdC90YMg0LfQvdCw0YfQtdC90LjRj1xuICAgICogQHBhcmFtIHZhbHVlINC30L3QsNGH0LXQvdC40LVcbiAgICAqL1xuICAgIHB1YmxpYyBvbkNoYW5nZWRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG4iXX0=