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

    form = new FormBuilder().group({
        'test': ['', [Validators.required, phone]],
    });

    patch() {
        this.form.get('test').patchValue('123');
    }
}

