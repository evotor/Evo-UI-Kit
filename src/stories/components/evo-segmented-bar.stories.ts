import {FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {EvoSegmentedBarModule, EvoButtonModule, EvoNoteModule} from '@evotor-dev/ui-kit';

const deprecationWarning = `
<div style="margin-bottom: 32px; padding-bottom: 32px; border-bottom: solid 1px grey">
<evo-note iconSrc="assets/color-icons/alert-circle.svg" type="danger"><strong>DEPRECATED</strong><br>Компоненты <strong>evo-segmented-bar</strong> и <strong>evo-segmented-bar-button</strong> устарели. Они будут удалены в следующем мажорном релизе библиотеки. Используйте <code>evo-chip</code>.</evo-note>
</div>
`;

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

export default {
    title: 'Components/SegmentedBar',

    decorators: [
        moduleMetadata({
            imports: [FormsModule, ReactiveFormsModule, EvoSegmentedBarModule, EvoButtonModule, EvoNoteModule],
        }),
    ],
};

export const Default = () => ({
    template: `
        ${deprecationWarning}
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
});

Default.storyName = 'default';

export const _FormControl = () => ({
    template: `
        ${deprecationWarning}
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
            <p><button evoButton (click)="patchSome()">patch some control</button></p>
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
        list: [
            {
                presentationText: 'first button',
                value: 1,
            },
            {
                presentationText: 'second button',
                value: 2,
            },
        ],
        patchSome: function () {
            this.someGroup.patchValue({
                prop: this.someGroup.value.prop === 1 ? 2 : 1,
            });
        },
    },
});

_FormControl.storyName = 'formControl';

export const WithButtonColor = () => ({
    template: `
        ${deprecationWarning}
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
});

WithButtonColor.storyName = 'with button color';

export const WithBarLabel = () => ({
    template: `
        ${deprecationWarning}
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
});

WithBarLabel.storyName = 'with bar label';

export const WithDynamicLabelWidthResizeWindow = () => ({
    template: `
      ${deprecationWarning}
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
});

WithDynamicLabelWidthResizeWindow.storyName = 'with dynamic label width (resize window)';

export const WithCounter = () => ({
    template: `
      ${deprecationWarning}
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
});

WithCounter.storyName = 'with counter';

export const WithDisabledButton = () => ({
    template: `
        ${deprecationWarning}
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
});

WithDisabledButton.storyName = 'with disabled button';
