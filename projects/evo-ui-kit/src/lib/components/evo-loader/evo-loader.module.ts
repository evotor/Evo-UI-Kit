import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoLoaderComponent } from './evo-loader.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoCircularLoaderComponent } from './evo-circular-loader.component';

const bundle = [
    EvoLoaderComponent,
    EvoCircularLoaderComponent,
];

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
    ],
    declarations: [...bundle],
    exports: [...bundle],
})
export class EvoLoaderModule {
}
