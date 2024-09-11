import {Signal} from "@angular/core";
import {EvoSidebarCloseTargets} from "./enums/evo-sidebar-close-targets";

export abstract class EvoSidebarToken {
    abstract backButton: Signal<boolean>;
    abstract relativeFooter: Signal<boolean>;

    abstract closeSidebar(target: EvoSidebarCloseTargets): void;
}
