import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly dateControl = new FormControl();
    readonly dateRangeControl = new FormControl();
}
