import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoSidebarComponent } from './evo-sidebar.component';
import { EvoSidebarService } from './evo-sidebar.service';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoIconModule } from '../evo-icon';
import { iconChevronLeft } from '@evo/ui-kit/icons/navigation';
import { iconClose } from '@evo/ui-kit/icons/header';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
        EvoIconModule.forChild([
            {
                name: 'sidebarIcons',
                shapes: {
                    'chevron-left': iconChevronLeft,
                    'close': iconClose,
                },
            }
        ]),
    ],
    declarations: [EvoSidebarComponent],
    exports: [EvoSidebarComponent],
})
export class EvoSidebarModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: EvoSidebarModule,
            providers: [
                EvoSidebarService,
            ],
        };
    }
}
