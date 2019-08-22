import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EvoSidebarService } from '@evo/ui-kit';

@Component({
  selector: 'app-evo-sidebar-wrapper',
  templateUrl: './evo-sidebar-wrapper.component.html',
  styleUrls: [ './evo-sidebar-wrapper.component.scss' ],
})
export class EvoSidebarWrapperComponent implements OnInit {

  @Input() id;
  @Input() header;
  @Input() content;
  @Input() footer;
  @Input() size;
  @Input() relativeFooter = false;
  @Input() backButton;

  constructor(
    private evoSidebarService: EvoSidebarService,
  ) {
  }

  ngOnInit() {
  }

  onClick() {
    this.evoSidebarService.open(this.id);
  }

  onBackClick() {
      console.log('back');
  }

}
