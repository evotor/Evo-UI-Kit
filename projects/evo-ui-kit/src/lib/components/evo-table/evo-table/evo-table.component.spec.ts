import {EvoTableComponent, EvoTableRowClickEvent} from '../index';
import {createComponentFactory, createHostFactory, Spectator, SpectatorHost} from '@ngneat/spectator';
import {BehaviorSubject} from 'rxjs';
import {fakeAsync, flush} from '@angular/core/testing';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
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

    it('should keep the header outside the viewport and visible on both layouts', fakeAsync(() => {
        renderVirtualTable(template, {data, showHeader: true, onRowClick: () => {}});

        const header = spectator.query('.evo-table__row_head');
        expect(header).not.toBeNull();
        // шапка вне вьюпорта: внутри него её увезло бы `transform`-ом вместе со строками
        expect(header.closest('cdk-virtual-scroll-viewport')).toBeNull();
        // раскладка тут всегда колоночная, поэтому шапку не прячет мобильная утилита - иначе
        // на узком вьюпорте колонки остались бы без названий
        expect(header).not.toHaveClass('mobile-hide');

        mobileView$.next(true);
        spectator.detectChanges();

        expect(spectator.query('.evo-table__row_head')).not.toHaveClass('mobile-hide');
        // подписи строк дали бы переменную высоту, несовместимую с фиксированной `rowHeight`
        expect(spectator.queryAll('.evo-table__label').length).toBe(0);
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
        for (const row of spectator.queryAll(rowSelector)) {
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

        // новые инстансы с теми же ключами: `trackBy` должен дойти до `*cdkVirtualFor` связанным
        spectator.setHostInput(
            'data',
            data.slice(0, 5).map((item) => ({...item})),
        );
        flush();
        spectator.detectChanges();

        expect(spectator.queryAll(rowSelector)[0]).toBe(firstRowBefore);
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

            // ширину задаёт className колонки, а не дефолт «равные колонки»
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

        // не-число (`numberAttribute` даёт NaN) и отрицательное значение откатываются на дефолт,
        // иначе itemSize/буферы стали бы NaN (пустой рендер) либо CDK бросил бы на буферах
        for (const invalid of [NaN, 0, -48]) {
            spectator.component.rowHeight = invalid;
            expect(spectator.component.rowHeight).toBe(ROW_HEIGHT);
        }

        // валидное значение проходит как есть
        spectator.component.rowHeight = 60;
        expect(spectator.component.rowHeight).toBe(60);
    }));
});
