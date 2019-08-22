import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvoRadioshapeComponent } from './components/evo-radioshape.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        EvoRadioshapeComponent,
    ],
    exports: [
        EvoRadioshapeComponent,
    ],
})
export class EvoRadioshapeModule {}
