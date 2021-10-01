import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoCounterComponent } from './evo-counter.component';
import { EvoUiKitModule } from '../../evo-ui-kit.module';

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
