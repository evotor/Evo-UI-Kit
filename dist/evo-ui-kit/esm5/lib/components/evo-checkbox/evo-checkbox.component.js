/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';
import { EvoBaseControl } from '../../common/evo-base-control';
var EvoCheckboxComponent = /** @class */ (function (_super) {
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
    Object.defineProperty(EvoCheckboxComponent.prototype, "checkboxClass", {
        get: /**
         * @return {?}
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'evo-checkbox',
                    template: "<label class=\"evo-checkbox\">\n    <input class=\"evo-checkbox__input\"\n           type=\"checkbox\"\n           [evoUiClass]=\"checkboxClass\"\n           [disabled]=\"disabled\"\n           [(ngModel)]=\"value\">\n    <span class=\"evo-checkbox__text\">\n        <ng-content></ng-content>\n    </span>\n</label>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                    styles: [".evo-checkbox{margin:0}.evo-checkbox__input{display:none}.evo-checkbox__text{position:relative;display:inline-block;padding-left:26px;color:#212121;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-checkbox__text:before{content:'';position:absolute;top:2px;left:0;width:16px;height:16px;background-color:#fff;border:1px solid #dbdbdb;border-radius:3px}input:checked+.evo-checkbox__text:before{border-color:#448aff;background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg version%3D%221.1%22 id%3D%22%D0%A1%D0%BB%D0%BE%D0%B9_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2210px%22 height%3D%227px%22 viewBox%3D%220 0 10 7%22 enable-background%3D%22new 0 0 10 7%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath id%3D%22path0_fill%22 fill%3D%22%23FFFFFF%22 d%3D%22M9.7%2C0.3c0.4%2C0.4%2C0.4%2C1%2C0%2C1.4l-5%2C5C4.4%2C7%2C3.9%2C7.1%2C3.5%2C6.9c-0.2%2C0-0.3-0.1-0.4-0.3L0.3%2C3.8%09c-0.4-0.4-0.4-1%2C0-1.4c0.4-0.4%2C1-0.4%2C1.4%2C0l2.2%2C2.2l4.3-4.3C8.6-0.1%2C9.3-0.1%2C9.7%2C0.3z%22%2F%3E%3C%2Fsvg%3E\") center no-repeat #448aff}input:disabled:not(:checked)+.evo-checkbox__text{cursor:default}input:disabled:not(:checked)+.evo-checkbox__text:before{background-color:#f6f6f6}input:disabled:checked+.evo-checkbox__text{cursor:default}input:disabled:checked+.evo-checkbox__text:before{opacity:.5}input.evo-checkbox_invalid+.evo-checkbox__text:before{border-color:#f22}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return EvoCheckboxComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    return EvoCheckboxComponent;
}(EvoBaseControl));
export { EvoCheckboxComponent };
function EvoCheckboxComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoCheckboxComponent.prototype.disabled;
    /** @type {?} */
    EvoCheckboxComponent.prototype._value;
    /** @type {?} */
    EvoCheckboxComponent.prototype.onChange;
    /** @type {?} */
    EvoCheckboxComponent.prototype.onTouched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ldm8tY2hlY2tib3gvZXZvLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNsRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBNEJyQixnREFBYzs7O3lCQUVsQyxLQUFLO3lCQUdaLFVBQUMsQ0FBQyxLQUFPOzBCQUNSLGVBQVE7OztJQUVwQixzQkFBSSx1Q0FBSzs7OztRQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdEI7Ozs7O1FBRUQsVUFBVSxLQUFjO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7OztPQUxBO0lBT0Qsc0JBQUksK0NBQWE7Ozs7UUFBakI7WUFDSSxNQUFNLENBQUM7Z0JBQ0gsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzthQUN0RSxDQUFDO1NBQ0w7OztPQUFBOzs7OztJQUVELHlDQUFVOzs7O0lBQVYsVUFBVyxLQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixLQUFjO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOztnQkE5REosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUscWVBYWI7b0JBQ0csTUFBTSxFQUFFLENBQUMsK2hEQUE2aEQsQ0FBQztvQkFDdmlELFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQzs0QkFDbkQsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7cUJBQ0o7aUJBQ0o7OytCQS9CRDtFQWdDMEMsY0FBYztTQUEzQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYDxsYWJlbCBjbGFzcz1cImV2by1jaGVja2JveFwiPlxuICAgIDxpbnB1dCBjbGFzcz1cImV2by1jaGVja2JveF9faW5wdXRcIlxuICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICBbZXZvVWlDbGFzc109XCJjaGVja2JveENsYXNzXCJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiZXZvLWNoZWNrYm94X190ZXh0XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG48L2xhYmVsPlxuPGV2by1jb250cm9sLWVycm9yICpuZ0lmPVwic2hvd0Vycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc01lc3NhZ2VzXT1cImVycm9yc01lc3NhZ2VzXCI+PC9ldm8tY29udHJvbC1lcnJvcj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tY2hlY2tib3h7bWFyZ2luOjB9LmV2by1jaGVja2JveF9faW5wdXR7ZGlzcGxheTpub25lfS5ldm8tY2hlY2tib3hfX3RleHR7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1sZWZ0OjI2cHg7Y29sb3I6IzIxMjEyMTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MnB4O2xlZnQ6MDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czozcHh9aW5wdXQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtib3JkZXItY29sb3I6IzQ0OGFmZjtiYWNrZ3JvdW5kOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0MlM0Z4bWwgdmVyc2lvbiUzRCUyMjEuMCUyMiBlbmNvZGluZyUzRCUyMnV0Zi04JTIyJTNGJTNFJTNDc3ZnIHZlcnNpb24lM0QlMjIxLjElMjIgaWQlM0QlMjIlRDAlQTElRDAlQkIlRDAlQkUlRDAlQjlfMSUyMiB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmslMjIgeCUzRCUyMjBweCUyMiB5JTNEJTIyMHB4JTIyJTA5IHdpZHRoJTNEJTIyMTBweCUyMiBoZWlnaHQlM0QlMjI3cHglMjIgdmlld0JveCUzRCUyMjAgMCAxMCA3JTIyIGVuYWJsZS1iYWNrZ3JvdW5kJTNEJTIybmV3IDAgMCAxMCA3JTIyIHhtbCUzQXNwYWNlJTNEJTIycHJlc2VydmUlMjIlM0UlM0NwYXRoIGlkJTNEJTIycGF0aDBfZmlsbCUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyIGQlM0QlMjJNOS43JTJDMC4zYzAuNCUyQzAuNCUyQzAuNCUyQzElMkMwJTJDMS40bC01JTJDNUM0LjQlMkM3JTJDMy45JTJDNy4xJTJDMy41JTJDNi45Yy0wLjIlMkMwLTAuMy0wLjEtMC40LTAuM0wwLjMlMkMzLjglMDljLTAuNC0wLjQtMC40LTElMkMwLTEuNGMwLjQtMC40JTJDMS0wLjQlMkMxLjQlMkMwbDIuMiUyQzIuMmw0LjMtNC4zQzguNi0wLjElMkM5LjMtMC4xJTJDOS43JTJDMC4zeiUyMiUyRiUzRSUzQyUyRnN2ZyUzRVwiKSBjZW50ZXIgbm8tcmVwZWF0ICM0NDhhZmZ9aW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSsuZXZvLWNoZWNrYm94X190ZXh0e2N1cnNvcjpkZWZhdWx0fWlucHV0OmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2fWlucHV0OmRpc2FibGVkOmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dHtjdXJzb3I6ZGVmYXVsdH1pbnB1dDpkaXNhYmxlZDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle29wYWNpdHk6LjV9aW5wdXQuZXZvLWNoZWNrYm94X2ludmFsaWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNmMjJ9YF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvQ2hlY2tib3hDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3ZhbHVlOiBib29sZWFuO1xuXG4gICAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNoZWNrYm94Q2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnaW52YWxpZCc6IHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gICAgfVxuXG59XG4iXX0=