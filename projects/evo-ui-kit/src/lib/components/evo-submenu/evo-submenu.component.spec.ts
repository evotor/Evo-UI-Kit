import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoSubmenuComponent } from './evo-submenu.component';
import { EvoUiClassDirective, WINDOW_PROVIDERS } from 'evo-ui-kit';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { RouterModule } from '@angular/router';

describe('EvoSubmenuComponent', () => {
  let component: EvoSubmenuComponent;
  let fixture: ComponentFixture<EvoSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ NgxPageScrollModule, RouterModule ],
        declarations: [ EvoSubmenuComponent, EvoUiClassDirective ],
        providers: [ WINDOW_PROVIDERS ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
