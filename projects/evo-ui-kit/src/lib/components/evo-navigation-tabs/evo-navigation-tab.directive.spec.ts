import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {EvoNavigationTabDirective, EVO_TAB_ACTIVATE} from './evo-navigation-tab.directive';
import {MutationObserverService} from '../../services/mutation-observer.service';
import {RouterLinkActiveService} from '../../services/router-link-active.service';
import {By} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {Router, RouterModule, Routes} from '@angular/router';

enum RoutePath {
    FIRST = 'first',
    SECOND = 'second',
}

@Component({
    template: `
        <button evoNavigationTab routerLinkActive="active" [routerLink]="routePath.FIRST">Tab 1</button>
        <button evoNavigationTab routerLinkActive="active" [routerLink]="routePath.SECOND">Tab 2</button>
        <router-outlet />
    `,
})
class TestHostComponent {
    routePath = RoutePath;
}

const routes: Routes = [
    {path: RoutePath.FIRST, component: TestHostComponent},
    {path: RoutePath.SECOND, component: TestHostComponent},
];

describe('EvoNavigationTabDirective', (): void => {
    let fixture: ComponentFixture<TestHostComponent>;
    let buttonsEl: DebugElement[];
    let router: Router;

    beforeEach(async (): Promise<void> => {
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
            imports: [RouterModule.forRoot(routes)],
        }).compileComponents();

        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();

        buttonsEl = fixture.debugElement.queryAll(By.directive(EvoNavigationTabDirective));
    });

    it('should add evo-navigation-tab class to host element', (): void => {
        buttonsEl.forEach((button): void => {
            expect(button.nativeElement.classList).toContain('evo-navigation-tab');
        });
    });

    it('should dispatch EVO_TAB_ACTIVATE custom event on click', (done): void => {
        const button = buttonsEl[0].nativeElement;
        button.parentElement.addEventListener('click', (): void => {
            setTimeout((): void => {
                const event = new CustomEvent(EVO_TAB_ACTIVATE, {
                    bubbles: true,
                });
                let received = false;
                button.addEventListener(EVO_TAB_ACTIVATE, (): void => {
                    received = true;
                });

                button.dispatchEvent(event);
                expect(received).toBeTrue();
                done();
            }, 0);
        });
        button.click();
    });

    it('should add "active" class to the correct tab when navigating', async (): Promise<void> => {
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
