import { Component, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'evo-tab-item',
    templateUrl: './evo-tab-item.component.html',
    styleUrls: [ './evo-tab-item.component.scss' ],
})
export class EvoTabItemComponent implements OnInit {
    @Input() label: string;

    isSelected: boolean;

    @ViewChild('tabContent', {static: false})
    content: TemplateRef<any>;

    ngOnInit() {
        if (!this.isSelected) {
            this.isSelected = false;
        }
    }
}
