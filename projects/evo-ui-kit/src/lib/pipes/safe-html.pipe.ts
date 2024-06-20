import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'safeHtml',
    standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private readonly sanitizer: DomSanitizer) {}

    transform(url) {
        return this.sanitizer.bypassSecurityTrustHtml(url);
    }
}
