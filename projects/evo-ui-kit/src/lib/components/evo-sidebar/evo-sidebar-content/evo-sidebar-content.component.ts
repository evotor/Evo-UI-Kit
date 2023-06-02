import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {AbstractSidebarChildComponent} from '../classes/abstract-sidebar-child-component.directive';

@Component({
    selector: 'evo-sidebar-content, [evo-sidebar-content]',
    templateUrl: './evo-sidebar-content.component.html',
    styleUrls: ['./evo-sidebar-content.component.scss'],
})
export class EvoSidebarContentComponent extends AbstractSidebarChildComponent implements OnInit {
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
