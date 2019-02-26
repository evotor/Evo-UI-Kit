import { Component, OnInit, Input } from '@angular/core';
import { EvoModalService } from 'evo-ui-kit';

@Component({
  selector: 'app-evo-modal-wrapper',
  templateUrl: './evo-modal-wrapper.component.html',
  styleUrls: [ './evo-modal-wrapper.component.scss' ],
})
export class EvoModalWrapperComponent implements OnInit {

  @Input() id;

  constructor(
    private evoModalService: EvoModalService,
  ) {
  }

  ngOnInit() {
  }

  onClick() {
    this.evoModalService.open(this.id);
  }

}
