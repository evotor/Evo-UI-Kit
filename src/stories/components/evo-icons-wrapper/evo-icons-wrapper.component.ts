import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, filter, map, tap} from 'rxjs/operators';
import {cloneDeep, invertBy, toPairs} from 'lodash-es';
import {EvoToastService, EvoToastTypes} from 'projects/evo-ui-kit/src/public_api';
import {CATEGORY_BY_ICON_NAME} from '@evotor-dev/evo-icons';

@Component({
    selector: 'evo-icons-wrapper',
    templateUrl: './evo-icons-wrapper.component.html',
    styleUrls: ['./evo-icons-wrapper.component.scss'],
})
export class EvoIconsWrapperComponent implements OnInit {
    formModel: FormGroup;
    categories: {name: string; iconsNames: string[]}[];
    searchResult: {name: string; iconsNames: string[]}[];

    get emptyResult(): boolean {
        return this.searchResult && this.searchResult.every(({iconsNames}) => !iconsNames.length);
    }

    constructor(
        private formBuilder: FormBuilder,
        private toast: EvoToastService,
    ) {}

    ngOnInit() {
        this.formModel = this.formBuilder.group({
            search: ['', []],
        });
        this.formModel
            .get('search')
            .valueChanges.pipe(
                debounceTime(300),
                filter((value) => {
                    const query = value.trim();
                    if (!query) {
                        this.searchResult = cloneDeep(this.categories);
                    }
                    return query;
                }),
                map((query) => query.toLowerCase().trim()),
                tap((query) => {
                    this.searchResult = this.categories.map(({name, iconsNames}) => ({
                        name,
                        iconsNames: iconsNames.filter((iconName) => iconName.includes(query)),
                    }));
                }),
            )
            .subscribe();

        this.categories = toPairs(invertBy(CATEGORY_BY_ICON_NAME)).map(([name, iconsNames]) => ({name, iconsNames}));
        this.searchResult = cloneDeep(this.categories);
    }

    copyToClipBoard(e: MouseEvent, value: string) {
        const textareaEl = document.createElement('textarea');
        Object.assign(textareaEl, {position: 'fixed', opacity: 0, left: 0, top: 0});
        textareaEl.value = value;
        document.body.prepend(textareaEl);
        textareaEl.select();
        document.execCommand('copy');
        document.body.removeChild(textareaEl);
        this.toast.force({
            message: 'Copied!',
            type: EvoToastTypes.SUCCESS,
        });
        (e.currentTarget as HTMLElement).focus();
    }
}
