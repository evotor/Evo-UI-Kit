/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
/** @enum {string} */
const EvoButtonSizes = {
    fullWidth: 'full-width',
    small: 'small',
    large: 'large',
};
export { EvoButtonSizes };
/** @enum {string} */
const EvoButtonStyles = {
    lined: 'lined',
    darkblue: 'darkblue',
    darkblueLined: 'darkblue-lined',
    green: 'green',
    greenlined: 'green-lined',
    purple: 'purple',
};
export { EvoButtonStyles };
export class EvoButtonComponent {
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
function EvoButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoButtonComponent.prototype.color;
    /** @type {?} */
    EvoButtonComponent.prototype.disabled;
    /** @type {?} */
    EvoButtonComponent.prototype.size;
    /** @type {?} */
    EvoButtonComponent.prototype._loading;
    /** @type {?} */
    EvoButtonComponent.prototype.clientWidth;
    /** @type {?} */
    EvoButtonComponent.prototype.elRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXZvLWJ1dHRvbi9ldm8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7ZUFHdEUsWUFBWTtXQUNoQixPQUFPO1dBQ1AsT0FBTzs7Ozs7V0FJUCxPQUFPO2NBQ0osVUFBVTttQkFDTCxnQkFBZ0I7V0FDeEIsT0FBTztnQkFDRixhQUFhO1lBQ2pCLFFBQVE7OztBQW1CckIsTUFBTTs7OztJQVFGLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7d0JBTmpCLEtBQUs7d0JBR04sS0FBSztLQUt2Qjs7OztJQUVELElBQUksWUFBWTtRQUNaLHVCQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFFN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QjtRQUVELE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDbEI7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDWCx1QkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWxCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQztTQUM3QztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Ozs7SUFFRCxJQUFJLE9BQU87UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxJQUFhLE9BQU8sQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDekI7OztZQW5FSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7OztDQVViO2dCQUNHLE1BQU0sRUFBRSxDQUFDLCtoR0FBK2hHLENBQUM7Z0JBQ3ppRyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDs7OztZQWhDNEMsVUFBVTs7O29CQWtDbEQsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBNkNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBFdm9CdXR0b25TaXplcyB7XG4gICAgZnVsbFdpZHRoID0gJ2Z1bGwtd2lkdGgnLFxuICAgIHNtYWxsID0gJ3NtYWxsJyxcbiAgICBsYXJnZSA9ICdsYXJnZScsXG59XG5cbmV4cG9ydCBlbnVtIEV2b0J1dHRvblN0eWxlcyB7XG4gICAgbGluZWQgPSAnbGluZWQnLFxuICAgIGRhcmtibHVlID0gJ2RhcmtibHVlJyxcbiAgICBkYXJrYmx1ZUxpbmVkID0gJ2RhcmtibHVlLWxpbmVkJyxcbiAgICBncmVlbiA9ICdncmVlbicsXG4gICAgZ3JlZW5saW5lZCA9ICdncmVlbi1saW5lZCcsXG4gICAgcHVycGxlID0gJ3B1cnBsZSdcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJldm8tYnV0dG9uXCIgW2V2b1VpQ2xhc3NdPVwidG90YWxDbGFzc2VzXCIgW25nU3R5bGVdPVwidG90YWxTdHlsZXNcIj5cbiAgICA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJldm8tYnV0dG9uX19kb3RzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2BALXdlYmtpdC1rZXlmcmFtZXMgZnh7NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZnh7NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fS5ldm8tYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MCAzMHB4O2hlaWdodDo0NHB4O2xpbmUtaGVpZ2h0OjQ0cHg7dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQtaW1hZ2U6bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6bXVzZW8sQXJpYWwsc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjE2cHg7Y29sb3I6I2ZmZjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyLXJhZGl1czozMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMDtib3JkZXI6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3MsY29sb3IgLjNzLGJvcmRlciAuM3N9LmV2by1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY5ZDQ3O2NvbG9yOiNmZmZ9LmV2by1idXR0b246YWN0aXZlLC5ldm8tYnV0dG9uOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2NjNjAwMDtjb2xvcjojZmZmO291dGxpbmU6MH0uZXZvLWJ1dHRvbjpkaXNhYmxlZCwuZXZvLWJ1dHRvbl9kaXNhYmxlZHtiYWNrZ3JvdW5kOiNkNmQ2ZDYhaW1wb3J0YW50O2JvcmRlci1jb2xvcjojZDZkNmQ2IWltcG9ydGFudDtjb2xvcjojZmZmIWltcG9ydGFudDtjdXJzb3I6bm90LWFsbG93ZWR9LmV2by1idXR0b25fbGluZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiNmZjc4MDA7Ym9yZGVyOjFweCBzb2xpZCAjZmY3ODAwfS5ldm8tYnV0dG9uX2xpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmNzgwMDtjb2xvcjojZmZmfS5ldm8tYnV0dG9uX2xpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9saW5lZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjYzYwMDA7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2NjNjAwMH0uZXZvLWJ1dHRvbl9kYXJrYmx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiM1NDZlN2F9LmV2by1idXR0b25fZGFya2JsdWU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNzU5NmE1fS5ldm8tYnV0dG9uX2RhcmtibHVlOmFjdGl2ZSwuZXZvLWJ1dHRvbl9kYXJrYmx1ZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzl9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiM1NDZlN2E7Ym9yZGVyOjFweCBzb2xpZCAjNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzU0NmU3YTtjb2xvcjojZmZmfS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzk7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6IzI4MzIzOX0uZXZvLWJ1dHRvbl9ncmVlbntiYWNrZ3JvdW5kLWNvbG9yOiM4YmMzNGF9LmV2by1idXR0b25fZ3JlZW46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYTJjZjZlfS5ldm8tYnV0dG9uX2dyZWVuOmFjdGl2ZSwuZXZvLWJ1dHRvbl9ncmVlbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2J9LmV2by1idXR0b25fZ3JlZW4tbGluZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiM4YmMzNGE7Ym9yZGVyOjFweCBzb2xpZCAjOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzhiYzM0YTtjb2xvcjojZmZmfS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2I7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6IzZmOWMzYn0uZXZvLWJ1dHRvbl9wdXJwbGV7YmFja2dyb3VuZC1jb2xvcjojYWI0YWMzfS5ldm8tYnV0dG9uX3B1cnBsZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjYzU4ZTh9LmV2by1idXR0b25fcHVycGxlOmFjdGl2ZSwuZXZvLWJ1dHRvbl9wdXJwbGU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojOTMzNWFifS5ldm8tYnV0dG9uX2Z1bGwtd2lkdGh7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn0uZXZvLWJ1dHRvbl9zbWFsbHtwYWRkaW5nOjAgMjBweDtoZWlnaHQ6MzBweDtsaW5lLWhlaWdodDozMHB4O2ZvbnQtc2l6ZToxNHB4fS5ldm8tYnV0dG9uX2xhcmdle3BhZGRpbmc6MCA0MHB4O2hlaWdodDo2MHB4O2xpbmUtaGVpZ2h0OjYwcHg7Zm9udC1zaXplOjE4cHh9LmV2by1idXR0b25faWNvbntwYWRkaW5nLWxlZnQ6MjJweDtwYWRkaW5nLXJpZ2h0OjIycHg7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9LmV2by1idXR0b25fbG9hZGluZ3twb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOnJlbGF0aXZlfS5ldm8tYnV0dG9uX19kb3Rze3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTMwcHg7bWFyZ2luLXRvcDotNXB4fS5ldm8tYnV0dG9uX19kb3R7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjUwJTtmbG9hdDpsZWZ0O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO21hcmdpbjowIDVweDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC1hbmltYXRpb246MXMgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIGluZmluaXRlIGZ4fS5ldm8tYnV0dG9uX19kb3Q6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uOjFzIC4zcyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgLjNzIGluZmluaXRlIGZ4fS5ldm8tYnV0dG9uX19kb3Q6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uOjFzIC42cyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgLjZzIGluZmluaXRlIGZ4fWBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEV2b0J1dHRvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY29sb3I6IEV2b0J1dHRvblN0eWxlcztcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNpemU6IEV2b0J1dHRvblNpemVzO1xuXG4gICAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2xpZW50V2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcblxuICAgIH1cblxuICAgIGdldCB0b3RhbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBjbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBnZXQgdG90YWxTdHlsZXMoKToge1tzdHlsZUtleTogc3RyaW5nXTogYW55fSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXN1bHRbJ3dpZHRoJ10gPSBgJHt0aGlzLmNsaWVudFdpZHRofXB4YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuY2xpZW50V2lkdGggPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZTtcbiAgICB9XG59XG4iXX0=