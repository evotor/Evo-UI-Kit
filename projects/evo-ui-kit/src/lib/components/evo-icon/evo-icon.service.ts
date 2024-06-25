import {inject, Injectable, SecurityContext} from '@angular/core';
import {Observable, shareReplay} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';
import {map} from 'rxjs/operators';
import {IconOptions} from './interfaces/icon-options';

@Injectable({providedIn: 'root'})
export class EvoIconService {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly httpClient = inject(HttpClient);

    private readonly cache = new Map<string, Observable<SafeHtml>>();

    /**
     * Returns an Observable which produces the string contents of the given icon.
     * Results cached, so future calls with the same URL not cause another HTTP request.
     */
    fetchIcon(safeUrl: SafeResourceUrl, options?: IconOptions): Observable<SafeHtml> {
        const withCredentials = options?.withCredentials ?? false;

        if (safeUrl == null) {
            throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }

        const url = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);

        if (!url) {
            throw Error(
                `Provided URL was not trusted as a resource URL ` +
                    `via Angular's DomSanitizer. Attempted URL was "${url}".`,
            );
        }

        // Store in-progress fetches to avoid sending a duplicate requests
        const inProgressFetch = this.cache.get(url);

        if (inProgressFetch) {
            return inProgressFetch;
        }

        const req = this.httpClient.get(url, {responseType: 'text', withCredentials}).pipe(
            map((res) => {
                const svgExp = /(\<svg[^\>]*\>)|(\<\/svg>)|\n/g;
                const svg = res.replace(svgExp, '').trim();
                // Security: This SVG is fetched from a SafeResourceUrl, and is thus trusted HTML.
                return this.sanitizer.bypassSecurityTrustHtml(svg);
            }),
            shareReplay(1),
        );

        this.cache.set(url, req);
        return req;
    }
}
