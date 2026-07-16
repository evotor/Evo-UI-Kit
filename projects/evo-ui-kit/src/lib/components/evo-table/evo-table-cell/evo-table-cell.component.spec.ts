import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {EvoTableCellComponent} from './evo-table-cell.component';
import {EvoTableColumnComponent} from '../evo-table-column/evo-table-column.component';

describe('EvoTableCellComponent', () => {
    const createComponent = createComponentFactory({
        component: EvoTableCellComponent,
        imports: [EvoTableColumnComponent],
    });
    let spectator: Spectator<EvoTableCellComponent>;

    function makeColumn(patch: Partial<EvoTableColumnComponent> = {}): EvoTableColumnComponent {
        return Object.assign(new EvoTableColumnComponent(), patch);
    }

    it('should create', () => {
        spectator = createComponent({
            props: {column: makeColumn({prop: 'name'}), item: {name: 'a'}, row: 0, col: 0},
        });
        expect(spectator.component).toBeTruthy();
    });

    it('should compute the formatted value via the column formatter when a prop is set', () => {
        const column = makeColumn({
            prop: 'name',
            formatter: (row, col, cellValue) => String(cellValue).toUpperCase(),
        });
        spectator = createComponent({
            props: {column, item: {name: 'a'}, row: 0, col: 0},
        });

        spectator.component.ngOnChanges();

        expect(spectator.component.value).toBe('A');
    });

    it('should pass the whole item to the formatter when no prop is set', () => {
        const formatter = jasmine.createSpy('formatter').and.returnValue('formatted');
        const item = {name: 'a'};
        const column = makeColumn({formatter});
        spectator = createComponent({props: {column, item, row: 1, col: 2}});

        spectator.component.ngOnChanges();

        expect(formatter).toHaveBeenCalledWith(1, 2, item, item);
        expect(spectator.component.value).toBe('formatted');
    });

    it('should render the computed value as plain text when the column has no #content template', () => {
        const column = makeColumn({prop: 'name'});
        spectator = createComponent({props: {column, item: {name: 'plain-value'}, row: 0, col: 0}});

        spectator.component.ngOnChanges();
        spectator.detectChanges();

        expect(spectator.element.textContent.trim()).toBe('plain-value');
    });

    it('should recompute the value when the column reference changes at runtime (new prop/formatter)', () => {
        const item = {a: 1, b: 2};
        const first = makeColumn({prop: 'a', formatter: (row, col, cellValue) => `first:${cellValue}`});
        spectator = createComponent({props: {column: first, item, row: 0, col: 0}});

        spectator.component.ngOnChanges();
        expect(spectator.component.value).toBe('first:1');

        // новый инстанс колонки с другими prop/formatter -> смена ссылки входа -> пересчёт
        spectator.component.column = makeColumn({
            prop: 'b',
            formatter: (row, col, cellValue) => `second:${cellValue}`,
        });
        spectator.component.ngOnChanges();

        expect(spectator.component.value).toBe('second:2');
    });
});
