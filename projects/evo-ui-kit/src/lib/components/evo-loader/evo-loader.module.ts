import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoCircularLoaderComponent} from './evo-circular-loader.component';

const bundle = [EvoCircularLoaderComponent];

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
