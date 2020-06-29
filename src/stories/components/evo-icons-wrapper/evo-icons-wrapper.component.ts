import { Component, OnInit } from '@angular/core';
import { EvoIconsLibrary } from '@evo/ui-kit';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, map, filter, debounceTime } from 'rxjs/operators';
import { cloneDeep } from 'lodash-es';

@Component({
    selector: 'evo-icons-wrapper',
    templateUrl: './evo-icons-wrapper.component.html',
    styleUrls: ['./evo-icons-wrapper.component.scss']
})
export class EvoIconsWrapperComponent implements OnInit {
    formModel: FormGroup;
    categories: { name: string; iconsNames: string[]; }[];
    searchResult: { name: string; iconsNames: string[]; }[];

    get emptyResult(): boolean {
        return (this.searchResult && this.searchResult.every(({ iconsNames }) => !iconsNames.length));
    }

    constructor(
        private iconsService: EvoIconsLibrary,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.formModel = this.formBuilder.group({
            search: [ '', [] ]
        });
        this.formModel.get('search').valueChanges.pipe(
            debounceTime(300),
            filter(value => {
                const query = value.trim();
                if (!query) { this.searchResult = cloneDeep(this.categories); }
                return query;
            }),
            map(query => query.toLowerCase().trim()),
            tap(query => {
                this.searchResult = this.categories
                    .map(({name, iconsNames }) => ({
                        name: name,
                        iconsNames: iconsNames.filter(iconName => iconName.includes(query)),
                    }));
            })
        ).subscribe();
        // Remove custom icons example
        this.iconsService.categories.pop();
        this.categories = this.iconsService.categories;
        this.searchResult = cloneDeep(this.categories);
    }
}
