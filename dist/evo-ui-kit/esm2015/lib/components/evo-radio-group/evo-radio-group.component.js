/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
export class EvoRadioGroupComponent extends EvoBaseControl {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ldm8tcmFkaW8tZ3JvdXAvZXZvLXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsV0FBVyxFQUEwQixNQUFNLGdCQUFnQixDQUFDO0FBQzlHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQXdCL0QsTUFBTSw2QkFBOEIsU0FBUSxjQUFjOzs7O0lBVXRELFlBQW9CLFdBQXdCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRFEsZ0JBQVcsR0FBWCxXQUFXLENBQWE7d0JBTHpCLEtBQUs7d0JBRWIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFHO3lCQUNSLEdBQUcsRUFBRSxJQUFHO0tBSW5COzs7O0lBRUQsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDdEI7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDdkI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7Ozs7O0lBTUQsSUFBSSxXQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakQ7Ozs7OztJQU1PLG1CQUFtQixDQUFDLE1BQWdCO1FBQ3hDLHVCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFakIsR0FBRyxDQUFDLENBQUMsdUJBQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDM0I7U0FDSjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7OztJQU1ULGVBQWU7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxLQUFLLEVBQUUsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFO1NBQ3hCLENBQUMsQ0FBQzs7Ozs7OztJQU9BLGNBQWMsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7O1lBdEcxQixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7T0FTUDtnQkFDSCxNQUFNLEVBQUUsQ0FBQyw2L0JBQTYvQixDQUFDO2dCQUN2Z0MsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ3JELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7Ozs7WUF4QmlELFdBQVc7OztzQkEwQnhELEtBQUs7cUJBQ0wsS0FBSyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcbmltcG9ydCB7IElPcHRpb25zIH0gZnJvbSAnLi90eXBpbmdzL29wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1yYWRpby1ncm91cCcsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25BcnJheVwiPlxuICAgICAgICA8IS0tINCf0LXRgNC10LrQu9GO0YfQtdC90LjQtSDRgdGC0LjQu9C10Lkg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDRgSDQv9C+0LzQvtGJ0YzRjiDQv9GB0LXQstC00L7RgdC10LvQtdC60YLQvtGA0LAgOmNoZWNrZWQgLS0+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tY29udHJvbFwiIChuZ01vZGVsQ2hhbmdlKSA9IFwib25DaGFuZ2VkVmFsdWUoJGV2ZW50KVwiIGZvcm1Db250cm9sTmFtZT1cInZhbHVlXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e3tvcHRpb24udmFsdWV9fT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tdmFsdWVcIj57e29wdGlvbi5wcmVzZW50YXRpb25UZXh0fX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5gLFxuICAgIHN0eWxlczogW2AuZXZvLXJhZGlvLWdyb3Vwe2Rpc3BsYXk6ZmxleH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpb3tmbGV4OjE7bWFyZ2luLXJpZ2h0OjMwcHg7Y3Vyc29yOnBvaW50ZXJ9LmV2by1yYWRpby1ncm91cF9fcmFkaW86bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9se2Rpc3BsYXk6bm9uZX0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9sOmNoZWNrZWQrLmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjgsMTM4LDI1NSwuMDUpO2JvcmRlci1jb2xvcjojNDQ4YWZmfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWNvbnRyb2w6Y2hlY2tlZCsuZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3IC5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb246YmVmb3Jle2Rpc3BsYXk6YmxvY2t9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld3tkaXNwbGF5OmZsZXg7cGFkZGluZzoyMHB4O2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjhweH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZsZXgtc2hyaW5rOjA7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tcmlnaHQ6MjBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO2JvcmRlci1yYWRpdXM6NTAlfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb246YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7ZGlzcGxheTpub25lO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2NvbnRlbnQ6Jyc7bWFyZ2luLXRvcDotNXB4O21hcmdpbi1sZWZ0Oi01cHg7YmFja2dyb3VuZC1jb2xvcjojNDQ4YWZmO2JvcmRlcjoxcHggc29saWQgIzI4NjlkNztib3JkZXItcmFkaXVzOjUwJX0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby12YWx1ZXtjb2xvcjojMDAwO2ZvbnQtc2l6ZToxNnB4fWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b1JhZGlvR3JvdXBDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvUmFkaW9Hcm91cENvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gICAgQElucHV0KCkgb3B0aW9uczogSU9wdGlvbnM7XG4gICAgQElucHV0KCd2YWx1ZScpIF92YWx1ZT86IHN0cmluZztcblxuICAgIHB1YmxpYyBmb3JtR3JvdXA7XG4gICAgcHJpdmF0ZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybUdyb3VwKCk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqINCT0LXRgtGC0LXRgCDQvdCwINCy0L7Qt9C80L7QttC90YvQtSDQstCw0YDQuNCw0L3RgtGLINC+0YLRh9C10YLQsCDQsiDRhNC+0YDQvNCw0YLQtSDQvNCw0YHRgdC40LLQsFxuICAgICog0L/RgNC10LfQtdC90YLQsNGG0LjQvtC90L3QvtCz0L4g0YLQtdC60YHRgtCwINC00LvRjyDRgNCw0LTQuNC+INCz0YDRg9C/0L/QsFxuICAgICovXG4gICAgZ2V0IG9wdGlvbkFycmF5KCk6IElPcHRpb25zW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZU9wdGlvbkFycmF5KHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDQk9C10L3QtdGA0LjRgNGD0LXRgiDQuNC3INC+0L/RhtC40Lkg0LzQsNGB0YHQuNCyXG4gICAgKiBAcGFyYW0gc291cmNlINC+0LHRitC10LrRgiDRgSDQstCw0YDQuNCw0L3RgtCw0LzQuFxuICAgICovXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZU9wdGlvbkFycmF5KHNvdXJjZTogSU9wdGlvbnMpOiBJT3B0aW9uc1tdIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goc291cmNlW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICog0KHQvtC30LTQsNC90LjQtSDQs9GA0YPQv9C/0YtcbiAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRm9ybUdyb3VwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgdmFsdWU6IFsgdGhpcy52YWx1ZSBdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqINCe0LHRgNCw0LHQvtGC0YfQuNC6INC90LAg0YHQvNC10L3RgyDQt9C90LDRh9C10L3QuNGPXG4gICAgKiBAcGFyYW0gdmFsdWUg0LfQvdCw0YfQtdC90LjQtVxuICAgICovXG4gICAgcHVibGljIG9uQ2hhbmdlZFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbiJdfQ==