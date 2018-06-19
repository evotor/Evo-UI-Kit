import { Component, Input } from '@angular/core';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule, EvoSidebarService } from 'evo-ui-kit';


@Component({
  selector: 'evo-sidebar-wrapper',
  template: `
  <evo-sidebar [id]="id" [title]="title">
    <ng-content select="[content]" content></ng-content>
    <ng-content select="[footer]" footer></ng-content>
  </evo-sidebar>
  <evo-button (click)="onClick()">Показать сайдбар</evo-button>
  `,
})
export class EvoSidebarWrapperComponent {
  @Input() id;
  @Input() title;

  constructor(
    private evoSidebarService: EvoSidebarService,
  ) {
  }

  onClick() {
    this.evoSidebarService.open(this.id);
  }
}


storiesOf('Components/EvoSidebar', module)
  .addDecorator(
    moduleMetadata({
      declarations: [
        EvoSidebarWrapperComponent,
      ],
      imports: [
        EvoUiKitModule.forRoot(),
      ],
    }),
  )
  .add('default', () => ({
    template: `
    <evo-sidebar-wrapper [id]="id" [title]="title">
      <div content>{{content}}</div>
      <div footer>{{footer}}</div>
    </evo-sidebar-wrapper>
    `,
    props: {
      id: 'basket',
      title: 'Заголовок сайдбара',
      content: 'Контент сайдбара',
      footer: 'Футер сайдбара',
    },
  }));
