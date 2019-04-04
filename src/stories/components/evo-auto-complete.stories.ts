import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import '!style-loader!css-loader!sass-loader!./evo-auto-complete.scss';
import { Subject, concat, of, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map, mergeMap } from 'rxjs/operators';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    'Authorization': 'Token 6a62e779b984f0353e87931ebc384d2c736aafa9',
};

const searchCity$ = new Subject();
const searchParty$ = new Subject();
const searchFio$ = new Subject();

storiesOf('Components/AutoComplete', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoUiKitModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
            <p>Search City</p>
            <br>
            <evo-auto
                [items]="cities$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="cityFiasId"
                [loading]="isSearch"
                [typeahead]="searchCity$"></evo-auto>
        </form>
        <pre>{{form.value | json}}</pre>
        `,
        props: {
            form: (new FormBuilder()).group({
                cityFiasId: [ '', [ Validators.required ] ],
            }),
            isSearch: false,
            searchCity$,
            cities$: concat(
                of([]), // Initial Value
                searchCity$.pipe(
                    debounceTime(400),
                    distinctUntilChanged(),
                    switchMap((query) => {
                        if (!query) { return of([]); }
                        this.isSearch = true;
                        return from(fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
                            method: 'POST', headers,
                            body: JSON.stringify({ query: query, count: 6 }),
                        })).pipe(
                            mergeMap((res) => from(res.json())),
                            catchError(() => of([])), // Empty list on Error
                            map((res) => {
                                this.isSearch = false;
                                return res['suggestions'].map(s => ({ value: s.data.city_fias_id, data: s.data, label: s.value }));
                            }),
                        );
                    }),
                ),
            ),
        },
    }))
    .add('with item templates', () => ({
        template: `
        <form [formGroup]="form">
            <p>Search Party</p>
            <br>
            <evo-auto
                [items]="parties$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="inn"
                [loading]="isSearch"
                [typeahead]="searchParty$">

                <!-- Custom Selected Option Template -->
                <ng-template #labelTemp let-item="item">
                    <div class="search-item" *ngIf="item?.label">
                        <div class="search-item__line">⭐ {{item.label}} - {{item.data?.inn}}</div>
                    </div>
                </ng-template>

                <!-- Custom Option Template -->
                <ng-template #optionTemp let-item="item" let-index="index" let-searchTerm="searchTerm">
                    <div class="search-item">
                        <div class="search-item__line">Поиск: {{searchTerm}}</div>
                        <div class="search-item__line">{{index + 1}}. {{item.label}} - {{item.data?.inn}}</div>
                    </div>
                </ng-template>

                </evo-auto>
        </form>
        <pre>{{form.value | json}}</pre>
        `,
        props: {
            form: (new FormBuilder()).group({
                inn: [ '', [ Validators.required ] ],
            }),
            isSearch: false,
            searchParty$,
            parties$: concat(
                of([]), // Initial Value
                searchParty$.pipe(
                    debounceTime(400),
                    distinctUntilChanged(),
                    switchMap((query) => {
                        if (!query) { return of([]); }
                        this.isSearch = true;
                        return from(fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
                            method: 'POST', headers,
                            body: JSON.stringify({ query: query, count: 6 }),
                        })).pipe(
                            mergeMap((res) => from(res.json())),
                            catchError(() => of([])), // Empty list on Error
                            map(res => {
                                this.isSearch = false;
                                return res['suggestions'].map(s => ({ value: s.data.inn, label: s.value, data: s.data }));
                            }),
                        );
                    }),
                ),
            ),
        },
    }))
    .add('with item change event', () => ({
        template: `
        <form [formGroup]="form">
            <p>Search by Fullname and split in parts</p>
            <br>
            <evo-auto
                [items]="fios$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="fullname"
                [loading]="isSearch"
                [typeahead]="searchFio$"
                (change)="onChange($event)">
                </evo-auto>
        </form>
        <pre>{{form.value | json}}</pre>
        `,
        props: {
            form: (new FormBuilder()).group({
                fullname: [ '', [ Validators.required ] ],
                name: [ '', [] ],
                surname: [ '', [] ],
                patronymic: [ '', [] ],
            }),
            isSearch: false,
            searchFio$,
            onChange: function(item) {
                const { name, surname, patronymic } = item.data;
                this.form.patchValue({
                    name: name || '',
                    surname: surname || '',
                    patronymic: patronymic || '',
                });
            },
            fios$: concat(
                of([]), // Initial Value
                searchFio$.pipe(
                    debounceTime(400),
                    distinctUntilChanged(),
                    switchMap((query) => {
                        if (!query) { return of([]); }
                        this.isSearch = true;
                        return from(fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio', {
                            method: 'POST', headers,
                            body: JSON.stringify({ query: query, count: 6 }),
                        })).pipe(
                            mergeMap((res) => from(res.json())),
                            catchError(() => of([])), // Empty list on Error
                            map(res => {
                                this.isSearch = false;
                                return res['suggestions'].map(s => ({
                                    value: s.unrestricted_value,
                                    label: s.unrestricted_value,
                                    data: s.data,
                                }));
                            }),
                        );
                    }),
                ),
            ),
        },
    }));
