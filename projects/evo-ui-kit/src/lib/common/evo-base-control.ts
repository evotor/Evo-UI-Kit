import { AfterViewInit, Directive, Injector, Input } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { IEvoControlState } from './evo-control-state-manager/evo-control-state.interface';
import { IEvoControlError } from '../components/evo-control-error/evo-control-error.component';
import { EvoControlStates } from './evo-control-state-manager/evo-control-states.enum';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export class EvoBaseControl implements AfterViewInit {

    @Input() errorsMessages: IEvoControlError;
    @Input() state: IEvoControlState;

    control: AbstractControl;

    constructor(
        protected injector: Injector,
    ) {
    }

    initBaseControl() {
        const ngControl = this.injector?.get(NgControl, null);
        this.control = ngControl?.control;
    }

    ngAfterViewInit() {
        this.initBaseControl();
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
