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
                    template: "<span class=\"header\" [ngClass]=\"{\n  'header_orange': color==='white',\n  'header_h1': size==='h1',\n  'header_h2': size==='h2',\n  'header_h3': size==='h3',\n  'header_h4': size==='h4'\n}\">\n  <ng-content></ng-content>\n</span>",
                    styles: [".header{font-family:museo,Arial,sans-serif;font-weight:700;color:#333f48;display:block}.header_h1{font-size:30px;line-height:38px}@media (min-width:768px){.header_h1{font-size:36px;line-height:44px}}.header_h2{font-size:24px;line-height:32px}@media (min-width:768px){.header_h2{font-size:30px;line-height:38px}}.header_h3{font-size:18px;line-height:26px}@media (min-width:768px){.header_h3{font-size:24px;line-height:32px}}.header_h4{font-size:14px;line-height:22px}@media (min-width:768px){.header_h4{font-size:18px;line-height:26px}}.header_orange{color:#fff}"]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXZvLWhlYWRlci9ldm8taGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBb0J2RDtvQkFIMkMsSUFBSTtLQUc5Qjs7OztJQUVqQixxQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDBPQVFKO29CQUNOLE1BQU0sRUFBRSxDQUFDLG1qQkFBbWpCLENBQUM7aUJBQzlqQjs7Ozs7dUJBR0UsS0FBSzt3QkFDTCxLQUFLOzs2QkFsQlI7O1NBZWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwiaGVhZGVyXCIgW25nQ2xhc3NdPVwie1xuICAnaGVhZGVyX29yYW5nZSc6IGNvbG9yPT09J3doaXRlJyxcbiAgJ2hlYWRlcl9oMSc6IHNpemU9PT0naDEnLFxuICAnaGVhZGVyX2gyJzogc2l6ZT09PSdoMicsXG4gICdoZWFkZXJfaDMnOiBzaXplPT09J2gzJyxcbiAgJ2hlYWRlcl9oNCc6IHNpemU9PT0naDQnXG59XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLmhlYWRlcntmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzMzZjQ4O2Rpc3BsYXk6YmxvY2t9LmhlYWRlcl9oMXtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuaGVhZGVyX2gxe2ZvbnQtc2l6ZTozNnB4O2xpbmUtaGVpZ2h0OjQ0cHh9fS5oZWFkZXJfaDJ7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MzJweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmhlYWRlcl9oMntmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4fX0uaGVhZGVyX2gze2ZvbnQtc2l6ZToxOHB4O2xpbmUtaGVpZ2h0OjI2cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5oZWFkZXJfaDN7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MzJweH19LmhlYWRlcl9oNHtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMnB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuaGVhZGVyX2g0e2ZvbnQtc2l6ZToxOHB4O2xpbmUtaGVpZ2h0OjI2cHh9fS5oZWFkZXJfb3Jhbmdle2NvbG9yOiNmZmZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzaXplOiAnaDEnIHwgJ2gyJyB8ICdoMycgfCAnaDQnID0gJ2gxJztcbiAgQElucHV0KCkgY29sb3I6ICd3aGl0ZScgfCAnYmxhY2snO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19