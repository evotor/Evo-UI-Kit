import {Component, Inject, Input, OnInit} from '@angular/core';
import {EvoSidebarService} from '@evo/ui-kit';
import {EVO_SIDEBAR_DATA} from 'projects/evo-ui-kit/src/lib/components/evo-sidebar';
import {SidebarInjectionToken} from 'projects/evo-ui-kit/src/lib/components/evo-sidebar/sidebar-injection-token';

@Component({
    selector: 'sidebar-dynamic',
    template: `
        <div evo-sidebar-header>Sidebar Title</div>
        <div evo-sidebar-content [relativeFooter]="false">
            <p>Message: {{ data?.message }}</p>
            <p>
                🚨 You should add mixin '@include sidebar-inner;' to element which wraps header, content, footer.
                Otherwise footer always will be relative
            </p>
        </div>
        <div evo-sidebar-footer>Footer content</div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }
        `,
    ],
})
export class SidebarDynamicComponent implements OnInit {
    constructor(@Inject(EVO_SIDEBAR_DATA) public data: any, @Inject(SidebarInjectionToken) public sidebar: any) {}
    ngOnInit() {}
}

@Component({
    selector: 'app-evo-sidebar-wrapper',
    templateUrl: './evo-sidebar-wrapper.component.html',
    styleUrls: ['./evo-sidebar-wrapper.component.scss'],
})
export class EvoSidebarWrapperComponent implements OnInit {
    @Input() id;
    @Input() header;
    @Input() content;
    @Input() footer;
    @Input() size;
    @Input() relativeFooter = false;
    @Input() backButton;
    @Input() isDynamic;

    constructor(private evoSidebarService: EvoSidebarService) {}

    ngOnInit() {}

    onClick() {
        if (this.isDynamic) {
            this.evoSidebarService.open('dynamic', {
                component: SidebarDynamicComponent,
                data: {
                    message: 'Some message passed to dynamic component',
                },
            });
        } else {
            this.evoSidebarService.open(this.id);
        }
    }

    onBackClick() {
        console.log('back');
    }
}
