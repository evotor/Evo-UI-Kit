import { AfterContentInit } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName } from '@angular/forms';
import { IEvoControlState } from './evo-control-state-manager/evo-control-state.interface';
import { EvoControlStateManager } from './evo-control-state-manager/evo-control-state-manager';
import { IEvoControlError } from '../components/evo-control-error/evo-control-error.component';
export declare class EvoBaseControl implements AfterContentInit {
    formControlName: FormControlName;
    formControlDirective: FormControlDirective;
    state: IEvoControlState;
    errorsMessages: IEvoControlError;
    control: AbstractControl;
    stateManager: EvoControlStateManager;
    ngAfterContentInit(): void;
    readonly showErrors: boolean;
}
