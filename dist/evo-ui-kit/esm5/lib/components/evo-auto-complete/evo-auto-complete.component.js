/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EvoBaseControl } from '../../common/evo-base-control';
/** @enum {string} */
var EvoAutoCompleteTypes = {
    party: 'party',
};
export { EvoAutoCompleteTypes };
var EvoAutoCompleteComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EvoAutoCompleteComponent, _super);
    function EvoAutoCompleteComponent(http, elementRef) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.elementRef = elementRef;
        _this.disabled = false;
        _this.input = new FormControl();
        _this.suggestions = [];
        _this.valueAutoCompleted = false;
        _this.autoCompeteTypes = EvoAutoCompleteTypes;
        _this.onChange = function (value) { };
        _this.onTouched = function () { };
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.handleDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.path.indexOf(this.elementRef.nativeElement) === -1 && this.suggestions) {
            this.valueAutoCompleted = true;
            this.input.setValue('', {
                emitEvent: false,
                onlySelf: true,
            });
            this.suggestions = null;
            this.value = '';
        }
    };
    /**
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.input.valueChanges.subscribe(function (query) {
            if (_this.valueAutoCompleted) {
                _this.valueAutoCompleted = false;
                return;
            }
            _this.requestSuggestions(query);
        });
    };
    Object.defineProperty(EvoAutoCompleteComponent.prototype, "value", {
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
     * @param {?} suggestion
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.getSuggestionDataString = /**
     * @param {?} suggestion
     * @return {?}
     */
    function (suggestion) {
        var /** @type {?} */ result = null;
        if (suggestion && suggestion.data) {
            var /** @type {?} */ inn = suggestion.data.inn;
            var address = suggestion.data.address;
            if (inn) {
                result = inn + " " + (address ? address.value : '');
            }
        }
        return result;
    };
    /**
     * @param {?} event
     * @param {?} suggestion
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.handleSuggestionClick = /**
     * @param {?} event
     * @param {?} suggestion
     * @return {?}
     */
    function (event, suggestion) {
        this.valueAutoCompleted = true;
        this.input.setValue(suggestion.value, {
            emitEvent: false,
            onlySelf: true,
        });
        this.suggestions = null;
        this.value = suggestion;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            this.input.setValue('');
        }
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.registerOnChange = /**
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
    EvoAutoCompleteComponent.prototype.registerOnTouched = /**
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
    EvoAutoCompleteComponent.prototype.setDisabledState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.disabled = state;
        state ? this.input.disable({ onlySelf: true, emitEvent: false }) :
            this.input.enable({ onlySelf: true, emitEvent: false });
    };
    /**
     * @param {?} query
     * @return {?}
     */
    EvoAutoCompleteComponent.prototype.requestSuggestions = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        var /** @type {?} */ headers = new HttpHeaders()
            .set('Authorization', 'Token 6a62e779b984f0353e87931ebc384d2c736aafa9')
            .set('Content-Type', 'application/json');
        var /** @type {?} */ options = {
            headers: headers,
        };
        this.http
            .post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', { query: query, count: 4 }, options)
            .subscribe(function (response) {
            _this.suggestions = response.suggestions;
        });
    };
    EvoAutoCompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-auto-complete',
                    template: "<div class=\"evo-auto-complete\">\n    <div class=\"evo-auto-complete__input-wrapper\">\n        <evo-input (blur)=\"onTouched()\"\n                   [state]=\"currentState\"\n                   [formControl]=\"input\"></evo-input>\n    </div>\n    <div class=\"evo-auto-complete__suggestions\" *ngIf=\"suggestions && suggestions.length && !disabled\">\n        <ng-container *ngFor=\"let suggestion of suggestions\" >\n            <div class=\"evo-auto-complete__party\" *ngIf=\"getSuggestionDataString(suggestion)\" (click)=\"handleSuggestionClick($event, suggestion)\">\n                <p class=\"evo-auto-complete__text-line\" [attr.title]=\"suggestion.value\">{{ suggestion.value }}</p>\n                <p class=\"evo-auto-complete__text-line\" [attr.title]=\"getSuggestionDataString(suggestion)\">{{ getSuggestionDataString(suggestion) }}</p>\n            </div>\n        </ng-container>\n    </div>\n</div>\n<evo-control-error *ngIf=\"showErrors\"\n                   [errors]=\"control.errors\"\n                   [errorsMessages]=\"errorsMessages\"></evo-control-error>\n",
                    styles: [".evo-auto-complete{position:relative}.evo-auto-complete__input-wrapper{position:relative;z-index:2}.evo-auto-complete__suggestions{position:absolute;z-index:1;width:100%;overflow:hidden;background-color:#fff;border-radius:4px;box-shadow:0 0 12px 4px rgba(0,0,0,.2)}.evo-auto-complete__party{display:flex;flex-direction:column;justify-content:center;height:48px;padding:5px 20px;background-color:#fff;cursor:pointer}.evo-auto-complete__party:hover{color:#fff;background-color:#ff7800}.evo-auto-complete__text-line{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return EvoAutoCompleteComponent; }),
                            multi: true,
                        },
                    ],
                },] },
    ];
    /** @nocollapse */
    EvoAutoCompleteComponent.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ElementRef }
    ]; };
    EvoAutoCompleteComponent.propDecorators = {
        type: [{ type: Input }],
        handleDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return EvoAutoCompleteComponent;
}(EvoBaseControl));
export { EvoAutoCompleteComponent };
function EvoAutoCompleteComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.type;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.disabled;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.input;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.suggestions;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype._value;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.valueAutoCompleted;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.autoCompeteTypes;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.onChange;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.onTouched;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.http;
    /** @type {?} */
    EvoAutoCompleteComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWF1dG8tY29tcGxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXZvLXVpLWtpdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V2by1hdXRvLWNvbXBsZXRlL2V2by1hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7OztXQUduRCxPQUFPOzs7O0lBaUMyQixvREFBYztJQVl4RCxrQ0FDVSxNQUNBO1FBRlYsWUFJSSxpQkFBTyxTQUNWO1FBSlMsVUFBSSxHQUFKLElBQUk7UUFDSixnQkFBVSxHQUFWLFVBQVU7eUJBWFQsS0FBSztzQkFDSyxJQUFJLFdBQVcsRUFBRTs0QkFDakIsRUFBRTttQ0FHTSxLQUFLO2lDQUVOLG9CQUFvQjt5QkFTckMsVUFBQyxLQUFLLEtBQU87MEJBQ1osZUFBUTs7S0FIbkI7Ozs7O0lBTUQsc0RBQW1COzs7O0lBRG5CLFVBQ29CLEtBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtnQkFDdEIsU0FB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QUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0tBQy9EOzs7OztJQUdPLHFEQUFrQjs7OztjQUFDLEtBQWE7O1FBQ3RDLHFCQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUM5QixHQUFHLENBQUMsZUFBZSxFQUFFLGdEQUFnRCxDQUFDO2FBQ3RFLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxxQkFBTSxPQUFPLEdBQUc7WUFDZCxPQUFPLFNBQUE7U0FDUixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUk7YUFDTixJQUFJLENBQ0gsb0VBQW9FLEVBQ3BFLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNuQixPQUFPLENBQ1I7YUFDQSxTQUFTLENBQUMsVUFBQyxRQUFhO1lBQ3JCLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUMzQyxDQUFDLENBQUM7OztnQkFwSlYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSw4akNBa0JiO29CQUNHLE1BQU0sRUFBRSxDQUFDLHNrQkFBc2tCLENBQUM7b0JBQ2hsQixTQUFTLEVBQUU7d0JBQ1g7NEJBQ0ksT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCLENBQUM7NEJBQ3ZELEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO2lCQUNBOzs7O2dCQXBDUSxVQUFVO2dCQUZDLFVBQVU7Ozt1QkF5Q3pCLEtBQUs7c0NBb0JMLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7bUNBN0RoRDtFQXVDOEMsY0FBYztTQUEvQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5cbmV4cG9ydCBlbnVtIEV2b0F1dG9Db21wbGV0ZVR5cGVzIHtcbiAgICBwYXJ0eSA9ICdwYXJ0eScsXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWF1dG8tY29tcGxldGUnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlXCI+XG4gICAgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX19pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxldm8taW5wdXQgKGJsdXIpPVwib25Ub3VjaGVkKClcIlxuICAgICAgICAgICAgICAgICAgIFtzdGF0ZV09XCJjdXJyZW50U3RhdGVcIlxuICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJpbnB1dFwiPjwvZXZvLWlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZV9fc3VnZ2VzdGlvbnNcIiAqbmdJZj1cInN1Z2dlc3Rpb25zICYmIHN1Z2dlc3Rpb25zLmxlbmd0aCAmJiAhZGlzYWJsZWRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdGlvbiBvZiBzdWdnZXN0aW9uc1wiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZV9fcGFydHlcIiAqbmdJZj1cImdldFN1Z2dlc3Rpb25EYXRhU3RyaW5nKHN1Z2dlc3Rpb24pXCIgKGNsaWNrKT1cImhhbmRsZVN1Z2dlc3Rpb25DbGljaygkZXZlbnQsIHN1Z2dlc3Rpb24pXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZV9fdGV4dC1saW5lXCIgW2F0dHIudGl0bGVdPVwic3VnZ2VzdGlvbi52YWx1ZVwiPnt7IHN1Z2dlc3Rpb24udmFsdWUgfX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJldm8tYXV0by1jb21wbGV0ZV9fdGV4dC1saW5lXCIgW2F0dHIudGl0bGVdPVwiZ2V0U3VnZ2VzdGlvbkRhdGFTdHJpbmcoc3VnZ2VzdGlvbilcIj57eyBnZXRTdWdnZXN0aW9uRGF0YVN0cmluZyhzdWdnZXN0aW9uKSB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGV2by1jb250cm9sLWVycm9yICpuZ0lmPVwic2hvd0Vycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc01lc3NhZ2VzXT1cImVycm9yc01lc3NhZ2VzXCI+PC9ldm8tY29udHJvbC1lcnJvcj5cbmAsXG4gICAgc3R5bGVzOiBbYC5ldm8tYXV0by1jb21wbGV0ZXtwb3NpdGlvbjpyZWxhdGl2ZX0uZXZvLWF1dG8tY29tcGxldGVfX2lucHV0LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5ldm8tYXV0by1jb21wbGV0ZV9fc3VnZ2VzdGlvbnN7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OjAgMCAxMnB4IDRweCByZ2JhKDAsMCwwLC4yKX0uZXZvLWF1dG8tY29tcGxldGVfX3BhcnR5e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6NDhweDtwYWRkaW5nOjVweCAyMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcn0uZXZvLWF1dG8tY29tcGxldGVfX3BhcnR5OmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZmY3ODAwfS5ldm8tYXV0by1jb21wbGV0ZV9fdGV4dC1saW5le21hcmdpbjowO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpc31gXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9BdXRvQ29tcGxldGVDb21wb25lbnQpLFxuICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvQXV0b0NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgRXZvQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHR5cGU6IEV2b0F1dG9Db21wbGV0ZVR5cGVzO1xuICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgaW5wdXQ6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgc3VnZ2VzdGlvbnM6IGFueVtdID0gW107XG5cbiAgICBwcml2YXRlIF92YWx1ZTogYW55O1xuICAgIHByaXZhdGUgdmFsdWVBdXRvQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgICByZWFkb25seSBhdXRvQ29tcGV0ZVR5cGVzID0gRXZvQXV0b0NvbXBsZXRlVHlwZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsgJyRldmVudCcgXSlcbiAgICBoYW5kbGVEb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICAgIGlmIChldmVudC5wYXRoLmluZGV4T2YodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpID09PSAtMSAmJiB0aGlzLnN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIHRoaXMudmFsdWVBdXRvQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRWYWx1ZSgnJywge1xuICAgICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChxdWVyeTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlQXV0b0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZUF1dG9Db21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVxdWVzdFN1Z2dlc3Rpb25zKHF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0U3VnZ2VzdGlvbkRhdGFTdHJpbmcoc3VnZ2VzdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgICBpZiAoc3VnZ2VzdGlvbiAmJiBzdWdnZXN0aW9uLmRhdGEpIHtcbiAgICAgICAgY29uc3QgaW5uOiBzdHJpbmcgPSBzdWdnZXN0aW9uLmRhdGEuaW5uO1xuICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHN1Z2dlc3Rpb24uZGF0YTtcblxuICAgICAgICBpZiAoaW5uKSB7XG4gICAgICAgICAgcmVzdWx0ID0gYCR7aW5ufSAke2FkZHJlc3MgPyBhZGRyZXNzLnZhbHVlIDogJyd9YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGhhbmRsZVN1Z2dlc3Rpb25DbGljayhldmVudDogYW55LCBzdWdnZXN0aW9uOiBhbnkpIHtcbiAgICAgIHRoaXMudmFsdWVBdXRvQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5wdXQuc2V0VmFsdWUoc3VnZ2VzdGlvbi52YWx1ZSwge1xuICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IG51bGw7XG4gICAgICB0aGlzLnZhbHVlID0gc3VnZ2VzdGlvbjtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRWYWx1ZSgnJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gc3RhdGU7XG4gICAgICBzdGF0ZSA/IHRoaXMuaW5wdXQuZGlzYWJsZSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KSA6XG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQuZW5hYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIH1cblxuICAgIC8vICBUT0RPIENyZWF0ZSBnZW5lcmljIHdheSB0byBnZXQgRGFEYXRhIHN1Z2dlc3Rpb25zL2FueSBiYWNrZW5kIGRhdGEgdG8gc2hvd1xuICAgIHByaXZhdGUgcmVxdWVzdFN1Z2dlc3Rpb25zKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ1Rva2VuIDZhNjJlNzc5Yjk4NGYwMzUzZTg3OTMxZWJjMzg0ZDJjNzM2YWFmYTknKVxuICAgICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuaHR0cFxuICAgICAgICAucG9zdDxhbnk+KFxuICAgICAgICAgICdodHRwczovL3N1Z2dlc3Rpb25zLmRhZGF0YS5ydS9zdWdnZXN0aW9ucy9hcGkvNF8xL3JzL3N1Z2dlc3QvcGFydHknLFxuICAgICAgICAgIHsgcXVlcnksIGNvdW50OiA0IH0sXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gcmVzcG9uc2Uuc3VnZ2VzdGlvbnM7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==