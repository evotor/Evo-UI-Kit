import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormHelper {
    static validateControls(control: AbstractControl) {
        if (control instanceof FormControl) {
            control.markAsDirty();
            control.markAsTouched();
        } else if (control instanceof FormGroup || control instanceof FormArray) {
            for (let controlName in control.controls) {
                FormHelper.validateControls(control.controls[controlName]);
            }
        }
    }
}
