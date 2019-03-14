import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoUiKitModule } from 'evo-ui-kit';
import '!style-loader!css-loader!sass-loader!./evo-auto-complete.scss';
import { Subject, concat, of, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map, mergeMap } from 'rxjs/operators';

const searchCity$: Subject<any> = new Subject();
const cities$ = concat(
    of([]), // Initial Value
    searchCity$.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((query) => {
            if (!query) { return of([]); }
            return from(fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': 'Token 6a62e779b984f0353e87931ebc384d2c736aafa9',
                },
                body: JSON.stringify({ query: query, count: 6 }),
            })).pipe(
                mergeMap((res) => {
                    return from(res.json());
                }),
                catchError(() => of([])), // Empty list on Error
                map(res => {
                    return res['suggestions'].map(s => ({ value: s.data.city_fias_id, data: s.data, label: s.value }));
                }),
            );
        }),
    ),
);

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
            <evo-auto
                [items]="cities$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="cityFiasId"
                [loading]="isCitiesSearch"
                [typeahead]="searchCity$"></evo-auto>
        </form>
        <pre>{{form.value | json}}</pre>
        `,
        props: {
            form: (new FormBuilder()).group({
                cityFiasId: [ '', [ Validators.required ] ],
            }),
            isCitiesSearch: false,
            searchCity$,
            cities$,
        },
    }));
