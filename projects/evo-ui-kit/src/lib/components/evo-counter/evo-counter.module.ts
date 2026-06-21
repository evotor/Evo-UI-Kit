import {NgModule} from '@angular/core';
import {EvoCounterComponent} from './components/evo-counter/evo-counter.component';

@NgModule({
    imports: [EvoCounterComponent],
    exports: [EvoCounterComponent],
})
export class EvoCounterModule {}
