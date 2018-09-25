import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum EvoAlertTypes {
    danger = 'danger',
    success = 'success',
}

export enum EvoAlertDefaultIcons {
    exclamation = 'exclamation',
    success = 'success',
}

@Component({
    selector: 'evo-alert',
    templateUrl: './evo-alert.component.html',
    styleUrls: [ './evo-alert.component.scss' ],
})
export class EvoAlertComponent {
    @Input() closable = false;
    @Input() icon: string;
    @Input() iconSrc: string;
    @Input() type: EvoAlertTypes = EvoAlertTypes.success;

    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    hasDefaultIcon() {
        if (!this.icon) {
            return false;
        }

        return EvoAlertDefaultIcons[ this.icon ];
    }

    handleCloseClick() {
        this.close.emit();
    }
}
