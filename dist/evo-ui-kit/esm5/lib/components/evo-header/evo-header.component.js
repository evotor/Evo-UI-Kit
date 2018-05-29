/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var EvoHeaderComponent = /** @class */ (function () {
    function EvoHeaderComponent() {
        this.size = 'h1';
    }
    /**
     * @return {?}
     */
    EvoHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    EvoHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-header',
                    template: "<span class=\"evo-header\" [ngClass]=\"{\n  'evo-header_white': color==='white',\n  'evo-header_h1': size==='h1',\n  'evo-header_h2': size==='h2',\n  'evo-header_h3': size==='h3',\n  'evo-header_h4': size==='h4'\n}\">\n  <ng-content></ng-content>\n</span>",
                    styles: [".evo-header{font-family:museo,Arial,sans-serif;font-weight:700;color:#333f48;display:block}.evo-header_h1{font-size:30px;line-height:38px}@media (min-width:768px){.evo-header_h1{font-size:36px;line-height:44px}}.evo-header_h2{font-size:24px;line-height:32px}@media (min-width:768px){.evo-header_h2{font-size:30px;line-height:38px}}.evo-header_h3{font-size:18px;line-height:26px}@media (min-width:768px){.evo-header_h3{font-size:24px;line-height:32px}}.evo-header_h4{font-size:14px;line-height:22px}@media (min-width:768px){.evo-header_h4{font-size:18px;line-height:26px}}.evo-header_white{color:#fff}"]
                },] },
    ];
    /** @nocollapse */
    EvoHeaderComponent.ctorParameters = function () { return []; };
    EvoHeaderComponent.propDecorators = {
        size: [{ type: Input }],
        color: [{ type: Input }]
    };
    return EvoHeaderComponent;
}());
export { EvoHeaderComponent };
function EvoHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoHeaderComponent.prototype.size;
    /** @type {?} */
    EvoHeaderComponent.prototype.color;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXZvLWhlYWRlci9ldm8taGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBb0J2RDtvQkFIMkMsSUFBSTtLQUc5Qjs7OztJQUVqQixxQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLGlRQVFKO29CQUNOLE1BQU0sRUFBRSxDQUFDLDBsQkFBMGxCLENBQUM7aUJBQ3JtQjs7Ozs7dUJBR0UsS0FBSzt3QkFDTCxLQUFLOzs2QkFsQlI7O1NBZWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwiZXZvLWhlYWRlclwiIFtuZ0NsYXNzXT1cIntcbiAgJ2V2by1oZWFkZXJfd2hpdGUnOiBjb2xvcj09PSd3aGl0ZScsXG4gICdldm8taGVhZGVyX2gxJzogc2l6ZT09PSdoMScsXG4gICdldm8taGVhZGVyX2gyJzogc2l6ZT09PSdoMicsXG4gICdldm8taGVhZGVyX2gzJzogc2l6ZT09PSdoMycsXG4gICdldm8taGVhZGVyX2g0Jzogc2l6ZT09PSdoNCdcbn1cIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9zcGFuPmAsXG4gIHN0eWxlczogW2AuZXZvLWhlYWRlcntmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzMzZjQ4O2Rpc3BsYXk6YmxvY2t9LmV2by1oZWFkZXJfaDF7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6MzhweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1oZWFkZXJfaDF7Zm9udC1zaXplOjM2cHg7bGluZS1oZWlnaHQ6NDRweH19LmV2by1oZWFkZXJfaDJ7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MzJweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1oZWFkZXJfaDJ7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6MzhweH19LmV2by1oZWFkZXJfaDN7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MjZweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1oZWFkZXJfaDN7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MzJweH19LmV2by1oZWFkZXJfaDR7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjJweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1oZWFkZXJfaDR7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MjZweH19LmV2by1oZWFkZXJfd2hpdGV7Y29sb3I6I2ZmZn1gXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9IZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNpemU6ICdoMScgfCAnaDInIHwgJ2gzJyB8ICdoNCcgPSAnaDEnO1xuICBASW5wdXQoKSBjb2xvcjogJ3doaXRlJyB8ICdibGFjayc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=