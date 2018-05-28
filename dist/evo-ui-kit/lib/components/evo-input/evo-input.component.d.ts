import { AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
export declare class EvoInputComponent extends EvoBaseControl implements ControlValueAccessor, AfterViewInit {
    autoFocus: boolean;
    mask: any;
    placeholder: string;
    tooltip: string;
    type: string;
    _value: string;
    inputElement: any;
    onChange: any;
    onTouched: any;
    tooltipShown: boolean;
    disabled: boolean;
    private focused;
    private tooltipVisibilityTimeout;
    constructor();
    ngAfterViewInit(): void;
    value: any;
    readonly inputClass: {
        [cssClass: string]: boolean;
    };
    readonly hasAdditional: boolean;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(state: boolean): void;
    onFocus(): void;
    onBlur(): void;
    onTooltipClick(event: any): void;
    hideTooltip(): void;
    showTooltip(): void;
}
