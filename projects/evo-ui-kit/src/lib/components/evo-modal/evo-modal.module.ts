import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoModalComponent } from './evo-modal.component';
import { EvoButtonModule } from '../evo-button/evo-button.module';
import { EvoModalService } from './evo-modal.service';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoPortalService } from '../evo-portal';
import { EvoModalPortal } from './evo-modal-portal';
import { EvoModalConfig } from './interfaces';
import { EVO_MODAL_CONFIG } from './tokens';
import { EvoModalHeaderComponent } from './evo-modal-header/evo-modal-header.component';
import { EvoModalButtonsComponent } from './evo-modal-buttons/evo-modal-buttons.component';
import { EvoModalAbstractPortal } from './evo-modal-abstract-portal';
import { EvoModalContentComponent } from './evo-modal-content/evo-modal-content.component';

export const modalPortalProvider: Provider = {
    provide: EvoModalAbstractPortal,
    useClass: EvoModalPortal,
    deps: [
        EvoPortalService,
    ]
};

const components = [
    EvoModalComponent,
    EvoModalHeaderComponent,
    EvoModalContentComponent,
    EvoModalButtonsComponent,
];

@NgModule({
    imports: [
        CommonModule,
        EvoButtonModule,
        EvoUiKitModule,
    ],
    declarations: [
        ...components,
    ],
    exports: [
        ...components,
    ],
    providers: [
        EvoPortalService,
        modalPortalProvider,
        EvoModalService,
    ]
})
export class EvoModalModule {
    static forRoot(
        config?: EvoModalConfig,
    ): ModuleWithProviders<EvoModalModule> {
        return {
            ngModule: EvoModalModule,
            providers: [
                modalPortalProvider,
                {
                    provide: EVO_MODAL_CONFIG,
                    useValue: config,
                },
                {
                    provide: EvoModalService,
                    useClass: EvoModalService,
                    deps: [
                        EvoModalAbstractPortal,
                        EVO_MODAL_CONFIG,
                    ]
                }
            ]
        };
    }
}
