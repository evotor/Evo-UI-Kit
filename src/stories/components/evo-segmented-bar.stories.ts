import { FormsModule } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

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
        EvoUiKitModule,
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
  .add('with button color', () => ({
    template: `
      <evo-segmented-bar>
          <evo-segmented-bar-button
              *ngFor="let option of optionsList"
              name="filterList"
              [color]="'orange'"
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
  }));
