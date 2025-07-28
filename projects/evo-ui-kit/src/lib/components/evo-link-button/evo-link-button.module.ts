import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoLinkButtonComponent} from './evo-link-button.component';

@NgModule({
    declarations: [EvoLinkButtonComponent],
    exports: [EvoLinkButtonComponent],
    imports: [CommonModule],
})
export class EvoLinkButtonModule {}
