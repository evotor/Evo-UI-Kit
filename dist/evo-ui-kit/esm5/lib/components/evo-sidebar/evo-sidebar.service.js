/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/** @enum {string} */
var EvoSidebarTypes = {
    basket: 'basket',
    partnerAuth: 'partnerAuth',
    promoCode: 'promoCode',
};
export { EvoSidebarTypes };
var EvoSidebarService = /** @class */ (function () {
    function EvoSidebarService() {
        this.isSidebarVisible$ = new BehaviorSubject({});
        this.registeredSidebars = {};
    }
    /**
     * @param {?} id
     * @return {?}
     */
    EvoSidebarService.prototype.deregister = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        delete this.registeredSidebars[id];
    };
    /**
     * @param {?} id
     * @return {?}
     */
    EvoSidebarService.prototype.register = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (!(id in EvoSidebarTypes)) {
            console.error("Sidebar. Unknown '" + id + "', please add this id in enum");
            return;
        }
        this.registeredSidebars[id] = false;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    EvoSidebarService.prototype.open = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.registeredSidebars[id] = true;
        this.isSidebarVisible$.next(this.registeredSidebars);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    EvoSidebarService.prototype.close = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.registeredSidebars[id] = false;
        this.isSidebarVisible$.next(this.registeredSidebars);
    };
    EvoSidebarService.decorators = [
        { type: Injectable },
    ];
    return EvoSidebarService;
}());
export { EvoSidebarService };
function EvoSidebarService_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoSidebarService.prototype.isSidebarVisible$;
    /** @type {?} */
    EvoSidebarService.prototype.registeredSidebars;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXNpZGViYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7OztZQUcxQixRQUFRO2lCQUNILGFBQWE7ZUFDZixXQUFXOzs7OztpQ0FLSCxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUM7a0NBQ2QsRUFBRTs7Ozs7O0lBRS9CLHNDQUFVOzs7O0lBQVYsVUFBVyxFQUFtQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN0Qzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsRUFBbUI7UUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBcUIsRUFBRSxrQ0FBK0IsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sQ0FBQztTQUNWO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUN2Qzs7Ozs7SUFFRCxnQ0FBSTs7OztJQUFKLFVBQUssRUFBbUI7UUFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELGlDQUFLOzs7O0lBQUwsVUFBTSxFQUFtQjtRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDeEQ7O2dCQXpCSixVQUFVOzs0QkFUWDs7U0FVYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gRXZvU2lkZWJhclR5cGVzIHtcbiAgICBiYXNrZXQgPSAnYmFza2V0JyxcbiAgICBwYXJ0bmVyQXV0aCA9ICdwYXJ0bmVyQXV0aCcsXG4gICAgcHJvbW9Db2RlID0gJ3Byb21vQ29kZScsXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdm9TaWRlYmFyU2VydmljZSB7XG4gICAgaXNTaWRlYmFyVmlzaWJsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRTaWRlYmFycyA9IHt9O1xuXG4gICAgZGVyZWdpc3RlcihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICBpZiAoIShpZCBpbiBFdm9TaWRlYmFyVHlwZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTaWRlYmFyLiBVbmtub3duICcke2lkfScsIHBsZWFzZSBhZGQgdGhpcyBpZCBpbiBlbnVtYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlbihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNTaWRlYmFyVmlzaWJsZSQubmV4dCh0aGlzLnJlZ2lzdGVyZWRTaWRlYmFycyk7XG4gICAgfVxuXG4gICAgY2xvc2UoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NpZGViYXJWaXNpYmxlJC5uZXh0KHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzKTtcbiAgICB9XG59XG4iXX0=