import { Component, OnInit, Inject } from '@angular/core';
import { EvoIconsLibrary } from '@evo/ui-kit';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, map, filter, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'evo-icons-wrapper',
    templateUrl: './evo-icons-wrapper.component.html',
    styleUrls: ['./evo-icons-wrapper.component.scss']
})
export class EvoIconsWrapperComponent implements OnInit {
    formModel: FormGroup;
    categories: { name: string; iconsNames: string[]; }[];
    allIcons: string[];
    searchResult: string[];

    constructor(
        private iconsService: EvoIconsLibrary,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.formModel = this.formBuilder.group({
            search: [ '', [] ]
        });
        this.formModel.get('search').valueChanges.pipe(
            debounceTime(100),
            filter(value => {
                const query = value.trim();
                if (!query) { this.searchResult = null; }
                return query;
            }),
            map(query => query.toLowerCase().trim()),
            tap(query => {
                this.searchResult = this.allIcons.filter(iconName => iconName.includes(query));
            })
        ).subscribe();
        // Remove custom icons example
        this.iconsService.categories.pop();
        this.categories = this.iconsService.categories;
        this.allIcons = [].concat.apply([], this.iconsService.categories.map(category => category.iconsNames));
    }
}
