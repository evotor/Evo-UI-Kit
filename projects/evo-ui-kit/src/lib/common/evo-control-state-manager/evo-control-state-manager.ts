import {AbstractControl} from '@angular/forms';
import {IEvoControlState} from './evo-control-state.interface';

export class EvoControlStateManager {
    control: AbstractControl;

    constructor(control: AbstractControl, extraStates?: IEvoControlState) {
        this.control = control;
    }

    get currentState(): IEvoControlState {
        // TODO merge conditions with extraStates

        return {
            valid: this.control.dirty && this.control.touched && this.control.valid,
            invalid: this.control.dirty && this.control.touched && this.control.invalid,
        };
    }
}
