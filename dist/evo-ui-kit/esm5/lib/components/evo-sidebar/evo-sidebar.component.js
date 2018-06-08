/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent as observableFromEvent } from 'rxjs';
import { Key } from 'ts-keycode-enum';
import { EvoSidebarService, EvoSidebarTypes } from './evo-sidebar.service';
var EvoSidebarComponent = /** @class */ (function () {
    function EvoSidebarComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.onClose = new EventEmitter();
        this.states = {
            isVisible: false,
        };
    }
    /**
     * @return {?}
     */
    EvoSidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sidebarService.deregister(this.id);
    };
    /**
     * @return {?}
     */
    EvoSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sidebarService.register(this.id);
        this.sidebarService.isSidebarVisible$.subscribe(function (payload) {
            if (_this.id in payload) {
                _this.states.isVisible = payload[_this.id];
            }
            if (_this.states.isVisible) {
                _this.keyUpSubscription = _this.subscribeToKeyEvent();
            }
            else if (_this.keyUpSubscription) {
                _this.keyUpSubscription.unsubscribe();
                _this.keyUpSubscription = null;
            }
        });
    };
    /**
     * @return {?}
     */
    EvoSidebarComponent.prototype.closeSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarService.close(this.id);
        this.onClose.emit();
    };
    /**
     * @return {?}
     */
    EvoSidebarComponent.prototype.subscribeToKeyEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return observableFromEvent(document.body, 'keyup').subscribe(function (event) {
            if (event.keyCode === Key.Escape) {
                _this.sidebarService.close(_this.id);
            }
        });
    };
    EvoSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'evo-sidebar',
                    styles: [".evo-sidebar{position:fixed;top:0;left:120%;bottom:0;z-index:3000;display:flex;flex-direction:column;width:100%;background-color:#fff;box-shadow:0 0 12px rgba(0,0,0,.25)}@media (min-width:992px){.evo-sidebar{left:100%;margin-left:40px;width:674px;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}}.evo-sidebar_active{left:0}.evo-sidebar__header{display:flex;justify-content:space-between;align-items:flex-start;flex-shrink:0;border-bottom:1px solid #eceff1;padding:20px 0 8px;margin:0 15px}@media (min-width:992px){.evo-sidebar_active{left:100%;-webkit-transform:translateX(-714px);transform:translateX(-714px)}.evo-sidebar__header{margin:0 30px}}.evo-sidebar__title{font-family:museo,Arial,sans-serif;font-size:30px;font-weight:700;color:#333f48}@media (min-width:768px){.evo-sidebar__header{padding-top:38px}.evo-sidebar__title{font-size:30px;padding:0}}.evo-sidebar__close{padding:8px;transition:opacity .3s;margin:2px -8px 0 30px;cursor:pointer}.evo-sidebar__close:hover{opacity:.8}.evo-sidebar__close-icon{width:24px;height:24px;color:#546e7a;background:url(/assets/evo-ui-kit/icons/close.svg)}.evo-sidebar__content{display:flex;flex-direction:column;flex-grow:1;padding:20px 15px 40px;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (min-width:768px){.evo-sidebar__content{padding:40px 15px}}@media (min-width:992px){.evo-sidebar__content{padding:40px 30px}}.evo-sidebar__footer{display:flex;flex-direction:column;flex-shrink:0;padding:30px 15px;box-shadow:0 4px 12px rgba(0,0,0,.25);background-color:#fff}.evo-sidebar__footer:empty{display:none}@media (min-width:768px){.evo-sidebar__footer{flex-direction:row;justify-content:space-between;padding:18px 15px}}@media (min-width:992px){.evo-sidebar__footer{padding:18px 30px}}.evo-sidebar__buttons{display:flex;flex-direction:column;padding:30px 0 10px}.evo-sidebar__buttons_border{border-top:1px solid #eceff1;margin-top:50px}.evo-sidebar__button+.evo-sidebar__button{margin-top:20px}@media (min-width:768px){.evo-sidebar__buttons{flex-direction:row;justify-content:space-between;padding-bottom:0}.evo-sidebar__button+.evo-sidebar__button{margin-top:0}}"],
                    template: "<div class=\"fade-background fade-background_over-all\"\n     *ngIf=\"states.isVisible\"\n     (click)=\"closeSidebar()\"\n></div>\n\n<div class=\"evo-sidebar\" [ngClass]=\"{'evo-sidebar_active' : states.isVisible}\" >\n    <div class=\"evo-sidebar__header\">\n        <div class=\"evo-sidebar__title\">{{ title }}</div>\n\n        <div class=\"evo-sidebar__close\" (click)=\"sidebarService.close(id)\">\n            <div class=\"evo-sidebar__close-icon\"></div>\n        </div>\n    </div>\n\n\n    <div class=\"evo-sidebar__content\">\n        <ng-content select=\"[content]\"></ng-content>\n    </div>\n\n    <div class=\"evo-sidebar__footer\"><ng-content select=\"[footer]\"></ng-content></div> <!--\u0447\u0442\u043E\u0431\u044B :empty \u0440\u0430\u0431\u043E\u0442\u0430\u043B, \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438 evo-sidebar__footer \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0438\u0447\u0435\u0433\u043E, \u0434\u0430\u0436\u0435 \u043F\u0440\u043E\u0431\u0435\u043B\u0430-->\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    EvoSidebarComponent.ctorParameters = function () { return [
        { type: EvoSidebarService }
    ]; };
    EvoSidebarComponent.propDecorators = {
        id: [{ type: Input }],
        title: [{ type: Input }],
        onClose: [{ type: Output }]
    };
    return EvoSidebarComponent;
}());
export { EvoSidebarComponent };
function EvoSidebarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoSidebarComponent.prototype.id;
    /** @type {?} */
    EvoSidebarComponent.prototype.title;
    /** @type {?} */
    EvoSidebarComponent.prototype.onClose;
    /** @type {?} */
    EvoSidebarComponent.prototype.keyUpSubscription;
    /** @type {?} */
    EvoSidebarComponent.prototype.states;
    /** @type {?} */
    EvoSidebarComponent.prototype.sidebarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXZvLXVpLWtpdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V2by1zaWRlYmFyL2V2by1zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFnQixTQUFTLElBQUksbUJBQW1CLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUF3Q3ZFLDZCQUFtQixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7dUJBUGIsSUFBSSxZQUFZLEVBQU87c0JBR3JEO1lBQ0wsU0FBUyxFQUFFLEtBQUs7U0FDbkI7S0FFdUQ7Ozs7SUFFeEQseUNBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ3BELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QztZQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQ3ZEO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUNqQztTQUNKLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFTyxpREFBbUI7Ozs7O1FBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQW9CO1lBQzlFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QztTQUNKLENBQUMsQ0FBQzs7O2dCQXRFVixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLE1BQU0sRUFBRSxDQUFDLCtuRUFBK25FLENBQUM7b0JBQ3pvRSxRQUFRLEVBQUUsa2pDQXFCYjtpQkFDQTs7OztnQkE1QlEsaUJBQWlCOzs7cUJBOEJyQixLQUFLO3dCQUNMLEtBQUs7MEJBRUwsTUFBTTs7OEJBckNYOztTQWlDYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IGFzIG9ic2VydmFibGVGcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEtleSB9IGZyb20gJ3RzLWtleWNvZGUtZW51bSc7XG5cbmltcG9ydCB7IEV2b1NpZGViYXJTZXJ2aWNlLCBFdm9TaWRlYmFyVHlwZXMgfSBmcm9tICcuL2V2by1zaWRlYmFyLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLXNpZGViYXInLFxuICAgIHN0eWxlczogW2AuZXZvLXNpZGViYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDoxMjAlO2JvdHRvbTowO3otaW5kZXg6MzAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaGFkb3c6MCAwIDEycHggcmdiYSgwLDAsMCwuMjUpfUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJ7bGVmdDoxMDAlO21hcmdpbi1sZWZ0OjQwcHg7d2lkdGg6Njc0cHg7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuNXM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzO3RyYW5zaXRpb246dHJhbnNmb3JtIC41cywtd2Via2l0LXRyYW5zZm9ybSAuNXN9fS5ldm8tc2lkZWJhcl9hY3RpdmV7bGVmdDowfS5ldm8tc2lkZWJhcl9faGVhZGVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2ZsZXgtc2hyaW5rOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VjZWZmMTtwYWRkaW5nOjIwcHggMCA4cHg7bWFyZ2luOjAgMTVweH1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX2FjdGl2ZXtsZWZ0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNzE0cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC03MTRweCl9LmV2by1zaWRlYmFyX19oZWFkZXJ7bWFyZ2luOjAgMzBweH19LmV2by1zaWRlYmFyX190aXRsZXtmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzMzZjQ4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2hlYWRlcntwYWRkaW5nLXRvcDozOHB4fS5ldm8tc2lkZWJhcl9fdGl0bGV7Zm9udC1zaXplOjMwcHg7cGFkZGluZzowfX0uZXZvLXNpZGViYXJfX2Nsb3Nle3BhZGRpbmc6OHB4O3RyYW5zaXRpb246b3BhY2l0eSAuM3M7bWFyZ2luOjJweCAtOHB4IDAgMzBweDtjdXJzb3I6cG9pbnRlcn0uZXZvLXNpZGViYXJfX2Nsb3NlOmhvdmVye29wYWNpdHk6Ljh9LmV2by1zaWRlYmFyX19jbG9zZS1pY29ue3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7Y29sb3I6IzU0NmU3YTtiYWNrZ3JvdW5kOnVybCgvYXNzZXRzL2V2by11aS1raXQvaWNvbnMvY2xvc2Uuc3ZnKX0uZXZvLXNpZGViYXJfX2NvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWdyb3c6MTtwYWRkaW5nOjIwcHggMTVweCA0MHB4O292ZXJmbG93LXk6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19jb250ZW50e3BhZGRpbmc6NDBweCAxNXB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX19jb250ZW50e3BhZGRpbmc6NDBweCAzMHB4fX0uZXZvLXNpZGViYXJfX2Zvb3RlcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtc2hyaW5rOjA7cGFkZGluZzozMHB4IDE1cHg7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmV2by1zaWRlYmFyX19mb290ZXI6ZW1wdHl7ZGlzcGxheTpub25lfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2Zvb3RlcntmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZzoxOHB4IDE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfX2Zvb3RlcntwYWRkaW5nOjE4cHggMzBweH19LmV2by1zaWRlYmFyX19idXR0b25ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzozMHB4IDAgMTBweH0uZXZvLXNpZGViYXJfX2J1dHRvbnNfYm9yZGVye2JvcmRlci10b3A6MXB4IHNvbGlkICNlY2VmZjE7bWFyZ2luLXRvcDo1MHB4fS5ldm8tc2lkZWJhcl9fYnV0dG9uKy5ldm8tc2lkZWJhcl9fYnV0dG9ue21hcmdpbi10b3A6MjBweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19idXR0b25ze2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nLWJvdHRvbTowfS5ldm8tc2lkZWJhcl9fYnV0dG9uKy5ldm8tc2lkZWJhcl9fYnV0dG9ue21hcmdpbi10b3A6MH19YF0sXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZmFkZS1iYWNrZ3JvdW5kIGZhZGUtYmFja2dyb3VuZF9vdmVyLWFsbFwiXG4gICAgICpuZ0lmPVwic3RhdGVzLmlzVmlzaWJsZVwiXG4gICAgIChjbGljayk9XCJjbG9zZVNpZGViYXIoKVwiXG4+PC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJldm8tc2lkZWJhclwiIFtuZ0NsYXNzXT1cInsnZXZvLXNpZGViYXJfYWN0aXZlJyA6IHN0YXRlcy5pc1Zpc2libGV9XCIgPlxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9faGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fY2xvc2VcIiAoY2xpY2spPVwic2lkZWJhclNlcnZpY2UuY2xvc2UoaWQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2Nsb3NlLWljb25cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2Zvb3RlclwiPjxuZy1jb250ZW50IHNlbGVjdD1cIltmb290ZXJdXCI+PC9uZy1jb250ZW50PjwvZGl2PiA8IS0t0YfRgtC+0LHRiyA6ZW1wdHkg0YDQsNCx0L7RgtCw0LssINC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINCy0L3Rg9GC0YDQuCBldm8tc2lkZWJhcl9fZm9vdGVyINCy0L7QvtCx0YnQtSDQvdC40YfQtdCz0L4sINC00LDQttC1INC/0YDQvtCx0LXQu9CwLS0+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEV2b1NpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gICAgQElucHV0KCkgaWQ6IEV2b1NpZGViYXJUeXBlcztcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBrZXlVcFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHN0YXRlcyA9IHtcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHNpZGViYXJTZXJ2aWNlOiBFdm9TaWRlYmFyU2VydmljZSkge31cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmRlcmVnaXN0ZXIodGhpcy5pZCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UucmVnaXN0ZXIodGhpcy5pZCk7XG5cbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5pc1NpZGViYXJWaXNpYmxlJC5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkIGluIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5pc1Zpc2libGUgPSBwYXlsb2FkW3RoaXMuaWRdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlVG9LZXlFdmVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmtleVVwU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZVNpZGViYXIoKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuY2xvc2UodGhpcy5pZCk7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVUb0tleUV2ZW50KCkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZUZyb21FdmVudChkb2N1bWVudC5ib2R5LCAna2V5dXAnKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5LkVzY2FwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuY2xvc2UodGhpcy5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==