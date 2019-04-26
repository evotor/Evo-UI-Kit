import { Component, OnInit, Inject } from '@angular/core';
import { EvoIconsService } from 'evo-ui-kit';
import { EvoIconsLibrary } from 'projects/evo-ui-kit/src/lib/modules/evo-icon/classes/evo-icons-library';

@Component({
    selector: 'evo-icons-wrapper',
    templateUrl: './evo-icons-wrapper.component.html',
    styleUrls: ['./evo-icons-wrapper.component.scss']
})
export class EvoIconsWrapperComponent implements OnInit {
    categories: { name: string; iconsNames: string[]; }[];
    constructor(
        @Inject(EvoIconsService) private iconsService: EvoIconsLibrary
    ) { }

    ngOnInit() {
        console.log(this.iconsService);
        this.categories = this.iconsService.categories;
    }

}
