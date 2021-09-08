import { Component } from '@angular/core';

@Component({
  selector: 'evo-modal-content, [evo-modal-content]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./evo-modal-content.component.scss'],
  host: {
      class: 'evo-modal__content'
  }
})
export class EvoModalContentComponent {}
