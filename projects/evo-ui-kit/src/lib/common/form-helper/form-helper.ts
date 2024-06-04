import {EventEmitter} from '@angular/core';
import {AbstractControl, UntypedFormArray, UntypedFormControl, UntypedFormGroup} from '@angular/forms';

export class FormHelper {
    static validateControls(control: AbstractControl) {
        if (control instanceof UntypedFormControl) {
            control.markAsDirty();
            control.markAsTouched();
            (control.statusChanges as EventEmitter<string>).emit(control.status);
        } else if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
            for (const controlName of Object.keys(control.controls)) {
                FormHelper.validateControls(control.controls[controlName]);
            }
        }
    }

    static resetControls(control: AbstractControl) {
        if (control instanceof UntypedFormControl) {
            control.markAsPristine();
            control.markAsUntouched();
            control.setValue('', {
                emitEvent: false,
                onlySelf: true,
            });
        } else if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
            for (const controlName of Object.keys(control.controls)) {
                FormHelper.resetControls(control.controls[controlName]);
            }
        }
    }
}
