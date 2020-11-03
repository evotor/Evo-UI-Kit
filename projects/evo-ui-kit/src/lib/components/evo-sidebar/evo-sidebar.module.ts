import { NgModule, ModuleWithProviders } from '@angular/core';
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
})
export class EvoSidebarModule {
    static forRoot(): ModuleWithProviders<EvoSidebarModule> {
        return {
            ngModule: EvoSidebarModule,
            providers: [
                EvoSidebarService,
            ],
        };
    }
}
