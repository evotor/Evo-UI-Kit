import {Component, HostBinding, Inject, Input, OnInit} from '@angular/core';
import {SidebarInjectionToken} from '../sidebar-injection-token';

@Component({
    selector: 'evo-sidebar-content, [evo-sidebar-content]',
    templateUrl: './evo-sidebar-content.component.html',
    styleUrls: ['./evo-sidebar-content.component.scss'],
})
export class EvoSidebarContentComponent implements OnInit {
    @Input() relativeFooter: boolean;

    private hostClass = 'evo-sidebar__content';

    constructor(@Inject(SidebarInjectionToken) private sidebar: any) {}

    ngOnInit() {
        if (!this.sidebar) {
            throw new Error(`EvoSidebarContentComponent must be used inside EvoSidebarComponent only!`);
        }

        this.relativeFooter = this.relativeFooter ?? this.sidebar.relativeFooter;
    }

    @HostBinding('class')
    get hostClasses() {
        return this.relativeFooter ? `${this.hostClass} evo-sidebar__content_relative-footer` : this.hostClass;
    }
}
