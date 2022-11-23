import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {AbstractSidebarSectionComponent} from '../classes/abstract-sidebar-section-component';

@Component({
    selector: 'evo-sidebar-content, [evo-sidebar-content]',
    templateUrl: './evo-sidebar-content.component.html',
    styleUrls: ['./evo-sidebar-content.component.scss'],
})
export class EvoSidebarContentComponent extends AbstractSidebarSectionComponent implements OnInit {
    @Input() relativeFooter: boolean;

    private readonly hostClass = 'evo-sidebar__content';

    ngOnInit(): void {
        this.relativeFooter = this.relativeFooter ?? this.hostSidebar?.relativeFooter ?? false;
    }

    @HostBinding('class')
    get hostClasses(): string {
        return this.relativeFooter ? `${this.hostClass} evo-sidebar__content_relative-footer` : this.hostClass;
    }
}
