import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoUiKitModule } from '../../evo-ui-kit.module';
import { EvoNoteComponent } from './evo-note.component';

@NgModule({
    imports: [
        CommonModule,
        EvoUiKitModule,
    ],
    declarations: [ EvoNoteComponent ],
    exports: [ EvoNoteComponent ],
})
export class EvoNoteModule {}
