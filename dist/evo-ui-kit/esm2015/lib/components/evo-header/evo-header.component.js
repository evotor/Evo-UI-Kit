/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class EvoHeaderComponent {
    constructor() {
        this.size = 'h1';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EvoHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-header',
                template: `<span class="evo-header" [ngClass]="{
  'evo-header_white': color==='white',
  'evo-header_h1': size==='h1',
  'evo-header_h2': size==='h2',
  'evo-header_h3': size==='h3',
  'evo-header_h4': size==='h4'
}">
  <ng-content></ng-content>
</span>`,
                styles: [`.evo-header{font-family:museo,Arial,sans-serif;font-weight:700;color:#333f48;display:block}.evo-header_h1{font-size:30px;line-height:38px}@media (min-width:768px){.evo-header_h1{font-size:36px;line-height:44px}}.evo-header_h2{font-size:24px;line-height:32px}@media (min-width:768px){.evo-header_h2{font-size:30px;line-height:38px}}.evo-header_h3{font-size:18px;line-height:26px}@media (min-width:768px){.evo-header_h3{font-size:24px;line-height:32px}}.evo-header_h4{font-size:14px;line-height:22px}@media (min-width:768px){.evo-header_h4{font-size:18px;line-height:26px}}.evo-header_white{color:#fff}`]
            },] },
];
/** @nocollapse */
EvoHeaderComponent.ctorParameters = () => [];
EvoHeaderComponent.propDecorators = {
    size: [{ type: Input }],
    color: [{ type: Input }]
};
function EvoHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoHeaderComponent.prototype.size;
    /** @type {?} */
    EvoHeaderComponent.prototype.color;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXZvLWhlYWRlci9ldm8taGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFlekQsTUFBTTtJQUtKO29CQUgyQyxJQUFJO0tBRzlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7OztRQVFKO2dCQUNOLE1BQU0sRUFBRSxDQUFDLDBsQkFBMGxCLENBQUM7YUFDcm1COzs7OzttQkFHRSxLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJldm8taGVhZGVyXCIgW25nQ2xhc3NdPVwie1xuICAnZXZvLWhlYWRlcl93aGl0ZSc6IGNvbG9yPT09J3doaXRlJyxcbiAgJ2V2by1oZWFkZXJfaDEnOiBzaXplPT09J2gxJyxcbiAgJ2V2by1oZWFkZXJfaDInOiBzaXplPT09J2gyJyxcbiAgJ2V2by1oZWFkZXJfaDMnOiBzaXplPT09J2gzJyxcbiAgJ2V2by1oZWFkZXJfaDQnOiBzaXplPT09J2g0J1xufVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L3NwYW4+YCxcbiAgc3R5bGVzOiBbYC5ldm8taGVhZGVye2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMzMzNmNDg7ZGlzcGxheTpibG9ja30uZXZvLWhlYWRlcl9oMXtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLWhlYWRlcl9oMXtmb250LXNpemU6MzZweDtsaW5lLWhlaWdodDo0NHB4fX0uZXZvLWhlYWRlcl9oMntmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDozMnB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLWhlYWRlcl9oMntmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozOHB4fX0uZXZvLWhlYWRlcl9oM3tmb250LXNpemU6MThweDtsaW5lLWhlaWdodDoyNnB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLWhlYWRlcl9oM3tmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDozMnB4fX0uZXZvLWhlYWRlcl9oNHtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMnB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLWhlYWRlcl9oNHtmb250LXNpemU6MThweDtsaW5lLWhlaWdodDoyNnB4fX0uZXZvLWhlYWRlcl93aGl0ZXtjb2xvcjojZmZmfWBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2l6ZTogJ2gxJyB8ICdoMicgfCAnaDMnIHwgJ2g0JyA9ICdoMSc7XG4gIEBJbnB1dCgpIGNvbG9yOiAnd2hpdGUnIHwgJ2JsYWNrJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==