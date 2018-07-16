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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ldm8tcmFkaW8tZ3JvdXAvZXZvLXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsV0FBVyxFQUEwQixNQUFNLGdCQUFnQixDQUFDO0FBQzlHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQXdCL0QsTUFBTSw2QkFBOEIsU0FBUSxjQUFjOzs7O0lBVXRELFlBQW9CLFdBQXdCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRFEsZ0JBQVcsR0FBWCxXQUFXLENBQWE7d0JBTHpCLEtBQUs7d0JBRWIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFHO3lCQUNSLEdBQUcsRUFBRSxJQUFHO0tBSW5COzs7O0lBRUQsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDdEI7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDdkI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7Ozs7O0lBTUQsSUFBSSxXQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakQ7Ozs7OztJQU1PLG1CQUFtQixDQUFDLE1BQWdCO1FBQ3hDLHVCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFakIsR0FBRyxDQUFDLENBQUMsdUJBQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDM0I7U0FDSjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7OztJQU1ULGVBQWU7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxLQUFLLEVBQUUsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFO1NBQ3hCLENBQUMsQ0FBQzs7Ozs7OztJQU9BLGNBQWMsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7O1lBdEcxQixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7T0FTUDtnQkFDSCxNQUFNLEVBQUUsQ0FBQyx1K0JBQXUrQixDQUFDO2dCQUNqL0IsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ3JELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7Ozs7WUF4QmlELFdBQVc7OztzQkEwQnhELEtBQUs7cUJBQ0wsS0FBSyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcbmltcG9ydCB7IElPcHRpb25zIH0gZnJvbSAnLi90eXBpbmdzL29wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1yYWRpby1ncm91cCcsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLXJhZGlvLWdyb3VwXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25BcnJheVwiPlxuICAgICAgICA8IS0tINCf0LXRgNC10LrQu9GO0YfQtdC90LjQtSDRgdGC0LjQu9C10Lkg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDRgSDQv9C+0LzQvtGJ0YzRjiDQv9GB0LXQstC00L7RgdC10LvQtdC60YLQvtGA0LAgOmNoZWNrZWQgLS0+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tY29udHJvbFwiIChuZ01vZGVsQ2hhbmdlKSA9IFwib25DaGFuZ2VkVmFsdWUoJGV2ZW50KVwiIGZvcm1Db250cm9sTmFtZT1cInZhbHVlXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e3tvcHRpb24udmFsdWV9fT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1yYWRpby1ncm91cF9fcmFkaW8tdmFsdWVcIj57e29wdGlvbi5wcmVzZW50YXRpb25UZXh0fX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5gLFxuICAgIHN0eWxlczogW2AuZXZvLXJhZGlvLWdyb3Vwe2Rpc3BsYXk6ZmxleH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpb3tmbGV4OjE7bWFyZ2luLXJpZ2h0OjMwcHg7Y3Vyc29yOnBvaW50ZXJ9LmV2by1yYWRpby1ncm91cF9fcmFkaW86bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9se2Rpc3BsYXk6bm9uZX0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1jb250cm9sOmNoZWNrZWQrLmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjgsMTM4LDI1NSwuMDUpO2JvcmRlci1jb2xvcjojNDQ4YWZmfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWNvbnRyb2w6Y2hlY2tlZCsuZXZvLXJhZGlvLWdyb3VwX19yYWRpby12aWV3IC5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb246YmVmb3Jle2Rpc3BsYXk6YmxvY2t9LmV2by1yYWRpby1ncm91cF9fcmFkaW8tdmlld3tkaXNwbGF5OmZsZXg7cGFkZGluZzoyMHB4O2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjhweH0uZXZvLXJhZGlvLWdyb3VwX19yYWRpby1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZsZXgtc2hyaW5rOjA7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tcmlnaHQ6MjBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO2JvcmRlci1yYWRpdXM6NTAlfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLWljb246YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7ZGlzcGxheTpub25lO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Y29udGVudDonJzttYXJnaW4tdG9wOi01cHg7bWFyZ2luLWxlZnQ6LTVweDtiYWNrZ3JvdW5kLWNvbG9yOiM0NDhhZmY7Ym9yZGVyOjFweCBzb2xpZCAjMjg2OWQ3O2JvcmRlci1yYWRpdXM6NTAlfS5ldm8tcmFkaW8tZ3JvdXBfX3JhZGlvLXZhbHVle2NvbG9yOiMwMDA7Zm9udC1zaXplOjE2cHh9YF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvUmFkaW9Hcm91cENvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9SYWRpb0dyb3VwQ29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgICBASW5wdXQoKSBvcHRpb25zOiBJT3B0aW9ucztcbiAgICBASW5wdXQoJ3ZhbHVlJykgX3ZhbHVlPzogc3RyaW5nO1xuXG4gICAgcHVibGljIGZvcm1Hcm91cDtcbiAgICBwcml2YXRlIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICBvbkNoYW5nZSA9IChfKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtR3JvdXAoKTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICog0JPQtdGC0YLQtdGAINC90LAg0LLQvtC30LzQvtC20L3Ri9C1INCy0LDRgNC40LDQvdGC0Ysg0L7RgtGH0LXRgtCwINCyINGE0L7RgNC80LDRgtC1INC80LDRgdGB0LjQstCwXG4gICAgKiDQv9GA0LXQt9C10L3RgtCw0YbQuNC+0L3QvdC+0LPQviDRgtC10LrRgdGC0LAg0LTQu9GPINGA0LDQtNC40L4g0LPRgNGD0L/Qv9CwXG4gICAgKi9cbiAgICBnZXQgb3B0aW9uQXJyYXkoKTogSU9wdGlvbnNbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlT3B0aW9uQXJyYXkodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqINCT0LXQvdC10YDQuNGA0YPQtdGCINC40Lcg0L7Qv9GG0LjQuSDQvNCw0YHRgdC40LJcbiAgICAqIEBwYXJhbSBzb3VyY2Ug0L7QsdGK0LXQutGCINGBINCy0LDRgNC40LDQvdGC0LDQvNC4XG4gICAgKi9cbiAgICBwcml2YXRlIGdlbmVyYXRlT3B0aW9uQXJyYXkoc291cmNlOiBJT3B0aW9ucyk6IElPcHRpb25zW10ge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDQodC+0LfQtNCw0L3QuNC1INCz0YDRg9C/0L/Ri1xuICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVGb3JtR3JvdXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICB2YWx1ZTogWyB0aGlzLnZhbHVlIF0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICog0J7QsdGA0LDQsdC+0YLRh9C40Log0L3QsCDRgdC80LXQvdGDINC30L3QsNGH0LXQvdC40Y9cbiAgICAqIEBwYXJhbSB2YWx1ZSDQt9C90LDRh9C10L3QuNC1XG4gICAgKi9cbiAgICBwdWJsaWMgb25DaGFuZ2VkVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuIl19