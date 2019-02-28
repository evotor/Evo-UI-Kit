import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EvoSwitcherItem } from './components/evo-switcher-item/evo-switcher-item.component';

@Component({
    selector: 'evo-switcher',
    templateUrl: './evo-switcher.component.html',
    styleUrls: [ './evo-switcher.component.scss' ],
})
export class EvoSwitcherComponent implements OnInit {
    @Input() items: EvoSwitcherItem[];
    @Output() onItemSelection: EventEmitter<number> = new EventEmitter();

    private _selectedIndex: number;

    get selectedIndex(): number {
        return this._selectedIndex;
    }

    @Input() set selectedIndex(index: number) {
        this._selectedIndex = index > this.items.length ? this.items.length - 1 : index;
    }

    handleItemClick(index: number) {
        this.selectedIndex = index;
        this.onItemSelection.emit(index);
    }

    constructor() { }

    ngOnInit() { }

}
