/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/** @enum {string} */
const EvoSidebarTypes = {
    basket: 'basket',
    partnerAuth: 'partnerAuth',
    promoCode: 'promoCode',
};
export { EvoSidebarTypes };
export class EvoSidebarService {
    constructor() {
        this.isSidebarVisible$ = new BehaviorSubject({});
        this.registeredSidebars = {};
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deregister(id) {
        delete this.registeredSidebars[id];
    }
    /**
     * @param {?} id
     * @return {?}
     */
    register(id) {
        if (!(id in EvoSidebarTypes)) {
            console.error(`Sidebar. Unknown '${id}', please add this id in enum`);
            return;
        }
        this.registeredSidebars[id] = false;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    open(id) {
        this.registeredSidebars[id] = true;
        this.isSidebarVisible$.next(this.registeredSidebars);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    close(id) {
        this.registeredSidebars[id] = false;
        this.isSidebarVisible$.next(this.registeredSidebars);
    }
}
EvoSidebarService.decorators = [
    { type: Injectable },
];
function EvoSidebarService_tsickle_Closure_declarations() {
    /** @type {?} */
    EvoSidebarService.prototype.isSidebarVisible$;
    /** @type {?} */
    EvoSidebarService.prototype.registeredSidebars;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXNpZGViYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V2by11aS1raXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ldm8tc2lkZWJhci9ldm8tc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7OztZQUcxQixRQUFRO2lCQUNILGFBQWE7ZUFDZixXQUFXOzs7QUFJM0IsTUFBTTs7aUNBQ2tCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQztrQ0FDZCxFQUFFOzs7Ozs7SUFFL0IsVUFBVSxDQUFDLEVBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDOzs7OztJQUVELFFBQVEsQ0FBQyxFQUFtQjtRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLCtCQUErQixDQUFDLENBQUM7WUFDdEUsTUFBTSxDQUFDO1NBQ1Y7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQ3ZDOzs7OztJQUVELElBQUksQ0FBQyxFQUFtQjtRQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQsS0FBSyxDQUFDLEVBQW1CO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUN4RDs7O1lBekJKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gRXZvU2lkZWJhclR5cGVzIHtcbiAgICBiYXNrZXQgPSAnYmFza2V0JyxcbiAgICBwYXJ0bmVyQXV0aCA9ICdwYXJ0bmVyQXV0aCcsXG4gICAgcHJvbW9Db2RlID0gJ3Byb21vQ29kZScsXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdm9TaWRlYmFyU2VydmljZSB7XG4gICAgaXNTaWRlYmFyVmlzaWJsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRTaWRlYmFycyA9IHt9O1xuXG4gICAgZGVyZWdpc3RlcihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICBpZiAoIShpZCBpbiBFdm9TaWRlYmFyVHlwZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTaWRlYmFyLiBVbmtub3duICcke2lkfScsIHBsZWFzZSBhZGQgdGhpcyBpZCBpbiBlbnVtYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkU2lkZWJhcnNbaWRdID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlbihpZDogRXZvU2lkZWJhclR5cGVzKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzW2lkXSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNTaWRlYmFyVmlzaWJsZSQubmV4dCh0aGlzLnJlZ2lzdGVyZWRTaWRlYmFycyk7XG4gICAgfVxuXG4gICAgY2xvc2UoaWQ6IEV2b1NpZGViYXJUeXBlcykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRTaWRlYmFyc1tpZF0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NpZGViYXJWaXNpYmxlJC5uZXh0KHRoaXMucmVnaXN0ZXJlZFNpZGViYXJzKTtcbiAgICB9XG59XG4iXX0=