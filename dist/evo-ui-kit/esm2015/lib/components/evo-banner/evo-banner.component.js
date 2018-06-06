/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Serializable } from '../../common/Serializable';
/** @enum {string} */
const EvoBannerTypes = {
    large: 'large',
    small: 'small',
    fullWidth: 'full-width',
};
export { EvoBannerTypes };
/** @enum {string} */
const EvoBannerLocations = {
    main: 'Main',
    category: 'Category',
};
export { EvoBannerLocations };
/**
 * @record
 */
export function IEvoBannerAnalytics() { }
function IEvoBannerAnalytics_tsickle_Closure_declarations() {
    /** @type {?} */
    IEvoBannerAnalytics.prototype.url;
    /** @type {?} */
    IEvoBannerAnalytics.prototype.data;
}
export class EvoBanner extends Serializable {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data);
        this.bannerPositionNames = {
            [EvoBannerLocations.main]: [
                'main',
                'top',
                'bottom'
            ],
            [EvoBannerLocations.category]: [
                'main'
            ]
        };
    }
}
function EvoBanner_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoBanner.prototype.background;
    /** @type {?} */
    EvoBanner.prototype.bannerPositionNames;
    /** @type {?} */
    EvoBanner.prototype.button;
    /** @type {?} */
    EvoBanner.prototype.id;
    /** @type {?} */
    EvoBanner.prototype.image;
    /** @type {?} */
    EvoBanner.prototype.title;
    /** @type {?} */
    EvoBanner.prototype.url;
}
const ɵ0 = window;
export class EvoBannerComponent {
    /**
     * @param {?} window
     */
    constructor(window) {
        this.window = window;
        this.type = EvoBannerTypes.small;
        this.bannerClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onBannerClick() {
        this.bannerClick.emit(this.banner);
    }
}
EvoBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-banner',
                template: `<a class="evo-banner"
   target="_blank"
   [attr.href]="banner?.url"
   (click)="onBannerClick()"
   [evoUiClass]="type"
   [ngStyle]="{'background-color': banner?.background}">
    <div class="evo-banner__content">
        <div class="evo-banner__title">{{ banner?.title }}</div>
        <button class="btn btn-white promo-btn"
                [ngStyle]="{'color': banner?.background}"
                *ngIf="banner?.button">{{ banner?.button }}</button>
    </div>
    <img class="evo-banner__img"
         src="{{ banner?.image }}"
         alt="{{ banner?.title }}">
</a>
`,
                styles: [`.evo-banner{display:block;position:relative;height:430px;padding:12px 20px;border-radius:6px;overflow:hidden;color:#fff;cursor:pointer;transition:box-shadow .3s}.evo-banner:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}.evo-banner__content{position:relative;z-index:2}.evo-banner__content .promo-btn{height:40px;padding:0 20px;min-width:156px;font-weight:600;font-size:14px;text-transform:uppercase;display:table-cell;vertical-align:middle}.evo-banner__content .promo-btn:hover{background:#fff}.evo-banner__content .promo-btn:active{box-shadow:none}.evo-banner__content .promo-btn span{font-size:18px}.evo-banner__title{font-family:museo,Arial,sans-serif;font-weight:700;line-height:1.3;font-size:30px;margin-bottom:10px}.evo-banner__description{font-size:14px;line-height:1.3;margin-top:20px;margin-bottom:10px}.evo-banner__img{position:absolute;bottom:0;right:0;width:290px;height:290px}.evo-banner_full-width{padding:20px}.evo-banner_full-width .evo-banner__title{line-height:38px}@media (min-width:768px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:60%}.evo-banner__description{max-width:250px}.evo-banner__img{width:430px;height:430px}.evo-banner_full-width{height:240px;padding:30px}.evo-banner_full-width .evo-banner__content{max-width:50%}.evo-banner_full-width .evo-banner__title{font-size:36px;line-height:44px}.evo-banner_full-width .evo-banner__img{height:240px;width:240px}}@media (min-width:1200px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:63%}.evo-banner_small{height:210px;padding:20px}.evo-banner_small .evo-banner__title{font-size:20px;margin-bottom:20px}.evo-banner_small .promo-btn{height:32px}.evo-banner_small .evo-banner__img{width:210px;height:210px}.evo-banner_full-width .evo-banner__content{max-width:63%}}`],
                providers: [
                    { provide: 'Window', useValue: ɵ0 }
                ],
            },] },
];
/** @nocollapse */
EvoBannerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['Window',] }] }
];
EvoBannerComponent.propDecorators = {
    banner: [{ type: Input }],
    type: [{ type: Input }],
    bannerClick: [{ type: Output }]
};
function EvoBannerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoBannerComponent.prototype.banner;
    /** @type {?} */
    EvoBannerComponent.prototype.type;
    /** @type {?} */
    EvoBannerComponent.prototype.bannerClick;
    /** @type {?} */
    EvoBannerComponent.prototype.window;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLWJhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXZvLWJhbm5lci9ldm8tYmFubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7V0FHL0MsT0FBTztXQUNQLE9BQU87ZUFDSCxZQUFZOzs7OztVQUlqQixNQUFNO2NBQ0YsVUFBVTs7Ozs7Ozs7Ozs7OztBQWN2QixNQUFNLGdCQUFpQixTQUFRLFlBQVk7Ozs7SUFrQnpDLFlBQVksSUFBSTtRQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzttQ0FqQlE7WUFDcEIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDekIsTUFBTTtnQkFDTixLQUFLO2dCQUNMLFFBQVE7YUFDVDtZQUNELENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzdCLE1BQU07YUFDUDtTQUNGO0tBU0E7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7V0F1Qm1DLE1BQU07QUFHMUMsTUFBTTs7OztJQU1KLFlBQzRCLE1BQVc7UUFBWCxXQUFNLEdBQU4sTUFBTSxDQUFLO29CQUxQLGNBQWMsQ0FBQyxLQUFLOzJCQUVILElBQUksWUFBWSxFQUFhO0tBSzdFOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHl1REFBeXVELENBQUM7Z0JBQ252RCxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHLFFBQVEsSUFBUSxFQUFFO2lCQUN6QzthQUNGOzs7OzRDQVFJLE1BQU0sU0FBQyxRQUFROzs7cUJBTmpCLEtBQUs7bUJBQ0wsS0FBSzswQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi9jb21tb24vU2VyaWFsaXphYmxlJztcblxuZXhwb3J0IGVudW0gRXZvQmFubmVyVHlwZXMge1xuICBsYXJnZSA9ICdsYXJnZScsXG4gIHNtYWxsID0gJ3NtYWxsJyxcbiAgZnVsbFdpZHRoID0gJ2Z1bGwtd2lkdGgnLFxufVxuXG5leHBvcnQgZW51bSBFdm9CYW5uZXJMb2NhdGlvbnMge1xuICBtYWluID0gJ01haW4nLFxuICBjYXRlZ29yeSA9ICdDYXRlZ29yeSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRXZvQmFubmVyQW5hbHl0aWNzIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGRhdGE6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjcmVhdGl2ZTogc3RyaW5nO1xuICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgZGltZW5zaW9uNz86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEV2b0Jhbm5lciBleHRlbmRzIFNlcmlhbGl6YWJsZSB7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgYmFubmVyUG9zaXRpb25OYW1lcyA9IHtcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLm1haW5dOiBbXG4gICAgICAnbWFpbicsXG4gICAgICAndG9wJyxcbiAgICAgICdib3R0b20nXG4gICAgXSxcbiAgICBbRXZvQmFubmVyTG9jYXRpb25zLmNhdGVnb3J5XTogW1xuICAgICAgJ21haW4nXG4gICAgXVxuICB9O1xuICBidXR0b246IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1iYW5uZXInLFxuICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwiZXZvLWJhbm5lclwiXG4gICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgW2F0dHIuaHJlZl09XCJiYW5uZXI/LnVybFwiXG4gICAoY2xpY2spPVwib25CYW5uZXJDbGljaygpXCJcbiAgIFtldm9VaUNsYXNzXT1cInR5cGVcIlxuICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tYmFubmVyX190aXRsZVwiPnt7IGJhbm5lcj8udGl0bGUgfX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2hpdGUgcHJvbW8tYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogYmFubmVyPy5iYWNrZ3JvdW5kfVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJiYW5uZXI/LmJ1dHRvblwiPnt7IGJhbm5lcj8uYnV0dG9uIH19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGltZyBjbGFzcz1cImV2by1iYW5uZXJfX2ltZ1wiXG4gICAgICAgICBzcmM9XCJ7eyBiYW5uZXI/LmltYWdlIH19XCJcbiAgICAgICAgIGFsdD1cInt7IGJhbm5lcj8udGl0bGUgfX1cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2AuZXZvLWJhbm5lcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo0MzBweDtwYWRkaW5nOjEycHggMjBweDtib3JkZXItcmFkaXVzOjZweDtvdmVyZmxvdzpoaWRkZW47Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzfS5ldm8tYmFubmVyOmhvdmVye2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4yKX0uZXZvLWJhbm5lcl9fY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bntoZWlnaHQ6NDBweDtwYWRkaW5nOjAgMjBweDttaW4td2lkdGg6MTU2cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246bWlkZGxlfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46aG92ZXJ7YmFja2dyb3VuZDojZmZmfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG46YWN0aXZle2JveC1zaGFkb3c6bm9uZX0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRuIHNwYW57Zm9udC1zaXplOjE4cHh9LmV2by1iYW5uZXJfX3RpdGxle2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuMztmb250LXNpemU6MzBweDttYXJnaW4tYm90dG9tOjEwcHh9LmV2by1iYW5uZXJfX2Rlc2NyaXB0aW9ue2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuMzttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWJvdHRvbToxMHB4fS5ldm8tYmFubmVyX19pbWd7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7cmlnaHQ6MDt3aWR0aDoyOTBweDtoZWlnaHQ6MjkwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aHtwYWRkaW5nOjIwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7bGluZS1oZWlnaHQ6MzhweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1iYW5uZXJ7cGFkZGluZzozMHB4IDQwcHh9LmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYwJX0uZXZvLWJhbm5lcl9fZGVzY3JpcHRpb257bWF4LXdpZHRoOjI1MHB4fS5ldm8tYmFubmVyX19pbWd7d2lkdGg6NDMwcHg7aGVpZ2h0OjQzMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGh7aGVpZ2h0OjI0MHB4O3BhZGRpbmc6MzBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo1MCV9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1zaXplOjM2cHg7bGluZS1oZWlnaHQ6NDRweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19pbWd7aGVpZ2h0OjI0MHB4O3dpZHRoOjI0MHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5ldm8tYmFubmVye3BhZGRpbmc6MzBweCA0MHB4fS5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MyV9LmV2by1iYW5uZXJfc21hbGx7aGVpZ2h0OjIxMHB4O3BhZGRpbmc6MjBweH0uZXZvLWJhbm5lcl9zbWFsbCAuZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1zaXplOjIwcHg7bWFyZ2luLWJvdHRvbToyMHB4fS5ldm8tYmFubmVyX3NtYWxsIC5wcm9tby1idG57aGVpZ2h0OjMycHh9LmV2by1iYW5uZXJfc21hbGwgLmV2by1iYW5uZXJfX2ltZ3t3aWR0aDoyMTBweDtoZWlnaHQ6MjEwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aCAuZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjMlfX1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiAnV2luZG93JywgIHVzZVZhbHVlOiB3aW5kb3cgfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9CYW5uZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBiYW5uZXI6IEV2b0Jhbm5lcjtcbiAgQElucHV0KCkgdHlwZTogRXZvQmFubmVyVHlwZXMgPSBFdm9CYW5uZXJUeXBlcy5zbWFsbDtcblxuICBAT3V0cHV0KCkgYmFubmVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdm9CYW5uZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnV2luZG93JykgcHJpdmF0ZSB3aW5kb3c6IGFueSxcbiAgKSB7XG4gIH1cblxuICBvbkJhbm5lckNsaWNrKCkge1xuICAgIHRoaXMuYmFubmVyQ2xpY2suZW1pdCh0aGlzLmJhbm5lcik7XG4gIH1cbn1cbiJdfQ==