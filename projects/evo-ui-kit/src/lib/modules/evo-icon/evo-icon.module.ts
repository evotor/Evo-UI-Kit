import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoIconComponent } from './evo-icon.component';
import { EvoIconsService } from './services/evo-icons.service';
import { EvoIconsLibrary } from './classes/evo-icons-library';
import { IconsCategory } from './interfaces/icons-category';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [EvoIconComponent]
})
export class EvoIconModule {
    static forRoot(iconsList: IconsCategory[]): ModuleWithProviders {
        return {
            ngModule: EvoIconModule,
            providers: [{
                provide: EvoIconsService,
                useFactory: () => new EvoIconsLibrary(iconsList)
            }]
        };
    }
}
