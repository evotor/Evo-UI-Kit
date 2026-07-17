import {
    AfterContentInit,
    booleanAttribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    DestroyRef,
    EventEmitter,
    inject,
    Input,
    numberAttribute,
    OnChanges,
    Output,
    QueryList,
    SimpleChanges,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {EvoTableColumnComponent} from '../evo-table-column/evo-table-column.component';
import {EvoTableCellComponent} from '../evo-table-cell/evo-table-cell.component';
import {MOBILE_VIEW, MobileViewProvider} from '../../../common/constants/view-breakpoint-streams';
import {NgClass, NgTemplateOutlet} from '@angular/common';

/** Клик по этим элементам внутри ячейки не считается кликом по строке. */
const INTERACTIVE_ELEMENTS_SELECTOR = 'a, button, input, select, textarea, label';

/** Высота строки виртуализированного режима по умолчанию - та же, что у десктопной ячейки в стилях. */
const DEFAULT_ROW_HEIGHT = 48;

/** Буфер вьюпорта в строках: сколько дорендеривать за пределами видимого окна. */
const BUFFER_ROWS_MIN = 4;
const BUFFER_ROWS_MAX = 8;

// eslint-disable-next-line
export interface EvoTableRowClickEvent<T = any> {
    payload: {
        item: T;
        rowIndex: number;
    };
    event: MouseEvent | KeyboardEvent;
}

@Component({
    selector: 'evo-table',
    templateUrl: './evo-table.component.html',
    styleUrls: ['./evo-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgClass,
        NgTemplateOutlet,
        EvoTableCellComponent,
        CdkVirtualScrollViewport,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
    ],
    providers: [MobileViewProvider],
    host: {
        // выбранная раскладка - для стилей, которым нужно фактическое состояние DOM, а не своя медиа-ширина (печать)
        '[class.evo-table_desktop-view]': '!isMobileView()',
        '[class.evo-table_virtual]': 'virtualScroll',
    },
})
// eslint-disable-next-line
export class EvoTableComponent<T = any> implements AfterContentInit, OnChanges {
    filteredColumns: EvoTableColumnComponent[] = [];

    @Input() data: T[];
    @Input() showHeader = true;
    @Input() visibleColumns: string[];
    /**
     * Классы строки: статическое значение `NgClass` или функция `(row, item) => NgClass`.
     * Функциональная форма вычисляется в биндинге на каждом проходе change detection строки
     * (стоимость O(строк)), поэтому она реактивна к внешнему состоянию - например, подсветка
     * выбранной строки по клику обновляется на том же тике, что и клик. Держите функцию чистой и дешёвой.
     */
    @Input() rowClasses?: NgClass['ngClass'] | ((row: number, item: T) => NgClass['ngClass']);
    /**
     * Тайтл строки: статическая строка или функция `(row, item) => string`.
     * Функциональная форма вычисляется в биндинге на каждом проходе change detection строки
     * и реактивна к внешнему состоянию (см. `rowClasses`). Держите функцию чистой и дешёвой.
     */
    @Input() rowTitle?: string | ((row: number, item: T) => string);
    @Input() rowTrackBy?: (index: number, item: T) => unknown;

    /**
     * Виртуализация строк (opt-in, по умолчанию выключена).
     *
     * Включённая держит в DOM только видимое окно строк плюс буфер, поэтому стоимость change detection
     * и рендера перестаёт зависеть от размера страницы пагинации: 1000 строк стоят столько же, сколько 20.
     * Выключенная - таблица работает ровно как раньше, вёрстка и контракт не меняются.
     *
     * Режим меняет вёрстку и вводит ограничения, поэтому включается явно. Внутри режима:
     * - хост ОБЯЗАН иметь ограниченную высоту (`height` / `max-height` или растяжение внутри flex-контейнера):
     *   вьюпорт скроллит строки сам и тянется по хосту; без заданной высоты таблица схлопнется в ноль;
     * - высота строки фиксированная и равна `rowHeight`, контент по ней обрезается;
     * - раскладка строки - flex вместо `display: table`: ширины колонок не подстраиваются под контент
     *   (по умолчанию колонки равной ширины, ширина задаётся через `className` колонки);
     * - набор данных обновляется только новой ссылкой на массив `data`: вьюпорт читает строки через
     *   источник данных CDK, который пересоздаётся по смене ссылки входа, а не передиффывает массив
     *   на каждом проходе change detection, как обычный режим. Мутация на месте (`push`) не отрисуется;
     * - мобильная раскладка стопкой и подписи строк не применяются, шапка видна на всех вьюпортах;
     * - Ctrl+F, печать, копирование таблицы целиком и обход скринридером видят только отрисованные строки.
     *
     * Подробности и обходные пути - в MIGRATION.md, раздел про виртуализацию.
     */
    @Input({transform: booleanAttribute}) virtualScroll = false;
    /**
     * Высота строки в пикселях для виртуализированного режима.
     * Строки единой фиксированной высоты - условие работы `FixedSizeVirtualScrollStrategy`: по этому
     * числу вьюпорт считает позицию скролла и видимое окно, не измеряя строки. Значение должно совпадать
     * с фактической высотой строки, иначе поедет позиционирование.
     * Вне виртуализированного режима вход не используется.
     *
     * Только положительное конечное число: `numberAttribute` на не-число даёт `NaN`, и без клэмпа
     * `itemSize`/`height`/буферы стали бы `NaN` (вьюпорт молча не отрисовал бы ни строки), а на
     * отрицательном CDK бросил бы `maxBufferPx must be greater than or equal to minBufferPx`.
     * Некорректное значение откатывается на дефолт.
     */
    @Input({transform: numberAttribute})
    set rowHeight(value: number) {
        this._rowHeight = Number.isFinite(value) && value > 0 ? value : DEFAULT_ROW_HEIGHT;
    }
    get rowHeight(): number {
        return this._rowHeight;
    }
    private _rowHeight = DEFAULT_ROW_HEIGHT;

    @Output() rowClick: EventEmitter<EvoTableRowClickEvent<T>> = new EventEmitter<EvoTableRowClickEvent<T>>();
    @ContentChildren(EvoTableColumnComponent) columns: QueryList<EvoTableColumnComponent>;

    /**
     * Мобильная раскладка - вьюпорт уже `CSS_BREAKPOINTS.tablet`; тот же порог, что у `@include media-tablet`
     * в стилях и у утилит `.mobile-show` / `.mobile-hide`.
     *
     * По этому признаку из DOM гейтятся ТОЛЬКО подписи строк (`.evo-table__label`): на десктопе их нет в DOM,
     * а не спрятаны через `display: none`. Скрытый узел стоит столько же, сколько видимый - он проверяется
     * на каждом проходе change detection; у подписей таких узлов ~строки×столбцы, и это главный источник
     * фризов больших таблиц, поэтому их и убираем из DOM.
     *
     * Шапка так НЕ гейтится: узлов у неё немного (по одному на колонку), а её присутствие в DOM держит
     * стабильными зебру (`nth-child` одинаково учитывает строку шапки на обеих раскладках) и печать.
     * На мобильном её прячет CSS-утилита `.mobile-hide`, как и раньше.
     *
     * Признак также ставит класс хоста `.evo-table_desktop-view` - по нему стили печати узнают фактически
     * отрисованную раскладку (при печати медиазапросы считаются по ширине листа, а не экрана).
     *
     * На виртуализированный режим признак не влияет: там раскладка всегда колоночная, подписей строк нет,
     * а шапка видна на всех вьюпортах (см. `virtualScroll`).
     */
    readonly isMobileView = toSignal(inject(MOBILE_VIEW), {initialValue: false});

    /**
     * Связанная ссылка на `trackRow` для `*cdkVirtualFor`: директива зовёт `trackBy` без контекста
     * компонента, поэтому сам метод передать нельзя.
     */
    readonly trackVirtualRow = (index: number, item: T): unknown => this.trackRow(index, item);

    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    /**
     * Стабильная пустая ссылка на случай `data === undefined`: `*cdkVirtualFor` при смене ссылки входа
     * пересоздаёт источник данных, а литерал `[]` в шаблоне давал бы новую ссылку на каждом проходе.
     */
    private readonly emptyRows: T[] = [];

    get isRowClickable(): boolean {
        return this.rowClick.observed;
    }

    get rows(): T[] {
        return this.data ?? this.emptyRows;
    }

    get minBufferPx(): number {
        return this.rowHeight * BUFFER_ROWS_MIN;
    }

    get maxBufferPx(): number {
        return this.rowHeight * BUFFER_ROWS_MAX;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('visibleColumns' in changes) {
            this.filterColumns();
        }
    }

    ngAfterContentInit(): void {
        this.filterColumns();
        this.columns.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((): void => {
            this.filterColumns();
            this.cdr.markForCheck();
        });
    }

    trackRow(index: number, item: T): unknown {
        return this.rowTrackBy ? this.rowTrackBy(index, item) : index;
    }

    /**
     * Признак «серой» строки зебры для виртуализированного режима.
     *
     * В обычном режиме зебру красит CSS-правило `.evo-table__row:nth-child(2n)`, но в виртуализированном
     * оно неприменимо: в DOM лежит только окно строк, и позиция строки среди соседей не совпадает с её
     * индексом в данных, а при скролле ещё и меняется - раскраска бы «прыгала». Поэтому считаем признак
     * от индекса данных, повторяя смещение на строку шапки: в обычном режиме она первый ребёнок
     * контейнера и сдвигает отсчёт `nth-child`, так что раскраска строк в обоих режимах совпадает.
     */
    isStripedRow(row: number): boolean {
        return (row + (this.showHeader ? 1 : 0)) % 2 === 1;
    }

    onRowClick(rowIndex: number, item: T, event: MouseEvent | KeyboardEvent): void {
        const target = event.target as HTMLElement | null;
        if (target?.closest(INTERACTIVE_ELEMENTS_SELECTOR)) {
            return;
        }

        if (event instanceof KeyboardEvent) {
            // не скроллить страницу по Space на сфокусированной строке
            event.preventDefault();
        }

        this.rowClick.emit({
            payload: {rowIndex, item},
            event: event,
        });
    }

    getClasses(row: number, item: T): NgClass['ngClass'] {
        return typeof this.rowClasses === 'function' ? this.rowClasses(row, item) : this.rowClasses;
    }

    getTitle(row: number, item: T): string | undefined {
        return typeof this.rowTitle === 'function' ? this.rowTitle(row, item) : this.rowTitle;
    }

    private filterColumns(): void {
        if (!this.columns) {
            return;
        }

        this.filteredColumns = this.visibleColumns
            ? this.columns.filter((col): boolean => col.prop !== undefined && this.visibleColumns.includes(col.prop))
            : this.columns.toArray();
    }
}
