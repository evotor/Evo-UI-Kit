import { Component } from '@angular/core';

@Component({
  selector: 'evo-table-dynamic-columns',
  templateUrl: './evo-table-dynamic-columns.component.html',
  styleUrls: ['./evo-table-dynamic-columns.component.scss'],
})
export class EvoTableDynamicColumnsComponent {

  columns = [
    { prop: 'bank', show: true, label: 'Банк' },
    { prop: 'amount', show: true, label: 'Сумма' },
    { prop: 'period', show: true, label: 'Срок' },
    { prop: 'percent', show: true, label: 'Процент' },
    { prop: 'delay', show: true, label: 'Получение денег' },
  ];

  data = [
    {
      bank: 'Модульбанк',
      amount: 'до 100 000 ₽',
      period: '24 мес.',
      percent: '12 %',
      delay: '1 день',
    },
    {
      bank: 'Промсвязьбанк',
      amount: 'до 300 000 ₽',
      period: 'до 12 мес.',
      percent: '13 %',
      delay: '1–3 дня',
    },
    {
      bank: 'Сбербанк',
      amount: 'до 500 000 ₽',
      period: 'до 24 мес.',
      percent: '14 %',
      delay: '2–4 дня',
    },
  ];

  visibleColumns = [];

  constructor() {
    this.filterColumns();
  }

  filterColumns() {
    this.visibleColumns = this.columns.filter(col => col.show).map(col => col.prop);
  }

}
