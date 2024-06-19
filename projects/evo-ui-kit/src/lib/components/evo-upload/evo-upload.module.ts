import {NgModule} from '@angular/core';
import {EvoUploadComponent} from './evo-upload.component';
import {EvoButtonModule} from '../evo-button';
import {CommonModule} from '@angular/common';
import {EvoIconComponent} from '../evo-icon';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoPipesModule} from '../../pipes';
import {EvoNoteModule} from '../evo-note';

@NgModule({
    imports: [CommonModule, EvoNoteModule, EvoButtonModule, EvoIconComponent, EvoPipesModule, EvoUiKitModule],
    declarations: [EvoUploadComponent],
    exports: [EvoUploadComponent],
})
export class EvoUploadModule {}
