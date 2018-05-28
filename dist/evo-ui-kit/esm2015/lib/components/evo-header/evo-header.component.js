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
                template: `<span class="header" [ngClass]="{
  'header_orange': color==='white',
  'header_h1': size==='h1',
  'header_h2': size==='h2',
  'header_h3': size==='h3',
  'header_h4': size==='h4'
}">
  <ng-content></ng-content>
</span>`,
                styles: [`.header{font-family:museo,Arial,sans-serif;font-weight:700;color:#333f48;display:block}.header_h1{font-size:30px;line-height:38px}@media (min-width:768px){.header_h1{font-size:36px;line-height:44px}}.header_h2{font-size:24px;line-height:32px}@media (min-width:768px){.header_h2{font-size:30px;line-height:38px}}.header_h3{font-size:18px;line-height:26px}@media (min-width:768px){.header_h3{font-size:24px;line-height:32px}}.header_h4{font-size:14px;line-height:22px}@media (min-width:768px){.header_h4{font-size:18px;line-height:26px}}.header_orange{color:#fff}`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXZvLWhlYWRlci9ldm8taGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFlekQsTUFBTTtJQUtKO29CQUgyQyxJQUFJO0tBRzlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7OztRQVFKO2dCQUNOLE1BQU0sRUFBRSxDQUFDLG1qQkFBbWpCLENBQUM7YUFDOWpCOzs7OzttQkFHRSxLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJoZWFkZXJcIiBbbmdDbGFzc109XCJ7XG4gICdoZWFkZXJfb3JhbmdlJzogY29sb3I9PT0nd2hpdGUnLFxuICAnaGVhZGVyX2gxJzogc2l6ZT09PSdoMScsXG4gICdoZWFkZXJfaDInOiBzaXplPT09J2gyJyxcbiAgJ2hlYWRlcl9oMyc6IHNpemU9PT0naDMnLFxuICAnaGVhZGVyX2g0Jzogc2l6ZT09PSdoNCdcbn1cIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9zcGFuPmAsXG4gIHN0eWxlczogW2AuaGVhZGVye2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMzMzNmNDg7ZGlzcGxheTpibG9ja30uaGVhZGVyX2gxe2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjM4cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5oZWFkZXJfaDF7Zm9udC1zaXplOjM2cHg7bGluZS1oZWlnaHQ6NDRweH19LmhlYWRlcl9oMntmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDozMnB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuaGVhZGVyX2gye2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjM4cHh9fS5oZWFkZXJfaDN7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MjZweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmhlYWRlcl9oM3tmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDozMnB4fX0uaGVhZGVyX2g0e2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjIycHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5oZWFkZXJfaDR7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MjZweH19LmhlYWRlcl9vcmFuZ2V7Y29sb3I6I2ZmZn1gXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9IZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNpemU6ICdoMScgfCAnaDInIHwgJ2gzJyB8ICdoNCcgPSAnaDEnO1xuICBASW5wdXQoKSBjb2xvcjogJ3doaXRlJyB8ICdibGFjayc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=