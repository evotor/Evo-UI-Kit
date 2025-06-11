import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {EvoNavigationTabDirective, EVO_TAB_ACTIVATE} from './evo-navigation-tab.directive';
import {MutationObserverService} from '../../services/mutation-observer.service';
import {RouterLinkActiveService} from '../../services/router-link-active.service';
import {By} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {Router, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

enum RoutePath {
    FIRST = 'first',
    SECOND = 'second',
}

@Component({
    template: `
        <button evoNavigationTab routerLinkActive="active" [routerLink]="RoutePath.FIRST">Tab 1</button>
        <button evoNavigationTab routerLinkActive="active" [routerLink]="RoutePath.SECOND">Tab 2</button>
        <router-outlet></router-outlet>
    `,
})
class TestHostComponent {
    RoutePath = RoutePath;
}

const routes: Routes = [
    {path: RoutePath.FIRST, component: TestHostComponent},
    {path: RoutePath.SECOND, component: TestHostComponent},
];

describe('EvoNavigationTabDirective', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let buttonsEl: DebugElement[];
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestHostComponent, EvoNavigationTabDirective],
            providers: [
                {
                    provide: RouterLinkActiveService,
                    useValue: new Subject<boolean>(),
                },
                {
                    provide: MutationObserverService,
                    useValue: new Subject<void>(),
                },
            ],
            imports: [RouterTestingModule.withRoutes(routes)],
        }).compileComponents();

        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();

        buttonsEl = fixture.debugElement.queryAll(By.directive(EvoNavigationTabDirective));
    });

    it('should add evo-navigation-tab class to host element', () => {
        buttonsEl.forEach((button) => {
            expect(button.nativeElement.classList).toContain('evo-navigation-tab');
        });
    });

    it('should dispatch EVO_TAB_ACTIVATE custom event on click', (done) => {
        const button = buttonsEl[0].nativeElement;
        button.parentElement.addEventListener('click', () => {
            setTimeout(() => {
                const event = new CustomEvent(EVO_TAB_ACTIVATE, {
                    bubbles: true,
                });
                let received = false;
                button.addEventListener(EVO_TAB_ACTIVATE, () => {
                    received = true;
                });

                button.dispatchEvent(event);
                expect(received).toBeTrue();
                done();
            }, 0);
        });
        button.click();
    });

    it('should add "active" class to the correct tab when navigating', async () => {
        await router.navigate([RoutePath.FIRST]);
        fixture.detectChanges();

        const firstTab = buttonsEl[0].nativeElement;
        const secondTab = buttonsEl[1].nativeElement;

        expect(firstTab.classList).toContain('active');
        expect(secondTab.classList).not.toContain('active');

        await router.navigate([`/${RoutePath.SECOND}`]);
        fixture.detectChanges();

        expect(firstTab.classList).not.toContain('active');
        expect(secondTab.classList).toContain('active');
    });
});
