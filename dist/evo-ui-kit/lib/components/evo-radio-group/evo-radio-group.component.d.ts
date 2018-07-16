import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
import { IOptions } from './typings/options';
export declare class EvoRadioGroupComponent extends EvoBaseControl implements ControlValueAccessor, OnInit {
    private formBuilder;
    options: IOptions;
    _value?: string;
    formGroup: any;
    private disabled;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(formBuilder: FormBuilder);
    value: string;
    ngOnInit(): void;
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(state: boolean): void;
    /**
    * Геттер на возможные варианты отчета в формате массива
    * презентационного текста для радио группа
    */
    readonly optionArray: IOptions[];
    /**
    * Генерирует из опций массив
    * @param source объект с вариантами
    */
    private generateOptionArray(source);
    /**
    * Создание группы
    */
    private createFormGroup();
    /**
    * Обработчик на смену значения
    * @param value значение
    */
    onChangedValue(value: string): void;
}
