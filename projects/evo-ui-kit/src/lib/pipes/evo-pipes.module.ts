import {NgModule} from '@angular/core';
import {SafeHtmlPipe} from './safe-html.pipe';
import {DeclinationPipe} from './declination.pipe';

const pipes = [DeclinationPipe, SafeHtmlPipe];

@NgModule({
    imports: pipes,
    exports: pipes,
})
export class EvoPipesModule {}
