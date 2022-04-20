import { Directive, Injector, Input } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { IEvoControlState } from './evo-control-state-manager/evo-control-state.interface';
import { IEvoControlError } from '../components/evo-control-error';
import { EvoControlStates } from './evo-control-state-manager/evo-control-states.enum';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class EvoBaseControl {

    @Input() errorsMessages: IEvoControlError;
    @Input() state: IEvoControlState;
    @Input() readonly autofocus: boolean;

    private _control: AbstractControl;

    constructor(
        protected injector: Injector,
    ) {
    }

    get control(): AbstractControl {
        if (!this._control) {
            this.initBaseControl();
        }
        return this._control;
    }

    set control(control: AbstractControl) {
        this._control = control;
    }

    focus?(): void;

    initBaseControl() {
        const ngControl = this.injector?.get(NgControl, null);
        if (ngControl?.control) {
            this._control = ngControl?.control;
        }
    }

    get currentState(): IEvoControlState {
        return Object.assign(
            {
                valid: this.control ? this.control.dirty && this.control.touched && this.control.valid : undefined,
                invalid: this.control ? this.control.dirty && this.control.touched && this.control.invalid : undefined,
            },
            this.state,
        );
    }

    get showErrors(): boolean {
        return this.currentState[EvoControlStates.invalid];
    }

}
