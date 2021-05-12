import { Directive, Input } from '@angular/core';

export enum EvoUploadDescriptionType {
    default = 'default',
    danger = 'danger',
    info = 'info',
    success = 'success',
}

const HOST_SELECTOR = 'evo-upload-description';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: `[${HOST_SELECTOR}]`,
    host: {
        class: `${HOST_SELECTOR}`,
        '[class]': 'descriptionTypeClass'
    }
})
export class EvoUploadDescriptionDirective {
    @Input(`${HOST_SELECTOR}`) type: EvoUploadDescriptionType;

    get descriptionTypeClass(): string {
        return `${HOST_SELECTOR}_${this.type}`;
    }
}
