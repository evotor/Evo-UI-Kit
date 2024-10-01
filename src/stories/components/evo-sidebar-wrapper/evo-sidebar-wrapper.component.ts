import {Component, Inject, Input} from '@angular/core';
import {EvoButtonModule, EvoSidebarService} from '@evotor-dev/ui-kit';
import {
    EVO_SIDEBAR_DATA,
    EvoSidebarComponent,
    EvoSidebarContentComponent,
    EvoSidebarFooterComponent,
    EvoSidebarHeaderComponent,
} from 'projects/evo-ui-kit/src/lib/components/evo-sidebar';

@Component({
    selector: 'sidebar-dynamic',
    template: `
        <div evo-sidebar-header>Sidebar Title</div>
        <div evo-sidebar-content [relativeFooter]="false">
            <p>Message: {{ data?.message }}</p>
            <p>
                🚨 You should add mixin '&#64;include sidebar-inner;' to element which wraps header, content, footer.
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
    standalone: true,
    imports: [EvoSidebarHeaderComponent, EvoSidebarContentComponent, EvoSidebarFooterComponent],
})
export class SidebarDynamicComponent {
    constructor(@Inject(EVO_SIDEBAR_DATA) public data: any) {}
}

@Component({
    selector: 'app-evo-sidebar-wrapper',
    templateUrl: './evo-sidebar-wrapper.component.html',
    styleUrls: ['./evo-sidebar-wrapper.component.scss'],
    standalone: true,
    imports: [SidebarDynamicComponent, EvoButtonModule, EvoSidebarComponent],
})
export class EvoSidebarWrapperComponent {
    @Input() id;
    @Input() header;
    @Input() content;
    @Input() footer;
    @Input() size;
    @Input() relativeFooter = false;
    @Input() backButton;
    @Input() isDynamic;

    constructor(private evoSidebarService: EvoSidebarService) {}

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
