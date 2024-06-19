import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoNoteComponent} from './evo-note.component';
import {EvoIconComponent} from '../evo-icon';

@NgModule({
    imports: [CommonModule, EvoUiKitModule, EvoIconComponent],
    declarations: [EvoNoteComponent],
    exports: [EvoNoteComponent],
})
export class EvoNoteModule {}
