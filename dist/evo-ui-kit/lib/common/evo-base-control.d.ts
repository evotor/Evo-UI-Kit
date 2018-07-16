import { AfterContentInit } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName } from '@angular/forms';
import { IEvoControlState } from './evo-control-state-manager/evo-control-state.interface';
import { IEvoControlError } from '../components/evo-control-error/evo-control-error.component';
export declare class EvoBaseControl implements AfterContentInit {
    formControlName: FormControlName;
    formControlDirective: FormControlDirective;
    errorsMessages: IEvoControlError;
    state: IEvoControlState;
    control: AbstractControl;
    ngAfterContentInit(): void;
    readonly currentState: IEvoControlState;
    readonly showErrors: boolean;
}
