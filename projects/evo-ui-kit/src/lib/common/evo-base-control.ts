import { AfterContentInit, ContentChild, Input } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName } from '@angular/forms';
import { IEvoControlState } from './evo-control-state-manager/evo-control-state.interface';
import { IEvoControlError } from '../components/evo-control-error/evo-control-error.component';
import { EvoControlStates } from './evo-control-state-manager/evo-control-states.enum';

export class EvoBaseControl implements AfterContentInit {

    @ContentChild(FormControlName) formControlName: FormControlName;
    @ContentChild(FormControlDirective) formControlDirective: FormControlDirective;

    @Input() errorsMessages: IEvoControlError;
    @Input() state: IEvoControlState;

    control: AbstractControl;

    ngAfterContentInit() {
        if (this.formControlName && this.formControlName.control) {
            this.control = this.formControlName.control;
        } else if (this.formControlDirective && this.formControlDirective.control) {
            this.control = this.formControlDirective.control;
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
        return this.currentState[ EvoControlStates.invalid ];
    }

}
