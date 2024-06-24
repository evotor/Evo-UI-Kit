import {ChangeDetectionStrategy, Component} from '@angular/core';
import {EvoIconComponent} from '../evo-icon/evo-icon.component';

@Component({
    selector: 'evo-navigation-button',
    templateUrl: './evo-navigation-button.component.html',
    styleUrls: ['./evo-navigation-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [EvoIconComponent],
})
export class EvoNavigationButtonComponent {}
