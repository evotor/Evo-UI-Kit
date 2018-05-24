import { AfterContentInit, ContentChild, Input } from "@angular/core";
import { AbstractControl, FormControlDirective, FormControlName } from "@angular/forms";
import { IEvoControlState } from "./evo-control-state-manager/evo-control-state.interface";
import { EvoControlStateManager } from "./evo-control-state-manager/evo-control-state-manager";
import { IEvoControlError } from "../components/evo-control-error/evo-control-error.component";
import { EvoControlStates } from "./evo-control-state-manager/evo-control-states.enum";

export class EvoBaseControl implements AfterContentInit {
    @ContentChild(FormControlName) formControlName: FormControlName;
    @ContentChild(FormControlDirective) formControlDirective: FormControlDirective;
    @Input() state: IEvoControlState;
    @Input() errorsMessages: IEvoControlError;

    control: AbstractControl;
    stateManager: EvoControlStateManager;

    ngAfterContentInit() {
        if (this.formControlName && this.formControlName.control) {
            this.control = this.formControlName.control;
        } else if (this.formControlDirective && this.formControlDirective.control) {
            this.control = this.formControlDirective.control;
        }

        if (this.control) {
            this.stateManager = new EvoControlStateManager(this.control, this.state);
        } else {
            throw new Error('No template driven forms allowed with EvoUi kit');
        }
    }

    get showErrors(): boolean {
        return this.stateManager.currentState[EvoControlStates.invalid];
    }
}
