import { HostBinding, Input } from '@angular/core';

import { Component } from '@angular/core';

export enum EvoUploadLabelType {
    default = 'default',
    danger = 'danger',
    info = 'info',
    success = 'success',
}

@Component({
    selector: 'evo-upload-label',
    templateUrl: './evo-upload-label.component.html',
    host: {
        class: 'evo-upload-label',
    },
    styleUrls: ['./evo-upload-label.component.scss']
})
export class EvoUploadLabelComponent {
    @Input() iconShape: string;
    @Input() type: EvoUploadLabelType;

    @HostBinding('class') get labelTypeClass() {
        if (!this.type) {
            return;
        }
        return `evo-upload-label_${this.type}`;
    }
}

