/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EvoBaseControl } from '../../common/evo-base-control';
/** @enum {string} */
const EvoAutoCompleteTypes = {
    party: 'party',
};
export { EvoAutoCompleteTypes };
export class EvoAutoCompleteComponent extends EvoBaseControl {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWF1dG8tY29tcGxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXZvLXVpLWtpdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V2by1hdXRvLWNvbXBsZXRlL2V2by1hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUF3QixXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O1dBR25ELE9BQU87OztBQWlDbkIsTUFBTSwrQkFBZ0MsU0FBUSxjQUFjOzs7OztJQVl4RCxZQUNVLE1BQ0E7UUFFTixLQUFLLEVBQUUsQ0FBQztRQUhGLFNBQUksR0FBSixJQUFJO1FBQ0osZUFBVSxHQUFWLFVBQVU7d0JBWFQsS0FBSztxQkFDSyxJQUFJLFdBQVcsRUFBRTsyQkFDakIsRUFBRTtrQ0FHTSxLQUFLO2dDQUVOLG9CQUFvQjt3QkFTckMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFHO3lCQUNaLEdBQUcsRUFBRSxJQUFHO0tBSG5COzs7OztJQU1ELG1CQUFtQixDQUFDLEtBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxD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QUssRUFBQyxDQUFDLENBQUM7S0FDL0Q7Ozs7O0lBR08sa0JBQWtCLENBQUMsS0FBYTtRQUN0Qyx1QkFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7YUFDOUIsR0FBRyxDQUFDLGVBQWUsRUFBRSxnREFBZ0QsQ0FBQzthQUN0RSxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDM0MsdUJBQU0sT0FBTyxHQUFHO1lBQ2QsT0FBTztTQUNSLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSTthQUNOLElBQUksQ0FDSCxvRUFBb0UsRUFDcEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNuQixPQUFPLENBQ1I7YUFDQSxTQUFTLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7U0FDM0MsQ0FBQyxDQUFDOzs7O1lBcEpWLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQyxza0JBQXNrQixDQUFDO2dCQUNobEIsU0FBUyxFQUFFO29CQUNYO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQXdCLENBQUM7d0JBQ3ZELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0E7Ozs7WUFwQ1EsVUFBVTtZQUZDLFVBQVU7OzttQkF5Q3pCLEtBQUs7a0NBb0JMLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBFdm9CYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tYmFzZS1jb250cm9sJztcblxuZXhwb3J0IGVudW0gRXZvQXV0b0NvbXBsZXRlVHlwZXMge1xuICAgIHBhcnR5ID0gJ3BhcnR5Jyxcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tYXV0by1jb21wbGV0ZScsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLWF1dG8tY29tcGxldGVfX2lucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGV2by1pbnB1dCAoYmx1cik9XCJvblRvdWNoZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgW3N0YXRlXT1cImN1cnJlbnRTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImlucHV0XCI+PC9ldm8taW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX19zdWdnZXN0aW9uc1wiICpuZ0lmPVwic3VnZ2VzdGlvbnMgJiYgc3VnZ2VzdGlvbnMubGVuZ3RoICYmICFkaXNhYmxlZFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWdnZXN0aW9uIG9mIHN1Z2dlc3Rpb25zXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX19wYXJ0eVwiICpuZ0lmPVwiZ2V0U3VnZ2VzdGlvbkRhdGFTdHJpbmcoc3VnZ2VzdGlvbilcIiAoY2xpY2spPVwiaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKCRldmVudCwgc3VnZ2VzdGlvbilcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX190ZXh0LWxpbmVcIiBbYXR0ci50aXRsZV09XCJzdWdnZXN0aW9uLnZhbHVlXCI+e3sgc3VnZ2VzdGlvbi52YWx1ZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV2by1hdXRvLWNvbXBsZXRlX190ZXh0LWxpbmVcIiBbYXR0ci50aXRsZV09XCJnZXRTdWdnZXN0aW9uRGF0YVN0cmluZyhzdWdnZXN0aW9uKVwiPnt7IGdldFN1Z2dlc3Rpb25EYXRhU3RyaW5nKHN1Z2dlc3Rpb24pIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1hdXRvLWNvbXBsZXRle3Bvc2l0aW9uOnJlbGF0aXZlfS5ldm8tYXV0by1jb21wbGV0ZV9faW5wdXQtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LmV2by1hdXRvLWNvbXBsZXRlX19zdWdnZXN0aW9uc3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCAwIDEycHggNHB4IHJnYmEoMCwwLDAsLjIpfS5ldm8tYXV0by1jb21wbGV0ZV9fcGFydHl7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDo0OHB4O3BhZGRpbmc6NXB4IDIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyfS5ldm8tYXV0by1jb21wbGV0ZV9fcGFydHk6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4MDB9LmV2by1hdXRvLWNvbXBsZXRlX190ZXh0LWxpbmV7bWFyZ2luOjA7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfWBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV2b0F1dG9Db21wbGV0ZUNvbXBvbmVudCksXG4gICAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG5dLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9BdXRvQ29tcGxldGVDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdHlwZTogRXZvQXV0b0NvbXBsZXRlVHlwZXM7XG4gICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpbnB1dDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICBzdWdnZXN0aW9uczogYW55W10gPSBbXTtcblxuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSB2YWx1ZUF1dG9Db21wbGV0ZWQgPSBmYWxzZTtcblxuICAgIHJlYWRvbmx5IGF1dG9Db21wZXRlVHlwZXMgPSBFdm9BdXRvQ29tcGxldGVUeXBlcztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyAnJGV2ZW50JyBdKVxuICAgIGhhbmRsZURvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSkge1xuICAgICAgaWYgKGV2ZW50LnBhdGguaW5kZXhPZih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkgPT09IC0xICYmIHRoaXMuc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgdGhpcy52YWx1ZUF1dG9Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlucHV0LnNldFZhbHVlKCcnLCB7XG4gICAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgICAgICBvbmx5U2VsZjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVBdXRvQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQXV0b0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0U3VnZ2VzdGlvbnMocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRTdWdnZXN0aW9uRGF0YVN0cmluZyhzdWdnZXN0aW9uOiBhbnkpOiBzdHJpbmcge1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgIGlmIChzdWdnZXN0aW9uICYmIHN1Z2dlc3Rpb24uZGF0YSkge1xuICAgICAgICBjb25zdCBpbm46IHN0cmluZyA9IHN1Z2dlc3Rpb24uZGF0YS5pbm47XG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gc3VnZ2VzdGlvbi5kYXRhO1xuXG4gICAgICAgIGlmIChpbm4pIHtcbiAgICAgICAgICByZXN1bHQgPSBgJHtpbm59ICR7YWRkcmVzcyA/IGFkZHJlc3MudmFsdWUgOiAnJ31gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKGV2ZW50OiBhbnksIHN1Z2dlc3Rpb246IGFueSkge1xuICAgICAgdGhpcy52YWx1ZUF1dG9Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbnB1dC5zZXRWYWx1ZShzdWdnZXN0aW9uLnZhbHVlLCB7XG4gICAgICAgIGVtaXRFdmVudDogZmFsc2UsXG4gICAgICAgIG9ubHlTZWxmOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gbnVsbDtcbiAgICAgIHRoaXMudmFsdWUgPSBzdWdnZXN0aW9uO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLmlucHV0LnNldFZhbHVlKCcnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICAgIHN0YXRlID8gdGhpcy5pbnB1dC5kaXNhYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pIDpcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dC5lbmFibGUoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgLy8gIFRPRE8gQ3JlYXRlIGdlbmVyaWMgd2F5IHRvIGdldCBEYURhdGEgc3VnZ2VzdGlvbnMvYW55IGJhY2tlbmQgZGF0YSB0byBzaG93XG4gICAgcHJpdmF0ZSByZXF1ZXN0U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnVG9rZW4gNmE2MmU3NzliOTg0ZjAzNTNlODc5MzFlYmMzODRkMmM3MzZhYWZhOScpXG4gICAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5odHRwXG4gICAgICAgIC5wb3N0PGFueT4oXG4gICAgICAgICAgJ2h0dHBzOi8vc3VnZ2VzdGlvbnMuZGFkYXRhLnJ1L3N1Z2dlc3Rpb25zL2FwaS80XzEvcnMvc3VnZ2VzdC9wYXJ0eScsXG4gICAgICAgICAgeyBxdWVyeSwgY291bnQ6IDQgfSxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSByZXNwb25zZS5zdWdnZXN0aW9ucztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19