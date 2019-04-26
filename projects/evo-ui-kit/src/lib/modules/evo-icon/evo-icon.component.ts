import { Component, OnInit, Input, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EvoIconsService } from './services/evo-icons.service';

@Component({
    selector: 'evo-icon',
    templateUrl: './evo-icon.component.html',
    styleUrls: ['./evo-icon.component.scss']
})
export class EvoIconComponent implements OnInit {

    @Input() shape: string;

    @Input() svgWidth = 24;

    @Input() svgHeight = 24;

    @Input() viewBox: string;

    content: SafeHtml;

    get classes(): string[] {
        const classes = ['evo-icon'];
        if (this.shape) {
            classes.push('evo-icon_' + this.shape);
        }
        return classes;
    }

    constructor(
        private sanitizer: DomSanitizer,
        @Inject(EvoIconsService) private iconsService
    ) { }

    ngOnInit() {
        const paths = this.iconsService.paths;
        this.viewBox = `0 0 ${this.svgWidth} ${this.svgHeight}`;
        if (!paths[this.shape]) {
            throw new Error(`No icon with name "${this.shape}" was found. Please check UI Kit and import certain category to Icon Module`);
        }
        this.content = this.sanitizer.bypassSecurityTrustHtml(paths[this.shape]);
    }

}
