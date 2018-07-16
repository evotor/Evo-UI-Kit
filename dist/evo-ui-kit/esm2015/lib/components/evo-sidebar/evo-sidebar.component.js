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
                styles: [`.evo-sidebar{position:fixed;top:0;bottom:0;left:120%;z-index:3000;display:flex;flex-direction:column;width:100%;background-color:#fff;box-shadow:0 0 12px rgba(0,0,0,.25)}@media (min-width:992px){.evo-sidebar{left:100%;width:674px;margin-left:40px;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}}.evo-sidebar_active{left:0}.evo-sidebar__header{display:flex;flex-shrink:0;justify-content:space-between;align-items:flex-start;margin:0 15px;padding:20px 0 8px;border-bottom:1px solid #eceff1}@media (min-width:768px){.evo-sidebar__header{padding-top:38px}}.evo-sidebar__title{color:#333f48;font-weight:700;font-size:24px;font-family:MuseoSansCyrl,Arial,sans-serif;line-height:32px}@media (min-width:992px){.evo-sidebar_active{left:100%;-webkit-transform:translateX(-714px);transform:translateX(-714px)}.evo-sidebar__header{margin:0 30px}.evo-sidebar__title{font-size:30px;line-height:38px}}.evo-sidebar__close{margin:-4px 0 -2px 20px;padding:8px;color:#546e7a;cursor:pointer;transition:opacity .3s}.evo-sidebar__close:hover{opacity:.8}.evo-sidebar__close svg{vertical-align:top}.evo-sidebar__content{display:flex;flex-grow:1;flex-direction:column;padding:20px 15px 40px;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (min-width:768px){.evo-sidebar__content{padding:40px 15px}}@media (min-width:992px){.evo-sidebar__close{margin:2px 0 0 30px}.evo-sidebar__content{padding:40px 30px}}.evo-sidebar__footer{display:flex;flex-shrink:0;flex-direction:column;padding:30px 15px;background-color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.25)}.evo-sidebar__footer:empty{display:none}@media (min-width:768px){.evo-sidebar__footer{flex-direction:row;justify-content:space-between;padding:18px 15px}}@media (min-width:992px){.evo-sidebar__footer{padding:18px 30px}}.evo-sidebar__buttons{display:flex;flex-direction:column;padding:30px 0 10px}.evo-sidebar__buttons_border{margin-top:50px;border-top:1px solid #eceff1}.evo-sidebar__button+.evo-sidebar__button{margin-top:20px}@media (min-width:768px){.evo-sidebar__buttons{flex-direction:row;justify-content:space-between;padding-bottom:0}.evo-sidebar__button+.evo-sidebar__button{margin-top:0}}`],
                template: `<div class="fade-background fade-background_over-all"
     *ngIf="states.isVisible"
     (click)="closeSidebar()"
></div>

<div class="evo-sidebar" [ngClass]="{'evo-sidebar_active' : states.isVisible}" >
    <div class="evo-sidebar__header">
        <div class="evo-sidebar__title">{{ title }}</div>

        <div class="evo-sidebar__close" (click)="sidebarService.close(id)">
            <svg class="evo-sidebar__close-icon" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14.9,12l8.6-8.6c0.8-0.8,0.8-2.1,0-2.9c-0.8-0.8-2.1-0.8-2.9,0L12,9.1L3.4,0.6
                    c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9L9.1,12l-8.6,8.6c-0.8,0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0l8.6-8.6l8.6,8.6
                    c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9L14.9,12z"/>
            </svg>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXZvLXVpLWtpdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V2by1zaWRlYmFyL2V2by1zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFnQixTQUFTLElBQUksbUJBQW1CLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWlDM0UsTUFBTTs7OztJQVdGLFlBQW1CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjt1QkFQYixJQUFJLFlBQVksRUFBTztzQkFHckQ7WUFDTCxTQUFTLEVBQUUsS0FBSztTQUNuQjtLQUV1RDs7OztJQUV4RCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNDOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQ3ZEO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUNqQztTQUNKLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBRU8sbUJBQW1CO1FBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUNsRixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEM7U0FDSixDQUFDLENBQUM7Ozs7WUExRVYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixNQUFNLEVBQUUsQ0FBQyxncEVBQWdwRSxDQUFDO2dCQUMxcEUsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeUJiO2FBQ0E7Ozs7WUFoQ1EsaUJBQWlCOzs7aUJBa0NyQixLQUFLO29CQUNMLEtBQUs7c0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgYXMgb2JzZXJ2YWJsZUZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSAndHMta2V5Y29kZS1lbnVtJztcblxuaW1wb3J0IHsgRXZvU2lkZWJhclNlcnZpY2UsIEV2b1NpZGViYXJUeXBlcyB9IGZyb20gJy4vZXZvLXNpZGViYXIuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tc2lkZWJhcicsXG4gICAgc3R5bGVzOiBbYC5ldm8tc2lkZWJhcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjEyMCU7ei1pbmRleDozMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDAgMTJweCByZ2JhKDAsMCwwLC4yNSl9QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5ldm8tc2lkZWJhcntsZWZ0OjEwMCU7d2lkdGg6Njc0cHg7bWFyZ2luLWxlZnQ6NDBweDt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC41czt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzLC13ZWJraXQtdHJhbnNmb3JtIC41c319LmV2by1zaWRlYmFyX2FjdGl2ZXtsZWZ0OjB9LmV2by1zaWRlYmFyX19oZWFkZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtc2hyaW5rOjA7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDttYXJnaW46MCAxNXB4O3BhZGRpbmc6MjBweCAwIDhweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWNlZmYxfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLXNpZGViYXJfX2hlYWRlcntwYWRkaW5nLXRvcDozOHB4fX0uZXZvLXNpZGViYXJfX3RpdGxle2NvbG9yOiMzMzNmNDg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5Ok11c2VvU2Fuc0N5cmwsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDozMnB4fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZXZvLXNpZGViYXJfYWN0aXZle2xlZnQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC03MTRweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTcxNHB4KX0uZXZvLXNpZGViYXJfX2hlYWRlcnttYXJnaW46MCAzMHB4fS5ldm8tc2lkZWJhcl9fdGl0bGV7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6MzhweH19LmV2by1zaWRlYmFyX19jbG9zZXttYXJnaW46LTRweCAwIC0ycHggMjBweDtwYWRkaW5nOjhweDtjb2xvcjojNTQ2ZTdhO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246b3BhY2l0eSAuM3N9LmV2by1zaWRlYmFyX19jbG9zZTpob3ZlcntvcGFjaXR5Oi44fS5ldm8tc2lkZWJhcl9fY2xvc2Ugc3Zne3ZlcnRpY2FsLWFsaWduOnRvcH0uZXZvLXNpZGViYXJfX2NvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOjIwcHggMTVweCA0MHB4O292ZXJmbG93LXk6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19jb250ZW50e3BhZGRpbmc6NDBweCAxNXB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX19jbG9zZXttYXJnaW46MnB4IDAgMCAzMHB4fS5ldm8tc2lkZWJhcl9fY29udGVudHtwYWRkaW5nOjQwcHggMzBweH19LmV2by1zaWRlYmFyX19mb290ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtc2hyaW5rOjA7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MzBweCAxNXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMjUpfS5ldm8tc2lkZWJhcl9fZm9vdGVyOmVtcHR5e2Rpc3BsYXk6bm9uZX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmV2by1zaWRlYmFyX19mb290ZXJ7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MThweCAxNXB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmV2by1zaWRlYmFyX19mb290ZXJ7cGFkZGluZzoxOHB4IDMwcHh9fS5ldm8tc2lkZWJhcl9fYnV0dG9uc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MzBweCAwIDEwcHh9LmV2by1zaWRlYmFyX19idXR0b25zX2JvcmRlcnttYXJnaW4tdG9wOjUwcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VjZWZmMX0uZXZvLXNpZGViYXJfX2J1dHRvbisuZXZvLXNpZGViYXJfX2J1dHRvbnttYXJnaW4tdG9wOjIwcHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5ldm8tc2lkZWJhcl9fYnV0dG9uc3tmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZy1ib3R0b206MH0uZXZvLXNpZGViYXJfX2J1dHRvbisuZXZvLXNpZGViYXJfX2J1dHRvbnttYXJnaW4tdG9wOjB9fWBdLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZhZGUtYmFja2dyb3VuZCBmYWRlLWJhY2tncm91bmRfb3Zlci1hbGxcIlxuICAgICAqbmdJZj1cInN0YXRlcy5pc1Zpc2libGVcIlxuICAgICAoY2xpY2spPVwiY2xvc2VTaWRlYmFyKClcIlxuPjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJcIiBbbmdDbGFzc109XCJ7J2V2by1zaWRlYmFyX2FjdGl2ZScgOiBzdGF0ZXMuaXNWaXNpYmxlfVwiID5cbiAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2hlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX3RpdGxlXCI+e3sgdGl0bGUgfX08L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLXNpZGViYXJfX2Nsb3NlXCIgKGNsaWNrKT1cInNpZGViYXJTZXJ2aWNlLmNsb3NlKGlkKVwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImV2by1zaWRlYmFyX19jbG9zZS1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQuOSwxMmw4LjYtOC42YzAuOC0wLjgsMC44LTIuMSwwLTIuOWMtMC44LTAuOC0yLjEtMC44LTIuOSwwTDEyLDkuMUwzLjQsMC42XG4gICAgICAgICAgICAgICAgICAgIGMtMC44LTAuOC0yLjEtMC44LTIuOSwwYy0wLjgsMC44LTAuOCwyLjEsMCwyLjlMOS4xLDEybC04LjYsOC42Yy0wLjgsMC44LTAuOCwyLjEsMCwyLjljMC44LDAuOCwyLjEsMC44LDIuOSwwbDguNi04LjZsOC42LDguNlxuICAgICAgICAgICAgICAgICAgICBjMC44LDAuOCwyLjEsMC44LDIuOSwwYzAuOC0wLjgsMC44LTIuMSwwLTIuOUwxNC45LDEyelwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImV2by1zaWRlYmFyX19jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJldm8tc2lkZWJhcl9fZm9vdGVyXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3Rlcl1cIj48L25nLWNvbnRlbnQ+PC9kaXY+IDwhLS3Rh9GC0L7QsdGLIDplbXB0eSDRgNCw0LHQvtGC0LDQuywg0L3QtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LLQvdGD0YLRgNC4IGV2by1zaWRlYmFyX19mb290ZXIg0LLQvtC+0LHRidC1INC90LjRh9C10LPQviwg0LTQsNC20LUg0L/RgNC+0LHQtdC70LAtLT5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgRXZvU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgICBASW5wdXQoKSBpZDogRXZvU2lkZWJhclR5cGVzO1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGtleVVwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgc3RhdGVzID0ge1xuICAgICAgICBpc1Zpc2libGU6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc2lkZWJhclNlcnZpY2U6IEV2b1NpZGViYXJTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuZGVyZWdpc3Rlcih0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5yZWdpc3Rlcih0aGlzLmlkKTtcblxuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmlzU2lkZWJhclZpc2libGUkLnN1YnNjcmliZSgocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaWQgaW4gcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzLmlzVmlzaWJsZSA9IHBheWxvYWRbdGhpcy5pZF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVUb0tleUV2ZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5VXBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlU2lkZWJhcigpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5jbG9zZSh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN1YnNjcmliZVRvS2V5RXZlbnQoKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlRnJvbUV2ZW50KGRvY3VtZW50LmJvZHksICdrZXl1cCcpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXkuRXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5jbG9zZSh0aGlzLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19