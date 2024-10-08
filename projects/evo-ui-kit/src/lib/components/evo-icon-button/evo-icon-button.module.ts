import { NgModule } from '@angular/core';
import { EvoIconButtonComponent } from './evo-icon-button.component';
import { CommonModule } from '@angular/common';
import {EvoLoaderModule} from '../evo-loader';

@NgModule({
    imports: [
        CommonModule,
        EvoLoaderModule,
    ],
    declarations: [
        EvoIconButtonComponent,
    ],
    exports: [
        EvoIconButtonComponent,
    ]
})
export class EvoIconButtonModule {
}
