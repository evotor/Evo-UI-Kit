import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoTabsComponent } from './evo-tabs.component';
import { EvoTabsService } from './evo-tabs.service';

describe('EvoTabsComponent', () => {

    let component: EvoTabsComponent;
    let fixture: ComponentFixture<EvoTabsComponent>;
    let tabsEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                EvoTabsComponent,
            ],
            providers: [EvoTabsService],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        tabsEl = fixture.nativeElement.querySelector('.evo-tabs');
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
