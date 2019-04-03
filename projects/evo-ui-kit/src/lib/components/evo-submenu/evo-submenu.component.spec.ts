import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoSubmenuComponent } from './evo-submenu.component';
import { EvoUiClassDirective, WINDOW_PROVIDERS } from '../../evo-ui-kit.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';

describe('EvoSubmenuComponent', () => {
  let component: EvoSubmenuComponent;
  let fixture: ComponentFixture<EvoSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ NgxPageScrollModule ],
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
