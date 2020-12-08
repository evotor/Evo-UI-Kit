import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

export function phone(control: AbstractControl) {
    const clearedValue = control.value.replace(/[^\d]+/gi, '');

    if (clearedValue.length !== 11) {
        return {
            phone: false
        };
    } else {
        return null;
    }
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    // mask = null;

    mask = { mask: '+{7} (000) 000-00-00' };

    form = new FormBuilder().group({
        'test': ['', [Validators.required, phone]],
    });

    private newMask = { mask: 'Phone - 000' };

    patch() {
        this.form.get('test').patchValue('123');
    }

    changeMask() {
        this.mask = this.newMask;
    }
}

