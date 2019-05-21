import { Component } from '@angular/core';

@Component({
    selector: 'app-evo-table-wrapper',
    templateUrl: './evo-table-wrapper.component.html',
    styleUrls: [ './evo-table-wrapper.component.scss' ],
})
export class EvoTableWrapperComponent {

  data = [
      {
          bank: 'Модульбанк',
          amount: 'до 100 000 ₽',
          period: '24 мес.',
          percent: '12 %',
          delay: '1 день',
          button: 'Кнопка 1',
      },
      {
          bank: 'Промсвязьбанк',
          amount: 'до 300 000 ₽',
          period: 'до 12 мес.',
          percent: '13 %',
          delay: '1–3 дня',
          button: 'Кнопка 2',
      },
      {
          bank: 'Сбербанк',
          amount: 'до 500 000 ₽',
          period: 'до 24 мес.',
          percent: '14 %',
          delay: '2–4 дня',
          button: 'Кнопка 3',
      },
  ];
constructor() {}
}
