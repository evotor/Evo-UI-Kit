import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
    selector: 'button[evo-link-button], a[evo-link-button]',
    templateUrl: './evo-link-button.component.html',
    styleUrls: ['./evo-link-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoLinkButtonComponent {
    @Input() disabled: boolean;
    @Input() loading: boolean;
    @Input() loadingLabel = 'Подождите';

    @HostBinding('attr.disabled') get isDisabled(): boolean {
        return this.disabled || this.loading || null;
    }

    getContainerClasses(containerClass: string): string[] {
        const result = [];

        if (this.disabled) {
            result.push(`${containerClass}_disabled`);
        }

        if (this.loading) {
            result.push(`${containerClass}_loading`);
        }

        return result;
    }
}
