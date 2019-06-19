import { Component } from '@angular/core';

export interface EvoSwitcherItem {
    text: string;
    clickFunction: Function;
}

@Component({
  selector: 'evo-switcher-item',
  templateUrl: './evo-switcher-item.component.html',
  styleUrls: [ './evo-switcher-item.component.scss' ],
})
export class EvoSwitcherItemComponent {}
