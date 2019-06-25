import { EvoTableComponent } from '@evo/ui-kit';
import { createTestComponentFactory, Spectator } from '@netbasal/spectator';

describe('EvoTableComponent', () => {
    let spectator: Spectator<EvoTableComponent>;
    const createComponent = createTestComponentFactory(EvoTableComponent);

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component instanceof EvoTableComponent).toBeTruthy();
    });

    it('should hide header', () => {
        spectator.setInput('showHeader', false);
        expect(spectator.query('.evo-table__row_head')).toBeNull();
    });

    it('should return event on row click', () => {
        const detectChanges = false;
        spectator = createComponent({}, detectChanges);
        const mouseEvent = new MouseEvent('');
        let output;
        spectator.output<{ type: string }>('rowClick').subscribe(result => output = result);

        spectator.component.onRowClick(1, 1, mouseEvent);
        spectator.detectChanges();

        expect(output).toEqual({
            payload: {rowIndex: 1, item: 1},
            event: mouseEvent,
        });
    });
});
