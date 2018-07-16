/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';
import { EvoBaseControl } from '../../common/evo-base-control';
export class EvoInputComponent extends EvoBaseControl {
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
function EvoInputComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoInputComponent.prototype.autoFocus;
    /** @type {?} */
    EvoInputComponent.prototype.mask;
    /** @type {?} */
    EvoInputComponent.prototype.placeholder;
    /** @type {?} */
    EvoInputComponent.prototype.tooltip;
    /** @type {?} */
    EvoInputComponent.prototype.type;
    /** @type {?} */
    EvoInputComponent.prototype._value;
    /** @type {?} */
    EvoInputComponent.prototype.blur;
    /** @type {?} */
    EvoInputComponent.prototype.inputElement;
    /** @type {?} */
    EvoInputComponent.prototype.tooltipElement;
    /** @type {?} */
    EvoInputComponent.prototype.customTooltipChecked;
    /** @type {?} */
    EvoInputComponent.prototype.hasCustomTooltip;
    /** @type {?} */
    EvoInputComponent.prototype.tooltipShown;
    /** @type {?} */
    EvoInputComponent.prototype.disabled;
    /** @type {?} */
    EvoInputComponent.prototype.focused;
    /** @type {?} */
    EvoInputComponent.prototype.tooltipVisibilityTimeout;
    /** @type {?} */
    EvoInputComponent.prototype.onChange;
    /** @type {?} */
    EvoInputComponent.prototype.onTouched;
    /** @type {?} */
    EvoInputComponent.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ldm8taW5wdXQvZXZvLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBMEQvRCxNQUFNLHdCQUF5QixTQUFRLGNBQWM7Ozs7SUFvQm5ELFlBQW9CLGNBQWlDO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBRFUsbUJBQWMsR0FBZCxjQUFjLENBQW1CO29CQWZyQyxNQUFNO29CQUdjLElBQUksWUFBWSxFQUFPO29DQUtwQyxLQUFLO2dDQUNULEtBQUs7NEJBQ1QsS0FBSzt3QkFDVCxLQUFLO3VCQUNOLEtBQUs7d0NBQ29CLEtBQUs7d0JBTTdCLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBRzt5QkFDWixHQUFHLEVBQUUsSUFBRztLQUhuQjs7OztJQUtELGVBQWU7UUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBRUQsSUFBSSxLQUFLLENB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RUFBNnBFLENBQUM7Z0JBQ3ZxRSxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7OztZQW5FQyxpQkFBaUI7Ozt3QkFxRWhCLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLLFNBQUMsT0FBTzttQkFFYixNQUFNOzJCQUVOLFNBQVMsU0FBQyxPQUFPOzZCQUNqQixTQUFTLFNBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcbmltcG9ydCB7IEV2b0Jhc2VDb250cm9sIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdldm8taW5wdXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8taW5wdXRcIiBbZXZvVWlDbGFzc109XCJpbnB1dENsYXNzXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZXZvLWlucHV0X19jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0ICNpbnB1dFxuICAgICAgICAgICAgICAgKm5nSWY9XCIhbWFza1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImV2by1pbnB1dF9fZmllbGRcIlxuICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoKVwiXG4gICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXG4gICAgICAgICAgICAgICB0eXBlPVwie3sgdHlwZSB9fVwiXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxpbnB1dCAjaW5wdXRcbiAgICAgICAgICAgICAgICpuZ0lmPVwibWFza1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cImV2by1pbnB1dF9fZmllbGRcIlxuICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoKVwiXG4gICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXG4gICAgICAgICAgICAgICB0eXBlPVwie3sgdHlwZSB9fVwiXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgW3RleHRNYXNrXT1cIm1hc2tcIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8taW5wdXRfX2FkZGl0aW9uYWxcIlxuICAgICAgICAgICAgICpuZ0lmPVwiaGFzQWRkaXRpb25hbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2by1pbnB1dF9fdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICpuZ0lmPVwidG9vbHRpcCB8fCBoYXNDdXN0b21Ub29sdGlwXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2hvd1Rvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhpZGVUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25Ub29sdGlwQ2xpY2soJGV2ZW50KVwiPj88L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhY3VzdG9tVG9vbHRpcENoZWNrZWQgfHwgdG9vbHRpcFNob3duXCJcbiAgICAgICAgICAgICBbaGlkZGVuXT1cIiFjdXN0b21Ub29sdGlwQ2hlY2tlZFwiXG4gICAgICAgICAgICAgKGNsaWNrKT1cIm9uVG9vbHRpcENsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNob3dUb29sdGlwKClcIlxuICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhpZGVUb29sdGlwKClcIlxuICAgICAgICAgICAgICN0b29sdGlwQ29udGFpbmVyXG4gICAgICAgICAgICAgW25nQ2xhc3NdPVwieydldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVyJzogdG9vbHRpcH1cIj5cbiAgICAgICAgICAgIHt7IHRvb2x0aXAgfX1cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0b29sdGlwXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbjwvZGl2PlxuPGV2by1jb250cm9sLWVycm9yICpuZ0lmPVwic2hvd0Vycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc01lc3NhZ2VzXT1cImVycm9yc01lc3NhZ2VzXCI+PC9ldm8tY29udHJvbC1lcnJvcj5cbmAsXG4gIHN0eWxlczogW2AuZXZvLWlucHV0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2hlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjQ4cHg7d2hpdGUtc3BhY2U6bm93cmFwO2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6NHB4O291dGxpbmU6MDt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzLGJvcmRlciAuM3N9LmV2by1pbnB1dF9fY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtib3JkZXItcmFkaXVzOjRweDtjdXJzb3I6dGV4dH0uZXZvLWlucHV0X2ZvY3VzZWR7Ym9yZGVyOjFweCBzb2xpZCAjNTQ2ZTdhO2JveC1zaGFkb3c6MCAwIDJweCAwICM1NDZlN2EhaW1wb3J0YW50fS5ldm8taW5wdXRfZGlzYWJsZWR7Y29sb3I6IzliOWI5YjtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjYhaW1wb3J0YW50fS5ldm8taW5wdXRfZGlzYWJsZWQgLmV2by1pbnB1dF9fY29udGFpbmVye2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfdmFsaWR7Ym9yZGVyLWNvbG9yOiM4YmMzNGF9LmV2by1pbnB1dF9pbnZhbGlke2JvcmRlci1jb2xvcjojZjIyfS5ldm8taW5wdXRfX2ZpZWxke2ZsZXgtZ3JvdzoxO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowIDIwcHg7Y29sb3I6IzAwMDtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE2cHg7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo0cHg7b3V0bGluZTowfS5ldm8taW5wdXRfX2ZpZWxkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5YjtvcGFjaXR5OjF9LmV2by1pbnB1dF9fZmllbGQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6ZGlzYWJsZWR7Y29sb3I6IzliOWI5YjtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjYhaW1wb3J0YW50fS5ldm8taW5wdXRfX2ZpZWxkOm5vdCg6bGFzdC1jaGlsZCl7cGFkZGluZy1yaWdodDowfS5ldm8taW5wdXRfX3Rvb2x0aXB7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWFyZ2luOjAgMTBweDtjb2xvcjojNTQ2ZTdhO2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MThweDtmb250LWZhbWlseTpPcGVuU2FucyxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZWNlZmYxO2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpwb2ludGVyfS5ldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDpjYWxjKDEwMCUgLSAycHgpO2xlZnQ6MDt6LWluZGV4OjE7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7cGFkZGluZzoxMHB4IDEwcHggMTBweCAyMHB4O2NvbG9yOiMyMTIxMjE7bGluZS1oZWlnaHQ6bm9ybWFsO3doaXRlLXNwYWNlOm5vcm1hbDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY4ZTY7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzowIDRweCAxMnB4IDAgcmdiYSgwLDAsMCwuMik7Y3Vyc29yOmRlZmF1bHR9LmV2by1pbnB1dF9fdG9vbHRpcC1jb250YWluZXJbaGlkZGVuXXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5ldm8taW5wdXRfX3Rvb2x0aXAtY29udGFpbmVyOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwcHg7bGVmdDpjYWxjKDEwMCUgLSAzNHB4KTtib3JkZXI6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2ZmZjhlNjtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6Jyd9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZXZvLWlucHV0X190b29sdGlwLWNvbnRhaW5lcntsZWZ0OmNhbGMoNTAlIC0gMjJweCl9LmV2by1pbnB1dF9fdG9vbHRpcC1jb250YWluZXI6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjBweDtsZWZ0OmNhbGMoNTAlIC0gMTJweCk7Ym9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNmZmY4ZTY7Y29udGVudDonJ319YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZvSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBASW5wdXQoKSBtYXNrOiBhbnk7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCd2YWx1ZScpIF92YWx1ZTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXRFbGVtZW50O1xuICBAVmlld0NoaWxkKCd0b29sdGlwQ29udGFpbmVyJykgdG9vbHRpcEVsZW1lbnQ7XG5cbiAgY3VzdG9tVG9vbHRpcENoZWNrZWQgPSBmYWxzZTtcbiAgaGFzQ3VzdG9tVG9vbHRpcCA9IGZhbHNlO1xuICB0b29sdGlwU2hvd24gPSBmYWxzZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBwcml2YXRlIHRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tDdXN0b21Ub29sdGlwKCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSB8fCB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpbnB1dENsYXNzKCk6IHtbY3NzQ2xhc3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2ZvY3VzZWQnOiB0aGlzLmZvY3VzZWQsXG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgJ3ZhbGlkJzogdGhpcy5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy52YWxpZF0sXG4gICAgICAnaW52YWxpZCc6IHRoaXMuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF0sXG4gICAgfTtcbiAgfVxuXG4gIGdldCBoYXNBZGRpdGlvbmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudG9vbHRpcCB8fCB0aGlzLmhhc0N1c3RvbVRvb2x0aXA7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHN0YXRlO1xuICB9XG5cbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdCgpO1xuICB9XG5cbiAgb25Ub29sdGlwQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBoaWRlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCkge1xuICAgICAgICB0aGlzLnRvb2x0aXBTaG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIDI1KTtcbiAgfVxuXG4gIHNob3dUb29sdGlwKCkge1xuICAgIHRoaXMudG9vbHRpcFNob3duID0gdHJ1ZTtcbiAgICB0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0N1c3RvbVRvb2x0aXAoKSB7XG4gICAgdGhpcy5oYXNDdXN0b21Ub29sdGlwID0gdGhpcy50b29sdGlwRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcEVsZW1lbnQubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcEVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuY3VzdG9tVG9vbHRpcENoZWNrZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=