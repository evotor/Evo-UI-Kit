import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TabsService } from '../evo-tabs.service';

@Component({
    selector: 'evo-tab, [evoTab]',
    templateUrl: './evo-tab.component.html',
    styleUrls: ['./evo-tab.component.scss']
})
export class EvoTabComponent implements OnInit {

    @Input() id: string;
    @Input() tabName: string;
    isActive = false;

    constructor(
        private tabsService: TabsService,
        private cd: ChangeDetectorRef,
    ) {
    }

    ngOnInit() {
        this.tabsService.getEventsSubscription(this.id).subscribe((data: {id: string, tab: string}) => {
            this.cd.detectChanges();
            console.log('tab event');
            this.isActive = this.tabName === data.tab;
        });

        this.tabsService.registerTab(this.id, this.tabName);
    }
}
