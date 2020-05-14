import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EvoChipTheme, EvoChipType } from '../../projects/evo-ui-kit/src/lib/components/evo-chip';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    form = new FormBuilder().group({
        'test': ['', [Validators.required]],
        'chipControl': null,
        'secondChipControl': null,
    });

    types = EvoChipType;
    themes = EvoChipTheme;
}

