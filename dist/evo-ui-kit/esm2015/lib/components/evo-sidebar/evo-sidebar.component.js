/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent as observableFromEvent } from 'rxjs';
import { Key } from 'ts-keycode-enum';
import { EvoSidebarService, EvoSidebarTypes } from './evo-sidebar.service';
export class EvoSidebarComponent {
    /**
     * @param {?} sidebarService
     */
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.onClose = new EventEmitter();
        this.states = {
            isVisible: false,
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sidebarService.deregister(this.id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sidebarService.register(this.id);
        this.sidebarService.isSidebarVisible$.subscribe((payload) => {
            if (this.id in payload) {
                this.states.isVisible = payload[this.id];
            }
            if (this.states.isVisible) {
                this.keyUpSubscription = this.subscribeToKeyEvent();
            }
            else if (this.keyUpSubscription) {
                this.keyUpSubscription.unsubscribe();
                this.keyUpSubscription = null;
            }
        });
    }
    /**
     * @return {?}
     */
    closeSidebar() {
        this.sidebarService.close(this.id);
        this.onClose.emit();
    }
    /**
     * @return {?}
     */
    subscribeToKeyEvent() {
        return observableFromEvent(document.body, 'keyup').subscribe((event) => {
            if (event.keyCode === Key.Escape) {
                this.sidebarService.close(this.id);
            }
        });
    }
}
EvoSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-sidebar',
                styles: [`.evo-sidebar{position:fixed;top:0;left:120%;bottom:0;z-index:3000;display:flex;flex-direction:column;width:100%;background-color:#fff;box-shadow:0 0 12px rgba(0,0,0,.25)}@media (min-width:992px){.evo-sidebar{left:100%;margin-left:40px;width:674px;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}}.evo-sidebar_active{left:0}.evo-sidebar__header{display:flex;justify-content:space-between;align-items:flex-start;flex-shrink:0;border-bottom:1px solid #eceff1;padding:20px 0 8px;margin:0 15px}@media (min-width:992px){.evo-sidebar_active{left:100%;-webkit-transform:translateX(-714px);transform:translateX(-714px)}.evo-sidebar__header{margin:0 30px}}.evo-sidebar__title{font-family:museo,Arial,sans-serif;font-size:30px;font-weight:700;color:#333f48}@media (min-width:768px){.evo-sidebar__header{padding-top:38px}.evo-sidebar__title{font-size:30px;padding:0}}.evo-sidebar__close{padding:8px;transition:opacity .3s;margin:2px -8px 0 30px;cursor:pointer}.evo-sidebar__close:hover{opacity:.8}.evo-sidebar__close-icon{width:24px;height:24px;color:#546e7a;background:url(/assets/evo-ui-kit/icons/close.svg)}.evo-sidebar__content{display:flex;flex-direction:column;flex-grow:1;padding:20px 15px 40px;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (min-width:768px){.evo-sidebar__content{padding:40px 15px}}@media (min-width:992px){.evo-sidebar__content{padding:40px 30px}}.evo-sidebar__footer{display:flex;flex-direction:column;flex-shrink:0;padding:30px 15px;box-shadow:0 4px 12px rgba(0,0,0,.25);background-color:#fff}.evo-sidebar__footer:empty{display:none}@media (min-width:768px){.evo-sidebar__footer{flex-direction:row;justify-content:space-between;padding:18px 15px}}@media (min-width:992px){.evo-sidebar__footer{padding:18px 30px}}.evo-sidebar__buttons{display:flex;flex-direction:column;padding:30px 0 10px}.evo-sidebar__buttons_border{border-top:1px solid #eceff1;margin-top:50px}.evo-sidebar__button+.evo-sidebar__button{margin-top:20px}@media (min-width:768px){.evo-sidebar__buttons{flex-direction:row;justify-content:space-between;padding-bottom:0}.evo-sidebar__button+.evo-sidebar__button{margin-top:0}}`],
                template: `<div class="fade-background fade-background_over-all"
     *ngIf="states.isVisible"
     (click)="closeSidebar()"
></div>

<div class="evo-sidebar" [ngClass]="{'evo-sidebar_active' : states.isVisible}" >
    <div class="evo-sidebar__header">
        <div class="evo-sidebar__title">{{ title }}</div>

        <div class="evo-sidebar__close" (click)="sidebarService.close(id)">
            <div class="evo-sidebar__close-icon"></div>
        </div>
    </div>


    <div class="evo-sidebar__content">
        <ng-content select="[content]"></ng-content>
    </div>

    <div class="evo-sidebar__footer"><ng-content select="[footer]"></ng-content></div> <!--чтобы :empty работал, не должно быть внутри evo-sidebar__footer вообще ничего, даже пробела-->
</div>
`,
            },] },
];
/** @nocollapse */
EvoSidebarComponent.ctorParameters = () => [
    { type: EvoSidebarService }
];
EvoSidebarComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    onClose: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXZvLXVpLWtpdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V2by1zaWRlYmFyL2V2by1zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFnQixTQUFTLElBQUksbUJBQW1CLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQTZCM0UsTUFBTTs7OztJQVdGLFlBQW1CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjt1QkFQYixJQUFJLFlBQVksRUFBTztzQkFHckQ7WUFDTCxTQUFTLEVBQUUsS0FBSztTQUNuQjtLQUV1RDs7OztJQUV4RCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNDOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQ3ZEO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUNqQztTQUNKLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBRU8sbUJBQW1CO1FBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUNsRixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEM7U0FDSixDQUFDLENBQUM7Ozs7WUF0RVYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixNQUFNLEVBQUUsQ0FBQywrbkVBQStuRSxDQUFDO2dCQUN6b0UsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQmI7YUFDQTs7OztZQTVCUSxpQkFBaUI7OztpQkE4QnJCLEtBQUs7b0JBQ0wsS0FBSztzQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZyb21FdmVudCBhcyBvYnNlcnZhYmxlRnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICd0cy1rZXljb2RlLWVudW0nO1xuXG5pbXBvcnQgeyBFdm9TaWRlYmFyU2VydmljZSwgRXZvU2lkZWJhclR5cGVzIH0gZnJvbSAnLi9ldm8tc2lkZWJhci5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1zaWRlYmFyJyxcbiAgICBzdHlsZXM6IFtgLmV2by1zaWRlYmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MTIwJTtib3R0b206MDt6LWluZGV4OjMwMDA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMCAxMnB4IHJnYmEoMCwwLDAsLjI1KX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFye2xlZnQ6MTAwJTttYXJnaW4tbGVmdDo0MHB4O3dpZHRoOjY3NHB4O3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjVzO3RyYW5zaXRpb246dHJhbnNmb3JtIC41czt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXMsLXdlYmtpdC10cmFuc2Zvcm0gLjVzfX0uZXZvLXNpZGViYXJfYWN0aXZle2xlZnQ6MH0uZXZvLXNpZGViYXJfX2hlYWRlcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtmbGV4LXNocmluazowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlY2VmZjE7cGFkZGluZzoyMHB4IDAgOHB4O21hcmdpbjowIDE1cHh9QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcl9hY3RpdmV7bGVmdDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTcxNHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNzE0cHgpfS5ldm8tc2lkZWJhcl9faGVhZGVye21hcmdpbjowIDMwcHh9fS5ldm8tc2lkZWJhcl9fdGl0bGV7Zm9udC1mYW1pbHk6bXVzZW8sQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MzBweDtmb250LXdlaWdodDo3MDA7Y29sb3I6IzMzM2Y0OH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19oZWFkZXJ7cGFkZGluZy10b3A6MzhweH0uZXZvLXNpZGViYXJfX3RpdGxle2ZvbnQtc2l6ZTozMHB4O3BhZGRpbmc6MH19LmV2by1zaWRlYmFyX19jbG9zZXtwYWRkaW5nOjhweDt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzO21hcmdpbjoycHggLThweCAwIDMwcHg7Y3Vyc29yOnBvaW50ZXJ9LmV2by1zaWRlYmFyX19jbG9zZTpob3ZlcntvcGFjaXR5Oi44fS5ldm8tc2lkZWJhcl9fY2xvc2UtaWNvbnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2NvbG9yOiM1NDZlN2E7YmFja2dyb3VuZDp1cmwoL2Fzc2V0cy9ldm8tdWkta2l0L2ljb25zL2Nsb3NlLnN2Zyl9LmV2by1zaWRlYmFyX19jb250ZW50e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1ncm93OjE7cGFkZGluZzoyMHB4IDE1cHggNDBweDtvdmVyZmxvdy15OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9fY29udGVudHtwYWRkaW5nOjQwcHggMTVweH19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcl9fY29udGVudHtwYWRkaW5nOjQwcHggMzBweH19LmV2by1zaWRlYmFyX19mb290ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXNocmluazowO3BhZGRpbmc6MzBweCAxNXB4O2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4yNSk7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5ldm8tc2lkZWJhcl9fZm9vdGVyOmVtcHR5e2Rpc3BsYXk6bm9uZX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19mb290ZXJ7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MThweCAxNXB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX19mb290ZXJ7cGFkZGluZzoxOHB4IDMwcHh9fS5ldm8tc2lkZWJhcl9fYnV0dG9uc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MzBweCAwIDEwcHh9LmV2by1zaWRlYmFyX19idXR0b25zX2JvcmRlcntib3JkZXItdG9wOjFweCBzb2xpZCAjZWNlZmYxO21hcmdpbi10b3A6NTBweH0uZXZvLXNpZGViYXJfX2J1dHRvbisuZXZvLXNpZGViYXJfX2J1dHRvbnttYXJnaW4tdG9wOjIwcHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9fYnV0dG9uc3tmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZy1ib3R0b206MH0uZXZvLXNpZGViYXJfX2J1dHRvbisuZXZvLXNpZGViYXJfX2J1dHRvbnttYXJnaW4tdG9wOjB9fWBdLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZhZGUtYmFja2dyb3VuZCBmYWRlLWJhY2tncm91bmRfb3Zlci1hbGxcIlxuICAgICAqbmdJZj1cInN0YXRlcy5pc1Zpc2libGVcIlxuICAgICAoY2xpY2spPVwiY2xvc2VTaWRlYmFyKClcIlxuPjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJcIiBbbmdDbGFzc109XCJ7J2V2by1zaWRlYmFyX2FjdGl2ZScgOiBzdGF0ZXMuaXNWaXNpYmxlfVwiID5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2hlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX3RpdGxlXCI+e3sgdGl0bGUgfX08L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2Nsb3NlXCIgKGNsaWNrKT1cInNpZGViYXJTZXJ2aWNlLmNsb3NlKGlkKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19jbG9zZS1pY29uXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2NvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19mb290ZXJcIj48bmctY29udGVudCBzZWxlY3Q9XCJbZm9vdGVyXVwiPjwvbmctY29udGVudD48L2Rpdj4gPCEtLdGH0YLQvtCx0YsgOmVtcHR5INGA0LDQsdC+0YLQsNC7LCDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQstC90YPRgtGA0LggZXZvLXNpZGViYXJfX2Zvb3RlciDQstC+0L7QsdGJ0LUg0L3QuNGH0LXQs9C+LCDQtNCw0LbQtSDQv9GA0L7QsdC10LvQsC0tPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBFdm9TaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAgIEBJbnB1dCgpIGlkOiBFdm9TaWRlYmFyVHlwZXM7XG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAga2V5VXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBzdGF0ZXMgPSB7XG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzaWRlYmFyU2VydmljZTogRXZvU2lkZWJhclNlcnZpY2UpIHt9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5kZXJlZ2lzdGVyKHRoaXMuaWQpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuaWQpO1xuXG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuaXNTaWRlYmFyVmlzaWJsZSQuc3Vic2NyaWJlKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pZCBpbiBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMuaXNWaXNpYmxlID0gcGF5bG9hZFt0aGlzLmlkXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVzLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVRvS2V5RXZlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlVcFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VTaWRlYmFyKCkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmNsb3NlKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9LZXlFdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVGcm9tRXZlbnQoZG9jdW1lbnQuYm9keSwgJ2tleXVwJykuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleS5Fc2NhcGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmNsb3NlKHRoaXMuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=