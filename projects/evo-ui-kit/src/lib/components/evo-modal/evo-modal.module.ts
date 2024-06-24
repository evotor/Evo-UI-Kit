import {NgModule} from '@angular/core';
import {EvoModalComponent} from './evo-modal.component';
import {EvoModalService} from './evo-modal.service';

@NgModule({
    imports: [EvoModalComponent],
    exports: [EvoModalComponent],
    providers: [EvoModalService],
})
export class EvoModalModule {}
