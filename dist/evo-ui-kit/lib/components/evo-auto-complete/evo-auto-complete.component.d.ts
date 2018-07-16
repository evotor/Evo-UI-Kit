import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EvoBaseControl } from '../../common/evo-base-control';
export declare enum EvoAutoCompleteTypes {
    party = "party",
}
export declare class EvoAutoCompleteComponent extends EvoBaseControl implements ControlValueAccessor, OnInit {
    private http;
    private elementRef;
    type: EvoAutoCompleteTypes;
    disabled: boolean;
    input: FormControl;
    suggestions: any[];
    private _value;
    private valueAutoCompleted;
    readonly autoCompeteTypes: typeof EvoAutoCompleteTypes;
    constructor(http: HttpClient, elementRef: ElementRef);
    onChange: (value: any) => void;
    onTouched: () => void;
    handleDocumentClick(event: any): void;
    ngOnInit(): void;
    value: any;
    getSuggestionDataString(suggestion: any): string;
    handleSuggestionClick(event: any, suggestion: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(state: boolean): void;
    private requestSuggestions(query);
}
