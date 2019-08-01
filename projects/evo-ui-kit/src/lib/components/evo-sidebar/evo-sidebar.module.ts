import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoSidebarComponent } from './evo-sidebar.component';
import { EvoSidebarService } from './evo-sidebar.service';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoIconModule } from '../evo-icon';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
        EvoIconModule,
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
