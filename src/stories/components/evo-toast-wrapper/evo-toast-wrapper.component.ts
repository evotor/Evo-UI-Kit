import { Component } from '@angular/core';
import { EvoToastService } from '@evo/ui-kit';
import { EvoToastTypes } from '../../../../projects/evo-ui-kit/src/lib/components/evo-toast/evo-toast.component';
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

    constructor(
        private evoToastService: EvoToastService,
    ) {

    }

    showToast(type: EvoToastTypes) {
        this.evoToastService.push({
            type: type,
            message: this.form.get('message').value,
        });
    }
}
