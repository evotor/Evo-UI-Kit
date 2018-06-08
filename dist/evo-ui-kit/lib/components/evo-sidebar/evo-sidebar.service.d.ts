import { BehaviorSubject } from 'rxjs';
export declare enum EvoSidebarTypes {
    basket = "basket",
    partnerAuth = "partnerAuth",
    promoCode = "promoCode",
}
export declare class EvoSidebarService {
    isSidebarVisible$: BehaviorSubject<{}>;
    private registeredSidebars;
    deregister(id: EvoSidebarTypes): void;
    register(id: EvoSidebarTypes): void;
    open(id: EvoSidebarTypes): void;
    close(id: EvoSidebarTypes): void;
}
