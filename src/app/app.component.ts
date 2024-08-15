import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly dateControl = new FormControl(null, [Validators.required]);
    readonly dateRangeControl = new FormControl();

    onButtonClick(): void {
        this.dateControl.setValue(new Date());
    }
}
