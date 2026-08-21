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
import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollableElement,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {EvoTableColumnComponent} from '../evo-table-column/evo-table-column.component';
import {EvoTableCellComponent} from '../evo-table-cell/evo-table-cell.component';
import {MOBILE_VIEW, MobileViewProvider} from '../../../common/constants/view-breakpoint-streams';
import {NgClass, NgTemplateOutlet} from '@angular/common';

/** Клик по этим элементам внутри ячейки не считается кликом по строке. */
const INTERACTIVE_ELEMENTS_SELECTOR = 'a, button, input, select, textarea, label';

/** Высота строки виртуализированного режима по умолчанию - та же, что у десктопной ячейки в стилях. */
const DEFAULT_ROW_HEIGHT = 48;

/**
 * Метрики мобильной карточки виртуализированного режима. Обязаны совпадать со стилями карточной
 * раскладки (блок `:host(.evo-table_virtual:not(.evo-table_desktop-view))` в SCSS): по ним
 * `virtualRowHeight` считает высоту карточки, а по ней вьюпорт позиционирует строки.
 */
const MOBILE_CARD_PADDING_Y = 8;
const MOBILE_CARD_CELL_HEIGHT = 40;
const MOBILE_CARD_CELL_GAP = 20;

/** Буфер вьюпорта в строках: сколько дорендеривать за пределами видимого окна. */
const BUFFER_ROWS_MIN = 4;
const BUFFER_ROWS_MAX = 8;

/** Мобильная раскладка `evo-table`: карточки (дефолт) или та же раскладка, что на десктопе. */
export type EvoTableMobileLayout = 'cards' | 'table';

/**
 * Нормализация входа `mobileLayout`: всё, что не `'table'` (включая `undefined`/`null` из опциональных
 * конфигов), ведёт себя как дефолт `'cards'` - чтобы гейты шапки, подписей строк и высоты строки
 * никогда не разъезжались на значении вне контракта (прецедент - клэмп `rowHeight`).
 * Тип параметра сознательно НЕ `unknown`: по нему strictTemplates проверяет значение в шаблоне
 * потребителя, и опечатка вроде `mobileLayout="tabel"` ловится компилятором, а не молча даёт карточки.
 */
function mobileLayoutAttribute(value: EvoTableMobileLayout | null | undefined): EvoTableMobileLayout {
    return value === 'table' ? 'table' : 'cards';
}

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
        CdkVirtualScrollableElement,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
    ],
    providers: [MobileViewProvider],
    host: {
        // фактически отрисованная раскладка - для стилей, которым нужно состояние DOM,
        // а не своя медиа-ширина (печать, карточный блок виртуализированного режима)
        '[class.evo-table_desktop-view]': '!isCardView',
        '[class.evo-table_virtual]': 'virtualScroll',
        // класс КОНФИГУРАЦИИ (не вьюпорта): включает табличную мобильную раскладку в SCSS
        '[class.evo-table_mobile-layout_table]': 'isTableLayout',
        // хост становится скролл-контейнером для плоской (невиртуализированной) табличной раскладки:
        // если колонки не влезают, таблица прокручивается по горизонтали. В виртуализированном
        // режиме класс не ставится - там горизонтальный скролл ведёт собственный вьюпорт CDK
        '[class.evo-table_scroll-x]': 'isTableLayout && !virtualScroll',
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
     * - высота строки фиксированная - `rowHeight` (на мобильном - высота карточки, см. ниже),
     *   контент по ней обрезается;
     * - раскладка строки - flex вместо `display: table`: ширины колонок не подстраиваются под контент
     *   (по умолчанию колонки равной ширины, ширина задаётся через `className` колонки);
     * - набор данных обновляется только новой ссылкой на массив `data`: вьюпорт читает строки через
     *   источник данных CDK, который пересоздаётся по смене ссылки входа, а не передиффывает массив
     *   на каждом проходе change detection, как обычный режим. Мутация на месте (`push`) не отрисуется;
     * - на мобильном вьюпорте строка рендерится карточкой ФИКСИРОВАННОЙ высоты: ячейки стопкой
     *   с подписями, подпись и значение - по одной строке с обрезкой многоточием; высоту карточки
     *   компонент считает сам из числа видимых колонок (см. `virtualRowHeight`), `rowHeight` на неё
     *   не влияет. Карточки выключаются входом `mobileLayout="table"` - тогда раскладка колоночная
     *   и высота строки `rowHeight` на всех вьюпортах. Темы мобильной раскладки (`evo-table_mobile`
     *   и родственные) не поддерживаются;
     * - Ctrl+F, печать, копирование таблицы целиком и обход скринридером видят только отрисованные строки.
     *
     * Подробности и обходные пути - в MIGRATION.md, раздел про виртуализацию.
     */
    @Input({transform: booleanAttribute}) virtualScroll = false;
    /**
     * Высота строки в пикселях для колоночной (десктопной) раскладки виртуализированного режима.
     * Строки единой фиксированной высоты - условие работы `FixedSizeVirtualScrollStrategy`: по этому
     * числу вьюпорт считает позицию скролла и видимое окно, не измеряя строки. Значение должно совпадать
     * с фактической высотой строки, иначе поедет позиционирование.
     * На мобильной карточной раскладке (дефолтный `mobileLayout="cards"`) и вне виртуализированного
     * режима вход не используется: высоту карточки компонент считает сам (см. `virtualRowHeight`).
     * При `mobileLayout="table"` высота строки равна `rowHeight` на всех вьюпортах.
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

    /**
     * Мобильная раскладка таблицы (вьюпорт уже `CSS_BREAKPOINTS.tablet`):
     * - `'cards'` (дефолт) - как раньше: ячейки стопкой с подписями строк, шапку прячет CSS;
     * - `'table'` - карточного преобразования нет: на всех вьюпортах та же раскладка, что на десктопе
     *   (в виртуализированном режиме - колоночная), шапка видна, подписи строк не рендерятся,
     *   высота строки виртуализации остаётся `rowHeight`.
     *
     * `'table'` адресован узким таблицам на 2-3 колонки, читаемым без карточек. Если колонки не
     * помещаются, плоская таблица прокручивается по горизонтали внутри своего контейнера (тело
     * страницы не сдвигается). В виртуализированном режиме скролла нет: flex-ячейки сжимаются
     * и обрезаются многоточием - задавайте ширины колонок так, чтобы они умещались.
     *
     * Темы мобильной раскладки (`evo-table_mobile`, `evo-table_mobile-align_right`,
     * `evo-table_with-title`) с `'table'` не поддерживаются - их стили дерутся с табличной раскладкой.
     * Тема `evo-table_mobile_short` этим входом покрывается: `'table'` - её исправленная замена
     * (шапка на мобильном видна, подписей строк нет в DOM).
     *
     * Неизвестное значение нормализуется трансформом в `'cards'`.
     */
    @Input({transform: mobileLayoutAttribute}) mobileLayout: EvoTableMobileLayout = 'cards';

    @Output() rowClick: EventEmitter<EvoTableRowClickEvent<T>> = new EventEmitter<EvoTableRowClickEvent<T>>();
    @ContentChildren(EvoTableColumnComponent) columns: QueryList<EvoTableColumnComponent>;

    /**
     * Мобильный вьюпорт - уже `CSS_BREAKPOINTS.tablet`; тот же порог, что у `@include media-tablet`
     * в стилях и у утилит `.mobile-show` / `.mobile-hide`.
     *
     * Сырой признак ширины. Карточные ветвления компонента считаются не от него, а от производного
     * `isCardView` (мобильный вьюпорт И карточки не выключены входом `mobileLayout`):
     * - гейт подписей строк (`.evo-table__label`): на десктопе и при `mobileLayout="table"` их нет
     *   в DOM, а не спрятаны через `display: none`. Скрытый узел стоит столько же, сколько видимый -
     *   он проверяется на каждом проходе change detection; у подписей таких узлов ~строки×столбцы,
     *   это главный источник фризов больших таблиц, поэтому их и убираем из DOM;
     * - класс хоста `.evo-table_desktop-view` - по нему стили печати и карточный блок
     *   виртуализированного режима узнают фактически отрисованную раскладку (при печати медиазапросы
     *   считаются по ширине листа, а не экрана);
     * - высота строки виртуализации `virtualRowHeight` (`itemSize` вьюпорта): раскладка строки и её
     *   высота обязаны переключаться от одного признака, иначе позиционирование вьюпорта разъедется
     *   с фактической высотой строк.
     *
     * Шапка по признаку НЕ гейтится из DOM: узлов у неё немного (по одному на колонку), а её
     * присутствие держит стабильными зебру (`nth-child` одинаково учитывает строку шапки на обеих
     * раскладках) и печать. На мобильном её прячет CSS: в обычном режиме - утилита `.mobile-hide`
     * (при `mobileLayout="table"` не вешается), в виртуализированном - классовый гейт карточного блока.
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

    /** Потребитель выключил карточное преобразование: `mobileLayout="table"`. */
    get isTableLayout(): boolean {
        return this.mobileLayout === 'table';
    }

    /**
     * Карточная раскладка фактически отрисована: вьюпорт мобильный И карточки не выключены.
     * Единственный признак "карточности" для всех точек компонента - гейта подписей строк, класса
     * хоста `evo-table_desktop-view` и высоты строки виртуализации (`virtualRowHeight`). Пары
     * "CSS-раскладка / JS-математика" переключаются только от него и разъехаться не могут.
     */
    get isCardView(): boolean {
        return !this.isTableLayout && this.isMobileView();
    }

    get rows(): T[] {
        return this.data ?? this.emptyRows;
    }

    /**
     * Высота строки, которой живёт виртуализация: `itemSize` вьюпорта, буферы и `height` каждой строки.
     * В колоночной раскладке (десктоп, а при `mobileLayout="table"` - любой вьюпорт) это `rowHeight`.
     * В карточной - высота карточки, вычисленная из числа видимых колонок по метрикам `MOBILE_CARD_*`:
     * ячейки фиксированной высоты с межъячеечным отступом плюс вертикальные поля карточки. Высоты
     * зафиксированы стилями, поэтому вьюпорт позиционирует строки без измерений - условие
     * `FixedSizeVirtualScrollStrategy` соблюдено.
     */
    get virtualRowHeight(): number {
        const cells = this.filteredColumns.length;
        if (!this.isCardView || cells === 0) {
            return this.rowHeight;
        }

        return cells * MOBILE_CARD_CELL_HEIGHT + (cells - 1) * MOBILE_CARD_CELL_GAP + 2 * MOBILE_CARD_PADDING_Y;
    }

    get minBufferPx(): number {
        return this.virtualRowHeight * BUFFER_ROWS_MIN;
    }

    get maxBufferPx(): number {
        return this.virtualRowHeight * BUFFER_ROWS_MAX;
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
     * Признак "серой" строки зебры для виртуализированного режима.
     *
     * В обычном режиме зебру красит CSS-правило `.evo-table__row:nth-child(2n)`, но в виртуализированном
     * оно неприменимо: в DOM лежит только окно строк, и позиция строки среди соседей не совпадает с её
     * индексом в данных, а при скролле ещё и меняется - раскраска бы "прыгала". Поэтому считаем признак
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
