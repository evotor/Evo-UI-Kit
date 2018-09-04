import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoDatePickerComponent } from './components/evo-date-picker/evo-date-picker.component';
import { FormsModule } from '@angular/forms';
import { EvolickOutsideDirective } from './directives/evo-click-outside.directive';
import { DateLocalePipe } from './pipes/date-local.pipe';
import { DateEuroFormatPipe } from './pipes/date-euro-format.pipe';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ EvoDatePickerComponent, EvolickOutsideDirective, DateLocalePipe, DateEuroFormatPipe ],
    exports: [ EvoDatePickerComponent, FormsModule, EvolickOutsideDirective ],
})
export class EvoDatePickerModule {

}
