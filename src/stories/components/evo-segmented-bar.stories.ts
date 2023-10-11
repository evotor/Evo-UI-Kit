import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoSegmentedBarModule, EvoButtonModule } from '@evo/ui-kit';

const optionsList = [
    {
        label: 'Все',
        value: 'all',
        counter: 14,
    },
    {
        label: 'Поддержка',
        value: 'support',
        counter: 12,
    },
    {
        label: 'Оплата',
        value: 'payment',
        counter: 2,
    },
    {
        label: 'Зарплата',
        value: 'cash',
        counter: 5,
    },
    {
        label: 'Штрафы',
        value: 'fines',
        counter: 2,
    },
];

const selectedFilterValue = 'all';

storiesOf('Components/SegmentedBar', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoSegmentedBarModule,
                EvoButtonModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
      <evo-segmented-bar>
          <evo-segmented-bar-button
              *ngFor="let option of optionsList"
              name="filterList"
              [value]="option.value"
              [(ngModel)]="selectedFilterValue"
          >
              {{ option.label }}
          </evo-segmented-bar-button>
      </evo-segmented-bar>
      `,
        props: {
            optionsList,
            selectedFilterValue,
        },
    }))
    .add('formControl', () => ({
        template: `
        <div [formGroup]="someGroup">
            <evo-segmented-bar class="segmented-bar">
                <evo-segmented-bar-button
                    name="some"
                    *ngFor="let item of list"
                    [value]="item.value"
                    formControlName="prop"
                >{{ item.presentationText }}
                </evo-segmented-bar-button>
            </evo-segmented-bar>
            <br>
            <p><evo-button (click)="patchSome()">patch some control</evo-button></p>
            <br>
            <pre>{{someGroup.value | json}}</pre>
            <br>
            <br>
        </div>`,
        props: {
            optionsList,
            selectedFilterValue,
            someGroup: new FormGroup({
                prop: new FormControl(1),
            }),
            list: [ {
                presentationText: 'first button',
                value: 1,
            }, {
                presentationText: 'second button',
                value: 2,
            } ],
            patchSome: function () {
                this.someGroup.patchValue({
                    prop: this.someGroup.value.prop === 1 ? 2 : 1,
                });
            },
        },
    }))
    .add('with button color', () => ({
        template: `
        <div>
            <h4 style="margin-top: 10px;">white (default)</h4>
            <div style="background-color: #F4F6F8; padding: 20px;">
                <evo-segmented-bar>
                    <evo-segmented-bar-button
                        *ngFor="let option of optionsList"
                        name="filterList"
                        [color]="'white'"
                        [value]="option.value"
                        [(ngModel)]="selectedFilterValue"
                    >
                        {{ option.label }}
                    </evo-segmented-bar-button>
                </evo-segmented-bar>
            </div>
            <h4 style="margin-top: 30px;">grey</h4>
            <div style="padding: 20px;">
                <evo-segmented-bar>
                    <evo-segmented-bar-button
                        *ngFor="let option of optionsList"
                        name="filterListSecond"
                        [color]="'grey'"
                        [value]="option.value"
                        [(ngModel)]="selectedFilterValueSecond"
                    >
                        {{ option.label }}
                    </evo-segmented-bar-button>
                </evo-segmented-bar>
            </div>
        </div>
      `,
        props: {
            optionsList,
            selectedFilterValue,
            selectedFilterValueSecond: 'all',
        },
    }))
    .add('with bar label', () => ({
        template: `
      <evo-segmented-bar
        label="Заголовок"
      >
          <evo-segmented-bar-button
              *ngFor="let option of optionsList"
              name="filterList"
              [value]="option.value"
              [(ngModel)]="selectedFilterValue"
          >
              {{ option.label }}
          </evo-segmented-bar-button>
      </evo-segmented-bar>
      `,
        props: {
            optionsList,
            selectedFilterValue,
        },
    }))
    .add('with dynamic label width (resize window)', () => ({
        template: `
      <evo-segmented-bar
          label="Длинный заголовок:"
          labelShort="Заголовок:"
      >
          <evo-segmented-bar-button
              *ngFor="let option of optionsList"
              name="filterList"
              [value]="option.value"
              [(ngModel)]="selectedFilterValue"
          >
              {{ option.label }}
          </evo-segmented-bar-button>
      </evo-segmented-bar>
      `,
        props: {
            optionsList,
            selectedFilterValue,
        },
    }))
    .add('with counter', () => ({
        template: `
      <evo-segmented-bar
          label="Длинный заголовок:"
      >
          <evo-segmented-bar-button
              *ngFor="let option of optionsList"
              name="filterList"
              [value]="option.value"
              [(ngModel)]="selectedFilterValue"
          >
              <span>{{ option.label }}</span>
              <span data-type="counter" *ngIf="option.counter">{{ option.counter }}</span>
          </evo-segmented-bar-button>
      </evo-segmented-bar>
      `,
        props: {
            optionsList,
            selectedFilterValue,
        },
    }))
    .add('with disabled button', () => ({
        template: `
          <evo-segmented-bar>
              <evo-segmented-bar-button
                  name="filterList"
                  value="one"
                  [(ngModel)]="selected"
              >
                  {{ 'Скандалы' }}
              </evo-segmented-bar-button>
              <evo-segmented-bar-button
                  name="filterList"
                  value="second"
                  [(ngModel)]="selected"
              >
                  {{ 'Интриги' }}
              </evo-segmented-bar-button>
              <evo-segmented-bar-button
                  name="filterList"
                  value="third"
                  [(ngModel)]="selected"
              >
                  {{ 'Расследования' }}
              </evo-segmented-bar-button>
              <evo-segmented-bar-button
                  name="filterList"
                  value="fourth"
                  [(ngModel)]="selected"
                  [disabled]="true"
              >
                  {{ 'Показать все что скрыто' }}
              </evo-segmented-bar-button>
          </evo-segmented-bar>
          `,
        props: {
            selected: 'one',
        },
    }));
