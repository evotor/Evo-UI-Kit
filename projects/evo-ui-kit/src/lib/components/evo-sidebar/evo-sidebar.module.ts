import {
    ApplicationRef,
    ComponentFactoryResolver,
    Injector,
    ModuleWithProviders,
    NgModule,
    Provider,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoSidebarComponent} from './evo-sidebar.component';
import {EvoSidebarHeaderComponent} from './evo-sidebar-header/evo-sidebar-header.component';
import {EvoSidebarFooterComponent} from './evo-sidebar-footer/evo-sidebar-footer.component';
import {EvoSidebarService} from './evo-sidebar.service';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoIconModule} from '../evo-icon/evo-icon.module';
import {iconChevronLeft} from '@evotor-dev/ui-kit/icons/navigation';
import {iconClose} from '@evotor-dev/ui-kit/icons/header';
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
    imports: [
        CommonModule,
        EvoUiKitModule,
        EvoIconModule.forRoot([
            {
                name: 'sidebarIcons',
                shapes: {
                    'chevron-left': iconChevronLeft,
                    close: iconClose,
                },
            },
        ]),
    ],
    declarations: [...components],
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
