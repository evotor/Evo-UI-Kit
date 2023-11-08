import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { from, of, Subject } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EvoAlertModule, EvoButtonModule, switchQueryToList } from '@evo/ui-kit';
import { EvoAutocompleteModule } from 'projects/evo-ui-kit/src/public_api';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
};

const searchCity$: Subject<string> = new Subject();
const searchParty$: Subject<string> = new Subject();
const searchFio$: Subject<string> = new Subject();

const errorsMessages = {
    required: 'Заполните поле'
};

storiesOf('Components/Autocomplete', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoAutocompleteModule,
                EvoButtonModule,
                EvoAlertModule,
            ],
        }),
    )
    .add('default', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <form [formGroup]="form">
        <h2>Search City</h2>
        <div class="story-section">
            <h3>Theme <code>default</code></h3>
            <evo-autocomplete
                [items]="cities$ | async"
                bindLabel="label"
                bindValue="value"
                placeholder="Insert city name..."
                formControlName="cityFiasId1"
                [loading]="isSearch"
                [editQuery]="true"
                [clearOnBackspace]="false"
                [typeahead]="searchCity$"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
            <evo-alert type="warning" style="display:block;margin-top: 24px;">
                <p><span style="font-size: 24px; margin-right: 8px;">💡</span>
                Set initial value to <code>null</code> to <strong>hide clear button</strong></p>
            </evo-alert>
        </div>
        <div class="story-section">
            <h3>Theme <code>default</code></h3>
            <p>Initial value is <code>''</code></p>
            <evo-autocomplete
                [items]="cities$ | async"
                bindLabel="label"
                bindValue="value"
                placeholder="Insert city name..."
                formControlName="cityFiasId2"
                [loading]="isSearch"
                [editQuery]="true"
                [clearOnBackspace]="false"
                [typeahead]="searchCity$"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </div>
        <div class="story-section">
            <h3>Theme <code>rounded</code></h3>
            <evo-autocomplete
                [items]="cities$ | async"
                bindLabel="label"
                bindValue="value"
                placeholder="Insert city name..."
                formControlName="cityFiasId3"
                [loading]="isSearch"
                [editQuery]="true"
                [clearOnBackspace]="false"
                [typeahead]="searchCity$"
                theme="rounded"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </div>
        <div class="story-section">
            <h3>Theme <code>default</code>, size <code>small</code></h3>
            <evo-autocomplete
                [items]="cities$ | async"
                size="small"
                bindLabel="label"
                bindValue="value"
                placeholder="Insert city name..."
                formControlName="cityFiasId1"
                [loading]="isSearch"
                [editQuery]="true"
                [clearOnBackspace]="false"
                [typeahead]="searchCity$"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </div>
        <div class="story-section">
            <h3>Theme <code>rounded</code>, size <code>small</code></h3>
            <evo-autocomplete
                [items]="cities$ | async"
                size="small"
                theme="rounded"
                bindLabel="label"
                bindValue="value"
                placeholder="Insert city name..."
                formControlName="cityFiasId1"
                [loading]="isSearch"
                [editQuery]="true"
                [clearOnBackspace]="false"
                [typeahead]="searchCity$"
                [errorsMessages]="errorsMessages"
            ></evo-autocomplete>
        </div>
    </form>
    <pre>{{form.value | json}}</pre>
    <div style="margin: 20px 0 200px; text-align: center;">
        Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
    </div>
</div>
        `,
        props: {
            form: (new FormBuilder()).group({
                cityFiasId1: [null, [Validators.required]],
                cityFiasId2: ['', [Validators.required]],
                cityFiasId3: [null, [Validators.required]],
            }),
            errorsMessages,
            isSearch: false,
            searchCity$,
            cities$: switchQueryToList(searchCity$, function (query) {
                if (!query) {
                    return of([]);
                }
                this.isSearch = true;
                return from(fetch(`https://market-test.evotor.ru/api/dadata/public/suggestions/api/4_1/rs/suggest/address`, {
                    method: 'POST', headers,
                    body: JSON.stringify({ query: query, count: 6 }),
                })).pipe(
                    mergeMap((res) => from(res.json())),
                    catchError(() => of([])), // Empty list on Error
                    map((res) => {
                        this.isSearch = false;
                        return res['suggestions'].map(s => ({
                            value: s.data.city_fias_id,
                            data: s.data,
                            label: s.unrestricted_value
                        }));
                    }),
                );
            }),
        },
    }))
    .add('with item templates', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <form [formGroup]="form">
        <h2>Search Party</h2>
        <div class="story-section">
            <h3>Default template</h3>
            <evo-autocomplete
                [items]="parties$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="inn"
                [loading]="isSearch"
                [typeahead]="searchParty$"
                [errorsMessages]="errorsMessages"
            >
            </evo-autocomplete>
        </div>
        <div class="story-section">
            <h3>Custom template with <code>#optionTemp</code> and <code>evo-autocomplete-default-option</code></h3>
            <evo-autocomplete
                [items]="parties$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="inn"
                [loading]="isSearch"
                [typeahead]="searchParty$"
                [errorsMessages]="errorsMessages"
            >
                <ng-template #optionTemp let-item$="item$">
                    <evo-autocomplete-default-option
                        [label]="item$.label"
                        description="ИНН: {{item$.value.data.inn}}"
                    ></evo-autocomplete-default-option>
                </ng-template>
            </evo-autocomplete>
        </div>
        <div class="story-section">
            <h3>Сustom template with <code>#optionTemp</code> only</h3>
            <evo-autocomplete
                [items]="parties$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="inn2"
                [loading]="isSearch"
                [typeahead]="searchParty$"
                [errorsMessages]="errorsMessages"
            >
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

            </evo-autocomplete>
        </div>
    </form>
    <pre>{{form.value | json}}</pre>
    <div style="margin: 20px 0 200px; text-align: center;">
        Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
    </div>
</div>
        `,
        props: {
            form: (new FormBuilder()).group({
                inn: ['', [Validators.required]],
                inn2: ['', [Validators.required]],
            }),
            errorsMessages,
            isSearch: false,
            searchParty$,
            parties$: switchQueryToList(searchParty$, function (query) {
                if (!query) {
                    return of([]);
                }
                this.isSearch = true;
                return from(fetch(`https://market-test.evotor.ru/api/dadata/public/suggestions/api/4_1/rs/suggest/party`, {
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
        },
    }))
    .add('selectbox', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <form [formGroup]="form">
        <h2>Selectbox</h2>
        <div class="story-section">
            <h3>Default theme</h3>
            <evo-autocomplete
                [items]="items"
                bindLabel="label"
                bindValue="value"
                formControlName="control1"
                [loading]="isSearch"
                [typeahead]="searchParty$"
                [errorsMessages]="errorsMessages"
                [isSelectbox]="true"
            >
            </evo-autocomplete>
        </div>

        <div class="story-section">
            <h3>Rounded theme</h3>
            <evo-autocomplete
                [items]="items"
                bindLabel="label"
                bindValue="value"
                formControlName="control2"
                theme="rounded"
                [loading]="isSearch"
                [typeahead]="searchParty$"
                [errorsMessages]="errorsMessages"
                [isSelectbox]="true"
            >
            </evo-autocomplete>
        </div>

        <div class="story-section">
            <h3><code>multipleInline</code> with checkboxes (via <code>evo-autocomplete-default-option</code>)</h3>
            <evo-autocomplete
                [items]="items"
                bindLabel="label"
                bindValue="value"
                formControlName="control3"
                [loading]="isSearch"
                [typeahead]="searchParty$"
                [errorsMessages]="errorsMessages"
                [isSelectbox]="true"
                [closeOnSelect]="false"
                [multipleInline]="true"
            >
                <ng-template #optionTemp let-item$="item$">
                    <evo-autocomplete-default-option
                        [hasCheckbox]="true"
                        [label]="item$.label"
                        [description]="item$.value.description"
                        [isSelected]="item$.selected"
                        [isDisabled]="item$.disabled"
                    ></evo-autocomplete-default-option>
                </ng-template>
            </evo-autocomplete>
        </div>
        <div class="story-section">
            <h3><code>multipleInline</code> with checkboxes (via <code>evo-autocomplete-default-option</code>) without description</h3>
            <evo-autocomplete
                [items]="items"
                bindLabel="label"
                bindValue="value"
                formControlName="control4"
                theme="rounded"
                [loading]="isSearch"
                [typeahead]="searchParty$"
                [errorsMessages]="errorsMessages"
                [isSelectbox]="true"
                [closeOnSelect]="false"
                [multipleInline]="true"
            >
                <ng-template #optionTemp let-item$="item$">
                    <evo-autocomplete-default-option
                        [hasCheckbox]="true"
                        [label]="item$.label"
                        [isSelected]="item$.selected"
                        [isDisabled]="item$.disabled"
                    ></evo-autocomplete-default-option>
                </ng-template>
            </evo-autocomplete>
        </div>
        <div class="story-section">
            <h3><code>multipleInline</code> with checkboxes and overal label (via <code>evo-autocomplete-default-option</code>)</h3>
            <evo-autocomplete
                [items]="items"
                bindLabel="label"
                bindValue="value"
                formControlName="control5"
                theme="rounded"
                [errorsMessages]="errorsMessages"
                [isSelectbox]="true"
                [closeOnSelect]="false"
                [multipleInline]="true"
            >
                <ng-template *ngIf="form.get('control5').value?.length > 1" #multiLabelTemp let-items="items">
                    <div>Несколько значений</div>
                </ng-template>

                <ng-template #optionTemp let-item$="item$">
                    <evo-autocomplete-default-option
                        [hasCheckbox]="true"
                        [label]="item$.label"
                        [isSelected]="item$.selected"
                        [isDisabled]="item$.disabled"
                    ></evo-autocomplete-default-option>
                </ng-template>
            </evo-autocomplete>
        </div>
    </form>
    <pre>{{form.value | json}}</pre>
    <div style="margin: 20px 0 200px; text-align: center;">
        Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
    </div>
</div>
        `,
        props: {
            form: (new FormBuilder()).group({
                control1: [null, [Validators.required]],
                control2: [null, [Validators.required]],
                control3: [null, [Validators.required]],
                control4: [null, [Validators.required]],
                control5: [null, [Validators.required]],
            }),
            items: [
                {
                    label: 'One',
                    description: 'Option One description',
                    value: 1,
                },
                {
                    label: 'Two',
                    description: 'Option Two description',
                    value: 2,
                },
                {
                    label: 'Three (disabled)',
                    description: 'Option Three description',
                    value: 3,
                    disabled: true,
                },
                {
                    label: 'Super long option with strange text Peritus, mirabilis fraticinidas unus perdere de clemens, rusticus deus',
                    description: 'Option Three description',
                    value: 4,
                },
            ],
            errorsMessages,
            isSearch: false,
            searchParty$,
            parties$: switchQueryToList(searchParty$, function (query) {
                if (!query) {
                    return of([]);
                }
                this.isSearch = true;
                return from(fetch(`https://market-test.evotor.ru/api/dadata/public/suggestions/api/4_1/rs/suggest/party`, {
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
        },
    }))
    .add('with item change event', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <form [formGroup]="form">
        <p>Search by Fullname and split in parts</p>
        <br>
        <evo-autocomplete
            [items]="fios$ | async"
            bindLabel="label"
            bindValue="value"
            formControlName="fullname"
            [loading]="isSearch"
            [typeahead]="searchFio$"
            (change)="onChange($event)"
            [errorsMessages]="errorsMessages">
            </evo-autocomplete>
    </form>
    <pre>{{form.value | json}}</pre>
    <div style="margin: 20px 0 200px; text-align: center;">
        Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
    </div>
</div>
        `,
        props: {
            form: (new FormBuilder()).group({
                fullname: ['', [Validators.required]],
                name: ['', []],
                surname: ['', []],
                patronymic: ['', []],
            }),
            errorsMessages,
            isSearch: false,
            searchFio$,
            onChange: function (item) {
                let name, surname, patronymic;
                if (item && item.data) {
                    const data = item.data;
                    name = data.name;
                    surname = data.surname;
                    patronymic = data.patronymic;
                }
                this.form.patchValue({
                    name: name || '',
                    surname: surname || '',
                    patronymic: patronymic || '',
                });
            },
            fios$: switchQueryToList(searchFio$, function (query) {
                if (!query) {
                    return of([]);
                }
                this.isSearch = true;
                return from(fetch(`https://market-test.evotor.ru/api/dadata/public/suggestions/api/4_1/rs/suggest/fio`, {
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
        },
    }))
    .add('with loading state', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <form [formGroup]="form">
        <p>Loading state</p>
        <br>
        <evo-autocomplete
            [items]="items"
            formControlName="name"
            [loading]="loading"
            [errorsMessages]="errorsMessages">
            </evo-autocomplete>
        <br>
        <evo-button size="small" (click)="loading = !loading">Toggle loading state</evo-button>
    </form>
    <div style="margin: 20px 0 200px; text-align: center;">
        Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
    </div>
</div>
        `,
        props: {
            items: [{
                label: 'One',
                value: 1,
            }],
            form: (new FormBuilder()).group({
                name: ['', []],
            }),
            errorsMessages,
            loading: true,
        },
    }))
    .add('CSS customization', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
<div class="story-container">
    <form [formGroup]="form">
        <h3>Use CSS custom props to set white-space, text-overflow and overflow:</h3>
        <div class="story-section">
        <h3>Defaults are:</h3>
        <pre>
         --evo-autocomplete-option-overflow: hidden;
         --evo-autocomplete-option-text-overflow: ellipsis;
         --evo-autocomplete-option-white-space: nowrap;
        </pre>
            <h3>Default template with multiline options</h3>
            <evo-autocomplete
                style="--evo-autocomplete-option-white-space: normal;"
                class="custom"
                [items]="parties$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="inn"
                [loading]="isSearch"
                [typeahead]="searchParty$"
                [errorsMessages]="errorsMessages"
            >
            </evo-autocomplete>
        </div>
        <div class="story-section">
            <h3>Custom template with multiline options and <code>#optionTemp</code> and <code>evo-autocomplete-default-option</code></h3>
            <evo-autocomplete
                style="--evo-autocomplete-option-white-space: normal;"
                [items]="parties$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="inn"
                [loading]="isSearch"
                [typeahead]="searchParty$"
                [errorsMessages]="errorsMessages"
            >
                <ng-template #optionTemp let-item$="item$">
                    <evo-autocomplete-default-option
                        [label]="item$.label"
                        description="ИНН: {{item$.value.data.inn}}"
                    ></evo-autocomplete-default-option>
                </ng-template>
            </evo-autocomplete>
        </div>
    </form>
    <div style="margin: 20px 0 200px; text-align: center;">
        Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
    </div>
</div>
        `,
        props: {
            form: (new FormBuilder()).group({
                inn: ['', [Validators.required]],
                inn2: ['', [Validators.required]],
            }),
            errorsMessages,
            isSearch: false,
            searchParty$,
            parties$: switchQueryToList(searchParty$, function (query) {
                if (!query) {
                    return of([]);
                }
                this.isSearch = true;
                return from(fetch(`https://market-test.evotor.ru/api/dadata/public/suggestions/api/4_1/rs/suggest/party`, {
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
        },
    }));
