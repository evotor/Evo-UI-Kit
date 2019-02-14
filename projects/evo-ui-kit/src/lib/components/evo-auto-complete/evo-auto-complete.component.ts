import { Component, ElementRef, forwardRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EvoBaseControl } from '../../common/evo-base-control';
import { tap, switchMap, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs';

export enum EvoAutoCompleteTypes {
    party = 'party',
    address = 'address',
}

@Component({
    selector: 'evo-auto-complete',
    templateUrl: './evo-auto-complete.component.html',
    styleUrls: [ './evo-auto-complete.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoAutoCompleteComponent),
            multi: true,
        },
    ],
})
export class EvoAutoCompleteComponent extends EvoBaseControl implements ControlValueAccessor, OnInit {

    @Input() type: EvoAutoCompleteTypes = EvoAutoCompleteTypes.party;
    disabled = false;
    input: FormControl = new FormControl();
    suggestions: any[];

    private _value: any;
    private valueAutoCompleted = false;

    readonly autoCompeteTypes = EvoAutoCompleteTypes;

    constructor(
        private http: HttpClient,
        private elementRef: ElementRef,
    ) {
        super();
    }

    onChange = (value) => {};
    onTouched = () => {};

    @HostListener('document:click', [ '$event' ])
    handleDocumentClick(event: any) {
        if (event.path.indexOf(this.elementRef.nativeElement) === -1 && this.suggestions) {
            this.valueAutoCompleted = true;
            this.input.setValue('', {
                emitEvent: false,
                onlySelf: true,
            });
            this.suggestions = null;
            this.value = '';
        }
    }

    ngOnInit() {
        this.input.valueChanges.pipe(
            debounceTime(300),
            switchMap((query: string) => {
                if (this.valueAutoCompleted) {
                    this.valueAutoCompleted = false;
                    return of(null);
                }
                return this.requestSuggestions(query);
            }),
            tap((response: any) => {
                this.suggestions = response ? response.suggestions : null;
            }),
        ).subscribe();
    }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        this._value = value;
        this.onChange(value);
    }

    getSuggestionDataString(suggestion: any): string {
        let result = null;

        if (suggestion && suggestion.data) {
            const inn: string = suggestion.data.inn;
            const { address } = suggestion.data;

            if (inn) {
                result = `${inn} ${address ? address.value : ''}`;
            }
        }

        return result;
    }

    handleSuggestionClick(suggestion: any) {
        this.valueAutoCompleted = true;
        this.input.setValue(suggestion.value, {
            emitEvent: false,
            onlySelf: true,
        });
        this.suggestions = null;
        this.value = suggestion;
    }

    writeValue(value: any): void {
        if (value) {
            this.input.setValue(value, {
                emitEvent: false,
                onlySelf: true,
            });
            this.value = { value };
        } else {
            this.input.setValue('');
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
        state ? this.input.disable({ onlySelf: true, emitEvent: false }) :
            this.input.enable({ onlySelf: true, emitEvent: false });
    }

    //  TODO Create generic way to get DaData suggestions/any backend data to show
    private requestSuggestions(query: string) {
        const headers = new HttpHeaders()
            .set('Authorization', 'Token 6a62e779b984f0353e87931ebc384d2c736aafa9')
            .set('Content-Type', 'application/json');

        const options = {
            headers,
        };

        return this.http.post<any>(
            `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/${this.type}`,
            { query, count: 4 }, options,
        );
    }
}
