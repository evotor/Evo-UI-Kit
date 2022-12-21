import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * @deprecated use `EvoNoteComponent`
 */
export enum EvoAlertTypes {
    danger = 'danger',
    info = 'info',
    success = 'success',
    warning = 'warning',
}

/**
 * @deprecated use `EvoNoteComponent`
 */
export enum EvoAlertSizes {
    large = 'large',
    normal = 'normal',
}

/**
 * @deprecated use `EvoNoteComponent`
 */
export enum EvoAlertDefaultIcons {
    exclamation = 'exclamation',
    success = 'success',
}

@Component({
    selector: 'evo-alert',
    templateUrl: './evo-alert.component.html',
    styleUrls: [ './evo-alert.component.scss' ],
})
/**
 * @deprecated use `EvoNoteComponent`
 */
export class EvoAlertComponent {
    @Input() closable = false;
    @Input() icon: string;
    @Input() iconSrc: string;
    @Input() type: EvoAlertTypes = EvoAlertTypes.success;
    @Input() size: EvoAlertSizes = EvoAlertSizes.normal;

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

        return classes;
    }
}
