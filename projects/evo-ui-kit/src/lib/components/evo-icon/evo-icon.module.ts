import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoIconComponent } from './evo-icon.component';
import { EvoIconsLibrary } from './classes/evo-icons-library';
import { IconsCategory } from './interfaces/icons-category';
import { EvoIconsService } from './services/evo-icons.service';
export { EvoIconsService };

export function evoIconsLibraryGetter(iconsList: IconsCategory[]) {
    return new EvoIconsLibrary(iconsList);
}

export const ICONS_LIST_TOKEN = new InjectionToken<IconsCategory[]>('ICONS_LIST_TOKEN');

// @dynamic
@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ EvoIconComponent ],
    declarations: [ EvoIconComponent ],
})
export class EvoIconModule {
    static forRoot(iconsList: IconsCategory[]): ModuleWithProviders {
        return {
            ngModule: EvoIconModule,
            providers: [{
                provide: ICONS_LIST_TOKEN,
                useValue: iconsList
            }, {
                provide: EvoIconsService,
                useFactory: evoIconsLibraryGetter,
                deps: [ ICONS_LIST_TOKEN ]
            }]
        };
    }
    static forChild(iconsList: IconsCategory[]): ModuleWithProviders {
        return {
            ngModule: EvoIconModule,
            providers: [{
                provide: ICONS_LIST_TOKEN,
                useValue: iconsList
            }, {
                provide: EvoIconsService,
                useFactory: evoIconsLibraryGetter,
                deps: [ ICONS_LIST_TOKEN ]
            }]
        };
    }
    static forChild(iconsList: IconsCategory[]): ModuleWithProviders {
        return {
            ngModule: EvoIconModule,
            providers: [{
                provide: ICONS_LIST_TOKEN,
                useValue: iconsList
            }, {
                provide: EvoIconsLibrary,
                useFactory: evoIconsLibraryGetter,
                deps: [ ICONS_LIST_TOKEN ]
            }]
        };
    }
}
