import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EvoNavigationButtonComponent} from "./evo-navigation-button.component";
import {EvoIconModule} from "../evo-icon";
import {iconChevronLeft} from '@evotor-dev/evo-icons/dist/monochrome/navigation';

@NgModule({
    imports: [
        CommonModule,
        EvoIconModule.forRoot([
            {
                name: 'navigation',
                shapes: {
                    'chevron-left': iconChevronLeft,
                },
            },
        ]),
    ],
    declarations: [
        EvoNavigationButtonComponent,
    ],
    exports: [
        EvoNavigationButtonComponent,
    ]
})
export class EvoNavigationButtonModule {
}
