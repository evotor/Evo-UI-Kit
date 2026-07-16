import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {EvoTableColumnComponent} from '../evo-table-column/evo-table-column.component';

/**
 * Внутренний OnPush-подкомпонент ячейки данных `evo-table`.
 *
 * Форматированное значение (`value`) вычисляется один раз в `ngOnChanges` при смене ссылки любого
 * из входов (`column`, `item`, `row`, `col`) и не переоценивается на проходах change detection
 * родителя - ячейки с неизменившимися входами пропускаются. Это и есть основной выигрыш O(строк×столбцов).
 *
 * Контракт иммутабельности (что НЕ триггерит пересчёт без смены ссылки входа):
 * - `item` - in-place мутация полей строки без смены ссылки на объект;
 * - `column.formatter` / `column.prop` - подмена этих полей на том же инстансе `column`
 *   (сам `column` - стабильная ссылка на `EvoTableColumnComponent`, поэтому мутация его полей
 *   change detection не запускает; чтобы применить новый форматтер/prop, дайте новый инстанс колонки);
 * - внешнее состояние, на которое ссылается шаблон `#content` напрямую (мимо контекста `value`):
 *   ячейка OnPush и её шаблон не переоценивается, пока не изменилась ссылка одного из входов.
 *
 * Практика: смена набора данных должна давать новые ссылки на элементы; всё, что должно попадать
 * в ячейку, прогоняйте через `formatter` и читайте из контекста `value`, а не из внешних переменных.
 *
 * Деталь реализации `EvoTableComponent`, не экспортируется в public-api.
 */
@Component({
    selector: 'evo-table-cell',
    templateUrl: './evo-table-cell.component.html',
    styleUrls: ['./evo-table-cell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgTemplateOutlet],
})
// eslint-disable-next-line
export class EvoTableCellComponent<T = any> implements OnChanges {
    @Input() column: EvoTableColumnComponent;
    @Input() item: T;
    @Input() row: number;
    @Input() col: number;

    /** Форматированное значение ячейки, попадающее в контекст шаблона `#content`. */
    // eslint-disable-next-line
    value: any;

    ngOnChanges(): void {
        // eslint-disable-next-line
        const cellValue = this.column.prop !== undefined ? (this.item as any)[this.column.prop] : this.item;
        this.value = this.column.formatter(this.row, this.col, cellValue, this.item);
    }
}
