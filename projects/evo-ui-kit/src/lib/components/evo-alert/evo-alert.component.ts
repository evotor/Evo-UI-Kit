import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum EvoAlertTypes {
    danger = 'danger',
    success = 'success',
    warning = 'warning',
}

export enum EvoAlertVersions {
    legacy = 'legacy',
    current = 'current',
}

export enum EvoAlertSizes {
    large = 'large',
    normal = 'normal',
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
    @Input() size: EvoAlertSizes = EvoAlertSizes.normal;
    @Input() version: EvoAlertVersions = EvoAlertVersions.legacy;

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

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.type) {
            classes.push(this.type);
        }

        if (this.size) {
            classes.push(this.size);
        }

        if (this.version) {
            classes.push(this.version);
        }

        return classes;
    }
}
