import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { EvoToastService, EvoToastTypes } from '@evotor-dev/ui-kit';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-evo-toast-wrapper',
    templateUrl: './evo-toast-wrapper.component.html',
    styleUrls: [ './evo-toast-wrapper.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    showTemplateToast(template: TemplateRef<any>) {
        this.evoToastService.push({
            type: EvoToastTypes.DEFAULT,
            templateRef: template,
        });
    }
}
