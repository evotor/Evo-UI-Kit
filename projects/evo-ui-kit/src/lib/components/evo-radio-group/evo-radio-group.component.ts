import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { EvoBaseControl } from "../../common/evo-base-control";
import { IOptions } from "./typings/options";

@Component({
    selector: 'evo-radio-group',
    templateUrl: './evo-radio-group.component.html',
    styleUrls: ['./evo-radio-group.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoRadioGroup),
            multi: true
        }
    ],
})
export class EvoRadioGroup extends EvoBaseControl implements ControlValueAccessor, OnInit {
    @Input() options: IOptions;
    @Input('value') _value?: string;
    
    onChange = (_) => {};
    onTouched = () => {};

    public formGroup;

    private disabled: boolean = false;

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
        this.onChange(value);
    }

    ngOnInit() {
        this.createFormGroup(); 
    }

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
    }

    /**
    * Геттер на возможные варианты отчета в формате массива 
    * презентационного текста для радио группа
    */
    get optionArray(): IOptions[] {
        return this.generateOptionArray(this.options);
    }

    /**
    * Генерирует из опций массив
    * @param source объект с вариантами
    */
    private generateOptionArray(source: IOptions): IOptions[] {
        let array = [];

        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                array.push(source[key]);
            }
        }

        return array;
    }

    /**
    * Создание группы
    */
    private createFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            value: [this.value]
        });
    }

    /**
    * Обработчик на смену значения
    * @param value значение
    */
    public onChangedValue(value: string): void {
        this.value = value;
    }
}
