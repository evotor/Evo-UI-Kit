import {EvoTableComponent, EvoTableRowClickEvent} from '../index';
import {createComponentFactory, createHostFactory, Spectator, SpectatorHost} from '@ngneat/spectator';
import {BehaviorSubject} from 'rxjs';
import {fakeAsync, flush} from '@angular/core/testing';
import {CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {EvoTableColumnComponent} from '../evo-table-column/evo-table-column.component';
import {MOBILE_VIEW} from '../../../common/constants/view-breakpoint-streams';

/**
 * Раскладка таблицы зависит от вьюпорта, а он гейтит рендер шапки и подписей строк.
 * Стрим подменяется, чтобы тесты не зависели от размера окна karma.
 */
const mobileView$ = new BehaviorSubject<boolean>(false);
const mobileViewProvider = {provide: MOBILE_VIEW, useValue: mobileView$};

describe('EvoTableComponent', () => {
    let spectator: Spectator<EvoTableComponent>;
    const createComponent = createComponentFactory({
        component: EvoTableComponent,
        componentProviders: [mobileViewProvider],
    });

    beforeEach(() => mobileView$.next(false));
    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component instanceof EvoTableComponent).toBeTruthy();
    });

    it('should hide header', () => {
        spectator.setInput('showHeader', false);
        expect(spectator.query('.evo-table__row_head')).toBeNull();
    });

    it('should return event on row click', () => {
        spectator = createComponent({detectChanges: false});
        const mouseEvent = new MouseEvent('');
        let output;
        spectator.output<{type: string}>('rowClick').subscribe((result) => (output = result));

        spectator.component.onRowClick(1, 1, mouseEvent);
        spectator.detectChanges();

        expect(output).toEqual({
            payload: {rowIndex: 1, item: 1},
            event: mouseEvent,
        });
    });
});

describe('EvoTableComponentWithHost', () => {
    let spectator: SpectatorHost<EvoTableComponent>;
    const createHost = createHostFactory({
        imports: [EvoTableColumnComponent],
        component: EvoTableComponent,
        componentProviders: [mobileViewProvider],
    });
    const data = [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'},
    ];

    beforeEach(() => mobileView$.next(false));

    it('should display all columns when "visibleColumns" is not defined', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                },
            },
        );
        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(2);
    });

    it('should display only one column', () => {
        const visibleColumns = ['id'];
        spectator = createHost(
            `
            <evo-table [data]="data" [visibleColumns]="visibleColumns">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    visibleColumns,
                },
            },
        );
        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(1);
    });

    it('should display all columns when "visibleColumns" is provided with all props', () => {
        const visibleColumns = ['id', 'name'];
        spectator = createHost(
            `
            <evo-table [data]="data" [visibleColumns]="visibleColumns">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    visibleColumns,
                },
            },
        );
        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(2);
    });

    it('should keep DOM rows in place when items are swapped (default tracking by index)', () => {
        const a = {id: 1, name: 'a'};
        const b = {id: 2, name: 'b'};
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data: [a, b],
                },
            },
        );
        const rowSelector = '.evo-table__row:not(.evo-table__row_head)';
        const [firstRowBefore] = spectator.queryAll(rowSelector);

        spectator.setHostInput('data', [b, a]);

        const [firstRowAfter] = spectator.queryAll(rowSelector);
        expect(firstRowAfter).toBe(firstRowBefore);
        expect(firstRowAfter.textContent).toContain('b');
    });

    it('should reuse a DOM row for the item with the same key when "rowTrackBy" is provided', () => {
        spectator = createHost(
            `
            <evo-table [data]="data" [rowTrackBy]="rowTrackBy">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data: [
                        {id: 1, name: 'a'},
                        {id: 2, name: 'b'},
                    ],
                    rowTrackBy: (index: number, item: {id: number}) => item.id,
                },
            },
        );
        const rowSelector = '.evo-table__row:not(.evo-table__row_head)';
        const [firstRowBefore] = spectator.queryAll(rowSelector);

        // новые инстансы с теми же ключами, в обратном порядке
        spectator.setHostInput('data', [
            {id: 2, name: 'b'},
            {id: 1, name: 'a'},
        ]);

        const rowsAfter = spectator.queryAll(rowSelector);
        expect(rowsAfter[1]).toBe(firstRowBefore);
        expect(rowsAfter[1].textContent).toContain('a');
    });

    it('should render a column added after init when it matches "visibleColumns"', () => {
        spectator = createHost(
            `
            <evo-table [data]="data" [visibleColumns]="visibleColumns">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                @if (showName) {
                    <evo-table-column prop="name" label="Name"></evo-table-column>
                }
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    visibleColumns: ['id', 'name'],
                    showName: false,
                },
            },
        );
        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(1);

        spectator.hostComponent['showName'] = true;
        spectator.detectChanges();

        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(2);
    });

    it('should pass the formatted cell value to the content template context', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name" [formatter]="upperCase">
                    <ng-template #content let-value="value">
                        <span class="formatted">{{ value }}</span>
                    </ng-template>
                </evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    upperCase: (row: number, col: number, cellValue: unknown) => String(cellValue).toUpperCase(),
                },
            },
        );

        const cells = spectator.queryAll('.formatted');
        expect(cells.map((c) => c.textContent.trim())).toEqual(['A', 'B']);
    });

    it('should not emit rowClick when an interactive element inside a cell is clicked', () => {
        spectator = createHost(
            `
            <evo-table [data]="data" (rowClick)="onRowClick($event)">
                <evo-table-column prop="name" label="Name">
                    <ng-template #content>
                        <button class="inner-action">delete</button>
                    </ng-template>
                </evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    onRowClick: jasmine.createSpy('onRowClick'),
                },
            },
        );
        const rowClickSpy = spectator.hostComponent['onRowClick'] as jasmine.Spy;

        spectator.click('.inner-action');
        expect(rowClickSpy).not.toHaveBeenCalled();

        spectator.click('.evo-table__row:not(.evo-table__row_head)');
        expect(rowClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should make clickable rows focusable and emit rowClick on Enter and Space', () => {
        spectator = createHost(
            `
            <evo-table [data]="data" (rowClick)="onRowClick($event)">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    onRowClick: jasmine.createSpy('onRowClick'),
                },
            },
        );
        const rowClickSpy = spectator.hostComponent['onRowClick'] as jasmine.Spy;
        const row = spectator.query('.evo-table__row:not(.evo-table__row_head)') as HTMLElement;

        expect(row.getAttribute('tabindex')).toBe('0');

        spectator.dispatchKeyboardEvent(row, 'keydown', 'Enter');
        spectator.dispatchKeyboardEvent(row, 'keydown', ' ');

        expect(rowClickSpy).toHaveBeenCalledTimes(2);
    });

    it('should not make rows focusable when rowClick is not used', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {hostProps: {data}},
        );
        const row = spectator.query('.evo-table__row:not(.evo-table__row_head)') as HTMLElement;

        expect(row.getAttribute('tabindex')).toBeNull();
    });

    it('should expose table semantics via ARIA roles', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {hostProps: {data}},
        );

        expect(spectator.query('.evo-table').getAttribute('role')).toBe('table');
        expect(spectator.query('.evo-table__row_head').getAttribute('role')).toBe('row');
        expect(spectator.query('.evo-table__cell_head').getAttribute('role')).toBe('columnheader');
        expect(spectator.query('.evo-table__row:not(.evo-table__row_head)').getAttribute('role')).toBe('row');
        expect(spectator.query('.evo-table__cell:not(.evo-table__cell_head)').getAttribute('role')).toBe('cell');
    });

    it('should mark the table row-clickable when rowClick is subscribed after init', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {hostProps: {data}},
        );

        expect(spectator.query('.evo-table_row-clickable')).toBeNull();

        spectator.component.rowClick.subscribe();
        spectator.setHostInput('data', [...data]);

        expect(spectator.query('.evo-table_row-clickable')).not.toBeNull();
    });

    it('should emit rowClick with the clicked item and row index on DOM click', () => {
        spectator = createHost(
            `
            <evo-table [data]="data" (rowClick)="onRowClick($event)">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    onRowClick: jasmine.createSpy('onRowClick'),
                },
            },
        );
        const rowClickSpy = spectator.hostComponent['onRowClick'] as jasmine.Spy;

        const rows = spectator.queryAll('.evo-table__row:not(.evo-table__row_head)');
        spectator.click(rows[1]);

        expect(rowClickSpy).toHaveBeenCalledWith(
            jasmine.objectContaining({
                payload: {item: data[1], rowIndex: 1},
            }),
        );
    });

    it('should apply rowClasses and rowTitle from factory functions', () => {
        spectator = createHost(
            `
            <evo-table [data]="data" [rowClasses]="rowClasses" [rowTitle]="rowTitle">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    rowClasses: (row: number, item: {id: number}) => (item.id === 2 ? 'marked-row' : ''),
                    rowTitle: (row: number, item: {name: string}) => `title-${item.name}`,
                },
            },
        );

        const rows = spectator.queryAll('.evo-table__row:not(.evo-table__row_head)');
        expect(rows[0]).not.toHaveClass('marked-row');
        expect(rows[1]).toHaveClass('marked-row');
        expect(rows[0].getAttribute('title')).toBe('title-a');
        expect(rows[1].getAttribute('title')).toBe('title-b');
    });

    it('should render cell values via the default formatter for columns without a content template', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {hostProps: {data}},
        );

        const cells = spectator.queryAll('.evo-table__row:not(.evo-table__row_head) .evo-table__cell');
        expect(cells.map((c) => c.textContent.replace(/\s+/g, ' ').trim())).toEqual(['1', 'a', '2', 'b']);
    });

    it('should display no columns when "visibleColumns" is provided as an empty array', () => {
        spectator = createHost(
            `
            <evo-table [data]="data" [visibleColumns]="visibleColumns">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    visibleColumns: [],
                },
            },
        );
        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(0);
    });

    it('should render only the column label text (not the #header template) in the mobile row label', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="id" label="Id">
                    <ng-template #header let-label="label">
                        <i class="header-marker"></i>{{ label }}
                    </ng-template>
                </evo-table-column>
            </evo-table>
        `,
            {hostProps: {data}},
        );

        // шапка по-прежнему рендерит кастомный #header
        expect(spectator.query('.evo-table__cell_head .header-marker')).not.toBeNull();

        mobileView$.next(true);
        spectator.detectChanges();

        // подпись строки в мобильной раскладке - только текст, без содержимого #header
        const label = spectator.query('.evo-table__row:not(.evo-table__row_head) .evo-table__label');
        expect(label).not.toBeNull();
        expect(label.querySelector('.header-marker')).toBeNull();
        expect(label.textContent.trim()).toBe('Id');
    });

    it('should render the #mobileLabel template in the mobile row label when provided', () => {
        mobileView$.next(true);
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="id" label="Id">
                    <ng-template #mobileLabel let-label="label">
                        <span class="mobile-marker">{{ label }}!</span>
                    </ng-template>
                </evo-table-column>
            </evo-table>
        `,
            {hostProps: {data}},
        );

        const label = spectator.query('.evo-table__row:not(.evo-table__row_head) .evo-table__label');
        expect(label.querySelector('.mobile-marker')).not.toBeNull();
        expect(label.textContent.trim()).toBe('Id!');
    });

    it('should gate row labels by viewport while keeping the header row in the DOM on both layouts', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data}},
        );

        // на десктопе подписи строк не нужны: их нет в DOM, а не спрятаны стилями
        expect(spectator.queryAll('.evo-table__label').length).toBe(0);
        expect(spectator.query('.evo-table__row_head')).not.toBeNull();

        mobileView$.next(true);
        spectator.detectChanges();

        // в мобильной раскладке появляется подпись у каждой ячейки, а шапка остаётся в DOM:
        // её прячет CSS `.mobile-hide`, а не гейт по вьюпорту - так не ломаются печать и nth-child-зебра
        expect(spectator.queryAll('.evo-table__label').length).toBe(data.length * 2);
        expect(spectator.query('.evo-table__row_head')).not.toBeNull();
    });

    it('should keep the desktop table layout on mobile when mobileLayout is "table"', () => {
        mobileView$.next(true);
        spectator = createHost(
            `
            <evo-table [data]="data" mobileLayout="table">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data}},
        );

        // карточное преобразование выключено: подписей строк нет в DOM, названия колонок даёт шапка,
        // с которой не снимается видимость (утилита .mobile-hide не вешается)
        expect(spectator.queryAll('.evo-table__label').length).toBe(0);
        expect(spectator.query('.evo-table__row_head')).not.toHaveClass('mobile-hide');

        // хост несёт класс фактической раскладки (по нему печать и карточный гейт виртуального
        // режима), класс конфигурации (по нему раскладочный SCSS-блок без медиазапроса) и класс
        // скролл-контейнера (плоская таблица без виртуализации прокручивается по горизонтали)
        expect(spectator.element).toHaveClass('evo-table_desktop-view');
        expect(spectator.element).toHaveClass('evo-table_mobile-layout_table');
        expect(spectator.element).toHaveClass('evo-table_scroll-x');
    });

    it('should scroll the flat table-layout horizontally when columns do not fit the container', () => {
        mobileView$.next(true);
        // фиксированный по ширине блок в ячейке даёт детерминированный min-content колонки независимо
        // от шрифтовых метрик: 400px-контент в контейнере 200px обязан переполнить (ширина `width`
        // на table-cell в auto-раскладке - лишь подсказка и ужалась бы, поэтому берём реальный контент)
        spectator = createHost(
            `
            <evo-table [data]="data" mobileLayout="table" style="width: 200px">
                <evo-table-column prop="id" label="Id">
                    <ng-template #content>
                        <div style="width: 400px">wide</div>
                    </ng-template>
                </evo-table-column>
            </evo-table>
            `,
            {hostProps: {data}},
        );
        const host = spectator.element as HTMLElement;

        // хост - горизонтальный скролл-контейнер, а таблица внутри шире него: скролл встроен
        expect(getComputedStyle(host).overflowX).toBe('auto');
        expect(host.scrollWidth).toBeGreaterThan(host.clientWidth);
    });

    it('should fall back to the default cards layout for a value of mobileLayout outside the contract', () => {
        mobileView$.next(true);
        spectator = createHost(
            `
            <evo-table [data]="data" [mobileLayout]="layout">
                <evo-table-column prop="id" label="Id"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data, layout: undefined}},
        );

        // рассинхрон гейтов (карточки с торчащей нестилизованной шапкой) исключает строгий предикат
        // isTableLayout, а трансформ закрепляет нормализованное ПУБЛИЧНОЕ значение входа - ассерт
        // на mobileLayout единственный падает при удалении трансформа
        expect(spectator.component.mobileLayout).toBe('cards');
        expect(spectator.queryAll('.evo-table__label').length).toBe(data.length);
        expect(spectator.query('.evo-table__row_head')).toHaveClass('mobile-hide');
        expect(spectator.element).not.toHaveClass('evo-table_mobile-layout_table');
        // карточный вид не становится горизонтальным скролл-контейнером
        expect(spectator.element).not.toHaveClass('evo-table_scroll-x');

        // строковый мусор нормализуется так же
        spectator.setHostInput('layout', 'TABLE');
        expect(spectator.component.mobileLayout).toBe('cards');
        expect(spectator.queryAll('.evo-table__label').length).toBe(data.length);
    });

    it('should ship table-layout styles whose selector matches the host class the component sets', () => {
        mobileView$.next(true);
        spectator = createHost(
            `
            <evo-table [data]="data" mobileLayout="table">
                <evo-table-column prop="id" label="Id"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data}},
        );
        const table = spectator.query('.evo-table') as HTMLElement;

        // Гард соответствия "TS-класс хоста <-> SCSS-селектор блока": среди скомпилированных стилей
        // должно существовать правило `display: table` селектора с классом опции, реально матчащее
        // контейнер таблицы. Ловит опечатку в имени класса с любой из сторон и удаление блока -
        // computed-тесты этого не видят: на десктопной ширине karma те же значения даёт media-tablet.
        const styleRules = (rules: CSSRuleList): CSSStyleRule[] =>
            Array.from(rules).flatMap((rule) => {
                if (rule instanceof CSSStyleRule) {
                    return [rule];
                }
                if (rule instanceof CSSGroupingRule) {
                    return styleRules(rule.cssRules);
                }
                return [];
            });
        const matched = Array.from(document.styleSheets)
            .flatMap((sheet) => styleRules(sheet.cssRules))
            .filter(
                (rule) =>
                    rule.selectorText.includes('evo-table_mobile-layout_table') &&
                    rule.style.display === 'table' &&
                    table.matches(rule.selectorText),
            );
        expect(matched.length).toBeGreaterThan(0);
    });

    it('should switch between cards and table mobile layouts on the fly', () => {
        mobileView$.next(true);
        spectator = createHost(
            `
            <evo-table [data]="data" [mobileLayout]="layout">
                <evo-table-column prop="id" label="Id"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data, layout: 'cards'}},
        );
        expect(spectator.queryAll('.evo-table__label').length).toBe(data.length);
        expect(spectator.element).not.toHaveClass('evo-table_desktop-view');

        spectator.setHostInput('layout', 'table');
        expect(spectator.queryAll('.evo-table__label').length).toBe(0);
        expect(spectator.query('.evo-table__row_head')).not.toHaveClass('mobile-hide');
        expect(spectator.element).toHaveClass('evo-table_desktop-view');

        spectator.setHostInput('layout', 'cards');
        expect(spectator.queryAll('.evo-table__label').length).toBe(data.length);
        expect(spectator.element).not.toHaveClass('evo-table_desktop-view');
    });

    it('should expose row, col, item and value to the content template context', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name" [formatter]="upperCase">
                    <ng-template #content let-row="row" let-col="col" let-item="item" let-value="value">
                        <span class="ctx">{{ row }}:{{ col }}:{{ item.name }}:{{ value }}</span>
                    </ng-template>
                </evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data,
                    upperCase: (row: number, col: number, cellValue: unknown) => String(cellValue).toUpperCase(),
                },
            },
        );

        const cells = spectator.queryAll('.ctx');
        expect(cells.map((c) => c.textContent.trim())).toEqual(['0:0:a:A', '1:0:b:B']);
    });

    it('should not re-run the cell formatter on change detection when inputs are unchanged (OnPush cell)', () => {
        const formatter = jasmine.createSpy('formatter').and.callFake((row, col, cellValue) => cellValue);
        spectator = createHost(
            `
            <evo-table [data]="data" [showHeader]="showHeader">
                <evo-table-column prop="name" label="Name" [formatter]="formatter"></evo-table-column>
            </evo-table>
        `,
            {
                hostProps: {
                    data: [...data],
                    showHeader: true,
                    formatter,
                },
            },
        );

        const initialCount = formatter.calls.count();
        expect(initialCount).toBe(data.length);

        // прогон change detection без смены данных: форматтер не переоценивается
        spectator.setHostInput('showHeader', false);
        spectator.detectChanges();
        expect(formatter.calls.count()).toBe(initialCount);

        // новая ссылка на данные: значения пересчитываются
        spectator.setHostInput(
            'data',
            data.map((item) => ({...item})),
        );
        expect(formatter.calls.count()).toBeGreaterThan(initialCount);
    });

    it('should keep functional rowClasses/rowTitle reactive to external state on change detection (row highlight on click)', () => {
        const state: {selectedRow: number} = {selectedRow: -1};
        spectator = createHost(
            `
            <evo-table [data]="data" [rowClasses]="rowClasses" [rowTitle]="rowTitle" (rowClick)="onRowClick($event)">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {
                hostProps: {
                    data,
                    rowClasses: (row: number) => (row === state.selectedRow ? 'selected-row' : ''),
                    rowTitle: (row: number) => (row === state.selectedRow ? 'selected' : 'idle'),
                    onRowClick: (e: EvoTableRowClickEvent) => (state.selectedRow = e.payload.rowIndex),
                },
            },
        );
        const rowSelector = '.evo-table__row:not(.evo-table__row_head)';
        let rows = spectator.queryAll(rowSelector);
        expect(rows[1]).not.toHaveClass('selected-row');
        expect(rows[1].getAttribute('title')).toBe('idle');

        // клик меняет внешнее состояние без смены ссылок data/rowClasses/rowTitle,
        // но помечает view таблицы dirty -> живые getClasses/getTitle пересчитываются
        spectator.click(rows[1]);

        rows = spectator.queryAll(rowSelector);
        expect(rows[1]).toHaveClass('selected-row');
        expect(rows[1].getAttribute('title')).toBe('selected');
    });

    it('should update rendered classes and title when the rowClasses/rowTitle reference changes', () => {
        spectator = createHost(
            `
            <evo-table [data]="data" [rowClasses]="rowClasses" [rowTitle]="rowTitle">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {
                hostProps: {
                    data,
                    rowClasses: () => 'first-classes',
                    rowTitle: () => 'first-title',
                },
            },
        );
        const rowSelector = '.evo-table__row:not(.evo-table__row_head)';
        let rows = spectator.queryAll(rowSelector);
        expect(rows[0]).toHaveClass('first-classes');
        expect(rows[0].getAttribute('title')).toBe('first-title');

        spectator.setHostInput('rowClasses', () => 'second-classes');
        spectator.setHostInput('rowTitle', () => 'second-title');

        rows = spectator.queryAll(rowSelector);
        expect(rows[0]).toHaveClass('second-classes');
        expect(rows[0]).not.toHaveClass('first-classes');
        expect(rows[0].getAttribute('title')).toBe('second-title');
    });

    it('should render no rows and not throw for empty or undefined data', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data: []}},
        );
        const rowSelector = '.evo-table__row:not(.evo-table__row_head)';
        expect(spectator.queryAll(rowSelector).length).toBe(0);

        expect(() => {
            spectator.setHostInput('data', undefined);
        }).not.toThrow();
        expect(spectator.queryAll(rowSelector).length).toBe(0);
    });

    it('should keep the header row first in the container on both layouts, so CSS nth-child striping stays consistent', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data}},
        );
        const firstRow = (): Element => spectator.queryAll('.evo-table__row')[0];

        // зебра - это CSS-правило `.evo-table__row:nth-child(2n)`. Чтобы оно метило одни и те же
        // строки данных на десктопе и на мобильном, шапка должна оставаться первой строкой контейнера.
        expect(firstRow()).toHaveClass('evo-table__row_head');

        // на мобильном шапка не удаляется из DOM, а прячется CSS `.mobile-hide` - позиция nth-child не сдвигается
        mobileView$.next(true);
        spectator.detectChanges();
        expect(firstRow()).toHaveClass('evo-table__row_head');
        expect(spectator.query('.evo-table__row_head')).toHaveClass('mobile-hide');
    });

    it('should mark the host with the layout it rendered, so print styles can follow the DOM', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data}},
        );

        // при печати медиазапросы считаются по ширине листа, а раскладку выбрал JS по ширине экрана:
        // класс - единственный признак, по которому стили печати узнают фактическое состояние DOM
        expect(spectator.element).toHaveClass('evo-table_desktop-view');

        mobileView$.next(true);
        spectator.detectChanges();

        expect(spectator.element).not.toHaveClass('evo-table_desktop-view');
    });

    it('should not re-render a cell whose item was mutated in place (immutable data contract)', () => {
        const items = [{id: 1, name: 'a'}];
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data: items}},
        );
        const cellText = (): string =>
            spectator.query('.evo-table__row:not(.evo-table__row_head) .evo-table__cell').textContent.trim();
        expect(cellText()).toBe('a');

        // контракт OnPush-ячейки: новый массив при неизменившейся ссылке элемента ячейку не обновляет
        items[0].name = 'mutated';
        spectator.setHostInput('data', [...items]);
        expect(cellText()).toBe('a');

        // обновляет только новая ссылка самого элемента
        spectator.setHostInput('data', [{id: 1, name: 'mutated'}]);
        expect(cellText()).toBe('mutated');
    });

    it('should not apply a formatter rebound on the same column instance (immutable column contract)', () => {
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name" [formatter]="formatter"></evo-table-column>
            </evo-table>
            `,
            {
                hostProps: {
                    data,
                    formatter: (row: number, col: number, cellValue: unknown) => `first-${cellValue}`,
                },
            },
        );
        const cellText = (): string =>
            spectator.query('.evo-table__row:not(.evo-table__row_head) .evo-table__cell').textContent.trim();
        expect(cellText()).toBe('first-a');

        // `column` - стабильная ссылка на инстанс колонки, подмена её полей ячейку не пересчитывает
        spectator.setHostInput('formatter', (row: number, col: number, cellValue: unknown) => `second-${cellValue}`);
        expect(cellText()).toBe('first-a');

        // пересчёт даёт смена ссылок элементов данных
        spectator.setHostInput(
            'data',
            data.map((item) => ({...item})),
        );
        expect(cellText()).toBe('second-a');
    });

    it('should expose the filtered column index (col) to #content when columns are hidden by visibleColumns', () => {
        spectator = createHost(
            `
            <evo-table [data]="data" [visibleColumns]="visibleColumns">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="extra" label="Extra"></evo-table-column>
                <evo-table-column prop="name" label="Name">
                    <ng-template #content let-col="col" let-item="item">
                        <span class="col-ctx">{{ col }}:{{ item.name }}</span>
                    </ng-template>
                </evo-table-column>
            </evo-table>
            `,
            {hostProps: {data, visibleColumns: ['id', 'name']}},
        );

        // 'name' объявлена третьей, но 'extra' скрыта -> в отфильтрованном наборе её col = 1
        const cells = spectator.queryAll('.col-ctx');
        expect(cells.map((c) => c.textContent.trim())).toEqual(['1:a', '1:b']);
    });
});

describe('EvoTableComponent: virtual scroll', () => {
    let spectator: SpectatorHost<EvoTableComponent>;
    const createHost = createHostFactory({
        imports: [EvoTableColumnComponent],
        component: EvoTableComponent,
        componentProviders: [mobileViewProvider],
    });

    const ROW_HEIGHT = 48;
    const VIEWPORT_HEIGHT = 480;
    const data = Array.from({length: 1000}, (_, index) => ({id: index + 1, name: `row-${index}`}));
    const rowSelector = '.evo-table__row:not(.evo-table__row_head)';

    /**
     * Вьюпорт CDK измеряет себя сам после вставки в DOM, поэтому одного `detectChanges` мало:
     * без явного замера и слива таймеров он считает свою высоту нулевой и не рендерит ни одной строки.
     */
    const renderVirtualTable = (template: string, hostProps: Record<string, unknown>): void => {
        spectator = createHost(template, {hostProps});
        spectator.query(CdkVirtualScrollViewport).checkViewportSize();
        spectator.detectChanges();
        flush();
        spectator.detectChanges();
    };

    const template = `
        <evo-table
            [data]="data"
            [virtualScroll]="true"
            [rowHeight]="${ROW_HEIGHT}"
            [showHeader]="showHeader"
            (rowClick)="onRowClick($event)"
            style="height: ${VIEWPORT_HEIGHT}px"
        >
            <evo-table-column prop="name" label="Name"></evo-table-column>
        </evo-table>
    `;

    beforeEach(() => mobileView$.next(false));

    it('should keep only the visible window of rows in the DOM instead of the whole data set', fakeAsync(() => {
        renderVirtualTable(template, {data, showHeader: true, onRowClick: () => {}});

        const renderedRows = spectator.queryAll(rowSelector).length;
        const visibleRows = VIEWPORT_HEIGHT / ROW_HEIGHT;

        // смысл режима: стоимость не зависит от размера страницы пагинации
        expect(renderedRows).toBeGreaterThan(0);
        expect(renderedRows).toBeLessThan(data.length);
        // видимое окно плюс буфер (`maxBufferPx` - 8 строк), с запасом на округление
        expect(renderedRows).toBeLessThanOrEqual(visibleRows + 12);
    }));

    it('should render every row when virtualScroll is off, so the default mode is unaffected', () => {
        const shortData = data.slice(0, 40);
        spectator = createHost(
            `
            <evo-table [data]="data">
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {hostProps: {data: shortData}},
        );

        expect(spectator.queryAll(rowSelector).length).toBe(shortData.length);
        expect(spectator.query('cdk-virtual-scroll-viewport')).toBeNull();
        expect(spectator.element).not.toHaveClass('evo-table_virtual');
    });

    it('should keep the header outside the viewport and hand column naming over to card labels on mobile', fakeAsync(() => {
        renderVirtualTable(template, {data, showHeader: true, onRowClick: () => {}});

        const header = spectator.query('.evo-table__row_head');
        expect(header).not.toBeNull();
        // шапка вне вьюпорта: внутри него её увезло бы `transform`-ом вместе со строками
        expect(header.closest('cdk-virtual-scroll-viewport')).toBeNull();
        // на десктопе раскладка колоночная: названия колонок даёт шапка, подписей строк нет
        const headWrap = spectator.query('.evo-table__head-wrap') as HTMLElement;
        expect(getComputedStyle(headWrap).display).not.toBe('none');
        expect(spectator.queryAll('.evo-table__label').length).toBe(0);

        mobileView$.next(true);
        spectator.detectChanges();
        flush();
        spectator.detectChanges();

        // на мобильном строка становится карточкой: названия колонок дают подписи ячеек, а шапку
        // прячет классовый гейт карточного блока - тот же признак, что переключил раскладку и itemSize
        expect(getComputedStyle(headWrap).display).toBe('none');
        expect(spectator.queryAll('.evo-table__label').length).toBeGreaterThan(0);
    }));

    it('should size mobile cards from the visible column count and drive the viewport by that height', fakeAsync(() => {
        mobileView$.next(true);
        renderVirtualTable(
            `
            <evo-table [data]="data" [virtualScroll]="true" style="height: ${VIEWPORT_HEIGHT}px">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {data: data.slice(0, 50)},
        );

        // 2 ячейки по 40 + межъячеечный отступ 20 + вертикальные поля карточки 2×8
        // (метрики MOBILE_CARD_* компонента, зеркалящие карточные стили)
        const CARD_HEIGHT = 2 * 40 + 20 + 2 * 8;
        expect(spectator.query(CdkFixedSizeVirtualScroll).itemSize).toBe(CARD_HEIGHT);

        // фактическая высота карточки в DOM обязана совпадать с расчётной: по ней вьюпорт позиционирует
        const rows = spectator.queryAll(rowSelector);
        expect(rows.length).toBeGreaterThan(0);
        for (const row of rows) {
            expect((row as HTMLElement).getBoundingClientRect().height).toBe(CARD_HEIGHT);
        }

        // в карточке у каждой ячейки подпись с названием колонки
        expect(rows[0].querySelectorAll('.evo-table__label').length).toBe(2);

        // обратно на десктоп - колоночная строка высотой rowHeight (дефолт 48) и без подписей
        mobileView$.next(false);
        spectator.detectChanges();
        flush();
        spectator.detectChanges();

        expect(spectator.query(CdkFixedSizeVirtualScroll).itemSize).toBe(48);
        const [desktopRow] = spectator.queryAll(rowSelector);
        expect((desktopRow as HTMLElement).getBoundingClientRect().height).toBe(48);
        expect(spectator.queryAll('.evo-table__label').length).toBe(0);
    }));

    it('should keep the columnar layout and rowHeight math on any viewport when mobileLayout is "table"', fakeAsync(() => {
        renderVirtualTable(
            `
            <evo-table
                [data]="data"
                [virtualScroll]="true"
                [rowHeight]="${ROW_HEIGHT}"
                mobileLayout="table"
                style="height: ${VIEWPORT_HEIGHT}px"
            >
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {data: data.slice(0, 50)},
        );
        expect(spectator.query(CdkFixedSizeVirtualScroll).itemSize).toBe(ROW_HEIGHT);

        // смена брейкпоинта при выключенных карточках ничего не меняет
        mobileView$.next(true);
        spectator.detectChanges();
        flush();
        spectator.detectChanges();

        // математика вьюпорта осталась на rowHeight - карточная высота не включилась
        expect(spectator.query(CdkFixedSizeVirtualScroll).itemSize).toBe(ROW_HEIGHT);
        const rows = spectator.queryAll(rowSelector);
        expect(rows.length).toBeGreaterThan(0);
        for (const row of rows) {
            expect((row as HTMLElement).getBoundingClientRect().height).toBe(ROW_HEIGHT);
        }

        // раскладка колоночная, а не карточная и не table-row: и карточный блок, и раскладочный блок
        // mobileLayout гейтятся классами (не медиа), поэтому computed display здесь сторожит контракт
        // каскада - карточный блок отключён классом desktop-view, табличный блок не лезет в virtual
        expect(spectator.element).toHaveClass('evo-table_desktop-view');
        expect(getComputedStyle(rows[0] as HTMLElement).display).toBe('flex');

        // подписей нет, шапка видима
        expect(spectator.queryAll('.evo-table__label').length).toBe(0);
        const headWrap = spectator.query('.evo-table__head-wrap') as HTMLElement;
        expect(getComputedStyle(headWrap).display).not.toBe('none');

        // горизонтальным скроллом в этом режиме заведует вьюпорт CDK, а не хост:
        // класс скролл-контейнера плоской таблицы сюда не ставится
        expect(spectator.element).not.toHaveClass('evo-table_scroll-x');
    }));

    it('should stripe rows by data index, matching nth-child striping of the default mode', fakeAsync(() => {
        renderVirtualTable(template, {data, showHeader: true, onRowClick: () => {}});

        // с шапкой она первый ребёнок контейнера в обычном режиме, поэтому серая - строка данных №0
        expect(spectator.component.isStripedRow(0)).toBe(true);
        expect(spectator.component.isStripedRow(1)).toBe(false);

        const rows = spectator.queryAll(rowSelector);
        expect(rows[0]).toHaveClass('evo-table__row_striped');
        expect(rows[1]).not.toHaveClass('evo-table__row_striped');

        // без шапки отсчёт `nth-child` не сдвинут - серой становится строка №1
        spectator.setHostInput('showHeader', false);
        spectator.detectChanges();

        expect(spectator.component.isStripedRow(0)).toBe(false);
        expect(spectator.component.isStripedRow(1)).toBe(true);
    }));

    it('should give every rendered row the fixed rowHeight the scroll strategy positions by', fakeAsync(() => {
        renderVirtualTable(template, {data, showHeader: true, onRowClick: () => {}});

        // высота строки в DOM обязана совпадать с `rowHeight`: по нему вьюпорт считает позицию скролла
        const rows = spectator.queryAll(rowSelector);
        // guard: без него цикл прошёл бы вакуумно (зелёным) при нулевом рендере вьюпорта
        expect(rows.length).toBeGreaterThan(0);
        for (const row of rows) {
            expect((row as HTMLElement).getBoundingClientRect().height).toBe(ROW_HEIGHT);
        }
    }));

    it('should emit rowClick with the data index of the clicked row, not its position in the window', fakeAsync(() => {
        const onRowClick = jasmine.createSpy('onRowClick');
        renderVirtualTable(template, {data, showHeader: true, onRowClick});

        const viewport = spectator.query(CdkVirtualScrollViewport);
        viewport.scrollToIndex(100);
        viewport.checkViewportSize();
        spectator.detectChanges();
        flush();
        spectator.detectChanges();

        const [firstRenderedRow] = spectator.queryAll(rowSelector);
        spectator.click(firstRenderedRow);

        // индекс приходит из данных, а не из позиции среди отрисованных узлов
        const {rowIndex, item} = onRowClick.calls.mostRecent().args[0].payload;
        expect(rowIndex).toBeGreaterThan(0);
        expect(item).toBe(data[rowIndex]);
        expect(firstRenderedRow.textContent).toContain(data[rowIndex].name);
    }));

    // Строка отрисовывается общим `ng-template` через `ngTemplateOutlet` в обеих ветках. Тесты ниже
    // фиксируют, что общий контракт строки - фокусируемость при кликабельной таблице, активация
    // с клавиатуры, функциональные `rowClasses`/`rowTitle` - реально доезжает и до виртуальной ветки:
    // ошибка в передаче контекста outlet или в гейтах по `virtualScroll` иначе ушла бы зелёным.
    it('should make clickable virtual rows focusable and emit rowClick on Enter and Space', fakeAsync(() => {
        const onRowClick = jasmine.createSpy('onRowClick');
        renderVirtualTable(template, {data, showHeader: true, onRowClick});

        const row = spectator.query(rowSelector) as HTMLElement;
        expect(row.getAttribute('tabindex')).toBe('0');

        spectator.dispatchKeyboardEvent(row, 'keydown', 'Enter');
        spectator.dispatchKeyboardEvent(row, 'keydown', ' ');

        expect(onRowClick).toHaveBeenCalledTimes(2);
    }));

    it('should apply functional rowClasses and rowTitle on virtual rows', fakeAsync(() => {
        renderVirtualTable(
            `
            <evo-table
                [data]="data"
                [virtualScroll]="true"
                [rowHeight]="${ROW_HEIGHT}"
                [rowClasses]="rowClasses"
                [rowTitle]="rowTitle"
                style="height: ${VIEWPORT_HEIGHT}px"
            >
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {
                data: data.slice(0, 5),
                rowClasses: (row: number, item: {id: number}) => (item.id === 2 ? 'marked-row' : ''),
                rowTitle: (row: number, item: {name: string}) => `title-${item.name}`,
            },
        );

        const rows = spectator.queryAll(rowSelector);
        expect(rows.length).toBeGreaterThan(0);
        expect(rows[0]).not.toHaveClass('marked-row');
        expect(rows[1]).toHaveClass('marked-row');
        expect(rows[0].getAttribute('title')).toBe('title-row-0');
        expect(rows[1].getAttribute('title')).toBe('title-row-1');
    }));

    it('should reuse a DOM row for the item with the same key when "rowTrackBy" is provided', fakeAsync(() => {
        renderVirtualTable(
            `
            <evo-table
                [data]="data"
                [virtualScroll]="true"
                [rowHeight]="${ROW_HEIGHT}"
                [rowTrackBy]="rowTrackBy"
                style="height: ${VIEWPORT_HEIGHT}px"
            >
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
            `,
            {
                data: data.slice(0, 5),
                rowTrackBy: (index: number, item: {id: number}) => item.id,
            },
        );
        const [firstRowBefore] = spectator.queryAll(rowSelector);
        // узел ключа `id: 1` (первый элемент данных) до перестановки стоит на позиции 0
        expect(firstRowBefore.textContent).toContain(data[0].name);

        // новые инстансы с теми же ключами, в ОБРАТНОМ порядке: `trackBy` должен дойти до
        // `*cdkVirtualFor` связанным, тогда узел переезжает вслед за своим ключом, а не остаётся
        // на позиции 0. При трекинге по индексу узел позиции 0 переиспользовался бы под новый
        // элемент, и тест бы этого не отличил (см. невиртуальный близнец выше).
        spectator.setHostInput(
            'data',
            data
                .slice(0, 5)
                .map((item) => ({...item}))
                .reverse(),
        );
        flush();
        spectator.detectChanges();

        // ключ `id: 1` уехал в конец окна - тот же DOM-узел, что и был, но теперь последний
        const rowsAfter = spectator.queryAll(rowSelector);
        expect(rowsAfter[rowsAfter.length - 1]).toBe(firstRowBefore);
        expect(rowsAfter[rowsAfter.length - 1].textContent).toContain(data[0].name);
    }));

    it('should pick up added rows only from a new data array reference (immutable data contract)', fakeAsync(() => {
        const rows = data.slice(0, 3);
        renderVirtualTable(template, {data: rows, showHeader: true, onRowClick: () => {}});
        expect(spectator.queryAll(rowSelector).length).toBe(3);

        // вьюпорт читает строки через источник данных CDK: он пересоздаётся по смене ссылки входа,
        // а не передиффывает массив на каждом проходе change detection, как обычный режим
        rows.push({id: 4, name: 'row-3'});
        spectator.detectChanges();
        flush();
        spectator.detectChanges();

        expect(spectator.queryAll(rowSelector).length).toBe(3);

        spectator.setHostInput('data', [...rows]);
        flush();
        spectator.detectChanges();

        expect(spectator.queryAll(rowSelector).length).toBe(4);
    }));

    it('should render no rows and not throw for empty or undefined data', fakeAsync(() => {
        renderVirtualTable(template, {data: [], showHeader: true, onRowClick: () => {}});
        expect(spectator.queryAll(rowSelector).length).toBe(0);

        expect(() => {
            spectator.setHostInput('data', undefined);
            flush();
            spectator.detectChanges();
        }).not.toThrow();
        expect(spectator.queryAll(rowSelector).length).toBe(0);
    }));

    it('should let a column className override the default equal width (flex default is zero-specificity)', fakeAsync(() => {
        const FIXED_WIDTH = 64;
        // потребительский класс ширины - реально глобальный стиль (как `.col-id` в приложении/story).
        // Кладём в `document.head`, а не в шаблон: `<style>` в шаблоне Angular инкапсулирует, и он
        // не долетел бы до ячейки. Дефолт ширины компонента имеет нулевую специфичность (`:where(...)`),
        // поэтому этот класс должен выиграть без `!important`.
        const consumerStyle = document.createElement('style');
        consumerStyle.textContent = `.col-fixed { flex: 0 0 ${FIXED_WIDTH}px; }`;
        document.head.appendChild(consumerStyle);

        try {
            renderVirtualTable(
                `
                <evo-table
                    [data]="data"
                    [virtualScroll]="true"
                    [rowHeight]="${ROW_HEIGHT}"
                    style="height: ${VIEWPORT_HEIGHT}px; width: 600px"
                >
                    <evo-table-column prop="id" label="Id" className="col-fixed"></evo-table-column>
                    <evo-table-column prop="name" label="Name"></evo-table-column>
                </evo-table>
                `,
                {data: data.slice(0, 5)},
            );

            // ширину задаёт className колонки, а не дефолт "равные колонки"
            const [firstRow] = spectator.queryAll(rowSelector);
            const firstCell = firstRow.querySelector('.evo-table__cell') as HTMLElement;
            expect(firstCell.getBoundingClientRect().width).toBe(FIXED_WIDTH);

            // и в шапке колонка той же ширины - иначе колонки шапки и строк разъехались бы
            const headCell = spectator.query('.evo-table__row_head .evo-table__cell') as HTMLElement;
            expect(headCell.getBoundingClientRect().width).toBe(FIXED_WIDTH);
        } finally {
            consumerStyle.remove();
        }
    }));

    it('should clamp a non-positive or non-numeric rowHeight to the default', fakeAsync(() => {
        renderVirtualTable(template, {data, showHeader: true, onRowClick: () => {}});

        // не-число (`numberAttribute` даёт NaN), ноль и отрицательное значение откатываются на дефолт,
        // иначе itemSize/буферы стали бы NaN (пустой рендер) либо CDK бросил бы на буферах.
        // `Infinity` отсекается только ветвью `Number.isFinite`: условие `value > 0` его пропускает
        for (const invalid of [NaN, 0, -48, Infinity]) {
            spectator.component.rowHeight = invalid;
            expect(spectator.component.rowHeight).toBe(ROW_HEIGHT);
        }

        // валидное значение проходит как есть
        spectator.component.rowHeight = 60;
        expect(spectator.component.rowHeight).toBe(60);
    }));

    /**
     * Помощник: широкая виртуализированная таблица (4 колонки по 200px в контейнере 300px) с sticky
     * крайними колонками через глобальный стиль (как задаёт потребитель через className). Возвращает
     * функцию очистки стиля. Ширины/sticky держим в тесте, а не в компоненте: компонент sticky
     * не навязывает.
     */
    const renderWideStickyVirtualTable = (): (() => void) => {
        const style = document.createElement('style');
        style.textContent =
            '.wide-sticky .evo-table__cell { flex: 0 0 200px !important; }' +
            '.wide-sticky .evo-table__cell:first-child { position: sticky; left: 0; z-index: 3; background: #fff; }' +
            '.wide-sticky .evo-table__cell:last-child { position: sticky; right: 0; z-index: 3; background: #fff; }';
        document.head.appendChild(style);
        renderVirtualTable(
            `
            <evo-table class="wide-sticky" [data]="data" [virtualScroll]="true" [rowHeight]="${ROW_HEIGHT}"
                style="height: ${VIEWPORT_HEIGHT}px; width: 300px">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
                <evo-table-column prop="id" label="C"></evo-table-column>
                <evo-table-column prop="name" label="D"></evo-table-column>
            </evo-table>
            `,
            {data: data.slice(0, 100)},
        );
        return () => style.remove();
    };

    const scrollScroller = (axis: 'scrollLeft' | 'scrollTop', value: number): HTMLElement => {
        const scroller = spectator.query('.evo-table__scroller') as HTMLElement;
        scroller[axis] = value;
        scroller.dispatchEvent(new Event('scroll'));
        spectator.detectChanges();
        flush();
        spectator.detectChanges();
        return scroller;
    };

    it('should scroll header and body in one shared box so columns stay aligned horizontally', fakeAsync(() => {
        const cleanup = renderWideStickyVirtualTable();
        try {
            const scroller = spectator.query('.evo-table__scroller') as HTMLElement;
            // общий скролл-бокс шире вьюпорта -> он и есть горизонтальный скроллер
            expect(scroller.scrollWidth).toBeGreaterThan(scroller.clientWidth);

            scrollScroller('scrollLeft', 150);

            // несликовая колонка шапки и тела совпадает по горизонтали (один скролл на оба)
            const headCol = spectator.queryAll('.evo-table__row_head .evo-table__cell')[2] as HTMLElement;
            const bodyCol = spectator.query(rowSelector).querySelectorAll('.evo-table__cell')[2] as HTMLElement;
            expect(Math.abs(headCol.getBoundingClientRect().left - bodyCol.getBoundingClientRect().left)).toBeLessThan(
                2,
            );
        } finally {
            cleanup();
        }
    }));

    it('should keep left and right sticky columns aligned between header and body on horizontal scroll', fakeAsync(() => {
        const cleanup = renderWideStickyVirtualTable();
        try {
            const scroller = scrollScroller('scrollLeft', 150);
            const sRect = scroller.getBoundingClientRect();
            const headCells = spectator.queryAll('.evo-table__row_head .evo-table__cell');
            const bodyCells = spectator.query(rowSelector).querySelectorAll('.evo-table__cell');

            const leftHead = (headCells[0] as HTMLElement).getBoundingClientRect().left - sRect.left;
            const leftBody = (bodyCells[0] as HTMLElement).getBoundingClientRect().left - sRect.left;
            const rightHead = sRect.right - (headCells[3] as HTMLElement).getBoundingClientRect().right;
            const rightBody = sRect.right - (bodyCells[3] as HTMLElement).getBoundingClientRect().right;

            // левая sticky прижата к левому краю общего скроллера в шапке И в теле
            expect(Math.abs(leftHead)).toBeLessThan(2);
            expect(Math.abs(leftBody)).toBeLessThan(2);
            // правая sticky в шапке и теле прижата к одному правому краю (один скроллбар-гаттер на бокс)
            expect(Math.abs(rightHead - rightBody)).toBeLessThan(2);
        } finally {
            cleanup();
        }
    }));

    it('should pin the header to the top of the scroller on vertical scroll', fakeAsync(() => {
        const cleanup = renderWideStickyVirtualTable();
        try {
            const headWrap = spectator.query('.evo-table__head-wrap') as HTMLElement;
            const scroller = scrollScroller('scrollTop', 400);
            // шапка (position: sticky; top: 0) осталась у верха общего скролл-бокса
            const headTop = headWrap.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
            expect(Math.abs(headTop)).toBeLessThan(2);
            // и это по-прежнему виртуализация: в DOM окно строк, а не все 100
            const rendered = spectator.queryAll(rowSelector).length;
            expect(rendered).toBeGreaterThan(0);
            expect(rendered).toBeLessThan(100);
        } finally {
            cleanup();
        }
    }));
});
