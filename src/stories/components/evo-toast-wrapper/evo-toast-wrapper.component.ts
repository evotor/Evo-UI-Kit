import { Component } from '@angular/core';
import { EvoToastService, EvoToastTypes } from '@evo/ui-kit';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-evo-toast-wrapper',
    templateUrl: './evo-toast-wrapper.component.html',
    styleUrls: [ './evo-toast-wrapper.component.scss' ],
})
export class EvoToastWrapperComponent {
    form: FormGroup = new FormGroup({
        message: new FormControl(''),
    });

    toastTypes = EvoToastTypes;

    typesArr: EvoToastTypes[];

    constructor(
        private evoToastService: EvoToastService,
    ) {
        this.typesArr = Object.keys(this.toastTypes).map(type => this.toastTypes[type]);
    }

    showToast(type: EvoToastTypes, force = false) {
        const toast = {
            type: type,
            message: this.form.get('message').value
        };
        if (force) {
            this.evoToastService.force(toast);
        } else {
            this.evoToastService.push(toast);
        }
    }
}
