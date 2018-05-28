import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evo-header',
  templateUrl: './evo-header.component.html',
  styleUrls: ['./evo-header.component.scss']
})
export class EvoHeaderComponent implements OnInit {

  @Input() size: 'h1' | 'h2' | 'h3' | 'h4' = 'h1';
  @Input() color: 'white' | 'black';

  constructor() { }

  ngOnInit() {
  }

}
