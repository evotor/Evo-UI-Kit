/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
/** @enum {string} */
var EvoButtonSizes = {
    small: 'small',
    large: 'large',
};
export { EvoButtonSizes };
/** @enum {string} */
var EvoButtonStyles = {
    lined: 'lined',
    darkblue: 'darkblue',
    darkblueLined: 'darkblue-lined',
    green: 'green',
    greenlined: 'green-lined',
    purple: 'purple',
};
export { EvoButtonStyles };
var EvoButtonComponent = /** @class */ (function () {
    function EvoButtonComponent(elRef) {
        this.elRef = elRef;
        this._disabled = false;
        this._loading = false;
    }
    Object.defineProperty(EvoButtonComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
            if (!this.loading) {
                this.elRef.nativeElement.disabled = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvoButtonComponent.prototype, "loading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = value;
            if (!this.disabled) {
                this.elRef.nativeElement.disabled = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvoButtonComponent.prototype, "totalClasses", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ classes = [];
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvoButtonComponent.prototype, "totalStyles", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ result = {};
            if (this.loading) {
                result['visibility'] = 'hidden';
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    EvoButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-button, button[evo-button]',
                    template: "<div class=\"evo-button\" [evoUiClass]=\"totalClasses\">\n    <span [ngStyle]=\"totalStyles\">\n        <ng-content></ng-content>\n    </span>\n    <span *ngIf=\"loading\" class=\"evo-button__dots\">\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n        <span class=\"evo-button__dot\"></span>\n    </span>\n</div>\n",
                    styles: ["@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}:host{display:inline-block;margin:0;padding:0;vertical-align:top;background:0 0;border:0;outline:0}.evo-button{min-width:100px;height:44px;padding:0 30px;color:#fff;font-weight:700;font-size:16px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:44px;white-space:nowrap;text-align:center;text-transform:uppercase;vertical-align:middle;background:#ff7800;border:none;border-radius:30px;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-button:hover{color:#fff;background-color:#ff9d47}.evo-button:active,.evo-button:focus{color:#fff;background-color:#cc6000;outline:0}.evo-button:disabled,.evo-button_disabled{color:#fff!important;background:#d6d6d6!important;border-color:#d6d6d6!important;pointer-events:none}.evo-button_lined{color:#ff7800;background-color:#fff;border:1px solid #ff7800}.evo-button_lined:hover{color:#fff;background-color:#ff7800}.evo-button_lined:active,.evo-button_lined:focus{color:#fff;background-color:#cc6000;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{color:#546e7a;background-color:#fff;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{color:#fff;background-color:#546e7a}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{color:#fff;background-color:#283239;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{color:#8bc34a;background-color:#fff;border:1px solid #8bc34a}.evo-button_green-lined:hover{color:#fff;background-color:#8bc34a}.evo-button_green-lined:active,.evo-button_green-lined:focus{color:#fff;background-color:#6f9c3b;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_small{min-width:75px;height:30px;padding:0 20px;font-size:14px;line-height:30px}.evo-button_large{min-width:125px;height:60px;padding:0 40px;font-size:18px;line-height:60px}.evo-button_icon{display:inline-flex;align-items:center;padding-right:22px;padding-left:22px}.evo-button_loading{position:relative;pointer-events:none}.evo-button__dots{position:absolute;top:50%;left:50%;margin-top:-5px;margin-left:-30px}.evo-button__dot{float:left;width:10px;height:10px;margin:0 5px;background:currentColor;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    EvoButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    EvoButtonComponent.propDecorators = {
        color: [{ type: Input }],
        size: [{ type: Input }],
        disabled: [{ type: Input }],
        loading: [{ type: Input }]
    };
    return EvoButtonComponent;
}());
export { EvoButtonComponent };
function EvoButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoButtonComponent.prototype.color;
    /** @type {?} */
    EvoButtonComponent.prototype.size;
    /** @type {?} */
    EvoButtonComponent.prototype._disabled;
    /** @type {?} */
    EvoButtonComponent.prototype._loading;
    /** @type {?} */
    EvoButtonComponent.prototype.elRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXZvLWJ1dHRvbi9ldm8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7V0FHMUUsT0FBTztXQUNQLE9BQU87Ozs7O1dBSVAsT0FBTztjQUNKLFVBQVU7bUJBQ0wsZ0JBQWdCO1dBQ3hCLE9BQU87Z0JBQ0YsYUFBYTtZQUNqQixRQUFROzs7O0lBd0NqQiw0QkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTt5QkFIakIsS0FBSzt3QkFDTixLQUFLO0tBRWtCO0lBbEIxQyxzQkFBYSx3Q0FBUTs7OztRQW9CckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6Qjs7Ozs7UUF0QkQsVUFBc0IsS0FBYztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV2QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1NBQ0o7OztPQUFBO0lBQ0Qsc0JBQWEsdUNBQU87Ozs7UUFpQnBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEI7Ozs7O1FBbkJELFVBQXFCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFFdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUM3QztTQUNKOzs7T0FBQTtJQWVELHNCQUFJLDRDQUFZOzs7O1FBQWhCO1lBQ0kscUJBQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztZQUU3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDWixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjtZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzVCO1lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNsQjs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBVzs7OztRQUFmO1lBQ0kscUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQ25DO1lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNqQjs7O09BQUE7O2dCQTdFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsUUFBUSxFQUFFLG1YQVViO29CQUNHLE1BQU0sRUFBRSxDQUFDLHFsR0FBcWxHLENBQUM7b0JBQy9sRyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDbEQ7Ozs7Z0JBL0I0QyxVQUFVOzs7d0JBaUNsRCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFPTCxLQUFLOzs2QkExQ1Y7O1NBZ0NhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIEV2b0J1dHRvblNpemVzIHtcbiAgICBzbWFsbCA9ICdzbWFsbCcsXG4gICAgbGFyZ2UgPSAnbGFyZ2UnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CdXR0b25TdHlsZXMge1xuICAgIGxpbmVkID0gJ2xpbmVkJyxcbiAgICBkYXJrYmx1ZSA9ICdkYXJrYmx1ZScsXG4gICAgZGFya2JsdWVMaW5lZCA9ICdkYXJrYmx1ZS1saW5lZCcsXG4gICAgZ3JlZW4gPSAnZ3JlZW4nLFxuICAgIGdyZWVubGluZWQgPSAnZ3JlZW4tbGluZWQnLFxuICAgIHB1cnBsZSA9ICdwdXJwbGUnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1idXR0b24sIGJ1dHRvbltldm8tYnV0dG9uXScsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXZvLWJ1dHRvblwiIFtldm9VaUNsYXNzXT1cInRvdGFsQ2xhc3Nlc1wiPlxuICAgIDxzcGFuIFtuZ1N0eWxlXT1cInRvdGFsU3R5bGVzXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJldm8tYnV0dG9uX19kb3RzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2BALXdlYmtpdC1rZXlmcmFtZXMgZnh7NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZnh7NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fTpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowO3BhZGRpbmc6MDt2ZXJ0aWNhbC1hbGlnbjp0b3A7YmFja2dyb3VuZDowIDA7Ym9yZGVyOjA7b3V0bGluZTowfS5ldm8tYnV0dG9ue21pbi13aWR0aDoxMDBweDtoZWlnaHQ6NDRweDtwYWRkaW5nOjAgMzBweDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MTZweDtmb250LWZhbWlseTpNdXNlb1NhbnNDeXJsLEFyaWFsLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6NDRweDt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtiYWNrZ3JvdW5kOiNmZjc4MDA7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czozMHB4O291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzLGNvbG9yIC4zcyxib3JkZXIgLjNzOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZXZvLWJ1dHRvbjpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2ZmOWQ0N30uZXZvLWJ1dHRvbjphY3RpdmUsLmV2by1idXR0b246Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNjYzYwMDA7b3V0bGluZTowfS5ldm8tYnV0dG9uOmRpc2FibGVkLC5ldm8tYnV0dG9uX2Rpc2FibGVke2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQ6I2Q2ZDZkNiFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOiNkNmQ2ZDYhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9LmV2by1idXR0b25fbGluZWR7Y29sb3I6I2ZmNzgwMDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZmY3ODAwfS5ldm8tYnV0dG9uX2xpbmVkOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZmY3ODAwfS5ldm8tYnV0dG9uX2xpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9saW5lZDpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2NjNjAwMDtib3JkZXItY29sb3I6I2NjNjAwMH0uZXZvLWJ1dHRvbl9kYXJrYmx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiM1NDZlN2F9LmV2by1idXR0b25fZGFya2JsdWU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNzU5NmE1fS5ldm8tYnV0dG9uX2RhcmtibHVlOmFjdGl2ZSwuZXZvLWJ1dHRvbl9kYXJrYmx1ZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiMyODMyMzl9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWR7Y29sb3I6IzU0NmU3YTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhfS5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZDpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzI4MzIzOTtib3JkZXItY29sb3I6IzI4MzIzOX0uZXZvLWJ1dHRvbl9ncmVlbntiYWNrZ3JvdW5kLWNvbG9yOiM4YmMzNGF9LmV2by1idXR0b25fZ3JlZW46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYTJjZjZlfS5ldm8tYnV0dG9uX2dyZWVuOmFjdGl2ZSwuZXZvLWJ1dHRvbl9ncmVlbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM2ZjljM2J9LmV2by1idXR0b25fZ3JlZW4tbGluZWR7Y29sb3I6IzhiYzM0YTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhfS5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmFjdGl2ZSwuZXZvLWJ1dHRvbl9ncmVlbi1saW5lZDpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzZmOWMzYjtib3JkZXItY29sb3I6IzZmOWMzYn0uZXZvLWJ1dHRvbl9wdXJwbGV7YmFja2dyb3VuZC1jb2xvcjojYWI0YWMzfS5ldm8tYnV0dG9uX3B1cnBsZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjYzU4ZTh9LmV2by1idXR0b25fcHVycGxlOmFjdGl2ZSwuZXZvLWJ1dHRvbl9wdXJwbGU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojOTMzNWFifS5ldm8tYnV0dG9uX3NtYWxse21pbi13aWR0aDo3NXB4O2hlaWdodDozMHB4O3BhZGRpbmc6MCAyMHB4O2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjMwcHh9LmV2by1idXR0b25fbGFyZ2V7bWluLXdpZHRoOjEyNXB4O2hlaWdodDo2MHB4O3BhZGRpbmc6MCA0MHB4O2ZvbnQtc2l6ZToxOHB4O2xpbmUtaGVpZ2h0OjYwcHh9LmV2by1idXR0b25faWNvbntkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLXJpZ2h0OjIycHg7cGFkZGluZy1sZWZ0OjIycHh9LmV2by1idXR0b25fbG9hZGluZ3twb3NpdGlvbjpyZWxhdGl2ZTtwb2ludGVyLWV2ZW50czpub25lfS5ldm8tYnV0dG9uX19kb3Rze3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLXRvcDotNXB4O21hcmdpbi1sZWZ0Oi0zMHB4fS5ldm8tYnV0dG9uX19kb3R7ZmxvYXQ6bGVmdDt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbjowIDVweDtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtib3JkZXItcmFkaXVzOjUwJTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC1hbmltYXRpb246MXMgaW5maW5pdGUgZng7YW5pbWF0aW9uOjFzIGluZmluaXRlIGZ4fS5ldm8tYnV0dG9uX19kb3Q6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uOjFzIC4zcyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgLjNzIGluZmluaXRlIGZ4fS5ldm8tYnV0dG9uX19kb3Q6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uOjFzIC42cyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgLjZzIGluZmluaXRlIGZ4fWBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9CdXR0b25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGNvbG9yOiBFdm9CdXR0b25TdHlsZXM7XG4gICAgQElucHV0KCkgc2l6ZTogRXZvQnV0dG9uU2l6ZXM7XG4gICAgQElucHV0KCkgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBJbnB1dCgpIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIGdldCBsb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgICB9XG5cbiAgICBnZXQgdG90YWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBnZXQgdG90YWxTdHlsZXMoKToge1tzdHlsZUtleTogc3RyaW5nXTogYW55fSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJlc3VsdFsndmlzaWJpbGl0eSddID0gJ2hpZGRlbic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==