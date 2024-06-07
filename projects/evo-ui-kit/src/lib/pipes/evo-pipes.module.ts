import {NgModule} from '@angular/core';
import {SafeHtmlPipe} from './safe-html.pipe';
import {DeclinationPipe} from './declination.pipe';

@NgModule({
    declarations: [DeclinationPipe, SafeHtmlPipe],
    exports: [DeclinationPipe, SafeHtmlPipe],
})
export class EvoPipesModule {}
