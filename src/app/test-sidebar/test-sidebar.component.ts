import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-test-sidebar',
    templateUrl: './test-sidebar.component.html',
    styleUrls: ['./test-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestSidebarComponent {
    currentPosition = new FormControl();
}
