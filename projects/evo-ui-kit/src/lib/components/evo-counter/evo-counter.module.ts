import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import {EvoCounterComponent} from './components/evo-counter/evo-counter.component';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule
    ],
    declarations: [
        EvoCounterComponent
    ],
    exports: [
        EvoCounterComponent
    ]
})
export class EvoCounterModule {
}
