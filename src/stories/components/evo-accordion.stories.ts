import { EvoAccordionModule, EvoButtonModule, EvoUiKitModule, EvoIconModule } from '@evo/ui-kit';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { icons } from '@evo/ui-kit/icons';

storiesOf('Components/Accordion', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        EvoAccordionModule,
        EvoButtonModule,
        EvoUiKitModule,
        EvoIconModule.forRoot([...icons])
      ],
    }),
  )
  .add('default', () => ({
    template: `
    <style>
      evo-button {
        width: max-content;
      }
    </style>

    <evo-accordion>
      <evo-accordion-panel>
        <evo-accordion-title label="Panel 1"></evo-accordion-title>
        <evo-accordion-content *evoIfExpanded="true">Panel 1 Content</evo-accordion-content>
      </evo-accordion-panel>

      <evo-accordion-panel>
        <evo-accordion-title label="Panel 2"></evo-accordion-title>
        <ng-template evoIfExpanded>
          <evo-accordion-content>Panel 2 Content</evo-accordion-content>
        </ng-template>
      </evo-accordion-panel>

      <evo-accordion-panel>
        <evo-accordion-title label="Panel 3 {{isExpandedPanel3 ? 'Opened' : 'Closed'}}"></evo-accordion-title>
        <ng-template evoIfExpanded (evoIfExpandedChange)="isExpandedPanel3 = $event">
          <evo-accordion-content>Panel 3 Content</evo-accordion-content>
        </ng-template>
      </evo-accordion-panel>

      <evo-accordion-panel>
        <evo-accordion-title label="Panel 4"></evo-accordion-title>
        <ng-template [(evoIfExpanded)]="isExpandedPanel4">
          <evo-accordion-content>Panel 4 Content</evo-accordion-content>
        </ng-template>
      </evo-accordion-panel>

      <evo-accordion-panel #panel5>
        <evo-accordion-title label="Panel 5"></evo-accordion-title>
        <evo-accordion-content *evoIfExpanded>Panel 5 Content</evo-accordion-content>
      </evo-accordion-panel>

    </evo-accordion>

    <evo-button color="lined" (click)="isExpandedPanel4 = !isExpandedPanel4">Toggle Panel 4</evo-button>
    <evo-button color="lined" (click)="panel5.toggle()">Toggle Panel 5</evo-button>
        `,
    props: {
      isExpandedPanel3: false,
      isExpandedPanel4: false
    }
  }))
  .add('custom', () => ({
    template: `
      <style>
        evo-accordion {
          margin: 30px;
        }

        evo-accordion > *:not(:last-child) {
          margin-bottom: 20px;
        }

        evo-accordion-panel {
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }

        evo-accordion-content {
          width: 50%;
          padding-left: 24px;
        }

        evo-accordion-content > * {
          margin-bottom: 12px;
        }

        evo-accordion-title {
          display: flex;
          cursor: pointer;
          justify-content: space-between;
          height: 100px;
          padding: 24px 24px 0 24px;
        }

        .accordion-title__section {
          display: flex;
          flex-direction: column;
        }

        .accordion-title__section > *:first-child {
          height: 26px;
          margin-bottom: 4px;
        }

        evo-icon[shape="check-rounded"] {
          fill: #21C68B;
          margin-right: 8px;
        }

        .evo-title {
          display: flex;
          align-items: center;
        }

        .accordion-content {
          padding: 0 24px 24px 24px;
        }

        .accordion-title__expander {
          fill: #448AFF;
          width: 28px;
          height: 28px;
          border: 2px solid #448AFF;
          border-radius: 50%;
          transition: transform .3s;
        }

        .accordion-title__expander_expanded {
          transform: rotate(180deg);
        }
      </style>

      <evo-accordion>
        <evo-accordion-panel *ngFor="let panel of panels">
          <evo-accordion-title>
            <div class="accordion-title__section">
              <h4 class="evo-title evo-title_h4">
                <evo-icon shape="check-rounded"></evo-icon>
                {{panel.title}}
              </h4>
              <span>Россия, Москва, Юго-Западныйадминистративный округ, район Тёплый Стан</span>
            </div>

            <div class="accordion-title__section">
              <span>Терминалы</span>
              <b>2 шт.</b>
            </div>

            <evo-icon class="accordion-title__expander"
                      shape="expand"
                      [class.accordion-title__expander_expanded]="panel.isExpanded">
            </evo-icon>
          </evo-accordion-title>

          <ng-template [(evoIfExpanded)]="panel.isExpanded">
            <evo-accordion-content>
                <p>
                  Невозможно установить приложение на терминалы с ИНН не совпадающим с ИНН подключенной ЭЦП.
                  Для получения новой ЭЦП — оставьте заявку в форме на этой странице и с вами свяжется наш менеджер.
                </p>
            </evo-accordion-content>
          </ng-template>
        </evo-accordion-panel>
      </evo-accordion>
    `,
    props: {
      panels: [
        {
          isExpanded: false,
          title: 'Panel 1'
        },
        {
          isExpanded: false,
          title: 'Panel 2'
        },
      ]
    }
  }));
