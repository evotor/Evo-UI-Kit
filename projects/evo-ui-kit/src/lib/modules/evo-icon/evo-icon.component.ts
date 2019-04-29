import { Component, OnInit, Input, Inject, HostBinding } from '@angular/core';
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

    @HostBinding('class.evo-icon') hostClass = true;

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
        const shapes = this.iconsService.shapes;
        this.viewBox = `0 0 ${this.svgWidth} ${this.svgHeight}`;
        if (!shapes[this.shape]) {
            throw new Error(`No icon with name "${this.shape}" was found. Please check UI Kit and import certain category to Icon Module`);
        }
        this.content = this.sanitizer.bypassSecurityTrustHtml(shapes[this.shape]);
    }

}
