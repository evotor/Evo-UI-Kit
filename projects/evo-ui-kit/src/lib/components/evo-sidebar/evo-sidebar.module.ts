import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoSidebarComponent } from './evo-sidebar.component';
import { EvoSidebarHeaderComponent } from './evo-sidebar-header/evo-sidebar-header.component';
import { EvoSidebarFooterComponent } from './evo-sidebar-footer/evo-sidebar-footer.component';
import { EvoSidebarService } from './evo-sidebar.service';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoIconModule } from '../evo-icon/evo-icon.module';
import { iconChevronLeft } from '@evo/ui-kit/icons/navigation';
import { iconClose } from '@evo/ui-kit/icons/header';
import { EvoSidebarContentComponent } from './evo-sidebar-content/evo-sidebar-content.component';
import { EvoSidebarConfig } from './interfaces';
import { EVO_SIDEBAR_CONFIG } from './tokens';
import { EvoSidebarPortal } from './evo-sidebar-portal';
import { EvoPortalService } from '../evo-portal';
import { EvoSidebarAbstractPortal } from './evo-sidebar-abstract-portal';

export const sidebarPortalProvider: Provider = {
    provide: EvoSidebarAbstractPortal,
    useClass: EvoSidebarPortal,
    deps: [
        EvoPortalService,
    ]
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
                    'close': iconClose,
                },
            }
        ]),
    ],
    declarations: [
        ...components,
    ],
    exports: [
        ...components,
    ],
    providers: [
        EvoPortalService,
        sidebarPortalProvider,
        EvoSidebarService,
    ]
})
export class EvoSidebarModule {
    static forRoot(
        config?: EvoSidebarConfig,
    ): ModuleWithProviders<EvoSidebarModule> {
        return {
            ngModule: EvoSidebarModule,
            providers: [
                sidebarPortalProvider,
                {
                    provide: EVO_SIDEBAR_CONFIG,
                    useValue: config,
                },
                {
                    provide: EvoSidebarService,
                    useClass: EvoSidebarService,
                    deps: [
                        EvoSidebarAbstractPortal,
                        EVO_SIDEBAR_CONFIG,
                    ],
                },
            ],
        };
    }
}
