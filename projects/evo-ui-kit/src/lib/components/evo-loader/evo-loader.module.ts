import {NgModule} from '@angular/core';
import {EvoCircularLoaderComponent} from './evo-circular-loader.component';

const bundle = [EvoCircularLoaderComponent];

@NgModule({
    imports: [...bundle],
    exports: [...bundle],
})
export class EvoLoaderModule {}
