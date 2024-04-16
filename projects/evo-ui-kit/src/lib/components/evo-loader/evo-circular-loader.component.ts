import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

const defaultId = `clip-path-`;

@Component({
    selector: 'evo-circular-loader',
    templateUrl: './evo-circular-loader.component.html',
    styleUrls: ['./evo-circular-loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCircularLoaderComponent implements OnInit {
    clipPathId: string = defaultId;

    ngOnInit(): void {
        this.clipPathId += `${defaultId}${Math.random().toString(36).substring(2)}`;
    }
}
