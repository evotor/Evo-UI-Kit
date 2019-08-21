import { Component } from '@angular/core';
import { EvoTabsModule } from '../../projects/evo-ui-kit/src/lib/components/evo-tabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    testList = ['apple', 'banana', 'me'];

}
