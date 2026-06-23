import {EvoTableComponent} from '../index';
import {createComponentFactory, createHostFactory, Spectator, SpectatorHost} from '@ngneat/spectator';
import {EvoTableColumnComponent} from '../evo-table-column/evo-table-column.component';

describe('EvoTableComponent', () => {
    let spectator: Spectator<EvoTableComponent>;
    const createComponent = createComponentFactory(EvoTableComponent);

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
    });
    const data = [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'},
    ];

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

        console.log(data)

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
        expect(cells.map((c) => c.textContent.replace(/\s+/g, ' ').trim())).toEqual([
            'Id 1',
            'Name a',
            'Id 2',
            'Name b',
        ]);
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
});
