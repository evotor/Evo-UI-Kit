import {
    ApplicationRef,
    ComponentFactoryResolver,
    Injector,
    ModuleWithProviders,
    NgModule,
    Provider,
} from '@angular/core';
import {EvoSidebarComponent} from './evo-sidebar.component';
import {EvoSidebarHeaderComponent} from './evo-sidebar-header/evo-sidebar-header.component';
import {EvoSidebarFooterComponent} from './evo-sidebar-footer/evo-sidebar-footer.component';
import {EvoSidebarService} from './evo-sidebar.service';
import {EvoSidebarContentComponent} from './evo-sidebar-content/evo-sidebar-content.component';
import {EvoSidebarConfig} from './interfaces';
import {EVO_SIDEBAR_CONFIG} from './tokens';
import {EvoSidebarPortal} from './evo-sidebar-portal';
import {EvoAbstractPortal} from '../evo-portal';

export const portalProvider: Provider = {
    provide: EvoAbstractPortal,
    useClass: EvoSidebarPortal,
    deps: [ApplicationRef, Injector, ComponentFactoryResolver],
};

const components = [
    EvoSidebarComponent,
    EvoSidebarHeaderComponent,
    EvoSidebarContentComponent,
    EvoSidebarFooterComponent,
];

@NgModule({
    imports: [...components],
    exports: [...components],
    providers: [portalProvider, EvoSidebarService],
})
export class EvoSidebarModule {
    static forRoot(config?: EvoSidebarConfig): ModuleWithProviders<EvoSidebarModule> {
        return {
            ngModule: EvoSidebarModule,
            providers: [
                portalProvider,
                {
                    provide: EVO_SIDEBAR_CONFIG,
                    useValue: config,
                },
                {
                    provide: EvoSidebarService,
                    useClass: EvoSidebarService,
                    deps: [EvoAbstractPortal, EVO_SIDEBAR_CONFIG],
                },
            ],
        };
    }
}
