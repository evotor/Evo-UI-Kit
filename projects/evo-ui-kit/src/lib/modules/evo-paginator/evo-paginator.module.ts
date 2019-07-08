import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoPaginatorComponent } from './evo-paginator.component';
import { iconСhevronLeft, iconСhevronRight } from '../../icons/navigation';
import { EvoIconModule } from '../evo-icon/evo-icon.module';

@NgModule({
  declarations: [EvoPaginatorComponent],
  imports: [
    CommonModule,
    EvoIconModule.forChild([{
      name: 'paginatorIcons',
      shapes: {
        iconСhevronLeft,
        iconСhevronRight,
      }
    }])
  ],
  exports: [EvoPaginatorComponent]
})
export class EvoPaginatorModule { }
