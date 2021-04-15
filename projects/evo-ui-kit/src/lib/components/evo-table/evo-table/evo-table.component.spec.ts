import { EvoTableComponent } from '../index';
import { createComponentFactory, createHostFactory, Spectator, SpectatorHost } from '@ngneat/spectator';
import { EvoTableColumnComponent } from '../evo-table-column/evo-table-column.component';

describe('EvoTableComponent', () => {
    let spectator: Spectator<EvoTableComponent>;
    const createComponent = createComponentFactory(EvoTableComponent);

    beforeEach(() => spectator = createComponent());

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
        spectator.output<{type: string}>('rowClick').subscribe(result => output = result);

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
        declarations: [
            EvoTableColumnComponent,
        ],
        component: EvoTableComponent,
    });
    const data = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
    ];

    it('should display all columns when "visibleColumns" is not defined', () => {
        spectator = createHost(`
            <evo-table [data]="data">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `, { hostProps: {
            data,
        } });
        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(2);
    });

    it('should display only one column', () => {
        const visibleColumns = ['id'];
        spectator = createHost(`
            <evo-table [data]="data" [visibleColumns]="visibleColumns">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `, { hostProps: {
            data,
            visibleColumns,
        } });
        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(1);
    });

    it('should display all columns when "visibleColumns" is provided with all props', () => {
        const visibleColumns = ['id', 'name'];
        spectator = createHost(`
            <evo-table [data]="data" [visibleColumns]="visibleColumns">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `, { hostProps: {
            data,
            visibleColumns,
        } });
        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(2);
    });

    it('should display no columns when "visibleColumns" is provided as an empty array', () => {
        spectator = createHost(`
            <evo-table [data]="data" [visibleColumns]="visibleColumns">
                <evo-table-column prop="id" label="Id"></evo-table-column>
                <evo-table-column prop="name" label="Name"></evo-table-column>
            </evo-table>
        `, { hostProps: {
            data,
            visibleColumns: [],
        } });
        expect(spectator.queryAll('.evo-table__cell_head').length).toBe(0);
    });
});
