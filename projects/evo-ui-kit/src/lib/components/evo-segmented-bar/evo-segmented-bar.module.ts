import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoSegmentedBarComponent} from './evo-segmented-bar/evo-segmented-bar.component';
import {EvoSegmentedBarButtonComponent} from './evo-segmented-bar-button/evo-segmented-bar-button.component';
import {FormsModule} from '@angular/forms';
import {EvoUiKitModule} from '../../evo-ui-kit.module';

@NgModule({
    imports: [CommonModule, FormsModule, EvoUiKitModule],
    declarations: [EvoSegmentedBarComponent, EvoSegmentedBarButtonComponent],
    exports: [EvoSegmentedBarComponent, EvoSegmentedBarButtonComponent],
})
/**
 * @deprecated use `EvoChipModule`
 */
export class EvoSegmentedBarModule {}
